import React from 'react'

import { createTheme, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import './assets/styles/global.css'

import Routes from './routes'
import { theme } from './assets/styles/theme'

export default function LayoutMain() {

    return <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <Routes />
    </ThemeProvider>
}