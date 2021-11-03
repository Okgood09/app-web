import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { Box, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { animation } from '../../assets/styles/theme'

const useStyles = makeStyles({
    ...animation
})

const HomeComponent = () => {

    const classes = useStyles()

    return <Box className={classes.fadeIn1}>
        <Helmet>
            <title>Página inicial</title>
        </Helmet>

        <Paper>
            Página Inicial
        </Paper>
    </Box>
}

export default connect()(HomeComponent)