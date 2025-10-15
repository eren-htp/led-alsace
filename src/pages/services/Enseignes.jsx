import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Lightbulb, Clock, Award, Wrench, MapPin, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import realisation1 from '../../assets/realisations/realisation_prointer.webp'
import realisation2 from '../../assets/realisations/realisation_red_door.webp'
import realisation3 from '../../assets/realisations/realisation_saturn.webp'
import realisation4 from '../../assets/realisations/realisation_saveurs.webp'
import realisation5 from '../../assets/realisations/realisation_one_kebab.webp'
import realisation6 from '../../assets/realisations/realisation_pharmacie.webp'
import realisation7 from '../../assets/realisations/realisation_love.webp'
import realisation8 from '../../assets/realisations/realisation_perkko.webp'

function Enseignes() {
  const navigate = useNavigate()

  const realisations = [
    { image: realisation1, title: "ProControle", description: "Enseigne lumineuse contrôle technique" },
    { image: realisation2, title: "The Little Red Door", description: "Enseigne restaurant moderne" },
    { image: realisation3, title: "Saturn Event", description: "Logo lumineux en relief" },
    { image: realisation4, title: "Saveurs & Saisons", description: "Enseigne restaurant traditionnel" },
    { image: realisation5, title: "One Kebab", description: "Enseigne restauration rapide" },
    { image: realisation6, title: "Pharmacie", description: "Croix de pharmacie LED" },
    { image: realisation7, title: "Love", description: "Enseigne boutique élégante" },
    { image: realisation8, title: "Perkko", description: "Enseigne commerce moderne" }
  ]

  const autresTypes = [
    { 
      title: "Enseigne en dibond", 
      description: "Panneaux en aluminium composite légers et résistants pour une installation facile",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Enseigne+Dibond"
    },
    { 
      title: "Totems lumineux", 
      description: "Structures verticales imposantes pour signalétique extérieure haute visibilité",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Totem+Lumineux"
    },
    { 
      title: "Enseigne drapeau double face", 
      description: "Signalétique perpendiculaire au mur, visible des deux côtés de la rue",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Drapeau+Double+Face"
    },
    { 
      title: "Caisson ajouré lumineux", 
      description: "Caisson avec découpe personnalisée et rétro-éclairage LED pour un effet unique",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Caisson+Ajoure"
    },
    { 
      title: "Néon LED", 
      description: "Effet néon moderne avec technologie LED économique et personnalisable",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Neon+LED",
      link: "/services/neon-led"
    },
    { 
      title: "Écrans LED grand format", 
      description: "Affichage dynamique haute définition pour communication visuelle impactante",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Ecran+LED",
      link: "/services/ecrans-led"
    }
  ]

  const avantages = [
    { 
      icon: Lightbulb, 
      title: "Technologie LED", 
      description: "Économie d'énergie jusqu'à 80% par rapport aux enseignes traditionnelles" 
    },
    { 
      icon: Clock, 
      title: "Longévité", 
      description: "Durée de vie exceptionnelle de 50 000 heures minimum" 
    },
    { 
      icon: Award, 
      title: "Qualité premium", 
      description: "Matériaux haut de gamme résistants aux intempéries" 
    },
    { 
      icon: Wrench, 
      title: "Installation complète", 
      description: "Pose professionnelle et service après-vente inclus" 
    },
    { 
      icon: MapPin, 
      title: "Fabrication locale française", 
      description: "Toutes nos enseignes et solutions de signalétique sont fabriquées localement en Alsace, dans notre atelier situé à Ostwald, près de Strasbourg. En choisissant LED Alsace, vous soutenez un savoir-faire français et une production responsable, sans sous-traitance à l'étranger. Qualité, traçabilité et réactivité sont au cœur de notre engagement." 
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">Solutions d'Enseignes LED</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Enseignes Lumineuses LED
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Donnez de la visibilité à votre entreprise avec nos enseignes LED sur mesure. 
              Fabrication française, installation professionnelle et garantie longue durée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold text-lg px-8 py-6 rounded-full backdrop-blur-sm"
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

      {/* Autres Types d'Enseignes */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos autres types d'enseignes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions d'enseignes pour tous vos besoins de communication visuelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {autresTypes.map((type, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
                onClick={() => type.link && navigate(type.link)}
                style={{ cursor: type.link ? 'pointer' : 'default' }}
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {type.link && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                      En savoir plus →
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir Nos Enseignes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pourquoi choisir nos enseignes ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions d'enseignes LED de qualité supérieure, conçues et fabriquées en France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {avantages.map((avantage, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <avantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{avantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{avantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos enseignes installées chez nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {realisations.map((realisation, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={realisation.image} 
                    alt={realisation.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{realisation.title}</h3>
                  <p className="text-sm text-gray-600">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Besoin d'une enseigne sur mesure ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d'experts est à votre écoute.
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

export default Enseignes

