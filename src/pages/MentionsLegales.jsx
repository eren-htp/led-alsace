import SEO from '../components/SEO.jsx'
import { Shield, Lock, Server, User, Link as LinkIcon, Code } from 'lucide-react'

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Mentions Légales - LED Alsace"
        description="Mentions légales, politique de confidentialité et RGPD du site LED Alsace. Informations sur l'éditeur, l'hébergement et la protection des données personnelles."
        keywords="mentions légales, confidentialité, RGPD, protection données, LED Alsace"
        canonicalUrl="https://www.ledalsace.com/mentions-legales"
      />

      {/* Header */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-300">
              Informations légales et politique de confidentialité
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Éditeur */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Éditeur</h2>
              </div>
              <div className="space-y-3 text-gray-800">
                <p className="text-xl font-semibold text-black">LED ALSACE</p>
                <p><span className="font-semibold">RCS Ostwald :</span> 80297827000014</p>
                <p><span className="font-semibold">Siège social :</span> Z.I La Vigie, 12 rue Théodore Monod, 67540 Ostwald</p>
                <p><span className="font-semibold">Téléphone :</span> <a href="tel:+33388044534" className="text-[#F0C724] hover:text-yellow-600 font-semibold">03 88 04 45 34</a></p>
                <p className="mt-4"><span className="font-semibold">Directeur de la publication :</span> DURMUS KOPAR</p>
              </div>
            </div>

            {/* Hébergement */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <Server className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Hébergement</h2>
              </div>
              <p className="text-xl font-semibold text-black">IONOS.fr</p>
            </div>

            {/* Conception du site */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <Code className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Conception et Développement</h2>
              </div>
              <p className="text-xl font-semibold text-black">Netz Informatique</p>
              <p className="text-gray-700 mt-2">Conception, développement et optimisation du site web</p>
            </div>

            {/* Confidentialité */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Confidentialité</h2>
              </div>
              <div className="text-gray-800 space-y-4 leading-relaxed">
                <p>
                  LED ALSACE n'enregistre pas d'informations personnelles permettant l'identification, à l'exception des formulaires que l'utilisateur est libre de remplir. Ces informations ne seront pas utilisées sans votre accord, nous les utiliserons seulement pour vous adresser des courriers, des brochures, des devis ou vous contacter.
                </p>
                <p>
                  Les informations recueillies sur les sites bénéficient de la protection de la loi « Informatique et Libertés » n° 78-17 du 06 janvier 1978. Elles bénéficient d'un droit d'accès, de rectification, d'opposition à communication et de suppression sur simple demande à LED ALSACE, Z.I La Vigie, 12 rue Théodore Monod, 67540 Ostwald.
                </p>
                <p>
                  LED ALSACE pourra procéder à des analyses statistiques sans que celles-ci soient nominatives et pourra en informer des tiers (organismes d'évaluation de fréquentation) sous une forme résumée et non nominative.
                </p>
              </div>
            </div>

            {/* RGPD */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Règlement Général sur la Protection des Données (RGPD)</h2>
              </div>
              <div className="text-gray-800 space-y-4 leading-relaxed">
                <p>
                  LED ALSACE s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site ledalsace.com, soient conformes au règlement général sur la protection des données (RGPD). Chaque formulaire ou téléservice limite la collecte des données personnelles au strict nécessaire (minimisation des données) et indique notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-800">
                  <li>quels sont les objectifs du recueil de ces données,</li>
                  <li>si ces données sont obligatoires ou facultatives pour la gestion de votre demande,</li>
                  <li>qui pourra en prendre connaissance (uniquement LED ALSACE en principe, sauf précision dans le formulaire lorsqu'une transmission à un tiers est nécessaire à la gestion de votre demande).</li>
                </ul>
                <p>
                  Dans une optique de démarche qualité, les appels effectués via le Call Tracking sont susceptibles d'être enregistrés. Ces enregistrements sont pour l'usage de LED ALSACE. Conformément à la réglementation en vigueur, l'utilisateur peut à tout moment demander la suppression de ces enregistrements en en faisant la requête par email à service@linkeo.com et en indiquant la société LED ALSACE.
                </p>
                <p>
                  Les données personnelles recueillies dans le cadre des services proposés sur ledalsace.com sont traitées selon des protocoles sécurisés et permettent à LED ALSACE de gérer les demandes reçues dans ses applications informatiques.
                </p>
                <p>
                  Pour toute information ou exercice de vos droits Informatique et Libertés sur les traitements de données personnelles gérés par LED ALSACE, vous pouvez contacter LED ALSACE et éventuellement son délégué à la protection des données (DPO), ou vous tourner vers la CNIL.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Utilisation de Cookies</h2>
              </div>
              <div className="text-gray-800 space-y-4 leading-relaxed">
                <p>
                  Les cookies permettent d'enregistrer les informations (non personnelles) relatives à la navigation des utilisateurs sur internet. Les cookies déposés par Linkeo ont pour objectif l'amélioration de l'expérience de navigation des visiteurs ainsi que l'optimisation des statistiques. Dès lors que vous les acceptez, ceux-ci ne seront utilisés uniquement dans le cadre de votre navigation sur le site ledalsace.com, et ce pour une durée de 12 mois maximum.
                </p>
              </div>
            </div>

            {/* Liens hypertexte */}
            <div className="mb-12 bg-white rounded-lg shadow-md p-8 border-l-4 border-[#F0C724]">
              <div className="flex items-center mb-6">
                <LinkIcon className="w-8 h-8 text-[#F0C724] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Liens Hypertexte</h2>
              </div>
              <div className="text-gray-800 space-y-4 leading-relaxed">
                <p>
                  LED ALSACE ne contrôle pas les sites en connexion avec le sien, et ne saurait donc être responsable de leur contenu. Les risques liés à l'utilisation de ces sites incombent pleinement à l'utilisateur. Il se conformera à leurs conditions d'utilisation.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-black text-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Nous Contacter</h3>
              <p className="mb-4 text-gray-300">
                Pour toute question concernant ces mentions légales ou l'utilisation de vos données personnelles, vous pouvez nous contacter :
              </p>
              <div className="space-y-2">
                <p><span className="font-semibold">Par téléphone :</span> <a href="tel:+33388044534" className="text-[#F0C724] hover:text-yellow-300 font-semibold">03 88 04 45 34</a></p>
                <p><span className="font-semibold">Par courrier :</span> LED ALSACE, Z.I La Vigie, 12 rue Théodore Monod, 67540 Ostwald</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default MentionsLegales

