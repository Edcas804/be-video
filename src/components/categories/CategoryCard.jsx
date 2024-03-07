import { PropTypes } from "prop-types"
import Card from "../Card"
import { useEffect, useState } from "react"
import { getCategories } from "../../services/api"
const categoryDefault = {
    name: "Default",
    description: "This is the default category"
}
const CategoryCard = ({ category = categoryDefault }) => {
    const [endpoint, setEndpoint] = useState(null)
    const handleCategory = (category) => () => {
        console.log("category even", category)
        setEndpoint(category.endpoint)
    }
    useEffect(() => {
        if (endpoint) {
            console.log("consultando endpoint", endpoint)
            getCategories({ category: endpoint }).then((data) => {
                console.log("categories", data)
            })
        }
    }, [endpoint])
    return (
        <Card>
            <div
                className="w-full flex abosolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent hover:brightness-50 p-4 text-white text-center flex-col justify-end items-center gap-2 transition-all duration-300 ease-in-out z-10"
                onClick={handleCategory(category)}
            >
                <h3 className="text-2xl font-bold uppercase tracking-widest  ">
                    {category.name}
                </h3>
                <p className="text-lg font-light tracking-widest">
                    {category.description}
                </p>
            </div>
            <div className="flex w-full h-full absolute ">
                <img
                    src={category.picture}
                    alt={category.name}
                    className="w-full h-full object-cover z-0"
                />
            </div>
        </Card>
    )
}

CategoryCard.propTypes = {
    category: PropTypes.object
}
export default CategoryCard
