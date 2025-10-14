import { Button } from '@/components/ui/button.jsx'
import { 
  Lightbulb, Car, Printer, Palette, Monitor, Scissors,
  Shirt, Store, Stamp, Layers, Wifi, ArrowRight
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Services() {
  const navigate = useNavigate()

  const mainServices = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Enseignes LED",
      slug: "enseignes",
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
      icon: <Car className="w-12 h-12" />,
      title: "Marquage Véhicule",
      slug: "marquage-vehicule",
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
      icon: <Monitor className="w-12 h-12" />,
      title: "Signalétique",
      slug: "signaletique",
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
      icon: <Palette className="w-12 h-12" />,
      title: "Création Graphique",
      slug: "creation-graphique",
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
      icon: <Printer className="w-12 h-12" />,
      title: "Impression Grand Format",
      slug: "impression-grand-format",
      description: "Impression sur tout support : papier, adhésif, toile, bâche, dibond. Qualité professionnelle pour vos supports de communication.",
      features: [
        "Bâches publicitaires",
        "Kakémonos",
        "Adhésifs muraux",
        "Impression sur dibond",
        "Toiles canvas"
      ]
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Découpe CNC",
      slug: "decoupe-cnc",
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

  const additionalServices = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Textile & EPI",
      description: "Marquage textile et vente de vêtements de travail, E.P.I (Équipements de Protection Individuelle)."
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Marquage Vitrine",
      description: "Solutions pour le marquage de vos vitrines et façades avec adhésifs découpés ou micro-perforés."
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Impression Offset",
      description: "Impression offset ou numérique pour papeterie, carterie, livres et tous supports papier."
    },
    {
      icon: <Stamp className="w-8 h-8" />,
      title: "Tampons",
      description: "Tampons personnalisés pour factures, devis et papiers administratifs, tampons de fidélité."
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Gravures",
      description: "Gravure laser sur différents matériaux pour rendre votre marque immortelle."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Plaques NFC",
      description: "Plaques NFC pour fidéliser vos clients et les inviter à laisser un avis sur vos réseaux."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
              Nos Solutions Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions professionnelles et sur mesure pour tous vos besoins en signalétique et communication visuelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
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
              Une gamme étendue de solutions pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-yellow-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
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

              <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-blue-500 mb-4">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Conception</h3>
                <p className="text-gray-600 leading-relaxed">
                  Notre équipe de designers crée des maquettes et vous présente plusieurs options.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-green-500 mb-4">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Production</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fabrication avec des matériaux de qualité et un contrôle rigoureux à chaque étape.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-xl p-8">
                <div className="text-4xl font-bold text-purple-500 mb-4">04</div>
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

