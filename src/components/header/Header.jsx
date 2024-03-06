import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"

const Header = () => {
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
            </nav>
        </header>
    )
}

export default Header
