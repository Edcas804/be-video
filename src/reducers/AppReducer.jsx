import ACTION_TYPES from "../actions/types"

/**
 * Initial State
 * @type {Object}
 * @property {String} category
 */
export const initialState = {
    category: ""
}
const reducerMap = (state, payload) => ({
    [ACTION_TYPES.CATEGORY]: {
        ...state,
        category: payload
    }
})

export const AppReducer = (state = initialState, action) => {
    return reducerMap(state)[action.type]
        ? reducerMap(state, action.payload)[action.type]
        : state
}

export default AppReducer
