const zapapp = "zap-app-v1"
const assets = [
  "/",
  "/index.html",
  "/css/main.css",
  "/css/bootstrap.min.css",
  "/css/bootstrap.min.css.map",
  "/js/bootstrap.min.js",
  "/js/bootstrap.min.js.map",
  "/js/firebase-analytics-compat.js",
  "/js/firebase-analytics-compat.js.map",
  "/js/firebase-app-compat.js",
  "/js/firebase-app-compat.js.map",
  "/js/firebase-auth-compat.js",
  "/js/firebase-auth-compat.js.map",
  "/js/firebase-database-compat.js",
  "/js/firebase-database-compat.js.map",
  "/js/firebase-firestore-compat.js",
  "/js/firebase-firestore-compat.js.map",
  "/js/firebase-storage-compat.js",
  "/js/firebase-storage-compat.js.map",
  "/js/geol.js",
  "/js/jquery-3.6.0.min.map",
  "/js/jquery.min.js",
  "/js/main.js",
  "/js/popper.min.js",
  "/js/popper.min.js.map",
  "/js/serviceWorker.js",
  "/manifest.json"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(zapapp).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})