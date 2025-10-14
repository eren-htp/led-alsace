import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Phone, Mail, MapPin, Lightbulb, ChevronDown } from 'lucide-react'
import CallbackButton from './CallbackButton.jsx'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300)
    setCloseTimeout(timeout)
  }

  const services = [
    { name: 'Enseignes', path: '/services/enseignes' },
    { name: 'Marquage Vitrine', path: '/services/marquage-vitrine' },
    { name: 'Impression grand format', path: '/services/impression-grand-format' },
    { name: 'Marquage véhicules', path: '/services/marquage-vehicule' },
    { name: 'Textile et E.P.I.', path: '/services/textile-epi' },
    { name: 'Signalétique', path: '/services/signaletique' },
    { name: 'Création Graphique', path: '/services/creation-graphique' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-gray-900">LED ALSACE</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${
                  location.pathname === '/' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Accueil
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center transition-colors ${
                    location.pathname.startsWith('/services') 
                      ? 'text-yellow-600 font-semibold' 
                      : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  Nos Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link
                        to="/services"
                        className="block px-4 py-3 text-yellow-600 font-semibold hover:bg-yellow-50 transition-colors"
                      >
                        Voir tous les services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/realisations" 
                className={`transition-colors ${
                  location.pathname === '/realisations' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Réalisations
              </Link>
              <Link 
                to="/nos-clients" 
                className={`transition-colors ${
                  location.pathname === '/nos-clients' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Nos Clients
              </Link>
              <Link 
                to="/a-propos" 
                className={`transition-colors ${
                  location.pathname === '/a-propos' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                À Propos
              </Link>
              <Link 
                to="/questions" 
                className={`transition-colors ${
                  location.pathname === '/questions' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Questions
              </Link>
              <Link 
                to="/catalogue" 
                className={`transition-colors ${
                  location.pathname === '/catalogue' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-gray-700 hover:text-yellow-600'
                }`}
              >
                Catalogue
              </Link>
              <Link to="/contact">
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 rounded-full"
                >
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top duration-200">
              <Link to="/" className="block text-gray-700 hover:text-yellow-600 transition-colors py-2">
                Accueil
              </Link>
              
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-600 transition-colors py-2"
                >
                  Nos Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        className="block text-gray-600 hover:text-yellow-600 transition-colors py-2 text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/services"
                      className="block text-yellow-600 font-semibold transition-colors py-2 text-sm"
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/realisations" className="block text-gray-700 hover:text-yellow-600 transition-colors py-2">
                Réalisations
              </Link>
              <Link to="/nos-clients" className="block text-gray-700 hover:text-yellow-600 transition-colors py-2">
                Nos Clients
              </Link>
              <Link to="/a-propos" className="block text-gray-700 hover:text-yellow-600 transition-colors py-2">
                À Propos
              </Link>
              <Link to="/questions" className="block text-gray-700 hover:text-yellow-600 transition-colors py-2">
                Questions
              </Link>
              <Link to="/catalogue" className="block text-gray-700 hover:text-yellow-600 transition-colors py-2">
                Catalogue
              </Link>
              <Link to="/contact" className="block">
                <Button 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  Contact
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-black" />
                </div>
                <span className="text-2xl font-bold">LED ALSACE</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets d'enseignes LED, 
                signalétique et marquage en Alsace depuis 2014.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Accueil</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</Link></li>
                <li><Link to="/realisations" className="text-gray-400 hover:text-yellow-500 transition-colors">Réalisations</Link></li>
                <li><Link to="/a-propos" className="text-gray-400 hover:text-yellow-500 transition-colors">À Propos</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Phone className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <a href="tel:0388044534" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    03 88 044 534
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <a href="mailto:contact@ledalsace.fr" className="text-gray-400 hover:text-yellow-500 transition-colors break-all">
                    contact@ledalsace.fr
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">
                    12 Rue Théodore Monod<br />
                    67540 Ostwald
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 LED ALSACE | Enseigne & Signalétique | Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
      
      {/* Bouton flottant "Être rappelé" */}
      <CallbackButton />
    </div>
  )
}

export default Layout

