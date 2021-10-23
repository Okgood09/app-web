import { useDispatch, useSelector } from 'react-redux'
import { Switch } from 'react-router-dom'

import { Alert, Box, Snackbar, Typography } from '@mui/material'

import { RouteWithSubRoutes } from '../../routes'
import AppBar from './appBar'
import Drawer from './drawer'
import { enableDrawer, enableSnackbar } from '../../store/ducks/layout/actions'

export default function LayoutComponent({ routes }) {

    const dispatch = useDispatch()
    const layout = useSelector((state) => {
        return state.layout
    })

    const handleDrawerToggle = () => {
        dispatch(enableDrawer(!layout.drawer.enable))
    }

    const drawerWidth = 240;

    return (
        <Box sx={{ display: 'flex' }}>

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

            <Box component="main"
                sx={{
                    flexGrow: 1,
                    p: 1,
                    mt: 8,
                    width: { md: `calc(100% - ${drawerWidth}px)` }
                }}>
                <Switch>
                    {routes.map((route, i) => {
                        return <RouteWithSubRoutes key={i} {...route} />
                    })}
                </Switch>
            </Box>
        </Box>
    )
}