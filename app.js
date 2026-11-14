"use strict";
/* Tripp — shared New Year trip planner. Same saved data and sync as the previous version, new look. */

/* ================= ICONS ================= */
const ICONS = {
 train:'<rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8 20l2-4M16 20l-2-4"/>',
 bus:'<rect x="4" y="3" width="16" height="14" rx="3"/><path d="M4 10h16M7 20v-3M17 20v-3"/><circle cx="8" cy="13.5" r=".6"/><circle cx="16" cy="13.5" r=".6"/>',
 plane:'<path d="M3 14l8-3V5a1.5 1.5 0 0 1 3 0v6l8 3v2l-8-2v4l2 2v1l-3.5-1L9 21v-1l2-2v-4l-8 2z"/>',
 boat:'<path d="M3 16l2 4h14l2-4H3zM12 3v13M12 4l6 9H12"/>',
 bed:'<path d="M3 19V6M3 14h18v5M21 14a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="11" r="1.5"/>',
 food:'<path d="M7 3v18M5 3v5a2 2 0 0 0 4 0V3M17 21V3c-2 1-3 4-3 8h3"/>',
 spark:'<path d="M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z"/>',
 wallet:'<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 14.5h2"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 today:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/>',
 map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14"/>',
 crew:'<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M16 15c2.8 0 5 1.6 5 4"/>',
 heart:'<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
 edit:'<path d="M4 20h4L19 9l-4-4L4 16v4zM14 6l4 4"/>',
 trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
 x:'<path d="M6 6l12 12M18 6L6 18"/>',
 link:'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
 share:'<path d="M12 3v12M7 8l5-5 5 5M5 14v5h14v-5"/>',
 copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
 bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2zM10 21h4"/>',
 pin:'<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2"/>',
 ticket:'<path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4V7zM10 7v10"/>',
 doc:'<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/>',
 phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
 moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
 party:'<path d="M4 20l5-14 9 9-14 5zM14 4v2M18 6l-1 1M20 10h-2M15 9l3-3"/>',
 walk:'<circle cx="13" cy="4" r="2"/><path d="M9 21l2-6 2 2v4M7 12l3-4 4 1 2 3M11 15l-1-5"/>',
 temple:'<path d="M3 21h18M5 21V11M19 21V11M3 11h18L12 4 3 11zM9 21v-5h6v5"/>',
 museum:'<path d="M3 21h18M4 10h16L12 4 4 10zM6 10v8M10 10v8M14 10v8M18 10v8"/>',
 leaf:'<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15M5 19l7-7"/>',
 bag:'<path d="M5 8h14l-1 13H6L5 8zM9 8V6a3 3 0 0 1 6 0v2"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
 arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
 plug:'<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8zM12 18v4"/>',
 sos:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>',
 chat:'<path d="M4 5h16v11H9l-5 4V5z"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 refresh:'<path d="M20 11a8 8 0 0 0-14-4L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2M20 20v-5h-5"/>',
 door:'<path d="M14 3H5v18h9M10 12h11M17 8l4 4-4 4"/>'
};
const ico = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ICONS.spark}</svg>`;

/* ================= STATE (same keys and shape as before) ================= */
const KEY = "sts:v1", ME = "sts:me", THEME = "sts:theme2";
const now = () => Date.now();
function freshState() {
 return {v:1, people:[0,1,2,3].map(i => ({id:"p"+(i+1), name:"Найз "+(i+1), color:"", ts:0})),
  rates:{USD:3590, CNY:530, THB:110, ts:0}, tasks:{}, expenses:{}, actuals:{}, pack:{}, extraPack:{}, days:{}, places:{}, sights:{}, votes:{}, res:{}, seen:{}};
}
const ls = {get(k){try{return localStorage.getItem(k)}catch(e){return null}}, set(k,v){try{localStorage.setItem(k,v)}catch(e){}}, del(k){try{localStorage.removeItem(k)}catch(e){}}};
let S = (() => { try { const s = JSON.parse(ls.get(KEY)); if (s && s.v === 1) return Object.assign(freshState(), s); } catch(e) {} return freshState(); })();
let me = ls.get(ME);
const PRES = {on:new Set(), ready:false, key:Math.random().toString(36).slice(2,10)};
const save = () => ls.set(KEY, JSON.stringify(S));
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const uid = () => Math.random().toString(36).slice(2,8) + now().toString(36).slice(-4);
const person = id => S.people.find(p => p.id === id);
const initials = n => (n || "?").trim().split(/\s+/).map(w => w[0]).join("").slice(0,2).toUpperCase();
const hueOf = id => CREW_HUES[Math.max(0, S.people.findIndex(p => p.id === id)) % CREW_HUES.length];
const av = (id, cls = "") => { const p = person(id); return p ? `<span class="av c-${hueOf(id)} ${cls}" title="${esc(p.name)}">${esc(initials(p.name))}</span>` : `<span class="av nobody ${cls}">?</span>`; };
const rate = c => c === "MNT" ? 1 : (+S.rates[c] || 1);
const toMNT = (a, c) => (+a || 0) * rate(c);
const fmt = (n, d = 0) => (+n || 0).toLocaleString("en-US", {maximumFractionDigits:d, minimumFractionDigits:d});
const money = (n, c = "MNT") => c === "MNT" ? fmt(n) + " ₮" : SYM[c] + fmt(n, c === "USD" ? 2 : 0).replace(/\.00$/, "");

/* ================= DATES ================= */
const WD = ["Ня","Да","Мя","Лх","Пү","Ба","Бя"];
const WDL = ["Ням","Даваа","Мягмар","Лхагва","Пүрэв","Баасан","Бямба"];
const dObj = iso => new Date(iso + "T12:00:00Z");
const dow = iso => WD[dObj(iso).getUTCDay()];
const dnum = iso => iso.slice(8, 10);
const ddot = iso => `${+iso.slice(8,10)}.${iso.slice(5,7)}`;
const dlong = iso => { const d = dObj(iso); return `${d.getUTCMonth()+1}-р сарын ${d.getUTCDate()}, ${WDL[d.getUTCDay()]}`; };
const addDays = (iso, n) => { const d = dObj(iso); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0,10); };
const todayISO = () => { const d = new Date(), z = n => String(n).padStart(2,"0"); return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}`; };
const ISO = /^\d{4}-\d\d-\d\d$/;
const tzs = n => "UTC" + (n >= 0 ? "+" : "−") + Math.abs(n);
const sg = v => v > 0 ? "+" + v : v < 0 ? "−" + (-v) : "0";

/* ================= PLAN ================= */
function place(k) { if (!k) return null; const c = S.places && S.places[k]; if (c && !c.deleted && c.n) return c; return PLACES[k] || GAZ[k] || null; }
const pname = k => place(k)?.n || "Тодорхойгүй";
const SHORT = {"Улаанбаатар":"УБ"};
const pshort = k => SHORT[pname(k)] || pname(k);
function dayList() {
 const m = new Map(); DAYS.forEach(d => m.set(d.date, d));
 Object.entries(S.days || {}).forEach(([k, v]) => { if (!ISO.test(k) || !v || typeof v !== "object") return; if (v.deleted) m.delete(k); else m.set(k, {...v, date:k}); });
 const out = [...m.values()].sort((a, b) => a.date.localeCompare(b.date)); return out.length ? out : [DAYS[0]];
}
const movesOf = d => Array.isArray(d?.moves) ? d.moves.filter(m => Array.isArray(m) && m[0] && m[1]) : [];
const stepsOf = d => Array.isArray(d?.steps) ? d.steps.filter(Array.isArray) : [];
function seqOf(d) { const s = []; movesOf(d).forEach(([a, b]) => { if (s[s.length-1] !== a) s.push(a); s.push(b); }); return s; }
const startCity = d => movesOf(d)[0]?.[0] || d.stay || "";
const endCity = d => { const m = movesOf(d); return m.length ? m[m.length-1][1] : (d.stay || ""); };
function routeText(d) { const s = seqOf(d); if (s.length) return s.map(pname).join(" → "); return d.stay ? pname(d.stay) : (d.note || ""); }
function tzText(d) { const a = place(startCity(d))?.tz, b = place(endCity(d))?.tz; if (a == null && b == null) return ""; if (a == null || b == null || a === b) return tzs(a ?? b); return tzs(a) + " → " + tzs(b); }
function legs() { const o = []; dayList().forEach(d => movesOf(d).forEach(([a, b, m, dep, arr]) => { if (a !== b) o.push({a, b, m: MODES[m] ? m : "plane", d: d.date, dep, arr}); })); return o; }
function routeCities() { const k = []; const add = x => { if (x && place(x) && !k.includes(x)) k.push(x); }; dayList().forEach(d => { seqOf(d).forEach(add); add(d.stay); }); return k; }
const homeCity = () => movesOf(dayList()[0])[0]?.[0] || "";
function cityStays() {
 const home = homeCity(), ds = dayList();
 return routeCities().filter(k => k !== home || ds.some(d => d.stay === k)).map(k => ({k,
  nights: ds.filter(d => d.stay === k).map(d => d.date),
  dates: ds.filter(d => d.stay === k || seqOf(d).includes(k)).map(d => d.date)}));
}
const isNYE = iso => iso === "2026-12-31";
function sightList() { const m = new Map(); SIGHTS.forEach(s => m.set(s.id, s));
 Object.entries(S.sights || {}).forEach(([id, v]) => { if (!v || typeof v !== "object") return; if (v.deleted) m.delete(id); else if (v.n && v.city) m.set(id, {...v, id}); }); return [...m.values()]; }
const votesFor = id => S.people.filter(p => S.votes && S.votes[id + "." + p.id]?.v).map(p => p.id);
const mapsURL = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
function tripPhase(t = now()) { if (t < T_DEPART.getTime()) return "before"; if (t < T_HOME.getTime()) return "during"; return "after"; }
function defaultDay() { const ds = dayList(), t = todayISO(); if (ds.some(d => d.date === t)) return t; return t < ds[0].date ? ds[0].date : ds[ds.length-1].date; }
const stepKey = (date, i) => "s:" + date + ":" + i;
const stepDone = (date, i) => !!S.tasks[stepKey(date, i)]?.done;
const parseHM = s => { const m = String(s || "").match(/(\d{1,2}):(\d{2})/); return m ? (+m[1]) * 60 + (+m[2]) : null; };

/* Bookings */
const RT = {plane:["Нислэг","plane"], train:["Галт тэрэг","train"], bus:["Автобус","bus"], boat:["Завь","boat"], hotel:["Буудал","bed"]};
const resList = () => Object.entries(S.res || {}).filter(([, r]) => r && typeof r === "object" && !r.deleted && RT[r.type]).map(([id, r]) => ({id, ...r}));
const legKey = l => `${l.d}|${l.a}|${l.b}`;
function legItems() { const rs = resList(); return legs().map(l => ({l, key: legKey(l), r: rs.find(r => r.type !== "hotel" && r.leg === legKey(l))})); }
function stayItems() { const rs = resList(); return cityStays().filter(c => c.nights.length).map(c => ({c, key: c.k, inD: c.nights[0], outD: addDays(c.nights[c.nights.length-1], 1), r: rs.find(r => r.type === "hotel" && r.stay === c.k)})).sort((a, b) => a.inD.localeCompare(b.inD)); }
function extraRes() { const li = legItems().map(x => x.r?.id), si = stayItems().map(x => x.r?.id);
 return resList().filter(r => !li.includes(r.id) && !si.includes(r.id)).sort((a, b) => (a.depD || a.inD || "").localeCompare(b.depD || b.inD || "")); }
const safeURL = u => /^https?:\/\//i.test(u || "") ? u : "";
function searchLinks(l) {
 const A = place(l.a)?.en || pname(l.a), B = place(l.b)?.en || pname(l.b);
 if (l.m === "train" && /ulaanbaatar|zamyn/i.test(A + B)) return [["УБТЗ тасалбар", "https://eticket.ubtz.mn/"]];
 if (l.m === "plane") return [["Google Flights", `https://www.google.com/travel/flights?q=${encodeURIComponent(`Flights from ${A} to ${B} on ${l.d}`)}`], ["Trip.com", `https://www.trip.com/flights/`]];
 return [["Хайх", "https://www.google.com/search?q=" + encodeURIComponent(`${A} to ${B} ${l.m} tickets`)]];
}
function hotelLinks(city, inD, outD) {
 const c = encodeURIComponent(place(city)?.en || pname(city)), n = S.people.length;
 return [["Booking", `https://www.booking.com/searchresults.html?ss=${c}&checkin=${inD}&checkout=${outD}&group_adults=${n}&no_rooms=2`],
  ["Airbnb", `https://www.airbnb.com/s/${c}/homes?checkin=${inD}&checkout=${outD}&adults=${n}`],
  ["Agoda", `https://www.agoda.com/search?textToSearch=${c}&checkIn=${inD}&checkOut=${outD}&adults=${n}&rooms=2`]];
}

/* ================= EFFECTS: confetti ================= */
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function cssVar(n) { return getComputedStyle(document.documentElement).getPropertyValue("--" + n).trim() || "#ffc94d"; }
function confetti(opts = {}) {
 if (reduced()) return;
 let x = opts.x, y = opts.y;
 if (opts.el) { const r = opts.el.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
 if (x == null) { x = innerWidth / 2; y = innerHeight / 3; }
 const c = document.createElement("canvas"), dpr = devicePixelRatio || 1;
 c.style.cssText = "position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:99";
 c.width = innerWidth * dpr; c.height = innerHeight * dpr; document.body.appendChild(c);
 const g = c.getContext("2d"); g.scale(dpr, dpr);
 const cols = ["gold","magenta","cyan","lilac","lime","tangerine"].map(cssVar), n = opts.count || 140, burst = opts.spread === "burst", P = [];
 for (let i = 0; i < n; i++) { const a = -Math.PI/2 + (Math.random() - .5) * Math.PI * (burst ? 2 : 1.1), s = (burst ? 3 : 5) + Math.random() * 8;
  P.push({x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, r: Math.random() * 6.28, vr: (Math.random() - .5) * .4, w: 5 + Math.random() * 6, h: 8 + Math.random() * 8, c: cols[i % cols.length], k: i % 7 === 0 ? "star" : i % 3 === 0 ? "dot" : "rect"}); }
 const t0 = performance.now();
 const star = r => { g.beginPath(); for (let k = 0; k < 8; k++) { const rr = k % 2 ? r * .35 : r, an = k * Math.PI / 4; g.lineTo(Math.cos(an) * rr, Math.sin(an) * rr); } g.closePath(); g.fill(); };
 (function frame(t) { const el = (t - t0) / 1000; let alive = false; g.clearRect(0, 0, innerWidth, innerHeight);
  for (const p of P) { p.vy += .22; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
   const al = Math.max(0, 1 - Math.max(0, el - 1.2) / .8); if (al > 0 && p.y < innerHeight + 20) alive = true;
   g.save(); g.globalAlpha = al; g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c;
   if (p.k === "rect") g.fillRect(-p.w/2, -p.h/4, p.w, p.h/2); else if (p.k === "dot") { g.beginPath(); g.arc(0, 0, p.w/2, 0, 6.283); g.fill(); } else { g.shadowColor = p.c; g.shadowBlur = 12; star(p.w); }
   g.restore(); }
  if (alive && el < 2.4) requestAnimationFrame(frame); else c.remove(); })(t0);
}
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2600); }
async function copyText(t) { try { await navigator.clipboard.writeText(t); toast("Хуулагдлаа"); } catch(e) { prompt("Хуулаарай:", t); } }

