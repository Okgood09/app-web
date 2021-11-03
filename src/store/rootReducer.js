import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import layout from './ducks/layout/reducer'
import auth from './ducks/auth/reducer'
import user from './ducks/user/reducer'

export const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    user
})