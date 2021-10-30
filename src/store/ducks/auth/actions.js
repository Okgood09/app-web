import { action } from 'typesafe-actions'
import { AuthTypes } from './types'

export const loginReset = () => action(AuthTypes.LOGIN_RESET)
export const loginRequest = (credentials) => action(AuthTypes.LOGIN_REQUEST, { credentials })
export const loginSuccess = () => action(AuthTypes.LOGIN_SUCCESS)
export const loginFailure = () => action(AuthTypes.LOGIN_FAILURE)