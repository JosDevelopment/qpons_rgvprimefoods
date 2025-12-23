// src/constants/content/GlobalConstants.ts

import { getLanguage, subscribeLanguage, type Lang } from "../../lib/i18n";
import type { FooterContentType, HeaderContentType } from "../../types/content/globalTypes";
import { COMPANY_NAME } from "../data";

type GlobalBundle = {
  header: HeaderContentType;
  footer: FooterContentType;
};

const GLOBAL_CONTENT: Record<Lang, GlobalBundle> = {
  en: {
    header: {
      brand: COMPANY_NAME,
      logo: { src: "/img/logo.png", alt: `${COMPANY_NAME} logo` },
      nav: [
        { url: "#benefits", title: "Benefits" },
        { url: "#gallery", title: "Gallery" },
        { url: "#products", title: "Products" },
        { url: "#faq", title: "FAQ" },
        { url: "#contact", title: "Contact" },
      ],
      cta: { url: "#contact", title: "Get in touch" },
    },
    footer: {
      brand: COMPANY_NAME,
      logo: { src: "/img/logo.png", alt: `${COMPANY_NAME} logo` },
      year: new Date().getFullYear(),
    },
  },

  es: {
    header: {
      brand: COMPANY_NAME,
      logo: { src: "/img/logo.png", alt: `${COMPANY_NAME} logo` },
      nav: [
        { url: "#benefits", title: "Beneficios" },
        { url: "#gallery", title: "Galería" },
        { url: "#products", title: "Productos" },
        { url: "#faq", title: "Preguntas" },
        { url: "#contact", title: "Contacto" },
      ],
      cta: { url: "#contact", title: "Cotizar" },
    },
    footer: {
      brand: COMPANY_NAME,
      logo: { src: "/img/logo.png", alt: `${COMPANY_NAME} logo` },
      year: new Date().getFullYear(),
    },
  },
};

function applyGlobalLang(lang: Lang) {
  FALLBACK_HEADER_CONTENT = GLOBAL_CONTENT[lang].header;
  // ojo: el year no necesita cambiar, pero igual lo dejamos ligado al bundle
  FALLBACK_FOOTER_CONTENT = GLOBAL_CONTENT[lang].footer;
}

// live bindings
export let FALLBACK_HEADER_CONTENT: HeaderContentType = GLOBAL_CONTENT[getLanguage()].header;
export let FALLBACK_FOOTER_CONTENT: FooterContentType = GLOBAL_CONTENT[getLanguage()].footer;

subscribeLanguage(() => applyGlobalLang(getLanguage()));


