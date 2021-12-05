// CombineReducer to combine all the small small reducers
import { combineReducers } from "redux";
//user reducer
import userReducer from "./userReducer";

// rootReducer that contain all the small small reducer
const rootReducer = combineReducers({
    userState: userReducer,
})

export default rootReducer;