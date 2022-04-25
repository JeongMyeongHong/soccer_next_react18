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
    yield takeLatest(UserType.USER_ADD_REQUEST, addUser)
}
