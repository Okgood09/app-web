import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material'

export default function DrawerComponent({ drawerEnable, handleDrawerToggle }) {

    const drawerWidth = 240

    const drawer = (
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
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