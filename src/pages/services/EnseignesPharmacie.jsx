import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import SEO from '../../components/SEO.jsx';
import Breadcrumb from '../../components/Breadcrumb.jsx';
import { getBreadcrumbSchema, getFAQSchema } from '../../utils/structuredData.js';
import FAQ from '../../components/FAQ';
import HeroSlider from '../../components/HeroSlider';
import { ArrowRight, Check, Lightbulb, MapPin } from 'lucide-react';

// Assets
import croixPharmacie from '../../assets/croix-pharmacie.webp';
import enseignePharmacie from '../../assets/enseigne-pharmacie.webp';
import enseignePharmacie2 from '../../assets/enseigne-pharmacie-2.webp';

// Configuration SEO
import servicesSEOConfig from '../../data/servicesSEO.js';

function EnseignesPharmacie() {
  // Configuration SEO (à ajouter dans servicesSEO.js)
  const seoData = servicesSEOConfig.enseignesPharmacie || {
    title: "Enseignes et Croix de Pharmacie LED en Alsace | LED Alsace",
    description: "Conception, fabrication et installation de croix de pharmacie et enseignes LED sur mesure en Alsace. Visibilité maximale garantie.",
    keywords: "croix de pharmacie LED, enseigne pharmacie, enseigne lumineuse pharmacie, LED Alsace",
    canonicalUrl: "https://www.ledalsace.com/services/enseignes-pharmacie",
    h1: "Croix et Enseignes de Pharmacie LED sur Mesure",
    breadcrumb: [
      { name: "Services", url: "/services" },
      { name: "Enseignes Pharmacie", url: "/services/enseignes-pharmacie" }
    ],
    faqs: [
      { question: "Pourquoi choisir une croix de pharmacie LED ?", answer: "La croix LED offre une visibilité exceptionnelle de jour comme de nuit, consomme très peu d'énergie et permet des animations dynamiques pour attirer l'attention." },
      { question: "Quels sont les types de croix de pharmacie que vous proposez ?", answer: "Nous proposons des croix statiques, animées, monochromes (vert) ou full-color (RGB), avec affichage de l'heure, de la température ou de messages personnalisés." },
      { question: "Faut-il une autorisation pour installer une croix de pharmacie ?", answer: "Oui, l'installation d'une croix de pharmacie est soumise à une réglementation stricte et nécessite une déclaration préalable en mairie. Nous vous accompagnons dans les démarches." },
    ]
  };
  
  const breadcrumbItems = seoData.breadcrumb;
  const faqs = seoData.faqs;
  const navigate = useNavigate();

  const heroImages = [
    croixPharmacie,
    enseignePharmacie,
    enseignePharmacie2,
  ];

  const avantages = [
    { 
      icon: Lightbulb, 
      title: "Haute Visibilité", 
      description: "Éclairage LED puissant pour être visible de loin, même en plein jour." 
    },
    { 
      icon: Check, 
      title: "Conformité Réglementaire", 
      description: "Nos installations respectent les normes d'urbanisme et de santé publique." 
    },
    { 
      icon: MapPin, 
      title: "Installation Locale", 
      description: "Service complet incluant la fabrication, la pose et le raccordement en Alsace." 
    },
  ];

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
        title={seoData.h1}
        subtitle="Des solutions LED sur mesure pour garantir la visibilité de votre officine 24h/24."
      />

      {/* Contenu Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              La solution LED pour votre pharmacie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Que ce soit pour une croix de pharmacie dynamique ou une enseigne lumineuse, nous vous proposons des produits performants et conformes à la législation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {avantages.map((avantage, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-yellow-400 hover:-translate-y-1 text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
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

      {/* FAQ */}
      <FAQ 
        title="Questions fréquentes sur les enseignes de pharmacie"
        faqs={faqs}
      />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Un projet d'enseigne ou de croix de pharmacie ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et une étude de conformité.
          </p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-6">
            Demander un devis<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default EnseignesPharmacie;
