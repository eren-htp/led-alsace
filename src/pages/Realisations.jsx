import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import CounterAnimation from '../components/CounterAnimation'
import realisation1 from '../assets/realisations/realisation_red_door.webp'
import realisation2 from '../assets/realisations/realisation_saturn.webp'
import realisation3 from '../assets/realisations/realisation_saveurs.webp'
import realisation4 from '../assets/realisations/realisation_prointer.webp'
import realisation5 from '../assets/realisations/realisation_casa_julia.webp'
import realisation6 from '../assets/realisations/realisation_one_kebab.webp'
import realisation7 from '../assets/realisations/realisation_mjr.webp'
import realisation8 from '../assets/realisations/realisation_madagascar.webp'
import realisation9 from '../assets/realisations/realisation_leclerc.webp'
import realisation10 from '../assets/realisations/realisation_pharmacie.webp'
import realisation11 from '../assets/realisations/realisation_love.webp'
import realisation12 from '../assets/realisations/realisation_perkko.webp'
import realisation13 from '../assets/realisations/realisation_mobalpa.webp'
import realisation14 from '../assets/realisations/realisation_anges.webp'

function Realisations() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const realisations = [
    { title: "The Little Red Door", category: "Enseignes LED", image: realisation1, description: "Enseigne lumineuse restaurant", alt: "Enseigne LED The Little Red Door restaurant Strasbourg - Réalisation LED Alsace" },
    { title: "Saturn Event", category: "Enseignes LED", image: realisation2, description: "Logo lumineux en relief", alt: "Logo lumineux Saturn Event en relief - Enseigne LED sur mesure Alsace" },
    { title: "Saveurs & Saisons", category: "Enseignes LED", image: realisation3, description: "Enseigne restaurant traditionnel", alt: "Enseigne LED Saveurs & Saisons restaurant Alsace - Fabrication LED Alsace" },
    { title: "Pro-Inter", category: "Enseignes LED", image: realisation4, description: "Enseigne lumineuse commerce", alt: "Enseigne lumineuse Pro-Inter commerce Strasbourg - Réalisation LED Alsace" },
    { title: "Casa Julia", category: "Signalétique", image: realisation5, description: "Signalétique extérieure", alt: "Signalétique extérieure Casa Julia - Totem et panneaux LED Alsace" },
    { title: "One Kebab", category: "Enseignes LED", image: realisation6, description: "Enseigne restauration rapide", alt: "Enseigne LED One Kebab restauration rapide - Lettres boîtier lumineuses Alsace" },
    { title: "MJR Pièces Auto", category: "Enseignes LED", image: realisation7, description: "Enseigne garage automobile", alt: "Enseigne LED MJR Pièces Auto garage Strasbourg - Réalisation LED Alsace" },
    { title: "Madagascar", category: "Signalétique", image: realisation8, description: "Totem lumineux extérieur", alt: "Totem lumineux Madagascar Alsace - Signalétique extérieure LED Alsace" },
    { title: "E. Leclerc", category: "Marquage Vitrine", image: realisation9, description: "Aménagement vitrine", alt: "Marquage vitrine E. Leclerc Alsace - Vitrophanie et adhésifs LED Alsace" },
    { title: "Pharmacie", category: "Enseignes LED", image: realisation10, description: "Croix de pharmacie LED", alt: "Croix de pharmacie LED verte Alsace - Enseigne lumineuse pharmacie LED Alsace" },
    { title: "Love", category: "Enseignes LED", image: realisation11, description: "Enseigne boutique", alt: "Enseigne LED Love boutique Strasbourg - Lettres lumineuses LED Alsace" },
    { title: "Perkko", category: "Enseignes LED", image: realisation12, description: "Enseigne commerce", alt: "Enseigne LED Perkko commerce Alsace - Réalisation enseigne lumineuse LED Alsace" },
    { title: "Mobalpa", category: "Marquage Vitrine", image: realisation13, description: "Vitrophanie cuisine", alt: "Vitrophanie Mobalpa cuisine Alsace - Marquage vitrine professionnel LED Alsace" },
    { title: "Les Anges Micro-Crèche", category: "Marquage Vitrine", image: realisation14, description: "Marquage vitrine crèche", alt: "Marquage vitrine Les Anges Micro-Crèche Alsace - Adhésifs décoratifs LED Alsace" }
  ]

  const categories = ['Tous', 'Enseignes LED', 'Marquage Vitrine', 'Signalétique']
  const filteredRealisations = selectedCategory === 'Tous' ? realisations : realisations.filter(r => r.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nos Réalisations"
        description="Découvrez nos réalisations d'enseignes LED, signalétique et marquage véhicule en Alsace. Portfolio de projets pour commerces, restaurants, entreprises et collectivités."
        keywords="réalisations enseignes LED, portfolio signalétique, exemples marquage véhicule, projets Alsace, enseignes Strasbourg"
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
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={1120} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Enseignes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={490} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Marquages Véhicules</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={1540} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Chantiers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={2115} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category ? 'bg-yellow-500 text-black shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>{category}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRealisations.map((realisation, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={realisation.image} alt={realisation.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-600 text-sm font-semibold mb-3">{realisation.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{realisation.title}</h3>
                  <p className="text-gray-600">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Prêt à réaliser votre projet ?</h2>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">Demander un devis<ArrowRight className="ml-2 w-5 h-5" /></Button>
        </div>
      </section>
    </div>
  )
}

export default Realisations
