import { Button } from '@/components/ui/button.jsx'
import { 
  Lightbulb, Car, Printer, Palette, Monitor, Scissors,
  Shirt, Store, Stamp, Layers, Zap, Gift, FileText, ArrowRight, Users, Wifi
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { servicesSchema } from '../utils/structuredData.js'
import enseigneLumineuse from '../assets/services/Enseigne-lumineuse.webp'
import signaletiqueImg from '../assets/services/signaletique.webp'
import textileImg from '../assets/services/textile.webp'
import vehiculeImg from '../assets/services/vehicule.webp'
import neonLedImg from '../assets/services/led-neon.webp'
import vitrophanieImg from '../assets/services/vitrophanie.webp'
import adhesifGrandFormatImg from '../assets/services/addessifgrandformat.webp'
import impressionPapierImg from '../assets/services/impressionpapier.webp'
import creationGraphiqueImg from '../assets/services/creation-graphique.webp'
import objetsPublicitairesImg from '../assets/ObjetsPublicitaire.webp'
import decoupeLaserImg from '../assets/DecoupeLaser.webp'
import decoupeCNCImg from '../assets/DecoupeCNC.webp'
import enseigneDibondImg from '../assets/EnseigneenDibond.JPG'
import totemsLumineuxImg from '../assets/Totem.JPG'
import enseigneDrapeauImg from '../assets/Enseignedoubleface.webp'
import caissonAjoureImg from '../assets/Enseignelumineuse3.JPG'

function Services() {
  const navigate = useNavigate()

  const mainServices = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Enseignes lumineuses",
      slug: "enseignes",
      image: enseigneLumineuse,
      description: "Enseignes lumineuses sur mesure : lettres individuelles LED, caissons lumineux, panneaux digitaux. Plusieurs matériaux et finitions disponibles pour une visibilité optimale jour et nuit.",
      features: [
        "Lettres boîtier rétro-éclairées",
        "Caissons lumineux double face",
        "Panneaux LED digitaux",
        "Enseignes néon LED flexibles",
        "Installation et maintenance"
      ]
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Signalétique",
      slug: "signaletique",
      image: signaletiqueImg,
      description: "Panneaux de chantier, stop trottoir, éléments de signalétique, drapeaux. Solutions complètes pour votre communication extérieure et intérieure.",
      features: [
        "Panneaux de chantier",
        "Signalétique directionnelle",
        "Stop trottoir",
        "Drapeaux publicitaires",
        "Totems et pylônes"
      ]
    },
    {
      icon: <Shirt className="w-12 h-12" />,
      title: "Marquage textile",
      slug: "textile-epi",
      image: textileImg,
      description: "Marquage textile et vente de vêtements de travail, E.P.I (Équipements de Protection Individuelle). Personnalisation de tous vos textiles professionnels.",
      features: [
        "Flocage textile",
        "Broderie personnalisée",
        "Sérigraphie",
        "Vêtements de travail",
        "E.P.I personnalisés"
      ]
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "Marquage véhicule",
      slug: "marquage-vehicule",
      image: vehiculeImg,
      description: "Marquage professionnel pour tous vos véhicules et utilitaires. Indispensable pour votre visibilité et communication d'entreprise. Covering complet ou partiel.",
      features: [
        "Covering total ou partiel",
        "Adhésifs découpés",
        "Marquage vitres",
        "Flocage magnétique",
        "Tous types de véhicules"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Néon LED",
      slug: "neon-led",
      image: neonLedImg,
      description: "Néons LED flexibles et personnalisés pour une ambiance unique. Design moderne et économie d'énergie pour vos espaces commerciaux et événementiels.",
      features: [
        "Néon LED flexible",
        "Formes personnalisées",
        "Couleurs au choix",
        "Faible consommation",
        "Installation intérieure/extérieure"
      ]
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Vitrophanie",
      slug: "vitrophanie",
      image: vitrophanieImg,
      description: "Solutions pour le marquage de vos vitrines et façades avec adhésifs découpés ou micro-perforés. Visibilité maximale pour votre commerce.",
      features: [
        "Adhésifs découpés",
        "Micro-perforé",
        "Covering vitrine",
        "Lettres adhésives",
        "Pose professionnelle"
      ]
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: "Impression adhésif grand format",
      slug: "impression-grand-format",
      image: adhesifGrandFormatImg,
      description: "Impression grand format sur adhésif pour tous vos besoins : bâches, kakémonos, adhésifs muraux. Qualité professionnelle garantie.",
      features: [
        "Bâches publicitaires",
        "Kakémonos",
        "Adhésifs muraux",
        "Impression sur dibond",
        "Toiles canvas"
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Impression papier",
      slug: "impression-papier",
      image: impressionPapierImg,
      description: "Impression offset ou numérique pour papeterie, carterie, livres et tous supports papier. Du petit au grand format.",
      features: [
        "Cartes de visite",
        "Flyers et dépliants",
        "Affiches",
        "Brochures",
        "Papeterie d'entreprise"
      ]
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Objets publicitaires",
      slug: "objets-publicitaires",
      image: objetsPublicitairesImg,
      description: "Large gamme d'objets publicitaires personnalisés pour promouvoir votre marque. Goodies et cadeaux d'entreprise sur mesure.",
      features: [
        "Stylos personnalisés",
        "Mugs et gourdes",
        "Clés USB",
        "Textiles publicitaires",
        "Accessoires de bureau"
      ]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Création graphique",
      slug: "creation-graphique",
      image: creationGraphiqueImg,
      description: "Design de A à Z : logo, flyer, affiche, menu, carte de visite, roll-up, drapeau, sticker. Votre identité visuelle entre de bonnes mains.",
      features: [
        "Création de logo",
        "Charte graphique",
        "Supports print",
        "Packaging",
        "Maquettes 3D"
      ]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Découpe laser",
      slug: "decoupe-laser",
      image: decoupeLaserImg,
      description: "Gravure laser sur différents matériaux pour rendre votre marque immortelle. Précision et qualité pour tous vos projets.",
      features: [
        "Gravure sur bois",
        "Gravure sur métal",
        "Gravure sur verre",
        "Découpe précise",
        "Personnalisation fine"
      ]
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Découpe CNC",
      slug: "decoupe-cnc",
      image: decoupeCNCImg,
      description: "Découpe personnalisée de plaque PVC, alu, dibond. Précision et finitions impeccables pour tous vos projets sur mesure.",
      features: [
        "Découpe PVC",
        "Découpe aluminium",
        "Découpe dibond",
        "Lettres découpées",
        "Formes personnalisées"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nos Solutions"
        description="Découvrez toutes nos solutions professionnelles : enseignes LED, signalétique, marquage véhicule, impression grand format, création graphique. Fabrication française en Alsace."
        keywords="solutions signalétique, services enseignes LED, marquage véhicule, impression grand format, création graphique Alsace, signalétique Strasbourg"
        canonicalUrl="https://www.ledalsace.com/services"
        structuredData={servicesSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Nos Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des solutions sur mesure pour mettre en{' '}
              <span className="text-yellow-400 animate-glow">lumière</span> vos projets
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              De l'enseigne LED à la signalétique complète, nous proposons une gamme complète de solutions professionnelles pour donner vie à vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Solutions Complètes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions professionnelles et sur mesure pour tous vos besoins en signalétique et communication visuelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image Banner - 20% height */}
                {service.image && (
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-8">
                  <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-yellow-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => navigate(`/services/${service.slug}`)}
                    variant="outline"
                    className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solutions Complémentaires
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des services additionnels pour compléter votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Enseigne en Dibond */}
            <div 
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/services/enseigne-dibond')}
            >
              {/* Image Banner - 20% height */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={enseigneDibondImg} 
                  alt="Enseigne en dibond"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Enseigne en dibond
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Enseignes légères et résistantes en composite aluminium. Idéales pour l'intérieur et l'extérieur.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Matériau composite léger
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Résistant aux intempéries
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Impression haute définition
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Intérieur et extérieur
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Durée de vie 10-15 ans
                  </li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Totems Lumineux */}
            <div 
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/services/totems-lumineux')}
            >
              {/* Image Banner - 20% height */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={totemsLumineuxImg} 
                  alt="Totems lumineux"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Totems lumineux
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Signalétique verticale lumineuse pour une visibilité maximale jour et nuit.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Visibilité 24/7
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Simple ou double face
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Hauteur personnalisable
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Éclairage LED économique
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Installation professionnelle
                  </li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Enseigne Drapeau Double Face */}
            <div 
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/services/enseigne-drapeau')}
            >
              {/* Image Banner - 20% height */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={enseigneDrapeauImg} 
                  alt="Enseigne drapeau double face"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Store className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Enseigne drapeau double face
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Enseigne perpendiculaire visible des deux côtés de la rue. Impact visuel garanti.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Visibilité bidirectionnelle
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Lumineuse ou non lumineuse
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Fixation perpendiculaire
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Idéale centre-ville
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Formats sur mesure
                  </li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Caisson Ajouré Lumineux */}
            <div 
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/services/caisson-ajoure')}
            >
              {/* Image Banner - 20% height */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={caissonAjoureImg} 
                  alt="Caisson ajouré lumineux"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: 'center 25%' }}
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Caisson ajouré lumineux
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Design moderne avec découpes lumineuses. Effet de profondeur et contraste élégant.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Effet 3D sophistiqué
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Découpe laser précise
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Éclairage LED ciblé
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Haut de gamme
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Personnalisation totale
                  </li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Néon LED */}
            <div 
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/services/neon-led')}
            >
              {/* Image Banner - 20% height */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={neonLedImg} 
                  alt="Néon LED"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Néon LED
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Éclairage LED flexible imitant le néon traditionnel. Design sur mesure et économique.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Néon LED flexible
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Formes personnalisées
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Couleurs au choix
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Faible consommation
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Installation intérieure/extérieure
                  </li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Écrans LED grand format */}
            <div 
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate('/services/ecrans-led')}
            >
              {/* Image Banner - 20% height */}
              <div className="h-32 overflow-hidden">
                <img 
                  src={adhesifGrandFormatImg} 
                  alt="Écrans LED grand format"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                  Écrans LED grand format
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Affichage dynamique haute définition pour communication visuelle impactante.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Affichage dynamique
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Haute définition
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Contenu programmable
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Intérieur et extérieur
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Impact visuel maximal
                  </li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-600 hover:bg-yellow-50 group-hover:bg-yellow-500 group-hover:text-white"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un accompagnement personnalisé de la conception à l'installation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-4">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nous écoutons vos besoins et analysons votre projet pour vous proposer la meilleure solution.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-black mb-4">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Conception</h3>
                <p className="text-gray-600 leading-relaxed">
                  Notre équipe de designers crée des maquettes et vous présente plusieurs options.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-yellow-500 mb-4">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Production</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fabrication avec des matériaux de qualité et un contrôle rigoureux à chaque étape.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-black mb-4">04</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pose professionnelle par nos équipes qualifiées et service après-vente garanti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Un projet en tête ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-2 border-black font-bold text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03 88 044 534
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

