import { configureStore } from '@reduxjs/toolkit'
import  adminSlice  from './slices/slice'
export const store = configureStore({
    reducer: {
        adminState: adminSlice,
    },
})