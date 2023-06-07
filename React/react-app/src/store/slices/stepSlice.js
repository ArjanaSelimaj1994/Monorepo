import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '1/2'
}

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setStep } = stepSlice.actions;

export default stepSlice.reducer