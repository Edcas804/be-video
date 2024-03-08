import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"
import logo from "../../assets/logo.png"
import Theme from "./Theme"
import Language from "./Language"
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid"

const Header = () => {
    const { t } = useTranslation()
    return (
        <header className="sticky top-0 w-full bg-slate-950/90 z-20">
            <nav className="w-full flex justify-between items-center py-3 px-2 sm:px-4">
                <ul className="flex justify-center items-center">
                    <NavLink
                        to={"/"}
                        className="flex justify-center items-center text-gray-200 hover:sepia py-2 px-3 rounded-lg font-bold"
                    >
                        <img src={logo} className="w-8 h-8 invert" alt="logo" />
                        <h1 className="text-bold text-sm md:text-xl ml-2">
                            Be Video
                        </h1>
                    </NavLink>
                </ul>
                <ul className="flex justify-center items-center uppercase">
                    <li>
                        <NavLink
                            to={"/videos"}
                            className="text-xs md:text-sm text-gray-200 hover:sepia px-3 font-bold"
                        >
                            {t("navBar.linkVideos")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/my-list"}
                            className="text-xs md:text-sm text-gray-200 hover:sepia px-3 font-bold uppercase"
                        >
                            {t("navBar.linkMyList")}
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex justify-center items-center">
                    <li>
                        <Language />
                    </li>
                    <li>
                        <Theme />
                    </li>
                    <li>
                        <NavLink
                            to={"/login"}
                            className="flex items-center dark-color-2 hover:sepia px-3 font-bold"
                            title={t("navBar.linkLogin")}
                        >
                            <button>
                                <ArrowRightCircleIcon className="w-6 text-xl text-slate-400" />
                            </button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
