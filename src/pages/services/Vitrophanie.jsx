import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Eye, Shield, Palette, Sun } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import vitrophanie from '../../assets/Vitrophanie6.JPG'

function Vitrophanie() {
  const navigate = useNavigate()

  const types = [
    { icon: Eye, title: "Vitrophanie opaque", description: "Masquage total pour intimité et confidentialité" },
    { icon: Sun, title: "Vitrophanie dépoli", description: "Effet sablé élégant, laisse passer la lumière" },
    { icon: Palette, title: "Vitrophanie imprimée", description: "Visuels personnalisés en couleur" },
    { icon: Shield, title: "Film micro-perforé", description: "Visibilité extérieure, transparence intérieure" }
  ]

  const applications = [
    "Vitrines de commerces et boutiques",
    "Bureaux et salles de réunion",
    "Cabinets médicaux et paramédicaux",
    "Restaurants et cafés",
    "Banques et assurances",
    "Espaces d'accueil et réception",
    "Cloisons vitrées",
    "Portes et baies vitrées"
  ]

  const avantages = [
    "Pose sans bulles par nos équipes",
    "Retrait propre sans résidus",
    "Résistance aux UV et à l'humidité",
    "Large choix de motifs et couleurs",
    "Découpe à la forme possible",
    "Conformité RGPD pour espaces professionnels"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Habillage de vitres</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Vitrophanie</span> sur mesure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Habillez vos vitrines et cloisons vitrées avec style et fonctionnalité
            </p>
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Types de vitrophanie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Types de vitrophanie</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {types.map((type, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-cyan-500 hover:shadow-xl transition-all text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Applications de la vitrophanie</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all">
                  <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Pourquoi choisir la vitrophanie ?</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-cyan-50 transition-all">
                <Check className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                <span className="font-semibold">{avantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utilisations professionnelles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Utilisations professionnelles</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: "Communication", description: "Affichage de logos, horaires, promotions sur vitrine" },
              { title: "Confidentialité", description: "Protection visuelle pour bureaux et salles de réunion" },
              { title: "Décoration", description: "Ambiance et design d'intérieur sur mesure" },
              { title: "Sécurité", description: "Signalisation de portes vitrées (bandes réglementaires)" },
              { title: "Occultation", description: "Masquage de zones de stockage ou techniques" },
              { title: "Branding", description: "Renforcement de l'identité visuelle de l'entreprise" }
            ].map((usage, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-2 text-cyan-600">{usage.title}</h3>
                <p className="text-gray-600">{usage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Notre processus</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Prise de mesures", desc: "Relevé précis sur site" },
              { num: "02", title: "Conception", desc: "Design et BAT pour validation" },
              { num: "03", title: "Production", desc: "Impression et découpe" },
              { num: "04", title: "Pose", desc: "Installation professionnelle" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-cyan-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projet de vitrophanie ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis personnalisé et une prise de mesures</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Vitrophanie

