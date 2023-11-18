import action from "../actions/actionType"

const initialState = {
    email: '',
    name: '',
    avatar: '',
    address: '',
    gender: '',
    isAuth: false,
}

const actionForReducer = (state = initialState, payload) => {
    switch (payload.type) {

        case action.USER_LOGIN_SUCCESS:
            let data = payload.data.account
            return {
                ...state,
                email: data.email,
                name: data.name,
                avatar: data.avatar,
                address: data.address,
                gender: data.gender,
                isAuth: true,
            }

        default:
            return state
    }
}

export default actionForReducer;
