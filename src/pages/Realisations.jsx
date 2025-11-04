import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import CounterAnimation from '../components/CounterAnimation'
import { getAllRealisations, getRealisationsByCategory } from '../data/realisationsData'

function Realisations() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const realisations = getAllRealisations()
  const categories = ['Tous', 'Enseignes Lumineuse', 'Marquage Vitrine', 'Signalétique', 'Pharmacie', 'Nos réalisations']
  const filteredRealisations = getRealisationsByCategory(selectedCategory)

  const handleRealisationClick = (slug) => {
    navigate(`/realisations/${slug}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nos Réalisations"
        description="Découvrez nos réalisations d'enseignes Lumineuse, signalétique et marquage véhicule en Alsace. Portfolio de projets pour commerces, restaurants, entreprises et collectivités."
        keywords="réalisations enseignes Lumineuse, portfolio signalétique, exemples marquage véhicule, projets Alsace, enseignes Strasbourg"
        canonicalUrl="https://www.ledalsace.com/realisations"
      />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos <span className="text-yellow-400">Réalisations</span></h1>
            <p className="text-xl text-gray-300">Découvrez nos projets récents</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lumineuse-dark mb-2">
                <CounterAnimation end={10} suffix="+" />
              </div>
              <div className="text-lumineuse-dark/80 font-semibold">Enseignes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lumineuse-dark mb-2">
                <CounterAnimation end={490} prefix="+" />
              </div>
              <div className="text-lumineuse-dark/80 font-semibold">Marquages Véhicules</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lumineuse-dark mb-2">
                <CounterAnimation end={1540} prefix="+" />
              </div>
              <div className="text-lumineuse-dark/80 font-semibold">Chantiers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lumineuse-dark mb-2">
                <CounterAnimation end={2115} prefix="+" />
              </div>
              <div className="text-lumineuse-dark/80 font-semibold">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button 
                key={category} 
                onClick={() => setSelectedCategory(category)} 
                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category ? 'bg-yellow-500 text-lumineuse-dark shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation) => (
              <div 
                key={realisation.id} 
                onClick={() => handleRealisationClick(realisation.slug)}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={realisation.image} 
                    alt={realisation.alt} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Voir le projet →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-600 text-sm font-semibold mb-3">
                    {realisation.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {realisation.title}
                  </h3>
                  <p className="text-gray-600">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-lumineuse-dark mb-6">Prêt à réaliser votre projet ?</h2>
          <Button 
            onClick={() => navigate('/contact')} 
            size="lg" 
            className="bg-lumineuse-dark hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Realisations

