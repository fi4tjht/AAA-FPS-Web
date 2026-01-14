self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('fps-cache').then(cache => cache.addAll([
      './index.html',
      './manifest.json',
      './assets/shoot.mp3',
      './assets/hit.mp3',
      './assets/explosion.mp3',
      './assets/pickup.mp3',
      './assets/death.mp3',
      './assets/levelup.mp3'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
