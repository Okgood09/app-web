import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import Routes from './routes'
import { theme } from './assets/styles/theme'

import './assets/styles/global.css'
import i18next from 'i18next'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeLanguage } from './store/ducks/layout/actions'

export default function LayoutMain() {

    const language = useSelector(state => {
        return state.layout.language
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeLanguage(language.lng))
    }, [dispatch, language.lng])

    return <ThemeProvider theme={createTheme(theme, i18next.changeLanguage(language.lng))}>
        <CssBaseline />
        <Routes />
    </ThemeProvider>
}