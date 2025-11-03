import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import FAQ from '@/components/FAQ.jsx'
import enseigneDibondImg from '@/assets/EnseigneenDibond.JPG'

import servicesSEOConfig from '../../data/servicesSEO.js'
function EnseigneDibond() {
  // Configuration SEO
  const seoData = servicesSEOConfig.enseigneDibond
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

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

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={enseigneDibondImg}
            alt="Enseigne en Dibond"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-lumineuse-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enseigne en Dibond
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Enseignes légères, résistantes et élégantes pour votre communication extérieure
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-lumineuse-dark font-bold">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Qu'est-ce qu'une enseigne en Dibond ?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Le <strong>Dibond</strong> est un matériau composite constitué de deux feuilles d'aluminium enserrant un noyau en polyéthylène. 
                Cette structure lui confère une excellente rigidité tout en restant léger, ce qui en fait un choix idéal pour les enseignes extérieures et intérieures.
              </p>
              <p className="mb-6">
                Les enseignes en Dibond offrent un rendu professionnel et moderne, avec une surface lisse parfaite pour l'impression numérique haute définition. 
                Elles résistent aux intempéries, aux UV et ne se déforment pas dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les avantages du Dibond
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Légèreté",
                description: "Facile à manipuler et à installer, le Dibond est 3 fois plus léger que l'aluminium massif"
              },
              {
                title: "Rigidité",
                description: "Structure composite offrant une excellente résistance à la déformation et aux chocs"
              },
              {
                title: "Durabilité",
                description: "Résistant aux intempéries, aux UV et à la corrosion pour une longévité exceptionnelle"
              },
              {
                title: "Qualité d'impression",
                description: "Surface lisse idéale pour l'impression numérique haute définition et les couleurs vives"
              },
              {
                title: "Polyvalence",
                description: "Adapté pour l'intérieur comme l'extérieur, disponible en plusieurs épaisseurs"
              },
              {
                title: "Entretien facile",
                description: "Nettoyage simple à l'eau savonneuse, pas de traitement spécifique nécessaire"
              }
            ].map((avantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-yellow-400 transition-all">
                <CheckCircle className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Applications et utilisations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Extérieur</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Enseignes de façade</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Panneaux publicitaires</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Signalétique urbaine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Panneaux de chantier</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intérieur</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Signalétique directionnelle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Décoration murale</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>PLV (Publicité sur Lieu de Vente)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Stands d'exposition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqs={[
        {
          question: "Quelle est la durée de vie d'une enseigne en Dibond ?",
          answer: "Une enseigne en Dibond bien entretenue peut durer 10 à 15 ans en extérieur. Le matériau résiste parfaitement aux UV, à la pluie et aux variations de température."
        },
        {
          question: "Peut-on découper le Dibond dans n'importe quelle forme ?",
          answer: "Oui, le Dibond se découpe facilement à la forme souhaitée grâce à nos machines de découpe numérique. Vous pouvez créer des enseignes aux formes personnalisées : lettres découpées, logos, formes géométriques, etc."
        },
        {
          question: "Comment fixer une enseigne en Dibond ?",
          answer: "Plusieurs systèmes de fixation sont possibles : vis apparentes ou cachées, entretoises pour un effet de profondeur, adhésif double face pour les petits formats, ou rails de suspension. Nous vous conseillons la meilleure solution selon votre support."
        },
        {
          question: "Le Dibond est-il recyclable ?",
          answer: "Oui, le Dibond est recyclable. L'aluminium et le polyéthylène peuvent être séparés et recyclés dans leurs filières respectives, ce qui en fait un choix écologique."
        },
        {
          question: "Quelle épaisseur de Dibond choisir ?",
          answer: "Nous proposons principalement du Dibond 3mm pour les enseignes standard et du 5mm pour les grandes dimensions ou les applications nécessitant plus de rigidité. Le choix dépend de la taille de votre enseigne et de son emplacement."
        }
      ]} />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-lumineuse-dark mb-6">
            Prêt à créer votre enseigne en Dibond ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-lumineuse-dark hover:bg-gray-800 text-white font-bold">
                <Phone className="mr-2 w-5 h-5" />
                03 88 04 45 34
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-lumineuse-dark border-2 border-lumineuse-dark font-bold">
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnseigneDibond

