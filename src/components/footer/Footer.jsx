import { useTranslation } from "react-i18next"
import { APP } from "../../config"
const Footer = () => {
    const { t } = useTranslation()
    return (
        <div
            role="footer"
            className="w-full bg-brand-1 text-white mt-5 p-4 text-center"
        >
            <i>{t("footer.textCopyright")}</i>
            <p>
                {APP.NAME} - {new Date().getFullYear()}
            </p>
            {` v${APP.VERSION}`}
        </div>
    )
}

export default Footer
