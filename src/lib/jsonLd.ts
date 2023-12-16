import { type CollectionEntry } from 'astro:content'

// Function to create a JsonLd acording to the type
export default function jsonLDGenerator({
  type,
  post,
}: {
  type: string
  post: CollectionEntry<'blog'>
}) {
  if (type === 'post') {
    return `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${post.data.excerpt}",
  "image": "${post.data.image.src}",  
  "author": {
    "@type": "Person",
    "name": "Hrihorii Ilin"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "DevOpSick",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.devopsick.com/favicon.ico"
    }
  },
  "datePublished": ${post.data.date}
}
</script>`
  }
  return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DevOpSick",
        "image": "/og-image.jpg",
        "@id": "",
        "url": "https://www.devopsick.com",
        "telephone": "+380964630524",
        "priceRange": "40$+",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bezvirnitskaya 29b street",
          "addressLocality": "Poltava",
          "postalCode": "36015",
          "addressCountry": "Ukraine"
        }  
      }
      </script>`
}
