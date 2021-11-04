import React, { useState } from 'react'
import { useFormik } from 'formik'
import { connect, useDispatch, useSelector } from 'react-redux'
import Helmet from 'react-helmet'

import {
    Alert,
    Box,
    Button,
    InputAdornment,
    Link,
    Paper,
    Snackbar,
    SvgIcon,
    TextField,
    Typography
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
import clsx from 'clsx'

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
        flexDirection: 'column',
        width: 300
    },
    textField: {
        margin: `${theme.spacing(3)} 0px`
    },
    linkForgot: {
        paddingTop: theme.spacing(3)
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
        initialValues: { email: '', password: '' },
        validationSchema: ValidateAccess,
        validateOnMount: true,
        onSubmit: values => dispatch(loginRequest(values))
    })

    function handleClickShowPassword() {
        setShowPassword(!showPassword)
    }

    return <Box>
        <Helmet>
            <title>Autenticação</title>
        </Helmet>

        <Snackbar
            id="snackbar-open"
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={layout.snackbar.enableSnackbar}
            autoHideDuration={5000}
            onClose={() => dispatch(enableSnackbar(!layout.snackbar.enableSnackbar))}>
            <Alert
                id="alert-message"
                variant="filled"
                severity={layout.snackbar.severity}
                sx={{ maxWidth: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography>{layout.snackbar.title}</Typography >
                    <Typography variant="caption">
                        {layout.snackbar.message}
                    </Typography >
                </Box>
            </Alert>
        </Snackbar>

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
            <Link className={classes.linkForgot} href="/authenticate">Esqueci minha senha</Link>
        </Paper>
    </Box>
}

export default connect()(LoginComponent)