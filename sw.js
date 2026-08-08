self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cronograma-app-v1').then((cache) => {
      return cache.addAll([
    './Cronograma.html',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cronograma-app-v1').then((cache) => {
      return cache.addAll([
        './Cronograma.html',
        './manifest.json',
        './icono.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

