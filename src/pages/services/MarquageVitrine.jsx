import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Eye, Sparkles, Sun, Droplets } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider'
import marquageVitrine from '../../assets/marquagevitrine.webp'
import marquageVitrine2 from '../../assets/MarquageVitrine2.JPG'
import realisation1 from '../../assets/realisations/realisation_leclerc.webp'
import realisation2 from '../../assets/realisations/realisation_mobalpa.webp'
import realisation3 from '../../assets/realisations/realisation_anges.webp'

function MarquageVitrine() {
  const navigate = useNavigate()

  const realisations = [
    { image: realisation1, title: "E. Leclerc", description: "Aménagement vitrine grande distribution" },
    { image: realisation2, title: "Mobalpa", description: "Vitrophanie showroom cuisine" },
    { image: realisation3, title: "Les Anges Micro-Crèche", description: "Marquage vitrine crèche" }
  ]

  const services = [
    { title: "Vitrophanie", description: "Adhésifs décoratifs et occultants pour vos vitrines" },
    { title: "Lettrage adhésif", description: "Textes et logos découpés en vinyle haute qualité" },
    { title: "Film dépoli", description: "Occultation partielle pour intimité et design" },
    { title: "Adhésifs promotionnels", description: "Stickers temporaires pour vos offres et promotions" },
    { title: "Covering vitrine", description: "Habillage complet de vos façades vitrées" },
    { title: "Micro-perforé", description: "Vision one-way pour affichage extérieur" }
  ]

  const avantages = [
    { icon: Eye, title: "Impact visuel", description: "Attirez l'attention des passants avec un design attractif" },
    { icon: Sparkles, title: "Personnalisation", description: "Création sur mesure adaptée à votre identité" },
    { icon: Sun, title: "Protection UV", description: "Films anti-UV pour protéger vos produits" },
    { icon: Droplets, title: "Facilité d'entretien", description: "Nettoyage simple et résistance aux intempéries" }
  ]

  const heroImages = [marquageVitrine2, marquageVitrine]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <HeroSlider 
        images={heroImages}
        title="Marquage Vitrine Professionnel"
        subtitle="Nous vous proposons des solutions pour le marquage de vos vitrines et façades. Attirez l'attention, communiquez vos offres et décorez vos espaces avec style."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Des prestations adaptées à tous vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les avantages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center">
                <avantage.icon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{avantage.title}</h3>
                <p className="text-gray-600 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {realisations.map((realisation, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={realisation.image} alt={realisation.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
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
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Valorisez vos vitrines</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default MarquageVitrine
