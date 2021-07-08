export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = (userProfile) => ({
    type: USER_LOGIN,
    payload: userProfile,
});

export const userLogout = () => ({
    type: USER_LOGOUT,
})

const initState = {
    userProfile: null,
}

const user = (state = initState, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return {
                ...state,
                userProfile: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                userProfile: null
            };
        default:
            return state;
    }
}

export default user;