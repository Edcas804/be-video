import { useEffect, useState } from "react"
import ContentCategoryCard from "./ContentCategoryCard"
import useApp from "../../context/AppContext"
import { getCategories } from "../../services/api"
import GallerySkeleton from "../skeletons/GallerySkeleton"

const ContentCategory = () => {
    const { category } = useApp()
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (category) {
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
    }, [category])
    return (
        <>
            {loading ? (
                <GallerySkeleton />
            ) : (
                <div className="w-full grid grid-cols-5 xl:grid-cols-8 gap-3 p-3">
                    {categories.map((item, index) => {
                        return <ContentCategoryCard key={index} item={item} />
                    })}
                </div>
            )}
        </>
    )
}

export default ContentCategory
