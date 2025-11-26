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
  title: "Foodservice Product Line.",
  highlight: "Ready-to-Serve.",
  description:
    "Optimize your operation with ready-to-serve barbacoa, pork carnitas, menudo, and pepper pastes. A smart strategy for maximum efficiency and cost savings—standardize quality and significantly increase profitability.",
  image: {
    src: "/img/hero.jpg",
    alt: "Ready-to-serve foodservice products (barbacoa, carnitas) plated with salsas",
  },
  ctaPrimary: { url: "#contacto", title: "Contact us" },
  ctaSecondary: { url: "#precios", title: "See products" },
  badges: ["FDA", "HACCP Certified", "cGMP"],
} as const;

/* =======================
   HomeServices (ENGLISH)
   ======================= */
export const FALLBACK_HOME_SERVICES_CONTENT: HomeServicesContentType = {
  heading: "Operational and Logistical Advantages",
  cta: { url: "#precios", title: "View product line →" },
  items: [
    {
      title: "Savings in Labor and Preparation Time",
      desc:
        "Significantly reduced preparation processes and times—fewer working hours and faster service.",
      img: {
        src: "/img/labor.png",
        alt: "Reduced prep time with ready-to-serve products",
      },
    },
    {
      title: "No Reliance on Specialized Cooks or Chefs",
      desc:
        "No reliance on specialized cooks or chefs. Standardize quality and deliver consistent, guaranteed traditional flavor.",
      img: {
        src: "/img/beef-package.jpg",
        alt: "Standardized ready-to-serve barbacoa for consistent results",
      },
    },
    {
      title: "Products Ready to Heat and Serve",
      desc:
        "Products ready to heat and serve—improve speed of service and keep a consistent professional presentation on every plate.",
      img: {
        src: "/img/vacuum-pork.jpg",
        alt: "Ready-to-heat-and-serve pork carnitas",
      },
    },
    {
      title: "Simple and Easy Storage",
      desc:
        "Simple and Easy storage for smoother distribution and day-to-day operations.",
      img: {
        src: "/img/product-ready.jpg",
        alt: "Foodservice products designed for simple storage and distribution",
      },
    },
  ],
} as const;

/* =======================
   HomeGallary (ENGLISH)
   ======================= */
export const FALLBACK_HOME_GALLARY_CONTENT: HomeGallaryContentType = {
  heading: "Most Popular",
  images: [
    { src: "/img/gallery1.png", alt: "Cheek Meat Barbacoa" },
    { src: "/img/gallery2.png", alt: "Cheek Meat Barbacoa" },
    { src: "/img/gallery3.png", alt: "Cheek Meat Barbacoa" },
    { src: "/img/gallery4.png", alt: "Cheek Meat Barbacoa" },
    { src: "/img/gallery5.png", alt: "Cheek Meat Barbacoa" },
  ],
} as const;

/* =======================
   HomePricing (ENGLISH)
   ======================= */
export const FALLBACK_HOME_PRICING_CONTENT: HomePricingContentType = {
  heading: "Foodservice Product Line (Ready-to-Serve)",
  cta: { url: "#contacto", title: "Request information" },
  plans: [
    {
      name: "Barbacoa (Cheek Meat / Mix 60-40%)",
      price: "Request a quote",
      features: [
        "Cheek Meat & Beef Barbacoa Mix 60-40% — Case: 10 - 12.5 lb.",
        "Barbacoa Cheek Meat — Case: 10 - 12.5 lb.",
        "Ready-to-serve product",
        "Consistent, guaranteed traditional flavor.",
      ],
    },
    {
      name: "Pork Carnitas",
      price: "Request a quote",
      highlight: true,
      badge: "Most Popular",
      features: [
        "Pork Carnitas — Case: 10 - 10.5 lb.",
        "Products ready to heat and serve.",
        "Faster service.",
        "Higher profitability per serving.",
      ],
    },
    {
      name: "Menudo & Pepper Pastes",
      price: "Request a quote",
      features: [
        "Menudo (Beef Tripe Stew) — Case: 10 - 12 lb.",
        "Green Jalapeño Roasted Pepper Paste",
        "Green Jalapeño Pepper Paste • Habanero Pepper Paste",
        "Red Jalapeño Roasted Pepper Paste • Tomatillo Paste",
      ],
    },
  ],
} as const;

/* =======================
   HomeContact (ENGLISH)
   Uses NEW type with labels + contactLinks
   ======================= */

export const FALLBACK_HOME_CONTACT_CONTENT: HomeContactSectionContentType = {
  heading: "For more information",
  intro:
    "Call, WhatsApp, or email us for orders and product information. If you prefer, call us at",
  phone: PHONE.display,

  image: {
    src: "/img/contact.png",
    alt: `${COMPANY_NAME} foodservice products ready-to-serve`,
    title: `${COMPANY_NAME} — We Sell Solutions, You Buy Delicious Results`,
  },

  contactLinks: [
    { url: PHONE.tel, title: PHONE.display },
    { url: PHONE.whatsapp, title: "WhatsApp" },
    { url: `mailto:${EMAIL}`, title: EMAIL },
  ],

  hours: ["Hours: Not listed"],

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
      a: "Products are ready to heat and serve.",
    },
    {
      q: "What are the case weights?",
      a: "Barbacoa (Cheek Meat or Mix 60-40%): Case 10 - 12.5 lb. Pork Carnitas: Case 10 - 10.5 lb. Menudo (Beef Tripe Stew): Case 10 - 12 lb.",
    },
    {
      q: "What pepper pastes do you offer?",
      a: "Green Jalapeño Roasted Pepper Paste, Green Jalapeño Pepper Paste, Habanero Pepper Paste, Red Jalapeño Roasted Pepper Paste, and Tomatillo Paste.",
    },
    {
      q: "How can I contact you for more information?",
      a: `Call us at ${PHONE.display}, message us on WhatsApp, or email ${EMAIL}.`,
    },
  ],
} as const;
