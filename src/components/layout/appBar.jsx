import React, { useState } from 'react'
import { AppBar, Avatar, IconButton, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import {
    Menu as MenuIcon,
    Person as PersonIcon,
    Face as FaceIcon,
    ExitToApp as ExitToAppIcon
} from '@material-ui/icons'
import { makeStyles } from '@mui/styles'

import { drawerWidth } from '../../store/ducks/layout/types'
import { Box } from '@mui/system'
import { theme } from '../../assets/styles/theme'
import { history } from '../../store'
import { LocalStorageService } from '../../services/localStorage.service'

const useStyles = makeStyles({
    boxAppBar: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    boxUser: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    username: {
        marginRight: theme.spacing(1)
    }
})

function AppBarComponent({ handleDrawerToggle }) {

    const [anchorEl, setAnchorEl] = useState()

    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget)
    }

    const classes = useStyles()

    return <AppBar
        position="fixed"
        sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` }
        }}>
        <Toolbar variant="dense">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}>
                <MenuIcon />
            </IconButton>

            <Box className={classes.boxAppBar}>
                <Box className={classes.boxUser} onClick={handleClick}>
                    <Typography className={classes.username} variant="caption">
                        Usuário
                    </Typography>
                    <Avatar sx={{ width: 30, height: 30 }}><PersonIcon /></Avatar>
                </Box>
            </Box>
        </Toolbar>

        <Menu
            id="menu_user_logged"
            anchorEl={anchorEl}
            keepMounted={true}
            open={Boolean(anchorEl)}
            onClose={() => handleClick(null)}>
            <MenuItem
                id="menu_item_account"
                onClick={() => {
                    handleClick(null)
                    history.push('/app/account')
                }}>
                <ListItemIcon>
                    <FaceIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap={true}>
                    Perfil
                </Typography>
            </MenuItem>
            <MenuItem
                id="menu_item_logout"
                onClick={() => {
                    history.push('/authenticate')
                    LocalStorageService.logout()
                    handleClick(null)
                }}>
                <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" noWrap={true}>
                    Sair
                </Typography>
            </MenuItem>
        </Menu>
    </AppBar>
}

export default AppBarComponent