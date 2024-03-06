import { ToastContainer } from "react-toastify"
import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

const Layout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main className="flex justify-center items-center p-3">
                <Outlet />
                <ToastContainer position="bottom-right" theme="dark" />
            </main>
            <footer className="flex justify-center items-center">
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
