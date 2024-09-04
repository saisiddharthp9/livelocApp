self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
  // Cache necessary files here
  event.waitUntil(
    caches.open("static-cache-v1").then((cache) => {
      return cache.addAll([
        "./", // Cache the root path
        "./app/App.js",
        "./manifest.json",
        ".app/Assets/Apocalypse.png",
        "./static/js/bundle.js",
        "./static/js/main.chunk.js",
        "./static/js/0.chunk.js",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activating...");
  // Clean up old caches here
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== "static-cache-v1") {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
