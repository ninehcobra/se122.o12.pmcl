const initialState = {
    email: '',
    name: '',
    avatar: '',
    address: '',
    gender: '',
    isAuth: false
}

const actionForReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case 'UPDATE_EMAIL':
            return {
                ...state,
                email: payload.email
            }
        case 'UPDATE_NAME':
            return {
                ...state,
                name: payload.name
            }
        case 'LOGIN':
            return {
                ...state,
                email: payload.email,
                name: payload.name,
                avatar: '',
                address: '',
                gender: '',
                isAuth: true
            }

        default:
            return state
    }
}

export default actionForReducer;
