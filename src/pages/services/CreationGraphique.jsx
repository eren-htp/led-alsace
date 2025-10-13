import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Palette, FileText, Image, Layout } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function CreationGraphique() {
  const navigate = useNavigate()

  const services = [
    { title: "Création de logo", description: "Design d'identité visuelle unique et mémorable" },
    { title: "Charte graphique", description: "Définition complète de votre identité de marque" },
    { title: "Cartes de visite", description: "Design professionnel pour vos supports de contact" },
    { title: "Flyers et brochures", description: "Supports de communication impactants" },
    { title: "Affiches publicitaires", description: "Visuels percutants pour vos campagnes" },
    { title: "Supports digitaux", description: "Bannières web, posts réseaux sociaux" }
  ]

  const realisations = [
    "Logos d'entreprise",
    "Chartes graphiques complètes",
    "Cartes de visite",
    "Flyers promotionnels",
    "Brochures commerciales",
    "Affiches événementielles",
    "Menus restaurant",
    "Packaging produits"
  ]

  const avantages = [
    { icon: Palette, title: "Design sur mesure", description: "Création unique adaptée à votre identité" },
    { icon: FileText, title: "Fichiers sources", description: "Tous formats fournis pour impression et web" },
    { icon: Image, title: "Qualité professionnelle", description: "Designers expérimentés à votre service" },
    { icon: Layout, title: "Cohérence visuelle", description: "Harmonie sur tous vos supports" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Nos Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Création <span className="text-yellow-400">Graphique</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Notre équipe de designers crée votre identité visuelle complète : logo, charte graphique, cartes de visite, flyers, brochures. Du concept à la réalisation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solutions complètes de design graphique</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Types de supports</h2>
                <p className="text-lg text-gray-600 mb-8">Création graphique pour tous vos besoins</p>
                <div className="grid grid-cols-2 gap-4">
                  {realisations.map((real, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{real}</span>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre processus créatif</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Brief</h3>
                <p className="text-gray-600 text-sm">Analyse de vos besoins et objectifs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Création</h3>
                <p className="text-gray-600 text-sm">Design de plusieurs propositions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Validation</h3>
                <p className="text-gray-600 text-sm">Ajustements selon vos retours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">Livraison</h3>
                <p className="text-gray-600 text-sm">Fichiers finaux tous formats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Projet de création graphique ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour discuter de votre projet</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default CreationGraphique
