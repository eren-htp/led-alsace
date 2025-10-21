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
    description: 'Lettres individuelles lumineuses avec retour',
    features: ['Fabriquées en acier inoxydable', 'Eclairage de face', 'Laquage possible sur les chants'],
    imageDay: G01Gunduz,
    imageNight: G01Gece
  },
  {
    id: 'G05',
    name: 'Modèle G05',
    description: 'Lettres individuelles lumineuses sans retour',
    features: ['Fabriquées en acier inoxydable', 'Eclairage de face', 'Laquage possible sur les chants'],
    imageDay: G05Gunduz,
    imageNight: G05Gece
  },
  {
    id: 'G08',
    name: 'Modèle G08',
    description: 'Lettres individuelles rétroéclairées',
    features: ['Face avant opaque en Dibond 3mm', 'Eclairage rubans leds sur les chants'],
    imageDay: G08Gunduz,
    imageNight: G08Gece
  },
  {
    id: 'G14',
    name: 'Modèle G14',
    description: 'Caisson ajouré lumineux',
    features: ['Matériel: PVC, Dibond, Plexiglass', 'Lettrage découpé au laser', 'Eclairage de face'],
    imageDay: G14Gunduz,
    imageNight: G14Gece
  }
]

function ModelItem({ model, globalNightMode }) {
  return (
    <div className="flex-1 min-w-[250px]">
      {/* Image avec comparateur */}
      <div className={`relative aspect-[4/3] overflow-hidden rounded-lg mb-4 transition-colors duration-500 ${globalNightMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        {/* Image jour */}
        <img 
          src={model.imageDay} 
          alt={`${model.name} - Jour`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${globalNightMode ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Image nuit */}
        <img 
          src={model.imageNight} 
          alt={`${model.name} - Nuit`}
          className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${globalNightMode ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Badge modèle */}
        <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
          {model.id}
        </div>
      </div>

      {/* Contenu */}
      <div className="px-2">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${globalNightMode ? 'text-white' : 'text-gray-900'}`}>{model.name}</h3>
        <p className={`mb-4 text-sm transition-colors duration-500 ${globalNightMode ? 'text-gray-300' : 'text-gray-600'}`}>{model.description}</p>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {model.features.map((feature, index) => (
            <li key={index} className={`flex items-center text-sm transition-colors duration-500 ${globalNightMode ? 'text-gray-200' : 'text-gray-700'}`}>
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
  const [globalNightMode, setGlobalNightMode] = useState(false)

  return (
    <section className={`py-20 transition-colors duration-500 ${globalNightMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-4">
        {/* Header avec bouton global jour/nuit */}
        <div className="text-center mb-16 relative">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500 ${globalNightMode ? 'text-white' : 'text-gray-900'}`}>
            Nos Modèles <span className="text-yellow-500">Phares</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto mb-6 transition-colors duration-500 ${globalNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Découvrez nos enseignes LED les plus populaires. Basculez en mode nuit pour voir l'effet lumineux en action.
          </p>
          
          {/* Bouton global jour/nuit */}
          <div className="flex justify-center">
            <button
              onClick={() => setGlobalNightMode(!globalNightMode)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg ${
                globalNightMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700 border-2 border-gray-600' 
                  : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 border-2 border-yellow-500'
              }`}
            >
              {globalNightMode ? (
                <>
                  <Moon size={20} />
                  <span>Mode Nuit</span>
                </>
              ) : (
                <>
                  <Sun size={20} />
                  <span>Mode Jour</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Bloc unique contenant les 4 modèles */}
        <div className={`rounded-2xl shadow-2xl p-8 max-w-7xl mx-auto transition-colors duration-500 ${globalNightMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex flex-wrap gap-8 justify-center mb-8">
            {models.map((model) => (
              <ModelItem key={model.id} model={model} globalNightMode={globalNightMode} />
            ))}
          </div>

          {/* CTA unique pour tous les modèles */}
          <div className={`text-center pt-8 border-t transition-colors duration-500 ${globalNightMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`mb-6 text-lg transition-colors duration-500 ${globalNightMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Tous nos modèles sont personnalisables en taille, couleur et finition
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
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

