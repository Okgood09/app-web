import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'

export const history = createBrowserHistory()
const SagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(SagaMiddleware, routerMiddleware(history))
    )
)

SagaMiddleware.run(rootSaga)

export default store