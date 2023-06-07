import {configureStore} from '@reduxjs/toolkit'
import { stepSlice } from './slices/stepSlice'

export const store = configureStore({
    reducer: {
        step: stepSlice.reducer,
    }
})