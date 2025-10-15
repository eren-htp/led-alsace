import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, MapPin, Building2, Shield, Navigation } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import realisation1 from '../../assets/realisations/realisation_casa_julia.webp'
import realisation2 from '../../assets/realisations/realisation_madagascar.webp'

function Signaletique() {
  const navigate = useNavigate()

  const realisations = [
    { image: realisation1, title: "Casa Julia", description: "Signalétique extérieure restaurant" },
    { image: realisation2, title: "Madagascar", description: "Totem signalétique commercial" }
  ]

  const services = [
    { title: "Panneaux directionnels", description: "Guidez vos visiteurs efficacement" },
    { title: "Totems extérieurs", description: "Structures verticales imposantes pour signalisation" },
    { title: "Plaques de porte", description: "Identification des bureaux et espaces" },
    { title: "Signalétique PMR", description: "Conformité accessibilité handicapés" },
    { title: "Panneaux de chantier", description: "Communication sur vos chantiers" },
    { title: "Stop trottoir", description: "Chevalets publicitaires pour commerce" }
  ]

  const applications = [
    "Entreprises et bureaux",
    "Commerces et magasins",
    "Hôtels et restaurants",
    "Établissements publics",
    "Sites industriels",
    "Centres commerciaux",
    "Parkings",
    "Événements"
  ]

  const avantages = [
    { icon: MapPin, title: "Orientation claire", description: "Guidage intuitif de vos visiteurs" },
    { icon: Building2, title: "Image professionnelle", description: "Valorisation de votre établissement" },
    { icon: Shield, title: "Conformité normes", description: "Respect des réglementations en vigueur" },
    { icon: Navigation, title: "Sur mesure", description: "Adaptation à votre environnement" }
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
              <span className="text-yellow-400">Signalétique</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Création de panneaux de chantier, stop trottoir, éléments de signalétique, drapeaux. Solutions complètes pour guider et informer
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Signalétique intérieure et extérieure</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Domaines d'application</h2>
                <p className="text-lg text-gray-600 mb-8">Signalétique pour tous environnements</p>
                <div className="grid grid-cols-2 gap-4">
                  {applications.map((app, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{app}</span>
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
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Projet de signalétique ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Signaletique
