import React, { useState } from 'react'
import { useFormik } from 'formik'
import { connect, useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import Helmet from 'react-helmet'

import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Paper,
    SvgIcon,
    TextField
} from '@mui/material'
import {
    Visibility as VisibilityIcon,
    VisibilityOff as VisibilityOffIcon,
    Email as EmailIcon,
    Person as PersonIcon
} from '@material-ui/icons'
import { makeStyles } from '@mui/styles'

import { ReactComponent as LogoBugReport } from '../../assets/images/logo/BugReportLogo.svg'
import { animation, theme } from '../../assets/styles/theme'
import { createRequest } from '../../store/ducks/auth/actions'
import { ValidateCreateUser } from '../../store/application/validator/createUser.validate'

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
        margin: `${theme.spacing(1)} 0px`
    },
    iconVisibility: {
        cursor: 'pointer'
    }
})

const CreateComponent = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)

    const classes = useStyles()

    const formik = useFormik({
        initialValues: { ...user?.toJSON() },
        validationSchema: ValidateCreateUser,
        validateOnMount: true,
        onSubmit: values => {
            console.log('VALUES', values)
            return dispatch(createRequest(values))
        }
    })

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    return <Box>
        <Helmet>
            <title>Cadastrar</title>
        </Helmet>

        <Paper className={clsx(classes.fadeInContent, classes.boxPaper)}>
            <SvgIcon
                style={{ fontSize: 150 }}
                component={LogoBugReport}
                viewBox="0 0 220 88" />
            <Box className={classes.boxContent}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container={true} spacing={1}>

                        <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.textField}>
                                <TextField
                                    id="input-name"
                                    name="name"
                                    label="Nome"
                                    variant="filled"
                                    fullWidth={true}
                                    value={formik.values.name || ''}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    onBlur={formik.handleBlur}
                                    helperText={formik.touched.name && formik.errors.name}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <PersonIcon />
                                        </InputAdornment>
                                    }} />
                            </Box>
                        </Grid>

                        <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.textField}>
                                <TextField
                                    id="input-email"
                                    name="email"
                                    label="E-mail"
                                    variant="filled"
                                    fullWidth={true}
                                    value={formik.values.email || ''}
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
                        </Grid>

                        <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.textField}>
                                <TextField
                                    id="input-password"
                                    name="password"
                                    label="Senha"
                                    type={showPassword ? 'text' : 'password'}
                                    variant="filled"
                                    fullWidth={true}
                                    value={formik.values.password || ''}
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
                        </Grid>

                        <Grid item={true} xs={12} sm={6} md={6} lg={6}>
                            <Box className={classes.textField}>
                                <TextField
                                    id="input-confirm-password"
                                    name="confirm_password"
                                    label="Confirmar senha"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    variant="filled"
                                    fullWidth={true}
                                    value={formik.values.confirm_password || ''}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                                    InputProps={{
                                        endAdornment: showConfirmPassword
                                            ? <InputAdornment position="end">
                                                <VisibilityIcon
                                                    id="icon-visibility"
                                                    className={classes.iconVisibility}
                                                    onClick={handleClickShowConfirmPassword} />
                                            </InputAdornment>
                                            : <InputAdornment position="end">
                                                <VisibilityOffIcon
                                                    id="icon-visibilityoff"
                                                    className={classes.iconVisibility}
                                                    onClick={handleClickShowConfirmPassword} />
                                            </InputAdornment>
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    <Box pt={1} display="flex" justifyContent="flex-end">
                        <Button
                            id="button-submit"
                            type="submit"
                            disabled={!formik.isValid}
                            color="primary"
                            variant="contained">
                            CADASTRAR
                        </Button>
                    </Box>
                </form>
            </Box>
        </Paper>
    </Box>
}

export default connect()(CreateComponent)