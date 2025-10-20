import { Button } from '@/components/ui/button.jsx'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import { organizationSchema } from '../utils/structuredData.js'
import CallbackModal from '../components/CallbackModal'

function Contact() {
  const [showCallbackModal, setShowCallbackModal] = useState(false)
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    solution: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/meorvnob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          _subject: `📧 Demande de devis - ${formData.prenom} ${formData.nom}`,
          prenom: formData.prenom,
          nom: formData.nom,
          telephone: formData.telephone,
          solution: formData.solution,
          message: formData.message,
          date: new Date().toLocaleString('fr-FR')
        }),
      })

      if (response.ok) {
        console.log("Formspree Contact success:", await response.text());
        setSubmitStatus('success')
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          solution: '',
          message: ''
        })
      } else {
        console.error("Formspree Contact error response:", await response.text());
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact"
        description="Contactez LED Alsace pour votre projet d'enseigne LED ou de signalétique. Devis gratuit en 24h. Atelier à Ostwald près de Strasbourg. Tél: 03 88 04 45 34"
        keywords="contact LED Alsace, devis enseigne LED, contact Strasbourg, demande devis signalétique, enseigne Ostwald"
        canonicalUrl="https://www.ledalsace.com/contact"
        structuredData={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <a 
              href="tel:0388044534"
              className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl hover:from-yellow-100 hover:to-yellow-50 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 text-center group transform hover:-translate-y-2 hover:shadow-xl"
            >
              <Phone className="w-16 h-16 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600 mb-3">Appelez-nous du lundi au vendredi</p>
              <p className="text-3xl font-bold text-yellow-600">03 88 044 534</p>
            </a>

            <a 
              href="mailto:contact@ledalsace.fr"
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl hover:from-gray-100 hover:to-gray-50 border-2 border-gray-200 hover:border-[#F0C724] transition-all duration-300 text-center group transform hover:-translate-y-2 hover:shadow-xl"
            >
              <Mail className="w-16 h-16 text-led-dark mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-3">Écrivez-nous à tout moment</p>
              <p className="text-lg font-semibold text-[#F0C724] break-all">contact@ledalsace.fr</p>
            </a>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=12+Rue+Th%C3%A9odore+Monod,+67540+Ostwald" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-xl border-2 border-yellow-200 text-center transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer block"
            >
              <MapPin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-600 mb-3">Visitez notre showroom</p>
              <p className="text-gray-700 font-medium">
                La Vigie<br />
                12 Rue Théodore Monod<br />
                67540 Ostwald<br />
                France
              </p>
            </a>
          </div>

          {/* Contact Form & Info */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Demandez votre devis gratuit
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.prenom}
                      onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Solution souhaitée
                  </label>
                  <select 
                    value={formData.solution}
                    onChange={(e) => setFormData({...formData, solution: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                  >
                    <option>Sélectionnez une solution</option>
                    <option>Enseignes LED</option>
                    <option>Marquage véhicule</option>
                    <option>Signalétique</option>
                    <option>Création graphique</option>
                    <option>Impression grand format</option>
                    <option>Découpe CNC</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre message *
                  </label>
                  <textarea 
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all resize-none"
                    placeholder="Décrivez-nous votre projet..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-yellow-50 border-2 border-[#F0C724] text-gray-900 px-4 py-3 rounded-lg text-center">
                    ✓ Demande envoyée avec succès ! Nous vous répondons sous 24h.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-gray-100 border-2 border-led-dark text-gray-900 px-4 py-3 rounded-lg text-center">
                    ✗ Erreur lors de l'envoi. Veuillez réessayer.
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-led-dark font-bold text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 w-5 h-5" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  * Champs obligatoires - Nous vous répondons sous 24h
                </p>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Horaires */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Horaires d'ouverture</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Lundi - Jeudi</span>
                    <span className="text-gray-600">9h00 - 12h00 & 13h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Vendredi</span>
                    <span className="text-gray-600">9h00 - 12h00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Samedi</span>
                    <span className="text-gray-600 font-semibold">Fermé</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold text-gray-700">Dimanche</span>
                    <span className="text-gray-600 font-semibold">Fermé</span>
                  </div>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zone d'intervention</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous intervenons dans toute l'Alsace et les régions limitrophes :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-700">Strasbourg et agglomération</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-700">Bas-Rhin (67)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-700">Haut-Rhin (68)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✓</span>
                    <span className="text-gray-700">Régions limitrophes sur demande</span>
                  </li>
                </ul>
              </div>

              {/* Pourquoi nous contacter */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi nous contacter ?</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Devis gratuit et sans engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Conseils personnalisés par nos experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Réponse rapide sous 24h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Visite sur site possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">Plus de 10 ans d'expérience</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => setShowCallbackModal(true)}
                  size="lg"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-led-dark font-bold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Être rappelé
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment nous trouver ?
            </h2>
            <p className="text-xl text-gray-600">
              Notre showroom est situé à Ostwald, près de Strasbourg
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ height: '450px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.8234567890123!2d7.7123456789012345!3d48.5432109876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8a5b1234567%3A0x1234567890abcdef!2s12%20Rue%20Th%C3%A9odore%20Monod%2C%2067540%20Ostwald%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation LED Alsace"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-yellow-500 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Parking gratuit</h4>
                <p className="text-sm text-gray-600">Stationnement facile sur place</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-yellow-500 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Accès PMR</h4>
                <p className="text-sm text-gray-600">Locaux accessibles à tous</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-yellow-500 mb-3">
                  <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Sur rendez-vous</h4>
                <p className="text-sm text-gray-600">Visite conseillée sur RDV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Être rappelé */}
      <CallbackModal 
        isOpen={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
      />
    </div>
  )
}

export default Contact

