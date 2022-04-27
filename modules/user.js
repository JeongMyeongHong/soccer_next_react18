import createRequestSaga from "@/pages/apis/createReuqustSaga"
import {createAction, handleActions} from 'redux-actions'
import { HYDRATE } from "next-redux-wrapper"
import { takeLatest } from "redux-saga/effects"
import * as api from '@/pages/apis/api'

const USER_JOIN = 'user/USER_JOIN'
const USER_JOIN_SUCCESS = 'user/USER_JOIN_SUCCESS'

export const userJoin = createAction(USER_JOIN, payload => payload) //액션 생성함수

const userJoinSaga = createRequestSaga(USER_JOIN, api.userJoin)

export function* userSaga(){
    alert(`진행2 : 사가 이벤트 인지`)
    yield takeLatest(USER_JOIN, userJoinSaga)
}

const initialState = {
    users: [],
    loginUser: {
        isLogginIn: false,
        data: null
    }
}


const user = handleActions({//[]가 동적으로 키를 할당하는 방법 이부분이 SSR
    [HYDRATE]: (state, action) => ({
        ...state,
        post: action.payload
    }),
    [USER_JOIN_SUCCESS]: (state, action) => ({
        ...state,
        post: action.payload
    })
}, initialState)

export default user