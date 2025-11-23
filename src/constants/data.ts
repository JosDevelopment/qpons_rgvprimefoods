// data.ts  (business constants)

export const COMPANY_NAME = "barber shop"; // cámbialo al nombre real
export const EMAIL = "contact@email.com";

export const PHONE = {
  e164: "+11234567890",               // canónico (E.164)
  display: "+1 (123) 456-7890",       // lo que ve el usuario
  tel: "tel:+11234567890",            // link directo
  whatsapp: "https://wa.me/11234567890", // sin "+"
} as const;

// Compat (por si algo viejo lo usa)
export const PHONE_NUMBER = PHONE.e164;
export const PHONE_NUMBER_TEXT = PHONE.display;

export const COMPANY_FACEBOOK = "https://www.facebook.com/";
export const COMPANY_INSTAGRAM = "https://www.facebook.com/";
export const COMPANY_X = "https://www.facebook.com/";
export const COMPANY_TIKTOK = "https://www.facebook.com/";
