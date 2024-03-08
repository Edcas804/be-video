import { useTranslation } from "react-i18next"
import Title from "../../components/Title"
import ContentCategory from "../../components/contentCategory/ContentCategory"
import Home from "../../components/home/Home"
import useApp from "../../context/AppContext"

const Main = () => {
    const { t } = useTranslation()
    const { category } = useApp()
    return (
        <article className="w-full">
            <div className="flex flex-col justify-end items-center pb-10 md:pb-40 xl:pb-40 gap-4 w-full flex-wrap hover:cursor-pointer bg-gradient-to-b from-black to-transparent">
                <div className="banner"></div>
                <Title title={t("app.textCategories")} />
                <Home />
            </div>
            <div className="">
                <Title title={category} />
                <ContentCategory />
            </div>
        </article>
    )
}
export default Main
