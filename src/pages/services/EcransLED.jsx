import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { useNavigate } from 'react-router-dom'
import { Monitor, Zap, Settings, Eye, TrendingUp, Clock, ArrowRight, Phone } from 'lucide-react'
import { useState } from 'react'
import heroImage from '../../assets/Enseignelumineuse2.webp'

import servicesSEOConfig from '../../data/servicesSEO.js'
function EcransLED() {
  // Configuration SEO
  const seoData = servicesSEOConfig.ecransLED
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // FAQs sont déjà définies via seoData.faqs (ligne 15)

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

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-led-dark/50 z-10"></div>
        <img 
          src={heroImage} 
          alt="Écrans LED grand format" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Écrans LED Grand Format</h1>
          <p className="text-xl md:text-2xl mb-8">
            Affichage dynamique haute définition pour une communication visuelle impactante
          </p>
          <Button 
            onClick={() => navigate('/contact')} 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-led-dark font-semibold"
          >
            Demander un devis gratuit
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Qu'est-ce qu'un écran LED grand format ?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            L'<strong>écran LED grand format</strong> est une solution d'affichage dynamique qui permet de diffuser des contenus multimédias (vidéos, images, textes, animations) en haute définition. Contrairement aux enseignes statiques, l'écran LED offre une flexibilité totale pour adapter votre communication en temps réel.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Grâce à la technologie LED, ces écrans offrent une luminosité exceptionnelle, une consommation énergétique réduite et une durée de vie prolongée. Ils sont visibles de jour comme de nuit, captent l'attention et permettent de communiquer efficacement sur vos produits, services, événements ou promotions.
          </p>
        </div>
      </section>

      {/* Types d'écrans LED Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Types d'écrans LED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-yellow-500 mb-4">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écran LED extérieur</h3>
              <p className="text-gray-600 leading-relaxed">
                Haute luminosité (5000+ nits), résistant aux intempéries (IP65), visible en plein soleil. Idéal pour façades, toitures, zones commerciales.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-yellow-500 mb-4">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écran LED intérieur</h3>
              <p className="text-gray-600 leading-relaxed">
                Haute résolution (pitch fin P2-P4), couleurs éclatantes, vision rapprochée. Parfait pour halls d'accueil, showrooms, centres commerciaux.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-yellow-500 mb-4">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écran LED vitrine</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent ou semi-transparent, permet de voir à travers tout en affichant du contenu. Innovation pour vitrines de magasins.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-yellow-500 mb-4">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écran LED mobile</h3>
              <p className="text-gray-600 leading-relaxed">
                Monté sur remorque ou camion, déplaçable pour événements, salons, tournées promotionnelles. Impact maximal partout.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-yellow-500 mb-4">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écran LED courbe</h3>
              <p className="text-gray-600 leading-relaxed">
                Modules flexibles pour créer des formes courbes, cylindriques ou sphériques. Design spectaculaire et immersif.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="text-yellow-500 mb-4">
                <Monitor className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Écran LED sur mesure</h3>
              <p className="text-gray-600 leading-relaxed">
                Dimensions, forme et configuration personnalisées selon votre projet. De quelques m² à plusieurs centaines de m².
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi choisir un écran LED grand format ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-8 h-8 text-yellow-500 mr-3" />
                Avantages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Contenu dynamique</strong>
                    <p className="text-gray-600">Changez votre message à volonté, en temps réel, sans impression ni installation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Visibilité maximale</strong>
                    <p className="text-gray-600">Luminosité élevée visible de jour comme de nuit, même en plein soleil</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Impact visuel</strong>
                    <p className="text-gray-600">Vidéos et animations captent l'attention 10x plus qu'une enseigne statique</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Économie d'énergie</strong>
                    <p className="text-gray-600">Technologie LED basse consommation avec ajustement automatique de luminosité</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 text-xl">✓</span>
                  <div>
                    <strong className="text-gray-900">Durabilité</strong>
                    <p className="text-gray-600">Durée de vie de 100 000 heures (11+ ans en continu), résistant aux intempéries</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 text-yellow-500 mr-3" />
                Applications
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Façades de magasins et centres commerciaux
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Vitrines de boutiques et showrooms
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Halls d'accueil et réceptions d'entreprise
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Stades, salles de spectacle et événements
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Aéroports, gares et transports publics
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Restaurants, bars et lieux de divertissement
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Bords de routes et zones à forte circulation
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  Salons professionnels et stands d'exposition
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques techniques Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Caractéristiques techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Eye className="w-5 h-5 text-yellow-500 mr-2" />
                Résolution et Pitch
              </h4>
              <p className="text-gray-600 text-sm">
                De P2 (haute résolution) à P10 (grande distance). Plus le pitch est petit, plus l'image est détaillée à courte distance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                Luminosité
              </h4>
              <p className="text-gray-600 text-sm">
                800-1500 nits en intérieur, 5000-8000 nits en extérieur. Ajustement automatique selon la luminosité ambiante.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Settings className="w-5 h-5 text-yellow-500 mr-2" />
                Étanchéité
              </h4>
              <p className="text-gray-600 text-sm">
                IP20-IP40 en intérieur, IP65-IP68 en extérieur. Protection contre poussière, pluie et projections d'eau.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Monitor className="w-5 h-5 text-yellow-500 mr-2" />
                Formats
              </h4>
              <p className="text-gray-600 text-sm">
                Modules standards 500x500mm ou 1000x500mm. Assemblage sur mesure pour créer n'importe quelle dimension.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Clock className="w-5 h-5 text-yellow-500 mr-2" />
                Fréquence de rafraîchissement
              </h4>
              <p className="text-gray-600 text-sm">
                1920-3840 Hz pour éviter le scintillement. Idéal pour captation vidéo et diffusion en direct.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Settings className="w-5 h-5 text-yellow-500 mr-2" />
                Gestion de contenu
              </h4>
              <p className="text-gray-600 text-sm">
                Logiciel CMS intuitif, programmation horaire, mise à jour à distance via 4G/WiFi. Formation incluse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Questions Fréquentes
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Retrouvez les réponses aux questions les plus fréquentes
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-yellow-500 text-2xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projet d'écran LED grand format ?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Conseil, dimensionnement, installation et formation : nous gérons votre projet de A à Z
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-led-dark hover:bg-gray-800 text-white"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-gray-900 border-2 border-gray-900"
            >
              <Phone className="mr-2 w-5 h-5" />
              03 88 044 534
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EcransLED

