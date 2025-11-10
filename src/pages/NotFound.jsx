import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import SEO from '../components/SEO.jsx';
import { ArrowLeft } from 'lucide-react';

function NotFound() {
  const seoData = {
    title: "Page Introuvable (404) - LED Alsace",
    description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour continuer votre navigation.",
    keywords: "404, page introuvable, erreur, LED Alsace",
    canonicalUrl: "https://www.ledalsace.com/404"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
      />
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl font-extrabold text-yellow-500 tracking-widest">404</h1>
          <div className="bg-gray-900 px-2 text-sm rounded rotate-12 absolute text-white">
            Page Introuvable
          </div>
        </div>
        <p className="mt-4 text-xl text-gray-600">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <p className="text-gray-500">
          Il se peut que l'adresse ait été mal tapée ou que la page ait été déplacée.
        </p>
        <Link to="/">
          <Button 
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-8 py-6 shadow-lg"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Retourner à l'accueil
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
