
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser : JSON.parse(localStorage.getItem('user')) || null,
    loading : false
}

const userSlice = createSlice ({

    name : 'user',
    initialState : initialState,

    reducers :{
        setUser : (state,action) => {
            state.loggedInUser  = action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
        },
        removeUser : (state) =>{
            state.loggedInUser = null;
            localStorage.removeItem('user');
        }
        ,
        setLoading : (state,action) => {
            state.loading = action.payload
        }
    }
})
export const {setUser,removeUser,setLoading} = userSlice.actions;
export default userSlice.reducer;