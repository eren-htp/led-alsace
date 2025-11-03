/**
 * Données structurées Schema.org pour LED Alsace
 * Format JSON-LD pour améliorer le référencement et l'affichage dans les résultats de recherche
 */

// Organisation principale
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ledalsace.com/#organization",
  "name": "LED Alsace",
  "legalName": "LED Alsace",
  "url": "https://www.ledalsace.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.ledalsace.com/logo-lumineuse-alsace.jpg",
    "width": 250,
    "height": 250
  },
  "image": [
    "https://www.ledalsace.com/logo-lumineuse-alsace.jpg"
  ],
  "description": "LED Alsace est votre partenaire de confiance pour tous vos projets d'enseignes Lumineuse, signalétique et marquage en Alsace depuis 2014. Fabrication française, atelier à Ostwald près de Strasbourg.",
  "foundingDate": "2014",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ostwald",
    "addressLocality": "Strasbourg",
    "addressRegion": "Alsace",
    "postalCode": "67540",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.5434,
    "longitude": 7.7521
  },
  "telephone": "+33240590935",
  "email": "contact@ledalsace.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 48.5434,
      "longitude": 7.7521
    },
    "geoRadius": "100000"
  },
  "sameAs": [
    "https://www.instagram.com/ledalsace/",
    "https://snapchat.com/t/CLVnjhS4"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  }
}

// Services offerts
export const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Enseignes Lumineuse",
    "provider": {
      "@id": "https://www.ledalsace.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Conception, fabrication et installation d'enseignes Lumineuse lumineuses sur mesure pour commerces et entreprises en Alsace."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Signalétique",
    "provider": {
      "@id": "https://www.ledalsace.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Solutions de signalétique intérieure et extérieure : panneaux, totems, fléchage, signalisation."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marquage Véhicule",
    "provider": {
      "@id": "https://www.ledalsace.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Marquage publicitaire de véhicules : lettrage, covering partiel ou total, adhésifs personnalisés."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Impression Grand Format",
    "provider": {
      "@id": "https://www.ledalsace.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Impression grand format : bâches, kakémonos, affiches, panneaux publicitaires."
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marquage Vitrine",
    "provider": {
      "@id": "https://www.ledalsace.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Vitrophanie et marquage de vitrines : adhésifs décoratifs, lettres découpées, films occultants."
  }
]

// Breadcrumb pour la navigation
export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// FAQ Schema pour les pages de services
export const getFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// Review Schema pour les témoignages
export const getReviewSchema = (reviews) => {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://www.ledalsace.com/#organization"
    },
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.text,
    "publisher": {
      "@type": "Organization",
      "name": review.company
    }
  }))
}

// WebSite Schema avec SearchAction
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ledalsace.com/#website",
  "url": "https://www.ledalsace.com",
  "name": "LED Alsace",
  "description": "Spécialiste des enseignes Lumineuse et de la signalétique en Alsace",
  "publisher": {
    "@id": "https://www.ledalsace.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.ledalsace.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "inLanguage": "fr-FR"
}

