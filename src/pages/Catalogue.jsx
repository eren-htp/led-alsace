import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Download, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Catalogue() {
  const navigate = useNavigate()

  const catalogues = [
    {
      title: "Catalogue Enseignes LED",
      description: "Découvrez notre gamme complète d'enseignes lumineuses LED : lettres boîtier, néon LED, caissons lumineux...",
      pages: "24 pages",
      size: "5.2 MB",
      icon: "💡"
    },
    {
      title: "Catalogue Signalétique",
      description: "Panneaux directionnels, totems, plaques de porte, signalétique intérieure et extérieure.",
      pages: "18 pages",
      size: "3.8 MB",
      icon: "🚏"
    },
    {
      title: "Catalogue Marquage Véhicule",
      description: "Covering complet, adhésifs découpés, flocage, marquage flotte professionnelle.",
      pages: "16 pages",
      size: "4.1 MB",
      icon: "🚗"
    },
    {
      title: "Catalogue Vitrophanie",
      description: "Marquage vitrine, adhésifs micro-perforés, lettres découpées, décoration vitrine.",
      pages: "12 pages",
      size: "2.9 MB",
      icon: "🪟"
    }
  ]

  const products = [
    {
      category: "Enseignes LED",
      items: ["Lettres boîtier LED", "Néon LED flexible", "Caisson lumineux", "Enseigne drapeau", "Totem lumineux"]
    },
    {
      category: "Signalétique",
      items: ["Panneaux directionnels", "Plaques de porte", "Totems extérieurs", "Signalétique PMR", "Panneaux de chantier"]
    },
    {
      category: "Marquage",
      items: ["Covering véhicule", "Adhésifs découpés", "Flocage textile", "Marquage vitrine", "Stickers personnalisés"]
    },
    {
      category: "Impression",
      items: ["Bâches publicitaires", "Kakémonos", "Roll-up", "Panneaux dibond", "Impression grand format"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Catalogue</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos{' '}
              <span className="text-yellow-400">catalogues</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Téléchargez nos catalogues pour découvrir l'ensemble de nos produits et services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Téléchargez nos Catalogues
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consultez nos catalogues PDF pour découvrir nos produits en détail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {catalogues.map((catalogue, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 hover:border-yellow-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-6">{catalogue.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {catalogue.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {catalogue.description}
                </p>
                <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {catalogue.pages}
                  </span>
                  <span>{catalogue.size}</span>
                </div>
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                  size="lg"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Télécharger le catalogue
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Produits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un aperçu de notre gamme complète de produits et services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-yellow-500">
                  {product.category}
                </h3>
                <ul className="space-y-2">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-yellow-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Notre équipe est à votre disposition pour vous aider à choisir les produits adaptés à vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6"
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-bold text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:0388044534'}
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03 88 044 534
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalogue

