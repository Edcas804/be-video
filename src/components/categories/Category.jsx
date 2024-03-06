import { PropTypes } from "prop-types"
const categoryDefault = {
    name: "Default",
    description: "This is the default category"
}
const Category = ({ category = categoryDefault }) => {
    return (
        <div className="p-2 rounded-lg h-60 border border-transparent hover:border-gray-300 shadow-lg transition-all">
            <h3>{category.name}</h3>
            <p>{category.description}</p>
        </div>
    )
}

Category.propTypes = {
    category: PropTypes.object
}
export default Category
