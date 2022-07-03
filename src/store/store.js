import { configureStore } from '@reduxjs/toolkit';
import identitasReducer from '../features/identitasSlice';

export const store = configureStore({
    reducer : {
        identitas : identitasReducer
    }
});