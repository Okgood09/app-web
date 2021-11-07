import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Helmet from 'react-helmet'

import { Alert, Box, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { animation, theme } from '../../assets/styles/theme'
import { findRequest } from '../../store/ducks/user/actions'
import AuthService from '../../services/auth.service'
import { formatDate } from '../../components/moment'

const useStyles = makeStyles({
    ...animation,
    boxPaper: {
        padding: theme.spacing(1)
    }
})

const AccountComponent = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user.create.user)
    const classes = useStyles()

    useEffect(() => {
        // TODO: inserir ID do usuário logado, fazer a função no auth service
        dispatch(findRequest(AuthService.userLogged()))
    }, [dispatch])

    return <Box className={classes.fadeIn1}>

        <Helmet>
            <title>Minha conta</title>
        </Helmet>

        <Paper className={classes.boxPaper}>
            <Typography variant="button">
                Dados pessoais
            </Typography>

            <Alert severity="info">
                Cadastro realizado em <b>{formatDate(user.created_at, 'LLL')}</b>
            </Alert>
        </Paper>
    </Box>
}

export default connect()(AccountComponent)