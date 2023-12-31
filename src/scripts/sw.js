import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

skipWaiting();
clientsClaim();

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ url }) => url.origin,
    new StaleWhileRevalidate({
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200],
            })],
    }),
);

registerRoute(
    ({ request }) => request.destination === 'img',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
});

self.addEventListener('push', () => {
    console.log('Service Worker: Pushed');
});
