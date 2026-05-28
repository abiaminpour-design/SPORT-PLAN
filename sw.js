const CACHE_NAME = 'sport-plan-v1';
const urlsToCache = [
  '/SPORT-PLAN/',
  '/SPORT-PLAN/index.html',
  '/SPORT-PLAN/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
