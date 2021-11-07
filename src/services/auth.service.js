import jwt from 'jsonwebtoken'
import axiosInstance from './axios.service'
import { LocalStorageService } from './localStorage.service'
import { CryptoService } from './crypto.service'

async function create(user) {
    const result = await axiosInstance.post('/v1/admins', user)
    return result
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

function userLogged() {
    try {
        const token = LocalStorageService.getItem('access_token')
        const decode = jwt.decode(CryptoService.decrypt(token))
        return decode.sub
    } catch (err) {
        return ''
    }
}

function logout() {
    return localStorage.clear()
}

const exportRequests = {
    create,
    authenticate,
    isAuthenticated,
    userLogged,
    logout
}

export default exportRequests