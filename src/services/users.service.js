import axiosInstance from './axios.service'

async function find(id) {
    const response = await axiosInstance.get(`/v1/admins/${id}`)
    return response.data
}

const exportRequests = {
    find
}

export default exportRequests