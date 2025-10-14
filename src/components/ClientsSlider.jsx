import { useEffect, useState } from 'react'

// Import des logos
import logoAreal from '@/assets/logos-clients/areal.jpg'
import logoCGV from '@/assets/logos-clients/LogoCGV.png'
import logoCalitech from '@/assets/logos-clients/calitech.jpg'
import logoCitroen from '@/assets/logos-clients/citroen.jpg'
import logoIstikbal from '@/assets/logos-clients/istikbal.jpg'
import logoLeFive from '@/assets/logos-clients/lefive.jpg'
import logoMarco from '@/assets/logos-clients/marco.jpg'
import logoMetro from '@/assets/logos-clients/metro.jpg'
import logoRenault from '@/assets/logos-clients/renault.jpg'
import logoSNCF from '@/assets/logos-clients/sncf.jpg'
import logoBlackWhite from '@/assets/logos-clients/LogoBlackandwhite.png'
import logoSaturn from '@/assets/logos-clients/LogoSAturn.png'
import logoKS from '@/assets/logos-clients/logo-KS-groupe-noir.png'
import logoFivePlus from '@/assets/logos-clients/LogoFivePlus.png'
import logoFranceSolar from '@/assets/logos-clients/LogoFranceSolar.png'
import logoAntoni from '@/assets/logos-clients/LogoANtoniVoyage.png'

const logos = [
  { src: logoSNCF, alt: 'SNCF' },
  { src: logoRenault, alt: 'Renault' },
  { src: logoCitroen, alt: 'Citroën' },
  { src: logoMetro, alt: 'Métro' },
  { src: logoCGV, alt: 'CGV' },
  { src: logoAreal, alt: 'Aréal' },
  { src: logoCalitech, alt: 'Calitech' },
  { src: logoIstikbal, alt: 'Istikbal' },
  { src: logoLeFive, alt: 'Le Five' },
  { src: logoMarco, alt: 'Marco Pièces Auto' },
  { src: logoBlackWhite, alt: 'Black and White' },
  { src: logoSaturn, alt: 'Saturn' },
  { src: logoKS, alt: 'KS Groupe' },
  { src: logoFivePlus, alt: 'Five Plus' },
  { src: logoFranceSolar, alt: 'France Solar' },
  { src: logoAntoni, alt: 'Antoni Voyages' }
]

function ClientsSlider() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Ils nous font <span className="text-yellow-500">confiance</span>
        </h2>
      </div>

      <div className="relative">
        {/* Gradient fade sur les côtés */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* Container du slider avec animation */}
        <div 
          className="flex gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Premier set de logos */}
          <div className={`flex gap-12 items-center ${isPaused ? '' : 'animate-scroll'}`}>
            {logos.map((logo, index) => (
              <div 
                key={`logo-1-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Deuxième set de logos (duplication pour effet infini) */}
          <div className={`flex gap-12 items-center ${isPaused ? '' : 'animate-scroll'}`}>
            {logos.map((logo, index) => (
              <div 
                key={`logo-2-${index}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default ClientsSlider
