import { Box, Drawer, List, ListItem, ListItemText, SvgIcon } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useHistory } from 'react-router-dom'

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

export default function DrawerComponent({ drawerEnable, handleDrawerToggle }) {

    const history = useHistory()

    const classes = useStyles()

    const drawer = (
        <Box component="div">
            <Box display="flex" justifyContent="center">
                <SvgIcon
                    className={classes.svgIcon}
                    component={LogoBugReport}
                    viewBox="0 0 224 90"
                    onClick={() => history.push('/')} />
            </Box>
            <List>
                <ListItem to="/app" button={true}>
                    <ListItemText primary="Página inicial" />
                </ListItem>
                <ListItem to="/app/users" button={true}>
                    <ListItemText primary="Usuários" />
                </ListItem>
            </List>
        </Box>
    )

    const container = window !== undefined
        ? () => window.document.body
        : undefined

    return <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
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
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}>
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', md: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open={true}>
            {drawer}
        </Drawer>
    </Box>
}