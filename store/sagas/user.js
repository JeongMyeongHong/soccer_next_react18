import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as UserType from '../types'

function* addUser(action){
    try{
        const  newUser = yield response.json()
        yield put({
            type: UserType.USER_ADD_SUCCESSED,
            payload: newUser.data
        })
    }catch(err){
        yield put({
            type: UserType.USER_ADD_FAILED,
            payload: err.message
        })
    }
}

export function* watchAddUser(){
    yield takeLatest(UserType.USER_ADD_REQUESTED, addUser)
}

function* login(action){
    try{
        alert(`3. saga call`)
        const res = yield call(loginAPI, action.data)
        yield put({
            type: UserType.LOGIN_SUCCESSED,
            payload: res.data
        })
    }catch(err){
        yield put({
            type: UserType.LOGIN_FAILED,
            error: err.response.data
        })
    }
}
export function* watchLogin(){
    alert(`3. saga watch`)
    yield takeLatest(UserType.LOGIN_REQUESTED, login)
}