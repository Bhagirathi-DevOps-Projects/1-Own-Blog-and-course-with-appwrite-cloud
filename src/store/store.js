import { configureStore } from '@reduxjs/toolkit';
import authSlick from './authSlick';
const store = configureStore({
    reducer:{
        auth : authSlick
    }
})

export default store;