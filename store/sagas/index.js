import { all } from 'redux-saga/effects'
import { watchAddUser, watchLogin } from './user'

export default function* rootSaga(){
    yield all([ watchAddUser(), watchLogin() ])
}