import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/AppErrors/ErrorPage"
import Main from "../pages/Main/Main"
import MainLayout from "../layouts/MainLayout"
import NotFound from "../pages/NotFound/NotFound"
import Login from "../pages/Login/Login"
import MyList from "../pages/MyList/MyList"
import Videos from "../pages/Videos/Videos"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Main /> },
            {
                path: "/my-list",
                element: <MyList />
            },
            {
                path: "/videos",
                element: <Videos />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router
