import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk";

import universityReducer from "./university-reducer";

let reducers = combineReducers({
    universityPage: universityReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;