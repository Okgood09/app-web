import { Provider } from 'react-redux'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import store from './store'
import Routes from './routes'
import { theme } from './assets/styles/theme'
import * as PackageJson from '../package.json'

import './assets/styles/global.css'

const VERSION = PackageJson.version

function App() {

  const commonStyle = 'font-weight: bold;font-style: italic;font-style: italic;'
  const style1 = `${commonStyle};font-size: 40px;color: #00a594;`
  const style2 = `${commonStyle};font-size: 12px;padding-left: 5px;color: #555;`
  const style3 = `${commonStyle};font-size: 8px;color: #555;`

  console.log(`%cApplication%cby Developer\n%cv${VERSION}`, style1, style2, style3)

  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Routes />
    </Provider>
  </ThemeProvider>
}

export default App;
