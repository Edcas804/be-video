import { PropTypes } from "prop-types"
import useApp from "../../context/AppContext"
import Card from "../Card"
import ACTION_TYPES from "../../actions/types"
import { NAMES_MAP } from "../../utils/constants"

const ContentCategoryCard = ({ item }) => {
    const { category, contentDetails, dispatch } = useApp()

    const handledata = (data) => {
        let showOrHidden = contentDetails !== data.id
        dispatch({ type: ACTION_TYPES.CONTENT_DETAILS, payload: data.id })
        dispatch({
            type: ACTION_TYPES.SHOW_CONTENT_DETAILS,
            payload: showOrHidden
        })
        localStorage.setItem("contentDetails", data.id)
    }
    return (
        <Card>
            <div
                className="w-full flex abosolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent hover:brightness-50 p-4 text-white text-center flex-col justify-end items-center gap-2 transition-all duration-300 ease-in-out z-10 relative"
                onClick={() => handledata(item)}
            >
                <h3 className="text-lg font-bold uppercase tracking-widest  ">
                    {item[NAMES_MAP[category]] ?? "NO TIENE"}
                </h3>
                <p className="text-sm font-light tracking-widest">
                    {item.modified && item.modified.substring(0, 10)}
                </p>
            </div>
            <div className="flex w-full h-full absolute ">
                <img
                    src={
                        item.thumbnail
                            ? `${item.thumbnail?.path}.${item.thumbnail?.extension}`
                            : "http://i.annihil.us/u/prod/marvel/i/mg/c/80/51c9ec5e90de1.jpg"
                    }
                    alt={item.name}
                    className="w-full h-full object-cover z-0"
                />
            </div>
        </Card>
    )
}

ContentCategoryCard.propTypes = {
    item: PropTypes.object.isRequired
}
export default ContentCategoryCard
