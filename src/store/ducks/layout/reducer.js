import { LayoutTypes } from './types'

export const INITIAL_STATE = {
    language: {
        lng: localStorage.getItem('language')
    },
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

        case LayoutTypes.CHANGE_LANGUAGE: {
            const { language } = action.payload
            return {
                ...state,
                language: {
                    ...state.language,
                    lng: language
                }
            }
        }

        case LayoutTypes.ENABLE_DRAWER:
            const { enable } = action.payload
            return {
                ...state,
                drawer: {
                    ...state.drawer,
                    enable
                }
            }

        case LayoutTypes.ENABLE_SNACKBAR:
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

        default:
            return state
    }
}