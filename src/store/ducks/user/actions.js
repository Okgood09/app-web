import { action } from 'typesafe-actions'
import { UserTypes } from './types'

export const findRequest = (id) =>
    action(UserTypes.FIND_REQUEST, { id })

export const findSuccess = (user) =>
    action(UserTypes.FIND_SUCCESS, { user })

export const findFailure = () =>
    action(UserTypes.FIND_FAILURE)