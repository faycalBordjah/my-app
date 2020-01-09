const INITIALS = {
    messages: []
};

const chatReducer = (state=INITIALS, action) => {
    switch (action.type) {
        case 'ADD_MSG':
            return state.messages.concat(action.send);
        default:
            return state;
    }
};
export default chatReducer;
