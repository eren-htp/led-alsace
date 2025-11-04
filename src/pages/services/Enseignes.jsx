import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Lightbulb, Clock, Award, Wrench, MapPin, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import LettresBoitierSlider from '../../components/LettresBoitierSlider'
import realisation1 from '../../assets/realisations/realisation_prointer.webp'
import realisation2 from '../../assets/realisations/realisation_red_door.webp'
import realisation3 from '../../assets/realisations/realisation_saturn.webp'
import realisation4 from '../../assets/realisations/realisation_saveurs.webp'
import realisation5 from '../../assets/realisations/realisation_one_kebab.webp'
import realisation6 from '../../assets/realisations/realisation_pharmacie.webp'
import realisation7 from '../../assets/realisations/realisation_love.webp'
import realisation8 from '../../assets/realisations/realisation_perkko.webp'
import enseigneDibond from '../../assets/EnseigneenDibond.JPG'
import totemLumineux from '../../assets/Totem.JPG'
import enseigneDoubleface from '../../assets/Enseignedoubleface.webp'
import neonLED from '../../assets/NeonLED.JPG'
import enseigneLumineuse1 from '../../assets/Enseignelumineuse.JPG'
import enseigneLumineuse2 from '../../assets/Enseignelumineuse2.webp'
import enseigneLumineuse3 from '../../assets/Enseignelumineuse3.JPG'
import enseigneNonLumineuse1 from '../../assets/Enseignenonlumineuse.webp'
import enseigneNonLumineuse2 from '../../assets/Eseignenonlumineuse2.webp'
import enseigneNonLumineuse3 from '../../assets/Enseignenonlumineuse3.JPG'

