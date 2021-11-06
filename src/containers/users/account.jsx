import React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { Alert, Box, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { animation, theme } from '../../assets/styles/theme'

const useStyles = makeStyles({
    ...animation,
    boxPaper: {
        padding: theme.spacing(1)
    }
})

const AccountComponent = () => {

    const classes = useStyles()

    return <Box className={classes.fadeIn1}>

        <Helmet>
            <title>Minha conta</title>
        </Helmet>

        <Paper className={classes.boxPaper}>
            <Typography variant="button">
                Dados pessoais
            </Typography>

            <Alert severity="info">
                Cadastro realizado no dia
            </Alert>
        </Paper>
    </Box>
}

export default connect()(AccountComponent)