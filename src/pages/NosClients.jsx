import { Button } from '@/components/ui/button.jsx'
import { Star, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
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
      name: "Marie Dubois",
      company: "Restaurant Le Gourmet",
      text: "LED Alsace a réalisé notre enseigne lumineuse et le résultat est exceptionnel ! Professionnalisme et qualité au rendez-vous.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      company: "Garage Auto Plus",
      text: "Très satisfait du marquage de nos véhicules. Travail soigné, délais respectés. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "Boutique Élégance",
      text: "De la conception à l'installation, l'équipe a été à l'écoute et très professionnelle. Notre vitrine est magnifique !",
      rating: 5
    },
    {
      name: "Jean-Luc Weber",
      company: "TechInnov",
      text: "Excellente collaboration pour la création de notre identité visuelle complète. Très professionnel !",
      rating: 5
    },
    {
      name: "Catherine Schneider",
      company: "Pharmacie Centrale",
      text: "Notre caisson lumineux fonctionne parfaitement depuis 2 ans. Service après-vente impeccable.",
      rating: 5
    },
    {
      name: "Thomas Muller",
      company: "Express Livraison",
      text: "Marquage de notre flotte de 12 véhicules réalisé en temps record avec une qualité irréprochable.",
      rating: 5
    }
  ]

  const clients = [
    { name: "HB Toiture", sector: "Couverture et zinguerie", logo: logoHBToiture },
    { name: "Kool", sector: "Commerce", logo: logoKool },
    { name: "Le Foch", sector: "Restaurant", logo: logoLeFoch },
    { name: "SNCF", sector: "Transport ferroviaire", logo: logoSNCF },
    { name: "Select Habitat", sector: "Immobilier", logo: logoSelectHabitat },
    { name: "ProControle", sector: "Contrôle technique", logo: logoProControle },
    { name: "Divino", sector: "Restaurant", logo: logoDivino },
    { name: "Premium Cars", sector: "Garage automobile", logo: logoPremiumCars },
    { name: "Aubade", sector: "Salle de bains", logo: logoAubade },
    { name: "Planet Lunch", sector: "Restauration", logo: logoPlanetLunch },
    { name: "Peugeot Saverne", sector: "Concessionnaire", logo: logoPeugeotSaverne },
    { name: "Muc Habitat", sector: "Construction", logo: logoMucHabitat },
    { name: "MGEN", sector: "Mutuelle", logo: logoMGEN },
    { name: "Le Pin Parasol", sector: "Restaurant", logo: logoPinParasol },
    { name: "Le Confidentiel", sector: "Restaurant", logo: logoConfidentiel },
    { name: "Label Dent", sector: "Dentiste", logo: logoLabelDent },
    { name: "Le Sofitel", sector: "Hôtel", logo: logoSofitel },
    { name: "Honey Room", sector: "Commerce", logo: logoHoneyRoom },
    { name: "H-Line Automobiles", sector: "Garage", logo: logoHLine },
    { name: "Goia", sector: "Restaurant", logo: logoGoia },
    { name: "Gaziantep", sector: "Restaurant", logo: logoGaziantep },
    { name: "Garage Maylaender", sector: "Carrosserie", logo: logoGarageMaylaender },
    { name: "Garage Link", sector: "Automobiles", logo: logoGarageLink },
    { name: "Francesca", sector: "Restaurant italien", logo: logoFrancesca },
    { name: "Finay", sector: "Commerce", logo: logoFinay },
    { name: "Etandex", sector: "Bâtiment", logo: logoEtandex },
    { name: "Elsass Viande", sector: "Boucherie", logo: logoElsassViande }
  ]

  return (
    <div className="min-h-screen bg-white">
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
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={1120} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Enseignes Réalisées</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={98} suffix="%" />
              </div>
              <div className="text-black/80 font-semibold">Taux de Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={85} suffix="%" />
              </div>
              <div className="text-black/80 font-semibold">Clients Fidèles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={2115} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Clients Satisfaits</div>
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
                    alt={client.name} 
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
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Faites confiance à LED Alsace pour votre projet
          </p>
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

export default NosClients

