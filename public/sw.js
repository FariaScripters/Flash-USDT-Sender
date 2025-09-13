const CACHE_NAME = "flash-usdt-v1"
const urlsToCache = ["/", "/manifest.json", "/icon-192.jpg", "/icon-512.jpg"]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

// SEO Web Worker functionality
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "GENERATE_META") {
    const { title, description, url } = event.data.payload

    // Generate structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: title,
      description: description,
      url: url,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
    }

    event.ports[0].postMessage({
      type: "META_GENERATED",
      payload: { structuredData },
    })
  }
})
