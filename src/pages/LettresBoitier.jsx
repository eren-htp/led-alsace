import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Import des images jour/nuit pour chaque modèle
import G01Jour from '../assets/lettres-boitier/G01gunduz.png'
import G01Nuit from '../assets/lettres-boitier/G01gece.png'
import G05Jour from '../assets/lettres-boitier/G05gunduz.png'
import G05Nuit from '../assets/lettres-boitier/G05gece.png'
import G08Jour from '../assets/lettres-boitier/G08gunduz.png'
import G08Nuit from '../assets/lettres-boitier/G08gece.png'
import G14Jour from '../assets/lettres-boitier/G14gunduz.png'
import G14Nuit from '../assets/lettres-boitier/G14gece.png'

function LettresBoitier() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNight, setIsNight] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    }
  ]

  const currentModel = models[currentIndex]
  const currentImage = isNight ? currentModel.imageNuit : currentModel.imageJour

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length)
      setIsTransitioning(false)
    }, 300)
  }

  const toggleDayNight = (night) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setIsNight(night)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isNight ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <section className={`relative pt-32 pb-20 transition-colors duration-700 ${
        isNight 
          ? 'bg-gradient-to-br from-gray-950 to-gray-900 text-white' 
          : 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Enseignes Lumineuses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lettres Boîtier LED
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Des lettres boîtier personnalisées pour une visibilité optimale jour et nuit. 
              Fabrication sur mesure avec des matériaux de qualité supérieure.
            </p>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className={`py-20 transition-colors duration-700 ${isNight ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Slider */}
            <div className={`relative rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${
              isNight ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className={`relative h-96 lg:h-auto transition-all duration-700 ${
                  isNight ? 'bg-gray-950' : 'bg-gray-100'
                }`}>
                  <div className={`w-full h-full flex items-center justify-center p-8 transition-opacity duration-300 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <img 
                      src={currentImage} 
                      alt={currentModel.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
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
                    isNight ? 'bg-gray-800/90 text-white' : 'bg-black/70 text-white'
                  }`}>
                    {currentIndex + 1} / {models.length}
                  </div>
                </div>

                {/* Info Section */}
                <div className={`p-8 lg:p-12 transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {/* Day/Night Toggle - Inside Card */}
                  <div className="flex justify-start mb-6">
                    <div className={`inline-flex items-center gap-2 rounded-full p-1 shadow-md ${
                      isNight ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <button
                        onClick={() => toggleDayNight(false)}
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
                      {currentModel.caracteristiques.map((carac, idx) => (
                        <li key={idx} className={`flex items-center gap-2 text-sm ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
                          <span className="text-yellow-500">✓</span>
                          {carac}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg py-6"
                  >
                    Demander un devis
                  </Button>
                </div>
              </div>
            </div>

            {/* Model Thumbnails */}
            <div className="flex justify-center gap-4 mt-8">
              {models.map((model, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsTransitioning(false)
                    }, 300)
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentIndex === index
                      ? 'bg-yellow-400 text-gray-900 shadow-lg scale-110'
                      : isNight 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {model.code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 transition-colors duration-700 ${isNight ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isNight ? 'text-white' : 'text-gray-900'}`}>
              Qu'est-ce que des lettres boîtiers ?
            </h2>
            <div className={`prose prose-lg max-w-none ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
              <p className="mb-6">
                Les lettres boîte sont un type de panneau conçu pour répondre aux besoins publicitaires des entreprises. 
                Ces lettres sont créées en plaçant une structure corporelle sur un matériau épais. Cette structure corporelle 
                permet à la lumière réfléchie de la source lumineuse située à l'intérieur de la lettre de sortir. Ainsi, 
                elles sont utilisées avec une fonction d'éclairage pour améliorer la visibilité pendant la nuit et le jour.
              </p>
              <p className="mb-6">
                Chez <strong className={isNight ? 'text-yellow-400' : 'text-gray-900'}>LED ALSACE</strong>, nous fabriquons des lettres boîte personnalisées pour nos clients. 
                La conception de ces lettres peut être personnalisée en fonction des besoins et des attentes de chaque client. 
                La source de lumière utilisée à l'intérieur des lettres peut être conçue pour être éclairée de l'avant, 
                de l'arrière ou du côté. De plus, différentes formes et tailles de lettres peuvent être produites en utilisant 
                différents matériaux pour la structure corporelle.
              </p>
              <p className="mb-6">
                Les avantages des lettres boîte incluent leur <strong className={isNight ? 'text-yellow-400' : 'text-gray-900'}>durabilité</strong> et leur <strong className={isNight ? 'text-yellow-400' : 'text-gray-900'}>longue durée de vie</strong>. 
                Étant donné qu'elles sont fabriquées à partir de matériaux de qualité, elles sont résistantes aux effets 
                environnementaux et aux conditions météorologiques. De plus, la conception des lettres boîte peut être 
                personnalisée pour refléter l'image de marque de l'entreprise.
              </p>
              <p>
                Les lettres boîte sont utilisées dans différents domaines : restaurants, bars, magasins, hôtels, bureaux 
                et de nombreuses autres entreprises peuvent utiliser des lettres boîte pour des enseignes, des horaires 
                d'ouverture ou des promotions. De plus, les lettres boîte peuvent être utilisées lors de divers événements 
                en plein air et salons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-700 ${
        isNight 
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' 
          : 'bg-gradient-to-r from-yellow-400 to-yellow-600'
      }`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Prêt à illuminer votre enseigne ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet de lettres boîtier et obtenir un devis personnalisé gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
            >
              Demander un devis
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-2 border-black font-bold text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default LettresBoitier

