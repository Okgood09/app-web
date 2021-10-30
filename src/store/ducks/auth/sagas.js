import { all, put, takeLatest } from 'redux-saga/effects'
import AuthService from '../../../services/auth'
import { loginSuccess, loginFailure } from './actions'
import { AuthTypes } from './types'

function* authenticate(action) {
    const { credentials } = action.payload
    try {
        yield AuthService.authenticate(credentials)
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