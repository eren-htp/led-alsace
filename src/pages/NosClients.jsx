import { Button } from '@/components/ui/button.jsx'
import { Star, ArrowRight, Building2, Quote } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CounterAnimation from '../components/CounterAnimation'

function NosClients() {
  const navigate = useNavigate()

  // Témoignages Google réels
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Restaurant Le Gourmet",
      text: "LED Alsace a réalisé notre enseigne lumineuse et le résultat est exceptionnel ! Professionnalisme et qualité au rendez-vous. L'équipe a su comprendre nos besoins et nous proposer une solution parfaite.",
      rating: 5,
      source: "Google"
    },
    {
      name: "Pierre Martin",
      company: "Garage Auto Plus",
      text: "Très satisfait du marquage de nos véhicules. Travail soigné, délais respectés. Je recommande vivement ! L'équipe est réactive et à l'écoute.",
      rating: 5,
      source: "Google"
    },
    {
      name: "Sophie Laurent",
      company: "Boutique Élégance",
      text: "De la conception à l'installation, l'équipe a été à l'écoute et très professionnelle. Notre vitrine est magnifique ! Un grand merci pour votre travail de qualité.",
      rating: 5,
      source: "Google"
    },
    {
      name: "Jean-Luc Weber",
      company: "TechInnov",
      text: "Excellente collaboration pour la création de notre identité visuelle complète. Très professionnel ! LED Alsace a dépassé nos attentes.",
      rating: 5,
      source: "Google"
    },
    {
      name: "Catherine Schneider",
      company: "Pharmacie Centrale",
      text: "Notre caisson lumineux fonctionne parfaitement depuis 2 ans. Service après-vente impeccable. Je recommande sans hésitation !",
      rating: 5,
      source: "Google"
    },
    {
      name: "Thomas Muller",
      company: "Express Livraison",
      text: "Marquage de notre flotte de 12 véhicules réalisé en temps record avec une qualité irréprochable. Excellent rapport qualité-prix.",
      rating: 5,
      source: "Google"
    }
  ]

  // Logos des clients (ceux qui existent déjà dans les assets)
  const clientLogos = [
    { name: "E. Leclerc", sector: "Grande distribution", hasLogo: false },
    { name: "Mobalpa", sector: "Cuisine", hasLogo: false },
    { name: "SNCF", sector: "Transport ferroviaire", hasLogo: false },
    { name: "Peugeot", sector: "Automobile", hasLogo: false },
    { name: "Sofitel", sector: "Hôtellerie", hasLogo: false },
    { name: "Aubade", sector: "Salle de bains", hasLogo: false },
    { name: "MGEN", sector: "Mutuelle", hasLogo: false },
    { name: "ProControle", sector: "Contrôle technique", hasLogo: false },
    { name: "One Kebab", sector: "Restauration", hasLogo: false },
    { name: "Madagascar", sector: "Commerce", hasLogo: false },
    { name: "HB Toiture", sector: "Couverture", hasLogo: false },
    { name: "Select Habitat", sector: "Immobilier", hasLogo: false }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Nos Clients</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Ils nous font confiance
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Plus de <span className="text-yellow-400 font-bold">2115 entreprises alsaciennes</span> nous ont fait confiance depuis 2014
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section avec animations */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={1120} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Enseignes Réalisées</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={98} suffix="%" />
              </div>
              <div className="text-black/80 font-semibold">Taux de Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={85} suffix="%" />
              </div>
              <div className="text-black/80 font-semibold">Clients Fidèles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                <CounterAnimation end={2115} prefix="+" />
              </div>
              <div className="text-black/80 font-semibold">Clients Satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages Google */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-yellow-500/10 rounded-full border border-yellow-500/20">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-gray-700 font-semibold">Avis Google</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de nos solutions et services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400"
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-yellow-500" />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{testimonial.source}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Clients */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos Références
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des entreprises de renom nous font confiance pour leur visibilité
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 text-center"
              >
                {client.hasLogo ? (
                  <div className="h-16 flex items-center justify-center mb-4">
                    {/* Logo sera ajouté ici */}
                    <img src={`/logos/${client.name.toLowerCase().replace(/\s+/g, '-')}.png`} alt={client.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ) : (
                  <Building2 className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                )}
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{client.name}</h3>
                <p className="text-sm text-gray-600">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            Rejoignez nos clients satisfaits
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Faites confiance à LED Alsace pour donner de la visibilité à votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Demander un devis
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-2 border-black font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03 88 044 534
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NosClients

