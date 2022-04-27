import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import user, { userSaga } from './user'
import counter, { counterSaga } from './counter'
import auth, {authSaga} from './auth'
import loading from './loading'

const rootReducer = combineReducers({
    counter,
    user,
    auth,
    loading
})
export function* rootSaga(){
    yield all([ counterSaga(), userSaga(), authSaga() ])
}
export default rootReducer