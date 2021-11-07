import React, { Suspense } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'

import { Box, LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { RouteWithSubRoutes } from '../../routes'
import AppBar from './appBar'
import Drawer from './drawer'
import { enableDrawer, enableSnackbar } from '../../store/ducks/layout/actions'
import FooterComponent from './footer'
import { theme } from '../../assets/styles/theme'
import SnackBarComponent from './snackbar'

const CONTENT_MAX_WIDTH = 1126

const useStyles = makeStyles({
    content: {
        position: 'relative',
        maxWidth: CONTENT_MAX_WIDTH,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '100%',
        paddingBottom: 0,
        margin: '0 auto',
        padding: theme.spacing(1)
    }
})

const LayoutComponent = ({ routes }) => {

    const classes = useStyles()

    const dispatch = useDispatch()
    const layout = useSelector((state) => state.layout)

    const handleDrawerToggle = () => dispatch(enableDrawer(!layout.drawer.enable))

    return <Box sx={{ display: 'flex' }}>

        <AppBar handleDrawerToggle={handleDrawerToggle} />

        <SnackBarComponent
            open={layout.snackbar.enableSnackbar}
            severity={layout.snackbar.severity}
            title={layout.snackbar.title}
            message={layout.snackbar.message}
            onClose={() => dispatch(enableSnackbar(!layout.snackbar.enableSnackbar))} />

        <Drawer
            drawerEnable={layout.drawer.enable}
            handleDrawerToggle={handleDrawerToggle} />

        <Box sx={{
            marginTop: '48px',
            width: '100%'
        }}>
            <Suspense fallback={<LinearProgress color="secondary" sx={{ height: 10 }} />}>
                <Box component="main" className={classes.content}>
                    <Switch>
                        {
                            routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
                        }
                    </Switch>
                </Box>
                <FooterComponent />
            </Suspense>
        </Box>
    </Box>
}

export default connect()(LayoutComponent)