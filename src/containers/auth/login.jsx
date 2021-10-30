import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import { Box, Button, Paper, SvgIcon, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { ReactComponent as LogoBugReport } from '../../assets/images/logo/BugReportLogo.svg'
import { animation, theme } from '../../assets/styles/theme'
import { loginRequest } from '../../store/ducks/auth/actions'
import { ValidateAccess } from '../../store/application/validator/access.validator'

const useStyles = makeStyles({
    ...animation,
    boxScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        height: '100vh'
    },
    boxPaper: {
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContent: {
        display: 'flex',
        flexDirection: 'column',
        width: 300
    },
    textField: {
        margin: `${theme.spacing(3)} 0px`
    }
})

export default function LoginComponent() {

    const dispatch = useDispatch()

    const classes = useStyles()

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: ValidateAccess,
        validateOnMount: true,
        onSubmit: values => dispatch(loginRequest(values))
    })

    return <Box className={classes.boxScreen}>
        <Paper className={classes.boxPaper}>
            <SvgIcon
                style={{ fontSize: 150 }}
                component={LogoBugReport}
                viewBox="0 0 1384 553" />
            <Box className={classes.boxContent}>
                <form onSubmit={formik.handleSubmit}>
                    <Box className={classes.textField}>
                        <TextField
                            id="input-email"
                            name="email"
                            label="E-mail"
                            variant="filled"
                            fullWidth={true}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            onBlur={formik.handleBlur}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>
                    <Box className={classes.textField}>
                        <TextField
                            id="input-password"
                            name="password"
                            label="Senha"
                            type="password"
                            variant="filled"
                            fullWidth={true}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Box>
                    <Button
                        id="button-submit"
                        type="submit"
                        disabled={!formik.isValid}
                        fullWidth={true}
                        color="primary"
                        variant="contained">
                        ENTRAR
                    </Button>
                </form>
            </Box>
        </Paper>
    </Box >
}