'use client';

import React from 'react';
import type { HomeContactSectionContentType } from '../../types/content/homeTypes';

interface HomeContactProps {
  content: HomeContactSectionContentType;
  className?: string;
}

const HomeContact: React.FC<HomeContactProps> = ({ content, className = '' }) => {
  const {
    heading,
    intro,
    phone,
    image,
    hours,
    branches,
    contactLinks,
    labels,
  } = content;

  const hasLocations = !!branches?.length;

  return (
    <section id="contacto" className={`py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs tracking-wider text-muted uppercase">
            {labels.sectionKicker}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-fg">
            {heading}
          </h2>

          <p className="mt-2 max-w-2xl text-muted">
            {intro}{' '}
            <a className="underline text-fg" href={`tel:${phone}`}>
              {phone}
            </a>
            .
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* LEFT */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid gap-6 sm:grid-cols-2">

              {/* Locations (OPTIONAL) */}
              {hasLocations && (
                <div className="rounded-3xl border border-border bg-surface p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 text-fg">
                        <path d="M12 22s7-6.31 7-12A7 7 0 1 0 5 10c0 5.69 7 12 7 12Z" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                      </svg>
                    </span>

                    <div className="min-w-0 w-full">
                      <h3 className="text-lg font-semibold text-fg">
                        {labels.locationTitle}
                      </h3>

                      <ul className="mt-3 space-y-4 text-sm text-muted">
                        {branches!.map((b, i) => (
                          <li key={`${b.mapUrl}-${i}`} className="space-y-1">
                            <p className="font-semibold text-fg">
                              {b.name || labels.branchNameFallback}
                            </p>
                            <p>{b.address}</p>
                            <a
                              className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2 text-sm text-fg hover:bg-surface-2 transition"
                              target="_blank"
                              rel="noreferrer"
                              href={b.mapUrl}
                            >
                              {labels.mapsCtaLabel}
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-80">
                                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            </a>

                            {/* Branch hours (optional override) */}
                            {(b.hours?.length ?? 0) > 0 && (
                              <ul className="mt-2 grid grid-cols-2 gap-2 text-xs text-muted md:grid-cols-3">
                                {b.hours!.map((h, idx) => (
                                  <li key={idx}>{h}</li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact */}
              <div className="rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 text-fg">
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-fg">
                      {labels.contactTitle}
                    </h3>

                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {contactLinks.map((l) => (
                        <li key={l.url}>
                          <a
                            className="underline text-fg"
                            href={l.url}
                            target={l.url.startsWith('http') ? "_blank" : undefined}
                            rel={l.url.startsWith('http') ? "noreferrer" : undefined}
                          >
                            {l.title ?? l.url}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hours (global) */}
              <div className="sm:col-span-2 rounded-3xl border border-border bg-surface p-6">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-bg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80 text-fg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-fg">
                      {labels.hoursTitle}
                    </h3>

                    <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted md:grid-cols-3">
                      {hours.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Maps (OPTIONAL, multiple iframes) */}
              {hasLocations && (
                <div className="sm:col-span-2 space-y-4">
                  {branches!.map((b, i) => (
                    <div
                      key={`${b.mapIframeSrc}-${i}`}
                      className="overflow-hidden rounded-3xl border border-border bg-surface"
                    >
                      <iframe
                        title={`${labels.mapIframeTitle} — ${b.name || labels.branchNameFallback}`}
                        src={b.mapIframeSrc}
                        className="h-72 w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <aside className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-24">
              <figure className="aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
                <img
                  src={image.src}
                  alt={image.alt ?? ""}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </figure>

              {image.title && (
                <figcaption className="mt-3 text-xs text-muted">
                  {image.title}
                </figcaption>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
