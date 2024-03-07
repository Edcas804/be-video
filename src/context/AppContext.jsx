import { PropTypes } from "prop-types"
import { createContext, useContext, useReducer } from "react"
import AppReducer, { initialState } from "../reducers/AppReducer"

const AppContext = createContext(initialState)

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const value = {
        ...state,
        dispatch
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
const useApp = () => {
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error("useApp must be used within appContext")
    }

    return context
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default useApp
