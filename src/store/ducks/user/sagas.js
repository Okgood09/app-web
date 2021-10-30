import { all, put, takeLatest } from 'redux-saga/effects'
import UserService from '../../../services/users'
import { findFailure, findSuccess } from './actions'
import { UserTypes } from './types'

function* find(action) {
    const { id } = action.payload
    try {
        const response = yield UserService.find(id)
        yield put(findSuccess(response))
    } catch (error) {
        yield put(findFailure())
    }
}

export default function* userSaga() {
    return yield all([
        takeLatest(UserTypes.FIND_REQUEST, find)
    ])
}