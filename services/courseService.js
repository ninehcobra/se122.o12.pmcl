import axios from '../setup/axios'

const createCourse = async (title) => {
    try {
        let res = await axios.post("/api/create-course", { title: title })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const updateCourse = async (data) => {
    try {
        let res = await axios.post("/api/update-course", { data })
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getCourse = async (id) => {
    try {
        let res = await axios.get(`/api/course?id=${id}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

export {
    createCourse,
    getCourse,
    updateCourse
}