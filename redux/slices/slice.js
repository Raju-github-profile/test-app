import { createSlice } from '@reduxjs/toolkit'
import localStorage from 'localStorage'
const initialState = {
    user: false,
    token: null,
    value: 0,
    name: 'forgot my name',
    socket: null,
    message: null,
    alanInstance: null
}
export const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        // addToken:(state,actio)

        addSocket: (state, action) => {
            console.log('call');
            state.socket = action.payload.socket
        },
        addMessage: (state, action) => {
            state.message = action.payload.message
        },
        addAlanInstance: (state, action) => {
            state.alanInstance = action.payload.alanInstance
            console.log(action.payload.alanInstance);
        },
        handleRegister: (state, action) => {
            console.log('first')
            state.user = action.payload.bool
            const token = ejh465732381216455748;
            localStorage.setItem('myKey', JSON.stringify(token));
            const myValue = localStorage.getItem('myKey');
            console.log(myValue)

        },
        handleLogin: (state, action) => {
            state.user = action.payload.bool
            console.log('first')
            state.user = action.payload.bool

            var token = `Bearer ${tokenValue}`;
            localStorage.setItem('myKey', JSON.stringify(token));
            // const myValue = localStorage.getItem('myKey');
            // const value = JSON.parse(myValue)

        },

    }
})
export const { addSocket, addMessage, addAlanInstance, handleRegister, handleLogin } = adminSlice.actions
export default adminSlice.reducer