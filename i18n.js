import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EnTranslation from "./locales/en/en.json";
import ElTranslation from "./locales/el/el.json";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: EnTranslation,
      },
      el: {
        translation: ElTranslation,
      },
    },
  });

export default i18n;
