import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * Composant pour afficher les services liés
 * Améliore le maillage interne et le SEO
 */
const RelatedServices = ({ links }) => {
  if (!links || links.length === 0) return null

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Services Complémentaires
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Découvrez nos autres services pour compléter votre projet de communication visuelle
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-blue-500"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {link.text}
                </h3>
                <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2" />
              </div>
              <p className="text-gray-600 text-sm">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedServices

