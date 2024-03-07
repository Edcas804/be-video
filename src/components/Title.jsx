import { PropTypes } from "prop-types"
const Title = ({ title }) => {
    return (
        <h1 className="w-full text-white font-bold my-2 md:my-4 text-md md:text-xl lg:text-2xl p-4 uppercase tracking-wider bg-gradient-to-r from-slate-900 via-transparent to-transparent text-left rounded-2xl">
            {title}
        </h1>
    )
}
Title.propTypes = {
    title: PropTypes.string.isRequired
}

export default Title
