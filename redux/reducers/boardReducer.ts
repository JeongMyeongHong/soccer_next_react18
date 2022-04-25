import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface BoardType{
    title: string;
    name: string;  
    subject: string;
    contents: string;  
}

// state
export interface BoardState{
    loading: boolean;
    data: BoardType[];
    error: any; //에러는 타입 종류 상관없이 다 잡는다.
}


const initialState: BoardState = {
    loading: false,
    data: [],
    error: null
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard: (state: BoardState, payload) => { alert('진행2: 리듀서 내부'), state.loading = true },
        addSuccess(state: BoardState, {payload}){ state.data = [...state.data, payload], state.loading = false },
        addFailure(state: BoardState, {payload}){ state.data = payload, state.loading = false },
    }
})
const { reducer, actions } = boardSlice //reducer는 함수 + actions는 객체 = userSlice는 기능+객체 = 객체
export const boardActions = actions
export default reducer