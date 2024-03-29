import { PropTypes } from "prop-types"
import { useEffect, useState } from "react"
import ContentCategoryCard from "./ContentCategoryCard"
import useApp from "../../context/AppContext"
import { getCategories } from "../../services/api"
import GallerySkeleton from "../skeletons/GallerySkeleton"
import ContentDetails from "../contentDetails/ContentDetails"
import { toast } from "react-toastify"
import { useTranslation } from "react-i18next"

const ContentCategory = ({ favorites = false }) => {
    const { t } = useTranslation()
    const { category } = useApp()
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (category && !favorites) {
            setLoading(true)
            setCategories([])
            getCategories({
                category: category,
                limit: 30
            })
                .then((res) => {
                    if (Array.isArray(res) && res.length > 0) {
                        setCategories(res)
                        setLoading(false)
                    } else {
                        toast.warn(t("toast.noData"))
                    }
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [category])
    useEffect(() => {
        if (favorites) {
            let favorites = JSON.parse(localStorage.getItem("favorites"))

            if (Array.isArray(favorites) && favorites.length > 0) {
                setCategories(favorites)
            }
        }
    }, [favorites])
    return (
        <>
            {loading ? (
                <GallerySkeleton />
            ) : (
                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3 p-3 relative">
                    <ContentDetails />
                    {categories.map((item, index) => {
                        return <ContentCategoryCard key={index} item={item} />
                    })}
                </div>
            )}
        </>
    )
}

ContentCategory.propTypes = {
    favorites: PropTypes.bool
}
export default ContentCategory
