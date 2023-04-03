import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2, fetch3, fetch4, fetch5 } from "../../helpers";
import { getUser } from "../auth/UserSlice";

const initialState = {
    message:'',
    about:{},
    error:'',
    loading:false,
    loadingPing:false
}

export const createAbout = createAsyncThunk(
    'createAbout',
    async (body)=>{
        const result = await fetch4('about/',body)
        return result
    }
)
export const getAbout = createAsyncThunk(
    'getAbout',
    async (id)=>{
        const result = await fetch3(`about/${id}`)
        return result
    }
)
export const getPing = createAsyncThunk(
    'getPing',
    async (id)=>{
        const result = await fetch3(`about/${id}`)
        return result
    }
)
export const updateAbout = createAsyncThunk(
    'updateAbout',
    async (id,body)=>{
        const result = await fetch5(`about/info/${id}`,body)
        return result
    }
)
const AboutSlice = createSlice({
    name:'about',
    initialState,
    reducers:{

    },
    extraReducers:{
        [createAbout.fulfilled]:(state,{payload:{error,message}})=>{
            state.loading = false
            if(error){
                state.error = error
                
            }else{
                state.error=null
                
            }
            if(message){
                state.message = message
            }else{
                state.message = null
            }
        },
        [createAbout.pending]:(state,action)=>{
            state.loading = true
        },
        [getAbout.fulfilled]:(state,{payload:{error, about}})=>{
            state.loading = false;
            if(error){
                state.error = error;
            }else{
                
                state.error = null
            }
            if(about){
                state.about = about
            }else{
                state.about = ''
            }
        },
        [getAbout.pending]:(state,action)=>{
            state.loading = true
        },
        [updateAbout.fulfilled]:(state,{payload:{error, message,about}})=>{
            state.loading = false;
            if(error){
                state.error = error
            }else{
                state.error = null
                state.message = message
            }
            
        },
        [updateAbout.pending]:(state,action)=>{
            state.loading = true;
        },
        [getPing.fulfilled]:(state,{payload:{error,about}})=>{
            state.loadingPing = false
            if(error){
                state.error = error;
            }else{
                
                state.error = null
            }
            if(about){
                state.about = about
            }else{
                state.about = null
            }
        },
        [getPing.pending]:(state,action)=>{
            state.loadingPing = true
        }
    }
})
export const {} = AboutSlice.actions
export default AboutSlice.reducer