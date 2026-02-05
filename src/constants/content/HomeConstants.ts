// src/constants/content/HomeConstants.ts

import type {
  HomeContactSectionContentType,
  HomeFaqContentType,
  HomeGalleryContentType,
  HomeHeroContentType,
  HomePricingContentType,
  HomeServicesContentType,
} from "../../types/content/homeTypes";

import { COMPANY_NAME, PHONE, EMAIL } from "../data";
import type { Lang } from "../../lib/i18n";
import { getLanguage, subscribeLanguage } from "../../lib/i18n";

type HomeBundle = {
  hero: HomeHeroContentType;
  services: HomeServicesContentType;
  gallery: HomeGalleryContentType;
  pricing: HomePricingContentType;
  contact: HomeContactSectionContentType;
  faq: HomeFaqContentType;
};

const HOME_CONTENT: Record<Lang, HomeBundle> = {
  en: {
    hero: {
      eslogan: '“ We Sell Solutions, You Buy Delicious Results ”',
      eslogan2: '“The authentic quality and flavor of Mexico in every bite”',
      title: "Foodservice Product Line.",
      highlight: "Fully Cooked Ready to Heat & Serve.",
      description:
        "Optimize your operation with ready-to-serve barbacoa, pork carnitas, menudo, and pepper pastes. A smart strategy for maximum efficiency and cost savings—standardize quality and significantly increase profitability.",
      image: {
        src: "/img/logo02.png",
        alt: "Ready-to-serve foodservice products (barbacoa, carnitas) plated with salsas",
      },
      ctaPrimary: { url: "#contact", title: "Contact us" },
      ctaSecondary: { url: "#products", title: "See products" },
      badges: ["FDA", "HACCP Certified", "cGMP"],
    },

    services: {
      heading: "Operational and Logistical Advantages",
      cta: { url: "#products", title: "View product line →" },
      items: [
        {
          title: "Savings in Labor and Preparation Time",
          desc:
            "Significantly reduced preparation processes and times—fewer working hours and faster service.",
          img: { src: "/img/labor.png", alt: "Reduced prep time with ready-to-serve products" },
        },
        {
          title: "Sanitary Production & Processing",
          desc:
            "Controlled processing lines with trained staff and stainless-steel equipment to keep quality consistent and meet food-safety standards.",
          img: {
            src: "/img/processing-floor.jpg",
            alt: "Workers processing meat on stainless-steel tables in a food production facility",
          },
        },
        {
          title: "Products Ready to Heat and Serve",
          desc:
            "Products ready to heat and serve—improve speed of service and keep a consistent professional presentation on every plate.",
          img: { src: "/img/vacuum-pork.jpg", alt: "Ready-to-heat-and-serve pork carnitas" },
        },
        {
          title: "Vacuum-Sealed, Chilled Inventory",
          desc:
            "Vacuum-packed proteins and bagged sauces stored under refrigeration for longer shelf life, easy portioning, and batch traceability.",
          img: {
            src: "/img/vacuum-sealed-inventory.jpg",
            alt: "Refrigerated case with vacuum-sealed meat cuts and packaged sauces",
          },
        },
      ],
    },

    gallery: {
      heading: "Most Popular",
      items: [
        {
          type: 'video',
          src: "/video/rgv_nuevo_ingles.mp4",
        },
        {
          type: 'video',
          src: "/video/prepare_fast.mp4",
        },
        { type: 'image', src: "/img/gallery1.png", alt: "Cheek Meat Barbacoa" },
        { type: 'image', src: "/img/gallery2.png", alt: "Cheek Meat Barbacoa" },
        { type: 'image', src: "/img/gallery3.png", alt: "Cheek Meat Barbacoa" },
        { type: 'image', src: "/img/gallery4.png", alt: "Cheek Meat Barbacoa" },
      ],
    },

    pricing: {
      heading: "Foodservice Product Line (Ready-to-Serve)",
      cta: { url: "#contact", title: "Request information" },
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
    },

    contact: {
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
      labels: {
        sectionKicker: "Contact",
        locationTitle: "Locations",
        contactTitle: "Contact",
        hoursTitle: "Hours",
        mapsCtaLabel: "Open in Maps",
        mapIframeTitle: "Map",
        branchNameFallback: "Branch",
      },
    },

    faq: {
      heading: "Frequently Asked Questions",
      faqs: [
        { q: "How do I prepare your products?", a: "Products are ready to heat and serve." },
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
    },
  },

  es: {
    hero: {
      eslogan: '“ Vendemos soluciones, tú compras resultados deliciosos ”',
      eslogan2: "“La auténtica calidad y sabor de México en cada bocado”",
      title: "Línea de productos Foodservice.",
      highlight: "Listos para servir.",
      description:
        "Optimiza tu operación con barbacoa, carnitas de cerdo, menudo y pastas de chile listas para calentar y servir. Una estrategia inteligente para máxima eficiencia y ahorro—estandariza la calidad y aumenta la rentabilidad de forma clara.",
      image: {
        src: "/img/logo02.png",
        alt: "Productos foodservice listos para servir (barbacoa, carnitas) con salsas",
      },
      ctaPrimary: { url: "#contact", title: "Contáctanos" },
      ctaSecondary: { url: "#products", title: "Ver productos" },
      badges: ["FDA", "Certificación HACCP", "cGMP"],
    },

    services: {
      heading: "Ventajas operativas y logísticas",
      cta: { url: "#products", title: "Ver línea de productos →" },
      items: [
        {
          title: "Ahorro en mano de obra y tiempo de preparación",
          desc:
            "Reduce procesos y tiempos de preparación—menos horas de trabajo y servicio más rápido.",
          img: { src: "/img/labor.png", alt: "Menor tiempo de preparación con productos listos" },
        },
        {
          title: "Producción y proceso sanitarios",
          desc:
            "Líneas controladas con personal capacitado y equipo de acero inoxidable para mantener calidad constante y cumplir estándares de inocuidad.",
          img: {
            src: "/img/processing-floor.jpg",
            alt: "Personal procesando carne en mesas de acero inoxidable en planta de alimentos",
          },
        },
        {
          title: "Productos listos para calentar y servir",
          desc:
            "Listos para calentar y servir—mejora la velocidad de servicio y mantiene una presentación profesional consistente en cada plato.",
          img: { src: "/img/vacuum-pork.jpg", alt: "Carnitas de cerdo listas para calentar y servir" },
        },
        {
          title: "Inventario refrigerado y empacado al vacío",
          desc:
            "Proteínas al vacío y salsas embolsadas bajo refrigeración para mayor vida útil, porcionado fácil y trazabilidad por lote.",
          img: {
            src: "/img/vacuum-sealed-inventory.jpg",
            alt: "Vitrina refrigerada con cortes al vacío y salsas empacadas",
          },
        },
      ],
    },

    gallery: {
      heading: "Más populares",
      items: [
        {
          type: 'video',
          src: "/video/rgv_nuevo_español.mp4",
        },
        {
          type: 'video',
          src: "/video/prepare_fast.mp4",
        },
        { type: 'image', src: "/img/gallery1.png", alt: "Barbacoa de cachete" },
        { type: 'image', src: "/img/gallery2.png", alt: "Barbacoa de cachete" },
        { type: 'image', src: "/img/gallery3.png", alt: "Barbacoa de cachete" },
        { type: 'image', src: "/img/gallery4.png", alt: "Barbacoa de cachete" },
      ],
    },

    pricing: {
      heading: "Línea de productos Foodservice (Listos para servir)",
      cta: { url: "#contact", title: "Solicitar información" },
      plans: [
        {
          name: "Barbacoa (Cachete / Mezcla 60-40%)",
          price: "Solicitar cotización",
          features: [
            "Mezcla Barbacoa Cachete y Res 60-40% — Caja: 10 - 12.5 lb.",
            "Barbacoa de Cachete — Caja: 10 - 12.5 lb.",
            "Producto listo para servir",
            "Sabor tradicional consistente y garantizado.",
          ],
        },
        {
          name: "Carnitas de cerdo",
          price: "Solicitar cotización",
          highlight: true,
          badge: "Más popular",
          features: [
            "Carnitas de cerdo — Caja: 10 - 10.5 lb.",
            "Productos listos para calentar y servir.",
            "Servicio más rápido.",
            "Mayor rentabilidad por porción.",
          ],
        },
        {
          name: "Menudo y pastas de chile",
          price: "Solicitar cotización",
          features: [
            "Menudo — Caja: 10 - 12 lb.",
            "Pasta verde de jalapeño rostizado",
            "Pasta verde de jalapeño • Pasta de habanero",
            "Pasta roja de jalapeño rostizado • Pasta de tomatillo",
          ],
        },
      ],
    },

    contact: {
      heading: "Para más información",
      intro:
        "Llámanos, mándanos WhatsApp o escríbenos por correo para pedidos e información. Si prefieres, llámanos al",
      phone: PHONE.display,
      image: {
        src: "/img/contact.png",
        alt: `${COMPANY_NAME} productos foodservice listos para servir`,
        title: `${COMPANY_NAME} — Vendemos soluciones, tú compras resultados deliciosos`,
      },
      contactLinks: [
        { url: PHONE.tel, title: PHONE.display },
        { url: PHONE.whatsapp, title: "WhatsApp" },
        { url: `mailto:${EMAIL}`, title: EMAIL },
      ],
      hours: ["Horario: No listado"],
      labels: {
        sectionKicker: "Contacto",
        locationTitle: "Ubicaciones",
        contactTitle: "Contacto",
        hoursTitle: "Horario",
        mapsCtaLabel: "Abrir en Maps",
        mapIframeTitle: "Mapa",
        branchNameFallback: "Sucursal",
      },
    },

    faq: {
      heading: "Preguntas frecuentes",
      faqs: [
        { q: "¿Cómo preparo sus productos?", a: "Solo calienta y sirve." },
        {
          q: "¿Cuánto pesa cada caja?",
          a: "Barbacoa (Cachete o Mezcla 60-40%): Caja 10 - 12.5 lb. Carnitas: Caja 10 - 10.5 lb. Menudo: Caja 10 - 12 lb.",
        },
        {
          q: "¿Qué pastas de chile manejan?",
          a: "Pasta verde de jalapeño rostizado, pasta verde de jalapeño, pasta de habanero, pasta roja de jalapeño rostizado y pasta de tomatillo.",
        },
        {
          q: "¿Cómo los contacto para más información?",
          a: `Llámanos al ${PHONE.display}, mándanos WhatsApp o escribe a ${EMAIL}.`,
        },
      ],
    },
  },
};

function applyHomeLang(lang: Lang) {
  const bundle = HOME_CONTENT[lang];
  FALLBACK_HOME_HERO_CONTENT = bundle.hero;
  FALLBACK_HOME_SERVICES_CONTENT = bundle.services;
  FALLBACK_HOME_GALLERY_CONTENT = bundle.gallery;
  FALLBACK_HOME_PRICING_CONTENT = bundle.pricing;
  FALLBACK_HOME_CONTACT_CONTENT = bundle.contact;
  FALLBACK_HOME_FAQ_CONTENT = bundle.faq;
}

// ===== Exports "compatibles" con tu código actual =====
// (son live bindings; cambian cuando cambias el idioma)
export let FALLBACK_HOME_HERO_CONTENT: HomeHeroContentType = HOME_CONTENT[getLanguage()].hero;
export let FALLBACK_HOME_SERVICES_CONTENT: HomeServicesContentType = HOME_CONTENT[getLanguage()].services;
export let FALLBACK_HOME_GALLERY_CONTENT: HomeGalleryContentType = HOME_CONTENT[getLanguage()].gallery;
export let FALLBACK_HOME_PRICING_CONTENT: HomePricingContentType = HOME_CONTENT[getLanguage()].pricing;
export let FALLBACK_HOME_CONTACT_CONTENT: HomeContactSectionContentType = HOME_CONTENT[getLanguage()].contact;
export let FALLBACK_HOME_FAQ_CONTENT: HomeFaqContentType = HOME_CONTENT[getLanguage()].faq;

// subscribe: cuando cambia el idioma, actualiza exports
subscribeLanguage(() => applyHomeLang(getLanguage()));

