import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch4,fetch3 } from "../../helpers";

const initialState ={
    skills:[],
    skill:{},
    errorSkill:null,
    loadingSkill:false,
    levels:{}
}

export const getLevels = createAsyncThunk(
    'getLevels',
    async()=>{
        const result = await fetch3('levels/')
        return result
    }
)
export const createLevels = createAsyncThunk(
    'createLevels',
    async(body)=>{
        const result = await fetch4('levels/', body)
        return result
    }
)
const skillSlice = createSlice({
    name:'skill',
    initialState,
    reducers:{

    },
    extraReducers:{
        [getLevels.fulfilled]:(state,{payload:{error, levels}})=>{
            state.loadingSkill = false
            if(error){
                state.errorSkill = error
            }else{
                state.errorSkill = null
            }
            if(levels){
                state.levels = levels
            }else{
                state.levels = null
            }
        },
        [getLevels.pending]:(state,action)=>{
            state.loadingSkill = true
        }
    }
})

export const {} = skillSlice.actions
export default skillSlice.reducer