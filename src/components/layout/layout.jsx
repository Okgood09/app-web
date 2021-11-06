import React, { Suspense } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'

import { Alert, Box, LinearProgress, Snackbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { RouteWithSubRoutes } from '../../routes'
import AppBar from './appBar'
import Drawer from './drawer'
import { enableDrawer, enableSnackbar } from '../../store/ducks/layout/actions'
import FooterComponent from './footer'
import { theme } from '../../assets/styles/theme'

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
        marginTop: '48px',
        margin: '0 auto'
    },
    contentInside: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1 0 auto',
        minHeight: '100%',
        padding: theme.spacing(1)
    },
})

const LayoutComponent = ({ routes }) => {

    const classes = useStyles()

    const dispatch = useDispatch()
    const layout = useSelector((state) => state.layout)

    const handleDrawerToggle = () => dispatch(enableDrawer(!layout.drawer.enable))

    return <Box sx={{ display: 'flex' }}>

        <AppBar handleDrawerToggle={handleDrawerToggle} />

        <Snackbar
            id="snackbar-open"
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={layout.snackbar.enableSnackbar}
            autoHideDuration={5000}
            onClose={() => dispatch(enableSnackbar(!layout.snackbar.enableSnackbar))}>
            <Alert
                id="alert-message"
                variant="filled"
                onClose={() => dispatch(enableSnackbar(!layout.snackbar.enableSnackbar))}
                severity={layout.snackbar.severity}
                sx={{ maxWidth: '100%', mt: 6 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>{layout.snackbar.title}</Typography >
                    <Typography variant="caption">{layout.snackbar.message}</Typography >
                </Box>
            </Alert>
        </Snackbar>

        <Drawer
            drawerEnable={layout.drawer.enable}
            handleDrawerToggle={handleDrawerToggle} />

        <Box component="main" className={classes.content}>
            <Suspense fallback={<LinearProgress color="secondary" sx={{ height: 10 }} />}>
                <Box className={classes.contentInside}>
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