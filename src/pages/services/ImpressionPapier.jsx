import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, FileText, Printer, Star, Package } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import impressionPapier from '../../assets/Impressionpapier.webp'
import impressionPapierImg from '../../assets/services/impressionpapier.webp'

import servicesSEOConfig from '../../data/servicesSEO.js'
function ImpressionPapier() {
  // Configuration SEO
  const seoData = servicesSEOConfig.impressionPapier
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()

  const produits = [
    { icon: FileText, title: "Flyers & Dépliants", description: "De A6 à A4, pliage 2 ou 3 volets" },
    { icon: FileText, title: "Cartes de visite", description: "Grammages de 250g à 400g, finitions premium" },
    { icon: FileText, title: "Affiches", description: "Formats A4 à A0, papier mat ou brillant" },
    { icon: FileText, title: "Brochures & Catalogues", description: "Reliure agrafée ou dos carré collé" },
    { icon: FileText, title: "Papeterie commerciale", description: "Têtes de lettre, enveloppes, blocs-notes" },
    { icon: FileText, title: "Menus & Cartes", description: "Restaurants, bars, food trucks" }
  ]

  const finitions = [
    "Pelliculage mat, brillant ou soft-touch",
    "Vernis sélectif UV",
    "Dorure à chaud",
    "Gaufrage et embossage",
    "Découpe à la forme",
    "Reliure et façonnage"
  ]

  const heroImages = [impressionPapierImg, impressionPapier]

  return (
    <div className="min-h-screen">
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
        title="Impression Papier Haute Qualité"
        subtitle="Flyers, cartes de visite, brochures... Tous vos supports imprimés avec finitions premium."
      />

      {/* Produits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nos produits d'impression</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produits.map((produit, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center mb-4">
                  <produit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{produit.title}</h3>
                <p className="text-gray-600">{produit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finitions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Finitions premium disponibles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {finitions.map((finition, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{finition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grammages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Grammages disponibles</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { range: "90-120g", type: "Papier fin", usage: "Têtes de lettre, notices" },
              { range: "135-170g", type: "Papier standard", usage: "Flyers, affiches" },
              { range: "250-400g", type: "Papier rigide", usage: "Cartes de visite, menus" }
            ].map((gram, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:border-yellow-400 transition-all">
                <div className="text-3xl font-bold text-yellow-500 mb-2">{gram.range}</div>
                <h3 className="text-xl font-bold mb-2">{gram.type}</h3>
                <p className="text-gray-600">{gram.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Pourquoi choisir LED Alsace ?</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { icon: Printer, title: "Petites et grandes séries", description: "À partir de 10 exemplaires" },
              { icon: Package, title: "Papiers écologiques", description: "Papiers recyclés et certifiés FSC" },
              { icon: Star, title: "Service de création", description: "Studio graphique intégré" },
              { icon: Check, title: "Délais rapides", description: "2 à 4 jours, express 24-48h" }
            ].map((avantage, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center flex-shrink-0">
                  <avantage.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{avantage.title}</h3>
                  <p className="text-gray-600">{avantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ 
        title="Questions fréquentes sur l'impression papier"
        faqs={[
          {
            question: "Quels types de supports papier propose Lumineuse ALSACE pour les professionnels ?",
            answer: "Lumineuse ALSACE propose une large gamme de supports papier adaptés à tous les besoins de communication : Flyers, dépliants, brochures, Cartes de visite, Affiches (A4 à A0), Têtes de lettre et papeterie commerciale, Menus et fiches techniques, Chemises à rabats, blocs-notes, carnets. Tous nos produits sont imprimés en haute définition avec des papiers rigides ou souples, classiques ou premium (mat, brillant, recyclé, texturé...)."
          },
          {
            question: "Quelle est la différence entre un flyer, une brochure et un dépliant ?",
            answer: "Un flyer est un document simple (souvent A5 ou A6), sans pli, destiné à une diffusion rapide. Un dépliant est un document plié (2, 3 ou 4 volets), idéal pour présenter une offre ou un menu. Une brochure est un livret relié (agrafé, dos carré...), utilisé pour des contenus plus riches comme un catalogue, un dossier ou une présentation d'entreprise."
          },
          {
            question: "Quels sont les grammages de papier disponibles pour l'impression ?",
            answer: "Nous proposons des grammages de 90g à 400g, selon le type de document : Papier fin (90–120g) pour têtes de lettre ou notices, Papier standard (135–170g) pour flyers ou affiches, Papier rigide (250–400g) pour cartes de visite, couvertures, menus rigides. Nous vous conseillons sur le grammage adapté en fonction de l'usage et du rendu souhaité."
          },
          {
            question: "L'impression papier est-elle adaptée pour les petites quantités ?",
            answer: "Oui. Grâce à nos imprimantes numériques, nous pouvons produire de petites séries à partir de 10 exemplaires, tout en conservant une qualité professionnelle. Cela permet aux petites entreprises ou indépendants de tester des visuels, d'imprimer à la demande ou de personnaliser leurs documents."
          },
          {
            question: "Est-il possible d'imprimer des papiers avec vernis, pelliculage ou finitions spéciales ?",
            answer: "Oui. Nous proposons des finitions premium pour valoriser vos supports : Pelliculage mat, brillant ou soft-touch, Vernis sélectif pour faire ressortir un logo ou un visuel, Dorure à chaud, gaufrage, découpe à la forme. Ces finitions permettent de créer des supports haut de gamme, parfaits pour des salons, du haut de gamme ou des rendez-vous client stratégiques."
          }
        ]}
      />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Besoin d'impressions papier ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-yellow-500 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ImpressionPapier

