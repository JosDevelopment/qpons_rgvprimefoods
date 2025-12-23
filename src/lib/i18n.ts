/* eslint-disable no-empty */
// src/lib/i18n.ts
import { useSyncExternalStore } from "react";

export type Lang = "es" | "en";

const STORAGE_KEY = "lang";

const listeners = new Set<() => void>();

// ✅ default: EN
let currentLang: Lang = "en";

function isLang(v: unknown): v is Lang {
  return v === "es" || v === "en";
}

function readStoredLang(): Lang {
  // ✅ default: EN
  if (typeof window === "undefined") return "en";
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (isLang(raw)) return raw;
  } catch {}
  return "en";
}

// init
if (typeof window !== "undefined") {
  currentLang = readStoredLang();
  try {
    document.documentElement.setAttribute("lang", currentLang);
  } catch {}

  // sync multi-tab
  window.addEventListener("storage", (e) => {
    if (e.key !== STORAGE_KEY) return;
    if (!isLang(e.newValue)) return;
    if (e.newValue === currentLang) return;

    currentLang = e.newValue;
    try {
      document.documentElement.setAttribute("lang", currentLang);
    } catch {}

    listeners.forEach((l) => l());
  });
}

export function getLanguage(): Lang {
  return currentLang;
}

export function setLanguage(lang: Lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    try {
      document.documentElement.setAttribute("lang", lang);
    } catch {}
  }

  listeners.forEach((l) => l());
}

export function toggleLanguage() {
  setLanguage(currentLang === "es" ? "en" : "es");
}

export function subscribeLanguage(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useLanguage(): Lang {
  // ✅ server snapshot: EN
  return useSyncExternalStore(subscribeLanguage, getLanguage, () => "en");
}
