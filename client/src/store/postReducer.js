import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: []
    },
    reducers: {
        get: (state, action) => {
            state.post = action.payload
        },
        add: (state, action) => {
            state.post = [action.payload, ...state.post]
        },
        unlike: (state, action) => {
            state.post = state.post.map((item)=>{
                if (item._id === action.payload._id) {
                    return action.payload
                }
                return item
            })
        },
        like: (state, action) => {
            state.post = state.post.map((item)=>{
                if (item._id === action.payload._id) {
                    return action.payload
                }
                return item
            })
        }
    }
})

export const {get, add, like, unlike} = postSlice.actions
export default postSlice.reducer