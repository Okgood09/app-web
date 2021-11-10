import React from 'react'
import { makeStyles } from '@mui/styles'
import { animation } from '../../assets/styles/theme'
import { Box, Drawer, Typography } from '@mui/material'
import { drawerWidth } from '../../store/ducks/layout/types'
import clsx from 'clsx'

const useStyles = makeStyles({
    ...animation,
    boxDrawer: {
        width: drawerWidth,
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
                <Typography variant="h6">Minhas notificações</Typography>
            </Box>
        </Box>
    </Drawer>
}

export default DrawerNotification
