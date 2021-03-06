import { LayoutTypes } from './types'

export const INITIAL_STATE = {
    drawer: {
        enable: false
    },
    snackbar: {
        enableSnackbar: false,
        severity: 'info',
        title: '',
        message: ''
    }
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case LayoutTypes.ENABLE_DRAWER: {
            const { enable } = action.payload
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    enable
                }
            }
        }

        case LayoutTypes.ENABLE_SNACKBAR: {
            const { enableSnackbar, severity, title, message } = action.payload
            return {
                ...state,
                snackbar: {
                    ...state.snackbar,
                    enableSnackbar,
                    severity,
                    title,
                    message
                }
            }
        }

        default:
            return state
    }
}