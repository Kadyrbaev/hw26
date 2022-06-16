import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartIsVisible: false,
    notification: null,
    isGetValid: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        hideNotification(state){
            state.notification=null
        },
        getZapros(state){
            state.isGetValid = !state.isGetValid
        }
    }
})
export const uiActions = uiSlice.actions
export default uiSlice