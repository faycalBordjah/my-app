import {CURRENT_USER} from "../actions/user_actions";

const user_reducer = (state=null, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return action.user;
        default:
            return state;
    }
};
export default user_reducer;
