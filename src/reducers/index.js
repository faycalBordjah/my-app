import chat_reducer from "./chat_reducer";
import {combineReducers} from "redux";
import user_reducer from "./user_reducer";

const reducers = combineReducers(
    {
        chat: chat_reducer,
        user: user_reducer
    }
);
export default reducers;
