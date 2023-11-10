import axios from '../setup/axios'

const registerNewUser = async (email, name, password) => {
    let res = axios.post("/api/register", {
        email, password, name
    })
    return res
}

const login = async (email, password) => {
    let res = axios.post("/api/login", {
        email, password
    }


    )
    return res
}

export {
    registerNewUser,
    login
}