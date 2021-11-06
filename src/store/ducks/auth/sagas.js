import { all, put, takeLatest } from 'redux-saga/effects'

import AuthService from '../../../services/auth.service'

import {
    loginSuccess,
    loginFailure,
    createFailure,
    createSuccess
} from './actions'
import { AuthTypes } from './types'
import { history } from '../../index'

function* authenticate(action) {
    const { credentials } = action.payload
    try {
        const token = yield AuthService.authenticate(credentials)
        if (token) yield put(history.push('/app'))
        yield put(loginSuccess())
    } catch (error) {
        yield put(loginFailure())
    }
}

function* create(action) {
    const { user } = action.payload
    try {
        const response = yield AuthService.create(user)
        yield put(createSuccess(response))
    } catch (error) {
        yield put(createFailure())
    }
}

export default function* authSaga() {
    return yield all([
        takeLatest(AuthTypes.LOGIN_REQUEST, authenticate),
        takeLatest(AuthTypes.CREATE_USER_REQUEST, create)
    ])
}