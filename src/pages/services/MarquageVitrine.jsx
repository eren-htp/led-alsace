import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function MarquageVitrine() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Marquage{' '}
              <span className="text-yellow-400">Vitrine</span>
            </h1>
            <p className="text-xl text-gray-300">
              Décorez et personnalisez vos vitrines pour attirer les clients
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              Le marquage vitrine est une solution efficace pour communiquer sur votre activité, vos promotions ou votre identité visuelle directement sur vos vitrines. Adhésifs découpés, micro-perforés ou dépolis, nous proposons différentes techniques adaptées à vos besoins.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              {['Adhésifs découpés', 'Micro-perforés', 'Vitrophanie dépolie', 'Lettres adhésives'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Démarquez-vous avec une vitrine attractive
          </h2>
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

export default MarquageVitrine

