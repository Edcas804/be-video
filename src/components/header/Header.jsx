import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { LANGUAGES } from "../../utils/constants"

const Header = () => {
    const { i18n } = useTranslation()
    const [langCode, setLangCode] = useState(i18n.language)
    const onChangeLang = (e) => {
        const langCode = e.target.value
        localStorage.setItem("lang_code", langCode)
        setLangCode(langCode)
        i18n.changeLanguage(langCode)
    }
    return (
        <header className="w-full">
            <nav className="w-full flex justify-center items-center py-3">
                <NavLink
                    to={"/"}
                    className="flex justify-center items-center text-brand-1 hover:text-brand-2 py-2 px-3 rounded-lg font-bold mainLogo"
                >
                    <img src={logo} className="w-10 h-10" alt="Vite logo" />
                    <h1 className="text-bold text-xl ml-2">Be Video</h1>
                </NavLink>
                <select value={langCode} onChange={onChangeLang}>
                    {LANGUAGES.map(({ code, label }) => (
                        <option key={code} value={code}>
                            {label}
                        </option>
                    ))}
                </select>
            </nav>
        </header>
    )
}

export default Header
