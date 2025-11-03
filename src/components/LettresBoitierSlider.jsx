
import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react'
import cataloguePages from '../data/cataloguePages.js'

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
      description: 'Lettres individuelles lumineuses avec retour',
      materiaux: 'Fabriquées en acier inoxydable',
      lumiere: 'Eclairage de face',
      montage: 'Laquage possible sur les chants',
      caracteristiques: [
        'Lettres individuelles lumineuses avec retour',
        'Fabriquées en acier inoxydable',
        'Eclairage de face',
        'Laquage possible sur les chants'
      ]
    },
    {
      code: 'G02',
      title: 'Modèle G02',
      imageJour: G02Jour,
      imageNuit: G02Nuit,
      description: 'Lettre individuelle éclairée par les chants',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
      lumiere: 'Éclairage par les chants et par l\\\'arrière',
      montage: 'Entretoises, Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle éclairée par les chants',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
        'Éclairage par les chants et par l\\\'arrière',
        'Plexiglas de 20 mm'
      ]
    },
    {
      code: 'G03',
      title: 'Modèle G03',
      imageJour: G03Jour,
      imageNuit: G03Nuit,
      description: 'Lettre individuelle éclairée par l\\\'arrière',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
      lumiere: 'Éclairage par les chants et par l\\\'arrière',
      montage: 'Entretoises, Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle éclairée par l\\\'arrière',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
        'Plexiglas 10+5 mm diffusant avec contour extérieur',
        'Éclairage par les chants et par l\\\'arrière'
      ]
    },
    {
      code: 'G04',
      title: 'Modèle G04',
      imageJour: G04Jour,
      imageNuit: G04Nuit,
      description: 'Lettre individuelle éclairée par l\\\'arrière',
      materiaux: 'Acier inoxidable, Cuivre, Laiton',
      lumiere: 'Éclairage par l\\\'arrière',
      montage: 'Direct sur mur, Entretoises',
      caracteristiques: [
        'Lettre individuelle éclairée par l\\\'arrière',
        'Matériaux: Acier inoxidable, Cuivre, Laiton',
        'Éclairage par l\\\'arrière',
        'Montage: Direct sur mur, Entretoises'
      ]
    },
    {
      code: 'G05',
      title: 'Modèle G05',
      imageJour: G05Jour,
      imageNuit: G05Nuit,
      description: 'Lettres individuelles lumineuses sans retour',
      materiaux: 'Fabriquées en acier inoxydable',
      lumiere: 'Eclairage de face',
      montage: 'Laquage possible sur les chants',
      caracteristiques: [
        'Lettres individuelles lumineuses sans retour',
        'Fabriquées en acier inoxydable',
        'Eclairage de face',
        'Laquage possible sur les chants'
      ]
    },
    {
      code: 'G06',
      title: 'Modèle G06',
      imageJour: G06Jour,
      imageNuit: G06Nuit,
      description: 'Lettre individuelle complètement lumineuse',
      materiaux: 'Plexiglass',
      lumiere: 'Éclairage par l\\\'avant et les chants',
      montage: 'Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle complètement lumineuse',
        'Matériau: Plexiglass diffusant',
        'Éclairage complet de la face et des chants',
        'Montage: Direct sur mur, Sur lisse de fixation, Panneau de fond'
      ]
    },
    {
      code: 'G07',
      title: 'Modèle G07',
      imageJour: G07Jour,
      imageNuit: G07Nuit,
      description: 'Lettre individuelle lumineuse avec ampoules',
      materiaux: 'Acier inoxydable, Aluminium, Laiton, Cuivre',
      lumiere: 'Éclairage de face par ampoules',
      montage: 'Direct sur mur',
      caracteristiques: [
        'Lettre individuelle lumineuse avec ampoules',
        'Matériaux: Acier inoxydable, Aluminium, Laiton, Cuivre',
        'Éclairage de face par ampoules',
        'Fixation directe sur mur'
      ]
    },
    {
      code: 'G08',
      title: 'Modèle G08',
      imageJour: G08Jour,
      imageNuit: G08Nuit,
      description: 'Lettres individuelles rétroéclairées',
      materiaux: 'Face avant opaque en Dibond 3mm',
      lumiere: 'Eclairage rubans leds sur les chants',
      montage: 'Fixation murale',
      caracteristiques: [
        'Lettres individuelles rétroéclairées',
        'Face avant opaque en Dibond 3mm',
        'Eclairage rubans leds sur les chants',
        'Effet lumineux moderne'
      ]
    },
    {
      code: 'G09',
      title: 'Modèle G09',
      imageJour: G09Jour,
      imageNuit: G09Nuit,
      description: 'Lettre individuelle lumineuse double face',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre',
      lumiere: 'Deux faces diffusantes avec plexiglas 10mm',
      montage: 'Peut être suspendu au plafond',
      caracteristiques: [
        'Lettre individuelle lumineuse double face',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre',
        'Deux faces diffusantes avec plexiglas 10mm',
        'Peut être suspendu au plafond pour effet double face'
      ]
    },
    {
      code: 'G10',
      title: 'Modèle G10',
      imageJour: G10Jour,
      imageNuit: G10Nuit,
      description: 'Lettre individuelle effets végétal',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre',
      lumiere: 'Face décorée avec de la mousse',
      montage: 'Effet végétal unique',
      caracteristiques: [
        'Lettre individuelle effets végétal',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre',
        'Face décorée avec de la mousse',
        'Effet végétal unique et moderne'
      ]
    },
    {
      code: 'G11',
      title: 'Modèle G11',
      imageJour: G11Jour,
      imageNuit: G11Nuit,
      description: 'Lettre individuelle éclairée par l\\\'avant avec plexiglas 5 + 10 mm',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre',
      lumiere: 'Éclairage par l\\\'avant',
      montage: 'Relief supplémentaire lumineux',
      caracteristiques: [
        'Lettre individuelle éclairée par l\\\'avant',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre',
        'Face avant en plexiglas 5+10mm',
        'Relief supplémentaire lumineux'
      ]
    },
    {
      code: 'G14',
      title: 'Modèle G14',
      imageJour: G14Jour,
      imageNuit: G14Nuit,
      description: 'Caisson ajouré lumineux',
      materiaux: 'Matériel: PVC, Dibond, Plexiglass',
      lumiere: 'Eclairage de face',
      montage: 'Lettrage découpé au laser',
      caracteristiques: [
        'Caisson ajouré lumineux',
        'Matériel: PVC, Dibond, Plexiglass',
        'Lettrage découpé au laser',
        'Eclairage de face'
      ]
    },
    {
      code: 'G15',
      title: 'Modèle G15',
      imageJour: G15Jour,
      imageNuit: G15Nuit,
      description: 'Lettre boîtier avec éclairage RGB. Personnalisation des couleurs pour un effet unique.',
      materiaux: 'Acier laqué premium',
      lumiere: 'Lumineuse RGB programmable',
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
      lumiere: 'Lumineuse haute intensité',
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

  const openFicheTechnique = () => {
    const modelCode = currentModel.code
    const ficheInfo = cataloguePages[modelCode]
    if (ficheInfo && ficheInfo.url) {
      // Ouvrir la fiche technique individuelle (fichier léger et rapide)
      window.open(ficheInfo.url, '_blank')
    }
  }

  return (
    <div className={`py-12 ${isNight ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isNight ? 'text-white' : 'text-gray-900'}`}>
            Enseigne Lettres Boîtier
          </h2>
          <p className={`text-lg ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
            Découvrez nos modèles de lettres boîtier personnalisables pour une visibilité optimale jour et nuit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image du modèle */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
            <img src={currentImage} alt={currentModel.title} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg">
              {currentModel.code}
            </div>
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button onClick={() => toggleDayNight(false)} size="sm" className={`${!isNight ? 'bg-yellow-500 text-white' : 'bg-white/30 text-white'}`}>
                <Sun className="w-4 h-4 mr-2" /> Jour
              </Button>
              <Button onClick={() => toggleDayNight(true)} size="sm" className={`${isNight ? 'bg-gray-800 text-white border-2 border-blue-400' : 'bg-gray-800/70 text-white hover:bg-gray-800'}`}>
                <Moon className="w-4 h-4 mr-2" /> Nuit
              </Button>
            </div>
            <Button onClick={prevSlide} size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-900 rounded-full">
              <ChevronLeft />
            </Button>
            <Button onClick={nextSlide} size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-900 rounded-full">
              <ChevronRight />
            </Button>
          </div>

          {/* Détails du modèle */}
          <div className={`p-8 rounded-lg ${isNight ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-2xl font-bold mb-4 ${isNight ? 'text-white' : 'text-gray-900'}`}>{currentModel.title}</h3>
            <p className={`mb-6 ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>{currentModel.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <span className={`font-bold w-24 ${isNight ? 'text-yellow-400' : 'text-gray-800'}`}>Matériaux:</span>
                <span className={`${isNight ? 'text-gray-300' : 'text-gray-700'}`}>{currentModel.materiaux}</span>
              </div>
              <div className="flex items-center">
                <span className={`font-bold w-24 ${isNight ? 'text-yellow-400' : 'text-gray-800'}`}>Lumière:</span>
                <span className={`${isNight ? 'text-gray-300' : 'text-gray-700'}`}>{currentModel.lumiere}</span>
              </div>
              <div className="flex items-center">
                <span className={`font-bold w-24 ${isNight ? 'text-yellow-400' : 'text-gray-800'}`}>Montage:</span>
                <span className={`${isNight ? 'text-gray-300' : 'text-gray-700'}`}>{currentModel.montage}</span>
              </div>
            </div>

            <h4 className={`text-lg font-bold mb-3 ${isNight ? 'text-white' : 'text-gray-900'}`}>Caractéristiques</h4>
            <ul className="space-y-2">
              {currentModel.caracteristiques.map((car, index) => (
                <li key={index} className={`flex items-center ${isNight ? 'text-gray-300' : 'text-gray-700'}`}>
                  <ChevronRight className="w-4 h-4 mr-2 text-yellow-500" /> {car}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
                Demander un devis
              </Button>
              <Button onClick={openFicheTechnique} size="lg" variant="outline" className={`flex-1 font-bold ${isNight ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900' : 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white'}`}>
                Voir la fiche technique
              </Button>
            </div>
          </div>
        </div>

        {/* Miniatures */}
        <div className="mt-8">
          <div className="flex space-x-2 overflow-x-auto pb-4">
            {models.map((model, index) => (
              <div 
                key={index} 
                onClick={() => goToModel(index)} 
                className={`cursor-pointer border-4 rounded-lg overflow-hidden flex-shrink-0 ${currentIndex === index ? 'border-yellow-500' : 'border-transparent'}`}
              >
                <img src={model.imageJour} alt={model.title} className="w-24 h-24 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LettresBoitierSlider

