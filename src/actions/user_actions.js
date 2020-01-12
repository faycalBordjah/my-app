export const CURRENT_USER = 'CURRENT_USER';
export const currentUser = (user) => {
    return {
        type: CURRENT_USER,
        user
    };

};
