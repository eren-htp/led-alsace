import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Signaletique() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Nos Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Signaletique <span className="text-yellow-400">Professionnel</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Des solutions professionnelles adaptées à vos besoins
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Nos prestations</h2>
            <p className="text-lg text-gray-600 mb-12">
              LED Alsace vous accompagne dans tous vos projets avec des solutions de qualité professionnelle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-xl">
                <Check className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Qualité professionnelle</h3>
                <p className="text-gray-600">Matériaux et techniques de pointe</p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <Check className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Sur mesure</h3>
                <p className="text-gray-600">Solutions adaptées à vos besoins</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Besoin d'un devis ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour discuter de votre projet</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Signaletique
