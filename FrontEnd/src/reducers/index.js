import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import changeView from "./changeView";
import productAll from "./productAll";
export default combineReducers({
    auth,
    message,
    changeView,
    productAll


});