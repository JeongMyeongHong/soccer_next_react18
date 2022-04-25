import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const adminSlice = createSlice({
    name: 'admins',
    initialState,
    reducers: {
        access(state, action){}
    }
})

export default adminSlice.reducer