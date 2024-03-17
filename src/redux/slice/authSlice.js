import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : JSON.parse(localStorage.getItem('token')) || null,
    loading : false
}

const authSlice = createSlice({
    name : 'auth'
    ,
    initialState : initialState,
    reducers : {
        login : (state,action) => {
            state.token = action.payload;
            localStorage.setItem('token',JSON.stringify(action.payload));
        }
        ,
        logout : (state) =>{
            state.token = null;
            localStorage.removeItem('token');
        },
        setLoading : (state,action) =>{
            state.loading  =  action.payload;
        }
    }
})

export const {login,logout,setLoading} = authSlice.actions;
export default authSlice.reducer;