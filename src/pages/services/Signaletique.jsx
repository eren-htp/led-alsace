import { useState } from 'react'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Star, Package, Building2, Car, SignpostBig, AlertTriangle, Image as ImageIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import headerSignaletique from '../../assets/header-signaletique.jpg'

import servicesSEOConfig from '../../data/servicesSEO.js'
function Signaletique() {
  // Configuration SEO
  const seoData = servicesSEOConfig.signaletique
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()

  const solutions = [
    {
      icon: Building2,
      title: "Panneaux de chantier",
      description: "Panneaux robustes et personnalisés pour identifier vos chantiers. Résistants aux intempéries, ils assurent une visibilité optimale de votre entreprise sur site.",
      features: ["Personnalisation complète", "Matériaux résistants", "Installation facile", "Conformité réglementaire"]
    },
    {
      icon: Package,
      title: "Bâches",
      description: "Bâches publicitaires grand format pour événements, façades de bâtiments ou clôtures de chantier. Impression haute définition pour un impact visuel maximal.",
      features: ["Grand format", "Impression HD", "Résistance UV", "Œillets renforcés"]
    },
    {
      icon: Car,
      title: "Panneaux de parking",
      description: "Signalétique claire et durable pour organiser vos espaces de stationnement. Panneaux directionnels, réservés, handicapés et personnalisés.",
      features: ["Signalisation claire", "Matériaux durables", "Fixation solide", "Conformité normes"]
    },
    {
      icon: SignpostBig,
      title: "Totem extérieur",
      description: "Structure verticale imposante pour une visibilité maximale. Idéal pour centres commerciaux, zones d'activités et entrées d'entreprise.",
      features: ["Haute visibilité", "Structure robuste", "Éclairage Lumineuse", "Design sur mesure"]
    },
    {
      icon: AlertTriangle,
      title: "Stop trottoir",
      description: "Chevalet publicitaire mobile pour attirer l'attention des passants. Parfait pour restaurants, commerces et événements promotionnels.",
      features: ["Mobilité", "Double face", "Résistant au vent", "Changement facile"]
    },
    {
      icon: ImageIcon,
      title: "Vitrophanie",
      description: "Adhésifs pour vitres et vitrines. Créez une ambiance unique tout en communiquant sur vos produits et services.",
      features: ["Pose facile", "Repositionnable", "Sans résidu", "Effet dépoli"],
      link: "/services/vitrophanie"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        structuredData={[
          getBreadcrumbSchema(breadcrumbItems),
          getFAQSchema(faqs)
        ]}
      />
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section avec Image Fixe */}
      <section className="relative pt-20 bg-gray-100 overflow-hidden">
        <div className="relative h-[500px] md:h-[600px]">
          <img 
            src={headerSignaletique} 
            alt="Signalétique professionnelle - LED Alsace"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos solutions de signalétique</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins de communication visuelle et de signalisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
                onClick={() => solution.link && navigate(solution.link)}
                style={{ cursor: solution.link ? 'pointer' : 'default' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {solution.link && (
                    <div className="mt-6 flex items-center text-yellow-600 font-semibold">
                      En savoir plus <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Pourquoi choisir LED Alsace pour votre signalétique ?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Depuis plus de 10 ans, nous accompagnons les entreprises alsaciennes dans leurs projets de signalétique. 
                  Notre expertise locale et notre engagement qualité font de nous le partenaire idéal pour vos besoins de communication visuelle.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Fabrication locale en Alsace</h3>
                      <p className="text-gray-600">Production dans notre atelier à Ostwald, près de Strasbourg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Matériaux de qualité supérieure</h3>
                      <p className="text-gray-600">Résistants aux intempéries et durables dans le temps</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Installation professionnelle</h3>
                      <p className="text-gray-600">Pose soignée par nos équipes expertes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Personnalisation totale</h3>
                      <p className="text-gray-600">Création sur mesure selon vos besoins et votre identité</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://via.placeholder.com/600x600/1a1a1a/FFD700?text=Signalétique+Lumineuse+Alsace" 
                    alt="Signalétique LED Alsace"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400/20 rounded-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-lumineuse-dark mb-6">
            Un projet de signalétique ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Contactez-nous pour discuter de votre projet et obtenir un devis gratuit personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-lumineuse-dark hover:bg-gray-900 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              J'ai besoin de signalétique
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-lumineuse-dark border-2 border-lumineuse-dark font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-all"
              onClick={() => window.location.href = 'tel:0388044534'}
            >
              <svg className="mr-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03 88 04 45 34
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signaletique

