import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Zap, Layers, Scissors, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function DecoupeLaser() {
  const navigate = useNavigate()

  const materiaux = [
    { icon: Layers, title: "Bois", types: ["Contreplaqué", "MDF", "Bois massif", "Médium"] },
    { icon: Layers, title: "Plastiques", types: ["Acrylique (PMMA)", "PVC", "Polycarbonate", "PET"] },
    { icon: Layers, title: "Métaux", types: ["Acier inox", "Aluminium", "Laiton", "Cuivre"] },
    { icon: Layers, title: "Autres", types: ["Carton", "Cuir", "Textile", "Papier épais"] }
  ]

  const applications = [
    "Enseignes et logos découpés",
    "Signalétique intérieure et extérieure",
    "Plaques et panneaux personnalisés",
    "Objets décoratifs et design",
    "Prototypes et pièces techniques",
    "Gravure de textes et motifs",
    "Découpe de formes complexes",
    "Pièces sur-mesure pour l'industrie"
  ]

  const avantages = [
    "Précision au dixième de millimètre",
    "Découpe de formes complexes impossible manuellement",
    "Gravure et marquage permanent",
    "Production rapide, de l'unité à la série",
    "Finitions nettes sans bavures",
    "Fichiers numériques optimisés"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Découpe de précision</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Découpe laser</span> professionnelle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Précision extrême pour vos projets de découpe et gravure sur tous matériaux
            </p>
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Matériaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Matériaux compatibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materiaux.map((mat, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-red-500 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <mat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{mat.title}</h3>
                <ul className="space-y-2">
                  {mat.types.map((type, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Applications de la découpe laser</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all">
                  <Scissors className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
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
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Avantages de la découpe laser</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-red-50 transition-all">
                <Star className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <span className="font-semibold">{avantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nos services de découpe laser</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: "Découpe", description: "Formes complexes, précision extrême" },
              { icon: Zap, title: "Gravure", description: "Marquage permanent de textes et logos" },
              { icon: Layers, title: "Marquage", description: "Personnalisation de surfaces" },
              { icon: Star, title: "Prototypage", description: "Réalisation rapide de maquettes" },
              { icon: Check, title: "Petites séries", description: "De 1 à 1000 pièces" },
              { icon: Layers, title: "Grandes séries", description: "Production industrielle" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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
              { num: "01", title: "Fichier", desc: "Fourniture ou création du fichier vectoriel" },
              { num: "02", title: "Optimisation", desc: "Préparation pour découpe laser" },
              { num: "03", title: "Production", desc: "Découpe et/ou gravure" },
              { num: "04", title: "Finitions", desc: "Nettoyage et contrôle qualité" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-red-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projet de découpe laser ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default DecoupeLaser

