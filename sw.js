self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cronograma-app-v2').then((cache) => {
      return cache.addAll([
        './index.html',
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

self.addEventListener('push', (e) => {
  const options = {
    body: e.data ? e.data.text() : '¡Atención! Hay un cambio en el cronograma eléctrico.',
    icon: './icono.png',
    badge: './icono.png'
  };
  e.waitUntil(
    self.registration.showNotification('Cronograma Eléctrico', options)
  );
});
