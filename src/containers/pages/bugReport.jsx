import React, { useState } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import backgroundImage from '../../assets/images/background.png'

import {
    Box, Button, Dialog, Grid, Hidden, Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'

import { animation, theme } from '../../assets/styles/theme'
import BugReportNameLogo from '../../assets/images/logo/NameBugReport.png'
import BugReportLogo from '../../assets/images/logo/BugReportLogo.png'
import BugReportIconLogo from '../../assets/images/logo/BugIcon.png'
import LoginComponent from '../../containers/auth/login'
import CreateComponent from '../../containers/auth/create'
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons'

const useStyles = makeStyles({
    ...animation,
    boxScreen: {
        background: 'url(../../assets/images/background.png)',
        minHeight: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    },
    boxContent: {
        maxWidth: 1106,
        margin: '0 auto',
        width: '100%',
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`
    },
    border: {
        border: '1px solid red'
    },
    contentBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})

const BugReportComponent = () => {

    const [dialogLogin, setDialogLogin] = useState(false)
    const [dialogCreate, setDialogCreate] = useState(false)

    const classes = useStyles()


    return <Box className={classes.boxScreen}>
        <Helmet>
            <title>Bug Report</title>
        </Helmet>

        <Dialog open={dialogLogin} onClose={() => setDialogLogin(!dialogLogin)}>
            <LoginComponent />
        </Dialog>

        <Dialog
            fullWidth={true}
            open={dialogCreate}
            onClose={() => setDialogCreate(!dialogCreate)}>
            <CreateComponent />
        </Dialog>

        <Box className={classes.boxContent}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <img width={80} src={BugReportLogo} alt="LOGO" />
                <Button
                    size="small"
                    onClick={() => setDialogLogin(!dialogLogin)}
                    variant="outlined">Entrar</Button>
            </Box>
            <Grid pt={5} container={true}>
                <Grid className={classes.contentBox} item={true} xs={12} sm={12} md={6} lg={6}>
                    <Box pt={5} flexDirection="column">
                        <Hidden only={['xs', 'sm']}>
                            <img width="60%" src={BugReportNameLogo} alt="LOGO" />
                        </Hidden>
                        <Hidden only={['md', 'lg', 'xl']}>
                            <img width="90%" src={BugReportLogo} alt="LOGO" />
                        </Hidden>
                        <Typography variant="h5">
                            Sistema para realizar os reports de erros de suas aplicações.
                        </Typography>
                        <Box pt={4}>
                            <Button
                                size="large"
                                onClick={() => setDialogCreate(!dialogCreate)}
                                endIcon={<ArrowForwardIcon />}
                                variant="contained">Começar</Button>
                        </Box>
                    </Box>
                </Grid>
                <Hidden only={['xs', 'sm']}>
                    <Grid className={classes.contentBox} item={true} xs={12} sm={12} md={6} lg={6}>
                        <img width="100%" src={BugReportIconLogo} alt="LOGO" />
                    </Grid>
                </Hidden>
            </Grid>
        </Box>
    </Box >
}

export default connect()(BugReportComponent)