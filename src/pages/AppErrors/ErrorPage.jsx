import { useTranslation } from "react-i18next"
import { NavLink, useRouteError } from "react-router-dom"
import logo from "../../assets/logo.png"
import { APP } from "../../config"
const ErrorPage = () => {
    const error = useRouteError()
    const { t } = useTranslation()

    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center h-full">
                    <img src={logo} alt="Error Logo" className="d-block w-20" />

                    <p className="p-3">
                        {APP.DEBUG ? (
                            <strong>
                                <i>
                                    {error.statusCode || 400}|
                                    {error.message || error.statusText}
                                </i>
                            </strong>
                        ) : (
                            <strong>404 | {t("errors.errorUnexpected")}</strong>
                        )}
                    </p>

                    <NavLink
                        to={"/"}
                        className="border-2 border-brand-1 text-brand-1 hover:text-brand-2 py-2 px-3 rounded-lg font-bold"
                    >
                        {t("buttons.buttonHome")}
                    </NavLink>
                </div>
            </section>
        </>
    )
}
export default ErrorPage
