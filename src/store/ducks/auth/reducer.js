import { Admin } from '../../application/model/admin.model'
import { AuthTypes } from './types'

export const INITIAL_STATE = {
    create: {
        user: new Admin().toJSON(),
        loading: false,
        success: false,
        error: false,
        dialog: false
    },
    credentials: {
        email: '',
        password: '',
        loading: false,
        success: false,
        error: false
    }
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case AuthTypes.CREATE_USER_RESET:
            return {
                ...state,
                create: INITIAL_STATE.create
            }

        case AuthTypes.CREATE_USER_REQUEST:
            return {
                ...state,
                create: {
                    ...state.create,
                    loading: true
                }
            }

        case AuthTypes.CREATE_USER_SUCCESS: {
            const { user } = action.payload
            return {
                ...state,
                create: {
                    ...state.create,
                    user,
                    loading: false,
                    success: true,
                    dialog: false
                }
            }
        }

        case AuthTypes.CREATE_USER_FAILURE:
            return {
                ...state,
                create: {
                    ...state.create,
                    loading: false,
                    error: true
                }
            }

        case AuthTypes.CHANGE_DIALOG_CREATE: {
            const { dialog: dialogCreate } = action.payload
            return {
                ...state,
                create: {
                    ...state.create,
                    dialog: dialogCreate
                }
            }
        }

        case AuthTypes.LOGIN_RESET:
            return {
                ...state,
                credentials: INITIAL_STATE.credentials
            }

        case AuthTypes.LOGIN_REQUEST:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    loading: true
                }
            }

        case AuthTypes.LOGIN_SUCCESS:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    loading: false,
                    success: true
                }
            }

        case AuthTypes.LOGIN_FAILURE:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    loading: false,
                    error: true
                }
            }

        default:
            return state
    }
}