/* ================= THEME ================= */
function applyTheme() { const t = ls.get(THEME) || "midnight"; document.documentElement.dataset.theme = t; $("meta[name=theme-color]")?.setAttribute("content", t === "day" ? "#fbf8f1" : "#080915"); }

/* ================= VIEW STATE ================= */
const TABS = [["today","Өнөөдөр","today"],["route","Маршрут","map"],["money","Мөнгө","wallet"],["crew","Баг","crew"]];
let view = (() => { const h = location.hash.slice(1); return TABS.some(t => t[0] === h) ? h : "today"; })();
let selDay = null, routeSeg = ls.get("sts:rseg") || "map", moneySeg = "spend", crewSeg = "crew", heroMode = "auto", seeCity = "", packFor = null, notifState = "…";

function go(v, push = true) {
 if (!TABS.some(t => t[0] === v)) v = "today"; view = v;
 if (push) history.replaceState(null, "", "#" + v);
 render(); scrollTo({top: 0});
}
function renderNav() {
 $("#tabs").innerHTML = TABS.map(([k, n, i]) => `<button class="tab" type="button" data-go="${k}" ${view === k ? 'aria-current="page"' : ""}>${ico(i)}${n}${k === "crew" && openTasks() ? `<span class="badge">${openTasks()}</span>` : ""}</button>`).join("");
}
const openTasks = () => TASKS.filter(t => t.p && !S.tasks[t.id]?.done).length;
function render() { renderTop(); renderNav(); const v = $("#view"); v.className = "view"; void v.offsetWidth; v.innerHTML = ({today: todayHTML, route: routeHTML, money: moneyHTML, crew: crewHTML})[view](); afterRender(); }
function rerender() { renderTop(); renderNav(); const y = scrollY; $("#view").innerHTML = ({today: todayHTML, route: routeHTML, money: moneyHTML, crew: crewHTML})[view](); afterRender(); scrollTo({top: y}); }
function afterRender() {
 renderCount();
 const d = $("#days [aria-pressed=true]"); if (d) d.scrollIntoView({inline: "center", block: "nearest"});
 if (view === "crew" && crewSeg === "crew") refreshNotif();
}

/* ================= TOP BAR ================= */
const syncLabel = () => ({off:"Синкгүй", syncing:"Синк…", live:"Шууд", offline:"Офлайн", error:"Алдаа"})[SYNC.state];
function renderTop() {
 const m = person(me);
 $("#topR").innerHTML = `<button class="pill ${SYNC.state}" type="button" data-act="sync" title="${esc(SYNC.msg || syncLabel())}"><i></i>${syncLabel()}</button>
 <button class="me" type="button" data-act="who">${m ? av(me) + `<span>${esc(m.name)}</span>` : `<span class="av nobody">?</span><span>Та хэн бэ?</span>`}</button>`;
}

/* ================= TODAY ================= */
function garland() {
 const pts = [[36,18.5],[71.8,24.3],[107.6,25.5],[143.4,22.1],[214.6,22.1],[250.4,25.5],[286.2,24.3],[322,18.5]], cols = ["gold","magenta","cyan","lime","lilac","tangerine","gold","magenta"];
 return `<svg class="garland" viewBox="0 0 358 52" preserveAspectRatio="none" aria-hidden="true"><path class="wire" d="M0 8 Q90 40 179 14 Q268 40 358 8"/>${pts.map(([x, y], i) => `<rect x="${x-2}" y="${y-1}" width="4" height="5" rx="1" fill="#6a6d8c"/><ellipse class="bulb c-${cols[i]}" cx="${x}" cy="${y+9}" rx="4.5" ry="6"/>`).join("")}</svg>`;
}
function heroTarget() {
 const t = now(), ph = tripPhase(t);
 let mode = heroMode === "auto" ? (ph === "before" ? "trip" : t < T_NYE.getTime() ? "nye" : "home") : heroMode;
 if (mode === "trip" && t >= T_DEPART.getTime()) mode = t < T_NYE.getTime() ? "nye" : "home";
 if (mode === "nye" && t >= T_NYE.getTime() + 3600e3) mode = "home";
 return {mode, ...({
  trip:{at:T_DEPART, eye:"Аялал хүртэл", title:"Галт тэрэг хөдлөх хүртэл", foot:"<b>24.12 · 16:40</b> Улаанбаатар"},
  nye:{at:T_NYE, eye:"Шинэ жил хүртэл", title:"2027 руу тоолъё", foot:"<b>31.12 · 00:00</b> UTC+7 · Пхукет"},
  home:{at:T_HOME, eye:"Гэр хүртэл", title:"Сүүлийн мөчүүдийг мэдэр", foot:"<b>04.01 · 21:55</b> Улаанбаатар"}
 })[mode]};
}
function heroHTML() {
 const h = heroTarget(), ph = tripPhase();
 const sw = ph === "before" ? `<div class="hero-switch" role="group" aria-label="Тоолуур">${[["trip","Аялал"],["nye","Шинэ жил"]].map(([k, n]) => `<button type="button" data-hero="${k}" aria-pressed="${h.mode === k}">${n}</button>`).join("")}</div>` : "";
 if (ph === "after") return `<section class="hero">${garland()}<span class="eyebrow">2027</span><h2 class="hero-title">Тавтай морил гэртээ!</h2><div class="hero-foot"><span>Мөнгөний тооцоогоо хаагаарай.</span><button class="btn primary" data-go="money">Тооцоо</button></div></section>`;
 return `<section class="hero" id="hero">${garland()}
  <div class="hero-top"><span class="eyebrow">${h.eye}</span>${sw}</div>
  <h2 class="hero-title">${h.title}</h2>
  <div class="count">${[["d","өдөр"],["h","цаг"],["m","мин"],["s","сек"]].map(([k, n]) => `<div class="cell"><b data-u="${k}">–</b><span>${n}</span></div>`).join("")}</div>
  <div class="hero-foot"><span>${h.foot}</span><button class="btn primary" type="button" data-act="celebrate">${ico("spark","sm")} Баярлах</button></div>
 </section>`;
}
let lastZero = "";
function renderCount() {
 const root = $("#hero"); if (!root) return;
 const h = heroTarget(), d = Math.max(0, h.at.getTime() - now()), s = Math.floor(d / 1000);
 const v = {d: Math.floor(s / 86400), h: Math.floor(s % 86400 / 3600), m: Math.floor(s % 3600 / 60), s: s % 60};
 for (const k in v) { const el = root.querySelector(`[data-u="${k}"]`); if (!el) continue; const t = k === "d" ? String(v[k]) : String(v[k]).padStart(2, "0"); if (el.textContent !== t) { el.textContent = t; el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); } }
 if (d === 0 && lastZero !== h.mode) { lastZero = h.mode; confetti({el: root, count: 260, spread: "burst"}); setTimeout(() => confetti({count: 200, spread: "burst"}), 700); }
}
function dayStrip(sel) {
 const t = todayISO();
 return `<div class="days" id="days">${dayList().map(d => {
  const city = isNYE(d.date) ? "2027" : d.stay ? pshort(d.stay) : (d.note && d.note.length <= 7 ? d.note : "Замд");
  const cls = ["day", d.date < t ? "past" : "", d.date === t ? "today" : "", isNYE(d.date) ? "nye" : ""].join(" ");
  return `<button class="${cls}" type="button" data-day="${d.date}" aria-pressed="${d.date === sel}"><span class="dow">${dow(d.date)}</span><span class="num">${dnum(d.date)}</span><span class="city">${esc(city)}</span></button>`; }).join("")}</div>`;
}
/* The day's items: steps, with matching bookings shown on them */
function dayItems(d) {
 const steps = stepsOf(d), mv = movesOf(d), rs = resList(), used = new Set();
 const items = steps.map((s, i) => ({i, kind: s[0], time: s[1] || "", text: s[2] || ""}));
 mv.forEach(([a, b, m, dep]) => {
  const key = `${d.date}|${a}|${b}`, r = rs.find(x => x.type !== "hotel" && x.leg === key);
  let it = items.find(x => !used.has(x.i) && x.kind === m && (!dep || x.time === dep)) || items.find(x => !used.has(x.i) && x.kind === m);
  if (it) { used.add(it.i); it.leg = {a, b, m, key}; it.res = r; }
 });
 const firstNight = d.stay && dayList().find(x => x.stay === d.stay)?.date === d.date;
 if (firstNight) { const it = items.find(x => x.kind === "hotel"); if (it) { it.stay = d.stay; it.res = rs.find(x => x.type === "hotel" && x.stay === d.stay); } }
 return items;
}
function todayHTML() {
 const ds = dayList(); if (!selDay || !ds.some(d => d.date === selDay)) selDay = defaultDay();
 const d = ds.find(x => x.date === selDay), t = todayISO(), isToday = d.date === t;
 const items = dayItems(d);
 let nowI = -1;
 if (isToday) { const mins = new Date().getHours() * 60 + new Date().getMinutes(); items.forEach((it, k) => { const m = parseHM(it.time); if (m != null && m <= mins) nowI = k; }); if (nowI < 0) nowI = items.findIndex(it => !stepDone(d.date, it.i)); }
 const doneN = items.filter(it => stepDone(d.date, it.i)).length;
 const litTo = isToday ? Math.max(nowI, doneN - 1) : d.date < t ? items.length - 1 : doneN - 1;
 const lit = items.length > 1 ? Math.max(0, litTo) / (items.length - 1) * 100 : 0;
 const tz = tzText(d), city = endCity(d) || d.stay, p = place(city);
 const sights = sightList().filter(s => s.day === d.date);
 return `
 <div class="row" style="justify-content:space-between;margin-top:var(--space-4)"><span class="eyebrow muted">${isToday ? "Өнөөдөр · " : ""}${dlong(d.date)}</span>${crewAvs()}</div>
 ${banner()}
 ${dayStrip(selDay)}
 ${heroHTML()}
 ${notifPrompt()}
 <div class="section" style="margin-top:var(--space-6)"><div class="dayhead grow"><div class="grow">
  <h1 class="h1" style="margin:0">${esc(d.title || routeText(d))}</h1>
  <div class="meta"><span>Өдөр ${ds.indexOf(d) + 1}/${ds.length}</span>${routeText(d) ? `<span>${esc(routeText(d))}</span>` : ""}${tz ? `<span>${tz}</span>` : ""}${p && p.hi != null ? `<span>${sg(p.lo)}° … ${sg(p.hi)}°</span>` : ""}</div>
 </div><button class="iconbtn" type="button" data-act="editday" aria-label="Өдрийг засах">${ico("edit","sm")}</button></div></div>
 ${d.tip ? `<div class="tip">${ico("spark")}<span>${esc(d.tip)}</span></div>` : ""}
 ${items.length ? `<div class="tl" style="--lit:${lit}%"><span class="tl-lit"></span>${items.map((it, k) => {
  const done = stepDone(d.date, it.i), c = STEP_CAT[it.kind] || "activity";
  const cls = ["tl-item", "c-" + c, done ? "done" : "", k <= litTo ? "lit" : "", isToday && k === nowI && !done ? "now" : ""].join(" ");
  let extra = "";
  if (it.leg) extra = it.res ? `<span class="booked">${ico("check","sm")} Захиалсан${it.res.code ? ` · <span class="mono">${esc(it.res.code)}</span>` : ""}</span>` : `<span class="booked no">Захиалаагүй</span>`;
  else if (it.stay) extra = it.res ? `<span class="booked">${ico("check","sm")} ${esc(it.res.name || "Захиалсан")}</span>` : `<span class="booked no">Буудал захиалаагүй</span>`;
  return `<div class="${cls}"><span class="tl-time">${esc(it.time)}</span><span class="tl-node"></span>
   <div class="stop"><div class="tile">${ico(STEP[it.kind]?.[1] || "spark")}</div>
   <button class="stop-body" type="button" style="background:none;border:0;padding:0;text-align:left" data-step="${it.i}" ${it.leg ? `data-leg="${esc(it.leg.key)}"` : ""} ${it.stay ? `data-stay="${esc(it.stay)}"` : ""}>${isToday && k === nowI && !done ? '<span class="live">ОДОО</span>' : ""}<div class="stop-title">${esc(it.text)}</div>${extra}</button>
   <button class="check" type="button" data-check="${it.i}" aria-label="${done ? "Болоогүй болгох" : "Болсон"}" aria-pressed="${done}">${ico("check")}</button></div></div>`; }).join("")}</div>`
  : `<div class="card empty" style="margin-top:var(--space-4)"><b>Энэ өдөр хоосон байна</b>Юм нэмэх үү?</div>`}
 <div class="row" style="margin-top:var(--space-3)"><button class="btn ghost sm" type="button" data-act="addstep">${ico("plus","sm")} Алхам нэмэх</button></div>
 ${sights.length ? `<div class="section"><h2 class="h2">Энэ өдөр үзэх</h2><button class="link" data-go="route" data-rseg="see">Бүгд</button></div><div class="stack">${sights.map(sightCard).join("")}</div>` : ""}
 `;
}
function crewAvs() { const live = !!SYNC.code; return `<div class="avs">${S.people.map(p => av(p.id, live ? (PRES.on.has(p.id) ? "on" : !S.seen?.[p.id] ? "off" : "") : "")).join("")}</div>`; }

