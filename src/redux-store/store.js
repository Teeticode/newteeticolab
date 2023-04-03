import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AuthSlice from './auth/AuthSlice';
import UserSlice from './auth/UserSlice';
import AboutSlice, { getAbout } from './features/AboutSlice';
import skillSlice from './features/skillSlice';

export const store = configureStore({
    reducer:{
        auth:AuthSlice,
        user:UserSlice,
        about:AboutSlice,
        skill:skillSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})


