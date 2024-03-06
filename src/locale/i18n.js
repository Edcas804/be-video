import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import es from "./es.json"
import en from "./en.json"
import pt from "./pt.json"

const getCurrentLang = () => {
    let langCode = window.localStorage.getItem("lang_code")
    if (!langCode) {
        const userLocale =
            navigator.languages && navigator.languages.length
                ? navigator.languages[0]
                : navigator.language
        langCode = userLocale.split("-")[0]
    }

    return langCode
}

i18n.use(initReactI18next).init({
    fallbackLng: "es",
    lng: getCurrentLang(),
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: en
        },
        es: {
            translation: es
        },
        pt: {
            translation: pt
        }
    }
})

export default i18n
