/* feum service worker — enables install + offline cache */
  const CACHE = 'feum-v12';
  self.addEventListener('install', (e) => { self.skipWaiting(); });
  self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
  self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => {
          if (res && res.status === 200 && res.type === 'basic') cache.put(req, res.clone());
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
  });
  