/* ================= ROUTE ================= */
function routeHTML() {
 const segs = [["map","Маршрут"],["see","Үзэх газрууд"],["book","Захиалга"]];
 let h = `<h1 class="h1" style="margin-top:var(--space-4)">Маршрут</h1><div class="seg" role="group">${segs.map(([k, n]) => `<button type="button" data-rseg="${k}" aria-pressed="${routeSeg === k}">${n}</button>`).join("")}</div>`;
 if (routeSeg === "map") h += mapHTML() + citiesHTML();
 if (routeSeg === "see") h += seeHTML();
 if (routeSeg === "book") h += bookHTML();
 return h;
}
function mapHTML() {
 const cities = routeCities().filter(k => { const p = place(k); return p && isFinite(p.lat) && isFinite(p.lon); });
 if (cities.length < 2) return "";
 const W = 326, PAD = 34, ps = cities.map(k => place(k));
 const lat0 = ps.reduce((a, p) => a + p.lat, 0) / ps.length, kx = Math.cos(lat0 * Math.PI / 180);
 const xs = ps.map(p => p.lon * kx), ys = ps.map(p => -p.lat);
 const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
 const sc = Math.min((W - 2 * PAD - 60) / Math.max(1e-6, maxX - minX), 420 / Math.max(1e-6, maxY - minY));
 const H = Math.round((maxY - minY) * sc + 2 * PAD + 20);
 const ox = (W - (maxX - minX) * sc) / 2;
 const P = {}; cities.forEach((k, i) => P[k] = [ox + (xs[i] - minX) * sc, PAD + (ys[i] - minY) * sc]);
 const t = todayISO(), home = homeCity();
 const ls_ = legs().filter(l => P[l.a] && P[l.b]);
 const curve = (l, i) => { const [x1, y1] = P[l.a], [x2, y2] = P[l.b]; if (l.m !== "plane") return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`;
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy), bend = l.b === home ? .45 : .22, sgn = (i % 2 ? -1 : 1) * (l.b === home ? -1 : 1);
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${(mx - dy / len * len * bend * sgn).toFixed(1)} ${(my + dx / len * len * bend * sgn).toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`; };
 const paths = ls_.map((l, i) => ({l, d: curve(l, i)}));
 const all = paths.map((p, i) => i ? p.d.replace(/^M[^LQ]+/, "") : p.d).join(" ");
 const ph = tripPhase();
 let s = `<section class="map"><div class="map-head"><h3>${cities.length} хот</h3><span class="map-stats">${dayList().length} өдөр · ${ls_.filter(l => l.m === "plane").length} нислэг</span></div>
 <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Маршрут: ${esc(cities.map(pname).join(", "))}"><defs><pattern id="dg" width="18" height="18" patternUnits="userSpaceOnUse"><circle class="dotgrid" cx="2" cy="2" r="1.1"/></pattern></defs><rect width="${W}" height="${H}" fill="url(#dg)"/>`;
 paths.forEach(p => s += `<path class="leg-base" d="${p.d}"/>`);
 paths.forEach(p => { const c = p.l.b === home ? "magenta" : p.l.m === "plane" ? "gold" : "cyan"; const dim = ph === "during" && p.l.d > t; s += `<path class="leg-lit c-${c}${p.l.b === home ? " home" : ""}${dim ? " dim" : ""}" d="${p.d}"/>`; });
 s += `<path id="allroute" d="${all}" fill="none"/>`;
 const hues = ["gold","cyan","tangerine","magenta","lime","lilac","cyan","tangerine"];
 const placed = [];
 cities.forEach((k, i) => {
  const [x, y] = P[k], c = hues[i % hues.length], st = cityStays().find(z => z.k === k);
  const date = k === home ? `${ddot(dayList()[0].date)} · ${ddot(dayList().at(-1).date)}` : st?.nights.length ? `${ddot(st.nights[0])}–${ddot(addDays(st.nights.at(-1), 1))}` : st?.dates.length ? ddot(st.dates[0]) : "";
  let right = x < W * .62; const near = placed.find(q => Math.abs(q.y - y) < 30 && Math.abs(q.x - x) < 120 && q.right === right); if (near) right = !right; placed.push({x, y, right});
  const tx = right ? x + 14 : x - 14, anc = right ? "start" : "end";
  s += `<circle class="halo c-${c}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13"/><circle class="bulb c-${c}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="5.5"/>
  <text class="city" x="${tx.toFixed(1)}" y="${(y + 2).toFixed(1)}" text-anchor="${anc}">${esc(pname(k))}</text><text class="date" x="${tx.toFixed(1)}" y="${(y + 15).toFixed(1)}" text-anchor="${anc}">${date}</text>
  ${st?.nights.includes("2026-12-31") ? `<text class="tag" x="${tx.toFixed(1)}" y="${(y - 11).toFixed(1)}" text-anchor="${anc}">ШИНЭ ЖИЛ</text>` : ""}
  <circle class="hit" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="22" data-city="${k}"/>`;
 });
 s += `<circle class="spark" r="3"><animateMotion dur="${Math.max(8, ls_.length * 1.8)}s" repeatCount="indefinite"><mpath href="#allroute"/></animateMotion></circle></svg>
 <div class="map-legend"><span class="c-cyan"><i></i>Газраар</span><span class="c-gold"><i></i>Нислэг</span><span class="c-magenta"><i></i>Гэр лүүгээ</span></div></section>`;
 return s;
}
function citiesHTML() {
 return `<div class="section"><h2 class="h2">Хотууд</h2><span class="muted" style="font-size:13px">Дарж дэлгэрэнгүйг</span></div><div class="stack">${cityStays().map((c, i) => { const p = place(c.k);
  const sub = c.nights.length ? `${ddot(c.nights[0])}–${ddot(addDays(c.nights.at(-1), 1))} · ${c.nights.length} шөнө` : c.dates.length ? `Дамжина · ${ddot(c.dates.at(-1))}` : "";
  return `<button class="cityrow c-${["cyan","tangerine","magenta","lime","lilac","gold"][i % 6]}" type="button" data-city="${c.k}"><span class="dot"></span><div class="grow"><div class="n">${esc(pname(c.k))}</div><div class="s">${sub} · ${tzs(p.tz)}</div></div>${p.hi != null ? `<span class="temp">${sg(p.hi)}°<br><span class="muted">${sg(p.lo)}°</span></span>` : ""}</button>`; }).join("")}</div>`;
}
function sightCard(s) {
 const k = SK[s.k] || SK.see, v = votesFor(s.id), mine = me && v.includes(me), dl = s.day ? dayList().find(d => d.date === s.day) : null;
 return `<div class="sight c-${k[2]}"><div class="tile">${ico(k[1])}</div><div style="min-width:0"><div class="t">${esc(s.n)}</div>${s.d ? `<div class="d">${esc(s.d)}</div>` : ""}
  <div class="m">${dl ? `<span class="tag on">${ico("today","sm")}${ddot(s.day)}</span>` : ""}${s.cost ? `<span class="tag">${esc(s.cost)}</span>` : ""}<a class="tag" href="${mapsURL(s.n + " " + (place(s.city)?.en || ""))}" target="_blank" rel="noopener">${ico("pin","sm")}Газрын зураг</a><button class="tag" type="button" data-editsight="${s.id}">${ico("edit","sm")}Засах</button></div>
  ${v.length ? `<div class="avs" style="margin-top:8px">${v.map(id => av(id, "sm")).join("")}</div>` : ""}</div>
  <button class="vote" type="button" data-vote="${s.id}" aria-pressed="${!!mine}" aria-label="Би явна">${ico("heart")}${v.length || ""}</button></div>`;
}
function seeHTML() {
 const cs = cityStays().filter(c => sightList().some(s => s.city === c.k) || c.nights.length).map(c => c.k);
 if (seeCity && !cs.includes(seeCity)) seeCity = "";
 const list = sightList().filter(s => !seeCity || s.city === seeCity).sort((a, b) => votesFor(b.id).length - votesFor(a.id).length || (a.day || "9").localeCompare(b.day || "9"));
 return `<div class="chips" style="margin:var(--space-3) 0">${[["", "Бүгд"], ...cs.map(k => [k, pname(k)])].map(([k, n]) => `<button class="chip noi c-gold" type="button" data-seecity="${k}" aria-pressed="${seeCity === k}">${esc(n)}</button>`).join("")}</div>
 <p class="muted" style="font-size:13px;margin:0 0 var(--space-3)">Явмаар байгаа газраа ${ico("heart","sm")} дарж тэмдэглээрэй. Бүгд хэнийг сонгосныг харна.</p>
 <div class="stack">${list.map(sightCard).join("") || `<div class="card empty"><b>Одоогоор газар алга</b>Нэмэх товчоор өөрийнхөө санааг нэм.</div>`}</div>
 <button class="btn ghost block" type="button" data-act="addsight" style="margin-top:var(--space-3)">${ico("plus","sm")} Газар нэмэх</button>`;
}
function resLine(r) {
 if (!r) return "";
 const bits = [];
 if (r.type === "hotel") { if (r.name) bits.push(esc(r.name)); if (r.inD) bits.push(`${ddot(r.inD)}${r.inT ? " " + esc(r.inT) : ""} → ${r.outD ? ddot(r.outD) : ""}${r.outT ? " " + esc(r.outT) : ""}`); }
 else { if (r.carrier) bits.push(esc(r.carrier)); if (r.depT) bits.push(`${esc(r.depT)}${r.arrT ? "–" + esc(r.arrT) : ""}`); }
 if (r.price) bits.push(money(r.price, r.cur));
 if (r.by && person(r.by)) bits.push(esc(person(r.by).name));
 return bits.join(" · ");
}
function bookCard({icon, c, title, sub, r, actions}) {
 return `<div class="card c-${c}" style="padding:var(--space-3)"><div class="row"><div class="tile">${ico(icon)}</div><div class="grow"><div class="h3">${title}</div><div class="sub">${sub}</div></div>${r ? `<span class="booked">${ico("check","sm")} Бэлэн</span>` : `<span class="booked no">Захиалаагүй</span>`}</div>
 ${r ? `<div class="sub" style="margin-top:8px;color:var(--ink)">${resLine(r)}</div>${r.code ? `<button class="tag on" style="margin-top:8px" type="button" data-copy="${esc(r.code)}">${ico("copy","sm")}<span class="mono">${esc(r.code)}</span></button>` : ""}${r.note ? `<div class="sub" style="margin-top:6px">${esc(r.note)}</div>` : ""}` : ""}
 <div class="chips" style="margin-top:10px">${actions}</div></div>`;
}
function bookHTML() {
 const li = legItems(), si = stayItems(), ex = extraRes();
 const doneN = li.filter(x => x.r).length + si.filter(x => x.r).length, all = li.length + si.length;
 let h = `<div class="card" style="margin:var(--space-3) 0"><div class="row" style="justify-content:space-between"><span class="h3">${doneN}/${all} захиалсан</span><span class="muted mono" style="font-size:12px">${Math.round(doneN / Math.max(1, all) * 100)}%</span></div><div class="progress" style="margin-top:10px"><span style="width:${doneN / Math.max(1, all) * 100}%"></span></div></div>`;
 h += `<div class="section"><h2 class="h2">Тээвэр</h2></div><div class="stack">${li.map(({l, key, r}) => bookCard({icon: MODES[l.m][1], c: "transport", title: `${esc(pname(l.a))} → ${esc(pname(l.b))}`, sub: `${MODES[l.m][0]} · ${ddot(l.d)}${l.dep ? " · " + esc(l.dep) + (l.arr ? "–" + esc(l.arr) : "") : ""}`, r,
  actions: `<button class="chip noi" type="button" data-addleg="${esc(key)}">${r ? "Засах" : "Захиалга нэмэх"}</button>${r && safeURL(r.link) ? `<a class="chip noi" href="${esc(r.link)}" target="_blank" rel="noopener">Холбоос</a>` : ""}${!r ? searchLinks(l).map(([n, u]) => `<a class="chip noi" href="${u}" target="_blank" rel="noopener">${n}</a>`).join("") : ""}`})).join("")}</div>`;
 h += `<div class="section"><h2 class="h2">Буудал</h2></div><div class="stack">${si.map(({c, key, inD, outD, r}) => bookCard({icon: "bed", c: "stay", title: esc(pname(c.k)), sub: `${ddot(inD)} → ${ddot(outD)} · ${c.nights.length} шөнө`, r,
  actions: `<button class="chip noi" type="button" data-addstay="${esc(key)}">${r ? "Засах" : "Захиалга нэмэх"}</button>${r && safeURL(r.link) ? `<a class="chip noi" href="${esc(r.link)}" target="_blank" rel="noopener">Холбоос</a>` : ""}${r?.addr ? `<a class="chip noi" href="${mapsURL(r.addr)}" target="_blank" rel="noopener">Хаяг</a>` : ""}${!r ? hotelLinks(c.k, inD, outD).map(([n, u]) => `<a class="chip noi" href="${u}" target="_blank" rel="noopener">${n}</a>`).join("") : ""}`})).join("")}</div>`;
 h += `<div class="section"><h2 class="h2">Бусад захиалга</h2></div><div class="stack">${ex.map(r => bookCard({icon: RT[r.type][1], c: r.type === "hotel" ? "stay" : "transport", title: r.type === "hotel" ? esc(r.name || r.city || "Буудал") : `${esc(r.from || "?")} → ${esc(r.to || "?")}`, sub: `${RT[r.type][0]}${r.depD || r.inD ? " · " + ddot(r.depD || r.inD) : ""}`, r, actions: `<button class="chip noi" type="button" data-editres="${r.id}">Засах</button>`})).join("") || `<div class="muted" style="font-size:13px;padding:0 4px">Завь, аялал, концертын тасалбар гэх мэт.</div>`}</div>
 <button class="btn ghost block" type="button" data-act="newres" style="margin-top:var(--space-3)">${ico("plus","sm")} Захиалга нэмэх</button>`;
 return h;
}

/* ================= MONEY ================= */
const liveExp = () => Object.entries(S.expenses).filter(([, x]) => x && !x.deleted).map(([id, x]) => ({id, ...x})).sort((a, b) => (b.date || "").localeCompare(a.date || "") || (b.created || 0) - (a.created || 0));
const totalSpent = () => liveExp().filter(x => x.cat !== "settle").reduce((a, x) => a + toMNT(x.amount, x.cur), 0);
function balances() { const net = {}; S.people.forEach(p => net[p.id] = 0);
 liveExp().forEach(x => { const v = toMNT(x.amount, x.cur), sp = (x.split || []).filter(id => net[id] !== undefined), who = sp.length ? sp : S.people.map(p => p.id);
  if (net[x.payer] !== undefined) net[x.payer] += v; who.forEach(id => net[id] -= v / who.length); }); return net; }
function shares() { const s = {}; S.people.forEach(p => s[p.id] = 0); liveExp().filter(x => x.cat !== "settle").forEach(x => { const v = toMNT(x.amount, x.cur), sp = (x.split || []).filter(id => s[id] !== undefined), who = sp.length ? sp : S.people.map(p => p.id); who.forEach(id => s[id] += v / who.length); }); return s; }
function settle(net) { const cr = [], de = []; Object.entries(net).forEach(([id, v]) => { if (v > .5) cr.push([id, v]); else if (v < -.5) de.push([id, -v]); });
 cr.sort((a, b) => b[1] - a[1]); de.sort((a, b) => b[1] - a[1]); const out = []; let i = 0, j = 0;
 while (i < de.length && j < cr.length) { const m = Math.min(de[i][1], cr[j][1]); out.push({from: de[i][0], to: cr[j][0], amt: m}); de[i][1] -= m; cr[j][1] -= m; if (de[i][1] < .5) i++; if (cr[j][1] < .5) j++; } return out; }
let conv = {a: 100, c: "THB"};
function moneyHTML() {
 const xs = liveExp(), tot = totalSpent(), sh = shares(), net = balances();
 const byCat = {}; xs.filter(x => x.cat !== "settle").forEach(x => byCat[x.cat || "other"] = (byCat[x.cat || "other"] || 0) + toMNT(x.amount, x.cur));
 const estMNT = EST.reduce((a, e) => a + (e.lo + e.hi) / 2, 0) * rate("USD") * S.people.length;
 const rest = Math.max(0, estMNT - tot);
 const segs = [["spend","Зардал"],["settle","Тооцоо"],["budget","Төсөв"],["conv","Ханш"]];
 let h = `<h1 class="h1" style="margin-top:var(--space-4)">Мөнгө</h1>
 <div class="split"><div><div class="eyebrow muted">Нийт зарцуулсан</div><div class="total">${fmt(tot)} ₮</div><div class="muted" style="font-size:13px">${xs.filter(x => x.cat !== "settle").length} зардал · ${me ? "таны хувь " + fmt(sh[me] || 0) + " ₮" : "нэг хүнд " + fmt(tot / Math.max(1, S.people.length)) + " ₮"}</div></div>
  <div class="bar">${Object.entries(CATS).filter(([k]) => byCat[k]).map(([k, c]) => `<span class="c-${c.c}" style="flex:${byCat[k]}"></span>`).join("")}${rest ? `<span class="rest" style="flex:${rest}"></span>` : ""}</div>
  <div class="legend">${Object.entries(CATS).map(([k, c]) => `<span class="c-${c.c}"><i></i>${c.n}${byCat[k] ? " " + fmt(byCat[k] / 1000) + "k" : ""}</span>`).join("")}</div>
  ${me ? `<div class="stat2"><div class="card" style="background:var(--surface-raised)"><div class="k">Таны үлдэгдэл</div><div class="v ${net[me] > .5 ? "pos" : net[me] < -.5 ? "neg" : ""}">${net[me] > .5 ? "+" : ""}${fmt(net[me] || 0)} ₮</div></div><div class="card" style="background:var(--surface-raised)"><div class="k">Төсвөөс</div><div class="v">${Math.round(tot / Math.max(1, estMNT) * 100)}%</div></div></div>` : ""}
 </div>
 <div class="seg" role="group">${segs.map(([k, n]) => `<button type="button" data-mseg="${k}" aria-pressed="${moneySeg === k}">${n}</button>`).join("")}</div>`;
 if (moneySeg === "spend") {
  if (!xs.length) h += `<div class="card empty" style="margin-top:var(--space-3)"><b>Одоохондоо зардал алга</b>Нийтийн зардлаа нэмэхэд хэн хэнд хэд өгөхийг автоматаар тооцно.</div>`;
  let last = "";
  xs.forEach(x => { if (x.date !== last) { last = x.date; h += `<div class="datehead">${x.date ? dlong(x.date) : "Огноогүй"}</div>`; }
   const c = x.cat === "settle" ? {n: "Тооцоо", i: "check", c: "money"} : CATS[x.cat] || CATS.other, n = (x.split || []).length || S.people.length;
   h += `<button class="xrow c-${c.c}" type="button" data-exp="${x.id}" style="margin-bottom:6px"><div class="tile">${ico(c.i)}</div><div class="grow"><div class="h3" style="font-size:15px">${esc(x.desc)}</div><div class="sub">${person(x.payer) ? esc(person(x.payer).name) + " төлсөн" : ""} · ${n} хүнд</div></div><div class="amt">${money(x.amount, x.cur)}${x.cur !== "MNT" ? `<small>${fmt(toMNT(x.amount, x.cur))} ₮</small>` : ""}</div></button>`; });
 }
 if (moneySeg === "settle") {
  const st = settle(net);
  h += `<div class="stack" style="margin-top:var(--space-3)">${S.people.map(p => `<div class="owe">${av(p.id)}<div class="grow"><div class="h3" style="font-size:15px">${esc(p.name)}</div><div class="sub">Хувь ${fmt(sh[p.id] || 0)} ₮</div></div><span class="amt ${net[p.id] > .5 ? "v pos" : net[p.id] < -.5 ? "v neg" : ""}">${net[p.id] > .5 ? "+" : ""}${fmt(net[p.id])} ₮</span></div>`).join("")}</div>
  <div class="section"><h2 class="h2">Хэн хэнд өгөх</h2></div>
  <div class="stack">${st.length ? st.map(t => `<div class="owe">${av(t.from, "sm")}${ico("arrow","sm")}${av(t.to, "sm")}<div class="grow"><b>${esc(person(t.from).name)}</b> → <b>${esc(person(t.to).name)}</b></div><span class="amt">${fmt(t.amt)} ₮</span><button class="btn sm" type="button" data-settle="${t.from}|${t.to}|${Math.round(t.amt)}">Хаах</button></div>`).join("") : `<div class="card empty"><b>Бүгд тэнцүү</b>Хэн ч хэнд өргүй.</div>`}</div>`;
 }
 if (moneySeg === "budget") {
  const a = S.actuals || {}, max = Math.max(...EST.map(e => Math.max(e.hi, +a[e.id]?.usd || 0))) * 1.1;
  const lo = EST.reduce((s, e) => s + e.lo, 0), hi = EST.reduce((s, e) => s + e.hi, 0), act = EST.reduce((s, e) => s + (+a[e.id]?.usd || 0), 0);
  h += `<div class="card" style="margin-top:var(--space-3)"><div class="row" style="justify-content:space-between;align-items:baseline"><span class="h3">Нэг хүнд, ам.доллараар</span><span class="mono muted" style="font-size:12px">$${lo}–${hi}</span></div>
   <div class="sub" style="margin:4px 0 6px">Цэнхэр: тооцоолсон, ягаан: бодит. Бодит дүнгээ бичээрэй.</div>
   ${EST.map(e => { const v = +a[e.id]?.usd || 0; return `<div class="est"><div class="est-top"><span>${esc(e.n)}</span><input class="in mono" style="min-height:36px;padding:6px 10px;font-size:14px" type="number" inputmode="decimal" placeholder="$${e.lo}–${e.hi}" value="${v || ""}" data-act-usd="${e.id}" aria-label="${esc(e.n)}"></div><div class="range"><div class="band" style="left:${e.lo / max * 100}%;width:${(e.hi - e.lo) / max * 100}%"></div>${v ? `<div class="act" style="left:${v / max * 100}%"></div>` : ""}</div></div>`; }).join("")}
   <div class="row" style="justify-content:space-between;margin-top:var(--space-3)"><span class="h3">Бодит нийт</span><span class="mono" style="font-weight:600">$${fmt(act)}</span></div></div>`;
 }
 if (moneySeg === "conv") {
  h += `<div class="card" style="margin-top:var(--space-3)"><div class="grid2"><input class="in mono" type="number" inputmode="decimal" value="${conv.a}" data-conv-a aria-label="Дүн"><select class="in" data-conv-c aria-label="Валют">${CURS.map(c => `<option value="${c}" ${conv.c === c ? "selected" : ""}>${SYM[c]} ${c}</option>`).join("")}</select></div>
   <div class="conv" style="margin-top:var(--space-3)">${CURS.filter(c => c !== conv.c).map(c => `<div class="row"><span class="muted">${c}</span><span class="big">${money(toMNT(conv.a, conv.c) / rate(c), c)}</span></div>`).join("")}</div></div>
   <div class="section"><h2 class="h2">Ханш</h2><span class="muted" style="font-size:12px">1 нэгж = ? ₮</span></div>
   <div class="card"><div class="grid3">${["USD","CNY","THB"].map(c => `<label><span class="f" style="margin-top:0">${SYM[c]} ${c}</span><input class="in mono" type="number" inputmode="decimal" value="${S.rates[c]}" data-rate="${c}"></label>`).join("")}</div><div class="sub" style="margin-top:8px">Ханшийг өөрчлөхөд бүх хүнд синк хийгдэнэ.</div></div>`;
 }
 return h;
}

/* ================= CREW ================= */
function crewHTML() {
 const segs = [["crew","Баг"],["prep","Бэлтгэл"],["pack","Ачаа"],["info","Мэдээлэл"]];
 let h = `<h1 class="h1" style="margin-top:var(--space-4)">Баг</h1><div class="seg" role="group">${segs.map(([k, n]) => `<button type="button" data-cseg="${k}" aria-pressed="${crewSeg === k}">${n}${k === "prep" && openTasks() ? ` · ${openTasks()}` : ""}</button>`).join("")}</div>`;
 if (crewSeg === "crew") h += crewMain();
 if (crewSeg === "prep") h += prepHTML();
 if (crewSeg === "pack") h += packHTML();
 if (crewSeg === "info") h += infoHTML();
 return h;
}
function when(t) { const d = new Date(t), z = n => String(n).padStart(2, "0"); return `${d.getMonth()+1}/${d.getDate()} ${z(d.getHours())}:${z(d.getMinutes())}`; }
function crewMain() {
 const live = !!SYNC.code;
 let h = `<div id="notifCard">${notifCardHTML()}</div>
 <div class="section"><h2 class="h2">Хүмүүс</h2><button class="link" type="button" data-act="names">Нэр засах</button></div><div class="stack">${S.people.map(p => {
  const on = PRES.on.has(p.id), seen = S.seen?.[p.id];
  return `<div class="owe">${av(p.id, live ? (on ? "on" : !seen ? "off" : "") : "")}<div class="grow"><div class="h3" style="font-size:15px">${esc(p.name)}${p.id === me ? ' <span class="muted" style="font-weight:500">· та</span>' : ""}</div><div class="sub">${live ? (on ? "Одоо онлайн" : seen ? "Сүүлд: " + when(seen.last) : "Хараахан нэгдээгүй") : "Синк унтраалттай"}</div></div></div>`; }).join("")}</div>
 <div class="section"><h2 class="h2">Найзуудаа урих</h2></div>
 <div class="card">${live ? `<p style="margin:0 0 var(--space-3);font-size:14px">Энэ холбоосыг бүлгийн чат руу явуул. Нээсэн хүн бүр нэг товшилтоор нэгдэнэ.</p><div class="row"><button class="btn primary grow" type="button" data-act="share">${ico("share","sm")} Холбоос илгээх</button><button class="iconbtn" type="button" data-act="copyinv" aria-label="Хуулах">${ico("copy","sm")}</button></div>`
  : `<p style="margin:0 0 var(--space-3);font-size:14px">Энэ утас бүлгийн аялалд холбогдоогүй байна. Найзаасаа урилгын холбоос аваад нээгээрэй, эсвэл шинэ бүлгийн аялал үүсгэ.</p><button class="btn block" type="button" data-act="sync">${ico("refresh","sm")} Синк тохируулах</button>`}</div>
 <div class="section"><h2 class="h2">Тохиргоо</h2></div>
 <div class="li"><span class="grow">Өнгө</span><div class="seg" style="margin:0;flex:none"><button type="button" data-theme-set="midnight" aria-pressed="${(ls.get(THEME) || "midnight") === "midnight"}">Шөнө</button><button type="button" data-theme-set="day" aria-pressed="${ls.get(THEME) === "day"}">Өдөр</button></div></div>
 <div class="li"><span class="grow">Синк</span><button class="btn sm" type="button" data-act="sync">${syncLabel()}</button></div>
 <p class="muted" style="font-size:12px;text-align:center;margin:var(--space-5) 0 0">Tripp · ${dayList().length} өдөр, ${routeCities().length} хот</p>`;
 return h;
}
function prepHTML() {
 const done = TASKS.filter(t => S.tasks[t.id]?.done).length;
 let h = `<div class="card" style="margin-top:var(--space-3)"><div class="row" style="justify-content:space-between"><span class="h3">${done}/${TASKS.length} бэлэн</span><span class="muted mono" style="font-size:12px">${Math.round(done / TASKS.length * 100)}%</span></div><div class="progress" style="margin-top:10px"><span style="width:${done / TASKS.length * 100}%"></span></div></div>`;
 Object.entries(GROUPS).forEach(([g, i]) => {
  h += `<div class="section"><h2 class="h2">${g}</h2></div>` + TASKS.filter(t => t.g === g).map(t => { const st = S.tasks[t.id] || {};
   return `<div class="li ${st.done ? "isdone" : ""}"><label><input type="checkbox" class="ck" data-task="${t.id}" ${st.done ? "checked" : ""}><span class="grow"><span class="txt">${esc(t.t)}</span><span class="sub" style="display:block">${t.p && !st.done ? '<b style="color:var(--magenta)">Яаралтай · </b>' : ""}${esc(t.due)}</span></span></label><button class="iconbtn" style="width:auto;padding:0 4px;background:none" type="button" data-owner="${t.id}" aria-label="Хариуцагч">${st.owner && person(st.owner) ? av(st.owner, "sm") : `<span class="av sm nobody">${ico("plus","sm")}</span>`}</button></div>`; }).join("");
 });
 return h;
}
function packHTML() {
 const pid = packFor || me || S.people[0].id, mine = S.pack[pid]?.items || {}, extra = S.extraPack[pid]?.items || [];
 const all = [...PACK.flatMap(g => g.k.map((k, i) => g.id + ":" + i)), ...extra.map(x => "x:" + x.id)], done = all.filter(k => mine[k]).length;
 let h = `<div class="chips" style="margin:var(--space-3) 0">${S.people.map(p => `<button class="chip c-${hueOf(p.id)}" type="button" data-packfor="${p.id}" aria-pressed="${p.id === pid}">${av(p.id)} ${esc(p.name)}</button>`).join("")}</div>
 <div class="card"><div class="row" style="justify-content:space-between"><span class="h3">${esc(person(pid).name)}: ${done}/${all.length}</span><span class="muted mono" style="font-size:12px">${Math.round(done / Math.max(1, all.length) * 100)}%</span></div><div class="progress" style="margin-top:10px"><span style="width:${done / Math.max(1, all.length) * 100}%"></span></div></div>`;
 PACK.forEach(g => {
  h += `<div class="section"><h2 class="h2">${esc(g.h)}</h2><span class="muted mono" style="font-size:12px">${g.r}</span></div>` + g.k.map((k, i) => { const id = g.id + ":" + i; return `<div class="li ${mine[id] ? "isdone" : ""}"><label><input type="checkbox" class="ck" data-pk="${id}" ${mine[id] ? "checked" : ""}><span class="txt">${esc(k)}</span></label></div>`; }).join("");
  if (g.id === "both") h += extra.map(x => `<div class="li ${mine["x:" + x.id] ? "isdone" : ""}"><label><input type="checkbox" class="ck" data-pk="x:${x.id}" ${mine["x:" + x.id] ? "checked" : ""}><span class="txt">${esc(x.t)}</span></label></div>`).join("") +
   `<form class="row" data-addpack style="margin-top:8px"><input class="in" type="text" placeholder="Өөрийн зүйл нэмэх" maxlength="60"><button class="iconbtn" type="submit" aria-label="Нэмэх" style="width:46px;height:46px">${ico("plus")}</button></form>`;
 });
 return h;
}
function infoHTML() {
 const W = routeCities().map(k => place(k)).filter(p => p && p.hi != null);
 const card = (i, t, body) => `<div class="card"><div class="row" style="gap:10px"><span class="tile c-${i[1]}" style="width:34px;height:34px">${ico(i[0], "sm")}</span><span class="h3">${t}</span></div>${body}</div>`;
 return `<div class="stack" style="margin-top:var(--space-3)">
 ${card(["doc","gold"], "Нэвтрэх журам", `<dl class="kv"><dt>Хятад</dt><dd>Замын-Үүдээр автобусаар хил гарна. Монгол паспорттой визгүй нэвтрэх журмыг явахаасаа өмнө Хятадын ЭСЯ-наас лавлаарай. Буудлын захиалга, буцах тасалбараа утсандаа бэлэн байлга.</dd><dt>Тайланд</dt><dd>Монгол паспортоор 30 хоног визгүй. Ирэхээс 3 хоногийн дотор цахим ирэлтийн карт (TDAC) бөглөнө.</dd><dt>Паспорт</dt><dd>2027 оны 7-р сар хүртэл хүчинтэй байх.</dd></dl>`)}
 ${card(["sun","tangerine"], "12-р сарын сүүлийн цаг агаар", `<dl class="kv">${W.map(p => `<dt>${esc(p.n)}</dt><dd class="mono">${sg(p.lo)}° … ${sg(p.hi)}°</dd>`).join("")}</dl>`)}
 ${card(["clock","cyan"], "Цагийн бүс", `<dl class="kv"><dt>Монгол, Хятад</dt><dd>UTC+8</dd><dt>Тайланд</dt><dd>UTC+7 (1 цаг хоцорно)</dd></dl><div class="sub" style="margin-top:8px">12-р сарын 28-нд Пхукетэд газардахад цаг 1 цагаар хойшилно. Утас автоматаар солино.</div>`)}
 ${card(["wallet","lime"], "Төлбөр", `<dl class="kv"><dt>Хятад</dt><dd>Карттай холбосон Alipay эсвэл WeChat Pay. Бага зэрэг бэлэн юань.</dd><dt>Тайланд</dt><dd>Том дэлгүүрт карт; такси, зах, гудамжны хоолонд бэлэн бат.</dd></dl>`)}
 ${card(["phone","lilac"], "Утас, апп", `<dl class="kv"><dt>Хятад</dt><dd>Google, Instagram, WhatsApp хаалттай; роуминг eSIM ихэвчлэн нээлттэй. WeChat, Alipay, Didi, Amap суулга.</dd><dt>Тайланд</dt><dd>Grab, Bolt; Google Maps ажиллана.</dd></dl>`)}
 ${card(["plug","cyan"], "Залгуур", `<dl class="kv"><dt>Монгол</dt><dd>C, E · 230 V</dd><dt>Хятад</dt><dd>A, C, I · 220 V</dd><dt>Тайланд</dt><dd>A, B, C, F, O · 220 V</dd></dl>`)}
 ${card(["sos","magenta"], "Яаралтай дугаар", `<dl class="kv"><dt>Хятад</dt><dd><b>110</b> цагдаа · <b>120</b> түргэн · <b>119</b> гал</dd><dt>Тайланд</dt><dd><b>1155</b> жуулчны цагдаа · <b>1669</b> түргэн · <b>191</b> цагдаа</dd></dl>`)}
 ${card(["chat","gold"], "Хэрэгтэй үгс", `<div class="eyebrow muted" style="margin:12px 0 4px">Хятадаар</div>${[["你好","nǐ hǎo","Сайн байна уу"],["谢谢","xièxie","Баярлалаа"],["多少钱？","duōshao qián?","Хэд вэ?"],["不要辣","bú yào là","Халуун ногоогүй"],["买单","mǎidān","Тооцоо өгөөч"]].map(([a, b, c]) => `<div class="phr"><span class="nat">${a}</span><span>${c}</span><span class="rom">${b}</span></div>`).join("")}
  <div class="eyebrow muted" style="margin:12px 0 4px">Тайгаар (эрэгтэй khrap, эмэгтэй kha)</div>${[["สวัสดี","sawasdee khrap/kha","Сайн байна уу"],["ขอบคุณ","khop khun","Баярлалаа"],["เท่าไหร่","tao rai?","Хэд вэ?"],["ไม่เผ็ด","mai phet","Халуун ногоогүй"],["สวัสดีปีใหม่","sawasdee pi mai","Шинэ жилийн мэнд!"]].map(([a, b, c]) => `<div class="phr"><span class="nat">${a}</span><span>${c}</span><span class="rom">${b}</span></div>`).join("")}`)}
 </div>`;
}

