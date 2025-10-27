import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Realisations from './pages/Realisations'
import RealisationDetail from './pages/RealisationDetail'
import NosClients from './pages/NosClients'
import APropos from './pages/APropos'
import MentionsLegales from './pages/MentionsLegales'

import Catalogue from './pages/Catalogue'
import Enseignes from './pages/services/Enseignes'
import MarquageVitrine from './pages/services/MarquageVitrine'
import ImpressionGrandFormat from './pages/services/ImpressionGrandFormat'
import MarquageVehicule from './pages/services/MarquageVehicule'
import TextileEPI from './pages/services/TextileEPI'
import Signaletique from './pages/services/Signaletique'
import CreationGraphique from './pages/services/CreationGraphique'
import DecoupeCNC from './pages/services/DecoupeCNC'
import NeonLED from './pages/services/NeonLED'
import ImpressionPapier from './pages/services/ImpressionPapier'
import ObjetsPublicitaires from './pages/services/ObjetsPublicitaires'
import Vitrophanie from './pages/services/Vitrophanie'
import DecoupeLaser from './pages/services/DecoupeLaser'
import EnseigneDibond from './pages/services/EnseigneDibond'
import TotemsLumineux from './pages/services/TotemsLumineux'
import EnseigneDrapeau from './pages/services/EnseigneDrapeau'
import CaissonAjoure from './pages/services/CaissonAjoure'
import EcransLED from './pages/services/EcransLED'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/enseignes" element={<Enseignes />} />
          <Route path="/services/marquage-vitrine" element={<MarquageVitrine />} />
          <Route path="/services/impression-grand-format" element={<ImpressionGrandFormat />} />
          <Route path="/services/marquage-vehicule" element={<MarquageVehicule />} />
          <Route path="/services/textile-epi" element={<TextileEPI />} />
          <Route path="/services/signaletique" element={<Signaletique />} />
          <Route path="/services/creation-graphique" element={<CreationGraphique />} />
          <Route path="/services/decoupe-cnc" element={<DecoupeCNC />} />
          <Route path="/services/neon-lumineuse" element={<NeonLED />} />
          <Route path="/services/impression-papier" element={<ImpressionPapier />} />
          <Route path="/services/objets-publicitaires" element={<ObjetsPublicitaires />} />
          <Route path="/services/vitrophanie" element={<Vitrophanie />} />
          <Route path="/services/decoupe-laser" element={<DecoupeLaser />} />
          <Route path="/services/enseigne-dibond" element={<EnseigneDibond />} />
          <Route path="/services/totems-lumineux" element={<TotemsLumineux />} />
          <Route path="/services/enseigne-drapeau" element={<EnseigneDrapeau />} />
          <Route path="/services/caisson-ajoure" element={<CaissonAjoure />} />
          <Route path="/services/ecrans-lumineuse" element={<EcransLED />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/realisations/:slug" element={<RealisationDetail />} />
          <Route path="/nos-clients" element={<NosClients />} />
          <Route path="/a-propos" element={<APropos />} />

          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

