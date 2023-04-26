import en from './translations/en.json';
import ar from './translations/ar.json';
import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
export const defaultNS = 'en'
export const resources = {
  en: {
    en,
    ar,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['en', 'ar'],
  defaultNS,
  resources,
});