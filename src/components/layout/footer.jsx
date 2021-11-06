import React from 'react'

import { makeStyles } from '@mui/styles'

import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const useStyles = makeStyles({
    boxFooter: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const FooterComponent = () => {

    const classes = useStyles()

    const year = new Date().getFullYear()

    return <Box className={classes.boxFooter}>
        <Typography variant="caption">
            © {year} Bug Report | Desenvolvido por Diego Muniz
        </Typography>
    </Box>
}

export default FooterComponent