import axios from '../setup/axios'

const getBlog = async (page, limit) => {
    try {
        let res = await axios.get(`/api/get-blog?page=${page}&limit=${limit}`)
        checkRes(res.EC)
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
        checkRes(res.EC)
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
        checkRes(res.EC)
        return res
    } catch (error) {
        return {
            EC: -5,
            EM: error
        }
    }
}

const checkRes = (EC) => {
    if (EC && EC === -10) {
        window.location.href = '/login'
    }
}

export {
    getBlog,
    createBlog,
    getBlogDetail
}