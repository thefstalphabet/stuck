// Root store file

// import createStore and applyMiddleware
import { createStore, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";

// imported root reducer
import rootReducer from "../Reducers/index";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
