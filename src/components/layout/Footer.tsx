import React from "react";
import type { FooterContentType } from "../../types/content/globalTypes";

interface FooterProps {
  content: FooterContentType;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ content, className = "" }) => {
  return (
    <footer className={`border-t border-border bg-bg ${className}`}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 md:flex-row">
        <div className="flex items-center gap-3 text-muted">
          <img
            src={content.logo.src}
            alt={content.logo.alt || content.brand}
            title={content.logo.title}
            className="h-7 w-7 shrink-0 rounded-md object-contain"
            loading="lazy"
          />
          <span className="text-sm">
            © {content.year} {content.brand}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted">
          {content.social && content.social.map((link, i) => (
            <a key={i} href={link.url} className="hover:text-fg transition">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
