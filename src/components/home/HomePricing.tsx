// HomePricing.tsx
'use client';

import React from 'react';
import type { HomePricingContentType } from '../../types/content/homeTypes';

interface HomePricingProps {
  content: HomePricingContentType;
  className?: string;
}

const HomePricing: React.FC<HomePricingProps> = ({ content, className = '' }) => {
  const { heading, plans, cta } = content;

  return (
    <section id="products" className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-3xl font-bold text-fg">{heading}</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border p-6 transition hover:shadow-xl ${
                p.highlight
                  /* Highlight: mismo layout, solo cambia tono + borde marca */
                  ? 'bg-surface-2 border-brand-strong text-fg'
                  /* Normal */
                  : 'bg-surface border-border text-fg'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-4 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-fg shadow">
                  {p.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-brand">{p.price}</p>

              <ul className="mt-6 space-y-2 text-sm text-muted">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-current/60" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={cta.url}
                className={`mt-6 inline-block w-full rounded-xl px-4 py-2 text-center font-semibold transition hover:opacity-90 ${
                  p.highlight
                    /* Highlight CTA: sólido marca */
                    ? 'bg-brand text-cta-text'
                    /* Normal CTA: neutro con borde, sin gritar */
                    : 'bg-bg text-fg border border-border hover:bg-surface-2'
                }`}
              >
                {cta.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
