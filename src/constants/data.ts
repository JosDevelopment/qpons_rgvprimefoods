// data.ts  (business constants)

export const COMPANY_NAME = "barber shop"; // cámbialo al nombre real
export const EMAIL = "contact@email.com";

export const PHONE = {
  e164: "+19566385344",
  display: "+1 (956) 638.5344",
  tel: "tel:+19566385344",
  whatsapp: "https://wa.me/19566385344",
} as const;

// Compat (por si algo viejo lo usa)
export const PHONE_NUMBER = PHONE.e164;
export const PHONE_NUMBER_TEXT = PHONE.display;

export const COMPANY_FACEBOOK = "https://www.facebook.com/";
export const COMPANY_INSTAGRAM = "https://www.facebook.com/";
export const COMPANY_X = "https://www.facebook.com/";
export const COMPANY_TIKTOK = "https://www.facebook.com/";
