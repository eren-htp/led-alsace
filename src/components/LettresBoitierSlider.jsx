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
      description: 'Lettre individuelle avec retour éclairée par l\'avant',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
      lumiere: 'Éclairage par l\'avant',
      montage: 'Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle avec retour éclairée par l\'avant',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
        'Éclairage par l\'avant',
        'Montage: Direct sur mur, Sur lisse de fixation, Panneau de fond'
      ]
    },
    {
      code: 'G02',
      title: 'Modèle G02',
      imageJour: G02Jour,
      imageNuit: G02Nuit,
      description: 'Lettre individuelle éclairée par les chants',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
      lumiere: 'Éclairage par les chants et par l\'arrière',
      montage: 'Entretoises, Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle éclairée par les chants',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
        'Éclairage par les chants et par l\'arrière',
        'Plexiglas de 20 mm'
      ]
    },
    {
      code: 'G03',
      title: 'Modèle G03',
      imageJour: G03Jour,
      imageNuit: G03Nuit,
      description: 'Lettre individuelle éclairée par l\'arrière',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
      lumiere: 'Éclairage par les chants et par l\'arrière',
      montage: 'Entretoises, Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle éclairée par l\'arrière',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
        'Plexiglas 10+5 mm diffusant avec contour extérieur',
        'Éclairage par les chants et par l\'arrière'
      ]
    },
    {
      code: 'G04',
      title: 'Modèle G04',
      imageJour: G04Jour,
      imageNuit: G04Nuit,
      description: 'Lettre individuelle éclairée par l\'arrière',
      materiaux: 'Acier inoxidable, Cuivre, Laiton',
      lumiere: 'Éclairage par l\'arrière',
      montage: 'Direct sur mur, Entretoises',
      caracteristiques: [
        'Lettre individuelle éclairée par l\'arrière',
        'Matériaux: Acier inoxidable, Cuivre, Laiton',
        'Éclairage par l\'arrière',
        'Montage: Direct sur mur, Entretoises'
      ]
    },
    {
      code: 'G05',
      title: 'Modèle G05',
      imageJour: G05Jour,
      imageNuit: G05Nuit,
      description: 'Lettre individuelle éclairée par l\'avant',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
      lumiere: 'Éclairage par l\'avant',
      montage: 'Direct sur mur, Sur lisse de fixation, Panneau de fond',
      caracteristiques: [
        'Lettre individuelle éclairée par l\'avant',
        'Matériaux: Acier inoxidable, Aluminium, Laiton, Cuivre, Acier',
        'Face avant en plexiglas diffusant de 3 ou 5 mm',
        'Éclairage par l\'avant'
      ]
    },
    {
      code: 'G06',
      title: 'Modèle G06',
      imageJour: G06Jour,
      imageNuit: G06Nuit,
      description: 'Lettre individuelle complètement lumineuse',
      materiaux: 'Plexiglass',
      lumiere: 'Éclairage par l\'avant et les chants',
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
      description: 'Lettres boîtiers à éclairage latéral',
      materiaux: 'Plexiglas 20 mm, Dibond 3 mm',
      lumiere: 'Éclairage par les chants et par l\'arrière',
      montage: 'Face avant opaque en Dibond',
      caracteristiques: [
        'Lettres boîtiers à éclairage latéral',
        'Matériaux: Plexiglas 20 mm, Dibond 3 mm',
        'Face avant opaque en Dibond',
        'Chants et arrière rétroéclairés par rubans nano LED'
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
      description: 'Lettre individuelle éclairée par l\'avant avec plexiglas 5 + 10 mm',
      materiaux: 'Acier inoxidable, Aluminium, Laiton, Cuivre',
      lumiere: 'Éclairage par l\'avant',
      montage: 'Relief supplémentaire lumineux',
      caracteristiques: [
        'Lettre individuelle éclairée par l\'avant',
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
      description: 'Caisson lumineux ajouré simple face',
      materiaux: 'Plexiglas 3 mm, Dibond 3 mm, PVC 19 mm',
      lumiere: 'Éclairage par l\'avant par le lettrage',
      montage: 'Fixation directe sur mur',
      caracteristiques: [
        'Caisson lumineux ajouré simple face',
        'Matériaux: Plexiglas 3 mm, Dibond 3 mm, PVC 19 mm',
        'Éclairage par l\'avant par le lettrage',
        '100% personnalisable - Intérieur ou extérieur'
      ]
    }
  ]

  const nextModel = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length)
  }

  const prevModel = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length)
  }

  const currentModel = models[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Lettres Boîtier LED</h2>
          <p className="text-xl text-gray-600">
            Découvrez nos modèles de lettres boîtier personnalisables pour une visibilité optimale jour et nuit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
              <img
                src={isNight ? currentModel.imageNuit : currentModel.imageJour}
                alt={currentModel.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevModel}
              aria-label="Modèle précédent"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextModel}
              aria-label="Modèle suivant"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Day/Night Toggle */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setIsNight(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  !isNight ? 'bg-yellow-400 text-gray-900 shadow-md' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="font-medium">JOUR</span>
              </button>
              <button
                onClick={() => setIsNight(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                  isNight ? 'bg-gray-800 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="font-medium">NUIT</span>
              </button>
            </div>

            {/* Model Badge */}
            <div className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold shadow-md">
              {currentModel.code}
            </div>

            {/* Model Title */}
            <h3 className="text-3xl font-bold text-gray-900">{currentModel.title}</h3>

            {/* Description */}
            <p className="text-lg text-gray-700">{currentModel.description}</p>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Matériaux</h4>
                  <p className="text-gray-700">{currentModel.materiaux}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  L
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Lumière</h4>
                  <p className="text-gray-700">{currentModel.lumiere}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-400 text-gray-900 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  F
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Montage</h4>
                  <p className="text-gray-700">{currentModel.montage}</p>
                </div>
              </div>
            </div>

            {/* Characteristics */}
            <div>
              <h4 className="font-bold text-gray-900 mb-3">Caractéristiques</h4>
              <ul className="space-y-2">
                {currentModel.caracteristiques.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-6 text-lg shadow-lg">
              Demander un devis
            </Button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex gap-4 justify-center min-w-max px-4">
            {models.map((model, index) => (
              <button
                key={model.code}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-yellow-400 scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={model.imageJour}
                  alt={model.code}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LettresBoitierSlider

