import { useTranslation } from "react-i18next"
import Title from "../../components/Title"
import ContentCategory from "../../components/contentCategory/ContentCategory"

const Videos = () => {
    const { t } = useTranslation()
    return (
        <article className="w-full">
            <div className="">
                <Title title={t("app.textVideos")} />
                <ContentCategory />
            </div>
        </article>
    )
}
export default Videos
