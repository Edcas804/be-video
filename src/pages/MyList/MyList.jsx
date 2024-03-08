import { useTranslation } from "react-i18next"
import Title from "../../components/Title"
import ContentCategory from "../../components/contentCategory/ContentCategory"
import Home from "../../components/home/Home"
import useApp from "../../context/AppContext"

const MyList = () => {
    const { t } = useTranslation()
    return (
        <article className="w-full">
            <div className="">
                <Title title={t("app.textMyList")} />
                <ContentCategory favorites={true} />
            </div>
        </article>
    )
}
export default MyList
