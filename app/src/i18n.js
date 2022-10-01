import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationAR from "./lang-json/ar.json";
import translationEn from "./lang-json/en.json";
import translationHe from "./lang-json/he.json";
function toArrayLabel(obj) {
  const array = [];
  for (const key in obj) {
    array.push({
      label: obj[key].label,
      value: key,
    });
  }
  return array;
}

const resources = {
  en: {
    translation: translationEn,
    label: "English",
  },
  ar: {
    translation: translationAR,
    label: "Arabic",
  },
  he: {
    translation: translationHe,
    label: "Heberew",
  },
};
export const languageItems = toArrayLabel(resources);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

function useCustomTranslation() {
  const { t } = useTranslation();
  return { t, i18n };
}

export default useCustomTranslation;
