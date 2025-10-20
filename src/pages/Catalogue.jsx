import { useState, useEffect, useRef } from 'react'
import { PageFlip } from 'page-flip'
import { ZoomIn, ZoomOut, Home as HomeIcon, Menu, X, BookOpen, Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'

import '../App.css'

// Import des images optimisées en WebP
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
import pageFlipSound from '../catalogue-assets/page-flip.wav'

const pages = [
  page01, page02, page03, page04, page05,
  page06, page07, page08, page09, page10,
  page11, page12, page13, page14, page15
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
        width: 350,
        height: 466,
        size: 'fixed',
        minWidth: 200,
        maxWidth: 1000,
        minHeight: 300,
        maxHeight: 1350,
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
        title="Catalogue"
        description="Consultez notre catalogue interactif de modèles d'enseignes LED. Découvrez nos lettres boîtier lumineuses et trouvez l'inspiration pour votre projet d'enseigne en Alsace."
        keywords="catalogue enseignes LED, modèles lettres boîtier, catalogue interactif, exemples enseignes lumineuses, inspiration enseigne LED"
        canonicalUrl="https://www.ledalsace.com/catalogue"
      />
      {/* Header du catalogue - Déplacé en bas au-dessus des contrôles */}
      <header className="bg-led-dark/50 backdrop-blur-sm border-t border-yellow-500/20 px-3 md:px-6 py-3 md:py-4 fixed bottom-16 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/" className="text-lg md:text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer">
              LED Alsace
            </Link>
            <span className="text-gray-400 text-xs md:text-sm hidden sm:inline">Catalogue 2025</span>
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
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-4 bg-led-dark/70 backdrop-blur-sm px-3 md:px-6 py-2 md:py-3 rounded-full border border-yellow-500/30 z-50">
            <Button
              onClick={prevPage}
              disabled={isFlipping || currentPage === 0}
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50"
            >
              ←Préc.
            </Button>
            <span className="text-gray-300 flex items-center">
              Page {currentPage + 1}/{totalPages}
            </span>
            <Button
              onClick={nextPage}
              disabled={isFlipping || currentPage === totalPages - 1}
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 disabled:opacity-50"
            >
              Suiv.→
            </Button>
          </div>
        )}

        {/* Zoom Controls */}
        {!isMobile && (
          <div className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col gap-2 bg-led-dark/70 backdrop-blur-sm p-2 rounded-full border border-yellow-500/30 z-50">
            <Button
              onClick={zoomIn}
              disabled={zoom >= 2}
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 h-8 w-8 p-0"
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              onClick={zoomOut}
              disabled={zoom <= 0.5}
              className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 h-8 w-8 p-0"
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Thumbnails Overlay (Mobile Only) */}
        {isMobile && showThumbnails && (
          <div className="fixed inset-0 bg-led-dark/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4 overflow-y-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowThumbnails(false)}
              className="absolute top-4 right-4 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
            >
              <X className="w-4 h-4 mr-2" />
              Fermer
            </Button>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Miniatures</h2>
            <div className="grid grid-cols-2 gap-4">
              {pages.map((pageImg, index) => (
                <div key={index} className="cursor-pointer" onClick={() => goToPage(index)}>
                  <img src={pageImg} alt={`Page ${index + 1}`} className="w-full border border-yellow-500/50 rounded shadow-lg" />
                  <p className="text-center text-gray-300 text-sm mt-1">Page {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Catalogue

