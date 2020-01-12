import {ADD_MSG} from "../actions/chat_actions";

const INITIALS = {
    messages: []
};

const chat_reducer = (state=INITIALS, action) => {
    switch (action.type) {
        case ADD_MSG:
            return state.messages.concat(action.messages);
        default:
            return state;
    }
};
export default chat_reducer;
