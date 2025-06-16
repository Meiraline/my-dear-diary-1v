import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationRu from './ru/translation.json';
import translationEn from './en/translation.json';

const resources = {
  ru: { translation: translationRu },
  en: { translation: translationEn },
};

i18n
  .use(LanguageDetector) // определяет язык (по localStorage, кукам и т.д.)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
