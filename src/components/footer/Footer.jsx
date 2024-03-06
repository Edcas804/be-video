import { APP } from "../../config"
const Footer = () => {
    return (
        <div
            role="footer"
            className="w-full bg-brand-1 text-white mt-5 p-4 text-center"
        >
            <i>Todos los derechos reservados</i>
            <p>
                {APP.NAME} - {new Date().getFullYear()}
            </p>
            {` v${APP.VERSION}`}
        </div>
    )
}

export default Footer
