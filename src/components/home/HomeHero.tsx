// components/HomeHero.tsx
'use client';

import React from 'react';
import type { HomeHeroContentType } from '../../types/content/homeTypes';

interface HomeHeroProps {
  content: HomeHeroContentType;
  className?: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ content, className = '' }) => {
  const { title, highlight, description, image, ctaPrimary, ctaSecondary, badges } = content;

  return (
    <section id="inicio" className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
        {/* Copy */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-fg">
            {title}{' '}
            <span className="text-brand">{highlight}</span>
          </h1>

          <p className="mt-4 max-w-xl text-base md:text-lg text-muted">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={ctaPrimary.url}
              className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-cta-text hover:opacity-90 transition"
            >
              {ctaPrimary.title}
            </a>

            <a
              href={ctaSecondary.url}
              className="rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-fg hover:bg-surface-2 transition"
            >
              {ctaSecondary.title}
            </a>
          </div>

          {!!badges?.length && (
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
            <img
              src={image.src}
              alt={image.alt || 'Hero image'}
              className="h-[420px] w-full object-cover md:h-[520px]"
              loading="eager"
            />
          </div>

          {/* detalle decorativo inferior (sin cambiar layout) */}
          <div
            aria-hidden
            className="mt-4 h-1 w-full rounded-full opacity-60"
            style={{
              background:
                'linear-gradient(90deg, var(--color-barber-1), var(--color-barber-2), var(--color-barber-3))',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