import servicesSEOConfig from '../../data/servicesSEO.js'
function Enseignes() {
  // Configuration SEO
  const seoData = servicesSEOConfig.enseignes
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()

  const realisations = [
    { image: realisation1, title: "ProControle", description: "Enseigne lumineuse contrôle technique" },
    { image: realisation2, title: "The Little Red Door", description: "Enseigne restaurant moderne" },
    { image: realisation3, title: "Saturn Event", description: "Logo lumineux en relief" },
    { image: realisation4, title: "Saveurs & Saisons", description: "Enseigne restaurant traditionnel" },
    { image: realisation5, title: "One Kebab", description: "Enseigne restauration rapide" },
    { image: realisation6, title: "Pharmacie", description: "Croix de pharmacie Lumineuse" },
    { image: realisation7, title: "Love", description: "Enseigne boutique élégante" },
    { image: realisation8, title: "Perkko", description: "Enseigne commerce moderne" }
  ]

  const autresTypes = [
    { 
      title: "Enseigne en dibond", 
      description: "Panneaux en aluminium composite légers et résistants pour une installation facile",
      image: enseigneDibond
    },
    { 
      title: "Totems lumineux", 
      description: "Structures verticales imposantes pour signalétique extérieure haute visibilité",
      image: totemLumineux
    },
    { 
      title: "Enseigne drapeau double face", 
      description: "Signalétique perpendiculaire au mur, visible des deux côtés de la rue",
      image: enseigneDoubleface
    },
    { 
      title: "Caisson ajouré lumineux", 
      description: "Caisson avec découpe personnalisée et rétro-éclairage Lumineuse pour un effet unique",
      image: enseigneDoubleface
    },
    { 
      title: "Néon Lumineuse", 
      description: "Effet néon moderne avec technologie Lumineuse économique et personnalisable",
      image: neonLED,
      link: "/services/neon-lumineuse"
    },
    { 
      title: "Écrans Lumineuse grand format", 
      description: "Affichage dynamique haute définition pour communication visuelle impactante",
      image: "https://via.placeholder.com/400x300/FFD700/000000?text=Ecran+Lumineuse",
      link: "/services/ecrans-lumineuse"
    }
  ]

  const avantages = [
    { 
      icon: Lightbulb, 
      title: "Technologie Lumineuse", 
      description: "Économie d'énergie jusqu'à 80% par rapport aux enseignes traditionnelles" 
    },
    { 
      icon: Clock, 
      title: "Longévité", 
      description: "Durée de vie exceptionnelle de 50 000 heures minimum" 
    },
    { 
      icon: Award, 
      title: "Qualité premium", 
      description: "Matériaux haut de gamme résistants aux intempéries" 
    },
    { 
      icon: Wrench, 
      title: "Installation complète", 
      description: "Pose professionnelle et service après-vente inclus" 
    },
    { 
      icon: MapPin, 
      title: "Fabrication locale française", 
      description: "Toutes nos enseignes et solutions de signalétique sont fabriquées localement en Alsace, dans notre atelier situé à Ostwald, près de Strasbourg. En choisissant LED Alsace, vous soutenez un savoir-faire français et une production responsable, sans sous-traitance à l'étranger. Qualité, traçabilité et réactivité sont au cœur de notre engagement." 
    }
  ]

  const heroImages = [
    enseigneLumineuse1,
    enseigneLumineuse2,
    enseigneLumineuse3,
    enseigneNonLumineuse1,
    enseigneNonLumineuse2,
    enseigneNonLumineuse3,
    enseigneDibond,
    enseigneDoubleface,
    totemLumineux
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

      {/* Hero Slider */}
      <HeroSlider 
        images={heroImages}
        title="Enseignes Lumineuses"
        subtitle="Donnez de la visibilité à votre entreprise avec nos enseignes Lumineuse sur mesure. Fabrication française, installation professionnelle et garantie longue durée."
      />

      {/* Slider Lettres Boîtier */}
      <LettresBoitierSlider />

      {/* Autres Types d'Enseignes */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos autres types d'enseignes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de solutions d'enseignes pour tous vos besoins de communication visuelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {autresTypes.map((type, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
                onClick={() => type.link && navigate(type.link)}
                style={{ cursor: type.link ? 'pointer' : 'default' }}
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {type.link && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                      En savoir plus →
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Choisir Nos Enseignes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pourquoi choisir nos enseignes ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions d'enseignes Lumineuse de qualité supérieure, conçues et fabriquées en France
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {avantages.map((avantage, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <avantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{avantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{avantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos réalisations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos enseignes installées chez nos clients satisfaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {realisations.map((realisation, index) => (
              <div 
                key={index} 
                onClick={() => navigate('/realisations')}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={realisation.image} 
                    alt={realisation.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{realisation.title}</h3>
                  <p className="text-sm text-gray-600">{realisation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnptMC0ydi0yIDJ6bTAtMnYtMiAyem0wLTJ2LTIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-lumineuse-dark mb-6">
            Besoin d'une enseigne sur mesure ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d'experts est à votre écoute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')} 
              size="lg" 
              className="bg-lumineuse-dark hover:bg-gray-900 text-white font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
            >
              Demander un devis
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

      {/* Slider Lettres Boîtier */}
      <LettresBoitierSlider />

      <FAQ 
        title="Questions fréquentes sur les enseignes lumineuses"
        faqs={[
          {
            question: "Quels sont les avantages d'une enseigne lumineuse pour une entreprise en Alsace ou dans le Grand Est ?",
            answer: "Une enseigne lumineuse améliore considérablement la visibilité de votre entreprise, de jour comme de nuit. Dans une région comme le Grand Est, où la luminosité peut varier fortement selon les saisons, elle garantit un repérage optimal en toutes circonstances. Elle attire l'œil des passants, renforce votre image de marque et augmente naturellement le trafic client. C'est un excellent levier de notoriété locale."
          },
          {
            question: "Quelle est la différence entre une enseigne Lumineuse et une enseigne néon ?",
            answer: "Une enseigne Lumineuse utilise des diodes électroluminescentes pour diffuser la lumière, offrant une consommation énergétique très faible, une longue durée de vie et une grande résistance. Le néon, plus traditionnel, propose une lumière plus chaleureuse mais consomme davantage d'énergie, nécessite plus d'entretien et est plus fragile. Pour un usage professionnel, les LEDs sont aujourd'hui privilégiées."
          },
          {
            question: "Quelle est la durée de vie moyenne d'une enseigne lumineuse Lumineuse ?",
            answer: "Une enseigne Lumineuse de qualité professionnelle peut durer entre 30 000 et 50 000 heures d'utilisation, soit environ 8 à 10 ans en usage quotidien. Sa longévité dépend de plusieurs facteurs : qualité des composants, environnement (intempéries, pollution), maintenance, et installation conforme aux normes électriques."
          },
          {
            question: "Quelles réglementations s'appliquent aux enseignes lumineuses en Alsace ?",
            answer: "Dans le Grand Est, les enseignes lumineuses sont soumises au Règlement Local de Publicité (RLP) de chaque commune. Il précise les dimensions, la luminosité, les horaires d'allumage et l'emplacement autorisé. À Strasbourg par exemple, l'éclairage est limité à certaines plages horaires pour limiter la pollution visuelle. Il est essentiel de consulter votre mairie avant toute installation."
          },
          {
            question: "Est-ce qu'une enseigne lumineuse consomme beaucoup d'électricité ?",
            answer: "Non, pas si elle est équipée de modules Lumineuse récents. Une enseigne lumineuse bien conçue consomme en moyenne 80 % d'électricité en moins qu'un éclairage au néon. Elle est donc écologique et économique, notamment si vous optez pour une gestion intelligente de l'allumage (horloge, capteur crépusculaire, etc.)."
          },
          {
            question: "Combien coûte une enseigne lumineuse sur-mesure pour un commerce ?",
            answer: "Le tarif varie selon la taille, le type d'éclairage (face lumineuse, lettres boîtier, rétro-éclairage…), les matériaux (aluminium, Dibond, PMMA) et les options (détecteurs, variateurs). En général, il faut compter entre 900 € et 5 000 € HT pour une enseigne lumineuse professionnelle, pose comprise. Un devis personnalisé est indispensable."
          },
          {
            question: "LED ALSACE peut-elle se charger des démarches administratives pour mon enseigne lumineuse ?",
            answer: "Oui. Chez LED ALSACE, nous vous accompagnons dans la constitution du dossier administratif (CERFA, plan de masse, visuel en situation, etc.) et la demande d'autorisation auprès de la mairie. Nous connaissons bien les particularités des RLP du Grand Est et facilitons vos démarches."
          },
          {
            question: "Est-il possible d'installer une enseigne lumineuse sur un bâtiment classé ou dans un secteur sauvegardé ?",
            answer: "Oui, mais cela nécessite une autorisation préalable de l'Architecte des Bâtiments de France (ABF). LED ALSACE conçoit des solutions sur-mesure qui respectent l'esthétique du bâti historique, tout en assurant une visibilité optimale. Un dossier spécifique est à prévoir, et nous vous assistons dans sa préparation."
          },
          {
            question: "Peut-on éteindre automatiquement une enseigne lumineuse la nuit ?",
            answer: "Oui, grâce à un interrupteur crépusculaire ou une horloge astronomique, votre enseigne peut s'allumer et s'éteindre automatiquement en fonction de la lumière naturelle ou d'horaires précis. Cela permet de respecter les réglementations locales tout en optimisant la consommation énergétique."
          },
          {
            question: "Quelles sont les étapes de fabrication d'une enseigne lumineuse chez LED ALSACE ?",
            answer: "Chez LED ALSACE, nous suivons un processus rigoureux : 1. Analyse de vos besoins et contraintes (PLU, RLP) 2. Création du visuel et modélisation 3D 3. Constitution du dossier mairie 4. Fabrication en atelier (châssis, modules Lumineuse, façades) 5. Installation par nos équipes agréées 6. Suivi et maintenance. Ce processus garantit un rendu professionnel, durable et conforme aux normes."
          }
        ]}
      />
    </div>
  )
}

export default Enseignes

