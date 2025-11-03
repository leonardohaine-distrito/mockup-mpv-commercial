import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importe seus arquivos de tradução
import enTranslation from "./locales/en/translation.json";
import ptTranslation from "./locales/pt/translation.json";
import esTranslation from "./locales/es/translation.json"; // Import Spanish translation

i18n
  .use(initReactI18next) // Passa i18n para react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
      es: { // Add Spanish resources
        translation: esTranslation,
      },
    },
    lng: "pt", // Idioma padrão
    fallbackLng: "en", // Idioma de fallback caso a tradução não seja encontrada
    interpolation: {
      escapeValue: false, // React já escapa por padrão
    },
  });

export default i18n;