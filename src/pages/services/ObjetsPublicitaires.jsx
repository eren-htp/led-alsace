import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Check, Package, Shirt, Coffee, Briefcase, Gift, Pen, Users, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import objetsPublicitaires from '../../assets/ObjetsPublicitaire.png'

function ObjetsPublicitaires() {
  const navigate = useNavigate()

  const categories = [
    { icon: Coffee, title: "Bureau & Quotidien", items: ["Stylos", "Carnets", "Clés USB", "Mugs", "Gourdes"] },
    { icon: Briefcase, title: "Événementiel", items: ["Sacs personnalisés", "Lanyards", "Badges", "Parapluies", "Tote bags"] },
    { icon: Gift, title: "Cadeaux d'entreprise", items: ["Coffrets", "Textiles premium", "Accessoires tech", "Objets design"] },
    { icon: Users, title: "Salons & Foires", items: ["Kakémonos", "Roll-ups", "Goodies", "Échantillons", "Brochures"] }
  ]

  const avantages = [
    "Large catalogue de produits personnalisables",
    "Marquage multi-techniques (sérigraphie, gravure, broderie)",
    "Petites et grandes quantités",
    "Sourcing de produits sur demande",
    "Livraison dans toute la France",
    "Devis gratuit et conseils personnalisés"
  ]

  const heroImages = [objetsPublicitaires]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <HeroSlider 
        images={heroImages}
        title="Objets Publicitaires Personnalisés"
        subtitle="Marquez les esprits avec des goodies et cadeaux d'entreprise à votre image."
      />

      {/* Catégories */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos catégories d'objets publicitaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins de communication par l'objet
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((cat, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <cat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques de marquage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Techniques de marquage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons toutes les techniques pour personnaliser vos objets publicitaires
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sérigraphie", description: "Idéale pour grandes séries, rendu durable" },
              { title: "Tampographie", description: "Marquage précis sur objets 3D" },
              { title: "Gravure laser", description: "Finition haut de gamme, permanente" },
              { title: "Broderie", description: "Pour textiles, aspect premium" },
              { title: "Impression numérique", description: "Petites séries, visuels complexes" },
              { title: "Transfert", description: "Idéal pour textiles et surfaces planes" }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-1 text-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-yellow-600 transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pourquoi choisir LED Alsace ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Votre partenaire de confiance pour tous vos objets publicitaires
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {avantages.map((avantage, index) => (
                <div 
                  key={index} 
                  className="group flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:border-yellow-400 border border-gray-100 transition-all hover:-translate-y-1"
                >
                  <Check className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg text-gray-700">{avantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Utilisations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Occasions d'utilisation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des objets publicitaires adaptés à tous vos événements professionnels
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Salons professionnels",
              "Cadeaux clients",
              "Événements d'entreprise",
              "Campagnes marketing",
              "Anniversaires d'entreprise",
              "Lancement de produit",
              "Fidélisation client",
              "Team building"
            ].map((occasion, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-yellow-400 text-center transition-all hover:-translate-y-1"
              >
                <p className="font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {occasion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ 
        title="Questions fréquentes sur les objets publicitaires"
        faqs={[
          {
            question: "Qu'est-ce qu'un objet publicitaire et pourquoi en utiliser dans une stratégie d'entreprise ?",
            answer: "Un objet publicitaire est un support physique personnalisé (stylo, mug, sac, clé USB, textile...) portant le logo ou le message d'une entreprise. C'est un outil puissant pour fidéliser les clients, augmenter la notoriété et marquer les esprits durablement. Contrairement à une publicité éphémère, l'objet reste dans le quotidien de vos prospects, ce qui renforce la mémorisation de votre marque."
          },
          {
            question: "Quels types d'objets publicitaires propose LED ALSACE ?",
            answer: "Nous proposons un large catalogue d'objets personnalisables : Objets de bureau (stylos, blocs-notes, clés USB, calendriers), Goodies événementiels (tote-bags, badges, porte-clés), Objets pour la restauration (mugs, gourdes, sets de table), High-tech (batteries externes, supports téléphone, accessoires PC), Textile promotionnel (casquettes, t-shirts, tabliers). Tous nos produits sont personnalisables selon votre logo, couleurs, ou message."
          },
          {
            question: "Peut-on commander des objets publicitaires en petite quantité ?",
            answer: "Oui. Certains produits sont disponibles à partir de 50 ou 100 unités, ce qui convient parfaitement aux PME, associations ou événements à taille humaine. Pour les objets plus techniques ou personnalisations complexes, des minimums peuvent s'appliquer, mais nous vous guidons vers les solutions adaptées à votre budget."
          },
          {
            question: "LED ALSACE peut-elle proposer des objets publicitaires écoresponsables ?",
            answer: "Oui. Nous proposons une gamme complète d'objets publicitaires écologiques : stylos en bambou, sacs en coton bio, carnets recyclés, gourdes inox, etc. Ces objets véhiculent des valeurs positives (durabilité, responsabilité) tout en conservant leur utilité marketing."
          },
          {
            question: "Est-ce que LED ALSACE gère aussi le marquage et la personnalisation des objets ?",
            answer: "Oui. Nous nous chargeons de l'impression, gravure ou broderie selon le support. Notre studio graphique vous accompagne dans l'adaptation de votre logo ou message à chaque objet, et vous fournit un BAT (Bon à Tirer) pour validation. Nous veillons à la lisibilité, au contraste, et au respect de votre charte graphique."
          }
        ]}
      />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Projet d'objets publicitaires ?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un catalogue personnalisé et un devis gratuit
          </p>
          <Button 
            onClick={() => navigate('/contact')} 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-all"
          >
            Demander un devis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ObjetsPublicitaires

