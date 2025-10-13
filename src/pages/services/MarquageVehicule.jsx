import { Button } from '@/components/ui/button.jsx'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function MarquageVehicule() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marquage <span className="text-yellow-400">Véhicule</span>
            </h1>
            <p className="text-xl text-gray-300">Covering complet, adhésifs découpés, flocage pour tous véhicules</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">Transformez vos véhicules en supports publicitaires mobiles avec notre service de marquage véhicule professionnel. Covering total ou partiel, adhésifs découpés, flocage textile - nous marquons tous types de véhicules : voitures, utilitaires, camions, motos.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Intéressé par ce service ?</h2>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default MarquageVehicule
