import React from 'react'
import { Provider } from 'react-redux'
<<<<<<< HEAD
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
=======
import './assets/styles/global.css'
>>>>>>> 8828cbc1710bebab7063452ae985a7fd567fcbf3

import store from './store'
import * as PackageJson from '../package.json'
import LayoutMain from './layout'

const VERSION = PackageJson.version

const App = () => {

    const commonStyle = 'font-weight: bold;font-style: italic;font-style: italic;'
    const style1 = `${commonStyle};font-size: 40px;color: #00a594;`
    const style2 = `${commonStyle};font-size: 12px;padding-left: 5px;color: #555;`
    const style3 = `${commonStyle};font-size: 8px;color: #555;`

    console.log(
        `%cApplication%cby Developer\n%cv${VERSION}`,
        style1,
        style2,
        style3
    )

    return <Provider store={store}>
        <LayoutMain />
    </Provider>
}

export default App
