import CategoryCard from "./CategoryCard"
import categories from "../../data/caterories.json"
import useApp from "../../context/AppContext"
import { useEffect } from "react"
import ACTION_TYPES from "../../actions/types"

const Categories = () => {
    const { dispatch } = useApp()
    useEffect(() => {
        localStorage.getItem("category") &&
            dispatch({
                type: ACTION_TYPES.CATEGORY,
                payload: localStorage.getItem("category")
            })
    }, [])
    return (
        <div className="w-full grid grid-cols-5 gap-3">
            {categories.map((category, index) => {
                return <CategoryCard key={index} data={category} />
            })}
        </div>
    )
}

export default Categories
