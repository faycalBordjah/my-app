import chatReducer from "./chatReducer";
import {combineReducers} from "redux";

const reducers = combineReducers(
    {chat: chatReducer}
);
export default reducers;
