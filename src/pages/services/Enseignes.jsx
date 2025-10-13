import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, CheckCircle, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Enseignes() {
  const navigate = useNavigate()

  const types = [
    {
      title: "Lettres Boîtier Rétro-éclairées",
      description: "Lettres en relief avec éclairage LED intégré pour un effet lumineux optimal jour et nuit."
    },
    {
      title: "Caissons Lumineux",
      description: "Panneaux lumineux double face ou simple face, parfaits pour les enseignes de pharmacie, tabac, etc."
    },
    {
      title: "Néon LED Flexible",
      description: "Enseigne néon LED moderne, économique et personnalisable à l'infini."
    },
    {
      title: "Panneaux LED Digitaux",
      description: "Écrans LED programmables pour afficher vos messages, promotions et informations en temps réel."
    },
    {
      title: "Enseignes Drapeau",
      description: "Enseignes perpendiculaires à la façade pour une visibilité maximale dans les rues."
    },
    {
      title: "Totems Lumineux",
      description: "Structures verticales lumineuses pour signaler votre établissement depuis la route."
    }
  ]

  const advantages = [
    "Durée de vie exceptionnelle : 50 000 à 100 000 heures",
    "Économie d'énergie jusqu'à 80% vs néon traditionnel",
    "Luminosité constante et uniforme",
    "Résistance aux intempéries et aux chocs",
    "Maintenance réduite",
    "Personnalisation totale des couleurs et formes"
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enseignes{' '}
              <span className="text-yellow-400">LED</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Enseignes lumineuses sur mesure pour valoriser votre commerce et attirer l'attention
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Qu'est-ce qu'une enseigne LED ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Une enseigne LED est un dispositif lumineux utilisant la technologie LED pour mettre en valeur votre commerce, votre entreprise ou votre établissement. Visible de jour comme de nuit, elle constitue un élément essentiel de votre communication extérieure et permet d'attirer l'attention des passants et des clients potentiels.
              </p>
              <p>
                Chez LED Alsace, nous concevons et fabriquons des enseignes LED 100% sur mesure, adaptées à votre identité visuelle et à vos contraintes techniques. Que vous soyez un commerce de proximité, un restaurant, une pharmacie ou une entreprise, nous avons la solution d'enseigne LED qui correspond à vos besoins.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Types d'Enseignes LED
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Les Avantages des Enseignes LED
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Notre Processus de Réalisation
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Étude de votre projet</h3>
                  <p className="text-gray-600">Nous analysons vos besoins, votre identité visuelle et les contraintes techniques de votre façade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conception et validation</h3>
                  <p className="text-gray-600">Nous créons un visuel 3D de votre future enseigne et ajustons selon vos retours.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fabrication sur mesure</h3>
                  <p className="text-gray-600">Nos équipes fabriquent votre enseigne dans notre atelier avec des matériaux de qualité professionnelle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Installation et mise en service</h3>
                  <p className="text-gray-600">Nous installons votre enseigne dans les règles de l'art et effectuons tous les raccordements électriques.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Prêt à illuminer votre commerce ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit pour une enseigne LED sur mesure
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Enseignes