/* ================= SHEETS ================= */
const dlg = () => $("#sheet");
function openSheet(title, body, mount) {
 const d = dlg(); d.innerHTML = `<div class="sheet-h"><h2>${title}</h2><button class="iconbtn" type="button" data-close aria-label="Хаах">${ico("x","sm")}</button></div><div class="sheet-b" id="sheetB">${body}</div>`;
 if (!d.open) d.showModal(); if (mount) mount(d);
}
function closeSheet() { const d = dlg(); if (d.open) d.close(); }
const field = (label, inner) => `<label class="f">${label}</label>${inner}`;
const opts = (o, v) => Object.entries(o).map(([k, n]) => `<option value="${k}" ${k === v ? "selected" : ""}>${esc(Array.isArray(n) ? n[0] : n)}</option>`).join("");
const placeOpts = v => { const ks = [...new Set([...routeCities(), ...Object.keys(PLACES).filter(k => !["erl","usm"].includes(k)), ...Object.keys(S.places || {}).filter(k => place(k)), ...(v && !routeCities().includes(v) ? [v] : [])])];
 return ks.map(k => `<option value="${k}" ${k === v ? "selected" : ""}>${esc(pname(k))}</option>`).join("") + `<optgroup label="Бусад хот">${Object.entries(GAZ).filter(([k]) => !ks.includes(k)).map(([k, p]) => `<option value="${k}" ${k === v ? "selected" : ""}>${esc(p.n)}</option>`).join("")}</optgroup>`; };

