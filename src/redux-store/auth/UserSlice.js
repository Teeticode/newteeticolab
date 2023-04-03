import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetch3 } from "../../helpers";

const initialState={
    user:{},
    loadingUser:false,
    errorUser:''
};

export const getUser = createAsyncThunk(
    'getUser',
    async ()=>{
        const result = await fetch3('users/profile')
        return result
    }
)

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        userid :(state,action)=>{

        }
    },
    extraReducers:{
        [getUser.fulfilled]:(state,{payload:{user, error}})=>{
            state.loadingUser = false
            if(error){
                state.errorUser = error
                state.user = null
            }else{
                state.errorUser = null
                state.user = user
            }
        },
        [getUser.pending]:(state, action)=>{
            state.loadingUser = true
        }
    }
})
export const {userid} = userSlice.actions
export default userSlice.reducer