// import createStore and applyMiddleware
import { createStore, applyMiddleware } from 'redux';

// imported root reducer
import rootReducer from '../Reducers/index';

const store = createStore(rootReducer, {});
export default store;