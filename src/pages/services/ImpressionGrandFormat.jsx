import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Printer, Maximize2, Package, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import realisation1 from '../../assets/realisations/realisation_casa_julia.webp'
import realisation2 from '../../assets/realisations/realisation_madagascar.webp'

function ImpressionGrandFormat() {
  const navigate = useNavigate()

  const realisations = [
    { image: realisation1, title: "Casa Julia", description: "Panneau grand format extérieur" },
    { image: realisation2, title: "Madagascar", description: "Totem publicitaire grand format" }
  ]

  const services = [
    { title: "Bâches publicitaires", description: "Impression sur bâche PVC pour extérieur, tous formats" },
    { title: "Kakémonos", description: "Supports roll-up et enrouleurs pour salons et événements" },
    { title: "Panneaux rigides", description: "Impression sur dibond, forex, PVC expansé" },
    { title: "Adhésifs grand format", description: "Stickers géants pour sols, murs, véhicules" },
    { title: "Toiles canvas", description: "Impression sur toile pour décoration intérieure" },
    { title: "Affiches grand format", description: "Posters et affiches jusqu'à plusieurs mètres" }
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

  const avantages = [
    { icon: Printer, title: "Haute résolution", description: "Impression numérique HD pour un rendu parfait" },
    { icon: Maximize2, title: "Tous formats", description: "De quelques cm à plusieurs dizaines de mètres" },
    { icon: Package, title: "Nombreux supports", description: "Large choix de matériaux adaptés à chaque usage" },
    { icon: Zap, title: "Production rapide", description: "Délais courts pour vos urgences" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Nos Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Impression <span className="text-yellow-400">Grand Format</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Impression grand format sur tout support : papier, adhésif, toile, bâche, dibond, etc... pour vos supports de communication
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solutions d'impression pour tous vos besoins</p>
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
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Supports disponibles</h2>
                <p className="text-lg text-gray-600 mb-8">Large gamme de matériaux pour tous vos projets</p>
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
                {avantages.map((avantage, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <avantage.icon className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{avantage.title}</h3>
                    <p className="text-gray-600 text-sm">{avantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exemples de réalisations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Un projet d'impression grand format ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ImpressionGrandFormat
