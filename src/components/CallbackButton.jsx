import { useState } from 'react'
import { Phone } from 'lucide-react'
import CallbackModal from './CallbackModal'

function CallbackButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Être rappelé"
      >
        <Phone className="w-5 h-5 group-hover:animate-pulse" />
        <span className="hidden sm:inline">Être rappelé</span>
      </button>

      {/* Popup formulaire */}
      <CallbackModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default CallbackButton

