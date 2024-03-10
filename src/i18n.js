import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import pt from "./translation/pt.json";
import es from "./translation/es.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    pt: {
      translation: pt,
    },
  },
});

export default i18n;
