import { Agent } from 'https'
import { default as axios } from 'axios'

import store from '../store'
import { enableSnackbar } from '../store/ducks/layout/actions'
import { SnackbarType } from '../store/ducks/layout/types'
import { LocalStorageService } from './localStorage.service'

const API_GATEWAY = `${process.env.REACT_APP_API_GATEWAY}`

const axiosInstance = axios.create({
    // TODO: URL_BASE
    baseURL: API_GATEWAY,
    httpsAgent: new Agent({ rejectUnauthorized: false })
})

axiosInstance
    .interceptors
    .request
    .use((request) => {
        const token = LocalStorageService.getItem('access_token')
        if (token) request.headers.Authorization = `Bearer ${token}`
        return request
    })

axiosInstance
    .interceptors
    .response
    .use(undefined, (error) => {
        let title = ''
        let message = ''
        switch (error.response.status) {
            case 400:
                if (error.response.config.url === '/v1/auth/login') {
                    title = 'Credenciais inválidas'
                    message = 'Verifique os dados de acesso fornecidos.'
                } else {
                    title = 'DADOS INCORRETOS'
                    message = 'Verifique os dados informados e tente novamente.'
                }
                break

            case 401:
                title = 'NÃO AUTENTICADO'
                message = 'Usuário não está devidamente autenticado.'
                break

            case 403:
                title = 'NÃO AUTORIZADO'
                message = 'Usuário não possui permissão para acessar o recurso solicitado.'
                break

            case 404:
                if (error.response.config.url === '/v1/auth/login') {
                    title = 'Credenciais inválidas'
                    message = 'Verifique os dados de acesso fornecidos.'
                } else {
                    title = 'NÃO ENCONTRADO'
                    message = 'Recurso solicitado encontra-se indisponível ou inexistente.'
                }
                break

            case 409:
                title = 'DADOS DUPLICADOS'
                if (error.response.config.url === '/v1/admins') message = 'Já existe um usuário com esse e-mail.'
                else message = 'Ocorreram conflitos com dados que não pode ser duplicados.'
                break

            case 429:
                title = 'TENTATIVAS EXCEDIDAS'
                message = 'Aguarde o tempo de 1 hora e tente novamente.'
                break

            case 500:
                title = 'ERRO INTERNO DO SERVIDOR'
                message = 'Ocorreu um erro durante a operação, tente novamente.'
                break

            case 502:
                title = 'SERVIÇO INDISPONÍVEL'
                message = 'Serviço solicitado encontra-se indisponível, contate o administrador.'
                break

            default:
                title = 'FALHA DURANTE A OPERAÇÃO'
                message = 'Um erro não esperado ocorreu durante a operação, tente novamente.'
                if (error?.message === 'Network Error') {
                    title = 'FALHA NA CONEXÃO'
                    message = 'Verifique sua conexão e tente novamente.'
                }
                break
        }
        if (title || message) store.dispatch(enableSnackbar(true, SnackbarType.ERROR, title, message))
        return Promise.reject(error.response.data)
    })

export default axiosInstance