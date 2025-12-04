import type { ImageType, LinkType } from "./globalTypes";

// HomeHero
export interface HomeHeroContentType {
  eslogan?: string;
  eslogan2?: string;
  title: string;
  highlight: string;
  description: string;
  image: ImageType;
  ctaPrimary: LinkType;
  ctaSecondary: LinkType;
  badges: string[];
}


// HomeServices 
export interface HomeServiceItem {
  title: string;
  desc: string;
  price?: string;
  img: ImageType;
}

export interface HomeServicesContentType {
  heading: string;
  cta: LinkType;
  items: HomeServiceItem[];
}

// HomeGallary
export interface HomeGallaryContentType {
  heading: string;
  images: ImageType[];
}


// HomePricing
export interface HomePricingPlan {
  badge?:string;
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface HomePricingContentType {
  heading: string;
  plans: HomePricingPlan[];
  cta: LinkType;
}




// HomeContact
export interface HomeContactBranch {
  name: string;            // nombre de sucursal
  address: string;
  mapUrl: string;          // link “Open in Maps”
  mapIframeSrc: string;    // src del iframe embed de Google Maps
  hours?: string[];        // opcional por sucursal
  phone?: string;          // opcional por sucursal (texto display)
}

export interface HomeContactLabels {
  sectionKicker: string;
  locationTitle: string;
  contactTitle: string;
  hoursTitle: string;
  mapsCtaLabel: string;
  mapIframeTitle: string;
  branchNameFallback: string; // usado si una sucursal no trae name
}

export interface HomeContactSectionContentType {
  heading: string;
  intro: string;
  phone: string;

  image: ImageType;

  // Contacto
  contactLinks: LinkType[];

  // Horarios globales (se usan si la sucursal no define hours)
  hours: string[];

  // Ubicación opcional:
  // - si hay branches -> se renderizan
  // - si NO hay branches -> no se muestra ubicación+mapa
  branches?: HomeContactBranch[];

  labels: HomeContactLabels;
}




// HomeFAQ
// homeFaqTypes.ts
export interface FaqItem {
  q: string;
  a: string;
}

export interface HomeFaqContentType {
  heading: string;
  faqs: FaqItem[];
}
