import CategoryCard from "./CategoryCard"
import categories from "../../data/caterories.json"

const Categories = () => {
    return (
        <div className="w-full grid grid-cols-5 gap-3">
            {categories.map((category, index) => {
                return <CategoryCard key={index} category={category} />
            })}
        </div>
    )
}

export default Categories
