self.addEventListener("install" , evt => {
  evt.waitUntil(caches.open("main_cache").then(cache => cache.addAll(["/parser/README.txt"])));
  self.skipWaiting();
});

self.addEventListener("activate" , evt => {
  console.log(evt);
  clients.claim();
});

self.addEventListener("fetch" , evt => {
  console.log(evt);
  evt.respondWith(new Response("from cache"))
});

/*
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        // Try the cache first.
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse !== undefined) {
            // Cache hit, let's send the cached resource.
            return cachedResponse;
        } else {
            // Nothing in cache, let's go to the network.

            // ...... truncated ....
        }
    }
}
*/
