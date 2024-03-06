import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"

const NotFound = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center h-full">
                    <img src={logo} alt="Error Logo" className="d-block w-20" />

                    <p className="p-3">
                        <strong>
                            404 | No se ha encontrado la página que buscas
                        </strong>
                    </p>

                    <NavLink
                        to={"/"}
                        className="border-2 border-brand-1 text-brand-1 hover:text-brand-2 py-2 px-3 rounded-lg font-bold"
                    >
                        Ir al inicio
                    </NavLink>
                </div>
            </section>
        </>
    )
}
export default NotFound
