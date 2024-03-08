import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm"

const Login = () => {
    const { t } = useTranslation()
    const [saved, setSaved] = useState(true)
    const [isSend, setIsSend] = useState(false)
    const divForm = useRef(null)
    const navigate = useNavigate()
    //const api = useApi()
    const sendData = (values) => {
        setIsSend(true)

        navigate("/")
        /*
        api.post(`${CONFIG.API.BASE_URL}/product`, values)
            .then((res) => {
                if (res.data.status === 200) {
                    setSaved(true)
                    divForm.current.firstChild.reset()
                    toast.success("Se ha guardado el registro")
                    navigate("/products")
                } else {
                    setSaved(false)
                    setIsSend(false)
                    toast.error("Error guardando los datos")
                }
            })
            .catch((e) => {
                setIsSend(false)
                toast.error(t(`${useApiError(e.message)}`))
            })
            */
    }
    return (
        <section className="w-full h-screen flex justify-center items-center loginForm">
            <div
                ref={divForm}
                className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-black"
            >
                <div className="flex flex-col w-[400px] p-6 shadow rounded-xl bg-slate-950/80">
                    <h3
                        className="text-center text-white text-xl font-bold mb-4"
                        id="title"
                    >
                        {t("app.textLogin")}
                    </h3>
                    <LoginForm
                        dataHandler={sendData}
                        saved={saved}
                        isSend={isSend}
                    />
                </div>
            </div>
        </section>
    )
}

export default Login
