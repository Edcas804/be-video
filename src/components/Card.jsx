import { PropTypes } from "prop-types"
const Card = ({ children }) => {
    return (
        <div className="flex w-full h-[200px] md:h-[350px] lg:h[400px] xl:h[450px] col-span-1 rounded-xl  border-4 border-transparent hover:border-gray-300 shadow-lg transition-all duration-500 relative overflow-hidden hover:cursor-pointer">
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card
