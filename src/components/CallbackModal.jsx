import { useState } from 'react'
import { Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function CallbackModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ nom: '', telephone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Utiliser Formspree pour envoyer l'email directement
      const response = await fetch('https://formspree.io/f/meorvnob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.nom,
          telephone: formData.telephone,
          _subject: `🔔 Demande de rappel - ${formData.nom}`,
          message: `Nouvelle demande de rappel depuis le site LED Alsace\n\nNom: ${formData.nom}\nTéléphone: ${formData.telephone}\n\nDate: ${new Date().toLocaleString('fr-FR')}`
        }),
      })

      if (response.ok) {
        console.log("Formspree CallbackModal success:", await response.text());
        setSubmitStatus('success')
        setFormData({ nom: '', telephone: '' })
        
        // Fermer le popup après 2 secondes
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      } else {
        console.error("Formspree CallbackModal error response:", await response.text());
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* En-tête */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-black" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Être rappelé</h2>
          <p className="text-gray-600">Laissez-nous vos coordonnées, nous vous rappelons rapidement</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="nom"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              required
              value={formData.telephone}
              onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="06 12 34 56 78"
              pattern="[0-9\s\-\+\(\)]{10,}"
            />
          </div>

          {/* Messages de statut */}
          {submitStatus === 'success' && (
            <div className="bg-yellow-50 border-2 border-[#F0C724] text-gray-900 px-4 py-3 rounded-lg">
              ✓ Demande envoyée ! Nous vous rappelons très vite.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-gray-100 border-2 border-black text-gray-900 px-4 py-3 rounded-lg">
              ✗ Erreur lors de l'envoi. Veuillez réessayer.
            </div>
          )}

          {/* Boutons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-2 border-gray-300 hover:bg-gray-50"
            >
              Annuler
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            >
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </Button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Vos données sont utilisées uniquement pour vous recontacter
        </p>
      </div>
    </div>
  )
}

export default CallbackModal

