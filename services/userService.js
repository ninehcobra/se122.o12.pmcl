import axios from 'axios'

const registerNewUser = async (email, name, password) => {
    let res = axios.post("http://localhost:8080/api/register", {
        email, password, name
    })
    return res
}

const login = async (email, password) => {
    let res = axios.post("http://localhost:8080/api/login", {
        email, password
    })
    return res
}

export {
    registerNewUser,
    login
}