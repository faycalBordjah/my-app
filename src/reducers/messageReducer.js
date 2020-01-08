const messageReducer = (state=false, action) => {
    switch (action.type) {
        case 'ADD_MSG':
            return !state;
        default:
            return state;
    }
};
export default messageReducer;
