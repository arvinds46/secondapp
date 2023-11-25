import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    itemReducer: itemReducer
})

export default rootReducer;