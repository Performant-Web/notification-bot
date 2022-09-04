const cacheName = 'store';
const cacheFiles = [
    '/',
    '/index.html',
    '/redirect.html',
    '/redirect.js',
    '/client.js',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(self.skipWaiting());
    e.waitUntil((async () => {
      const cache = await caches.open(cacheName);
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(cacheFiles);
    })());
  });

self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) { return r; }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })());
  });

  self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
    e.waitUntil(caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key === cacheName) { return; }
        return caches.delete(key);
      }));
    }));
  });

self.addEventListener('push', (event) => {
    const data = event.data.json();
    self.registration.showNotification(
        data.title,
        {
            body: data.body,
            subtitle: 'test',
            icon: data.icon,
            image: data.image,
            badge: '',
            data: { url: data.url },
            // actions: [{ action: 'open_url', title: 'Read Now' }],
        },
    );
});

self.addEventListener('notificationclick', (event) => {
    // clicking anywhere on notification
    // event.notification.close();

// Attempt to extract notification URL
const url = `/redirect?url=${event.notification.data.url}`;
console.log(url);

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window',
  }).then((clientList) => {
    console.log(clientList);
    for (const client of clientList) {
      console.log(client);
      if (client) {
        console.log('focus');
        client.navigate(url);
        client.focus();
      }
    }
    if (clients.openWindow) {
      console.log('open');
      clients.openWindow(url);
    }
  }));

    // clients.openWindow(`/redirect?url=${event.notification.data.url}`);
    // clicking action button - can add more if needed, maybe dependent on user agent
    /* switch (event) {
      case 'open_url':
      clients.openWindow(`/redirect?url=${event.notification.data.url}`);
      break;
    } */
  }
  , false);