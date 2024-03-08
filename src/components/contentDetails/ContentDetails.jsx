import { useEffect, useState } from "react"
import useApp from "../../context/AppContext"
import { getDetail } from "../../services/api"
import { NAMES_MAP } from "../../utils/constants"
import { XMarkIcon } from "@heroicons/react/20/solid"
import ACTION_TYPES from "../../actions/types"

const ContentDetails = () => {
    const { contentDetails, category, showContentDetails, dispatch } = useApp()
    const [content, setContent] = useState({})
    const showDetails = (show) => {
        dispatch({
            type: ACTION_TYPES.SHOW_CONTENT_DETAILS,
            payload: show
        })
    }
    useEffect(() => {
        console.log(contentDetails, showContentDetails)
        if (contentDetails && showContentDetails) {
            getDetail({
                category: category,
                id: contentDetails
            }).then((res) => {
                console.log(res[0])
                Array.isArray(res) && setContent(res[0])
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
            <div className="w-full h-full flex abosolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent hover:brightness-50 p-4 text-white text-center flex-col justify-end items-center gap-2 transition-all duration-300 ease-in-out z-10 relative ">
                <h3 className="text-lg font-bold uppercase tracking-widest  ">
                    {content[NAMES_MAP[category]] ?? ""}
                </h3>
                <p className="text-sm tracking-widest  ">
                    {content.description ?? ""}
                </p>
                <p className="text-sm font-light tracking-widest">
                    {content.modified && content.modified.substring(0, 10)}
                </p>
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
