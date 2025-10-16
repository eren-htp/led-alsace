import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

// Import des images des modèles
import G01Gece from '@/assets/modeles/G01gece.webp'
import G01Gunduz from '@/assets/modeles/G01gunduz.webp'
import G05Gece from '@/assets/modeles/G05gece.webp'
import G05Gunduz from '@/assets/modeles/G05gunduz.webp'
import G08Gece from '@/assets/modeles/G08gece.webp'
import G08Gunduz from '@/assets/modeles/G08gunduz.webp'
import G14Gece from '@/assets/modeles/G14gece.webp'
import G14Gunduz from '@/assets/modeles/G14gunduz.webp'

const models = [
  {
    id: 'G01',
    name: 'Modèle G01',
    description: 'Lettres boîtier LED avec halo lumineux',
    features: ['Design élégant', 'Effet halo', 'Haute visibilité'],
    imageDay: G01Gunduz,
    imageNight: G01Gece
  },
  {
    id: 'G05',
    name: 'Modèle G05',
    description: 'Lettres LED avec contour lumineux',
    features: ['Contour coloré', 'Effet 3D', 'Personnalisable'],
    imageDay: G05Gunduz,
    imageNight: G05Gece
  },
  {
    id: 'G08',
    name: 'Modèle G08',
    description: 'Lettres relief avec éclairage frontal',
    features: ['Relief prononcé', 'Éclairage puissant', 'Finition premium'],
    imageDay: G08Gunduz,
    imageNight: G08Gece
  },
  {
    id: 'G14',
    name: 'Modèle G14',
    description: 'Panneau LED rétro-éclairé complet',
    features: ['Panneau complet', 'Éclairage uniforme', 'Idéal enseignes'],
    imageDay: G14Gunduz,
    imageNight: G14Gece
  }
]

function ModelItem({ model }) {
  const [isNight, setIsNight] = useState(false)

  return (
    <div className="flex-1 min-w-[250px]">
      {/* Image avec comparateur */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-lg mb-4">
        {/* Image jour */}
        <img 
          src={model.imageDay} 
          alt={`${model.name} - Jour`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isNight ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Image nuit */}
        <img 
          src={model.imageNight} 
          alt={`${model.name} - Nuit`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isNight ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Toggle jour/nuit avec cursor-pointer */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={() => setIsNight(!isNight)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
              isNight 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
            }`}
          >
            {isNight ? (
              <>
                <Moon size={18} />
                <span className="text-sm">Nuit</span>
              </>
            ) : (
              <>
                <Sun size={18} />
                <span className="text-sm">Jour</span>
              </>
            )}
          </button>
        </div>

        {/* Badge modèle */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-lg">
          {model.id}
        </div>
      </div>

      {/* Contenu */}
      <div className="px-2">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{model.description}</p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ModelsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Modèles <span className="text-yellow-500">Phares</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos enseignes LED les plus populaires. Passez de jour à nuit pour voir l'effet lumineux en action.
          </p>
        </div>

        {/* Bloc unique contenant les 4 modèles */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8 justify-center mb-8">
            {models.map((model) => (
              <ModelItem key={model.id} model={model} />
            ))}
          </div>

          {/* CTA unique pour tous les modèles */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-6 text-lg">
              Tous nos modèles sont personnalisables en taille, couleur et finition
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Je veux une enseigne
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModelsShowcase

