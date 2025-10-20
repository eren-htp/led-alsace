import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import FAQ from '@/components/FAQ.jsx'
import enseigneLumineuseImg from '@/assets/Enseignelumineuse.JPG'

import servicesSEOConfig from '../../data/servicesSEO.js'
function CaissonAjoure() {
  // Configuration SEO
  const seoData = servicesSEOConfig.caissonAjoure
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

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
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={enseigneLumineuseImg}
            alt="Caisson Ajouré Lumineux"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-led-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Caisson Ajouré Lumineux
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Élégance et modernité pour votre enseigne lumineuse
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-led-dark font-bold">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Qu'est-ce qu'un caisson ajouré ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Le <strong>caisson ajouré lumineux</strong> est une enseigne haut de gamme qui combine élégance et efficacité lumineuse. 
                Contrairement au caisson classique fermé, le caisson ajouré présente des découpes dans sa face avant, créant un jeu de lumière et d'ombre sophistiqué.
              </p>
              <p className="mb-6">
                Cette technique permet de mettre en valeur votre logo ou vos lettres en les détachant du fond, créant un effet de profondeur et de relief. 
                L'éclairage LED intégré illumine les éléments découpés tout en laissant le fond dans l'ombre, pour un rendu visuel moderne et percutant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Caractéristiques techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Structure aluminium",
                description: "Cadre en profilé aluminium thermolaqué, résistant aux intempéries et à la corrosion. Finition soignée et durable."
              },
              {
                title: "Face ajourée",
                description: "Plaque en aluminium ou Dibond découpée au laser selon votre design. Précision au millimètre pour un rendu parfait."
              },
              {
                title: "Éclairage LED",
                description: "Modules LED haute luminosité, basse consommation. Température de couleur au choix : blanc chaud, neutre ou froid."
              },
              {
                title: "Fond opaque",
                description: "Panneau de fond en aluminium ou PVC pour bloquer la lumière et créer le contraste. Couleur personnalisable."
              },
              {
                title: "Profondeur variable",
                description: "Épaisseur du caisson de 8 à 15 cm selon les besoins d'éclairage. Plus le caisson est profond, plus la lumière est uniforme."
              },
              {
                title: "Étanchéité IP65",
                description: "Protection contre la poussière et les projections d'eau. Utilisation en extérieur sans risque."
              }
            ].map((carac, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all">
                <CheckCircle className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{carac.title}</h3>
                <p className="text-gray-600">{carac.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi choisir un caisson ajouré ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantages esthétiques</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Design moderne</strong> - Effet de profondeur et relief élégant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Contraste saisissant</strong> - Jeu d'ombre et de lumière percutant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Mise en valeur</strong> - Votre logo ou texte se détache parfaitement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Personnalisation totale</strong> - Forme, couleur, typographie sur mesure</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Avantages techniques</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Économie d'énergie</strong> - LED basse consommation, éclairage ciblé</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Durabilité</strong> - Matériaux résistants, garantie longue durée</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Entretien minimal</strong> - Pas de changement d'ampoule, nettoyage facile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Installation pro</strong> - Pose par nos équipes qualifiées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Caisson ajouré vs Caisson classique
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-yellow-500">
                  <tr>
                    <th className="p-4 text-left text-led-dark font-bold">Critère</th>
                    <th className="p-4 text-left text-led-dark font-bold">Caisson Ajouré</th>
                    <th className="p-4 text-left text-led-dark font-bold">Caisson Classique</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Design</td>
                    <td className="p-4">Moderne, effet 3D</td>
                    <td className="p-4">Classique, plat</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold">Visibilité de jour</td>
                    <td className="p-4">Excellente (contraste)</td>
                    <td className="p-4">Bonne</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Visibilité de nuit</td>
                    <td className="p-4">Excellente (éclairage ciblé)</td>
                    <td className="p-4">Très bonne (éclairage global)</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="p-4 font-semibold">Consommation</td>
                    <td className="p-4">Faible (LED ciblées)</td>
                    <td className="p-4">Moyenne (éclairage complet)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-4 font-semibold">Prix</td>
                    <td className="p-4">Moyen-Élevé</td>
                    <td className="p-4">Moyen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-semibold">Image de marque</td>
                    <td className="p-4">Haut de gamme</td>
                    <td className="p-4">Standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: "Quelle est la différence entre un caisson ajouré et des lettres boîtier ?",
          answer: "Le caisson ajouré est une structure unique avec des découpes, tandis que les lettres boîtier sont des éléments individuels. Le caisson ajouré offre un rendu plus compact et moderne, idéal pour les logos complexes. Les lettres boîtier conviennent mieux aux textes longs et offrent plus de relief."
        },
        {
          question: "Peut-on réaliser n'importe quel design en caisson ajouré ?",
          answer: "Presque ! La découpe laser permet une grande précision, mais certaines contraintes techniques existent : les éléments trop fins peuvent être fragiles, et les détails très complexes peuvent être difficiles à éclairer uniformément. Nous vous conseillons sur la faisabilité de votre projet."
        },
        {
          question: "Quelle couleur pour le fond du caisson ?",
          answer: "Le fond est généralement noir ou gris foncé pour maximiser le contraste avec les éléments éclairés. Cependant, nous pouvons réaliser des fonds de n'importe quelle couleur selon votre charte graphique. Un fond clair créera un effet plus subtil."
        },
        {
          question: "Le caisson ajouré résiste-t-il aux intempéries ?",
          answer: "Oui, le caisson est conçu pour une utilisation en extérieur. L'aluminium résiste à la corrosion, les LED sont étanches (IP65), et l'ensemble est traité pour résister aux UV, à la pluie et aux variations de température."
        },
        {
          question: "Quelle est la durée de vie d'un caisson ajouré LED ?",
          answer: "Les LED ont une durée de vie de 50 000 heures minimum, soit plus de 10 ans en fonctionnement continu. La structure aluminium dure 15 à 20 ans. Seule la face ajourée peut nécessiter un remplacement après 10-15 ans si elle est exposée à des conditions extrêmes."
        }
      ]} />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-led-dark mb-6">
            Projet de caisson ajouré lumineux ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Design sur mesure, fabrication et installation professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-led-dark hover:bg-gray-800 text-white font-bold">
                <Phone className="mr-2 w-5 h-5" />
                03 88 044 534
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-led-dark border-2 border-led-dark font-bold">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaissonAjoure

