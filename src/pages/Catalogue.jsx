import { useState, useEffect, useRef } from 'react'
import { PageFlip } from 'page-flip'
import { ZoomIn, ZoomOut, Home as HomeIcon, Menu, X, BookOpen, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

import '../App.css'

// Import des images optimisées en WebP - Catalogue Octobre 2025 (40 pages)
import page01 from '../catalogue-assets/page-01.webp'
import page02 from '../catalogue-assets/page-02.webp'
import page03 from '../catalogue-assets/page-03.webp'
import page04 from '../catalogue-assets/page-04.webp'
import page05 from '../catalogue-assets/page-05.webp'
import page06 from '../catalogue-assets/page-06.webp'
import page07 from '../catalogue-assets/page-07.webp'
import page08 from '../catalogue-assets/page-08.webp'
import page09 from '../catalogue-assets/page-09.webp'
import page10 from '../catalogue-assets/page-10.webp'
import page11 from '../catalogue-assets/page-11.webp'
import page12 from '../catalogue-assets/page-12.webp'
import page13 from '../catalogue-assets/page-13.webp'
import page14 from '../catalogue-assets/page-14.webp'
import page15 from '../catalogue-assets/page-15.webp'
import page16 from '../catalogue-assets/page-16.webp'
import page17 from '../catalogue-assets/page-17.webp'
import page18 from '../catalogue-assets/page-18.webp'
import page19 from '../catalogue-assets/page-19.webp'
import page20 from '../catalogue-assets/page-20.webp'
import page21 from '../catalogue-assets/page-21.webp'
import page22 from '../catalogue-assets/page-22.webp'
import page23 from '../catalogue-assets/page-23.webp'
import page24 from '../catalogue-assets/page-24.webp'
import page25 from '../catalogue-assets/page-25.webp'
import page26 from '../catalogue-assets/page-26.webp'
import page27 from '../catalogue-assets/page-27.webp'
import page28 from '../catalogue-assets/page-28.webp'
import page29 from '../catalogue-assets/page-29.webp'
import page30 from '../catalogue-assets/page-30.webp'
import page31 from '../catalogue-assets/page-31.webp'
import page32 from '../catalogue-assets/page-32.webp'
import page33 from '../catalogue-assets/page-33.webp'
import page34 from '../catalogue-assets/page-34.webp'
import page35 from '../catalogue-assets/page-35.webp'
import page36 from '../catalogue-assets/page-36.webp'
import page37 from '../catalogue-assets/page-37.webp'
import page38 from '../catalogue-assets/page-38.webp'
import page39 from '../catalogue-assets/page-39.webp'
import page40 from '../catalogue-assets/page-40.webp'
import pageFlipSound from '../catalogue-assets/page-flip.wav'

const pages = [
  page01, page02, page03, page04, page05,
  page06, page07, page08, page09, page10,
  page11, page12, page13, page14, page15,
  page16, page17, page18, page19, page20,
  page21, page22, page23, page24, page25,
  page26, page27, page28, page29, page30,
  page31, page32, page33, page34, page35,
  page36, page37, page38, page39, page40
]

function Catalogue() {
  const bookRef = useRef(null)
  const pageFlipRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const [zoom, setZoom] = useState(1)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(false)
  const [showFooter, setShowFooter] = useState(false) // Nouveau state pour le footer
  const [soundEnabled, setSoundEnabled] = useState(true) // État pour activer/désactiver le son

  // Fonction pour jouer le son de tournage de page
  const playPageFlipSound = () => {
    if (!soundEnabled) return
    
    const audio = new Audio(pageFlipSound)
    audio.volume = 0.5 // Volume à 50%
    audio.play().catch(err => console.log('Erreur lecture audio:', err))
  }

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile && bookRef.current && !pageFlipRef.current) {
      const bookContainer = bookRef.current
      bookContainer.innerHTML = '' // Clear existing content to avoid duplicates

      pages.forEach((pageImg, index) => {
        const pageDiv = document.createElement('div')
        pageDiv.className = 'page'
        pageDiv.setAttribute('data-density', 'hard')
        
        const pageContent = document.createElement('div')
        pageContent.className = 'page-content'
        
        const img = document.createElement('img')
        img.src = pageImg
        img.alt = `Page ${index + 1}`
        img.className = 'page-image'
        img.loading = 'eager' // Charger les images rapidement pour éviter le flash de contenu
        img.decoding = 'sync' // Rendu synchrone pour une meilleure cohérence
        
        pageContent.appendChild(img)
        pageDiv.appendChild(pageContent)
        bookContainer.appendChild(pageDiv)
      })

      const pageFlip = new PageFlip(bookContainer, {
        width: 420,
        height: 560,
        size: 'fixed',
        minWidth: 200,
        maxWidth: 1200,
        minHeight: 300,
        maxHeight: 1600,
        maxShadowOpacity: 0.7,
        showCover: true,
        mobileScrollSupport: false, // Désactivé pour desktop
        swipeDistance: 30,
        clickEventForward: true,
        usePortrait: false, // Deux pages sur desktop
        startPage: 0,
        drawShadow: true,
        flippingTime: 1000,
        useMouseEvents: true,
        autoSize: true,
        showPageCorners: true,
        disableFlipByClick: false
      })

      pageFlip.loadFromHTML(bookContainer.querySelectorAll('.page'))

      pageFlip.on('changeState', (e) => {
        if (e.data === 'flipping') {
          setIsFlipping(true)
        } else if (e.data === 'read') {
          setIsFlipping(false)
        }
        setTotalPages(pageFlip.getPageCount())
      })

      pageFlip.on('flip', (e) => {
        setCurrentPage(e.data)
        playPageFlipSound() // Jouer le son à chaque tournage de page
      })

      pageFlipRef.current = pageFlip
      setTotalPages(pages.length)
    }

    return () => {
      if (pageFlipRef.current) {
        pageFlipRef.current.destroy()
        pageFlipRef.current = null
      }
    }
  }, [isMobile]) // Dépendance à isMobile pour re-initialiser PageFlip si la taille change

  const nextPage = () => {
    if (pageFlipRef.current && !isFlipping) {
      pageFlipRef.current.flipNext()
    }
  }

  const prevPage = () => {
    if (pageFlipRef.current && !isFlipping) {
      pageFlipRef.current.flipPrev()
    }
  }

  const goToPage = (pageNum) => {
    if (pageFlipRef.current && !isFlipping) {
      pageFlipRef.current.flip(pageNum)
      setShowThumbnails(false)
      setShowFooter(false) // Cacher le footer après avoir cliqué sur une miniature
    }
  }

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2))
  }

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5))
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextPage()
      } else if (e.key === 'ArrowLeft') {
        prevPage()
      } else if (e.key === 'Home') {
        goToPage(0)
      }
    }
    if (!isMobile) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      if (!isMobile) {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isFlipping, isMobile, currentPage, nextPage, prevPage, goToPage])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col pt-32 md:pt-24">
      <SEO 
        title="Catalogue Octobre 2025"
        description="Consultez notre catalogue interactif de modèles d'enseignes LED - Édition Octobre 2025. Découvrez nos lettres boîtier lumineuses et trouvez l'inspiration pour votre projet d'enseigne en Alsace."
        keywords="catalogue enseignes LED, modèles lettres boîtier, catalogue interactif, exemples enseignes lumineuses, inspiration enseigne LED"
        canonicalUrl="https://www.ledalsace.com/catalogue"
      />
      {/* Header du catalogue - Déplacé en bas au-dessus des contrôles - Masqué sur mobile */}
      <header className="hidden md:block bg-led-dark/50 backdrop-blur-sm border-t border-yellow-500/20 px-3 md:px-6 py-3 md:py-4 fixed bottom-16 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/" className="text-lg md:text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer">
              LED Alsace
            </Link>
            <span className="text-gray-400 text-xs md:text-sm hidden sm:inline">Catalogue Octobre 2025</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="text-gray-300 text-xs md:text-sm">
              {currentPage + 1}/{totalPages}
            </span>
            {isMobile && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowThumbnails(!showThumbnails)}
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 h-8 w-8 p-0"
              >
                {showThumbnails ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            )}
            {!isMobile && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(0)}
                disabled={isFlipping}
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50"
              >
                <HomeIcon className="w-4 h-4 mr-2" />
                Début
              </Button>
            )}
            {!isMobile && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFooter(!showFooter)} // Bouton pour afficher/cacher le footer
                className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Miniatures
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 h-8 w-8 p-0"
              title={soundEnabled ? 'Désactiver le son' : 'Activer le son'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-2 md:p-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {isMobile ? (
          <div className="flex flex-col items-center overflow-y-auto w-full h-full pb-20">
            {pages.map((pageImg, index) => (
              <img
                key={index}
                src={pageImg}
                alt={`Page ${index + 1}`}
                className="w-full max-w-sm my-2 border border-gray-700 shadow-lg"
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          <div 
            className="relative book-wrapper" 
            style={{ 
              transform: `scale(${zoom})`, 
              transition: 'transform 0.3s ease',
              pointerEvents: isFlipping ? 'none' : 'auto',
              willChange: 'transform'
            }}
          >
            <div 
              ref={bookRef} 
              id="book"
              className="book-container"
            />
          </div>
        )}

        {/* Controls - Version mobile optimisée - Fixés tout en bas */}
        {!isMobile && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4 bg-gray-900/95 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border-2 border-yellow-500/60 shadow-2xl shadow-yellow-500/20 z-50">
            <Button
              onClick={prevPage}
              disabled={isFlipping || currentPage === 0}
              variant="outline"
              size="sm"
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50 h-8 w-8 md:h-10 md:w-10 p-0"
            >
              ←
            </Button>
            <Button
              onClick={zoomOut}
              disabled={zoom <= 0.5}
              variant="outline"
              size="sm"
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50 h-8 w-8 md:h-10 md:w-10 p-0"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button
              onClick={zoomIn}
              disabled={zoom >= 2}
              variant="outline"
              size="sm"
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50 h-8 w-8 md:h-10 md:w-10 p-0"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              onClick={nextPage}
              disabled={isFlipping || currentPage >= totalPages - 1}
              variant="outline"
              size="sm"
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50 h-8 w-8 md:h-10 md:w-10 p-0"
            >
              →
            </Button>
          </div>
        )}
      </main>

      {/* Footer avec miniatures - Affiché seulement si showFooter est true */}
      {showFooter && !isMobile && (
        <footer className="bg-led-dark/90 backdrop-blur-sm border-t border-yellow-500/20 px-6 py-4 fixed bottom-0 left-0 right-0 z-30 max-h-40 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-10 gap-2">
              {pages.map((pageImg, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`relative group overflow-hidden rounded border-2 transition-all ${
                    currentPage === index
                      ? 'border-yellow-400 ring-2 ring-yellow-400/50'
                      : 'border-gray-600 hover:border-yellow-500'
                  }`}
                >
                  <img
                    src={pageImg}
                    alt={`Page ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </footer>
      )}

      {/* Miniatures mobiles */}
      {showThumbnails && isMobile && (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-yellow-400 text-lg font-bold">Pages</h2>
            <Button
              onClick={() => setShowThumbnails(false)}
              variant="outline"
              size="sm"
              className="border-yellow-500/50 text-yellow-400"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {pages.map((pageImg, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index)
                  setShowThumbnails(false)
                }}
                className={`relative group overflow-hidden rounded border-2 ${
                  currentPage === index
                    ? 'border-yellow-400'
                    : 'border-gray-600'
                }`}
              >
                <img
                  src={pageImg}
                  alt={`Page ${index + 1}`}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Catalogue

