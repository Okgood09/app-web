import React, { useState } from 'react'
import { useFormik } from 'formik'
import clsx from 'clsx'
import { connect, useDispatch, useSelector } from 'react-redux'
import Helmet from 'react-helmet'

import {
    Box,
    Button,
    InputAdornment,
    Link,
    Paper,
    SvgIcon,
    TextField
} from '@mui/material'
import {
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
    Email as EmailIcon
} from '@material-ui/icons'
import { makeStyles } from '@mui/styles'

import { ReactComponent as LogoBugReport } from '../../assets/images/logo/BugReportLogo.svg'
import { animation, theme } from '../../assets/styles/theme'
import { loginRequest } from '../../store/ducks/auth/actions'
import { ValidateAccess } from '../../store/application/validator/access.validator'
import { enableSnackbar } from '../../store/ducks/layout/actions'
import SnackBarComponent from '../../components/layout/snackbar'

const useStyles = makeStyles({
    ...animation,
    boxPaper: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContent: {
        display: 'flex',
        flexDirection: 'column'
    },
    textField: {
        margin: `${theme.spacing(3)} 0px`
    },
    linkForgot: {
        margin: `${theme.spacing(3)} 0px`
    },
    iconVisibility: {
        cursor: 'pointer'
    }
})

const LoginComponent = () => {

    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()
    const layout = useSelector((state) => state.layout)

    const classes = useStyles()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: ValidateAccess,
        onSubmit: values => dispatch(loginRequest(values))
    })

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return <Box>
        <Helmet>
            <title>Autenticação</title>
        </Helmet>

        <SnackBarComponent
            open={layout.snackbar.enableSnackbar}
            severity={layout.snackbar.severity}
            title={layout.snackbar.title}
            message={layout.snackbar.message}
            onClose={() => dispatch(enableSnackbar(!layout.snackbar.enableSnackbar))} />

        <Paper className={clsx(classes.fadeInContent, classes.boxPaper)}>
            <SvgIcon
                style={{ fontSize: 150 }}
                component={LogoBugReport}
                viewBox="0 0 220 88" />
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
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <EmailIcon />
                                </InputAdornment>
                            }}
                        />
                    </Box>
                    <Box className={classes.textField}>
                        <TextField
                            id="input-password"
                            name="password"
                            label="Senha"
                            type={showPassword ? 'text' : 'password'}
                            variant="filled"
                            fullWidth={true}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            InputProps={{
                                endAdornment: showPassword
                                    ? <InputAdornment position="end">
                                        <VisibilityIcon
                                            id="icon-visibility"
                                            className={classes.iconVisibility}
                                            onClick={handleClickShowPassword} />
                                    </InputAdornment>
                                    : <InputAdornment position="end">
                                        <VisibilityOffIcon
                                            id="icon-visibilityoff"
                                            className={classes.iconVisibility}
                                            onClick={handleClickShowPassword} />
                                    </InputAdornment>
                            }}
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
            {/* TODO: adicionar lógica para recuperação de senha. */}
            <Link className={classes.linkForgot} href="/">Esqueci minha senha</Link>
        </Paper>
    </Box>
}

export default connect()(LoginComponent)