import { toast } from "react-toastify"

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
        toast('hi')

    } catch (error) {

    }
}