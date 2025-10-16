import { useEffect } from 'react'

/**
 * Composant SEO pour gérer les meta tags dynamiques de chaque page
 * Utilise l'API DOM native pour modifier le <head> du document
 */
function SEO({ 
  title, 
  description, 
  keywords,
  ogType = 'website',
  ogImage,
  canonicalUrl,
  structuredData 
}) {
  const siteName = 'LED Alsace'
  const defaultImage = 'https://www.ledalsace.com/logo-led-alsace.jpg'
  const baseUrl = 'https://www.ledalsace.com'
  
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Spécialiste Enseigne LED & Signalétique en Alsace`
  const finalDescription = description || 'LED Alsace, votre partenaire pour enseignes LED, signalétique et marquage véhicule en Alsace. Plus de 10 ans d\'expérience. Devis gratuit en 24h.'
  const finalImage = ogImage || defaultImage
  const finalCanonical = canonicalUrl || baseUrl

  useEffect(() => {
    // Mettre à jour le titre
    document.title = fullTitle
    
    // Mettre à jour ou créer les meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name'
      let tag = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
      }
      
      tag.setAttribute('content', content)
    }
    
    // Meta tags de base
    updateMetaTag('description', finalDescription)
    if (keywords) updateMetaTag('keywords', keywords)
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    updateMetaTag('googlebot', 'index, follow')
    updateMetaTag('author', 'LED Alsace')
    updateMetaTag('geo.region', 'FR-67')
    updateMetaTag('geo.placename', 'Ostwald, Strasbourg')
    updateMetaTag('geo.position', '48.5434;7.7521')
    updateMetaTag('ICBM', '48.5434, 7.7521')
    
    // Open Graph
    updateMetaTag('og:type', ogType, true)
    updateMetaTag('og:url', finalCanonical, true)
    updateMetaTag('og:title', fullTitle, true)
    updateMetaTag('og:description', finalDescription, true)
    updateMetaTag('og:image', finalImage, true)
    updateMetaTag('og:site_name', siteName, true)
    updateMetaTag('og:locale', 'fr_FR', true)
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:url', finalCanonical)
    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', finalDescription)
    updateMetaTag('twitter:image', finalImage)
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', finalCanonical)
    
    // Données structurées JSON-LD
    if (structuredData) {
      // Supprimer les anciens scripts de données structurées
      const oldScripts = document.querySelectorAll('script[type="application/ld+json"]')
      oldScripts.forEach(script => script.remove())
      
      // Ajouter le nouveau script
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
    
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = 'fr'
    
  }, [fullTitle, finalDescription, keywords, ogType, finalImage, finalCanonical, structuredData])

  return null
}

export default SEO

