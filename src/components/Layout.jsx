
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Instagram, Linkedin } from 'lucide-react'
import CallbackButton from './CallbackButton.jsx'
import SnapchatIcon from './SnapchatIcon.jsx'
import logoLedAlsace from '@/assets/logoledalsace1.png'
import logoFooterWhite from '@/assets/logo-footer-white.png'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
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

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Fermer le menu mobile au clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav') && !event.target.closest('button[aria-label="Toggle menu"]')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

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
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <img src={logoLedAlsace} alt="LED ALSACE - Enseigne & Signalétique" className="h-20" />
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
                aria-label="Toggle menu"
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
              <div className="flex items-center mb-4">
                <img src={logoFooterWhite} alt="LED ALSACE - Enseigne & Signalétique" className="h-16" />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Votre partenaire de confiance pour tous vos projets d'enseignes Lumineuse, signalétique 
                et marquage en Alsace depuis 2014.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/led_alsace/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/lumineuse-alsace/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.snapchat.com/add/led_alsace" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <SnapchatIcon className="w-6 h-6" />
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
                  <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a href="https://wa.me/33769308058" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    +33 7 69 30 80 58
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
            <p className="text-gray-400">&copy; 2025 Lumineuse ALSACE | Enseigne & Signalétique | Tous droits réservés</p>
            <Link to="/mentions-legales" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm mt-2 block">Mentions Légales</Link>
          </div>
        </div>
      </footer>
      )}

      {/* Floating Contact Button (Mobile Only) */}
      <button
        onClick={() => {
          navigate('/contact');
          setTimeout(() => {
            const formElement = document.getElementById('contact-form');
            if (formElement) {
              formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        }}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#F0C724] hover:bg-yellow-600 text-[#1A2534] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Ouvrir le formulaire de contact"
      >
        <Mail className="w-6 h-6" />
      </button>

      {/* Callback Button */}
      <CallbackButton />
    </div>
  )
}

export default Layout

