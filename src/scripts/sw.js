import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

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
        cacheName: 'images-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

registerRoute(
    ({ request }) => request.destination === 'icon',
    new CacheFirst({
        cacheName: 'icon-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

registerRoute(
    ({ request }) => request.destination === 'data',
    new CacheFirst({
        cacheName: 'partners-cache',
    }),
);

self.addEventListener('install', () => {
    console.log('Service Worker: Installed');
});

self.addEventListener('push', () => {
    console.log('Service Worker: Pushed');
});
