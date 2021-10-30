import { all, fork } from 'redux-saga/effects'

import user from './ducks/user/sagas'
import auth from './ducks/auth/sagas'

export default function* rootSaga() {
    return yield all([
        fork(auth),
        fork(user)
    ])
}