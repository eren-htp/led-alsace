import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Lightbulb, Clock, Award, Wrench } from 'lucide-react'
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
    { icon: Lightbulb, title: "Technologie LED", description: "Économie d'énergie jusqu'à 80% par rapport aux enseignes traditionnelles" },
    { icon: Clock, title: "Longévité", description: "Durée de vie exceptionnelle de 50 000 heures minimum" },
    { icon: Award, title: "Qualité premium", description: "Matériaux haut de gamme résistants aux intempéries" },
    { icon: Wrench, title: "Installation complète", description: "Pose professionnelle et service après-vente inclus" },
    { icon: MapPin, title: "Fabrication locale française", description: "Toutes nos enseignes et solutions de signalétique sont fabriquées localement en Alsace, dans notre atelier situé à Ostwald, près de Strasbourg. En choisissant LED Alsace, vous soutenez un savoir-faire français et une production responsable, sans sous-traitance à l’étranger. Qualité, traçabilité et réactivité sont au cœur de notre engagement." }
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
              Enseignes <span className="text-yellow-400">Lumineuses</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Plusieurs modèles disponibles d'enseignes sur mesure : lettres individuelles LED, caissons lumineux, panneaux digitaux, dibond... différents matériaux au choix
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos autres types d'enseignes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez notre gamme complète de solutions d'enseignes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {autresTypes.map((type, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-500"
                onClick={() => type.link && navigate(type.link)}
                style={{ cursor: type.link ? 'pointer' : 'default' }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {type.link && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      En savoir plus
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                  {type.link && (
                    <div className="mt-4 flex items-center text-yellow-600 font-semibold">
                      Découvrir <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir nos enseignes ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center">
                <avantage.icon className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{avantage.title}</h3>
                <p className="text-gray-600 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez quelques-unes de nos enseignes installées</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {realisations.map((realisation, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={realisation.image} alt={realisation.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{realisation.title}</h3>
                  <p className="text-sm text-gray-600">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Besoin d'une enseigne sur mesure ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit et personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Enseignes