function whoDialog(first) {
 openSheet(first ? "Та хэн бэ?" : "Би бол…", `<p class="muted" style="margin:0 0 var(--space-3);font-size:14px">Энэ утсанд нэг удаа сонгоно. Зардал, ачаа, мэдэгдэл таных болно.</p>
 <div class="stack">${S.people.map(p => `<button class="owe" type="button" data-pickme="${p.id}" style="border:0;text-align:left;${p.id === me ? "box-shadow:inset 0 0 0 1.5px var(--gold)" : ""}">${av(p.id)}<span class="grow h3">${esc(p.name)}</span>${p.id === me ? ico("check") : ""}</button>`).join("")}</div>
 <button class="btn ghost block" type="button" data-act="names" style="margin-top:var(--space-3)">${ico("edit","sm")} Нэрсийг засах</button>`);
}
function namesDialog() {
 openSheet("Нэр засах", `<form id="nf">${S.people.map(p => `<div class="row" style="margin-top:var(--space-2)">${av(p.id)}<input class="in" name="${p.id}" value="${esc(p.name)}" maxlength="24" required></div>`).join("")}<div class="sheet-actions"><button class="btn primary" type="submit">Хадгалах</button></div></form>`, d => {
  d.querySelector("#nf").onsubmit = e => { e.preventDefault(); const f = new FormData(e.target);
   S.people.forEach((p, i) => { const n = String(f.get(p.id) || "").trim(); if (n && n !== p.name) { S.people[i] = {...p, name: n, ts: now()}; dirty("people", p.id); } });
   save(); closeSheet(); rerender(); toast("Хадгаллаа"); };
 });
}
function stepDialog(date, i) {
 const d = dayList().find(x => x.date === date), st = i != null ? stepsOf(d)[i] : null;
 openSheet(st ? "Алхам засах" : "Алхам нэмэх", `<form id="sf">
  ${field("Төрөл", `<select class="in" name="k">${opts(STEP, st?.[0] || "walk")}</select>`)}
  <div class="grid2"><div>${field("Цаг", `<input class="in" name="t" value="${esc(st?.[1] || "")}" placeholder="09:30 эсвэл Өглөө" maxlength="20">`)}</div><div>${field("Өдөр", `<input class="in" value="${ddot(date)}" disabled>`)}</div></div>
  ${field("Юу хийх вэ", `<textarea class="in" name="x" maxlength="240" required placeholder="Жишээ нь: Бунд дээр уулзана">${esc(st?.[2] || "")}</textarea>`)}
  <div class="sheet-actions">${st ? `<button class="btn danger" type="button" data-delstep>Устгах</button>` : ""}<button class="btn primary" type="submit">${st ? "Хадгалах" : "Нэмэх"}</button></div></form>`, dd => {
  const f = dd.querySelector("#sf");
  f.onsubmit = e => { e.preventDefault(); const fd = new FormData(f), x = String(fd.get("x")).trim(); if (!x) return;
   const steps = stepsOf(d).map(s => [...s]), row = [fd.get("k"), String(fd.get("t")).trim(), x];
   if (st) steps[i] = row; else { steps.push(row); steps.sort((a, b) => (parseHM(a[1]) ?? 1e4) - (parseHM(b[1]) ?? 1e4)); }
   saveDay(date, {steps}); closeSheet(); rerender(); if (!st) confetti({count: 60}); toast(st ? "Хадгаллаа" : "Нэмэгдлээ"); };
  dd.querySelector("[data-delstep]")?.addEventListener("click", ev => { const b = ev.currentTarget; if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Дахин дар"; return; }
   saveDay(date, {steps: stepsOf(d).filter((_, k) => k !== i)}); closeSheet(); rerender(); toast("Устгагдлаа"); });
 });
}
function saveDay(date, patch) { const d = dayList().find(x => x.date === date) || {date}; const {date: _, ...rest} = d; S.days[date] = {...rest, ...patch, ts: now()}; save(); dirty("days", date); }
function dayDialog(date) {
 const d = dayList().find(x => x.date === date); let mv = movesOf(d).map(m => [...m]);
 const mvHTML = () => mv.map((m, k) => `<div class="card" style="padding:var(--space-3);margin-top:var(--space-2);background:var(--surface)"><div class="grid2"><select class="in" data-mv="${k}:0">${placeOpts(m[0])}</select><select class="in" data-mv="${k}:1">${placeOpts(m[1])}</select></div><div class="grid3" style="margin-top:var(--space-2)"><select class="in" data-mv="${k}:2">${opts(MODES, m[2])}</select><input class="in mono" data-mv="${k}:3" value="${esc(m[3] || "")}" placeholder="Хөдлөх"><input class="in mono" data-mv="${k}:4" value="${esc(m[4] || "")}" placeholder="Ирэх"></div><button class="tag" type="button" data-rmmv="${k}" style="margin-top:8px">${ico("trash","sm")}Хасах</button></div>`).join("");
 openSheet(`${ddot(date)} · Өдөр засах`, `<form id="df">
  ${field("Гарчиг", `<input class="in" name="title" value="${esc(d.title || "")}" maxlength="60">`)}
  ${field("Хонох газар", `<select class="in" name="stay"><option value="">Замдаа / гэртээ</option>${placeOpts(d.stay)}</select>`)}
  ${field("Зөвлөгөө", `<textarea class="in" name="tip" maxlength="240" placeholder="Сануулах зүйл">${esc(d.tip || "")}</textarea>`)}
  <label class="f">Хөдөлгөөн (тээвэр)</label><div id="mvs">${mvHTML()}</div>
  <button class="btn ghost sm" type="button" data-addmv style="margin-top:var(--space-2)">${ico("plus","sm")} Тээвэр нэмэх</button>
  <div class="sheet-actions"><button class="btn primary" type="submit">Хадгалах</button></div></form>`, dd => {
  const redraw = () => { dd.querySelector("#mvs").innerHTML = mvHTML(); };
  dd.addEventListener("change", e => { const k = e.target.dataset.mv; if (!k) return; const [a, b] = k.split(":").map(Number); mv[a][b] = e.target.value; });
  dd.addEventListener("input", e => { const k = e.target.dataset.mv; if (!k) return; const [a, b] = k.split(":").map(Number); mv[a][b] = e.target.value; });
  dd.addEventListener("click", e => { const r = e.target.closest("[data-rmmv]"); if (r) { mv.splice(+r.dataset.rmmv, 1); redraw(); }
   if (e.target.closest("[data-addmv]")) { const last = mv.at(-1); mv.push([last ? last[1] : (d.stay || homeCity()), "", "plane", "", ""]); redraw(); } });
  dd.querySelector("#df").onsubmit = e => { e.preventDefault(); const f = new FormData(e.target);
   saveDay(date, {title: String(f.get("title")).trim(), stay: f.get("stay"), tip: String(f.get("tip")).trim(), moves: mv.filter(m => m[0] && m[1] && m[0] !== m[1])}); closeSheet(); rerender(); toast("Хадгаллаа"); };
 });
}
function sightDialog(id) {
 const s = id ? sightList().find(x => x.id === id) : null;
 const cities = cityStays().map(c => c.k), days = dayList();
 openSheet(s ? "Газар засах" : "Газар нэмэх", `<form id="gf">
  ${field("Нэр", `<input class="in" name="n" value="${esc(s?.n || "")}" maxlength="60" required placeholder="Жишээ нь: Бунд шөнөөр">`)}
  <div class="grid2"><div>${field("Хот", `<select class="in" name="city">${cities.map(k => `<option value="${k}" ${k === (s?.city || seeCity || cities[0]) ? "selected" : ""}>${esc(pname(k))}</option>`).join("")}</select>`)}</div><div>${field("Төрөл", `<select class="in" name="k">${opts(SK, s?.k || "see")}</select>`)}</div></div>
  <div class="grid2"><div>${field("Өдөр", `<select class="in" name="day"><option value="">Сонгоогүй</option>${days.map(d => `<option value="${d.date}" ${d.date === s?.day ? "selected" : ""}>${ddot(d.date)} ${esc(d.stay ? pshort(d.stay) : "")}</option>`).join("")}</select>`)}</div><div>${field("Үнэ", `<input class="in" name="cost" value="${esc(s?.cost || "")}" maxlength="30" placeholder="Үнэгүй">`)}</div></div>
  ${field("Тайлбар", `<textarea class="in" name="d" maxlength="300">${esc(s?.d || "")}</textarea>`)}
  <div class="sheet-actions">${s ? `<button class="btn danger" type="button" data-delsight>Устгах</button>` : ""}<button class="btn primary" type="submit">${s ? "Хадгалах" : "Нэмэх"}</button></div></form>`, dd => {
  const f = dd.querySelector("#gf");
  f.onsubmit = e => { e.preventDefault(); const fd = new FormData(f), nid = id || "u-" + uid();
   S.sights[nid] = {n: String(fd.get("n")).trim(), city: fd.get("city"), k: fd.get("k"), day: fd.get("day"), cost: String(fd.get("cost")).trim(), d: String(fd.get("d")).trim(), ts: now()};
   save(); dirty("sights", nid); closeSheet(); rerender(); if (!id) confetti({count: 70}); toast(id ? "Хадгаллаа" : "Нэмэгдлээ"); };
  dd.querySelector("[data-delsight]")?.addEventListener("click", ev => { const b = ev.currentTarget; if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Дахин дар"; return; }
   S.sights[id] = {...(S.sights[id] || {}), deleted: true, ts: now()}; save(); dirty("sights", id); closeSheet(); rerender(); toast("Устгагдлаа"); });
 });
}
function expenseDialog(id, preset) {
 const x = id ? S.expenses[id] : null;
 const st = {cur: x?.cur || ls.get("sts:lastcur") || "MNT", payer: x?.payer || me || S.people[0].id, split: x?.split?.length ? [...x.split] : S.people.map(p => p.id), cat: x?.cat || preset?.cat || "food"};
 const body = () => `<form id="xf" autocomplete="off">
  <div class="grid2" style="grid-template-columns:1.4fr 1fr"><div>${field("Дүн", `<input class="in mono" id="xa" name="amount" type="number" inputmode="decimal" step="any" value="${x?.amount ?? ""}" required>`)}</div><div>${field("Валют", `<select class="in" name="cur" id="xc">${CURS.map(c => `<option value="${c}" ${c === st.cur ? "selected" : ""}>${SYM[c]} ${c}</option>`).join("")}</select>`)}</div></div>
  ${field("Юу вэ", `<input class="in" name="desc" value="${esc(x?.desc || preset?.desc || "")}" maxlength="60" required placeholder="Сяолунбао, такси…">`)}
  <label class="f">Ангилал</label><div class="chips">${Object.entries(CATS).map(([k, c]) => `<button class="chip c-${c.c}" type="button" data-cat="${k}" aria-pressed="${st.cat === k}">${ico(c.i)}${c.n}</button>`).join("")}</div>
  <label class="f">Хэн төлсөн</label><div class="chips">${S.people.map(p => `<button class="chip c-${hueOf(p.id)}" type="button" data-payer="${p.id}" aria-pressed="${st.payer === p.id}">${av(p.id)} ${esc(p.name)}</button>`).join("")}</div>
  <label class="f">Хэнд хуваах <span id="xeach" class="mono"></span></label><div class="chips">${S.people.map(p => `<button class="chip c-${hueOf(p.id)}" type="button" data-split="${p.id}" aria-pressed="${st.split.includes(p.id)}">${av(p.id)} ${esc(p.name)}</button>`).join("")}</div>
  ${field("Огноо", `<input class="in" name="date" type="date" value="${x?.date || todayISO()}">`)}
  <div class="err" id="xerr" hidden></div>
  <div class="sheet-actions">${id ? `<button class="btn danger" type="button" data-delx>Устгах</button>` : ""}<button class="btn primary" type="submit">${id ? "Хадгалах" : "Нэмэх"}</button></div></form>`;
 openSheet(id ? "Зардал засах" : "Зардал нэмэх", body(), dd => {
  const each = () => { const a = parseFloat(dd.querySelector("#xa").value), c = dd.querySelector("#xc").value; dd.querySelector("#xeach").textContent = a > 0 && st.split.length ? `· тус бүр ${fmt(toMNT(a, c) / st.split.length)} ₮` : ""; };
  const press = (sel, val, many) => dd.querySelectorAll(`[${sel}]`).forEach(b => b.setAttribute("aria-pressed", many ? st.split.includes(b.getAttribute(sel)) : b.getAttribute(sel) === val));
  dd.addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return;
   if (b.dataset.cat) { st.cat = b.dataset.cat; press("data-cat", st.cat); }
   if (b.dataset.payer) { st.payer = b.dataset.payer; press("data-payer", st.payer); }
   if (b.dataset.split) { const i = st.split.indexOf(b.dataset.split); i >= 0 ? st.split.splice(i, 1) : st.split.push(b.dataset.split); press("data-split", null, true); each(); }
   if (b.hasAttribute("data-delx")) { if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Дахин дар"; return; } S.expenses[id] = {...S.expenses[id], deleted: true, ts: now()}; save(); dirty("expenses", id); closeSheet(); rerender(); toast("Устгагдлаа"); } });
  dd.addEventListener("input", each); each();
  dd.querySelector("#xf").onsubmit = e => { e.preventDefault(); const f = new FormData(e.target), amt = parseFloat(f.get("amount")), err = dd.querySelector("#xerr");
   if (!(amt > 0)) { err.hidden = false; err.textContent = "Тэгээс их дүн оруулна уу."; return; }
   if (!st.split.length) { err.hidden = false; err.textContent = "Хуваах дор хаяж нэг хүн сонго."; return; }
   const nid = id || uid(); S.expenses[nid] = {desc: String(f.get("desc")).trim(), amount: amt, cur: f.get("cur"), payer: st.payer, split: [...st.split], cat: st.cat, date: f.get("date") || todayISO(), created: x?.created || now(), ts: now()};
   ls.set("sts:lastcur", f.get("cur")); save(); dirty("expenses", nid); const btn = e.submitter; if (!id) confetti({el: btn, count: 90}); closeSheet(); if (view !== "money") { view = "money"; moneySeg = "spend"; history.replaceState(null, "", "#money"); render(); } else rerender(); toast(id ? "Хадгаллаа" : "Нэмэгдлээ. Бүгдэд мэдэгдлээ"); };
  if (!id) setTimeout(() => dd.querySelector("#xa")?.focus(), 80);
 });
}
function resDialog({leg, stay, id, kind}) {
 const old = id ? S.res[id] : leg ? resList().find(r => r.leg === leg && r.type !== "hotel") : stay ? resList().find(r => r.type === "hotel" && r.stay === stay) : null;
 const rid = old ? (id || resList().find(r => r === old || (r.leg === leg && leg) || (r.stay === stay && stay && r.type === "hotel"))?.id) : uid();
 const li = leg ? legItems().find(x => x.key === leg) : null, si = stay ? stayItems().find(x => x.key === stay) : null;
 const isH = si ? true : li ? false : (old ? old.type === "hotel" : kind === "hotel");
 const r = old || {}, type = li ? li.l.m : (r.type || (isH ? "hotel" : "plane"));
 const t = li ? `${pname(li.l.a)} → ${pname(li.l.b)}` : si ? `${pname(si.c.k)} · буудал` : old ? (isH ? r.name || "Буудал" : `${r.from || ""} → ${r.to || ""}`) : "Шинэ захиалга";
 openSheet(esc(t), `<form id="rf" autocomplete="off">
  ${!li && !si && !isH ? `<div class="grid2"><div>${field("Хаанаас", `<input class="in" name="from" value="${esc(r.from || "")}" maxlength="40">`)}</div><div>${field("Хаашаа", `<input class="in" name="to" value="${esc(r.to || "")}" maxlength="40">`)}</div></div>${field("Төрөл", `<select class="in" name="type">${opts({plane: RT.plane, train: RT.train, bus: RT.bus, boat: RT.boat}, type)}</select>`)}` : ""}
  ${isH ? `${field("Буудлын нэр", `<input class="in" name="name" value="${esc(r.name || "")}" maxlength="60">`)}${!si ? field("Хот", `<input class="in" name="city" value="${esc(r.city || "")}" maxlength="40">`) : ""}${field("Хаяг", `<input class="in" name="addr" value="${esc(r.addr || "")}" maxlength="120">`)}
   <div class="grid2"><div>${field("Орох", `<input class="in" type="date" name="inD" value="${r.inD || si?.inD || ""}">`)}</div><div>${field("Гарах", `<input class="in" type="date" name="outD" value="${r.outD || si?.outD || ""}">`)}</div></div>`
  : `${field("Компани, дугаар", `<input class="in" name="carrier" value="${esc(r.carrier || "")}" maxlength="40" placeholder="Air China CA1234">`)}
   <div class="grid2"><div>${field("Хөдлөх", `<input class="in" type="date" name="depD" value="${r.depD || li?.l.d || ""}"><input class="in mono" style="margin-top:6px" name="depT" value="${esc(r.depT || li?.l.dep || "")}" placeholder="10:45">`)}</div><div>${field("Ирэх", `<input class="in" type="date" name="arrD" value="${r.arrD || (li ? (parseHM(li.l.arr) != null && parseHM(li.l.dep) != null && parseHM(li.l.arr) < parseHM(li.l.dep) ? addDays(li.l.d, 1) : li.l.d) : "")}"><input class="in mono" style="margin-top:6px" name="arrT" value="${esc(r.arrT || li?.l.arr || "")}" placeholder="23:45">`)}</div></div>`}
  <div class="grid2"><div>${field("Захиалгын код", `<input class="in mono" name="code" value="${esc(r.code || "")}" maxlength="20" style="text-transform:uppercase">`)}</div><div>${field("Хэн захиалсан", `<select class="in" name="by"><option value="">—</option>${S.people.map(p => `<option value="${p.id}" ${(r.by || (!old ? me : "")) === p.id ? "selected" : ""}>${esc(p.name)}</option>`).join("")}</select>`)}</div></div>
  <div class="grid2" style="grid-template-columns:1.4fr 1fr"><div>${field("Нийт үнэ", `<input class="in mono" name="price" type="number" inputmode="decimal" step="any" value="${r.price ?? ""}">`)}</div><div>${field("Валют", `<select class="in" name="cur">${CURS.map(c => `<option value="${c}" ${(r.cur || "MNT") === c ? "selected" : ""}>${SYM[c]} ${c}</option>`).join("")}</select>`)}</div></div>
  ${field("Холбоос", `<input class="in" name="link" type="url" value="${esc(r.link || "")}" placeholder="https://">`)}
  ${field("Тэмдэглэл", `<textarea class="in" name="note" maxlength="240">${esc(r.note || "")}</textarea>`)}
  <label class="li" style="margin-top:var(--space-3)"><input type="checkbox" class="ck" name="exp" ${!old || S.expenses["r-" + rid] && !S.expenses["r-" + rid].deleted ? "checked" : ""}><span class="txt">Үнийг нийтийн зардалд нэмэх (4 хүнд хуваана)</span></label>
  <div class="sheet-actions">${old ? `<button class="btn danger" type="button" data-delres>Устгах</button>` : ""}<button class="btn primary" type="submit">Хадгалах</button></div></form>`, dd => {
  const f = dd.querySelector("#rf");
  f.onsubmit = e => { e.preventDefault(); const fd = new FormData(f), g = k => String(fd.get(k) ?? "").trim(), price = parseFloat(g("price"));
   const rec = {type: isH ? "hotel" : (li ? li.l.m : g("type") || type), code: g("code").toUpperCase(), link: safeURL(g("link")), price: price > 0 ? price : null, cur: g("cur") || "MNT", by: g("by"), note: g("note"), created: old?.created || now(), ts: now()};
   if (isH) Object.assign(rec, {stay: si ? si.key : (r.stay || ""), city: si ? pname(si.key) : g("city"), name: g("name"), addr: g("addr"), inD: g("inD"), outD: g("outD")});
   else Object.assign(rec, {leg: li ? li.key : (r.leg || ""), from: li ? pname(li.l.a) : g("from"), to: li ? pname(li.l.b) : g("to"), carrier: g("carrier"), depD: g("depD"), depT: g("depT"), arrD: g("arrD"), arrT: g("arrT")});
   S.res[rid] = rec; dirty("res", rid);
   const eid = "r-" + rid, ex = S.expenses[eid];
   if (fd.get("exp") && rec.price) { S.expenses[eid] = {desc: isH ? `Буудал: ${rec.name || rec.city}` : `${RT[rec.type][0]}: ${rec.from} → ${rec.to}`, amount: rec.price, cur: rec.cur, payer: rec.by || me || S.people[0].id, split: S.people.map(p => p.id), cat: isH ? "stay" : "transport", date: (isH ? rec.inD : rec.depD) || todayISO(), created: ex?.created || now(), ts: now()}; dirty("expenses", eid); }
   else if (ex && !ex.deleted) { S.expenses[eid] = {...ex, deleted: true, ts: now()}; dirty("expenses", eid); }
   save(); if (!old) confetti({el: e.submitter, count: 110}); closeSheet(); rerender(); toast(old ? "Хадгаллаа" : "Захиалга нэмэгдлээ!"); };
  dd.querySelector("[data-delres]")?.addEventListener("click", ev => { const b = ev.currentTarget; if (!b.dataset.armed) { b.dataset.armed = 1; b.textContent = "Дахин дар"; return; }
   S.res[rid] = {...S.res[rid], deleted: true, ts: now()}; dirty("res", rid); const ex = S.expenses["r-" + rid]; if (ex && !ex.deleted) { S.expenses["r-" + rid] = {...ex, deleted: true, ts: now()}; dirty("expenses", "r-" + rid); } save(); closeSheet(); rerender(); toast("Устгагдлаа"); });
 });
}
function addMenu() {
 openSheet("Юу нэмэх вэ?", `<div class="menu">
  <button type="button" data-add="exp" class="c-money"><span class="tile">${ico("wallet")}</span>Зардал<small>Хэн төлсөн, хэнд хуваах</small></button>
  <button type="button" data-add="res" class="c-transport"><span class="tile">${ico("ticket")}</span>Захиалга<small>Нислэг, буудал, тасалбар</small></button>
  <button type="button" data-add="sight" class="c-activity"><span class="tile">${ico("heart")}</span>Үзэх газар<small>Найзууд санал өгнө</small></button>
  <button type="button" data-add="step" class="c-stay"><span class="tile">${ico("today")}</span>Өдөрт алхам<small>${selDay ? ddot(selDay) : "Сонгосон өдөр"}</small></button></div>`);
}
function citySheet(k) {
 const p = place(k), st = cityStays().find(c => c.k === k), ds = dayList().filter(d => d.stay === k || seqOf(d).includes(k)), sights = sightList().filter(s => s.city === k);
 openSheet(esc(pname(k)), `${CITY_NOTE[k] ? `<p style="margin:0 0 var(--space-3);font-size:14px;line-height:21px">${esc(CITY_NOTE[k])}</p>` : ""}
  <div class="stat2"><div class="card"><div class="k">Цаг агаар</div><div class="v">${p.hi != null ? `${sg(p.lo)}° … ${sg(p.hi)}°` : "—"}</div></div><div class="card"><div class="k">Цагийн бүс</div><div class="v">${tzs(p.tz)}</div></div></div>
  <div class="section" style="margin-top:var(--space-5)"><h2 class="h2">Өдрүүд</h2><span class="muted" style="font-size:13px">${st?.nights.length ? st.nights.length + " шөнө" : ""}</span></div>
  <div class="stack">${ds.map(d => `<button class="cityrow" type="button" data-openday="${d.date}"><span class="mono" style="font-weight:600;width:44px">${ddot(d.date)}</span><span class="grow"><span class="n" style="font-size:15px">${esc(d.title || routeText(d))}</span></span>${ico("arrow","sm")}</button>`).join("")}</div>
  ${sights.length ? `<div class="section"><h2 class="h2">Үзэх газрууд</h2><button class="link" type="button" data-seeof="${k}">${sights.length} газар</button></div>` : ""}
  <a class="btn block" style="margin-top:var(--space-4)" href="${mapsURL(p.en || p.n)}" target="_blank" rel="noopener">${ico("pin","sm")} Google Maps</a>`);
}

/* ================= NOTIFICATIONS ================= */
const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const standalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const pushSupported = () => "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
const b64u = s => { const p = "=".repeat((4 - s.length % 4) % 4), b = atob((s + p).replace(/-/g, "+").replace(/_/g, "/")); return Uint8Array.from(b, c => c.charCodeAt(0)); };
async function swReg() { if (!("serviceWorker" in navigator)) return null; try { return await Promise.race([navigator.serviceWorker.ready, new Promise(r => setTimeout(() => r(null), 4000))]); } catch(e) { return null; } }
async function currentSub() { const r = await swReg(); try { return r ? await r.pushManager.getSubscription() : null; } catch(e) { return null; } }
async function computeNotif() {
 if (isIOS && !standalone()) return "ios";
 if (!pushSupported() || !CFG.vapidPublicKey) return "unsupported";
 if (Notification.permission === "denied") return "denied";
 return (await currentSub()) ? "on" : "off";
}
async function refreshNotif() { notifState = await computeNotif(); const c = $("#notifCard"); if (c) c.innerHTML = notifCardHTML(); const p = $("#notifPrompt"); if (p) p.outerHTML = notifPrompt(); }
function notifCardHTML() {
 const s = notifState;
 const head = `<b class="t">${ico("bell","sm")} Мэдэгдэл</b>`;
 const sched = `Даваа, лхагва, баасан 09:00-д аялал хүртэл хэдэн хоног үлдсэнийг хөгжилтэй үгтэй нь (баасан гаригт «үдэшлэгт битгий яв, мөнгөө хадгал» 😅). Найз зардал нэмэхэд, шинэ жилийн мөчид, аяллын өглөө бүр өдрийн төлөвлөгөө.`;
 if (s === "on") return `<div class="notif">${head}<p>Асаалттай ✨ ${sched}</p><div class="row"><button class="btn sm primary" type="button" data-act="testpush">${ico("bell","sm")} Туршиж үзэх</button><button class="btn sm" type="button" data-act="pushoff">Унтраах</button></div></div>`;
 if (s === "ios") return `<div class="notif">${head}<p>iPhone дээр мэдэгдэл авахын тулд аппыг нүүр дэлгэцэндээ нэмнэ:</p><ol class="steps-ios"><li>Safari-ийн доод талын ${ico("share","sm")} товч</li><li>«Add to Home Screen» / «Нүүр дэлгэцэнд нэмэх»</li><li>Нүүр дэлгэцийн Tripp дүрсээр нээгээд энд «Асаах» дар</li></ol></div>`;
 if (s === "denied") return `<div class="notif">${head}<p>Мэдэгдлийг хаасан байна. Утасныхаа тохиргооноос энэ сайтад мэдэгдэл зөвшөөрөөд дахин оролдоорой.</p></div>`;
 if (s === "unsupported") return `<div class="notif">${head}<p>Энэ хөтөч мэдэгдэл дэмжихгүй байна. Android дээр Chrome, iPhone дээр нүүр дэлгэцэнд нэмсэн Tripp ашиглаарай.</p></div>`;
 if (s === "…") return `<div class="notif">${head}<p>Шалгаж байна…</p></div>`;
 return `<div class="notif">${head}<p>${sched}</p><button class="btn primary" type="button" data-act="pushon">${ico("bell","sm")} Мэдэгдэл асаах</button></div>`;
}
function notifPrompt() {
 if (tripPhase() === "after" || ls.get("sts:notifnag") === "no" || !["off", "ios"].includes(notifState)) return `<div id="notifPrompt"></div>`;
 return `<div id="notifPrompt" class="notif"><button class="iconbtn x" type="button" data-act="nagoff" aria-label="Хаах">${ico("x","sm")}</button><b class="t">${ico("bell","sm")} Сануулга авах уу?</b><p>Даваа, лхагва, баасан гаригт хэдэн хоног үлдсэнийг хөгжилтэй мессежтэй нь илгээнэ.</p>${notifState === "ios" ? `<button class="btn sm" type="button" data-go="crew">iPhone дээр яаж асаах вэ</button>` : `<button class="btn sm primary" type="button" data-act="pushon">Асаах</button>`}</div>`;
}
async function pushOn(btn) {
 if (!SYNC.code) { toast("Эхлээд бүлгийн аялалд нэгдээрэй"); syncDialog(); return; }
 if (!me) { toast("Эхлээд та хэн болохоо сонгоорой"); whoDialog(true); return; }
 try {
  if (btn) { btn.disabled = true; btn.textContent = "Асааж байна…"; }
  const perm = await Notification.requestPermission();
  if (perm !== "granted") { await refreshNotif(); toast("Зөвшөөрөл өгөөгүй байна"); return; }
  let reg = await swReg(); if (!reg) reg = await navigator.serviceWorker.register("sw.js");
  let sub = await reg.pushManager.getSubscription();
  if (!sub) sub = await reg.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: b64u(CFG.vapidPublicKey)});
  await saveSub(sub);
  ls.set("sts:push", "1"); await refreshNotif(); confetti({el: btn || undefined, count: 120}); toast("Мэдэгдэл асаалаа!");
  testPush(true);
 } catch(e) { console.error(e); toast("Асааж чадсангүй: " + (e.message || e)); await refreshNotif(); }
}
async function saveSub(sub) { if (!SYNC.client) await connect(); const {error} = await SYNC.client.rpc("push_subscribe", {p_code: SYNC.code, p_sub: sub.toJSON(), p_person: me || null, p_ua: navigator.userAgent.slice(0, 200)}); if (error) throw error; }
async function pushOff() { const sub = await currentSub(); if (sub) { try { if (SYNC.client) await SYNC.client.rpc("push_unsubscribe", {p_code: SYNC.code, p_endpoint: sub.endpoint}); } catch(e) {} await sub.unsubscribe(); } ls.del("sts:push"); await refreshNotif(); toast("Мэдэгдэл унтарлаа"); }
async function testPush(quiet) {
 const sub = await currentSub(); if (!sub) return;
 try { const r = await fetch(SYNC.url + "/functions/v1/tripp-push", {method: "POST", headers: {"content-type": "application/json", apikey: SYNC.key}, body: JSON.stringify({type: "test", code: SYNC.code, endpoint: sub.endpoint})});
  if (!quiet) toast(r.ok ? "Илгээлээ! Хэдэн секундэд ирнэ" : "Илгээж чадсангүй"); } catch(e) { if (!quiet) toast("Илгээж чадсангүй"); }
}

