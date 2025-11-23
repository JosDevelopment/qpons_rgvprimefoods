// HomeFaq.tsx
'use client';

import React, { useRef, useState } from 'react';
import type { HomeFaqContentType } from "../../types/content/homeTypes";

interface HomeFaqProps {
  content: HomeFaqContentType;
  className?: string;
}

const HomeFaq: React.FC<HomeFaqProps> = ({ content, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const el = panelsRef.current[i];
    if (el) {
      const h = el.scrollHeight;
      setHeights(prev => {
        const next = prev.slice();
        next[i] = h;
        return next;
      });
    }
    setOpenIndex(prev => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      className={`border-t border-border py-20 md:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-fg">
          {content.heading}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {content.faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const maxH = isOpen ? (heights[i] ?? 0) : 0;

            return (
              <div
                key={i}
                className={`rounded-2xl border border-border bg-surface p-5 transition-colors ${
                  isOpen ? 'bg-surface-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="cursor-pointer flex w-full items-center justify-between gap-3 text-left text-base font-semibold text-brand"
                >
                  <span>{f.q}</span>
                  <span
                    className={`text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  ref={(el) => { panelsRef.current[i] = el; }}  // <-- void OK
                  style={{ maxHeight: `${maxH}px` }}
                  className="overflow-hidden transition-[max-height] duration-300 ease-out"
                >
                  <div
                    className={`pt-2 text-sm text-muted transition-[opacity,transform] duration-200 ease-out ${
                      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    }`}
                  >
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
