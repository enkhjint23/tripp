// Tripp service worker: works offline (trains, planes, roaming in China) and shows push notifications.
// Trip data itself syncs through Supabase and is never cached here.
const CACHE = "tripp-v4";
const SHELL = ["./", "./index.html", "./app.css?v=4", "./app.js?v=4", "./data.js?v=4", "./config.js?v=4", "./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/badge-96.png"];
const STATIC_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "cdn.jsdelivr.net", "upload.wikimedia.org"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE && !k.startsWith("tripp-files")).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  // The page and config: network first so updates arrive; cached copy when offline.
  if (req.mode === "navigate" || (sameOrigin && /config\.js/.test(url.pathname))) {
    const key = req.mode === "navigate" ? "./index.html" : req;
    e.respondWith(fetch(req)
      .then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(key, c)); return r; })
      .catch(() => caches.match(key, {ignoreSearch: req.mode === "navigate"})));
    return;
  }
  // Ticket files are kept by the page itself (cache "tripp-files-v1"); never touch them here.
  if (/\/__file\//.test(url.pathname)) return;
  // Code, icons, fonts, libraries and attraction photos: cache first.
  if (sameOrigin || STATIC_HOSTS.includes(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === "opaque") { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); }
      return r;
    })));
  }
});

// Push notifications from the tripp-push function: {title, body, tag, url}
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Tripp", {
    body: d.body || "",
    tag: d.tag || undefined,
    renotify: !!d.tag,
    icon: "icons/icon-192.png",
    badge: "icons/badge-96.png",
    data: { url: d.url || "./" },
    vibrate: [80, 40, 80]
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const target = new URL(e.notification.data && e.notification.data.url || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) { if (c.url.startsWith(self.registration.scope)) { c.navigate(target).catch(() => {}); return c.focus(); } }
    return self.clients.openWindow(target);
  }));
});
