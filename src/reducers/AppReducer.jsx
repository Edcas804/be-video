import ACTION_TYPES from "../actions/types"

/**
 * Initial State
 * @type {Object}
 * @property {string} category
 * @property {string} contentDetails
 * @property {bool} showContentDetails
 * @property {array} addFavorite
 */
export const initialState = {
    category: "",
    contentDetails: "",
    showContentDetails: false,
    addFavorite: []
}
const reducerMap = (state, payload) => ({
    [ACTION_TYPES.CATEGORY]: {
        ...state,
        category: payload
    },
    [ACTION_TYPES.CONTENT_DETAILS]: {
        ...state,
        contentDetails: payload
    },
    [ACTION_TYPES.SHOW_CONTENT_DETAILS]: {
        ...state,
        showContentDetails: payload
    },
    [ACTION_TYPES.ADD_FAVORITE]: {
        ...state,
        addFavorite: payload
    }
})

export const AppReducer = (state = initialState, action) => {
    return reducerMap(state)[action.type]
        ? reducerMap(state, action.payload)[action.type]
        : state
}

export default AppReducer
