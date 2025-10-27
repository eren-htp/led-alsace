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

	  // Détecter si on est sur mobile (et ajuster la taille pour PageFlip)
	  useEffect(() => {
	    const checkMobile = () => {
	      // Utiliser une valeur plus petite pour la détection mobile pour être sûr que PageFlip fonctionne sur les tablettes
	      // PageFlip est désactivé pour les écrans < 768px car il ne fonctionne pas correctement sur mobile.
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
        img.style.display = 'block' // Force l'affichage
        img.style.visibility = 'visible' // Force la visibilité
        img.style.opacity = '1' // Force l'opacité
        
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
        // Fix for Safari/Mac page rendering issues: Force a redraw
        setTimeout(() => {
          // 1. Force redraw of the book container
          if (bookRef.current) {
            bookRef.current.style.transform = 'translateZ(0)'
            bookRef.current.offsetHeight
            bookRef.current.style.transform = ''
          }
          // 2. Force PageFlip to update its view
          if (pageFlipRef.current) {
            pageFlipRef.current.update()
          }
        }, 100)
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
        description="Consultez notre catalogue interactif de modèles d'enseignes Lumineuse - Édition Octobre 2025. Découvrez nos lettres boîtier lumineuses et trouvez l'inspiration pour votre projet d'enseigne en Alsace."
        keywords="catalogue enseignes Lumineuse, modèles lettres boîtier, catalogue interactif, exemples enseignes lumineuses, inspiration enseigne Lumineuse"
        canonicalUrl="https://www.ledalsace.com/catalogue"
      />
      <header className="hidden"></header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-2 md:p-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

	        {isMobile ? (
	          <div className="flex flex-col items-center overflow-y-auto w-full h-full pb-20 px-2">
	            {/* Fallback mobile: Affichage simple des pages en défilement vertical */}
	            <h2 className="text-xl font-bold text-yellow-500 mb-4 mt-2">Catalogue en défilement (Mobile)</h2>
	            <div className="grid grid-cols-1 gap-4 w-full max-w-lg">
	              {pages.map((pageImg, index) => (
	                <div key={index} className="relative w-full border-2 border-gray-700 shadow-xl">
	                  <img
	                    src={pageImg}
	                    alt={`Page ${index + 1}`}
	                    className="w-full h-auto object-contain"
	                    loading="lazy"
	                  />
	                  <div className="absolute bottom-0 right-0 bg-black/70 text-yellow-500 text-xs font-mono px-2 py-1">
	                    Page {index + 1} / {pages.length}
	                  </div>
	                </div>
	              ))}
	            </div>
	          </div>
	        ) : (
          <div className="flip-book-container" style={{ transform: `scale(${zoom})` }}>
            <div ref={bookRef} className="flip-book"></div>
          </div>
        )}

        {/* Thumbnails */}
        {showThumbnails && !isMobile && (
          <div className="absolute bottom-20 left-0 right-0 z-40 bg-black/50 backdrop-blur-sm p-4 overflow-x-auto">
            <div className="flex space-x-4">
              {pages.map((pageImg, index) => (
                <img
                  key={index}
                  src={pageImg}
                  alt={`Miniature ${index + 1}`}
                  className={`w-24 h-32 object-cover cursor-pointer border-2 ${currentPage === index ? 'border-yellow-500' : 'border-gray-600'} hover:border-yellow-400`}
                  onClick={() => goToPage(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer avec contrôles */}
        {!isMobile && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20">
            <div className="container mx-auto flex items-center justify-between p-2">
              {/* Contrôles de navigation */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={prevPage} disabled={isFlipping || currentPage === 0} className="bg-white/95 text-gray-900 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 md:w-12 md:h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </Button>
                <Button variant="outline" size="icon" onClick={zoomOut} className="bg-white/95 text-gray-900 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 md:w-12 md:h-12">
                  <ZoomOut />
                </Button>
                <Button variant="outline" size="icon" onClick={zoomIn} className="bg-white/95 text-gray-900 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 md:w-12 md:h-12">
                  <ZoomIn />
                </Button>
                <Button variant="outline" size="icon" onClick={nextPage} disabled={isFlipping || currentPage >= totalPages - 1} className="bg-white/95 text-gray-900 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 md:w-12 md:h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </div>

              {/* Numéro de page */}
              <div className="text-white text-lg font-semibold">
                {currentPage + 1} / {totalPages}
              </div>

              {/* Autres contrôles */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={() => setShowThumbnails(!showThumbnails)} title={showThumbnails ? "Masquer miniatures" : "Afficher miniatures"} className="bg-white/95 text-gray-900 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 md:w-12 md:h-12">
                  <BookOpen />
                </Button>
                <Button variant="outline" size="icon" onClick={() => goToPage(0)} title="Aller à la première page" className="bg-white/95 text-gray-900 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 md:w-12 md:h-12">
                  <HomeIcon />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Catalogue

