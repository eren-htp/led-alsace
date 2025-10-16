import { Button } from '@/components/ui/button.jsx'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import FAQ from '@/components/FAQ.jsx'
import enseigneDoubleFaceImg from '@/assets/Enseignedoubleface.jpg'

function EnseigneDrapeau() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={enseigneDoubleFaceImg}
            alt="Enseigne Drapeau Double Face"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enseigne Drapeau Double Face
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Visibilité optimale perpendiculaire à votre façade
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Qu'est-ce qu'une enseigne drapeau ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                L'<strong>enseigne drapeau</strong>, aussi appelée enseigne perpendiculaire, est fixée perpendiculairement à la façade d'un bâtiment. 
                Cette position stratégique permet d'être visible par les passants circulant dans les deux sens de la rue, contrairement à une enseigne parallèle à la façade.
              </p>
              <p className="mb-6">
                Disponible en version lumineuse ou non lumineuse, l'enseigne drapeau double face maximise votre visibilité et attire l'attention des clients potentiels. 
                C'est la solution idéale pour les commerces de centre-ville, les boutiques en galerie marchande ou tout établissement situé dans une rue passante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Types d'enseignes drapeau
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Caisson lumineux double face",
                description: "Éclairage LED intégré pour une visibilité 24/7. Faces en plexiglas imprimé ou vinyle translucide. Idéal pour les commerces ouverts en soirée."
              },
              {
                title: "Panneau non lumineux",
                description: "Solution économique en Dibond, aluminium ou PVC. Impression haute qualité résistante aux UV. Parfait pour les budgets serrés."
              },
              {
                title: "Lettres découpées relief",
                description: "Lettres en relief fixées sur un panneau support. Effet 3D élégant et moderne. Disponible en version lumineuse ou non."
              },
              {
                title: "Enseigne mixte",
                description: "Combinaison de caisson lumineux et lettres en relief. Design haut de gamme pour un impact visuel maximal."
              }
            ].map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all">
                <CheckCircle className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Avantages de l'enseigne drapeau
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Visibilité maximale",
                description: "Visible des deux côtés de la rue, votre enseigne attire l'attention des passants circulant dans les deux sens"
              },
              {
                title: "Gain de place",
                description: "Ne prend pas de place sur votre façade, idéal pour les petites devantures ou les façades déjà chargées"
              },
              {
                title: "Impact visuel",
                description: "Position perpendiculaire qui se démarque des enseignes parallèles classiques. Effet drapeau qui attire l'œil"
              },
              {
                title: "Réglementation favorable",
                description: "Souvent autorisée même dans les zones protégées où les enseignes parallèles sont limitées"
              },
              {
                title: "Double affichage",
                description: "Deux faces pour doubler votre message ou afficher des informations différentes de chaque côté"
              },
              {
                title: "Adaptabilité",
                description: "S'adapte à tous types de façades : pierre, béton, bois, métal. Fixation sur potence robuste"
              }
            ].map((avantage, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dimensions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Dimensions et formats
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Formats standards</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Petit format :</strong> 40 x 40 cm à 60 x 60 cm</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Format moyen :</strong> 60 x 80 cm à 80 x 100 cm</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Grand format :</strong> 100 x 120 cm et plus</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Formats sur mesure</h3>
                  <p className="text-gray-700 mb-4">
                    Nous réalisons des enseignes drapeau aux dimensions exactes de votre projet, dans toutes les formes :
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Carrée ou rectangulaire</li>
                    <li>• Ronde ou ovale</li>
                    <li>• Forme de logo découpée</li>
                    <li>• Design personnalisé</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: "Faut-il une autorisation pour installer une enseigne drapeau ?",
          answer: "Oui, l'installation d'une enseigne drapeau nécessite une déclaration préalable en mairie. Nous vous accompagnons dans toutes les démarches administratives et vérifions la conformité avec le règlement local de publicité."
        },
        {
          question: "Quelle est la distance maximale de débord sur le trottoir ?",
          answer: "La réglementation impose généralement un débord maximal de 1 mètre par rapport à la façade, et une hauteur minimale de 2,50 mètres au-dessus du sol. Ces dimensions peuvent varier selon les communes."
        },
        {
          question: "Comment est fixée l'enseigne drapeau ?",
          answer: "L'enseigne est fixée sur une potence métallique robuste, elle-même scellée dans la façade. La potence peut être droite ou en équerre selon la configuration. Nous assurons une fixation solide et durable."
        },
        {
          question: "Peut-on avoir des visuels différents sur chaque face ?",
          answer: "Oui, chaque face peut afficher un visuel différent. C'est l'occasion d'adapter votre message selon le sens de circulation ou de communiquer sur deux produits/services différents."
        },
        {
          question: "Quelle est la durée de vie d'une enseigne drapeau lumineuse ?",
          answer: "Une enseigne drapeau bien entretenue dure 10 à 15 ans. Les LED ont une durée de vie de 50 000 heures (plus de 10 ans en fonctionnement continu). Seuls les visuels imprimés peuvent nécessiter un remplacement après 5-7 ans en extérieur."
        }
      ]} />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Besoin d'une enseigne drapeau ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Conception, fabrication et installation par nos équipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-bold">
                <Phone className="mr-2 w-5 h-5" />
                03 88 044 534
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-black border-2 border-black font-bold">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnseigneDrapeau

