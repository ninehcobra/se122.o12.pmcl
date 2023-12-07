import axios from '../setup/axios'

const getBlog = async (page, limit) => {
    try {
        let res = await axios.get(`/api/get-blog?page=${page}&limit=${limit}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: error
        }
    }
}

const getBlogDetail = async (id) => {
    try {
        let res = await axios.get(`/api/get-blog?id=${id}`)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: error
        }
    }
}

const createBlog = async (data) => {
    try {
        let res = await axios.post(`/api/create-blog`, data)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: error
        }
    }
}

export {
    getBlog,
    createBlog,
    getBlogDetail
}