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
import croixPharmacie from '../../assets/croix-pharmacie-temp.jpg';
const enseignePharmacie = 'https://via.placeholder.com/1920x1080/FFD700/000000?text=Enseigne+Pharmacie';
const enseignePharmacie2 = 'https://via.placeholder.com/1920x1080/FFD700/000000?text=Enseigne+Pharmacie+2';

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

      {/* Contenu Principal - Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos solutions d'enseignes et signalétique pour les pharmacies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de produits pour garantir la visibilité et la conformité de votre officine.
            </p>
          </div>

          {/* Solutions en Cartes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Croix de Pharmacie */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">Croix de Pharmacie</h3>
              <p className="text-gray-600 mb-6">Le symbole incontournable de votre officine, modernisé par la technologie LED.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Écran LCD Intégré (affichage messages, heure, température)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Écran Monochrome (vert classique)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Écran Bicolore (vert et blanc ou autres combinaisons)</li>
              </ul>
            </div>

            {/* Enseignes de Pharmacie */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">Enseignes de Pharmacie</h3>
              <p className="text-gray-600 mb-6">Des solutions d'enseignes sur mesure pour une visibilité maximale de votre façade.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Enseigne Rétro-éclairée (effet halo)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Enseigne Éclairée par l’avant (lettres boîtier lumineuses)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Enseigne non lumineuse (Dibond, PVC, etc.)</li>
              </ul>
            </div>

            {/* Signalétique */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">Signalétique</h3>
              <p className="text-gray-600 mb-6">Optimisez l'orientation et l'information de vos clients à l'intérieur comme à l'extérieur.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Panneau de parking (réservé, accès, etc.)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />Signalétique de Files d’attentes (marquage au sol, potelets)</li>
                <li className="flex items-start"><Check className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />PLV (Publicité sur Lieu de Vente) pour l'intérieur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Milieu de Page */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Besoin d'un conseil personnalisé pour votre officine ?
          </h3>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-4">
            Contactez-nous pour une étude gratuite<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Liste de Pharmacies Accompagnées (Références Fictives) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pharmacies qui nous ont fait confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelques exemples de nos réalisations en Alsace (noms fictifs à titre d'exemple)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Pharmacie du Rhin</h4>
              <p className="text-sm text-gray-500">Strasbourg</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Pharmacie Centrale</h4>
              <p className="text-sm text-gray-500">Colmar</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Pharmacie de l'Ill</h4>
              <p className="text-sm text-gray-500">Mulhouse</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Pharmacie de la Gare</h4>
              <p className="text-sm text-gray-500">Sélestat</p>
            </div>
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
            Lancez votre projet d'enseigne de pharmacie en toute sérénité
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour un accompagnement complet, de la conception à l'installation.
          </p>
          <Button onClick={() => navigate('/contact')} size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-6">
            Demander un devis gratuit<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}

export default EnseignesPharmacie;
