// components/HomeHero.tsx
'use client';

import React from 'react';
import type { HomeHeroContentType } from '../../types/content/homeTypes';

interface HomeHeroProps {
  content: HomeHeroContentType;
  className?: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ content, className = '' }) => {
  const {
    eslogan,
    eslogan2,
    title,
    highlight,
    description,
    image,
    ctaPrimary,
    ctaSecondary,
    badges,
  } = content;

  return (
    <section id="hero" className={`relative overflow-hidden py-20 md:py-24 ${className}`}>
      {/* fondo decorativo (sin cambiar arquitectura) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/60" />
      </div>

      {/* ESLOGAN 1 por encima de TODO (copy + imagen) */}
      {!!eslogan && (
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-8 text-center text-2xl font-extrabold tracking-tight text-fg md:mb-10 md:text-3xl">
            <span className="text-brand">“</span>
            {eslogan.replace(/^“|”$/g, '')}
            <span className="text-brand">”</span>
          </p>
        </div>
      )}

      {/* En móvil: imagen arriba. En md+: copy izquierda, imagen derecha */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
        {/* Image (primero en móvil) */}
        <div className="relative order-1 md:order-2 overflow-visible">
          {/* <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/10 blur-2xl" /> */}

          <div className="overflow-visible rounded-3xl shadow-sm">
            <img
              src={image.src}
              alt={image.alt || 'Hero image'}
              className="h-[220px] w-full object-contain md:h-[400px]"
              loading="eager"
            />
          </div>

          {/* detalle decorativo inferior (sin cambiar layout) */}
          {/* <div
            aria-hidden
            className="mt-4 h-1 w-full rounded-full opacity-60"
            style={{
              background:
                'linear-gradient(90deg, var(--color-barber-1), var(--color-barber-2), var(--color-barber-3))',
            }}
          /> */}
        </div>

        {/* Copy (segundo en móvil) */}
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl text-fg leading-[1.05]">
            {title}{' '}
            <span className="text-brand">{highlight}</span>
          </h1>

          <p className="mt-4 max-w-xl text-base md:text-lg text-muted">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={ctaPrimary.url}
              className="rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-cta-text hover:opacity-90 transition shadow-sm"
            >
              {ctaPrimary.title}
            </a>

            <a
              href={ctaSecondary.url}
              className="rounded-2xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-fg hover:bg-surface-2 transition"
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

          {/* ESLOGAN 2 debajo de badges */}
          {!!eslogan2 && (
            <p className="mt-8 max-w-xl text-xl font-extrabold tracking-tight text-fg md:text-2xl">
              <span className="text-brand">“</span>
              {eslogan2.replace(/^“|”$/g, '')}
              <span className="text-brand">”</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
