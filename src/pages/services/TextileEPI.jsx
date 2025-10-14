import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Shirt, Award, Users, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function TextileEPI() {
  const navigate = useNavigate()

  const services = [
    { title: "Flocage textile", description: "Personnalisation de vêtements par transfert thermique" },
    { title: "Broderie", description: "Marquage haut de gamme pour un rendu premium" },
    { title: "Sérigraphie", description: "Impression textile pour grandes séries" },
    { title: "Vêtements de travail", description: "Fourniture et personnalisation de tenues professionnelles" },
    { title: "E.P.I.", description: "Équipements de protection individuelle personnalisés" },
    { title: "Textiles promotionnels", description: "T-shirts, polos, sweats pour événements" }
  ]

  const produits = [
    "T-shirts et polos",
    "Sweats et vestes",
    "Vêtements de travail",
    "Gilets haute visibilité",
    "Blouses professionnelles",
    "Casquettes et bonnets",
    "Sacs et accessoires",
    "Textiles techniques"
  ]

  const avantages = [
    { icon: Shirt, title: "Large catalogue", description: "Des centaines de références textiles disponibles" },
    { icon: Award, title: "Qualité durable", description: "Marquages résistants aux lavages répétés" },
    { icon: Users, title: "Petites & grandes séries", description: "De 1 à plusieurs milliers de pièces" },
    { icon: Sparkles, title: "Finitions soignées", description: "Rendu professionnel garanti" }
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
              Textile & <span className="text-yellow-400">E.P.I.</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Marquage textile et vente de vêtements de travail, E.P.I. Personnalisez vos textiles professionnels avec logo et coordonnées
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solutions complètes de marquage textile</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Produits disponibles</h2>
                <p className="text-lg text-gray-600 mb-8">Large gamme de textiles personnalisables</p>
                <div className="grid grid-cols-2 gap-4">
                  {produits.map((produit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{produit}</span>
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

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Besoin de textiles personnalisés ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default TextileEPI
