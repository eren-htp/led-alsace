import { Button } from '@/components/ui/button.jsx'
import SEO from '../components/SEO.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import { ArrowRight, Gift, Check, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function OffreCarteVisite() {
  const navigate = useNavigate()

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    { name: "Carte visite offerte", url: "/offre-carte-visite" }
  ]

  const seoData = {
    title: "Carte de Visite Offerte - LED Alsace",
    description: "Profitez de notre offre exceptionnelle : 250 cartes de visite offertes pour toute commande d'enseigne ou de marquage véhicule. Offre limitée !",
    keywords: "carte de visite offerte, cartes de visite gratuites, offre spéciale, enseigne, marquage véhicule, LED Alsace",
    canonicalUrl: "https://www.ledalsace.com/offre-carte-visite"
  }

  const avantages = [
    "Design professionnel personnalisé",
    "Impression haute qualité",
    "Livraison rapide",
    "Sans engagement"
  ]

  return (
    <div className="min-h-screen bg-white">

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Gift className="w-6 h-6 text-white" />
              <span className="text-white font-bold text-lg">OFFRE EXCLUSIVE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Carte de Visite Offerte
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8">
              Profitez de notre offre promotionnelle et recevez vos cartes de visite professionnelles gratuitement !
            </p>
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-gray-900 hover:bg-black text-white font-bold text-lg px-10 py-7 shadow-2xl"
            >
              Profiter de l'offre <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Détails de l'offre - CONTENU TEMPORAIRE À MODIFIER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Une offre exceptionnelle pour votre entreprise
              </h2>
              <p className="text-xl text-gray-600">
                [TEXTE TEMPORAIRE - À MODIFIER] Découvrez les détails de notre offre exclusive réservée aux professionnels de la région Grand Est.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-10 rounded-2xl border-2 border-yellow-500 shadow-xl mb-12">
              <div className="flex items-start gap-4 mb-6">
                <Star className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Conditions de l'offre</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    [TEXTE TEMPORAIRE - À MODIFIER] Cette offre est valable pour toute première commande de cartes de visite. 
                    Quantité minimum : 100 cartes. Format standard : 85x55mm. Impression recto-verso incluse.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    [TEXTE TEMPORAIRE - À MODIFIER] Offre limitée dans le temps. Valable jusqu'au [DATE À DÉFINIR]. 
                    Non cumulable avec d'autres promotions. Réservé aux professionnels et entreprises.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {avantages.map((avantage, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
                  <Check className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{avantage}</span>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comment en profiter ?</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <p className="text-gray-700 text-lg pt-1">[TEXTE TEMPORAIRE] Contactez-nous via le formulaire ou par téléphone au 03 88 04 45 34</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <p className="text-gray-700 text-lg pt-1">[TEXTE TEMPORAIRE] Envoyez-nous votre logo et vos informations de contact</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <p className="text-gray-700 text-lg pt-1">[TEXTE TEMPORAIRE] Validez la maquette et recevez vos cartes gratuitement sous 5 jours</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ne manquez pas cette opportunité !
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            [TEXTE TEMPORAIRE] Offre limitée. Contactez-nous dès maintenant pour profiter de vos cartes de visite gratuites.
          </p>
          <Button 
            onClick={() => navigate('/contact')} 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-10 py-7"
          >
            Demander mes cartes gratuites <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default OffreCarteVisite
