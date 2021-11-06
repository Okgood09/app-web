import axiosInstance from './axios.service'
import { LocalStorageService } from './localStorage.service'


async function create(user) {
    return await axiosInstance.post('/v1/admins', user)
}

async function authenticate(credentials) {
    const response = await axiosInstance.post('/v1/auth/login', credentials)
    const { access_token } = response.data
    LocalStorageService.setItem('access_token', access_token)
    return access_token
}

function isAuthenticated() {
    try {
        const token = LocalStorageService.getItem('access_token')
        return !!token
    } catch (err) {
        return false
    }
}

function logout() {
    return localStorage.clear()
}

const exportRequests = {
    create,
    authenticate,
    isAuthenticated,
    logout
}

export default exportRequests