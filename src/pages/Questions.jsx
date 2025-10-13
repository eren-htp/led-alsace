import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Questions() {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState(null)

  const faqCategories = [
    {
      category: "Enseignes LED",
      questions: [
        {
          q: "Quelle est la durée de vie d'une enseigne LED ?",
          a: "Les enseignes LED ont une durée de vie moyenne de 50 000 à 100 000 heures, soit environ 10 à 15 ans d'utilisation continue."
        },
        {
          q: "Les enseignes LED consomment-elles beaucoup d'électricité ?",
          a: "Non, les enseignes LED consomment jusqu'à 80% moins d'électricité que les enseignes néon traditionnelles."
        },
        {
          q: "Peut-on personnaliser complètement une enseigne LED ?",
          a: "Absolument ! Nous créons des enseignes 100% sur mesure : choix des couleurs, polices, dimensions et matériaux."
        }
      ]
    },
    {
      category: "Devis et Tarifs",
      questions: [
        {
          q: "Le devis est-il vraiment gratuit et sans engagement ?",
          a: "Oui, absolument ! Nous établissons un devis détaillé et personnalisé gratuitement, sans aucun engagement."
        },
        {
          q: "Sous quel délai recevrai-je mon devis ?",
          a: "Nous nous engageons à vous répondre sous 24 à 48 heures maximum après réception de votre demande."
        },
        {
          q: "Y a-t-il des frais de déplacement ?",
          a: "Les déplacements sont gratuits dans un rayon de 30 km autour d'Ostwald."
        }
      ]
    },
    {
      category: "Installation",
      questions: [
        {
          q: "Quels sont les délais de fabrication et d'installation ?",
          a: "Les délais varient selon le projet : 2 à 3 semaines pour une enseigne LED standard, 1 semaine pour un marquage véhicule."
        },
        {
          q: "L'installation est-elle comprise dans le prix ?",
          a: "Oui, nos devis incluent toujours la fabrication ET l'installation."
        }
      ]
    }
  ]

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Questions Fréquentes</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vous avez des{' '}
              <span className="text-yellow-400">questions ?</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Trouvez toutes les réponses aux questions les plus fréquentes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <HelpCircle className="w-8 h-8 text-yellow-500 mr-3" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`
                    const isOpen = openIndex === index

                    return (
                      <div 
                        key={questionIndex}
                        className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 transition-colors"
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {item.q}
                          </span>
                          <ChevronDown 
                            className={`w-6 h-6 text-yellow-500 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-5 pt-2 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-2xl p-12">
              <HelpCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vous ne trouvez pas la réponse ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe est à votre disposition
              </p>
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6"
              >
                Nous contacter
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Questions

