const staticCacheName = 'site-static';
const dynamicCacheName = 'site-dynamic';
const apiBaseUrl = 'localhost:3000'

const assets = [
  '/'
];

// install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        cache.addAll(assets);
      })
  );
});

// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys()
      .then(keys => {
        // deleting old caches
        return Promise.all(keys
          .filter(key => key !== staticCacheName && key !== dynamicCacheName)
          .map(key => caches.delete(key)))
      })
  )
});

// fetch event
self.addEventListener('fetch', evt => {
  // if making a request to the api then don't intercept
  if(evt.request.url.indexOf(apiBaseUrl) === -1) {
    evt.respondWith(
      caches.match(evt.request)
        .then(cacheResponse => {
          // return the cache matching value to the request OR
          // make the request to the server AND store the response on the cache
          return cacheResponse || fetch(evt.request).then(fetchRes => {
            return caches.open(dynamicCacheName).then(cache => {
              cache.put(evt.request.url, fetchRes.clone());
              return fetchRes;
            })
          });
        })
    );
  }
});
