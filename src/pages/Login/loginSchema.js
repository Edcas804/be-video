import * as Yup from "yup"
export const LoginFormSchema = Yup.object().shape({
    username: Yup.string()
        .min(4, "forms.errors.minLength")
        .max(20, "forms.errors.maxLength")
        .required("forms.errors.required"),
    password: Yup.string()
        .min(10, "forms.errors.minLength")
        .max(15, "forms.errors.maxLength")
        .required("forms.errors.required")
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
            "forms.errors.patternPassword"
        )
})
