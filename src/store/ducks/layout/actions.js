import { action } from 'typesafe-actions'
import { LayoutTypes } from './types'

export const enableDrawer = (enable) =>
    action(LayoutTypes.ENABLE_DRAWER, { enable })

export const enableSnackbar = (enableSnackbar, severity, title, message) =>
    action(LayoutTypes.ENABLE_SNACKBAR, {
        enableSnackbar,
        severity,
        title,
        message
    })

export const enableDrawerNotifications = (enableNotifications) =>
    action(LayoutTypes.ENABLE_DRAWER_NOTIFICATIONS, {
        enableNotifications
    })