import {SET_USER} from "../Actions/actionType"

// Initial state for user Reducer
const INITIAL_STATE = {
    user: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}
export default userReducer;