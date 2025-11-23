// =======================
// GLOBAL CONSTANTS (EN)
// =======================

import type { FooterContentType, HeaderContentType } from "../../types/content/globalTypes";
import {
  COMPANY_NAME,
} from "../data";

/* =======================
   Header (ENGLISH)
   ======================= */
export const FALLBACK_HEADER_CONTENT: HeaderContentType = {
  brand: COMPANY_NAME,
  logo: {
    src: "/img/logo.png", // archivo subido
    alt: `${COMPANY_NAME} logo`,
  },
  nav: [
    { url: "#servicios", title: "Benefits" },
    { url: "#galeria", title: "Gallery" },
    { url: "#precios", title: "Products" },
    { url: "#faq", title: "FAQ" },
    { url: "#contacto", title: "Contact" },
  ],
  cta: {
    url: "#contacto",
    title: "Get in touch",
  },
} as const;

/* =======================
   Footer (ENGLISH)
   ======================= */
export const FALLBACK_FOOTER_CONTENT: FooterContentType = {
  brand: COMPANY_NAME,
  logo: {
    src: "/img/logo.png", // archivo subido
    alt: `${COMPANY_NAME} logo`,
  },
  year: new Date().getFullYear(),
  // social: [
  //   { url: COMPANY_INSTAGRAM, title: "Instagram" },
  //   { url: COMPANY_TIKTOK, title: "TikTok" },
  //   { url: COMPANY_FACEBOOK, title: "Facebook" },
  //   { url: COMPANY_X, title: "X (Twitter)" },
  // ],
} as const;
