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

const deleteCourse = async (id) => {
    try {
        let res = await axios.post("/api/delete-course", { id: id })
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

const getAllCourse = async (page, limit) => {
    try {
        let res = await axios.post(`/api/teacher-course`, {
            page, limit
        })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: error
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

const deleteChapter = async (id) => {
    try {
        let res = await axios.post("/api/delete-chapter", { id: id })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserCourse = async (id) => {
    try {
        let res = await axios.post(`/api/get-user-course`, { categoryId: id })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserListChapter = async (id) => {
    try {
        let res = await axios.post(`/api/get-user-list-chapter`, { id: id })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getUserPurchase = async (id) => {
    try {
        let res = await axios.post(`/api/get-user-purchase`, { id: id })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const getChapterDetail = async (id) => {
    try {
        let res = await axios.get(`/api/get-chapter-detail?id=${id}`)
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const purchase = async (id) => {
    try {
        let res = await axios.post(`/api/purchase`, { id })
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: 'Can not connect to server'
        }
    }
}

const markComplete = async (id) => {
    try {
        let res = await axios.post(`/api/mark-complete`, { id })
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
    updateChapter,
    deleteChapter,
    deleteCourse,
    getAllCourse,
    getUserCourse,
    getUserListChapter,
    getUserPurchase,
    getChapterDetail,
    purchase,
    markComplete
}