import { HYDRATE } from 'next-redux-wrapper'
import * as UserType from '../types'

const initialState = {
    users: [],
    loginUser: null
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case HYDRATE:
            console.log('### Error: Hydration failed because the initial UI does not match what was rendered on the server. ###')
            return { ...state, ...action.payload }
        case UserType.USER_ADD_SUCCESSED:
            return { ...state, users: [action.payload, ...state.users] }
    }
}