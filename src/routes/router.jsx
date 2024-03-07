import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/AppErrors/ErrorPage"
import Main from "../pages/Main/Main"
import MainLayout from "../layouts/MainLayout"
import NotFound from "../pages/NotFound/NotFound"
import Login from "../pages/Login/Login"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <Main /> }]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router
