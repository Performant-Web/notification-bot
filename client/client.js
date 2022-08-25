const publicVapidKey = 'BHq12P26bh0tRLXOShtMhGyLljSFfzzYTYejeXp1I-RTMzvZeiQ056OWGHFowb61dWaxxkB5ZgZZ8a6RkBg3Kow';

if ('serviceWorker' in navigator) {
    registerServiceWorker().catch(console.log);
}

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/',
        });

    await navigator.serviceWorker.ready;

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'Content-Type': 'application/json',
        },
    });
}