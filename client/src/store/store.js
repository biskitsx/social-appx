import { configureStore } from "@reduxjs/toolkit";
import userSlice from './Reducer.js'
import postSlice from './postReducer.js'

export default configureStore({
    reducer: {
        user: userSlice,
        post: postSlice
    }
})