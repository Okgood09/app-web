import { combineReducers } from 'redux'

import layout from './ducks/layout/reducer'
import user from './ducks/user/reducer'

export const rootReducer = combineReducers({
    layout,
    user
})