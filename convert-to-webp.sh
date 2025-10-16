#!/bin/bash

# Script de conversion des images en WebP
# Qualité: 85% (bon compromis qualité/poids)

echo "🚀 Conversion des images en WebP..."
echo "=================================="

total=0
converted=0
skipped=0

# Trouver toutes les images JPG, JPEG et PNG
while IFS= read -r file; do
    total=$((total + 1))
    
    # Obtenir le nom sans extension
    filename="${file%.*}"
    
    # Vérifier si le fichier WebP existe déjà
    if [ -f "${filename}.webp" ]; then
        echo "⏭️  Existe déjà: ${file}"
        skipped=$((skipped + 1))
        continue
    fi
    
    # Convertir en WebP
    if cwebp -q 85 "$file" -o "${filename}.webp" > /dev/null 2>&1; then
        echo "✅ Converti: ${file} → ${filename}.webp"
        converted=$((converted + 1))
    else
        echo "❌ Erreur: ${file}"
    fi
done < <(find src/assets -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) 2>/dev/null)

echo ""
echo "=================================="
echo "📊 Résumé:"
echo "   Total d'images trouvées: $total"
echo "   Images converties: $converted"
echo "   Images déjà en WebP: $skipped"
echo "=================================="
