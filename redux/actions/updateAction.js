import { toast } from "react-toastify"
import actionTypes from "./actionType"

export const updateEmail = (email) => async dispatch => {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 3000)
        })

        dispatch({
            type: 'UPDATE_EMAIL',
            email: email
        })


    } catch (error) {

    }
}

export const loginRedux = (data) => async dispatch => {
    try {

        dispatch({
            type: actionTypes.USER_LOGIN_SUCCESS,
            data
        })


    } catch (error) {

    }
}