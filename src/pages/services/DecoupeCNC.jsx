import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Star, Scissors, Layers, Zap, Package, Settings, Ruler } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import decoupeCNC from '../../assets/DécoupeCNC.jpg'

function DecoupeCNC() {
  const navigate = useNavigate()

  const services = [
    {
      icon: Layers,
      title: "Découpe de précision",
      description: "Découpe CNC ultra-précise sur une large gamme de matériaux : bois, PVC, aluminium, plexiglas et composites.",
      features: ["Précision ±0.1mm", "Épaisseur jusqu'à 50mm", "Finitions parfaites", "Formes complexes"]
    },
    {
      icon: Settings,
      title: "Fraisage CNC",
      description: "Fraisage 3D et 2.5D pour créer des reliefs, gravures profondes et formes tridimensionnelles sur tous supports.",
      features: ["Relief 3D", "Gravure profonde", "Détails fins", "Rendu professionnel"]
    },
    {
      icon: Scissors,
      title: "Découpe de formes",
      description: "Réalisation de formes sur mesure pour enseignes, lettres découpées, logos et éléments décoratifs.",
      features: ["Lettres découpées", "Logos 3D", "Formes personnalisées", "Tous formats"]
    },
    {
      icon: Package,
      title: "Prototypage rapide",
      description: "Création de prototypes et maquettes pour vos projets avant production série. Idéal pour tests et validation.",
      features: ["Prototypes rapides", "Maquettes", "Tests de conception", "Petites séries"]
    },
    {
      icon: Ruler,
      title: "Pièces sur mesure",
      description: "Fabrication de pièces uniques ou en série selon vos plans et spécifications techniques précises.",
      features: ["Plans techniques", "Tolérances serrées", "Reproductibilité", "Contrôle qualité"]
    },
    {
      icon: Zap,
      title: "Production rapide",
      description: "Délais de production courts grâce à notre équipement CNC moderne et notre expertise technique.",
      features: ["Délais courts", "Production flexible", "Réactivité", "Suivi projet"]
    }
  ]

  const materiaux = [
    { nom: "Bois", types: ["MDF", "Contreplaqué", "Bois massif", "Médium"] },
    { nom: "Plastiques", types: ["PVC", "Plexiglas", "Polycarbonate", "Forex"] },
    { nom: "Métaux", types: ["Aluminium", "Laiton", "Cuivre", "Acier doux"] },
    { nom: "Composites", types: ["Dibond", "Alucobond", "Trespa", "HPL"] }
  ]

  const applications = [
    {
      titre: "Signalétique",
      description: "Lettres découpées, logos 3D, panneaux directionnels",
      icon: "🪧"
    },
    {
      titre: "Enseignes",
      description: "Lettres boîtier, caissons lumineux, supports d'enseigne",
      icon: "💡"
    },
    {
      titre: "Décoration",
      description: "Éléments décoratifs, claustra, panneaux ajourés",
      icon: "🎨"
    },
    {
      titre: "Mobilier",
      description: "Pièces de mobilier, présentoirs, displays",
      icon: "🪑"
    },
    {
      titre: "Architecture",
      description: "Habillage façade, garde-corps, éléments structurels",
      icon: "🏢"
    },
    {
      titre: "Prototypage",
      description: "Maquettes, prototypes, pièces de test",
      icon: "🔧"
    }
  ]

  const avantages = [
    {
      icon: Check,
      titre: "Précision extrême",
      description: "Tolérances de ±0.1mm pour des résultats parfaits"
    },
    {
      icon: Check,
      titre: "Tous matériaux",
      description: "Découpe de bois, plastiques, métaux et composites"
    },
    {
      icon: Check,
      titre: "Formes complexes",
      description: "Réalisation de formes impossibles à découper manuellement"
    },
    {
      icon: Check,
      titre: "Production flexible",
      description: "De la pièce unique à la série, nous nous adaptons"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Fabrication Numérique</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Découpe CNC
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Découpe et fraisage CNC de haute précision sur tous matériaux. Lettres découpées, logos 3D, pièces sur mesure et prototypage rapide pour vos projets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')} 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
              >
                Demander un devis
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm font-bold text-lg px-10 py-7 rounded-full hover:scale-105 transition-all"
                onClick={() => window.location.href = 'tel:0388044534'}
              >
                <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03 88 044 534
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos services de découpe CNC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologie de pointe pour des réalisations précises et de qualité professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matériaux Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Matériaux disponibles</h2>
              <p className="text-xl text-gray-600">
                Découpe CNC sur une large gamme de matériaux pour tous vos projets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {materiaux.map((materiau, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{materiau.nom}</h3>
                  <ul className="space-y-2">
                    {materiau.types.map((type, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span className="text-sm">{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Applications</h2>
              <p className="text-xl text-gray-600">
                La découpe CNC au service de vos projets les plus variés
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-yellow-400">
                  <div className="text-4xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{app.titre}</h3>
                  <p className="text-gray-600 text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pourquoi choisir notre découpe CNC ?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex gap-4 items-start bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <avantage.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{avantage.titre}</h3>
                    <p className="text-gray-600">{avantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Un projet de découpe CNC ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Envoyez-nous vos plans et spécifications pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-2 border-black font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03 88 044 534
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DecoupeCNC

