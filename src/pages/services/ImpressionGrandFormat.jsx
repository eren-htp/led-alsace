import { useState } from 'react'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, ChevronLeft, ChevronRight, Check, Star, Printer, Maximize2, Package, Zap, Image as ImageIcon, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import realisation1 from '../../assets/realisations/realisation_casa_julia.webp'
import realisation2 from '../../assets/realisations/realisation_madagascar.webp'
import realisation3 from '../../assets/realisations/realisation_leclerc.webp'
import realisation4 from '../../assets/realisations/realisation_mobalpa.webp'

import servicesSEOConfig from '../../data/servicesSEO.js'
function ImpressionGrandFormat() {
  // Configuration SEO
  const seoData = servicesSEOConfig.impressionGrandFormat
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)

  // Réalisations pour le slider
  const realisations = [
    { 
      image: realisation1,
      title: "Casa Julia",
      description: "Panneau grand format extérieur restaurant"
    },
    { 
      image: realisation2,
      title: "Madagascar",
      description: "Totem publicitaire grand format"
    },
    { 
      image: realisation3,
      title: "E.Leclerc",
      description: "Signalétique grand format centre commercial"
    },
    { 
      image: realisation4,
      title: "Mobalpa",
      description: "Impression grand format salon professionnel"
    }
  ]

  const services = [
    {
      icon: ImageIcon,
      title: "Bâches publicitaires",
      description: "Impression sur bâche PVC résistante pour extérieur, disponible en tous formats jusqu'à plusieurs dizaines de mètres.",
      features: ["Résistance UV", "Tous formats", "Œillets renforcés", "Finitions soignées"]
    },
    {
      icon: FileText,
      title: "Kakémonos & Roll-up",
      description: "Supports enrouleurs et kakémonos pour salons professionnels, événements et points de vente.",
      features: ["Structure incluse", "Transport facile", "Installation rapide", "Réutilisable"]
    },
    {
      icon: Package,
      title: "Panneaux rigides",
      description: "Impression sur supports rigides : dibond, forex, PVC expansé, idéal pour signalétique intérieure et extérieure.",
      features: ["Haute rigidité", "Léger", "Durable", "Finition premium"]
    },
    {
      icon: Printer,
      title: "Adhésifs grand format",
      description: "Stickers géants pour sols, murs, vitrines et véhicules. Adhésion parfaite et retrait sans résidu.",
      features: ["Pose facile", "Repositionnable", "Résistant", "Personnalisable"]
    },
    {
      icon: Maximize2,
      title: "Toiles canvas",
      description: "Impression sur toile canvas pour décoration intérieure, tableaux et ambiance d'entreprise.",
      features: ["Rendu artistique", "Châssis bois", "Qualité musée", "Longue durée"]
    },
    {
      icon: Zap,
      title: "Affiches grand format",
      description: "Posters et affiches jusqu'à plusieurs mètres pour campagnes publicitaires et événements.",
      features: ["Haute résolution", "Papier premium", "Finition brillante/mate", "Livraison rapide"]
    }
  ]

  const supports = [
    "Bâche PVC 450g/m²",
    "Dibond aluminium",
    "Forex PVC",
    "Adhésif vinyle",
    "Toile polyester",
    "Papier photo",
    "Film micro-perforé",
    "Canvas textile"
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % realisations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + realisations.length) % realisations.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        structuredData={[
          getBreadcrumbSchema(breadcrumbItems),
          getFAQSchema(faqs)
        ]}
      />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section avec Slider */}
      <section className="relative pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        {/* Slider */}
        <div className="relative h-[500px] md:h-[600px]">
          {realisations.map((realisation, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={realisation.image} 
                alt={realisation.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all z-50 cursor-pointer"
            aria-label="Image précédente"
            type="button"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all z-50 cursor-pointer"
            aria-label="Image suivante"
            type="button"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end z-10">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Impression Numérique</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Impression Grand Format
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl">
                  Impression numérique haute définition sur tous supports. Bâches, panneaux, adhésifs, kakémonos et plus encore pour vos projets de communication visuelle.
                </p>
                <Button 
                  onClick={() => navigate('/contact')}
                  size="lg"
                  className="bg-yellow-400 hover:bg-yellow-500 text-lumineuse-dark font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
                >
                  J'ai besoin d'impressions
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
            {realisations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                type="button"
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-yellow-400 w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos solutions d'impression</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de supports et formats pour tous vos besoins de communication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supports & Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Supports disponibles
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Large choix de matériaux adaptés à chaque usage : intérieur, extérieur, temporaire ou permanent. Qualité professionnelle garantie.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {supports.map((support, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{support}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <Printer className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Haute résolution</h3>
                  <p className="text-gray-600 text-sm">Impression numérique HD pour un rendu parfait</p>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <Maximize2 className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tous formats</h3>
                  <p className="text-gray-600 text-sm">De quelques cm à plusieurs dizaines de mètres</p>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <Package className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nombreux supports</h3>
                  <p className="text-gray-600 text-sm">Large choix de matériaux adaptés à chaque usage</p>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Production rapide</h3>
                  <p className="text-gray-600 text-sm">Délais courts pour vos urgences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-lumineuse-dark mb-6">
            Besoin d'impressions grand format ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-lumineuse-dark hover:bg-gray-900 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              J'ai besoin d'impressions
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-lumineuse-dark border-2 border-lumineuse-dark font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03 88 044 534
            </Button>
          </div>
        </div>
      </section>

      <FAQ 
        title="Questions fréquentes sur l'impression adhésif grand format"
        faqs={[
          {
            question: "Qu'est-ce qu'un adhésif grand format et à quoi sert-il pour une entreprise ?",
            answer: "Un adhésif grand format est un support autocollant imprimé sur mesure, destiné à couvrir de grandes surfaces comme des vitrines, des murs, des panneaux ou des véhicules. C'est un outil de communication visuelle impactant, parfait pour attirer l'attention, diffuser un message commercial ou habiller un espace professionnel. Il peut être temporaire (opération promo) ou permanent (habillage de façade ou déco intérieure)."
          },
          {
            question: "Quels types d'adhésifs grand format propose LED ALSACE ?",
            answer: "LED ALSACE imprime sur une large gamme d'adhésifs professionnels : Vinyle monomère pour les surfaces planes et l'intérieur, Vinyle polymère pour l'extérieur longue durée, Vinyle coulé pour les formes complexes (véhicules, bosselages), Micro-perforé pour vitrine (visibilité extérieure), et Dépoli imprimé pour effet sablé décoratif. Nous proposons également des films avec pelliculage de protection (anti-UV, anti-graffiti, mat ou brillant)."
          },
          {
            question: "Quelle est la différence entre un adhésif monomère et polymère ?",
            answer: "Le vinyle monomère est plus économique, idéal pour les applications intérieures ou temporaires sur surfaces planes. Il a une durée de vie moyenne de 2 à 3 ans. Le vinyle polymère, plus résistant, est adapté à une exposition extérieure ou prolongée (jusqu'à 7 ans). Il est plus stable dans le temps et convient aux surfaces légèrement courbes."
          },
          {
            question: "Peut-on utiliser un adhésif grand format en extérieur dans le Grand Est ?",
            answer: "Oui. Tous nos adhésifs destinés à l'extérieur sont conçus pour résister aux intempéries, au gel, à la pluie et aux UV. Nous utilisons des encres éco-solvants ou UV avec lamination de protection pour garantir la tenue des couleurs dans le temps. Nos produits sont testés pour supporter les conditions climatiques spécifiques du Grand Est."
          },
          {
            question: "Est-ce que l'adhésif grand format peut être retiré sans abîmer le support ?",
            answer: "Oui. Si l'adhésif est retiré dans les délais conseillés (selon la colle utilisée) et sur une surface propre, il ne laisse pas de traces. Nous utilisons des colles adaptées (permanentes ou enlevables), selon que le projet soit temporaire (soldes, événement, promo) ou permanent (habillage mural ou vitrine)."
          },
          {
            question: "Est-ce que LED ALSACE peut poser les adhésifs sur site ?",
            answer: "Oui. Nos équipes se déplacent dans toute l'Alsace et le Grand Est pour poser vos adhésifs grands formats dans les règles de l'art. La pose professionnelle garantit un résultat sans bulles, sans plis et une excellente tenue dans le temps, que ce soit sur vitrine, panneau, véhicule, ou cloison intérieure."
          },
          {
            question: "Peut-on imprimer un visuel personnalisé sur un adhésif grand format ?",
            answer: "Absolument. Vous pouvez nous fournir vos fichiers graphiques (PDF, AI, EPS, etc.), ou confier la création à notre studio graphique intégré. Nous optimisons les fichiers pour un rendu haute définition, respect des couleurs, et adaptation parfaite au format choisi."
          },
          {
            question: "Quels sont les formats possibles pour l'impression d'un adhésif grand format ?",
            answer: "Nous imprimons sur mesure, jusqu'à 1,60 m de laize en un seul lé, avec possibilité de raccords pour couvrir des surfaces très grandes. Que ce soit pour une vitrine de 5 mètres, un mur complet ou une façade de bâtiment, nous adaptons la mise en page et le fichier pour un rendu net et homogène."
          },
          {
            question: "Quel est le délai moyen de production pour un adhésif grand format ?",
            answer: "En général, la production prend entre 3 et 7 jours ouvrés, selon le type d'adhésif, le visuel et la finition demandée (pelliculage, découpe, etc.). Pour les projets urgents ou événementiels, nous proposons également un service express sous 48 h, sous réserve de faisabilité technique."
          },
          {
            question: "LED ALSACE propose-t-elle la livraison ou l'installation hors Alsace ?",
            answer: "Oui. Nous livrons dans toute la France métropolitaine et pouvons organiser une installation sur site dans le Grand Est (Strasbourg, Metz, Nancy, Mulhouse…) grâce à notre réseau de partenaires poseurs. Chaque projet est suivi de manière personnalisée, de la maquette à la pose finale."
          }
        ]}
      />
    </div>
  )
}

export default ImpressionGrandFormat

