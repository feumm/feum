/* feum service worker — enables install + offline cache */
  const CACHE = 'feum-v34';
  self.addEventListener('install', (e) => { self.skipWaiting(); });
  self.addEventListener('activate', (e) => {
    e.waitUntil(
      Promise.all([
        caches.keys().then((keys) => Promise.all(
          keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
        )),
        self.clients.claim(),
      ])
    );
  });
  self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        try {
          const res = await fetch(req);
          if (res && res.status === 200 && res.type === 'basic') cache.put(req, res.clone());
          return res;
        } catch (err) {
          const cached = await cache.match(req);
          if (cached) return cached;
          throw err;
        }
      })
    );
  });
