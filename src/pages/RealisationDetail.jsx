import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Phone, Mail, MapPin, Calendar, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import SEO from '../components/SEO.jsx'
import { getRealisationBySlug } from '../data/realisationsData'

function RealisationDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const realisation = getRealisationBySlug(slug)

  // Si la réalisation n'existe pas, rediriger vers la page des réalisations
  if (!realisation) {
    navigate('/realisations')
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${realisation.title} - Réalisation`}
        description={realisation.detailedDescription || realisation.description}
        keywords={`${realisation.title}, ${realisation.category}, réalisation LED Alsace, enseigne ${realisation.client.location}`}
        canonicalUrl={`https://www.ledalsace.com/realisations/${realisation.slug}`}
      />

      {/* Hero Section avec image */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          {/* Bouton retour */}
          <Button
            onClick={() => navigate('/realisations')}
            variant="outline"
            className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Retour aux réalisations
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Informations principales */}
            <div className="text-white">
              <div className="inline-block px-4 py-2 bg-yellow-500 rounded-full text-gray-900 text-sm font-semibold mb-4">
                {realisation.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {realisation.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {realisation.description}
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{realisation.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{realisation.client.location}</span>
                </div>
              </div>
            </div>

            {/* Image principale */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={realisation.image}
                alt={realisation.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description détaillée */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              À propos de ce projet
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {realisation.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Détails techniques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-yellow-500" />
              Détails techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Type de réalisation
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  {realisation.technicalDetails.type}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Matériaux
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  {realisation.technicalDetails.material}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Éclairage
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  {realisation.technicalDetails.lighting}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Dimensions
                </h3>
                <p className="text-lg font-bold text-gray-900">
                  {realisation.technicalDetails.dimensions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations client */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Informations client
            </h2>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-2 border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {realisation.client.name}
              </h3>
              <div className="space-y-4">
                {realisation.client.location && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    <span className="text-lg">{realisation.client.location}</span>
                  </div>
                )}
                {realisation.client.website && (
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-5 h-5 text-yellow-600" />
                    <a
                      href={realisation.client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      Visiter le site web
                    </a>
                  </div>
                )}
                {realisation.client.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-yellow-600" />
                    <a
                      href={`tel:${realisation.client.phone}`}
                      className="text-lg text-gray-700 hover:text-gray-900"
                    >
                      {realisation.client.phone}
                    </a>
                  </div>
                )}
                {realisation.client.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-yellow-600" />
                    <a
                      href={`mailto:${realisation.client.email}`}
                      className="text-lg text-gray-700 hover:text-gray-900"
                    >
                      {realisation.client.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Un projet similaire ?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Nous réalisons des enseignes lumineuses et de la signalétique sur mesure pour tous types de commerces et entreprises en Alsace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg px-8 py-6"
            >
              Demander un devis gratuit
            </Button>
            <Button
              onClick={() => navigate('/realisations')}
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-lg px-8 py-6 border-2 border-gray-900"
            >
              Voir toutes nos réalisations
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RealisationDetail

