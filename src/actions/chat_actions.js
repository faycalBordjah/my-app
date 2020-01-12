export const ADD_MSG = 'ADD_MSG';
export const addMessage = (messages) => {
    return {
        type: ADD_MSG,
        messages
    };
};
