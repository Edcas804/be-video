import { useState } from "react"
import { useTranslation } from "react-i18next"
import { LANGUAGES } from "../../utils/constants"

const Language = () => {
    const { i18n } = useTranslation()
    const [langCode, setLangCode] = useState(i18n.language)
    const handleLang = (e) => {
        const langCode = e.target.value
        localStorage.setItem("lang_code", langCode)
        setLangCode(langCode)
        i18n.changeLanguage(langCode)
    }
    return (
        <select value={langCode} onChange={handleLang}>
            {LANGUAGES.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    )
}

export default Language
