import { PropTypes } from "prop-types"
import Card from "../Card"
import useApp from "../../context/AppContext"
import ACTION_TYPES from "../../actions/types"
const dataDefault = {
    name: "Default",
    description: "This is the default category"
}
const CategoryCard = ({ data = dataDefault }) => {
    const { dispatch } = useApp()
    const handledata = (data) => () => {
        dispatch({ type: ACTION_TYPES.CATEGORY, payload: data.endpoint })
        dispatch({ type: ACTION_TYPES.SHOW_CONTENT_DETAILS, payload: false })
        localStorage.setItem("category", data.endpoint)
    }
    return (
        <Card>
            <div
                className="w-full flex abosolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent hover:brightness-50 p-4 text-white text-center flex-col justify-end items-center gap-2 transition-all duration-300 ease-in-out z-10"
                onClick={handledata(data)}
            >
                <h3 className="text-2xl font-bold uppercase tracking-widest  ">
                    {data.name}
                </h3>
                <p className="text-lg font-light tracking-widest">
                    {data.description}
                </p>
            </div>
            <div className="flex w-full h-full absolute ">
                <img
                    src={data.picture}
                    alt={data.name}
                    className="w-full h-full object-cover z-0"
                />
            </div>
        </Card>
    )
}

CategoryCard.propTypes = {
    data: PropTypes.object
}
export default CategoryCard
