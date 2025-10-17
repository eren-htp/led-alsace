import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Truck, Palette, Shield, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import marquageVehicule from '../../assets/Marquagevehicule.webp'
import vehicule from '../../assets/Vheicule.webp'
import marquageVehicule2 from '../../assets/MarquageVehicule2.webp'
import realisation1 from '../../assets/realisations/realisation_bollore.webp'
import realisation2 from '../../assets/realisations/realisation_saturn_renov.webp'
import realisation3 from '../../assets/realisations/realisation_dard.webp'
import realisation4 from '../../assets/realisations/realisation_fubat.webp'
import realisation5 from '../../assets/realisations/realisation_mjr.webp'

function MarquageVehicule() {
  const navigate = useNavigate()

  const realisations = [
    { image: realisation1, title: "Bolloré", description: "Covering complet semi-remorque" },
    { image: realisation2, title: "Saturn Rénovation", description: "Marquage utilitaire professionnel" },
    { image: realisation3, title: "Dard des Villes", description: "Flocage véhicule utilitaire" },
    { image: realisation4, title: "Fubat", description: "Marquage flotte véhicules" },
    { image: realisation5, title: "MJR Pièces Auto", description: "Enseigne et marquage garage" }
  ]

  const services = [
    { title: "Marquage simple", description: "Logo et coordonnées de votre entreprise sur vos véhicules" },
    { title: "Covering partiel", description: "Habillage d'une partie du véhicule avec votre identité visuelle" },
    { title: "Covering complet", description: "Transformation totale de votre véhicule en support publicitaire" },
    { title: "Flocage véhicules", description: "Marquage adhésif résistant pour tous types de véhicules" },
    { title: "Lettrage professionnel", description: "Textes et logos découpés en vinyle haute qualité" },
    { title: "Flotte automobile", description: "Marquage uniforme de l'ensemble de votre parc automobile" }
  ]

  const avantages = [
    { icon: Truck, title: "Tous véhicules", description: "De la voiture au semi-remorque, nous équipons tous types de véhicules" },
    { icon: Palette, title: "Personnalisation", description: "Design sur mesure adapté à votre charte graphique" },
    { icon: Shield, title: "Durabilité", description: "Adhésifs résistants aux UV et intempéries, garantis plusieurs années" },
    { icon: Zap, title: "Pose rapide", description: "Installation professionnelle sans immobilisation prolongée" }
  ]

  const vehicules = [
    "Voitures de société",
    "Utilitaires légers",
    "Camionnettes",
    "Poids lourds",
    "Semi-remorques",
    "Véhicules frigorifiques",
    "Bus et autocars",
    "Véhicules de chantier"
  ]

  const heroImages = [marquageVehicule2, marquageVehicule, vehicule]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <HeroSlider 
        images={heroImages}
        title="Marquage Véhicule Professionnel"
        subtitle="Transformez vos véhicules en supports publicitaires mobiles avec notre marquage adhésif haute qualité."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Des solutions adaptées à tous vos besoins</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-yellow-500 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Types de véhicules</h2>
                <p className="text-lg text-gray-600 mb-8">Nous intervenons sur tous types de véhicules professionnels</p>
                <div className="grid grid-cols-2 gap-4">
                  {vehicules.map((vehicule, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{vehicule}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {avantages.map((avantage, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                    <avantage.icon className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{avantage.title}</h3>
                    <p className="text-gray-600 text-sm">{avantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez nos marquages véhicules</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {realisations.map((realisation, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={realisation.image} alt={realisation.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{realisation.title}</h3>
                  <p className="text-gray-600">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Transformez vos véhicules en supports publicitaires</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit et personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <FAQ 
        title="Questions fréquentes sur le marquage véhicule"
        faqs={[
          {
            question: "En quoi consiste le marquage véhicule pour les entreprises ?",
            answer: "Le marquage véhicule consiste à appliquer des visuels (logo, coordonnées, slogans, visuels graphiques) sur une voiture, un utilitaire ou une flotte de véhicules. C'est un outil de communication mobile très efficace : chaque déplacement devient une opportunité de visibilité locale. C'est aussi un moyen de renforcer votre image de marque de façon professionnelle et cohérente."
          },
          {
            question: "Quels types de marquage véhicule propose LED ALSACE ?",
            answer: "LED ALSACE propose plusieurs formules selon vos objectifs : Lettrage simple (logo, téléphone, site web, adhésif découpé), Semi-covering (design couvrant partiellement le véhicule, souvent sur les flancs et l'arrière), Total covering (recouvrement complet avec un visuel impactant), et Magnétique amovible (pour un marquage temporaire et repositionnable). Chaque projet est conçu sur-mesure pour s'adapter à votre véhicule et votre image."
          },
          {
            question: "Quelle est la différence entre lettrage adhésif et covering ?",
            answer: "Le lettrage adhésif consiste à coller des éléments découpés (lettres, logos) directement sur la carrosserie, souvent de manière discrète et ciblée. Le covering, lui, est un habillage graphique plus large, qui recouvre tout ou partie du véhicule avec des impressions grand format. Il est idéal pour attirer l'œil et transmettre un message fort."
          },
          {
            question: "Est-ce que le marquage véhicule est durable dans le temps ?",
            answer: "Oui. LED ALSACE utilise des vinyles professionnels (Avery, 3M, Mactac) conçus pour résister aux UV, aux intempéries, au lavage et aux variations de température. La durabilité moyenne est de 5 à 7 ans, selon le type d'adhésif et l'exposition. Un entretien adapté permet de prolonger encore cette durée."
          },
          {
            question: "Est-ce que le marquage véhicule peut s'enlever sans abîmer la peinture ?",
            answer: "Oui. Un marquage posé dans les règles de l'art avec des vinyles de qualité s'enlève proprement, sans laisser de traces ni altérer la peinture d'origine. Cela permet d'actualiser le design ou de remettre un véhicule en configuration neutre lors d'une revente ou d'un changement d'activité."
          },
          {
            question: "LED ALSACE peut-elle intervenir sur tout type de véhicule ?",
            answer: "Absolument. Nous réalisons du marquage sur : Voitures de société (berlines, citadines), Utilitaires (L1, L2, L3, H1, H2…), Camions et poids lourds, Remorques, food trucks, véhicules de chantier. Chaque gabarit est pris en compte pour optimiser la surface visible et l'impact visuel."
          },
          {
            question: "Faut-il prévoir une homologation ou déclaration pour un marquage véhicule ?",
            answer: "Non, le marquage véhicule est considéré comme une publicité mobile et ne nécessite pas d'autorisation spécifique. En revanche, il doit rester conforme au Code de la route (pas de gêne à la visibilité, pas de message interdit). LED ALSACE respecte ces contraintes et vous conseille en cas de doute."
          },
          {
            question: "Quels sont les avantages du marquage véhicule pour une entreprise locale ?",
            answer: "C'est l'un des meilleurs retours sur investissement en communication locale. Chaque trajet ou stationnement génère des vues gratuites. Cela renforce votre notoriété dans votre zone de chalandise, professionnalise votre image, et facilite la mémorisation de vos coordonnées. Un véhicule marqué peut générer des dizaines de milliers d'impressions par mois."
          },
          {
            question: "Quels sont les délais pour la pose d'un marquage véhicule ?",
            answer: "Après validation du visuel, les délais de production sont en moyenne de 5 à 7 jours ouvrés. La pose en elle-même prend généralement une demi-journée à une journée complète, selon la complexité (lettrage simple vs total covering). Nous vous accueillons dans notre atelier ou intervenons sur site selon les besoins."
          },
          {
            question: "Où intervient LED ALSACE pour du marquage véhicule dans le Grand Est ?",
            answer: "Nous intervenons principalement en Alsace (Strasbourg, Colmar, Mulhouse), mais aussi dans toute la région Grand Est. Nos locaux sont situés à proximité de Strasbourg, et nous accueillons les professionnels du secteur pour la pose. Pour les flottes ou interventions groupées, un déplacement est possible sur site."
          }
        ]}
      />
    </div>
  )
}

export default MarquageVehicule
