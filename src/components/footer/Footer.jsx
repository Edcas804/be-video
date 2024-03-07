import { useTranslation } from "react-i18next"
import { APP } from "../../config"
import logo from "../../assets/logo.png"
const Footer = () => {
    const { t } = useTranslation()
    return (
        <div
            role="footer"
            className="w-full bg-brand-1 text-white mt-5 p-4 text-center"
        >
            <div className="flex justify-center items-center gap-2 m-2">
                <img
                    src={logo}
                    alt="Error Logo"
                    className="d-block w-8 h-8 invert"
                />
                <p>{APP.NAME}</p>
            </div>
            <p className="text-sm text-gray-200">
                <i className="m-2">
                    ©{t("footer.textCopyright")} {new Date().getFullYear()}
                </i>
            </p>
        </div>
    )
}

export default Footer
