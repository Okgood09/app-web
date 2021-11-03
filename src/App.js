import React from 'react'
import { Provider } from 'react-redux'
import './assets/styles/global.css'

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
        `%cBug Report%cby Diego Muniz\n%cv${VERSION}`,
        style1,
        style2,
        style3
    )

    return <Provider store={store}>
        <LayoutMain />
    </Provider>
}

export default App
