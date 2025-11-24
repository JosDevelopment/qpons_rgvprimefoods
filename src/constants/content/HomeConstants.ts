// =======================
// HOME CONSTANTS (EN)
// =======================

import type {
  HomeContactSectionContentType,
  HomeFaqContentType,
  HomeGallaryContentType,
  HomeHeroContentType,
  HomePricingContentType,
  HomeServicesContentType,
} from "../../types/content/homeTypes";

import { COMPANY_NAME, PHONE, EMAIL } from "../data";

/* =======================
   HomeHero (ENGLISH)
   ======================= */
export const FALLBACK_HOME_HERO_CONTENT: HomeHeroContentType = {
  title: "Authentic slow-cooked meats.",
  highlight: "Ready to serve.",
  description:
    "Traditional Mexican-style beef barbacoa and pork carnitas, fully cooked by specialists, vacuum-sealed and delivered with consistent flavor. Save 8–12 hours of prep, reduce kitchen complexity, and serve faster during peak hours.",
  image: {
    src: "/img/hero.jpg",
    alt: "Ready-to-serve beef barbacoa, shredded and plated",
  },
  ctaPrimary: { url: "#contacto", title: "Contact us" },
  ctaSecondary: { url: "#precios", title: "See products" },
  badges: [
    "Fully cooked • heat & serve",
    "Fresh shelf life: 45 days",
    "Frozen shelf life: 1 year",
  ],
} as const;

/* =======================
   HomeServices (ENGLISH)
   ======================= */
export const FALLBACK_HOME_SERVICES_CONTENT: HomeServicesContentType = {
  heading: "Why Ready-to-Serve Works",
  cta: { url: "#precios", title: "View product specs →" },
  items: [
    {
      title: "Time & Labor Savings",
      desc:
        "Eliminate 8–12 hours of cooking. Your team can focus on service, plating, and customer experience instead of long prep shifts.",
      img: {
        src: "/img/labor.png",
        alt: "Shredded slow-cooked meat ready to serve",
      },
    },
    {
      title: "Operational Simplicity",
      desc:
        "No long or complicated processes to supervise. You don’t need highly specialized cooks to deliver traditional results every day.",
      img: {
        src: "/img/beef-package.jpg",
        alt: "Beef barbacoa packaged and ready for service",
      },
    },
    {
      title: "Consistent Quality & Food Safety",
      desc:
        "Standardized flavor, texture, and doneness every batch. Produced in controlled facilities with full sanitary compliance and traceability.",
      img: {
        src: "/img/vacuum-pork.jpg",
        alt: "Fully cooked pork carnitas in vacuum-sealed packaging",
      },
    },
    {
      title: "Logistics & Scalability",
      desc:
        "Vacuum-sealed, refrigerated product for easy storage and multi-branch distribution. Scale volumes without expanding staff or kitchen space.",
      img: {
        src: "/img/product-ready.jpg",
        alt: "Case-ready product for distribution",
      },
    },
  ],
} as const;

/* =======================
   HomeGallary (ENGLISH)
   ======================= */
export const FALLBACK_HOME_GALLARY_CONTENT: HomeGallaryContentType = {
  heading: "Gallery",
  images: [
    { src: "/img/info_beef_carnitas.jpg", alt: "Beef barbacoa product sheet and packaging" },
    { src: "/img/info_pork_carnitas.jpg", alt: "Pork carnitas product sheet and packaging" },
  ],
} as const;

/* =======================
   HomePricing (ENGLISH)
   ======================= */
