import { action } from 'typesafe-actions'
import { LayoutTypes } from './types'

export const changeLanguage = (language) => {
    localStorage.setItem('language', language)
    return action(LayoutTypes.CHANGE_LANGUAGE, { language })
}

export const enableDrawer = (enable) =>
    action(LayoutTypes.ENABLE_DRAWER, { enable })

export const enableSnackbar = (enableSnackbar, severity, title, message) =>
    action(LayoutTypes.ENABLE_SNACKBAR, { enableSnackbar, severity, title, message })