import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    name: 'forgot my name',
    socket: null,
    message: null
}
export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        addSocket: (state, action) => {
            console.log('call');

            state.socket = action.payload.socket
        },
        addMessage: (state, action) => {
            state.message = action.payload.message
        },
    },
})

// Action creators are generated for each case reducer function
export const { addSocket,addMessage } = adminSlice.actions
export default adminSlice.reducer