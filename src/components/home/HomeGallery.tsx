// src/components/home/HomeGallery.tsx
'use client';

import React from 'react';
import MediaGallery from '../ui/MediaGallery';
import type { HomeGalleryContentType } from '../../types/content/homeTypes';

interface HomeGalleryProps {
  content: HomeGalleryContentType;
  className?: string;
}

const HomeGallery: React.FC<HomeGalleryProps> = ({ content, className = '' }) => {
  // Ahora destructuramos 'items' en lugar de 'images'
  const { heading, items } = content;

  // NOTA: Eliminamos el useMemo que transformaba todo a 'image'.
  // Pasamos los items directamente porque ya vienen con el type ('video' o 'image') correcto.

  return (
    <section
      id="gallery"
      className={`relative border-y border-border bg-surface py-20 md:py-24 ${className}`}
    >
      {/* Decor “barber pole” superior sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20 opacity-15"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg,
            var(--color-barber-1) 0 12px,
            var(--color-barber-2) 12px 24px,
            var(--color-barber-3) 24px 36px
          )`,
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-fg">{heading}</h2>
        </div>

        {/* Mosaic + Lightbox + Videos */}
        <MediaGallery items={items} />
      </div>
    </section>
  );
};

export default HomeGallery;