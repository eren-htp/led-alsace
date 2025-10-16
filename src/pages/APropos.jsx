import { Button } from '@/components/ui/button.jsx'
import { Award, Users, Target, Heart, ArrowRight, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { organizationSchema } from '../utils/structuredData.js'

function APropos() {
  const navigate = useNavigate()

  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet avec des matériaux de qualité."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Proximité",
      description: "Une équipe locale à votre écoute, disponible et réactive."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation",
      description: "À la pointe des technologies LED et des nouvelles techniques."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Passion",
      description: "Notre passion se reflète dans chaque réalisation."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="À Propos"
        description="LED Alsace, entreprise alsacienne spécialisée dans les enseignes LED depuis 2014. Atelier de fabrication à Ostwald près de Strasbourg. Savoir-faire français, qualité et réactivité."
        keywords="LED Alsace, entreprise Alsace, fabrication française, atelier Ostwald, histoire LED Alsace, équipe Strasbourg"
        canonicalUrl="https://www.ledalsace.com/a-propos"
        structuredData={organizationSchema}
      />
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/30">
              <span className="text-yellow-400 font-semibold">À Propos</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Votre partenaire de confiance depuis{' '}
              <span className="text-yellow-400">2014</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              LED Alsace est une entreprise alsacienne spécialisée dans la conception, la fabrication et l'installation d'enseignes LED
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre histoire, ancrée en Alsace, tournée vers vos projets
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="leading-relaxed">
                LED Alsace est née de la volonté de proposer des solutions de signalétique modernes, durables et locales. Depuis nos débuts, nous avons accompagné des dizaines de commerçants, artisans, PME et collectivités dans la mise en valeur de leur identité visuelle.
              </p>
              <p className="leading-relaxed">
                De l'enseigne lumineuse à l'adhésif grand format, chaque projet est conçu, fabriqué et posé avec le souci du détail et une exigence de qualité constante. Basés en Alsace, nous maîtrisons l'ensemble de la chaîne de production pour offrir à nos clients un service rapide, fiable et personnalisé.
              </p>
              <p className="leading-relaxed">
                Aujourd'hui, LED Alsace continue d'évoluer, avec une même mission : donner de la visibilité à ceux qui font bouger notre territoire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="text-yellow-500 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Engagements Qualité
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Matériaux certifiés</h3>
                <p className="text-gray-600">Nous utilisons uniquement des matériaux de qualité professionnelle certifiés.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Garantie 2 ans</h3>
                <p className="text-gray-600">Toutes nos réalisations sont garanties 2 ans pièces et main d'œuvre.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Installation professionnelle</h3>
                <p className="text-gray-600">Nos équipes qualifiées assurent une pose dans les règles de l'art.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Service après-vente</h3>
                <p className="text-gray-600">Un SAV réactif et à votre écoute pour toute intervention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
            Prêt à travailler avec nous ?
          </h2>
          <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
            Rejoignez nos centaines de clients satisfaits
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-black hover:bg-gray-900 text-white font-bold text-lg px-8 py-6"
          >
            Nous contacter
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default APropos

