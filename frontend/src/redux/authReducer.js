const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    avatar: null,
    username: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setAuthUserData = (avatar, username) => ({type: SET_USER_DATA, data: {avatar, username}}) 
export default authReducer;