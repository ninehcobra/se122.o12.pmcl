import axios from '../setup/axios'

const createCourse = async (title) => {
    try {
        let res = await axios.post("/api/create-course", { title: title })
        checkRes(res.EC)
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
        checkRes(res.EC)
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
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getCategory = async () => {
    try {
        let res = await axios.get(`/api/get-category`)
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const createChapter = async (data) => {
    try {
        let res = await axios.post(`/api/create-chapter`, {
            title: data.title,
            courseId: data.courseId
        })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const checkRes = (EC) => {
    if (EC && EC === -10) {
        window.location.href = '/login'
    }
}

const updateChapterPosition = async (data) => {
    try {
        let res = await axios.post(`/api/update-chapter-position`, data)
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getChapter = async (id) => {
    try {
        let res = await axios.get(`/api/chapter?id=${id}`)
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const updateChapter = async (data) => {
    try {
        let res = await axios.post("/api/update-chapter", { data })
        checkRes(res.EC)
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
    updateCourse,
    getCategory,
    createChapter,
    updateChapterPosition,
    getChapter,
    updateChapter
}