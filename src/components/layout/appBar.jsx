import React from 'react'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { Menu as MenuIcon } from '@material-ui/icons'

import { drawerWidth } from '../../store/ducks/layout/types'

const AppBarComponent = ({ handleDrawerToggle }) => <AppBar
    position="fixed"
    sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` }
    }}>
    <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}>
            <MenuIcon />
        </IconButton>
    </Toolbar>
</AppBar>

export default AppBarComponent