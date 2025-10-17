/**
 * Configuration SEO pour toutes les pages de services
 * Contient: title, description, keywords, H1, H2, FAQs pour chaque service
 */

export const servicesSEOConfig = {
  enseignes: {
    title: "Enseignes LED Lumineuses sur Mesure en Alsace",
    description: "Conception, fabrication et installation d'enseignes LED lumineuses sur mesure pour commerces et entreprises en Alsace. Devis gratuit sous 24h.",
    keywords: "enseigne LED, enseigne lumineuse Alsace, enseigne LED Strasbourg, fabrication enseigne, enseigne sur mesure",
    canonicalUrl: "https://www.ledalsace.com/services/enseignes",
    h1: "Enseignes LED Lumineuses sur Mesure en Alsace",
    breadcrumb: [
      { name: "Services", url: "/services" },
      { name: "Enseignes LED", url: "/services/enseignes" }
    ],
    faqs: [
      {
        question: "Quel est le prix d'une enseigne LED ?",
        answer: "Le prix d'une enseigne LED varie de 500€ à 5000€ selon la taille, le type de LED, la complexité du design et les finitions. Nous proposons un devis gratuit personnalisé sous 24h."
      },
      {
        question: "Quelle est la durée de vie d'une enseigne LED ?",
        answer: "Nos enseignes LED ont une durée de vie de 50 000 heures en moyenne, soit environ 10 ans d'utilisation normale. Les LED sont garanties 3 ans."
      },
      {
        question: "Faut-il une autorisation pour installer une enseigne ?",
        answer: "Oui, une déclaration préalable en mairie est nécessaire pour l'installation d'une enseigne. Nous vous accompagnons dans les démarches administratives."
      },
      {
        question: "Quel délai pour la fabrication d'une enseigne LED ?",
        answer: "Le délai de fabrication est de 2 à 4 semaines selon la complexité. Pour les projets urgents, nous proposons un service express sous 10 jours."
      },
      {
        question: "Les enseignes LED consomment-elles beaucoup d'électricité ?",
        answer: "Non, les enseignes LED consomment 80% moins d'électricité que les enseignes néon traditionnelles. Une enseigne LED moyenne consomme environ 50W."
      }
    ]
  },
  
  marquageVitrine: {
    title: "Marquage Vitrine et Vitrophanie en Alsace",
    description: "Marquage de vitrines, vitrophanie et adhésifs décoratifs pour commerces en Alsace. Lettres découpées, films occultants, stickers personnalisés.",
    keywords: "marquage vitrine, vitrophanie Alsace, adhésif vitrine, lettres découpées, film occultant Strasbourg",
    canonicalUrl: "https://www.ledalsace.com/services/marquage-vitrine",
    h1: "Marquage Vitrine et Vitrophanie Professionnelle en Alsace",
    breadcrumb: [
      { name: "Services", url: "/services" },
      { name: "Marquage Vitrine", url: "/services/marquage-vitrine" }
    ],
    faqs: [
      {
        question: "Qu'est-ce que la vitrophanie ?",
        answer: "La vitrophanie est une technique de marquage de vitrine utilisant des adhésifs spéciaux. Elle permet de décorer, occulter ou communiquer sur vos vitrines de manière professionnelle et esthétique."
      },
      {
        question: "Le marquage vitrine est-il facile à retirer ?",
        answer: "Oui, nos adhésifs sont conçus pour être retirés facilement sans laisser de traces ni endommager la vitre. Idéal pour les promotions temporaires ou les changements saisonniers."
      },
      {
        question: "Peut-on poser des adhésifs sur toutes les vitrines ?",
        answer: "Oui, nos adhésifs s'adaptent à tous types de vitrines : simple vitrage, double vitrage, vitrines courbes. Nous utilisons des matériaux adaptés à chaque support."
      },
      {
        question: "Combien de temps tient un marquage vitrine ?",
        answer: "En extérieur, nos adhésifs tiennent 3 à 5 ans selon l'exposition. En intérieur, la durée de vie peut atteindre 7 à 10 ans."
      },
      {
        question: "Proposez-vous la pose du marquage vitrine ?",
        answer: "Oui, nous assurons la pose professionnelle de tous nos marquages vitrines en Alsace. Installation rapide et soignée garantie."
      }
    ]
  },

  // Les autres services seront ajoutés de la même manière
  // Pour l'instant, je crée un template générique pour les autres
}

// Export par défaut
export default servicesSEOConfig

