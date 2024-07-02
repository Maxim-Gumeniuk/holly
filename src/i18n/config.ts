import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGB from './locales/en.json';
import frFR from './locales/fr.json';
import geGE from './locales/ge.json';
import spSP from './locales/sp.json';

const defaultLanguage = 'en-GB';

export const defaultNamespace = 'default';

export const resources = {
  en: {
    [defaultNamespace]: enGB,
  },
  fr: {
    [defaultNamespace]: frFR,
  },
  ge: {
    [defaultNamespace]: geGE,
  },
  sp: {
    [defaultNamespace]: spSP,
  },
};

i18n.use(initReactI18next).init({
  defaultNS: defaultNamespace,
  ns: [defaultNamespace],
  resources,
  lng: defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});
