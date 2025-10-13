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
import './App.css'

const ServiceDetail = () => (
  <div className="min-h-screen pt-32 pb-20">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Détail du Service</h1>
      <p className="text-xl text-gray-600">Page en construction...</p>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
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

