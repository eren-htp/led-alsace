import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react'

// Import des images jour/nuit pour chaque modèle
import G01Jour from '../assets/lettres-boitier/G01gunduz.webp'
import G01Nuit from '../assets/lettres-boitier/G01gece.webp'
import G02Jour from '../assets/lettres-boitier/G02gunduz.webp'
import G02Nuit from '../assets/lettres-boitier/G02gece.webp'
import G03Jour from '../assets/lettres-boitier/G03gunduz.webp'
import G03Nuit from '../assets/lettres-boitier/G03gece.webp'
import G04Jour from '../assets/lettres-boitier/G04gunduz.webp'
import G04Nuit from '../assets/lettres-boitier/G04gece.webp'
import G05Jour from '../assets/lettres-boitier/G05gunduz.webp'
import G05Nuit from '../assets/lettres-boitier/G05gece.webp'
import G06Jour from '../assets/lettres-boitier/G06gunduz.webp'
import G06Nuit from '../assets/lettres-boitier/G06gece.webp'
import G07Jour from '../assets/lettres-boitier/G07gunduz.webp'
import G07Nuit from '../assets/lettres-boitier/G07gece.webp'
import G08Jour from '../assets/lettres-boitier/G08gunduz.webp'
import G08Nuit from '../assets/lettres-boitier/G08gece.webp'
import G09Jour from '../assets/lettres-boitier/G09gunduz.webp'
import G09Nuit from '../assets/lettres-boitier/G09gece.webp'
import G10Jour from '../assets/lettres-boitier/G10gunduz.webp'
import G10Nuit from '../assets/lettres-boitier/G10gece.webp'
import G11Jour from '../assets/lettres-boitier/G11gunduz.webp'
import G11Nuit from '../assets/lettres-boitier/G11gece.webp'
import G14Jour from '../assets/lettres-boitier/G14gunduz.webp'
import G14Nuit from '../assets/lettres-boitier/G14gece.webp'
import G15Jour from '../assets/lettres-boitier/G15gunduz.webp'
import G15Nuit from '../assets/lettres-boitier/G15gece.webp'
import G16Jour from '../assets/lettres-boitier/G16gunduz.webp'
import G16Nuit from '../assets/lettres-boitier/G16gece.webp'

function LettresBoitierSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNight, setIsNight] = useState(false)

  const models = [
    {
      code: 'G01',
      title: 'Modèle G01',
      imageJour: G01Jour,
      imageNuit: G01Nuit,
      description: 'Lettre boîtier en acier ou en acier laqué ou brut. La fixation se fait directement sur mur, sur base de fixation ou panneau de fond.',
      materiaux: 'Acier, Acier laqué',
      lumiere: 'LED haute luminosité',
      montage: 'Fixation murale directe',
      caracteristiques: [
        'Structure en acier robuste',
        'Éclairage LED uniforme',
        'Résistant aux intempéries',
        'Personnalisable en couleur'
      ]
    },
    {
      code: 'G02',
      title: 'Modèle G02',
      imageJour: G02Jour,
      imageNuit: G02Nuit,
      description: 'Lettre boîtier avec éclairage frontal. Design classique pour une visibilité optimale.',
      materiaux: 'Acier galvanisé',
      lumiere: 'LED frontale',
      montage: 'Fixation murale',
      caracteristiques: [
        'Éclairage frontal puissant',
        'Design intemporel',
        'Installation rapide',
        'Maintenance facilitée'
      ]
    },
    {
      code: 'G03',
      title: 'Modèle G03',
      imageJour: G03Jour,
      imageNuit: G03Nuit,
      description: 'Lettre boîtier avec profil élégant. Parfait pour les enseignes haut de gamme.',
      materiaux: 'Aluminium anodisé',
      lumiere: 'LED périphérique',
      montage: 'Fixation sur support',
      caracteristiques: [
        'Profil élégant',
        'Finition premium',
        'Éclairage homogène',
        'Résistance optimale'
      ]
    },
    {
      code: 'G04',
      title: 'Modèle G04',
      imageJour: G04Jour,
      imageNuit: G04Nuit,
      description: 'Lettre boîtier moderne avec rétro-éclairage. Effet lumineux sophistiqué.',
      materiaux: 'Acier inoxydable',
      lumiere: 'LED rétro-éclairage',
      montage: 'Fixation espacée',
      caracteristiques: [
        'Effet halo lumineux',
        'Design moderne',
        'Visibilité exceptionnelle',
        'Installation professionnelle'
      ]
    },
    {
      code: 'G05',
      title: 'Modèle G05',
      imageJour: G05Jour,
      imageNuit: G05Nuit,
      description: 'Lettre boîtier avec finition premium. Design élégant pour une visibilité optimale jour et nuit.',
      materiaux: 'Acier inoxydable',
      lumiere: 'LED rétro-éclairage',
      montage: 'Fixation sur panneau',
      caracteristiques: [
        'Finition haut de gamme',
        'Éclairage LED performant',
        'Installation facilitée',
        'Durabilité exceptionnelle'
      ]
    },
    {
      code: 'G06',
      title: 'Modèle G06',
      imageJour: G06Jour,
      imageNuit: G06Nuit,
      description: 'Lettre boîtier compacte avec éclairage intégré. Idéal pour espaces réduits.',
      materiaux: 'Aluminium composite',
      lumiere: 'LED intégrée',
      montage: 'Fixation compacte',
      caracteristiques: [
        'Format compact',
        'Éclairage optimisé',
        'Gain de place',
        'Installation simplifiée'
      ]
    },
    {
      code: 'G07',
      title: 'Modèle G07',
      imageJour: G07Jour,
      imageNuit: G07Nuit,
      description: 'Lettre boîtier avec profil large. Visibilité maximale à grande distance.',
      materiaux: 'Acier renforcé',
      lumiere: 'LED haute puissance',
      montage: 'Fixation renforcée',
      caracteristiques: [
        'Profil large',
        'Visibilité longue distance',
        'Structure renforcée',
        'Éclairage puissant'
      ]
    },
    {
      code: 'G08',
      title: 'Modèle G08',
      imageJour: G08Jour,
      imageNuit: G08Nuit,
      description: 'Lettre boîtier moderne avec éclairage LED optimisé. Idéal pour les enseignes commerciales.',
      materiaux: 'Aluminium composite',
      lumiere: 'LED haute performance',
      montage: 'Fixation polyvalente',
      caracteristiques: [
        'Design contemporain',
        'Éclairage puissant',
        'Légèreté et solidité',
        'Maintenance simplifiée'
      ]
    },
    {
      code: 'G09',
      title: 'Modèle G09',
      imageJour: G09Jour,
      imageNuit: G09Nuit,
      description: 'Lettre boîtier avec éclairage latéral. Effet lumineux unique et moderne.',
      materiaux: 'Acier laqué',
      lumiere: 'LED latérale',
      montage: 'Fixation latérale',
      caracteristiques: [
        'Éclairage latéral',
        'Effet visuel unique',
        'Design innovant',
        'Personnalisation avancée'
      ]
    },
    {
      code: 'G10',
      title: 'Modèle G10',
      imageJour: G10Jour,
      imageNuit: G10Nuit,
      description: 'Lettre boîtier avec double éclairage. Visibilité optimale dans toutes conditions.',
      materiaux: 'Acier inoxydable premium',
      lumiere: 'LED double face',
      montage: 'Fixation double',
      caracteristiques: [
        'Double éclairage',
        'Visibilité 360°',
        'Qualité supérieure',
        'Durabilité maximale'
      ]
    },
    {
      code: 'G11',
      title: 'Modèle G11',
      imageJour: G11Jour,
      imageNuit: G11Nuit,
      description: 'Lettre boîtier avec profil fin. Élégance et discrétion pour enseignes raffinées.',
      materiaux: 'Aluminium fin',
      lumiere: 'LED discrète',
      montage: 'Fixation fine',
      caracteristiques: [
        'Profil ultra-fin',
        'Design épuré',
        'Éclairage discret',
        'Esthétique moderne'
      ]
    },
    {
      code: 'G14',
      title: 'Modèle G14',
      imageJour: G14Jour,
      imageNuit: G14Nuit,
      description: 'Lettre boîtier premium avec système d\'éclairage avancé. Excellence en visibilité et design.',
      materiaux: 'Acier inoxydable premium',
      lumiere: 'LED dernière génération',
      montage: 'Système de fixation avancé',
      caracteristiques: [
        'Qualité supérieure',
        'Éclairage intelligent',
        'Résistance maximale',
        'Garantie longue durée'
      ]
    },
    {
      code: 'G15',
      title: 'Modèle G15',
      imageJour: G15Jour,
      imageNuit: G15Nuit,
      description: 'Lettre boîtier avec éclairage RGB. Personnalisation des couleurs pour un effet unique.',
      materiaux: 'Acier laqué premium',
      lumiere: 'LED RGB programmable',
      montage: 'Fixation avec contrôleur',
      caracteristiques: [
        'Éclairage RGB',
        'Couleurs personnalisables',
        'Effets lumineux dynamiques',
        'Contrôle à distance'
      ]
    },
    {
      code: 'G16',
      title: 'Modèle G16',
      imageJour: G16Jour,
      imageNuit: G16Nuit,
      description: 'Lettre boîtier grand format. Impact visuel maximal pour grandes enseignes.',
      materiaux: 'Acier renforcé grand format',
      lumiere: 'LED haute intensité',
      montage: 'Fixation industrielle',
      caracteristiques: [
        'Grand format',
        'Impact visuel maximal',
        'Structure ultra-robuste',
        'Éclairage haute intensité'
      ]
    }
  ]

  const currentModel = models[currentIndex]
  const currentImage = isNight ? currentModel.imageNuit : currentModel.imageJour

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length)
  }

  const toggleDayNight = (night) => {
    setIsNight(night)
  }

  const goToModel = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className={`py-20 transition-colors duration-700 ${isNight ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isNight ? 'text-white' : 'text-gray-900'}`}>
              Lettres Boîtier LED
            </h2>
            <p className={`text-lg ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
              Découvrez nos modèles de lettres boîtier personnalisables pour une visibilité optimale jour et nuit
            </p>
          </div>

          {/* Main Slider */}
          <div className={`relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${
            isNight ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className={`relative h-96 lg:h-auto transition-all duration-700 ${
                isNight ? 'bg-gray-950' : 'bg-gray-100'
              }`}>
                <div className="w-full h-full flex items-center justify-center p-8">
                  <img 
                    src={currentImage} 
                    alt={currentModel.title}
                    className="max-w-full max-h-full object-contain transition-opacity duration-300"
                    loading="lazy"
                    key={`${currentIndex}-${isNight}`}
                  />
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  aria-label="Modèle précédent"
                  className={`absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all hover:scale-110 ${
                    isNight 
                      ? 'bg-gray-800/90 hover:bg-gray-800 text-white' 
                      : 'bg-white/90 hover:bg-white text-gray-900'
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Modèle suivant"
                  className={`absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 shadow-lg transition-all hover:scale-110 ${
                    isNight 
                      ? 'bg-gray-800/90 hover:bg-gray-800 text-white' 
                      : 'bg-white/90 hover:bg-white text-gray-900'
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Model Counter */}
                <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold ${
                  isNight ? 'bg-gray-800/90 text-white' : 'bg-led-dark/70 text-white'
                }`}>
                  {currentIndex + 1} / {models.length}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 lg:p-12" key={currentIndex}>
                {/* Day/Night Toggle */}
                <div className="flex justify-start mb-6">
                  <div className={`inline-flex items-center gap-2 rounded-full p-1 shadow-md ${
                    isNight ? 'bg-gray-700' : 'bg-gray-100'
                  }`} role="group" aria-label="Mode d'affichage">
                    <button
                      onClick={() => toggleDayNight(false)}
                      aria-label="Mode jour"
                      aria-pressed={!isNight}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        !isNight 
                          ? 'bg-yellow-400 text-gray-900 shadow-md' 
                          : isNight ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                      <span className="font-semibold text-sm">JOUR</span>
                    </button>
                    <button
                      onClick={() => toggleDayNight(true)}
                      aria-label="Mode nuit"
                      aria-pressed={isNight}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        isNight 
                          ? 'bg-gray-900 text-white shadow-md' 
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Moon className="w-4 h-4" />
                      <span className="font-semibold text-sm">NUIT</span>
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-bold text-lg mb-4">
                    {currentModel.code}
                  </span>
                  <h2 className={`text-3xl font-bold mb-4 ${isNight ? 'text-white' : 'text-gray-900'}`}>
                    {currentModel.title}
                  </h2>
                  <p className={`leading-relaxed ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
                    {currentModel.description}
                  </p>
                </div>

                {/* Specifications */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-900 font-bold">M</span>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isNight ? 'text-white' : 'text-gray-900'}`}>Matériaux</h3>
                      <p className={`text-sm ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{currentModel.materiaux}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-900 font-bold">L</span>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isNight ? 'text-white' : 'text-gray-900'}`}>Lumière</h3>
                      <p className={`text-sm ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{currentModel.lumiere}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-900 font-bold">F</span>
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isNight ? 'text-white' : 'text-gray-900'}`}>Montage</h3>
                      <p className={`text-sm ${isNight ? 'text-gray-400' : 'text-gray-600'}`}>{currentModel.montage}</p>
                    </div>
                  </div>
                </div>

                {/* Characteristics */}
                <div className="mb-8">
                  <h3 className={`font-bold mb-3 ${isNight ? 'text-white' : 'text-gray-900'}`}>Caractéristiques</h3>
                  <ul className="space-y-2">
                    {currentModel.caracteristiques.map((carac, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        <span className={`text-sm ${isNight ? 'text-gray-300' : 'text-gray-700'}`}>{carac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold"
                  size="lg"
                >
                  Demander un devis
                </Button>
              </div>
            </div>
          </div>

          {/* Model Thumbnails */}
          <div className="mt-8 overflow-x-auto">
            <div className="flex gap-3 pb-4 min-w-max">
              {models.map((model, index) => (
                <button
                  key={model.code}
                  onClick={() => goToModel(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? 'border-yellow-400 shadow-lg scale-105'
                      : isNight 
                        ? 'border-gray-700 hover:border-gray-500' 
                        : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={isNight ? model.imageNuit : model.imageJour}
                    alt={model.code}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LettresBoitierSlider

