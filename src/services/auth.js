// import axiosInstance from './axios'

async function authenticate(credentials) {
    console.log('credenciais', credentials)
    // const response = await axiosInstance.post('/v1/auth/login', credentials)
    // return response.data
}

const exportRequests = {
    authenticate
}

export default exportRequests