import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            if (action.payload == null) {
                return
            }
            state.user = action.payload
            if (!!!state.user.picturePath || state.user?.picturePath?.url == "" || !!!state.user?.picturePath?.url) {
                state.user.picturePath.url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
        },
        logout: (state) => {
            state.user = null
        },
        update: (state, action) => {
            state.user = action.payload
            if (!!!state.user.picturePath || state.user.picturePath?.url == "" || !!!state.user.picturePath?.url) {
                state.user.picturePath.url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer