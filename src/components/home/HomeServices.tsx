// components/HomeServices.tsx
'use client';

import React from 'react';
import type { HomeServicesContentType } from '../../types/content/homeTypes';

interface HomeServicesProps {
  content: HomeServicesContentType;
  className?: string;
}

const HomeServices: React.FC<HomeServicesProps> = ({ content, className = '' }) => {
  const { heading, cta, items } = content;

  return (
    <section id="benefits" className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold text-fg">{heading}</h2>
          <a href={cta.url} className="text-sm text-brand-muted hover:text-fg transition">
            {cta.title}
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-3xl border border-border bg-surface transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={s.img.src}
                  alt={s.img.alt || s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {/* Precio en badge acento */}
                {s.price && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent-solid/90 px-3 py-1 text-xs font-bold text-accent-fg shadow">
                    {s.price}
                  </span>
                )}
              </div>

              <div className="space-y-2 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-fg">{s.title}</h3>

                  {/* Precio secundario (desktop) */}
                  {s.price && (
                    <span className="hidden rounded-full border border-accent-solid px-2 py-0.5 text-xs font-semibold text-muted md:inline">
                      {s.price}
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted">{s.desc}</p>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
