import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Zap, Layers, Scissors, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import decoupeLaser from '../../assets/DecoupeLaser.webp'
import decoupeLaserImg from '../../assets/DecoupeLaser.webp'

import servicesSEOConfig from '../../data/servicesSEO.js'
function DecoupeLaser() {
  // Configuration SEO
  const seoData = servicesSEOConfig.decoupeLaser
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()

  const materiaux = [
    { icon: Layers, title: "Bois", types: ["Contreplaqué", "MDF", "Bois massif", "Médium"] },
    { icon: Layers, title: "Plastiques", types: ["Acrylique (PMMA)", "PVC", "Polycarbonate", "PET"] },
    { icon: Layers, title: "Métaux", types: ["Acier inox", "Aluminium", "Laiton", "Cuivre"] },
    { icon: Layers, title: "Autres", types: ["Carton", "Cuir", "Textile", "Papier épais"] }
  ]

  const applications = [
    "Enseignes et logos découpés",
    "Signalétique intérieure et extérieure",
    "Plaques et panneaux personnalisés",
    "Objets décoratifs et design",
    "Prototypes et pièces techniques",
    "Gravure de textes et motifs",
    "Découpe de formes complexes",
    "Pièces sur-mesure pour l'industrie"
  ]

  const avantages = [
    "Précision au dixième de millimètre",
    "Découpe de formes complexes impossible manuellement",
    "Gravure et marquage permanent",
    "Production rapide, de l'unité à la série",
    "Finitions nettes sans bavures",
    "Fichiers numériques optimisés"
  ]

  const heroImages = [decoupeLaserImg, decoupeLaser]

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
        title="Découpe Laser Professionnelle"
        subtitle="Précision extrême pour vos projets de découpe et gravure sur tous matériaux."
      />

      {/* Matériaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Matériaux compatibles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materiaux.map((mat, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <mat.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{mat.title}</h3>
                <ul className="space-y-2">
                  {mat.types.map((type, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Applications de la découpe laser</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all">
                  <Scissors className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Avantages de la découpe laser</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {avantages.map((avantage, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:border-yellow-400 transition-all">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <span className="font-semibold">{avantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nos services de découpe laser</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: "Découpe", description: "Formes complexes, précision extrême" },
              { icon: Zap, title: "Gravure", description: "Marquage permanent de textes et logos" },
              { icon: Layers, title: "Marquage", description: "Personnalisation de surfaces" },
              { icon: Star, title: "Prototypage", description: "Réalisation rapide de maquettes" },
              { icon: Check, title: "Petites séries", description: "De 1 à 1000 pièces" },
              { icon: Layers, title: "Grandes séries", description: "Production industrielle" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Notre processus</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Fichier", desc: "Fourniture ou création du fichier vectoriel" },
              { num: "02", title: "Optimisation", desc: "Préparation pour découpe laser" },
              { num: "03", title: "Production", desc: "Découpe et/ou gravure" },
              { num: "04", title: "Finitions", desc: "Nettoyage et contrôle qualité" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-yellow-200 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ 
        title="Questions fréquentes sur la découpe laser"
        faqs={[
          {
            question: "Qu'est-ce que la découpe laser et quels sont ses avantages pour les entreprises ?",
            answer: "La découpe laser est une technique de fabrication qui utilise un faisceau laser très précis pour découper ou graver des matériaux tels que le bois, l'aluminium, le plexiglas ou le carton. Elle permet de réaliser des formes complexes avec une précision millimétrique, sans contact mécanique ni bavure. C'est une solution idéale pour les professionnels souhaitant produire des pièces sur-mesure, des éléments décoratifs, des enseignes ou des prototypes de haute qualité."
          },
          {
            question: "Quels matériaux peuvent être découpés au laser chez LED ALSACE ?",
            answer: "LED ALSACE travaille sur une large gamme de matériaux compatibles avec la découpe laser : Bois (contreplaqué, MDF, peuplier...), Plexiglas / PMMA, Carton, papier épais, kraft, Aluminium anodisé (pour la gravure), PVC expansé, Dibond. Chaque matériau est testé et calibré pour garantir un résultat net, sans brûlure excessive, avec des bords propres."
          },
          {
            question: "Quelle est la différence entre découpe laser et gravure laser ?",
            answer: "La découpe laser traverse complètement le matériau pour créer une forme, tandis que la gravure laser modifie uniquement la surface du support pour inscrire un visuel, un texte ou un motif. Les deux techniques sont complémentaires : par exemple, on peut graver un logo sur une plaque, puis la découper à la forme souhaitée."
          },
          {
            question: "LED ALSACE peut-elle produire des petites séries ou des pièces uniques en découpe laser ?",
            answer: "Oui. La découpe laser est particulièrement adaptée aux prototypes, pièces uniques ou petites séries, sans frais de moule ni minimum de quantité. Cela permet aux artisans, commerçants ou industriels de tester un produit ou de répondre à un besoin ponctuel avec un coût maîtrisé."
          },
          {
            question: "Quelle est la précision d'une découpe laser ?",
            answer: "La découpe laser offre une précision au dixième de millimètre, idéale pour les formes complexes, les petites pièces ou les gravures détaillées. Cela permet d'obtenir des résultats impossibles à atteindre avec une découpe mécanique traditionnelle, tout en garantissant une finition propre et professionnelle."
          }
        ]}
      />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projet de découpe laser ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour un devis personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-yellow-500 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default DecoupeLaser

