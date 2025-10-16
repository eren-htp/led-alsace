#!/bin/bash

echo "🔄 Mise à jour des imports d'images vers WebP..."
echo "================================================"

# Fichiers à mettre à jour
files=(
  "src/pages/Home.jsx"
  "src/pages/Services.jsx"
  "src/pages/Realisations.jsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "📝 Mise à jour: $file"
    
    # Remplacer .jpg par .webp
    sed -i "s/\.jpg'/\.webp'/g" "$file"
    sed -i 's/\.jpg"/\.webp"/g' "$file"
    
    # Remplacer .jpeg par .webp
    sed -i "s/\.jpeg'/\.webp'/g" "$file"
    sed -i 's/\.jpeg"/\.webp"/g' "$file"
    
    # Remplacer .png par .webp (sauf pour les logos qui sont déjà en PNG)
    sed -i "s/\.png'/\.webp'/g" "$file"
    sed -i 's/\.png"/\.webp"/g' "$file"
    
    echo "   ✅ Terminé"
  fi
done

echo ""
echo "================================================"
echo "✅ Mise à jour des imports terminée !"
