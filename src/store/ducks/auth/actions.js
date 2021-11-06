import { action } from 'typesafe-actions'
import { AuthTypes } from './types'

export const createReset = () => action(AuthTypes.CREATE_USER_RESET)
export const createRequest = (user) => action(AuthTypes.CREATE_USER_REQUEST, { user })
export const createSuccess = (user) => action(AuthTypes.CREATE_USER_SUCCESS, { user })
export const createFailure = () => action(AuthTypes.CREATE_USER_FAILURE)

export const loginReset = () => action(AuthTypes.LOGIN_RESET)
export const loginRequest = (credentials) => action(AuthTypes.LOGIN_REQUEST, { credentials })
export const loginSuccess = () => action(AuthTypes.LOGIN_SUCCESS)
export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE)