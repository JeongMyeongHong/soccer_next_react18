import { HYDRATE } from 'next-redux-wrapper'
import * as T from '@/store/types'

const initialState = {
    loading: false,
    users: [],
    loginUser: null
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case HYDRATE:
            console.log('### Error: Hydration failed because the initial UI does not match what was rendered on the server. ###')
            return { ...state, ...action.payload }
        case T.USER_ADD_REQUESTED:
            return { ...state, users: [action.payload, ...state.users] }
        case T.USER_ADD_SUCCESSED:
            return { ...state, users: [action.payload, ...state.users] }
        case T.USER_ADD_FAILED:
            return { ...state, users: [action.payload, ...state.users] }

        case T.LOGIN_REQUESTED:
            return {
                ...state,
                loginLoading: true, 
                loginSucceed: false,
                loginError: null
              }
        case T.LOGIN_SUCCESSED:
            return {
                ...state,
                loginLoading: false, 
                loginSucceed: true,
                loginError: null,
                user: action.data
              }
        case T.LOGIN_FAILED:
            return {
                ...state,
                loginLoading: false, 
                loginSucceed: false,
                loginError: action.error
              }


        default:
            return state;
    }
}

export default userReducer