import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Realisations from './pages/Realisations'
import NosClients from './pages/NosClients'
import APropos from './pages/APropos'
import Questions from './pages/Questions'
import Catalogue from './pages/Catalogue'
import Enseignes from './pages/services/Enseignes'
import MarquageVitrine from './pages/services/MarquageVitrine'
import ImpressionGrandFormat from './pages/services/ImpressionGrandFormat'
import MarquageVehicule from './pages/services/MarquageVehicule'
import TextileEPI from './pages/services/TextileEPI'
import Signaletique from './pages/services/Signaletique'
import CreationGraphique from './pages/services/CreationGraphique'
import LettresBoitier from './pages/LettresBoitier'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/enseignes" element={<Enseignes />} />
          <Route path="/services/lettres-boitier" element={<LettresBoitier />} />
          <Route path="/services/marquage-vitrine" element={<MarquageVitrine />} />
          <Route path="/services/impression-grand-format" element={<ImpressionGrandFormat />} />
          <Route path="/services/marquage-vehicule" element={<MarquageVehicule />} />
          <Route path="/services/textile-epi" element={<TextileEPI />} />
          <Route path="/services/signaletique" element={<Signaletique />} />
          <Route path="/services/creation-graphique" element={<CreationGraphique />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/nos-clients" element={<NosClients />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