/* ================= SYNC (unchanged protocol) ================= */
const CFG = Object.assign({supabaseUrl: "", supabaseAnonKey: "", vapidPublicKey: ""}, window.TRIP_CONFIG || {});
const SB_LIB = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.4/dist/umd/supabase.js";
const SYNC = {url: ls.get("sts:sb:url") || CFG.supabaseUrl || "", key: ls.get("sts:sb:key") || CFG.supabaseAnonKey || "", code: ls.get("sts:sb:code") || "", client: null, ch: null, state: "off", msg: "", pushTimer: null, pulling: null, pushing: false, again: false};
let outbox = (() => { try { return new Set(JSON.parse(ls.get("sts:outbox") || "[]")); } catch(e) { return new Set(); } })();
const saveOutbox = () => ls.set("sts:outbox", JSON.stringify([...outbox]));
const KINDS = ["people","rates","tasks","expenses","actuals","pack","extraPack","days","places","sights","votes","res","seen"];
function getItem(kind, key) { if (kind === "people") return S.people.find(p => p.id === key); if (kind === "rates") return S.rates; return (S[kind] || {})[key]; }
function setItem(kind, key, data) { if (kind === "people") { const i = S.people.findIndex(p => p.id === key); if (i >= 0) S.people[i] = data; return; } if (kind === "rates") { S.rates = data; return; } if (!S[kind]) S[kind] = {}; S[kind][key] = data; }
function dirty(kind, key) { if (!SYNC.code) return; outbox.add(kind + "|" + key); saveOutbox(); schedulePush(); }
function markAll() { S.people.forEach(p => outbox.add("people|" + p.id)); outbox.add("rates|main"); KINDS.slice(2).forEach(k => Object.keys(S[k] || {}).forEach(id => outbox.add(k + "|" + id))); saveOutbox(); schedulePush(); }
function setSync(state, msg = "") { SYNC.state = state; SYNC.msg = msg; renderTop(); }
function loadLib() { if (window.supabase?.createClient) return Promise.resolve(); return new Promise((res, rej) => { const s = document.createElement("script"); s.src = SB_LIB; s.onload = res; s.onerror = () => rej(new Error("Failed to fetch the sync library")); document.head.appendChild(s); }); }
const cursorKey = () => "sts:cursor2:" + SYNC.code;
function friendly(err) { const m = (err && (err.message || err.msg || err.error_description)) || String(err);
 if (/PGRST202|Could not find the function|does not exist/i.test(m)) return "Өгөгдлийн сан бэлэн биш байна.";
 if (/Invalid API key|JWT|apikey|401|Unauthorized/i.test(m)) return "Supabase түлхүүрийг хүлээж авсангүй.";
 if (/Failed to fetch|NetworkError|Load failed|network/i.test(m)) return navigator.onLine ? "Сервертэй холбогдсонгүй." : "Та офлайн байна. Өөрчлөлт утсанд хадгалагдаж, дараа синк хийгдэнэ.";
 return m; }
function failed(e) { setSync(navigator.onLine ? "error" : "offline", friendly(e)); }
async function pullRaw() {
 const since = +(ls.get(cursorKey()) || 0);
 const {data, error} = await SYNC.client.rpc("trip_pull", {p_code: SYNC.code, p_since: Math.max(0, since - 3000)});
 if (error) throw error;
 let changed = 0, max = since; const fresh = [];
 (data || []).forEach(r => { max = Math.max(max, +r.updated_ms || 0); if (!KINDS.includes(r.kind) || !r.data || typeof r.data !== "object") return;
  const loc = getItem(r.kind, r.key); if ((+r.ts || 0) > (loc?.ts || 0)) { if (r.kind === "seen" && !loc && SYNC.primed && r.key !== me && person(r.key)) fresh.push(person(r.key).name); setItem(r.kind, r.key, r.data); changed++; } });
 if (fresh.length) { toast(fresh.join(", ") + " аялалд нэгдлээ!"); confetti({count: 90}); }
 ls.set(cursorKey(), String(max));
 if (changed) { save(); if (!dlg().open) rerender(); }
 setSync(outbox.size ? "syncing" : "live"); return changed;
}
function pull() { if (!SYNC.client) return Promise.resolve(0); if (SYNC.pulling) return SYNC.pulling; SYNC.pulling = pullRaw().catch(e => { failed(e); return 0; }).finally(() => { SYNC.pulling = null; }); return SYNC.pulling; }
function schedulePush() { clearTimeout(SYNC.pushTimer); if (!SYNC.client) { if (SYNC.code && !navigator.onLine) setSync("offline"); return; } setSync("syncing"); SYNC.pushTimer = setTimeout(() => push().catch(() => {}), 400); }
async function push() {
 if (!SYNC.client || !outbox.size) { if (SYNC.client && SYNC.state === "syncing") setSync("live"); return; }
 if (SYNC.pushing) { SYNC.again = true; return; }
 SYNC.pushing = true; setSync("syncing");
 try { const keys = [...outbox];
  for (let i = 0; i < keys.length; i += 200) {
   const batch = keys.slice(i, i + 200).map(k => { const j = k.indexOf("|"), kind = k.slice(0, j), key = k.slice(j + 1), d = getItem(kind, key); return d ? {k, kind, key, data: JSON.parse(JSON.stringify(d)), ts: d.ts || 0} : {k, gone: true}; });
   const items = batch.filter(b => !b.gone).map(({kind, key, data, ts}) => ({kind, key, data, ts}));
   if (items.length) { const {error} = await SYNC.client.rpc("trip_push", {p_code: SYNC.code, p_items: items}); if (error) throw error; }
   batch.forEach(b => { if (b.gone || (getItem(b.kind, b.key)?.ts || 0) === b.ts) outbox.delete(b.k); }); }
  saveOutbox(); try { SYNC.ch?.send({type: "broadcast", event: "changed", payload: {}}); } catch(e) {}
  setSync(outbox.size ? "syncing" : "live"); }
 catch(e) { failed(e); throw e; }
 finally { SYNC.pushing = false; if (SYNC.again) { SYNC.again = false; schedulePush(); } }
}
async function connect() {
 if (!(SYNC.url && SYNC.key && SYNC.code)) { setSync("off"); return false; }
 setSync("syncing");
 try { await loadLib();
  if (!SYNC.client) SYNC.client = window.supabase.createClient(SYNC.url, SYNC.key, {auth: {persistSession: false, autoRefreshToken: false, detectSessionInUrl: false}});
  await pullRaw(); SYNC.primed = true; markSeen();
  if (!SYNC.ch) { try { SYNC.ch = SYNC.client.channel("trip-" + SYNC.code, {config: {broadcast: {self: false}, presence: {key: PRES.key}}})
   .on("broadcast", {event: "changed"}, () => pull()).on("presence", {event: "sync"}, presSync).on("presence", {event: "join"}, presJoin)
   .subscribe(st => { if (st === "SUBSCRIBED") { presTrack(); setTimeout(() => { PRES.ready = true; }, 1500); } }); } catch(e) { SYNC.ch = null; } }
  await push(); return true; }
 catch(e) { failed(e); return false; }
}
function presTrack() { try { if (SYNC.ch && !document.hidden) SYNC.ch.track({me: me || null, t: Date.now()}); } catch(e) {} }
function presSync() { try { const st = SYNC.ch.presenceState(); PRES.on = new Set(Object.values(st).flat().map(m => m.me).filter(id => id && person(id))); if (!dlg().open && (view === "today" || (view === "crew" && crewSeg === "crew"))) rerender(); } catch(e) {} }
function presJoin(p) { if (!PRES.ready) return; (p.newPresences || []).forEach(m => { if (m.me && m.me !== me && !PRES.on.has(m.me) && person(m.me)) toast(person(m.me).name + " онлайн боллоо"); }); }
function markSeen() { if (!me || !SYNC.code) return; const o = S.seen[me], t = now(); if (o && t - (o.last || 0) < 10 * 60e3) return; S.seen[me] = {first: o?.first || t, last: t, ts: t}; save(); dirty("seen", me); }
function disconnect() { try { if (SYNC.ch && SYNC.client) SYNC.client.removeChannel(SYNC.ch); } catch(e) {}
 PRES.on = new Set(); PRES.ready = false; SYNC.primed = false; SYNC.ch = null; SYNC.client = null; SYNC.code = ""; ls.del("sts:sb:code"); outbox.clear(); saveOutbox(); setSync("off"); }
