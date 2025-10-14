import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Phone, Mail, MapPin, Lightbulb, ChevronDown, Instagram } from 'lucide-react'
import CallbackButton from './CallbackButton.jsx'
import logoLedAlsace from '@/assets/logo-led-alsace.jpg'
import logoIcon from '@/assets/logo-led-alsace-icon.png'

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const services = [
    { name: 'Enseignes', path: '/services/enseignes' },
    { name: 'Marquage Vitrine', path: '/services/marquage-vitrine' },
    { name: 'Impression grand format', path: '/services/impression-grand-format' },
    { name: 'Marquage véhicules', path: '/services/marquage-vehicules' },
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm py-4">
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
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </Link>
                
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
                        Voir toutes les solutions →
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
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
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
                to="/questions" 
                className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
              >
                Questions
              </Link>
              <Link 
                to="/catalogue" 
                className="block text-gray-700 hover:text-yellow-600 transition-colors py-2"
              >
                Catalogue
              </Link>
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold mt-4"
              >
                Contact
              </Button>
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
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoIcon} alt="LED ALSACE" className="h-16 w-16" />
                <span className="text-2xl font-bold">LED ALSACE</span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Votre partenaire de confiance pour tous vos projets d'enseignes LED, 
                signalétique et marquage en Alsace depuis 2014.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://www.instagram.com/ledalsace/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://snapchat.com/t/CLVnjhS4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
                  aria-label="Snapchat"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .719-.149 1.069-.38.42-.275.672-.512.996-.559.127-.019.255-.029.383-.029.535 0 .928.249 1.201.525.389.39.567.896.567 1.396 0 .478-.121.863-.294 1.178-.301.551-.779.977-1.486 1.325-.226.111-.45.199-.664.269.05.217.109.432.176.645.497 1.578 1.179 2.993 2.031 4.222.09.129.191.26.295.394.42.533.77 1.011.77 1.627 0 .58-.34 1.083-.96 1.417-.517.279-1.177.418-1.961.418-.346 0-.708-.024-1.076-.072-1.123-.146-2.193-.54-3.179-1.17-.494-.317-.958-.695-1.381-1.125-.424.43-.888.808-1.382 1.125-.986.63-2.056 1.024-3.179 1.17-.368.048-.73.072-1.076.072-.784 0-1.444-.139-1.961-.418-.62-.334-.96-.837-.96-1.417 0-.616.35-1.094.77-1.627.104-.134.205-.265.295-.394.852-1.229 1.534-2.644 2.031-4.222.067-.213.126-.428.176-.645-.214-.07-.438-.158-.664-.269-.707-.348-1.185-.774-1.486-1.325-.173-.315-.294-.7-.294-1.178 0-.5.178-1.006.567-1.396.273-.276.666-.525 1.201-.525.128 0 .256.01.383.029.324.047.576.284.996.559.35.231.769.38 1.069.38.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.583-3.545 4.94-3.821 5.93-3.821z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Liens Rapides */}
            <div>
              <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Accueil</Link></li>
                <li><Link to="/realisations" className="text-gray-400 hover:text-yellow-500 transition-colors">Réalisations</Link></li>
                <li><Link to="/nos-clients" className="text-gray-400 hover:text-yellow-500 transition-colors">Nos Clients</Link></li>
                <li><Link to="/a-propos" className="text-gray-400 hover:text-yellow-500 transition-colors">À Propos</Link></li>
                <li><Link to="/questions" className="text-gray-400 hover:text-yellow-500 transition-colors">Questions</Link></li>
                <li><Link to="/catalogue" className="text-gray-400 hover:text-yellow-500 transition-colors">Catalogue</Link></li>
              </ul>
            </div>

            {/* Prestations */}
            <div>
              <h4 className="text-lg font-bold mb-4">Prestations</h4>
              <ul className="space-y-2">
                <li><Link to="/services/enseignes" className="text-gray-400 hover:text-yellow-500 transition-colors">Enseignes</Link></li>
                <li><Link to="/services/marquage-vitrine" className="text-gray-400 hover:text-yellow-500 transition-colors">Marquage Vitrine</Link></li>
                <li><Link to="/services/impression-grand-format" className="text-gray-400 hover:text-yellow-500 transition-colors">Impression grand format</Link></li>
                <li><Link to="/services/marquage-vehicules" className="text-gray-400 hover:text-yellow-500 transition-colors">Marquage véhicules</Link></li>
                <li><Link to="/services/textile-epi" className="text-gray-400 hover:text-yellow-500 transition-colors">Textile et E.P.I.</Link></li>
                <li><Link to="/services/signaletique" className="text-gray-400 hover:text-yellow-500 transition-colors">Signalétique</Link></li>
                <li><Link to="/services/creation-graphique" className="text-gray-400 hover:text-yellow-500 transition-colors">Création Graphique</Link></li>
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
              © 2025 LED ALSACE | Enseigne & Signalétique | Tous droits réservés
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

