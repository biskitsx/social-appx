import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        },
        update: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer