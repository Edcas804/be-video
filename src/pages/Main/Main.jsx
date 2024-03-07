import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { getCharacters } from "../../services/api"
import Title from "../../components/Title"
import ContentCategory from "../../components/contentCategory/ContentCategory"
import Home from "../../components/home/Home"

const Main = () => {
    const { t } = useTranslation()
    useEffect(() => {
        //getCharacters({}).then((res) => console.log(res))
    }, [])
    return (
        <article className="w-full">
            <div className="flex flex-col justify-end items-center pb-30 md:pb-40 xl:pb-60 gap-4 w-full flex-wrap hover:cursor-pointer min-h-screen">
                <div className="banner"></div>
                <Title title={t("app.textCategories")} />
                <Home />
            </div>
            <div className="">
                <Title title={t("app.textCategories")} />
                <ContentCategory />
            </div>
        </article>
    )
}
export default Main
