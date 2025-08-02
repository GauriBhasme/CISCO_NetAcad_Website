import React from 'react';

// ImageWithFallback component props:
// - src: string - the image source URL
// - alt: string - the alt text for the image
// - className: string - CSS classes to apply
// - ...props: any other img element props
export function ImageWithFallback({ src, alt, className = '', ...props }) {
  const handleError = (e) => {
    // Set a fallback image or hide the image on error
    e.target.style.display = 'none';
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}