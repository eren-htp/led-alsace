
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Instagram } from 'lucide-react'
import CallbackButton from './CallbackButton.jsx'
import logoLedAlsace from '@/assets/logo-led-alsace.webp'
import logoIcon from '@/assets/logo-led-alsace-icon.webp'
import snapchatIcon from '@/assets/snapchat.webp'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const [headerHeight, setHeaderHeight] = useState(0);

  const services = [
    { name: 'Enseignes', path: '/services/enseignes' },
    { name: 'Marquage Vitrine', path: '/services/marquage-vitrine' },
    { name: 'Impression grand format', path: '/services/impression-grand-format' },
    { name: 'Marquage véhicules', path: '/services/marquage-vehicule' },
    { name: 'Textile et E.P.I.', path: '/services/textile-epi' },
    { name: 'Signalétique', path: '/services/signaletique' },
    { name: 'Création Graphique', path: '/services/creation-graphique' }
  ]

  const handleMouseEnter = () => {
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    setIsServicesOpen(false)
  }

  const isCataloguePage = location.pathname === '/catalogue'

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.getElementById('main-header-fixed-container');
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header Container */}
      <div id="main-header-fixed-container" className="fixed top-0 left-0 right-0 z-50">
        {/* Top Info Bar */}
        <div className="bg-[#F0C724] py-1">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center md:justify-between flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-3">
                <a href="tel:+33388044534" className="flex items-center gap-1.5 text-[#1A2534] hover:text-gray-900 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">03 88 04 45 34</span>
                </a>
                <a href="mailto:contact@ledalsace.fr" className="flex items-center gap-1.5 text-[#1A2534] hover:text-gray-900 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="font-semibold">contact@ledalsace.fr</span>
                </a>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Z.I+La+Vigie,+12+rue+Th%C3%A9odore+Monod,+67540+Ostwald" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 text-[#1A2534] hover:text-gray-900 transition-colors text-xs cursor-pointer"
              >
                <MapPin className="w-3 h-3" />
                <span>Z.I La Vigie, 12 rue Théodore Monod, 67540 Ostwald</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <img src={logoIcon} alt="LED ALSACE" className="h-16 w-16" />
                <span className="text-2xl font-bold text-gray-900">LED ALSACE</span>
              </Link>

              {/* Desktop Navigation */}
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
                
                {/* Solutions Dropdown */}
                <div 
                  className="relative group"
                >
                  <Link
                    to="/services"
                    className={`flex items-center transition-colors ${
                      location.pathname.startsWith('/services') 
                        ? 'text-yellow-600 font-semibold' 
                        : 'text-gray-700 hover:text-yellow-600'
                    }`}
                  >
                    Nos Solutions
                    <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {services.map((service, index) => (
                        <div key={index} className="relative group/item">
                          <Link
                            to={service.path}
                            className="block px-4 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
                          >
                            {service.name}
                            {service.submenu && <span className="float-right">›</span>}
                          </Link>
                          {service.submenu && (
                            <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200">
                              {service.submenu.map((sub, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={sub.path}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors border-l-2 border-yellow-400"
                                >
                                  → {sub.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          to="/services"
                          className="block px-4 py-3 text-yellow-600 font-semibold hover:bg-yellow-50 transition-colors"
                        >
                          Voir toutes les solutions →
                        </Link>
                      </div>
                  </div>
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
                  to="/catalogue" 
                  className={`transition-colors ${
                    location.pathname === '/catalogue' 
                      ? 'text-yellow-600 font-semibold' 
                      : 'text-gray-700 hover:text-yellow-600'
                  }`}
                >
                  Catalogue
                </Link>
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-yellow-500 hover:bg-yellow-600 text-[#1A2534] font-semibold"
                >
                  Contact
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden mt-4 py-4 border-t border-gray-200 space-y-2">
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
                >
                  Accueil
                </Link>
                
                <div>
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-yellow-600 transition-colors py-2"
                  >
                    Nos Solutions
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
                        Voir toutes les solutions →
                      </Link>
                    </div>
                  )}
                </div>

                <Link 
                  to="/realisations" 
                  className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
                >
                  Réalisations
                </Link>
                <Link 
                  to="/nos-clients" 
                  className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
                >
                  Nos Clients
                </Link>
                <Link 
                  to="/a-propos" 
                  className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
                >
                  À Propos
                </Link>

                <Link 
                  to="/catalogue" 
                  className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
                >
                  Catalogue
                </Link>
                <Button 
                  onClick={() => window.location.href = '/contact'}
                  className="bg-yellow-500 hover:bg-yellow-600 text-[#1A2534] font-semibold"
                >
                  Contact
                </Button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-grow" style={{ paddingTop: headerHeight ? `${headerHeight}px` : '0' }}>
        {children}
      </main>

      {/* Footer */}
      {!isCataloguePage && (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoLedAlsace} alt="LED ALSACE" className="h-12" />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Votre partenaire de confiance pour tous vos projets d'enseignes LED, signalétique 
                et marquage en Alsace depuis 2014.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/led_alsace/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.snapchat.com/add/led_alsace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <img src={snapchatIcon} alt="Snapchat" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Accueil</Link></li>
                <li><Link to="/realisations" className="text-gray-400 hover:text-yellow-500 transition-colors">Réalisations</Link></li>
                <li><Link to="/nos-clients" className="text-gray-400 hover:text-yellow-500 transition-colors">Nos Clients</Link></li>
                <li><Link to="/a-propos" className="text-gray-400 hover:text-yellow-500 transition-colors">À Propos</Link></li>
                <li><Link to="/catalogue" className="text-gray-400 hover:text-yellow-500 transition-colors">Catalogue</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Prestations</h3>
              <ul className="space-y-2">
                <li><Link to="/services/enseignes" className="text-gray-400 hover:text-yellow-500 transition-colors">Enseignes</Link></li>
                <li><Link to="/services/marquage-vitrine" className="text-gray-400 hover:text-yellow-500 transition-colors">Marquage Vitrine</Link></li>
                <li><Link to="/services/impression-grand-format" className="text-gray-400 hover:text-yellow-500 transition-colors">Impression grand format</Link></li>
                <li><Link to="/services/marquage-vehicule" className="text-gray-400 hover:text-yellow-500 transition-colors">Marquage véhicules</Link></li>
                <li><Link to="/services/textile-epi" className="text-gray-400 hover:text-yellow-500 transition-colors">Textile et E.P.I.</Link></li>
                <li><Link to="/services/signaletique" className="text-gray-400 hover:text-yellow-500 transition-colors">Signalétique</Link></li>
                <li><Link to="/services/creation-graphique" className="text-gray-400 hover:text-yellow-500 transition-colors">Création Graphique</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 md:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a href="tel:+33388044534" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    03 88 044 534
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a href="mailto:contact@ledalsace.fr" className="text-gray-400 hover:text-yellow-500 transition-colors break-all">
                    contact@ledalsace.fr
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=12+Rue+Th%C3%A9odore+Monod,+67540+Ostwald" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer"
                  >
                    12 Rue Théodore Monod<br />
                    67540 Ostwald
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 LED ALSACE | Enseigne & Signalétique | Tous droits réservés</p>
            <Link to="/mentions-legales" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm mt-2 block">Mentions Légales</Link>
          </div>
        </div>
      </footer>
      )}

      {/* Callback Button */}
      <CallbackButton />
    </div>
  )
}

export default Layout

