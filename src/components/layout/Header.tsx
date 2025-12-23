/* eslint-disable no-empty */
'use client';

import React, { useEffect, useState } from "react";
import type { HeaderContentType } from "../../types/content/globalTypes";
import { toggleLanguage, useLanguage } from "../../lib/i18n";

interface HeaderProps {
  content: HeaderContentType;
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark,] = useState(true);

  const lang = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  const langAria =
    lang === "es" ? "Switch language to English" : "Cambiar idioma a Español";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/70 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src={content.logo.src}
            alt={content.logo.alt || content.brand}
            title={content.logo.title}
            className="h-12 w-12 shrink-0 rounded-lg object-contain"
            loading="eager"
          />
          <span className="text-lg font-semibold tracking-wide text-fg">
            {content.brand}
          </span>
        </a>

        <nav className="hidden md:flex gap-6">
          {content.nav.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="text-muted hover:text-fg text-sm transition"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switch */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={langAria}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg hover:bg-surface-2 transition"
            title={lang === "es" ? "EN" : "ES"}
          >
            <span className={lang === "es" ? "text-fg font-semibold" : "text-muted"}>
              ES
            </span>
            <span className="text-muted">|</span>
            <span className={lang === "en" ? "text-fg font-semibold" : "text-muted"}>
              EN
            </span>
          </button>

          <a
            href={content.cta.url}
            className="rounded-xl bg-brand px-4 py-2 text-brand-fg font-semibold hover:opacity-90 transition"
          >
            {content.cta.title}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {/* Language switch (mobile) */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={langAria}
            className="rounded-lg border border-border bg-surface px-3 py-2 text-xs text-fg hover:bg-surface-2 transition"
            title={lang === "es" ? "EN" : "ES"}
          >
            <span className={lang === "es" ? "font-semibold" : "text-muted"}>ES</span>
            <span className="mx-1 text-muted">|</span>
            <span className={lang === "en" ? "font-semibold" : "text-muted"}>EN</span>
          </button>

          <button
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Burger open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-bg/95">
          <nav className="px-4 py-4 space-y-2">
            {content.nav.map((link) => (
              <a
                key={link.url}
                href={link.url}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-muted hover:bg-surface-2 hover:text-fg transition"
              >
                {link.title}
              </a>
            ))}

            <a
              href={content.cta.url}
              className="block mt-3 rounded-xl bg-brand px-4 py-2 text-center text-brand-fg font-semibold hover:opacity-90 transition"
              onClick={() => setMobileOpen(false)}
            >
              {content.cta.title}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

function Burger({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={`absolute left-0 top-1 block h-0.5 w-6 bg-fg transition ${
          open ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 block h-0.5 w-6 bg-fg transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-4 block h-0.5 w-6 bg-fg transition ${
          open ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </div>
  );
}
