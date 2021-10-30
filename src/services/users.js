import { User } from '../store/application/model/user.model'
import axiosInstance from './axios'

async function find(id) {
    const response = await axiosInstance.get(`/user/${id}`)
    return new User(response.data)
}

const exportRequests = {
    find
}

export default exportRequests