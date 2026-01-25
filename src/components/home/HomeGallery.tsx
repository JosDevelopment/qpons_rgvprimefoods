// HomeGallery.tsx
'use client';

import React, { useMemo } from 'react';
import MediaGallery from '../ui/MediaGallery';
import type { HomeGalleryContentType } from '../../types/content/homeTypes';
import type { TemplateMediaType } from '../../types/content/globalTypes';

interface HomeGalleryProps {
  content: HomeGalleryContentType;
  className?: string;
}

/**
 * Galería profesional + Lightbox:
 * - mismo layout
 * - colores via tokens semánticos (bg/text/border) + barber vars
 */
const HomeGallery: React.FC<HomeGalleryProps> = ({ content, className = '' }) => {
  const { heading, images } = content;

  const items = useMemo<TemplateMediaType[]>(
    () =>
      images.map(
        (img) =>
          ({
            type: 'image',
            src: img.src,
            alt: img.alt ?? '',
            title: img.title ?? img.alt ?? '',
          } as unknown as TemplateMediaType)
      ),
    [images]
  );

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
          <span className="hidden h-[3px] w-32 rounded-full bg-gradient-to-r from-brand-strong via-accent-solid to-brand-strong md:inline-block" />
        </div>

        {/* Mosaic + Lightbox */}
        <MediaGallery items={items} />
      </div>
    </section>
  );
};

export default HomeGallery;
