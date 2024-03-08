import { useEffect, useState } from "react"
import ContentCategoryCard from "./ContentCategoryCard"
import useApp from "../../context/AppContext"
import { getCategories } from "../../services/api"
import GallerySkeleton from "../skeletons/GallerySkeleton"
import ContentDetails from "../contentDetails/ContentDetails"

const ContentCategory = ({ favorites = false }) => {
    const { category } = useApp()
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (category && !favorites) {
            setLoading(true)
            setCategories([])
            getCategories({
                category: category
            })
                .then((res) => {
                    setCategories(res)
                    setLoading(false)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        if (favorites) {
            let favorites = JSON.parse(localStorage.getItem("favorites"))
            setCategories(favorites)
        }
    }, [category])
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

export default ContentCategory
