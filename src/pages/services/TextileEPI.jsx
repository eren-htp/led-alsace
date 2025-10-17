import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Shirt, Award, Users, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import vesteSNCF from '../../assets/VesteSNCF.webp'
import vesteSNCFdos from '../../assets/VesteSNCFdos.webp'
import teeshirt from '../../assets/teeshirt.webp'
import vestesansmanche from '../../assets/vestesansmanche.webp'
import polo from '../../assets/Polo.webp'
import pull from '../../assets/pull.webp'
import veste from '../../assets/veste.webp'

import servicesSEOConfig from '../../data/servicesSEO.js'
function TextileEPI() {
  // Configuration SEO
  const seoData = servicesSEOConfig.textileEPI
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()

  const services = [
    { title: "Flocage textile", description: "Personnalisation de vêtements par transfert thermique" },
    { title: "Broderie", description: "Marquage haut de gamme pour un rendu premium" },
    { title: "Sérigraphie", description: "Impression textile pour grandes séries" },
    { title: "Vêtements de travail", description: "Fourniture et personnalisation de tenues professionnelles" },
    { title: "E.P.I.", description: "Équipements de protection individuelle personnalisés" },
    { title: "Textiles promotionnels", description: "T-shirts, polos, sweats pour événements" }
  ]

  const produits = [
    "T-shirts et polos",
    "Sweats et vestes",
    "Vêtements de travail",
    "Gilets haute visibilité",
    "Blouses professionnelles",
    "Casquettes et bonnets",
    "Sacs et accessoires",
    "Textiles techniques"
  ]

  const avantages = [
    { icon: Shirt, title: "Large catalogue", description: "Des centaines de références textiles disponibles" },
    { icon: Award, title: "Qualité durable", description: "Marquages résistants aux lavages répétés" },
    { icon: Users, title: "Petites & grandes séries", description: "De 1 à plusieurs milliers de pièces" },
    { icon: Sparkles, title: "Finitions soignées", description: "Rendu professionnel garanti" }
  ]

  const heroImages = [vesteSNCF, vesteSNCFdos, teeshirt, vestesansmanche, polo, pull, veste]

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
        title="Textile & E.P.I. Personnalisés"
        subtitle="Marquage textile et vente de vêtements de travail, E.P.I. Personnalisez vos textiles professionnels avec logo et coordonnées."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solutions complètes de marquage textile</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Produits disponibles</h2>
                <p className="text-lg text-gray-600 mb-8">Large gamme de textiles personnalisables</p>
                <div className="grid grid-cols-2 gap-4">
                  {produits.map((produit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{produit}</span>
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

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Besoin de textiles personnalisés ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis gratuit</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <FAQ 
        title="Questions fréquentes sur le marquage textile"
        faqs={[
          {
            question: "Qu'est-ce que le marquage textile et à quoi sert-il pour une entreprise ?",
            answer: "Le marquage textile consiste à personnaliser des vêtements (t-shirts, polos, vestes, etc.) avec un logo, un message ou une image. Pour une entreprise, c'est un levier puissant d'image de marque et de cohésion d'équipe. Il permet d'identifier facilement le personnel, de professionnaliser l'apparence de l'entreprise et de renforcer sa visibilité lors d'événements ou sur les lieux de vente."
          },
          {
            question: "Quelles sont les différentes techniques de marquage textile proposées par LED ALSACE ?",
            answer: "LED ALSACE propose plusieurs techniques adaptées aux usages professionnels : Flocage (transfert DTF ou flex) idéal pour les petites séries ou les designs complexes, Broderie pour un rendu haut de gamme et très durable, Sérigraphie économique pour les grandes quantités, et Sublimation adaptée aux textiles clairs en polyester. Chaque méthode est choisie selon le type de textile, la quantité et la complexité du visuel."
          },
          {
            question: "Quelle est la différence entre flocage et broderie textile ?",
            answer: "Le flocage consiste à transférer un visuel imprimé ou découpé à chaud sur le textile. C'est rapide, économique et très flexible. La broderie, quant à elle, est réalisée par des machines à fil et donne un rendu en relief, plus prestigieux et résistant au lavage. Elle est particulièrement adaptée aux vêtements professionnels comme les polos, chemises, vestes ou casquettes."
          },
          {
            question: "Est-ce que le marquage textile résiste bien aux lavages fréquents ?",
            answer: "Oui, à condition de respecter les recommandations d'entretien. Un marquage textile de qualité (comme celui réalisé chez LED ALSACE) peut résister à des dizaines de lavages. Pour garantir la durabilité, il faut laver à l'envers, éviter les températures supérieures à 40°C, ne pas utiliser de javel ou adoucissant, et repasser à basse température sans contact direct avec le motif."
          },
          {
            question: "Quel est le minimum de pièces à commander pour un marquage textile personnalisé ?",
            answer: "LED ALSACE peut réaliser du marquage textile à partir d'une seule pièce, notamment en flocage ou broderie. Pour les grandes séries (ex. : 100 t-shirts sérigraphiés), les tarifs sont dégressifs. Nous conseillons toujours la méthode la plus rentable selon la quantité, le textile et le type de marquage souhaité."
          },
          {
            question: "Puis-je fournir mes propres vêtements pour le marquage textile ?",
            answer: "Oui, nous acceptons les textiles fournis par le client, à condition qu'ils soient compatibles avec les techniques de marquage choisies. Un contrôle qualité préalable est effectué. LED ALSACE peut aussi vous proposer une large gamme de textiles professionnels (t-shirts, polos, sweats, vêtements de travail, etc.) à des tarifs avantageux."
          },
          {
            question: "Est-ce possible de faire du marquage textile pour une entreprise multi-sites dans le Grand Est ?",
            answer: "Absolument. Nous avons l'habitude de gérer des commandes pour des réseaux de points de vente, des franchises ou des équipes réparties sur plusieurs sites. Nous pouvons organiser la production par lots, gérer la logistique multi-adresse et conserver les visuels pour des réassorts rapides."
          },
          {
            question: "Est-ce que LED ALSACE peut concevoir le visuel pour le marquage textile ?",
            answer: "Oui. Notre studio graphique peut créer ou adapter votre logo, texte ou visuel pour garantir un rendu optimal sur textile. Nous fournissons un BAT (Bon à Tirer) pour validation avant production. Nous optimisons aussi la taille, les couleurs et les contrastes selon le support et la technique choisie."
          },
          {
            question: "Quels sont les délais pour une commande de marquage textile ?",
            answer: "Les délais varient selon la quantité, la technique et la disponibilité des textiles. En moyenne : Petite série (1 à 20 pièces) : 5 à 8 jours ouvrés, Moyenne série (20 à 100 pièces) : 8 à 12 jours ouvrés, Grande série : à partir de 2 semaines. Nous proposons également un service express sur demande."
          },
          {
            question: "LED ALSACE propose-t-elle la livraison dans toute la région Grand Est ?",
            answer: "Oui, nous livrons dans toute l'Alsace, la Lorraine et la Champagne-Ardenne. Pour les professionnels, nous proposons une livraison suivie ou un retrait direct à notre atelier. Nos partenaires de transport assurent des délais fiables même pour les commandes volumineuses."
          }
        ]}
      />
    </div>
  )
}

export default TextileEPI
