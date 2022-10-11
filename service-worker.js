var cacheName = 'v1.0'

var cacheAssets = [
    'index.html',
    'acerca.html',
    'mision.html',
    'vision.html',
    'contacto.html',
    '/js/main.js',
    '/css/style.css',
    '/img/acerca-de.png',
    '/img/vision.jpg',
    '/img/mision.webp',
    '/img/sw.jpeg'
]

//Instalación

self.addEventListener('install', e => {
    console.log('Service Worker: Instalado');
    e.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Cacheando archivos');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    );
});

//Activación
self.addEventListener('activate' , e => {
    console.log('Service Worker: Instalado');
});

// Fetch

self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});