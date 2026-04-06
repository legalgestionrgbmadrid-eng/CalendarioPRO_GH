const CACHE_NAME='calendario-pro-cache-v1';
const urlsToCache=['./','./index.html',
'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.css',
'https://cdn.jsdelivr.net/npm/@fullcalendar/timegrid@6.1.8/index.global.min.js',
'https://cdn.jsdelivr.net/npm/@fullcalendar/list@6.1.8/index.global.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
