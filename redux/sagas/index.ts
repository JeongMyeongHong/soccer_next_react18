import { all } from 'redux-saga/effects'
import { watchAddTodo } from './todoSaga.ts'
import { watchJoin, watchLogin } from './userSaga.ts'
import { watchAddboard } from './boardSaga.ts'

export default function* rootSaga(){
    yield all([watchJoin(), watchLogin(), watchAddTodo(), watchAddboard()])
}