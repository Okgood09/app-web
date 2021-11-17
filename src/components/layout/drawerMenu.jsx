import React, { useState } from 'react'

import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material'
import { Home as HomeIcon, PeopleAlt as PeopleAltIcon } from '@material-ui/icons'
import { makeStyles } from '@mui/styles'

import { history } from '../../store'
import { ReactComponent as LogoBugReport } from '../../assets/images/logo/BugReportLogo.svg'
import { theme } from '../../assets/styles/theme'
import { drawerWidth } from '../../store/ducks/layout/types'

const useStyles = makeStyles({
    svgIcon: {
        fontSize: 150,
        cursor: 'pointer'
    },
    navActive: {
        background: theme.palette.primary.main
    }
})

const DrawerComponent = ({ drawerEnable, handleDrawerToggle }) => {

    const [selectedIndex, setSelectedIndex] = useState(1)

    const classes = useStyles()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    const drawer = (
        <Box component="div">
            <Box display="flex" justifyContent="center">
                <SvgIcon
                    className={classes.svgIcon}
                    component={LogoBugReport}
                    viewBox="0 0 224 90"
                    onClick={() => history.push('/app')} />
            </Box>
            <List>
                <ListItemButton
                    id="nav-home"
                    selected={selectedIndex === 1}
                    onClick={(e) => {
                        handleListItemClick(e, 1)
                        history.push('/app/home')
                    }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Página inicial" />
                </ListItemButton>
                <ListItemButton
                    id="nav-users"
                    selected={selectedIndex === 2}
                    onClick={(e) => {
                        handleListItemClick(e, 2)
                        history.push('/app/users')
                    }}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Usuários" />
                </ListItemButton>
            </List>
        </Box>
    )

    const container = window !== undefined
        ? () => window.document.body
        : undefined

    return <Box
        component="nav"
        sx={{
            width: { lg: drawerWidth },
            flexShrink: { lg: 0 }
        }}
        aria-label="mailbox folders">
        <Drawer
            container={container}
            variant="temporary"
            open={drawerEnable}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true
            }}
            sx={{
                display: {
                    xs: 'block',
                    lg: 'none'
                },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                },
            }}>
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: {
                    xs: 'none',
                    lg: 'block'
                },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: drawerWidth
                },
            }}
            open={true}>
            {drawer}
        </Drawer>
    </Box>
}

export default DrawerComponent
