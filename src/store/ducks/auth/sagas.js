import { all, put, takeLatest } from 'redux-saga/effects'

import AuthService from '../../../services/auth.service'
import { loginSuccess, loginFailure } from './actions'
import { AuthTypes } from './types'
import { history } from '../../index'

function* authenticate(action) {
    const { credentials } = action.payload
    try {
        const token = yield AuthService.authenticate(credentials)
        console.log('token saga', token)
        if (token) yield put(history.push('/app'))
        yield put(loginSuccess())
    } catch (error) {
        yield put(loginFailure())
    }
}

export default function* authSaga() {
    return yield all([
        takeLatest(AuthTypes.LOGIN_REQUEST, authenticate)
    ])
}