import { Field, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { LoginFormSchema } from "./loginSchema"
import { useTranslation } from "react-i18next"

const loginFormConfig = [
    {
        name: "username",
        type: "text",
        label: "forms.login.usernameLabel"
    },
    {
        name: "password",
        type: "password",
        label: "forms.login.passwordLabel"
    }
]
const initialLoginForm = {
    username: "",
    password: ""
}

const LoginForm = ({
    dataHandler,
    data = {},
    saved = true,
    isSend = false,
    readOnly = false
}) => {
    const { t } = useTranslation()
    const [loginFormValues, setLoginFormValues] = useState(initialLoginForm)
    useEffect(() => {
        if (Object.entries(data).length !== 0) setLoginFormValues(data)
    }, [data])
    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={loginFormValues}
                validationSchema={LoginFormSchema}
                onSubmit={(values) => dataHandler(values)}
            >
                {({ errors, touched }) => (
                    <Form className="w-full flex flex-col ">
                        {loginFormConfig.map((field) => (
                            <div className="" key={field.name}>
                                <Field
                                    name={field.name}
                                    type={field.type}
                                    id={field.name}
                                    placeholder={t(field.label)}
                                    readOnly={readOnly}
                                />
                                {touched[field.name] && errors[field.name] && (
                                    <div className="showErrors">
                                        {t(errors[field.name])}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="col-span-12 flex items-center justify-center py-3 mt-2 border-t border-brand-1">
                            {isSend && (
                                <button type="submit" disabled>
                                    {t("buttonSending")}
                                    <p className="sending">
                                        <i className="bi bi-arrow-clockwise"></i>
                                    </p>
                                </button>
                            )}
                            {!isSend && (
                                <button
                                    type="submit"
                                    disabled={readOnly ?? false}
                                >
                                    {t("buttonSave")}
                                    <i className="bi bi-check2-circle"></i>
                                </button>
                            )}
                            {!saved && (
                                <div className="showErrors">
                                    {t("buttonErrorSending")}
                                </div>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm
