import action from "../actions/actionType"

const initialState = {
    id: '',
    email: '',
    name: '',
    avatar: '',
    address: '',
    gender: '',
    isAuth: false,
    createdAt: ''
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
                id: data.id,
                createdAt: data.createdAt
            }

        default:
            return state
    }
}

export default actionForReducer;
