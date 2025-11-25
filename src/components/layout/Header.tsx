/* eslint-disable no-empty */
'use client';

import React, { useEffect, useState } from "react";
import type { HeaderContentType } from "../../types/content/globalTypes";

interface HeaderProps {
  content: HeaderContentType;
}

// const getInitialDark = () => {
//   if (typeof window === "undefined") return false;
//   try {
//     const saved = localStorage.getItem("theme");
//     if (saved === "dark") return true;
//     if (saved === "light") return false;
//   } catch {}
//   return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
// };

export const Header: React.FC<HeaderProps> = ({ content }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [dark, setDark] = useState(getInitialDark);
  const [dark,] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  // const toggleDark = () => setDark(v => !v);

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
          {/* <button
            type="button"
            onClick={toggleDark}
            aria-label="Cambiar tema"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg hover:bg-surface-2 transition"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition ${
                dark ? "bg-brand" : "bg-muted"
              }`}
            />
            {dark ? "Dark" : "Light"}
          </button> */}

          <a
            href={content.cta.url}
            className="rounded-xl bg-brand px-4 py-2 text-brand-fg font-semibold hover:opacity-90 transition"
          >
            {content.cta.title}
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          {/* <button
            type="button"
            onClick={toggleDark}
            aria-label="Cambiar tema"
            className="rounded-lg border border-border bg-surface p-2 text-fg hover:bg-surface-2 transition"
          >
            {dark ? "🌙" : "☀️"}
          </button> */}

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
