import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Filter } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Realisations() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const categories = ['Tous', 'Enseignes LED', 'Marquage Véhicule', 'Signalétique', 'Vitrine', 'Création Graphique']

  const realisations = [
    {
      id: 1,
      title: "Enseigne LED Restaurant Le Gourmet",
      category: "Enseignes LED",
      description: "Enseigne lumineuse avec lettres boîtier rétro-éclairées en façade",
      client: "Restaurant Le Gourmet",
      location: "Strasbourg",
      year: "2024"
    },
    {
      id: 2,
      title: "Covering Total Flotte Garage Auto Plus",
      category: "Marquage Véhicule",
      description: "Marquage complet de 5 véhicules utilitaires avec logo et coordonnées",
      client: "Garage Auto Plus",
      location: "Colmar",
      year: "2024"
    },
    {
      id: 3,
      title: "Signalétique Boutique Élégance",
      category: "Vitrine",
      description: "Vitrophanie complète avec adhésifs micro-perforés et lettres découpées",
      client: "Boutique Élégance",
      location: "Mulhouse",
      year: "2023"
    },
    {
      id: 4,
      title: "Enseigne Néon LED Bar Le Pin Parasol",
      category: "Enseignes LED",
      description: "Enseigne néon LED flexible avec logo personnalisé en façade",
      client: "Bar Le Pin Parasol",
      location: "Ostwald",
      year: "2024"
    },
    {
      id: 5,
      title: "Panneaux Directionnels Centre Commercial",
      category: "Signalétique",
      description: "Signalétique directionnelle complète avec totems et panneaux muraux",
      client: "Centre Commercial Rivétoile",
      location: "Strasbourg",
      year: "2023"
    },
    {
      id: 6,
      title: "Identité Visuelle Startup TechInnov",
      category: "Création Graphique",
      description: "Logo, charte graphique, supports print et déclinaisons digitales",
      client: "TechInnov",
      location: "Illkirch",
      year: "2024"
    },
    {
      id: 7,
      title: "Caisson Lumineux Pharmacie Centrale",
      category: "Enseignes LED",
      description: "Caisson lumineux double face avec croix verte LED animée",
      client: "Pharmacie Centrale",
      location: "Haguenau",
      year: "2023"
    },
    {
      id: 8,
      title: "Marquage Flotte Livraison Express",
      category: "Marquage Véhicule",
      description: "Adhésifs découpés sur 12 véhicules de livraison",
      client: "Express Livraison",
      location: "Strasbourg",
      year: "2024"
    },
    {
      id: 9,
      title: "Panneaux de Chantier Promoteur Immobilier",
      category: "Signalétique",
      description: "Panneaux de chantier grand format avec impression haute qualité",
      client: "Alsace Habitat",
      location: "Sélestat",
      year: "2024"
    }
  ]

  const filteredRealisations = selectedCategory === 'Tous' 
    ? realisations 
    : realisations.filter(r => r.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Nos Réalisations</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Découvrez nos{' '}
              <span className="text-yellow-400">projets réalisés</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Plus de 500 projets réalisés en Alsace depuis 2014
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">500+</div>
              <div className="text-black/80 font-semibold">Projets Réalisés</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">10+</div>
              <div className="text-black/80 font-semibold">Ans d'Expérience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">98%</div>
              <div className="text-black/80 font-semibold">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">100%</div>
              <div className="text-black/80 font-semibold">Made in Alsace</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Filter className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-semibold mr-4">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow-500 hover:text-yellow-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation) => (
              <div 
                key={realisation.id}
                className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-500 font-semibold">{realisation.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {realisation.year}
                  </div>
                </div>

                <div className="p-6">
                  <div className="inline-block mb-3 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                    {realisation.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {realisation.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {realisation.description}
                  </p>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-semibold text-gray-900">{realisation.client}</p>
                        <p className="text-gray-500">{realisation.location}</p>
                      </div>
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        Voir plus
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Votre projet sera notre prochaine réalisation
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Rejoignez nos centaines de clients satisfaits
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

export default Realisations

