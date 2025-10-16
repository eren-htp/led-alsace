/**
 * Script de pré-rendu pour améliorer le SEO
 * Génère des versions HTML statiques des pages principales
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Template HTML de base avec structure SEO
const generateHTML = (route, title, description, h1, content) => {
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpeg" href="/favicon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.ledalsace.com${route}" />
  </head>
  <body>
    <div id="root">
      <!-- Contenu pré-rendu pour le SEO -->
      <main>
        <h1>${h1}</h1>
        ${content}
      </main>
    </div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
}

// Configuration des pages à pré-rendre
const pages = [
  {
    route: '/',
    title: 'LED Alsace - Spécialiste Enseigne LED & Signalétique en Alsace',
    description: 'LED Alsace, spécialiste des enseignes LED et de la signalétique en Alsace depuis 2014. Fabrication française à Ostwald près de Strasbourg. Devis gratuit en 24h.',
    h1: 'Enseignes LED et Signalétique sur Mesure en Alsace',
    content: `
      <h2>Spécialiste des Enseignes LED depuis 2014</h2>
      <p>LED Alsace conçoit, fabrique et installe des enseignes LED lumineuses, de la signalétique et du marquage véhicule pour les entreprises en Alsace.</p>
      <h2>Nos Solutions</h2>
      <ul>
        <li>Enseignes LED lumineuses</li>
        <li>Signalétique intérieure et extérieure</li>
        <li>Marquage véhicule</li>
        <li>Impression grand format</li>
        <li>Création graphique</li>
      </ul>
    `
  },
  {
    route: '/services',
    title: 'Nos Solutions | LED Alsace',
    description: 'Découvrez toutes nos solutions professionnelles : enseignes LED, signalétique, marquage véhicule, impression grand format, création graphique. Fabrication française en Alsace.',
    h1: 'Nos Solutions de Signalétique et Enseignes LED',
    content: `
      <h2>Solutions Complètes pour Votre Visibilité</h2>
      <p>LED Alsace vous propose une gamme complète de solutions pour valoriser votre entreprise.</p>
    `
  },
  {
    route: '/contact',
    title: 'Contact | LED Alsace',
    description: 'Contactez LED Alsace pour votre projet d\'enseigne LED ou de signalétique. Devis gratuit en 24h. Atelier à Ostwald près de Strasbourg.',
    h1: 'Contactez LED Alsace pour Votre Projet',
    content: `
      <h2>Demandez Votre Devis Gratuit</h2>
      <p>Notre équipe vous répond sous 24h pour étudier votre projet d'enseigne LED ou de signalétique.</p>
    `
  }
]

// Fonction pour créer les fichiers HTML pré-rendus
function prerenderPages() {
  const distDir = path.join(__dirname, 'dist')
  
  pages.forEach(page => {
    const html = generateHTML(page.route, page.title, page.description, page.h1, page.content)
    
    let filePath
    if (page.route === '/') {
      filePath = path.join(distDir, 'index.html')
    } else {
      const routeDir = path.join(distDir, page.route.substring(1))
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true })
      }
      filePath = path.join(routeDir, 'index.html')
    }
    
    fs.writeFileSync(filePath, html, 'utf8')
    console.log(`✅ Pré-rendu créé: ${page.route}`)
  })
  
  console.log(`\n🎉 ${pages.length} pages pré-rendues avec succès!`)
}

// Exécuter le pré-rendu
prerenderPages()

