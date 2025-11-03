import { Button } from '@/components/ui/button.jsx'
import SEO from '../../components/SEO.jsx'
import Breadcrumb from '../../components/Breadcrumb.jsx'
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js'
import { ArrowRight, Check, Palette, FileText, Image, Layout } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import FAQ from '../../components/FAQ'
import HeroSlider from '../../components/HeroSlider'
import conceptionGraphique from '../../assets/ConceptionGraphique.webp'
import creationGraphiqueImg from '../../assets/creationgraphique.webp'

import servicesSEOConfig from '../../data/servicesSEO.js'
function CreationGraphique() {
  // Configuration SEO
  const seoData = servicesSEOConfig.creationGraphique
  const breadcrumbItems = seoData.breadcrumb
  const faqs = seoData.faqs

  const navigate = useNavigate()

  const services = [
    { title: "Création de logo", description: "Design d'identité visuelle unique et mémorable" },
    { title: "Charte graphique", description: "Définition complète de votre identité de marque" },
    { title: "Cartes de visite", description: "Design professionnel pour vos supports de contact" },
    { title: "Flyers et brochures", description: "Supports de communication impactants" },
    { title: "Affiches publicitaires", description: "Visuels percutants pour vos campagnes" },
    { title: "Supports digitaux", description: "Bannières web, posts réseaux sociaux" }
  ]

  const realisations = [
    "Logos d'entreprise",
    "Chartes graphiques complètes",
    "Cartes de visite",
    "Flyers promotionnels",
    "Brochures commerciales",
    "Affiches événementielles",
    "Menus restaurant",
    "Packaging produits"
  ]

  const avantages = [
    { icon: Palette, title: "Design sur mesure", description: "Création unique adaptée à votre identité" },
    { icon: FileText, title: "Fichiers sources", description: "Tous formats fournis pour impression et web" },
    { icon: Image, title: "Qualité professionnelle", description: "Designers expérimentés à votre service" },
    { icon: Layout, title: "Cohérence visuelle", description: "Harmonie sur tous vos supports" }
  ]

  const heroImages = [conceptionGraphique, creationGraphiqueImg]

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
        title="Création Graphique Professionnelle"
        subtitle="Notre équipe de designers crée votre identité visuelle complète : logo, charte graphique, cartes de visite, flyers, brochures. Du concept à la réalisation."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Solutions complètes de design graphique</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Types de supports</h2>
                <p className="text-lg text-gray-600 mb-8">Création graphique pour tous vos besoins</p>
                <div className="grid grid-cols-2 gap-4">
                  {realisations.map((real, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-700">{real}</span>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Notre processus créatif</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-lg mb-2">Brief</h3>
                <p className="text-gray-600 text-sm">Analyse de vos besoins et objectifs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-lg mb-2">Création</h3>
                <p className="text-gray-600 text-sm">Design de plusieurs propositions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-lg mb-2">Validation</h3>
                <p className="text-gray-600 text-sm">Ajustements selon vos retours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="font-bold text-lg mb-2">Livraison</h3>
                <p className="text-gray-600 text-sm">Fichiers finaux tous formats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-lumineuse-dark mb-6">Projet de création graphique ?</h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">Contactez-nous pour discuter de votre projet</p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-lumineuse-dark hover:bg-gray-900 text-white font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <FAQ 
        title="Questions fréquentes sur la création graphique"
        faqs={[
          {
            question: "En quoi consiste la création graphique pour une entreprise ?",
            answer: "La création graphique regroupe l'ensemble des visuels qui permettent à une entreprise de communiquer efficacement : logo, charte graphique, supports imprimés, visuels digitaux… C'est un outil essentiel pour affirmer son identité, capter l'attention de ses cibles et transmettre des messages clairs et percutants. Une création graphique professionnelle renforce la crédibilité et la cohérence de la marque."
          },
          {
            question: "Quels services de création graphique propose LED ALSACE ?",
            answer: "LED ALSACE accompagne les entreprises du Grand Est dans tous leurs besoins graphiques : Création de logo et d'identité visuelle, Déclinaison de charte graphique, Conception de supports imprimés (flyers, brochures, cartes), Création de visuels pour réseaux sociaux ou sites web, et Habillage graphique d'enseignes, véhicules, vitrines, etc. Nous travaillons sur-mesure, selon vos besoins, votre secteur d'activité et vos contraintes."
          },
          {
            question: "Quelle est la différence entre un graphiste freelance et un studio comme LED ALSACE ?",
            answer: "Un studio comme LED ALSACE offre une approche complète et structurée : nous combinons les compétences graphiques, techniques et stratégiques pour livrer des visuels adaptés à chaque support (print, digital, signalétique…). Contrairement à un freelance isolé, nous pouvons gérer des projets complexes, multi-supports et suivre l'ensemble de la chaîne de production (de la création à l'impression ou la pose)."
          },
          {
            question: "Pourquoi investir dans une charte graphique professionnelle ?",
            answer: "La charte graphique garantit la cohérence visuelle de votre marque sur tous vos supports : logo, typographies, couleurs, mises en page… Elle renforce votre identité, facilite la reconnaissance de votre entreprise, et permet à tous vos partenaires ou collaborateurs de respecter une ligne graphique claire. C'est un outil indispensable pour structurer votre communication à long terme."
          },
          {
            question: "Est-ce que LED ALSACE peut moderniser un logo existant ?",
            answer: "Oui. Nous proposons des prestations de refonte ou d'optimisation de logo. Cela permet de moderniser un visuel vieillissant, de le rendre plus lisible (en impression, en petit format…), ou de l'adapter à de nouveaux usages (réseaux sociaux, signalétique, écran…). Nous conservons l'essence de votre identité tout en l'actualisant."
          },
          {
            question: "Quels sont les formats de fichiers fournis à la fin d'un projet graphique ?",
            answer: "Nous livrons tous les fichiers nécessaires à une utilisation professionnelle : Fichiers vectoriels (AI, EPS, PDF), Fichiers pour impression (PDF HD, CMJN), et Fichiers pour le web (PNG, JPEG, SVG, RVB). Selon le projet, nous pouvons également fournir des gabarits pour vos prochaines impressions ou publications digitales."
          },
          {
            question: "Combien coûte une création graphique chez LED ALSACE ?",
            answer: "Les tarifs dépendent de la nature du projet : création de logo, mise en page de support, déclinaisons multi-formats… À titre indicatif : Création de logo à partir de 390 € HT, Carte de visite dès 90 € HT, Flyer A5 recto-verso à partir de 120 € HT. Nous établissons toujours un devis personnalisé selon vos besoins."
          },
          {
            question: "LED ALSACE peut-elle gérer à la fois la création graphique et l'impression ?",
            answer: "Oui, c'est l'un de nos points forts. Nous assurons la création, l'optimisation des fichiers, l'impression et même la pose pour les supports comme les enseignes, panneaux ou vitrines. Cela vous garantit un résultat cohérent, des fichiers bien calibrés, et un interlocuteur unique du brief à la livraison."
          },
          {
            question: "Quels logiciels utilise LED ALSACE pour la création graphique ?",
            answer: "Nos graphistes travaillent avec les outils professionnels de référence : Adobe Illustrator, Photoshop, InDesign pour le print et le logo, Canva Pro pour certaines déclinaisons rapides, et Figma ou XD pour les maquettes web. Cette maîtrise nous permet de produire des fichiers parfaitement adaptés aux différents modes de production (impression, découpe, web…)."
          },
          {
            question: "Est-ce que LED ALSACE propose des visuels pour les réseaux sociaux ou le web ?",
            answer: "Oui. Nous réalisons des visuels adaptés aux formats Facebook, Instagram, LinkedIn, ainsi que des bannières web, des visuels pour newsletters, etc. Nous pouvons également décliner vos campagnes print en version digitale pour assurer une communication cohérente sur tous vos canaux."
          }
        ]}
      />
    </div>
  )
}

export default CreationGraphique
