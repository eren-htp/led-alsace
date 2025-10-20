/**
 * Script pour générer le sitemap.xml du site LED Alsace
 * À exécuter avec: node scripts/generate-sitemap.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://www.ledalsace.com'
const currentDate = new Date().toISOString().split('T')[0]

// Liste des URLs du site avec leurs propriétés
const urls = [
  // Pages principales
  { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: currentDate },
  { loc: '/services', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
  { loc: '/realisations', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/nos-clients', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/a-propos', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/catalogue', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/contact', priority: '0.9', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/mentions-legales', priority: '0.5', changefreq: 'yearly', lastmod: currentDate },
  
  // Pages de services détaillées
  { loc: '/services/enseignes', priority: '0.9', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/marquage-vitrine', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/impression-grand-format', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/marquage-vehicule', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/textile-epi', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/signaletique', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/creation-graphique', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/neon-led', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/impression-papier', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/objets-publicitaires', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/vitrophanie', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/decoupe-laser', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/decoupe-cnc', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/enseigne-dibond', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/totems-lumineux', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/enseigne-drapeau', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/caisson-ajoure', priority: '0.6', changefreq: 'monthly', lastmod: currentDate },
  { loc: '/services/ecrans-led', priority: '0.7', changefreq: 'monthly', lastmod: currentDate }
]

// Générer le contenu XML du sitemap
function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
  xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n'
  xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n'
  xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n'
  
  urls.forEach(url => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}${url.loc}</loc>\n`
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`
    xml += `    <priority>${url.priority}</priority>\n`
    xml += '  </url>\n'
  })
  
  xml += '</urlset>'
  
  return xml
}

// Écrire le sitemap dans le dossier public
function writeSitemap() {
  const sitemapContent = generateSitemap()
  const publicDir = path.join(__dirname, '..', 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  
  // Créer le dossier public s'il n'existe pas
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  // Écrire le fichier
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8')
  
  console.log('✅ Sitemap généré avec succès !')
  console.log(`📁 Emplacement: ${sitemapPath}`)
  console.log(`📊 Nombre d'URLs: ${urls.length}`)
}

// Exécuter le script
writeSitemap()

