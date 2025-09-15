import React from 'react';

/**
 * FullscreenBackground
 * --------------------
 * A single-file React component for Vite apps using TailwindCSS.
 * Features:
 * - Full-viewport background image that covers the page container
 * - <picture> + srcSet support for responsive images
 * - Lazy loading (unless `priority=true`)
 * - Accessible: accepts alt text and falls back to background color
 *
 * Usage example (see bottom of file) — drop into a Vite + React + Tailwind project.
 */

interface SrcSetItem {
  src: string;
  media: string;
}

interface FullscreenBackgroundProps {
  imageSrc: string;
  srcSet?: SrcSetItem[];
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  fallbackColor?: string;
}

export default function FullscreenBackground({
  imageSrc,
  srcSet, // optional: array of {src, media}
  alt = '',
  children = null,
  className = '',
  style = {},
  priority = false, // if true, image is not lazy-loaded (useful for above-the-fold hero)
  fallbackColor = '#fff', // background color while image loads
}: FullscreenBackgroundProps) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
      style={{ backgroundColor: fallbackColor, ...style }}
      aria-label={alt || undefined}
    >
      {/* Background layer (semantic: decorative image) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <picture className="block w-full h-full">
          {Array.isArray(srcSet)
            ? srcSet.map((s, i) => (
                <source key={i} srcSet={s.src} media={s.media} />
              ))
            : null}

          {/* img is decorative — keep empty alt if purely decorative */}
          <img
            src={imageSrc}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </picture>
      </div>

      {/* Content slot (page container) */}
      <div className="relative z-10 min-h-screen w-full flex flex-col">
        {/* A small content wrapper to keep comfortable reading width */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-16">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ------------------------- Usage Example -------------------------

// App.jsx
import React from 'react'
import FullscreenBackground from './FullscreenBackground'

export default function App(){
  return (
    <FullscreenBackground
      imageSrc="/images/hero-1200.jpg"
      srcSet={[
        { src: '/images/hero-480.jpg', media: '(max-width: 639px)' },
        { src: '/images/hero-768.jpg', media: '(min-width: 640px) and (max-width: 1023px)' },
        { src: '/images/hero-1200.jpg', media: '(min-width: 1024px)' },
      ]}
      alt="Wide landscape with mountains"
    >
      <header className="text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold">Welcome</h1>
        <p className="mt-4 max-w-2xl">Beautiful full-screen background for your Vite + React app.</p>
      </header>
    </FullscreenBackground>
  )
}

// Notes:
// - Requires TailwindCSS classes to work. If you don't use Tailwind, swap classes for your CSS.
// - For best performance provide multiple image sizes and use a modern image CDN (optional).
// - For accessibility: if image conveys important meaning, pass a descriptive `alt`. If purely decorative, pass alt="".

// --------------------------------------------------------------------*/