function newCode() { const a = "abcdefghjkmnpqrstuvwxyz23456789", r = new Uint8Array(22); crypto.getRandomValues(r); return Array.from(r, x => a[x % a.length]).join(""); }
const b64e = o => btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const b64d = s => { let b = s.replace(/-/g, "+").replace(/_/g, "/"); while (b.length % 4) b += "="; return JSON.parse(decodeURIComponent(escape(atob(b)))); };
const inviteURL = () => location.origin + location.pathname + "#join=" + b64e({u: SYNC.url, k: SYNC.key, c: SYNC.code});
function parseInvite(text) { const m = String(text || "").match(/#join=([A-Za-z0-9_\-]+)/); if (!m) return null; try { const o = b64d(m[1]); if (o && /^https:\/\//.test(o.u) && o.k && o.c && o.c.length >= 16) return o; } catch(e) {} return null; }
function rememberConn() { ls.set("sts:sb:url", SYNC.url); ls.set("sts:sb:key", SYNC.key); ls.set("sts:sb:code", SYNC.code); }
async function createTrip() { if (SYNC.code) disconnect(); Object.assign(SYNC, {url: CFG.supabaseUrl, key: CFG.supabaseAnonKey, code: newCode(), client: null, ch: null});
 markAll(); const ok = await connect(); if (ok) rememberConn(); else { const m = SYNC.msg; SYNC.code = ""; SYNC.client = null; outbox.clear(); saveOutbox(); setSync("error", m); } return ok; }
async function joinTrip(inv) {
 if (SYNC.code === inv.c) { toast("Энэ утас аль хэдийн аялалд байна"); return true; }
 if (SYNC.code) disconnect();
 Object.assign(SYNC, {url: inv.u, key: inv.k, code: inv.c, client: null, ch: null}); rememberConn(); ls.del(cursorKey());
 markAll(); const ok = await connect();
 toast(ok ? "Та нэгдлээ! Одоо бүх зүйл шууд синк хийгдэнэ" : SYNC.msg || "Холбогдсонгүй. Дахин оролдсоор байна");
 if (ok) confetti({count: 160, spread: "burst"});
 if (!me) setTimeout(() => { if (!dlg().open) whoDialog(true); }, 700); return ok;
}
let pendingInvite = null;
function banner() {
 if (!pendingInvite) return "";
 return `<div class="banner"><p><b>Таныг бүлгийн аялалд урьжээ!</b> Нэгдвэл бүх хүний төлөвлөгөө, захиалга, зардлыг шууд харна.</p><div class="row"><button class="btn primary" type="button" data-act="joinyes">Аялалд нэгдэх</button><button class="btn" type="button" data-act="joinno">Одоо биш</button></div></div>`;
}
function checkJoin() { if (!location.hash.startsWith("#join=")) return; const inv = parseInvite(location.hash); history.replaceState(null, "", location.pathname + "#" + view);
 if (!inv) { toast("Урилгын холбоос дутуу байна"); return; } if (SYNC.code === inv.c) { if (!me) setTimeout(() => whoDialog(true), 400); return; } pendingInvite = inv; }
function syncDialog() {
 const live = !!SYNC.code;
 openSheet("Бүлгийн синк", `<div class="li" style="margin-bottom:var(--space-3)"><span class="pill ${SYNC.state}" style="box-shadow:none"><i></i>${syncLabel()}</span><span class="grow sub">${esc(SYNC.msg || (live ? "Өөрчлөлт бүр хэдхэн секундэд бүх хүнд хүрнэ." : "Энэ утас бүлэгт холбогдоогүй."))}</span></div>
 ${live ? `<p style="font-size:14px;margin:0 0 var(--space-3)">Урилгын холбоостой хэн ч аяллыг харж, засаж чадна. Зөвхөн бүлэгтээ илгээгээрэй.</p>
  <div class="stack"><button class="btn primary" type="button" data-act="share">${ico("share","sm")} Урилга илгээх</button><button class="btn" type="button" data-act="copyinv">${ico("copy","sm")} Холбоос хуулах</button><button class="btn" type="button" data-act="resync">${ico("refresh","sm")} Дахин синк хийх</button><button class="btn danger" type="button" data-act="leave">${ico("door","sm")} Энэ утсыг бүлгээс салгах</button></div>`
 : `<p style="font-size:14px;margin:0 0 var(--space-3)">Найз чинь аль хэдийн үүсгэсэн бол түүнээс урилгын холбоос аваад нээгээрэй. Эсвэл холбоосоо энд буулга:</p>
  <div class="row"><input class="in grow" id="invIn" placeholder="https://…#join=…"><button class="btn" type="button" data-act="joinpaste">Нэгдэх</button></div>
  <div class="section" style="margin-top:var(--space-5)"><span class="sub">Эсвэл анхны хүн нь болж:</span></div><button class="btn primary block" type="button" data-act="create">${ico("spark","sm")} Бүлгийн аялал үүсгэх</button>`}`);
}

/* ================= EVENTS ================= */
document.addEventListener("click", async e => {
 const t = e.target.closest("button, a, [data-city]"); if (!t) return;
 const ds = t.dataset;
 if (t.hasAttribute("data-close")) { closeSheet(); return; }
 if (ds.go) { if (ds.rseg) routeSeg = ds.rseg; closeSheet(); go(ds.go); return; }
 if (ds.day) { selDay = ds.day; rerender(); const el = $(`#days [data-day="${ds.day}"]`); el?.scrollIntoView({inline: "center", block: "nearest", behavior: "smooth"}); return; }
 if (ds.hero) { heroMode = ds.hero; rerender(); return; }
 if (ds.rseg) { routeSeg = ds.rseg; ls.set("sts:rseg", routeSeg); rerender(); return; }
 if (ds.mseg) { moneySeg = ds.mseg; rerender(); return; }
 if (ds.cseg) { crewSeg = ds.cseg; rerender(); return; }
 if (ds.seecity !== undefined) { seeCity = ds.seecity; rerender(); return; }
 if (ds.city) { citySheet(ds.city); return; }
 if (ds.openday) { selDay = ds.openday; closeSheet(); go("today"); return; }
 if (ds.seeof) { seeCity = ds.seeof; routeSeg = "see"; closeSheet(); go("route"); return; }
 if (ds.pickme) { me = ds.pickme; ls.set(ME, me); closeSheet(); markSeen(); presTrack(); rerender(); toast("Сайн уу, " + person(me).name + "!"); if (notifState === "on") { const s = await currentSub(); if (s) saveSub(s).catch(() => {}); } return; }
 if (ds.check !== undefined) { const i = +ds.check, k = stepKey(selDay, i), done = !S.tasks[k]?.done; S.tasks[k] = {done, ts: now()}; save(); dirty("tasks", k); if (done) confetti({el: t, count: 70}); rerender(); return; }
 if (ds.step !== undefined) { if (ds.leg) { resDialog({leg: ds.leg}); return; } if (ds.stay) { resDialog({stay: ds.stay}); return; } stepDialog(selDay, +ds.step); return; }
 if (ds.vote) { if (!me) { whoDialog(true); return; } const k = ds.vote + "." + me, on = !S.votes[k]?.v; S.votes[k] = {v: on, ts: now()}; save(); dirty("votes", k); if (on) confetti({el: t, count: 40}); rerender(); return; }
 if (ds.editsight) { sightDialog(ds.editsight); return; }
 if (ds.exp) { expenseDialog(ds.exp); return; }
 if (ds.addleg) { resDialog({leg: ds.addleg}); return; }
 if (ds.addstay) { resDialog({stay: ds.addstay}); return; }
 if (ds.editres) { resDialog({id: ds.editres}); return; }
 if (ds.copy) { copyText(ds.copy); return; }
 if (ds.packfor) { packFor = ds.packfor; rerender(); return; }
 if (ds.themeSet) { ls.set(THEME, ds.themeSet); applyTheme(); rerender(); return; }
 if (ds.owner) { const id = ds.owner, cur = S.tasks[id]?.owner;
  openSheet("Хэн хариуцах вэ?", `<p style="margin:0 0 var(--space-3);font-size:14px">${esc(TASKS.find(x => x.id === id).t)}</p><div class="stack">${S.people.map(p => `<button class="owe" style="border:0;text-align:left" type="button" data-setowner="${id}|${p.id}">${av(p.id)}<span class="grow h3">${esc(p.name)}</span>${cur === p.id ? ico("check") : ""}</button>`).join("")}<button class="btn ghost" type="button" data-setowner="${id}|">Хэн ч биш</button></div>`); return; }
 if (ds.setowner !== undefined) { const [id, pid] = ds.setowner.split("|"); S.tasks[id] = {...(S.tasks[id] || {}), owner: pid || null, ts: now()}; save(); dirty("tasks", id); closeSheet(); rerender(); if (pid) toast(person(pid).name + " хариуцлаа"); return; }
 if (ds.settle) { const [from, to, amt] = ds.settle.split("|"), nid = uid();
  S.expenses[nid] = {desc: `Тооцоо: ${person(from).name} → ${person(to).name}`, amount: +amt, cur: "MNT", payer: from, split: [to], cat: "settle", date: todayISO(), created: now(), ts: now()};
  save(); dirty("expenses", nid); confetti({el: t, count: 150, spread: "burst"}); rerender(); toast("Тооцоо хаагдлаа!"); return; }
 if (ds.add) { const a = ds.add; closeSheet(); setTimeout(() => { if (a === "exp") expenseDialog(); if (a === "res") resDialog({kind: "plane"}); if (a === "sight") sightDialog(); if (a === "step") stepDialog(selDay || defaultDay(), null); }, 120); return; }
 const act = ds.act; if (!act) return;
 if (act === "who") whoDialog();
 if (act === "names") namesDialog();
 if (act === "sync") syncDialog();
 if (act === "fab") { if (view === "money") expenseDialog(); else addMenu(); }
 if (act === "editday") dayDialog(selDay);
 if (act === "addstep") stepDialog(selDay, null);
 if (act === "addsight") sightDialog();
 if (act === "newres") resDialog({kind: "plane"});
 if (act === "celebrate") { confetti({el: t, count: 180, spread: "burst"}); setTimeout(() => confetti({count: 120, spread: "burst"}), 500); }
 if (act === "pushon") pushOn(t);
 if (act === "pushoff") pushOff();
 if (act === "testpush") { testPush(); confetti({el: t, count: 50}); }
 if (act === "nagoff") { ls.set("sts:notifnag", "no"); $("#notifPrompt").outerHTML = `<div id="notifPrompt"></div>`; }
 if (act === "share") { const url = inviteURL(); if (navigator.share) { try { await navigator.share({title: "Tripp · Шинэ жилийн аялал", text: "Манай аялалд нэгдээрэй! 🎆", url}); } catch(e) {} } else copyText(url); }
 if (act === "copyinv") copyText(inviteURL());
 if (act === "resync") { ls.del(cursorKey()); markAll(); await connect(); toast("Синк хийлээ"); closeSheet(); }
 if (act === "leave") { if (!t.dataset.armed) { t.dataset.armed = 1; t.textContent = "Итгэлтэй байна уу? Дахин дар"; return; } await pushOff().catch(() => {}); disconnect(); closeSheet(); rerender(); toast("Салгалаа. Мэдээлэл энэ утсанд үлдсэн"); }
 if (act === "create") { t.disabled = true; t.textContent = "Үүсгэж байна…"; const ok = await createTrip(); closeSheet(); rerender(); if (ok) { confetti({count: 160, spread: "burst"}); toast("Бэлэн! Одоо найзуудаа урь"); } else toast(SYNC.msg || "Үүсгэж чадсангүй"); }
 if (act === "joinpaste") { const inv = parseInvite($("#invIn")?.value); if (!inv) { toast("Холбоос буруу байна"); return; } closeSheet(); await joinTrip(inv); rerender(); }
 if (act === "joinyes") { t.disabled = true; t.textContent = "Нэгдэж байна…"; const inv = pendingInvite; pendingInvite = null; await joinTrip(inv); rerender(); }
 if (act === "joinno") { pendingInvite = null; rerender(); if (!me) whoDialog(true); }
});
document.addEventListener("change", e => {
 const t = e.target, ds = t.dataset;
 if (ds.task) { S.tasks[ds.task] = {...(S.tasks[ds.task] || {}), done: t.checked, ts: now()}; save(); dirty("tasks", ds.task); if (t.checked) confetti({el: t, count: 60}); rerender(); }
 if (ds.pk) { const pid = packFor || me || S.people[0].id, cur = S.pack[pid]?.items || {}; S.pack[pid] = {items: {...cur, [ds.pk]: t.checked}, ts: now()}; save(); dirty("pack", pid); if (t.checked) { const all = [...PACK.flatMap(g => g.k.map((k, i) => g.id + ":" + i)), ...(S.extraPack[pid]?.items || []).map(x => "x:" + x.id)]; if (all.every(k => S.pack[pid].items[k])) { confetti({count: 220, spread: "burst"}); toast("Ачаа бүрэн бэлэн! 🎉"); } } rerender(); }
 if (ds.actUsd) { const v = parseFloat(t.value); S.actuals[ds.actUsd] = {usd: v > 0 ? v : null, ts: now()}; save(); dirty("actuals", ds.actUsd); rerender(); }
 if (ds.rate) { const v = parseFloat(t.value); if (v > 0) { S.rates = {...S.rates, [ds.rate]: v, ts: now()}; save(); dirty("rates", "main"); rerender(); } }
 if (t.matches("[data-conv-c]")) { conv.c = t.value; rerender(); }
});
document.addEventListener("input", e => { if (e.target.matches("[data-conv-a]")) { conv.a = parseFloat(e.target.value) || 0; const y = scrollY; const el = e.target; const pos = el.selectionStart; rerender(); const n = $("[data-conv-a]"); n.focus(); try { n.setSelectionRange(pos, pos); } catch(_) {} scrollTo({top: y}); } });
document.addEventListener("submit", e => { if (!e.target.matches("[data-addpack]")) return; e.preventDefault(); const inp = e.target.querySelector("input"), tx = inp.value.trim(); if (!tx) return;
 const pid = packFor || me || S.people[0].id, cur = S.extraPack[pid]?.items || []; S.extraPack[pid] = {items: [...cur, {id: uid(), t: tx}], ts: now()}; save(); dirty("extraPack", pid); rerender(); setTimeout(() => $("[data-addpack] input")?.focus(), 0); });
$("#sheet").addEventListener("click", e => { if (e.target === e.currentTarget) closeSheet(); });
addEventListener("hashchange", () => { if (location.hash.startsWith("#join=")) { checkJoin(); rerender(); return; } const h = location.hash.slice(1); if (TABS.some(t => t[0] === h) && h !== view) go(h, false); });
addEventListener("online", () => { if (SYNC.code) { SYNC.client ? pull().then(() => push().catch(() => {})) : connect(); } });
addEventListener("offline", () => { if (SYNC.code) setSync("offline", "Та офлайн байна. Өөрчлөлт утсанд хадгалагдаж, дараа синк хийгдэнэ."); });
document.addEventListener("visibilitychange", () => { if (!SYNC.code) return; if (document.hidden) { try { SYNC.ch?.untrack(); } catch(e) {} } else { presTrack(); markSeen(); SYNC.client ? pull().then(() => push().catch(() => {})) : connect(); } });
setInterval(() => { if (SYNC.code && document.visibilityState === "visible") { if (SYNC.client) pull().then(() => outbox.size && push().catch(() => {})); else if (navigator.onLine) connect(); } }, 20000);

/* ================= BOOT ================= */
applyTheme();
$("#dock").innerHTML = `<div class="dock-in"><nav class="tabbar" id="tabs" aria-label="Цэс"></nav><button class="fab" type="button" data-act="fab" aria-label="Нэмэх">${ico("plus")}</button></div>`;
checkJoin();
go(view, false);
setInterval(renderCount, 1000);
if (SYNC.code) connect(); else setSync("off");
if (!me && !pendingInvite) setTimeout(() => { if (!dlg().open) whoDialog(true); }, 500);
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").then(() => refreshNotif()).catch(() => refreshNotif()); else refreshNotif();
