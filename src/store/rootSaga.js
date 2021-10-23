import { all, fork } from 'redux-saga/effects'

import user from './ducks/user/sagas'

export default function* rootSaga() {
    return yield all([
        fork(user)
    ])
}