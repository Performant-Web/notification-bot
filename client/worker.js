console.log('Service worker loaded...');

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
            actions: [{ action: 'open_url', title: 'Read Now' }],
        },
    );
});

self.addEventListener('notificationclick', (event) => {
    // clicking anywhere on notification
    clients.openWindow(event.notification.data.url);
    // clicking action button - can add more if needed, maybe dependent on user agent
    switch (event) {
      case 'open_url':
      clients.openWindow(event.notification.data.url);
      break;
    }
  }
  , false);