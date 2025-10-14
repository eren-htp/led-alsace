import { useState } from 'react'
import { Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

function CallbackButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ nom: '', telephone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Créer le corps de l'email
      const emailBody = `
Nouvelle demande de rappel depuis le site LED Alsace

Nom: ${formData.nom}
Téléphone: ${formData.telephone}

Date: ${new Date().toLocaleString('fr-FR')}
      `.trim()

      // Utiliser mailto pour ouvrir le client email
      const mailtoLink = `mailto:fdev@ledalsace.fr?subject=Demande de rappel - ${formData.nom}&body=${encodeURIComponent(emailBody)}`
      
      window.location.href = mailtoLink

      setSubmitStatus('success')
      setFormData({ nom: '', telephone: '' })
      
      // Fermer le popup après 2 secondes
      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Être rappelé"
      >
        <Phone className="w-5 h-5 group-hover:animate-pulse" />
        <span className="hidden sm:inline">Être rappelé</span>
      </button>

      {/* Popup formulaire */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
            {/* Bouton fermer */}
            <button
              onClick={() => setIsOpen(false)}
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
                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
                  ✓ Demande envoyée ! Nous vous rappelons très vite.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
                  ✗ Erreur lors de l'envoi. Veuillez réessayer.
                </div>
              )}

              {/* Boutons */}
              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  onClick={() => setIsOpen(false)}
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
      )}
    </>
  )
}

export default CallbackButton
