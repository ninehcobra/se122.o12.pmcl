import axios from '../setup/axios'

const registerNewUser = async (email, name, password) => {
    try {
        let res = await axios.post("/api/register", {
            email, password, name
        })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const login = async (email, password) => {
    try {
        let res = await axios.post("/api/login", {
            email, password
        }
        )
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }

}

const logout = async (email, password) => {
    try {
        let res = await axios.post("/api/logout")
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserAccount = async () => {
    try {
        let res = await axios.get("/api/account")
        return res
    }
    catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }

}

export {
    registerNewUser,
    login,
    getUserAccount,
    logout
}