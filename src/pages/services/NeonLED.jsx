import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Zap, Lightbulb, Palette, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import neonLED1 from '../../assets/NeonLED.JPG'
import neonLED2 from '../../assets/NeonLED2.JPG'
import neonLED3 from '../../assets/NeonLED3.JPG'
import neonLED4 from '../../assets/NeonLED4.JPG'

function NeonLED() {
  const navigate = useNavigate()

  const avantages = [
    { icon: Lightbulb, title: "Éclairage LED moderne", description: "Technologie LED dernière génération, économique et durable" },
    { icon: Palette, title: "Personnalisation totale", description: "Formes, couleurs et tailles sur mesure selon votre projet" },
    { icon: Shield, title: "Résistance garantie", description: "Étanche IP65, résiste aux chocs et aux intempéries" },
    { icon: Zap, title: "Faible consommation", description: "Jusqu'à 80% d'économie d'énergie par rapport au néon classique" }
  ]

  const applications = [
    "Enseignes commerciales et logos lumineux",
    "Décoration intérieure (restaurants, bars, boutiques)",
    "Événementiel et scénographie",
    "Signalétique lumineuse",
    "Décoration murale personnalisée",
    "Ambiance et mise en lumière"
  ]

  const heroImages = [neonLED1, neonLED2, neonLED3, neonLED4]

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider 
        images={heroImages}
        title="Illuminez votre espace avec du néon LED"
        subtitle="Design moderne, économique et durable. Créez l'ambiance parfaite pour votre entreprise."
      />

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Pourquoi choisir le néon LED ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <avantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Applications du néon LED</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl hover:shadow-lg transition-all">
                  <Check className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Notre processus de fabrication</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Conception", desc: "Design de votre néon sur mesure" },
              { num: "02", title: "Validation", desc: "Aperçu 3D et validation du projet" },
              { num: "03", title: "Fabrication", desc: "Réalisation en atelier local" },
              { num: "04", title: "Installation", desc: "Pose et mise en service" }
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
        title="Questions fréquentes sur les néons LED"
        faqs={[
          {
            question: "Quelle est la différence entre un néon LED et un néon traditionnel au gaz ?",
            answer: "Un néon traditionnel est un tube de verre rempli de gaz (néon ou argon), éclairé par décharge électrique. Le néon LED, quant à lui, imite le rendu visuel du néon mais fonctionne grâce à des bandes de LED intégrées dans des gaines souples ou rigides. Il offre un rendu lumineux similaire avec de nombreux avantages : consommation réduite, absence de gaz, solidité accrue et personnalisation sur-mesure."
          },
          {
            question: "Pourquoi choisir un néon LED pour une enseigne ou une décoration professionnelle ?",
            answer: "Le néon LED est un excellent choix pour les professionnels souhaitant un effet lumineux impactant, moderne et économique. Il attire l'œil, fonctionne en basse tension (sécurité), consomme peu d'énergie et peut être fabriqué dans toutes les formes : logo, slogan, pictogramme, etc. C'est aussi une solution durable, idéale pour les commerces, bars, restaurants, bureaux ou événements."
          },
          {
            question: "Est-ce que le néon LED peut être utilisé en extérieur ?",
            answer: "Oui. LED ALSACE propose des néons LED étanches (IP65 ou plus) adaptés à une utilisation en extérieur, résistants aux intempéries et aux variations de température. Que ce soit pour une façade de commerce ou une signalétique extérieure design, nous concevons des néons LED durables et sécurisés, avec une installation conforme aux normes."
          },
          {
            question: "Le néon LED est-il personnalisable en forme, couleur et taille ?",
            answer: "Absolument. Le néon LED est l'un des supports les plus flexibles du marché. Nous pouvons reproduire votre logo, signature, texte, forme spécifique dans des dizaines de couleurs et plusieurs types de finitions (lumière directe, indirecte, clignotante, RVB...). La taille est entièrement ajustable selon votre espace."
          },
          {
            question: "Quelle est la durée de vie moyenne d'un néon LED professionnel ?",
            answer: "Un néon LED de qualité professionnelle a une durée de vie moyenne comprise entre 30 000 et 50 000 heures, soit plusieurs années d'utilisation continue. Contrairement aux néons au gaz, il ne s'affaiblit pas progressivement et ne contient pas de composants fragiles (verre, électrodes). Un entretien minimal est suffisant."
          },
          {
            question: "Est-ce que le néon LED est plus économique qu'un néon traditionnel ?",
            answer: "Oui. Le néon LED consomme en moyenne 5 à 10 fois moins d'électricité qu'un néon au gaz pour un rendu équivalent. Il ne nécessite pas de transformateur haute tension, n'émet pas de chaleur excessive, et réduit fortement les coûts de maintenance. C'est un investissement rentable sur le long terme."
          },
          {
            question: "Quels sont les délais pour fabriquer un néon LED sur-mesure chez LED ALSACE ?",
            answer: "Les délais de production varient selon la complexité du design et la taille. En général, comptez 3 à 5 jours ouvrés pour un modèle simple, et 7 à 10 jours ouvrés pour une création sur-mesure (logo, forme spécifique). Chaque commande inclut une maquette validée avant fabrication et une livraison rapide dans le Grand Est."
          },
          {
            question: "Est-ce que le néon LED chauffe ou présente un danger ?",
            answer: "Non. Le néon LED fonctionne en basse tension (12V ou 24V), ce qui le rend très sûr, y compris dans les espaces accessibles au public. Il ne chauffe pas significativement, ne risque pas de se briser comme le verre, et peut être installé dans des lieux sensibles (enfants, ERP, etc.)."
          },
          {
            question: "Peut-on fixer un néon LED sur tout type de surface ?",
            answer: "Oui. Nos néons LED peuvent être fixés sur mur, vitrine, panneau ou support suspendu. Nous proposons des systèmes de fixation adaptés : entretoises, rails, colles spéciales ou ventouses pour les vitrines temporaires. Chaque projet inclut une étude de pose personnalisée."
          },
          {
            question: "LED ALSACE propose-t-elle la création de néons LED pour les événements ou les salons ?",
            answer: "Oui. Nous réalisons des néons LED événementiels pour stand, exposition, shooting photo ou décoration temporaire. Faciles à transporter et à installer, ils donnent un cachet visuel immédiat à votre espace. Nous proposons aussi la location courte durée pour certains modèles standards."
          }
        ]}
      />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projet de néon LED sur mesure ?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Contactez-nous pour créer votre néon LED personnalisé</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-white text-yellow-500 hover:bg-gray-100 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default NeonLED

