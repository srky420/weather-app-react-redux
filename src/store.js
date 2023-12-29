import { applyMiddleware, legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import locationReducer from "./reducers/locationReducer";
import weatherReducer from "./reducers/weatherReducer";


// Define store
export default legacy_createStore(combineReducers({ location: locationReducer, weather: weatherReducer }), applyMiddleware(thunk));