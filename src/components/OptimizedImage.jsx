import React from 'react'

/**
 * Composant Image Optimisé pour améliorer le CLS et les performances
 * - Lazy loading natif
 * - Width et height pour éviter les sauts de page
 * - Alt obligatoire pour le SEO
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={className}
      {...props}
    />
  )
}

export default OptimizedImage

