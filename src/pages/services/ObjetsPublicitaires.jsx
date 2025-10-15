import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Gift, Users, Briefcase, Coffee } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function ObjetsPublicitaires() {
  const navigate = useNavigate()

  const categories = [
    { icon: Coffee, title: "Bureau & Quotidien", items: ["Stylos", "Carnets", "Clés USB", "Mugs", "Gourdes"] },
    { icon: Briefcase, title: "Événementiel", items: ["Sacs personnalisés", "Lanyards", "Badges", "Parapluies", "Tote bags"] },
    { icon: Gift, title: "Cadeaux d'entreprise", items: ["Coffrets", "Textiles premium", "Accessoires tech", "Objets design"] },
    { icon: Users, title: "Salons & Foires", items: ["Kakémonos", "Roll-ups", "Goodies", "Échantillons", "Brochures"] }
  ]

  const avantages = [
    "Large catalogue de produits personnalisables",
    "Marquage multi-techniques (sérigraphie, gravure, broderie)",
    "Petites et grandes quantités",
    "Sourcing de produits sur demande",
    "Livraison dans toute la France",
    "Devis gratuit et conseils personnalisés"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-yellow-400 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Goodies & Cadeaux d'entreprise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Objets publicitaires</span> personnalisés
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Marquez les esprits avec des goodies et cadeaux d'entreprise à votre image
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

      {/* Catégories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nos catégories d'objets publicitaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                  <cat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques de marquage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Techniques de marquage</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { title: "Sérigraphie", description: "Idéale pour grandes séries, rendu durable" },
              { title: "Tampographie", description: "Marquage précis sur objets 3D" },
              { title: "Gravure laser", description: "Finition haut de gamme, permanente" },
              { title: "Broderie", description: "Pour textiles, aspect premium" },
              { title: "Impression numérique", description: "Petites séries, visuels complexes" },
              { title: "Transfert", description: "Idéal pour textiles et surfaces planes" }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all text-center">
                <h3 className="text-xl font-bold mb-2 text-blue-600">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Pourquoi choisir LED Alsace ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-all">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">{avantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Utilisations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Occasions d'utilisation</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Salons professionnels",
              "Cadeaux clients",
              "Événements d'entreprise",
              "Campagnes marketing",
              "Anniversaires d'entreprise",
              "Lancement de produit",
              "Fidélisation client",
              "Team building"
            ].map((occasion, index) => (
              <div key={index} className="bg-white p-4 rounded-xl text-center hover:shadow-lg transition-all">
                <p className="font-semibold">{occasion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projet d'objets publicitaires ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour un catalogue personnalisé et un devis gratuit</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ObjetsPublicitaires

