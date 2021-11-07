import React from 'react'

import { Alert, Box, Snackbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    alertStyle: {
        maxWidth: '100%',
        marginTop: '60px'
    }
})

const SnackBarComponent = ({
    open,
    severity,
    title,
    message,
    onClose
}) => {
    const classes = useStyles()

    return <Snackbar
        id="snackbar-open"
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
        }}
        open={open}
        autoHideDuration={5000}
        onClose={onClose}>
        <Alert
            id="alert-message"
            className={classes.alertStyle}
            variant="filled"
            onClose={onClose}
            severity={severity}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography>{title}</Typography >
                <Typography variant="caption">{message}</Typography >
            </Box>
        </Alert>
    </Snackbar>
}

export default SnackBarComponent