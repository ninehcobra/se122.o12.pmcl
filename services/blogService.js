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

export {
    getBlog
}