export const FALLBACK_HOME_PRICING_CONTENT: HomePricingContentType = {
  heading: "Products & Specs",
  cta: { url: "#contacto", title: "Request wholesale pricing" },
  plans: [
    {
      name: "Beef Barbacoa",
      price: "Request a quote",
      features: [
        "Net weight per unit: ~5–7 lbs",
        "Case net weight: 10.5 lbs (gross 11.3 lbs)",
        "Case dimensions: 18\" × 12\" × 4\"",
        "Fresh shelf life: 45 days | Frozen: 1 year",
      ],
    },
    {
      name: "Pork Carnitas",
      price: "Request a quote",
      highlight: true,
      badge: "Most Popular",
      features: [
        "Fully cooked, traditional Mexican-style carnitas",
        "Net weight per unit: ~5–7 lbs",
        "Case net weight: 10.5 lbs (gross 11.3 lbs)",
        "Fresh shelf life: 45 days | Frozen: 1 year",
      ],
    },
    {
      name: "Distribution Packs",
      price: "Custom volumes",
      features: [
        "90 cases per pallet",
        "9 cases per layer",
        "Vacuum-sealed, keep refrigerated",
        "Ideal for multi-branch restaurants & catering",
      ],
    },
  ],
} as const;

/* =======================
   HomeContact (ENGLISH)
   Uses NEW type with labels + contactLinks
   ======================= */

export const FALLBACK_HOME_CONTACT_CONTENT: HomeContactSectionContentType = {
  heading: "Contact us",
  intro:
    "Reach out and we’ll confirm your order or partnership by WhatsApp. If you prefer, call us at",
  phone: PHONE.display,

  image: {
    src: "/img/contact.png",
    alt: `${COMPANY_NAME} ready-to-serve meats`,
    title: `${COMPANY_NAME} — logistics and distribution`,
  },

  contactLinks: [
    { url: PHONE.tel, title: PHONE.display },
    { url: PHONE.whatsapp, title: "WhatsApp" },
    { url: `mailto:${EMAIL}`, title: EMAIL },
  ],

  hours: ["Mon–Fri: 10:00–20:00", "Sat: 10:00–18:00", "Sun: Closed"],

  // ===== SUCURSALES (OPCIONAL) =====
  // branches: [
  //   {
  //     name: "Monterrey HQ",
  //     address: "Av. Reforma 123, Centro, Monterrey, N.L.",
  //     mapUrl: "https://maps.google.com/?q=Av.+Reforma+123,+Monterrey",
  //     mapIframeSrc:
  //       "https://www.google.com/maps/embed?pb=!1m18!...REPLACE_WITH_REAL_EMBED...",
  //     hours: ["Mon–Fri: 10:00–20:00", "Sat: 10:00–18:00", "Sun: Closed"],
  //     phone: PHONE.display,
  //   },
  //   {
  //     name: "Reynosa Branch",
  //     address: "Blvd. Hidalgo 456, Reynosa, Tamps.",
  //     mapUrl: "https://maps.google.com/?q=Blvd.+Hidalgo+456,+Reynosa",
  //     mapIframeSrc:
  //       "https://www.google.com/maps/embed?pb=!1m18!...REPLACE_WITH_REAL_EMBED...",
  //   },
  // ],

  labels: {
    sectionKicker: "Contact",
    locationTitle: "Locations",
    contactTitle: "Contact",
    hoursTitle: "Hours",
    mapsCtaLabel: "Open in Maps",
    mapIframeTitle: "Map",
    branchNameFallback: "Branch",
  },
} as const;


/* =======================
   HomeFAQ (ENGLISH)
   ======================= */
export const FALLBACK_HOME_FAQ_CONTENT: HomeFaqContentType = {
  heading: "Frequently Asked Questions",
  faqs: [
    {
      q: "How do I prepare your products?",
      a: "They arrive fully cooked, vacuum-sealed, and refrigerated. Just reheat, plate, and serve — no long cooking or supervision needed.",
    },
    {
      q: "What are the weights and case specs?",
      a: "Each unit is ~5–7 lbs. Case net weight is 10.5 lbs (gross 11.3 lbs). Case size is 18\" × 12\" × 4\". Pallets carry 90 cases (9 per layer).",
    },
    {
      q: "How long is the shelf life?",
      a: "Keep refrigerated. Fresh shelf life is 45 days. Frozen shelf life is up to 1 year. Use-by dates are printed on each package.",
    },
    {
      q: "How can I contact you for wholesale pricing?",
      a: `Call us at ${PHONE.display}, message us on WhatsApp, or email ${EMAIL}. We’ll reply with volumes, delivery options, and a custom quote.`,
    },
  ],
} as const;
