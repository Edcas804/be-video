import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import useApp from "../../context/AppContext"
import { getDetail } from "../../services/api"
import { NAMES_MAP } from "../../utils/constants"
import { XMarkIcon } from "@heroicons/react/20/solid"
import ACTION_TYPES from "../../actions/types"
import { PlayCircleIcon, StarIcon } from "@heroicons/react/20/solid"
import { toast } from "react-toastify"

const ContentDetails = () => {
    const { t } = useTranslation()
    const { contentDetails, category, showContentDetails, dispatch } = useApp()
    const [content, setContent] = useState({})
    const { addFavorite } = useApp()
    const showDetails = (show) => {
        dispatch({
            type: ACTION_TYPES.SHOW_CONTENT_DETAILS,
            payload: show
        })
    }
    const handleFavorite = (item) => {
        console.log(addFavorite)
        let favorites = [...addFavorite, item]
        dispatch({
            type: ACTION_TYPES.ADD_FAVORITE,
            payload: favorites
        })
        localStorage.setItem("favorites", JSON.stringify(favorites))
        toast.success(t("toast.addedFavorite"))
    }
    useEffect(() => {
        if (contentDetails && showContentDetails) {
            getDetail({
                category: category,
                id: contentDetails
            }).then((res) => {
                if (Array.isArray(res) && res.length > 0) {
                    setContent(res[0])
                } else {
                    toast.warn(t("toast.noData"))
                }
            })
        }
    }, [contentDetails, showContentDetails])
    return (
        <div
            className={`fixed w-[400px] h-5/6 top-16 bottom-0 right-0 z-50 bg-slate-950/90 rounded-xl shadow border border-slate-800 overflow-hidden ${
                showContentDetails ? "flex" : "hidden"
            }`}
        >
            <button onClick={() => showDetails(false)}>
                <XMarkIcon className="text-white w-12 h-12 absolute top-2 right-2 z-50 border-4 border-slate-100 rounded-full hover:sepia hover:bg-slate-400/80" />
            </button>
            <div className="w-full h-full flex abosolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent p-4 text-white text-center flex-col justify-end items-center gap-2 transition-all duration-300 ease-in-out z-10 relative ">
                <h3 className="text-lg font-bold uppercase tracking-widest  ">
                    {content[NAMES_MAP[category]] || ""}
                </h3>
                <p className="text-sm tracking-widest  ">
                    {content.description ?? ""}
                </p>
                <p className="text-sm font-light tracking-widest">
                    {content.modified && content.modified.substring(0, 10)}
                </p>
                <div className="flex justify-center items-center gap-2">
                    <button>
                        <PlayCircleIcon className="w-14 hover:sepia" />
                    </button>
                    <button onClick={() => handleFavorite(content)}>
                        <StarIcon className="w-14 text-slate-400 hover:text-slate-100" />
                    </button>
                </div>
            </div>

            <div className="flex w-full h-full absolute top-0">
                <img
                    src={
                        content.thumbnail
                            ? `${content.thumbnail?.path}.${content.thumbnail?.extension}`
                            : "http://i.annihil.us/u/prod/marvel/i/mg/c/80/51c9ec5e90de1.jpg"
                    }
                    alt={content.name}
                    className="w-full h-full object-cover z-0"
                />
            </div>
        </div>
    )
}

export default ContentDetails
