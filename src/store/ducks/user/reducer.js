import { User } from '../../application/model/user'
import { UserTypes } from './types'

export const INITIAL_STATE = {
    create: {
        user: new User({}),
        loading: false,
        success: false,
        error: false
    }
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case UserTypes.FIND_REQUEST:
            return {
                ...state,
                create: {
                    ...state.create,
                    loading: true
                }
            }

        case UserTypes.FIND_SUCCESS:
            const { user } = action.payload
            return {
                ...state,
                create: {
                    ...state.create,
                    user,
                    loading: false,
                    success: true
                }
            }

        case UserTypes.FIND_FAILURE:
            return {
                ...state,
                create: {
                    ...state.create,
                    loading: false,
                    error: true
                }
            }

        default:
            return state
    }
}