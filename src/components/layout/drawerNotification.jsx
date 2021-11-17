import React from 'react'
import clsx from 'clsx'

import { makeStyles } from '@mui/styles'
import { Notifications as NotificationsIcon } from '@material-ui/icons'
import { Box, Drawer, Typography } from '@mui/material'

import { animation, theme } from '../../assets/styles/theme'
import { drawerWidth } from '../../store/ducks/layout/types'

const useStyles = makeStyles({
    ...animation,
    boxDrawer: {
        width: drawerWidth,
    },
    notificationIcon: {
        marginRight: theme.spacing(1)
    }
})

const DrawerNotification = ({ drawerEnable, handleDrawerNotificationToggle }) => {
    const classes = useStyles()

    return <Drawer
        anchor="right"
        open={drawerEnable}
        onClose={handleDrawerNotificationToggle}>
        <Box className={clsx(classes.fadeInContent, classes.boxDrawer)}>
            <Box p={2} display="flex" alignItems="center" justifyContent="center">
                <NotificationsIcon className={classes.notificationIcon} />
                <Typography variant="button">Minhas notificações</Typography>
            </Box>
        </Box>
    </Drawer>
}

export default DrawerNotification
