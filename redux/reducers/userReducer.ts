import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

// state
export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any; //에러는 타입 종류 상관없이 다 잡는다.
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {//내부적으로 switch case 가 된다.
        joinRequest: (state: UserState, payload) => { alert('진행2: joinAction create'), state.loading = true },
        joinSuccess(state: UserState, {payload}){ state.data = [...state.data, payload], state.loading = false },
        joinFailure(state: UserState, {payload}){ state.data = payload, state.loading = false },

        loginRequest: (state: UserState, payload) => {state.loading = true },
        loginSuccess(state: UserState, {payload}){ state.data = [...state.data, payload], state.loading = false },
        loginFailure(state: UserState, {payload}){ state.data = payload, state.loading = false },
    }
})
const { reducer, actions } = userSlice //reducer는 함수 + actions는 객체 = userSlice는 기능+객체 = 객체
export const userActions = actions
export default reducer