import { AuthTypes } from './types'

export const INITIAL_STATE = {
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