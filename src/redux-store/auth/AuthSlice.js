import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetch2} from '../../helpers';

const initialState = {
    token:'',
    userLogin:{},
    loading:false,
    errorLogin:'',
    errorReg:'',
    message:''
}

export const loginUser = createAsyncThunk(
    'loginUser',
    async (body)=>{
        const result = await fetch2('users/login', body)
        return result 
    }
)
export const signupUser = createAsyncThunk(
    'signupUser',
    async (body)=>{
        const result = await fetch2('users/register', body)
        return result 
    }
)
export const addToken =createAsyncThunk(
    'addToken',
    async ()=>{
        const token = await localStorage.getItem('token');
        return token
    }
)

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.token = null;
            localStorage.removeItem('token')
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.fulfilled,(state,{payload:{error,user}})=>{
            state.loading = false;
            if(error){
                state.errorReg=null;
                state.errorLogin = error;
                state.message = null
                state.userLogin = null
            }else{
                state.errorReg=null;
                state.token = user.token;
                state.userLogin = user
                state.errorLogin = null;
                localStorage.setItem('token', user.token);
            }
        })
        .addCase(loginUser.pending,(state,action)=>{
            state.loading = true;
             
        })
        .addCase(addToken.fulfilled,(state,action)=>{
            state.token = action.payload;
        })
        .addCase(signupUser.fulfilled,(state,{payload:{error,message}})=>{
            state.loading = false;
            if(error){
                state.errorLogin = null
                state.errorReg=error;
                console.log(error)
                state.message = null;
            }else{
                state.errorLogin = null
                state.errorReg = null;
                state.message = message;
            } 
        })
        .addCase(signupUser.pending,(state,action)=>{
            state.loading = true
            state.message = null
        })
    }
})

export const {logout} = AuthSlice.actions
export default AuthSlice.reducer