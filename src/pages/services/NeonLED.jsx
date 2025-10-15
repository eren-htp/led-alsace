import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Zap, Lightbulb, Palette, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import neonLED1 from '../../assets/NéonLED.JPG'
import neonLED2 from '../../assets/NéonLED2.JPG'
import neonLED3 from '../../assets/NéonLED3.JPG'
import neonLED4 from '../../assets/NéonLED4.JPG'

function NeonLED() {
  const navigate = useNavigate()

  const avantages = [
    { icon: Lightbulb, title: "Éclairage LED moderne", description: "Technologie LED dernière génération, économique et durable" },
    { icon: Palette, title: "Personnalisation totale", description: "Formes, couleurs et tailles sur mesure selon votre projet" },
    { icon: Shield, title: "Résistance garantie", description: "Étanche IP65, résiste aux chocs et aux intempéries" },
    { icon: Zap, title: "Faible consommation", description: "Jusqu'à 80% d'économie d'énergie par rapport au néon classique" }
  ]

  const applications = [
    "Enseignes commerciales et logos lumineux",
    "Décoration intérieure (restaurants, bars, boutiques)",
    "Événementiel et scénographie",
    "Signalétique lumineuse",
    "Décoration murale personnalisée",
    "Ambiance et mise en lumière"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Néon LED sur mesure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Illuminez votre espace avec du <span className="text-yellow-300">néon LED</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Design moderne, économique et durable. Créez l'ambiance parfaite pour votre entreprise.
            </p>
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Pourquoi choisir le néon LED ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <avantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Applications du néon LED</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Notre processus de fabrication</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Conception", desc: "Design de votre néon sur mesure" },
              { num: "02", title: "Validation", desc: "Aperçu 3D et validation du projet" },
              { num: "03", title: "Fabrication", desc: "Réalisation en atelier local" },
              { num: "04", title: "Installation", desc: "Pose et mise en service" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projet de néon LED sur mesure ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour créer votre néon LED personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default NeonLED

