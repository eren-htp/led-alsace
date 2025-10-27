/**
 * Configuration du maillage interne pour améliorer le SEO
 * Liens entre pages de services avec ancres optimisées
 */

export const serviceLinks = {
  enseignes: {
    related: [
      { url: '/services/neon-lumineuse', text: 'Néon Lumineuse personnalisé', description: 'Découvrez nos néons Lumineuse modernes' },
      { url: '/services/caisson-ajoure', text: 'Caissons ajourés et lettres boîtier', description: 'Enseignes Lumineuse en relief' },
      { url: '/services/totems-lumineux', text: 'Totems lumineux', description: 'Signalétique extérieure haute visibilité' },
      { url: '/services/enseigne-drapeau', text: 'Enseignes drapeau', description: 'Enseignes perpendiculaires pour façades' }
    ]
  },
  
  marquageVitrine: {
    related: [
      { url: '/services/vitrophanie', text: 'Vitrophanie professionnelle', description: 'Adhésifs décoratifs pour vitrines' },
      { url: '/services/impression-grand-format', text: 'Impression grand format', description: 'Bâches et kakémonos' },
      { url: '/services/signaletique', text: 'Signalétique intérieure', description: 'Panneaux et fléchage' }
    ]
  },
  
  impressionGrandFormat: {
    related: [
      { url: '/services/marquage-vitrine', text: 'Marquage vitrine', description: 'Lettres découpées et adhésifs' },
      { url: '/services/impression-papier', text: 'Impression papier', description: 'Cartes de visite et flyers' },
      { url: '/services/marquage-vehicule', text: 'Marquage véhicule', description: 'Covering et lettrage' }
    ]
  },
  
  marquageVehicule: {
    related: [
      { url: '/services/impression-grand-format', text: 'Impression grand format', description: 'Supports pour covering' },
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Design de votre marquage' },
      { url: '/services/textile-epi', text: 'Textile personnalisé', description: 'Uniformes assortis' }
    ]
  },
  
  textileEPI: {
    related: [
      { url: '/services/objets-publicitaires', text: 'Objets publicitaires', description: 'Goodies personnalisés' },
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Design de votre logo' },
      { url: '/services/impression-papier', text: 'Impression papier', description: 'Supports de communication' }
    ]
  },
  
  signaletique: {
    related: [
      { url: '/services/enseigne-dibond', text: 'Enseignes dibond', description: 'Panneaux aluminium composite' },
      { url: '/services/totems-lumineux', text: 'Totems lumineux', description: 'Signalétique extérieure' },
      { url: '/services/marquage-vitrine', text: 'Marquage vitrine', description: 'Vitrophanie et adhésifs' }
    ]
  },
  
  creationGraphique: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Réalisation de votre enseigne' },
      { url: '/services/impression-papier', text: 'Impression papier', description: 'Cartes de visite et supports' },
      { url: '/services/textile-epi', text: 'Textile personnalisé', description: 'Vêtements de travail' }
    ]
  },
  
  neonLED: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Autres types d\'enseignes lumineuses' },
      { url: '/services/caisson-ajoure', text: 'Caissons ajourés', description: 'Lettres boîtier 3D' },
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Design de votre néon' }
    ]
  },
  
  impressionPapier: {
    related: [
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Design de vos supports' },
      { url: '/services/impression-grand-format', text: 'Impression grand format', description: 'Affiches et bâches' },
      { url: '/services/objets-publicitaires', text: 'Objets publicitaires', description: 'Goodies personnalisés' }
    ]
  },
  
  objetsPublicitaires: {
    related: [
      { url: '/services/textile-epi', text: 'Textile personnalisé', description: 'Vêtements de travail' },
      { url: '/services/impression-papier', text: 'Impression papier', description: 'Supports de communication' },
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Design de votre logo' }
    ]
  },
  
  vitrophanie: {
    related: [
      { url: '/services/marquage-vitrine', text: 'Marquage vitrine', description: 'Lettres découpées et adhésifs' },
      { url: '/services/impression-grand-format', text: 'Impression grand format', description: 'Bâches et kakémonos' },
      { url: '/services/signaletique', text: 'Signalétique', description: 'Panneaux directionnels' }
    ]
  },
  
  decoupeLaser: {
    related: [
      { url: '/services/decoupe-cnc', text: 'Découpe CNC', description: 'Fraisage numérique' },
      { url: '/services/enseigne-dibond', text: 'Enseignes dibond', description: 'Panneaux aluminium' },
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Design de vos pièces' }
    ]
  },
  
  decoupeCNC: {
    related: [
      { url: '/services/decoupe-laser', text: 'Découpe laser', description: 'Découpe de précision' },
      { url: '/services/caisson-ajoure', text: 'Caissons ajourés', description: 'Lettres boîtier 3D' },
      { url: '/services/enseigne-dibond', text: 'Enseignes dibond', description: 'Panneaux aluminium' }
    ]
  },
  
  enseigneDibond: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Enseignes lumineuses' },
      { url: '/services/decoupe-cnc', text: 'Découpe CNC', description: 'Découpe sur mesure' },
      { url: '/services/signaletique', text: 'Signalétique', description: 'Panneaux directionnels' }
    ]
  },
  
  totemsLumineux: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Enseignes lumineuses' },
      { url: '/services/signaletique', text: 'Signalétique', description: 'Panneaux directionnels' },
      { url: '/services/enseigne-dibond', text: 'Enseignes dibond', description: 'Panneaux aluminium' }
    ]
  },
  
  enseigneDrapeau: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Autres types d\'enseignes' },
      { url: '/services/enseigne-dibond', text: 'Enseignes dibond', description: 'Panneaux aluminium' },
      { url: '/services/signaletique', text: 'Signalétique', description: 'Panneaux directionnels' }
    ]
  },
  
  caissonAjoure: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Autres types d\'enseignes lumineuses' },
      { url: '/services/neon-lumineuse', text: 'Néon Lumineuse', description: 'Lettres lumineuses' },
      { url: '/services/decoupe-cnc', text: 'Découpe CNC', description: 'Découpe de précision' }
    ]
  },
  
  ecransLED: {
    related: [
      { url: '/services/enseignes', text: 'Enseignes Lumineuse', description: 'Enseignes lumineuses classiques' },
      { url: '/services/totems-lumineux', text: 'Totems lumineux', description: 'Signalétique extérieure' },
      { url: '/services/creation-graphique', text: 'Création graphique', description: 'Contenu pour vos écrans' }
    ]
  }
}

export default serviceLinks

