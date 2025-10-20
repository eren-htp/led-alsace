import { Button } from '@/components/ui/button.jsx'
import { Star, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { getReviewSchema } from '../utils/structuredData.js'
import CounterAnimation from '../components/CounterAnimation'

// Import des logos clients
import logoHBToiture from '../assets/logos-clients/hb-toiture.webp'
import logoKool from '../assets/logos-clients/kool.webp'
import logoLeFoch from '../assets/logos-clients/le-foch.webp'
import logoSNCF from '../assets/logos-clients/sncf.webp'
import logoSelectHabitat from '../assets/logos-clients/select-habitat.webp'
import logoProControle from '../assets/logos-clients/procontrole.webp'
import logoDivino from '../assets/logos-clients/divino.webp'
import logoPremiumCars from '../assets/logos-clients/premium-cars.webp'
import logoAubade from '../assets/logos-clients/aubade.webp'
import logoPlanetLunch from '../assets/logos-clients/planet-lunch.webp'
import logoPeugeotSaverne from '../assets/logos-clients/peugeot-saverne.webp'
import logoMucHabitat from '../assets/logos-clients/muc-habitat.webp'
import logoMGEN from '../assets/logos-clients/mgen.webp'
import logoPinParasol from '../assets/logos-clients/le-pin-parasol.webp'
import logoConfidentiel from '../assets/logos-clients/le-confidentiel.webp'
import logoLabelDent from '../assets/logos-clients/label-dent.webp'
import logoSofitel from '../assets/logos-clients/sofitel.webp'
import logoHoneyRoom from '../assets/logos-clients/honey-room.webp'
import logoHLine from '../assets/logos-clients/h-line.webp'
import logoGoia from '../assets/logos-clients/goia.webp'
import logoGaziantep from '../assets/logos-clients/gaziantep.webp'
import logoGarageMaylaender from '../assets/logos-clients/garage-maylaender.webp'
import logoGarageLink from '../assets/logos-clients/garage-link.webp'
import logoFrancesca from '../assets/logos-clients/francesca.webp'
import logoFinay from '../assets/logos-clients/finay.webp'
import logoEtandex from '../assets/logos-clients/etandex.webp'
import logoElsassViande from '../assets/logos-clients/elsass-viande.webp'

function NosClients() {
  const navigate = useNavigate()

  const testimonials = [
    {
      name: "Responsable Achat",
      company: "E. Leclerc",
      text: "Nous avons fait appel à LED Alsace pour le remplacement de nos enseignes lumineuses extérieures. Le résultat est impeccable : visibilité parfaite, finitions soignées, et une installation rapide malgré les contraintes techniques de notre site. Mention spéciale à l'équipe pour son professionnalisme et sa capacité à gérer un projet de cette ampleur dans les délais. Nos clients nous repèrent de loin désormais, même de nuit.",
      rating: 5
    },
    {
      name: "Responsable RH",
      company: "KS Groupe",
      text: "Nous cherchions un partenaire réactif et fiable pour floquer nos tenues professionnelles à l'image de notre groupe. LED Alsace a su répondre à nos attentes avec une qualité d'impression irréprochable et une tenue dans le temps qui résiste à nos conditions de travail exigeantes. Livraison rapide, conseils personnalisés et service client au top : nous recommandons vivement.",
      rating: 5
    },
    {
      name: "Chef d'entreprise",
      company: "Finay",
      text: "Besoin urgent de panneaux pour plusieurs chantiers en cours, LED Alsace a répondu présent. Commande traitée en 48h, visuels conformes, impression nette et matériaux résistants. Le rapport qualité-prix est excellent. C'est rassurant de pouvoir compter sur un prestataire local aussi fiable pour nos besoins en signalétique.",
      rating: 5
    },
    {
      name: "Responsable Marketing",
      company: "France Solar",
      text: "Notre flotte de véhicules avait besoin d'un marquage visible, moderne et cohérent avec notre identité. LED Alsace a su transformer nos utilitaires en véritables supports de communication. Le rendu est dynamique, professionnel et attire clairement l'attention. Installation rapide et finitions impeccables, même sur les surfaces complexes. Une très belle collaboration.",
      rating: 5
    },
    {
      name: "Ivana Djokic",
      company: "Cliente",
      text: "Je recommande vivement cette entreprise pour la réalisation des enseignes professionnelles! L'équipe à l'écoute, avec les bons conseils, et le résultat final parfaitement adapté à nos besoins. La pose rapide, propre et dans les délais annoncés. Merci!",
      rating: 5
    },
    {
      name: "Kevin Schutz",
      company: "Client",
      text: "Société à l'écoute du client. Très professionnel et très qualitatif. Je ne regrette pas d'avoir choisis Led Alsace pour notre collaboration. N'hésitez pas à les contacter ils sont diversifiés. Stickers, enseignes, adhésifs personnalisé et bien d'autres choses.",
      rating: 5
    },
    {
      name: "Centre Kalem",
      company: "Centre de formation",
      text: "J'ai eu affaire plusieurs prestations j'ai toujours été ravi du résultat, une équipe formidable à l'écoute. Travail rapide, efficace surtout de qualité ! Je recommande Led Alsace. Fière de notre enseigne et des créations publicitaires réalisés par LED Alsace.",
      rating: 5
    },
    {
      name: "Mustafa Raman",
      company: "Client",
      text: "Led Alsace, une équipe de professionnels à l'écoute des besoins et attentes de leurs clients. Jamais déçu au niveau de la réalisation et du travail. Et au niveau des devis aucune surprise. Vraiment je vous conseille, si vous voulez sortir du lot aussi bien par l'enseigne, l'habillage des vitrines, la tenue des salariés par le flocage des tee-shirts, blousons, blouses. C'est vraiment l'entreprise qu'il faut pour sa visibilité.",
      rating: 5
    }
  ]

  const clients = [
    { name: "HB Toiture", sector: "Couverture et zinguerie", logo: logoHBToiture, alt: "Logo HB Toiture - Client enseigne LED couverture zinguerie Alsace" },
    { name: "Kool", sector: "Commerce", logo: logoKool, alt: "Logo Kool - Client enseigne LED commerce Alsace" },
    { name: "Le Foch", sector: "Restaurant", logo: logoLeFoch, alt: "Logo Le Foch Restaurant - Client enseigne LED restaurant Strasbourg" },
    { name: "SNCF", sector: "Transport ferroviaire", logo: logoSNCF, alt: "Logo SNCF - Client signalétique transport ferroviaire Alsace" },
    { name: "Select Habitat", sector: "Immobilier", logo: logoSelectHabitat, alt: "Logo Select Habitat - Client enseigne LED immobilier Alsace" },
    { name: "ProControle", sector: "Contrôle technique", logo: logoProControle, alt: "Logo ProControle - Client enseigne LED contrôle technique Alsace" },
    { name: "Divino", sector: "Restaurant", logo: logoDivino, alt: "Logo Divino - Client enseigne LED restaurant Alsace" },
    { name: "Premium Cars", sector: "Garage automobile", logo: logoPremiumCars, alt: "Logo Premium Cars - Client enseigne LED garage automobile Alsace" },
    { name: "Aubade", sector: "Salle de bains", logo: logoAubade, alt: "Logo Aubade - Client signalétique salle de bains Alsace" },
    { name: "Planet Lunch", sector: "Restauration", logo: logoPlanetLunch, alt: "Logo Planet Lunch - Client enseigne LED restauration Alsace" },
    { name: "Peugeot Saverne", sector: "Concessionnaire", logo: logoPeugeotSaverne, alt: "Logo Peugeot Saverne - Client enseigne LED concessionnaire Alsace" },
    { name: "Muc Habitat", sector: "Construction", logo: logoMucHabitat, alt: "Logo Muc Habitat - Client signalétique construction Alsace" },
    { name: "MGEN", sector: "Mutuelle", logo: logoMGEN, alt: "Logo MGEN - Client signalétique mutuelle Alsace" },
    { name: "Le Pin Parasol", sector: "Restaurant", logo: logoPinParasol, alt: "Logo Le Pin Parasol - Client enseigne LED restaurant Alsace" },
    { name: "Le Confidentiel", sector: "Restaurant", logo: logoConfidentiel, alt: "Logo Le Confidentiel - Client enseigne LED restaurant Strasbourg" },
    { name: "Label Dent", sector: "Dentiste", logo: logoLabelDent, alt: "Logo Label Dent - Client enseigne LED dentiste Alsace" },
    { name: "Le Sofitel", sector: "Hôtel", logo: logoSofitel, alt: "Logo Sofitel - Client enseigne LED hôtel Strasbourg" },
    { name: "Honey Room", sector: "Commerce", logo: logoHoneyRoom, alt: "Logo Honey Room - Client enseigne LED commerce Alsace" },
    { name: "H-Line Automobiles", sector: "Garage", logo: logoHLine, alt: "Logo H-Line Automobiles - Client enseigne LED garage Alsace" },
    { name: "Goia", sector: "Restaurant", logo: logoGoia, alt: "Logo Goia - Client enseigne LED restaurant Alsace" },
    { name: "Gaziantep", sector: "Restaurant", logo: logoGaziantep, alt: "Logo Gaziantep - Client enseigne LED restaurant Alsace" },
    { name: "Garage Maylaender", sector: "Carrosserie", logo: logoGarageMaylaender, alt: "Logo Garage Maylaender - Client enseigne LED carrosserie Alsace" },
    { name: "Garage Link", sector: "Automobiles", logo: logoGarageLink, alt: "Logo Garage Link - Client enseigne LED automobiles Alsace" },
    { name: "Francesca", sector: "Restaurant italien", logo: logoFrancesca, alt: "Logo Francesca - Client enseigne LED restaurant italien Alsace" },
    { name: "Finay", sector: "Commerce", logo: logoFinay, alt: "Logo Finay - Client signalétique commerce Alsace" },
    { name: "Etandex", sector: "Bâtiment", logo: logoEtandex, alt: "Logo Etandex - Client signalétique bâtiment Alsace" },
    { name: "Elsass Viande", sector: "Boucherie", logo: logoElsassViande, alt: "Logo Elsass Viande - Client enseigne LED boucherie Alsace" }
  ]

  // Préparer les données des avis pour le schema
  const reviewsData = testimonials.map(t => ({
    name: t.name,
    company: t.company,
    text: t.text,
    rating: t.rating
  }))

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Nos Clients"
        description="Ils nous font confiance : E. Leclerc, SNCF, Citroën, Renault, Métro, Sofitel... Découvrez les témoignages de nos clients satisfaits en Alsace et leurs avis sur nos enseignes LED."
        keywords="clients LED Alsace, témoignages, avis clients, références, E. Leclerc, SNCF, satisfaction client"
        canonicalUrl="https://www.ledalsace.com/nos-clients"
        structuredData={getReviewSchema(reviewsData)}
      />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">Nos Clients</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ils nous font{' '}
              <span className="text-yellow-400">confiance</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Plus de 2115 entreprises alsaciennes nous ont fait confiance depuis 2014
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-led-dark mb-2">
                <CounterAnimation end={1120} prefix="+" />
              </div>
              <div className="text-led-dark/80 font-semibold">Enseignes Réalisées</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-led-dark mb-2">
                <CounterAnimation end={98} suffix="%" />
              </div>
              <div className="text-led-dark/80 font-semibold">Taux de Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-led-dark mb-2">
                <CounterAnimation end={85} suffix="%" />
              </div>
              <div className="text-led-dark/80 font-semibold">Clients Fidèles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-led-dark mb-2">
                <CounterAnimation end={2115} prefix="+" />
              </div>
              <div className="text-led-dark/80 font-semibold">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de nos solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Références
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ils ont choisi LED Alsace pour améliorer leur visibilité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    loading="lazy" 
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-led-dark mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Faites confiance à LED Alsace pour votre projet
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-led-dark hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default NosClients

