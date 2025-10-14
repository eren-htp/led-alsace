import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  Star, CheckCircle, Award, Clock, Users, ArrowRight, ChevronRight, MapPin, Zap
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import heroImage1 from '../assets/hero1.jpg'
import heroImage2 from '../assets/hero2.jpg'
import heroImage3 from '../assets/hero3.jpg'
import ClientsSlider from '../components/ClientsSlider.jsx'
import ModelsShowcase from '../components/ModelsShowcase.jsx'
import enseigneLedImg from '../assets/services/enseigne-led.jpg'
import signaletiqueImg from '../assets/services/signaletique.jpg'
import marquageTextileImg from '../assets/services/marquage-textile.jpg'

function Home() {
  const navigate = useNavigate()
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const heroImages = [heroImage1, heroImage2, heroImage3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const advantages = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Plus de 10 ans d'expérience",
      description: "Expertise reconnue depuis 2014 dans le domaine de l'enseigne et de la signalétique en Alsace."
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Fabrication Française",
      description: "Toutes nos enseignes et solutions de signalétique sont fabriquées localement en Alsace, dans notre atelier situé à Ostwald, près de Strasbourg. En choisissant LED Alsace, vous soutenez un savoir-faire français et une production responsable, sans sous-traitance à l'étranger. Qualité, traçabilité et réactivité sont au cœur de notre engagement."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Service complet",
      description: "De la conception à l'installation, nous gérons votre projet de A à Z avec un accompagnement personnalisé."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Réactivité",
      description: "Devis en 24h garanti ! Suivi personnalisé de votre projet et réponse rapide à toutes vos demandes. Votre satisfaction est notre priorité."
    }
  ]

  const process = [
    {
      number: "01",
      title: "Contact",
      description: "Vous nous contactez pour nous présenter votre projet d'enseigne ou de signalétique."
    },
    {
      number: "02",
      title: "Devis",
      description: "Nous établissons un devis personnalisé gratuit et sans engagement adapté à vos besoins."
    },
    {
      number: "03",
      title: "Conception",
      description: "Notre équipe crée votre enseigne sur mesure avec des matériaux de qualité professionnelle."
    },
    {
      number: "04",
      title: "Installation",
      description: "Nous installons et montons votre projet dans les règles de l'art, clé en main."
    }
  ]

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
    }
  ]

  const scrollToContact = () => {
    navigate('/contact')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">✨ Depuis 2014 en Alsace</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Donnez de l'éclat à votre entreprise avec des{' '}
              <span className="text-yellow-400">enseignes LED sur mesure</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Spécialiste en signalétique et agencement intérieur et extérieur. 
              De la conception à l'installation, nous créons des enseignes qui marquent les esprits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
                onClick={() => window.location.href = 'tel:0388044534'}
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03 88 044 534
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronRight className="w-6 h-6 text-white rotate-90" />
          </div>
        </div>
      </section>

      {/* Slider logos clients */}
      <ClientsSlider />

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir LED Alsace ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue et un service complet pour tous vos projets d'enseignes et de signalétique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-yellow-500 mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Showcase Section */}
      <ModelsShowcase />

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
              <span className="text-yellow-700 font-semibold">Nos Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Des solutions adaptées à vos besoins
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De l'enseigne LED à la signalétique complète, découvrez notre gamme de services professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Enseignes lumineuses */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={enseigneLedImg} 
                  alt="Enseignes lumineuses LED" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-block mb-2 px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold text-black">
                  SERVICE PHARE
                </div>
                <h3 className="text-2xl font-bold mb-2">Enseignes Lumineuses</h3>
                <p className="text-gray-200 mb-4">Enseignes LED sur mesure pour une visibilité maximale jour et nuit</p>
                <Button 
                  variant="link" 
                  className="text-yellow-400 hover:text-yellow-300 p-0 font-semibold"
                  onClick={() => navigate('/services/enseignes')}
                >
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Signalétique */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={signaletiqueImg} 
                  alt="Signalétique professionnelle" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-block mb-2 px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold text-black">
                  SERVICE PHARE
                </div>
                <h3 className="text-2xl font-bold mb-2">Signalétique</h3>
                <p className="text-gray-200 mb-4">Solutions complètes de signalétique intérieure et extérieure</p>
                <Button 
                  variant="link" 
                  className="text-yellow-400 hover:text-yellow-300 p-0 font-semibold"
                  onClick={() => navigate('/services/signaletique')}
                >
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Marquage Textile */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={marquageTextileImg} 
                  alt="Marquage textile et flocage" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-block mb-2 px-3 py-1 bg-yellow-500 rounded-full text-xs font-bold text-black">
                  SERVICE PHARE
                </div>
                <h3 className="text-2xl font-bold mb-2">Marquage Textile</h3>
                <p className="text-gray-200 mb-4">Flocage et personnalisation de vos textiles professionnels</p>
                <Button 
                  variant="link" 
                  className="text-yellow-400 hover:text-yellow-300 p-0 font-semibold"
                  onClick={() => navigate('/services/marquage-textile')}
                >
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={() => navigate('/services')}
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-600 hover:bg-yellow-50"
            >
              Voir tous nos services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Un processus simple et transparent en 4 étapes pour concrétiser votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl font-bold text-yellow-500/30 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-yellow-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
              <span className="text-yellow-700 font-semibold">Témoignages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow text-sm">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Prêt à donner vie à votre projet ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Demandez votre devis gratuit et sans engagement. Notre équipe vous répond rapidement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border-2 border-black font-bold text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Nous appeler
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

