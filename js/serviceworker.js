const zapapp = "zap-app-v1"
const assets = [
  "/",
  "/index.html",
  "/css/*",
  "/js/*",
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