// Offline support: the app opens with no signal (trains, planes, roaming in China).
// Trip data itself syncs through Supabase and is never cached here.
const CACHE = "sts-v6";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icon.svg"];
const STATIC_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "cdn.jsdelivr.net", "cdnjs.cloudflare.com"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;

  // The page and config: network first, so updates arrive; cached copy when offline.
  if (req.mode === "navigate" || (sameOrigin && url.pathname.endsWith("config.js"))) {
    const key = req.mode === "navigate" ? "./index.html" : req;
    e.respondWith(fetch(req)
      .then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(key, c)); return r; })
      .catch(() => caches.match(key)));
    return;
  }
  // Icons, fonts and libraries: cache first.
  if (sameOrigin || STATIC_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === "opaque") { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
      return r;
    })));
  }
  // Everything else (Supabase) goes straight to the network.
});
