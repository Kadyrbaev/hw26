
import { uiActions } from "./uiSlice";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  array: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) { // type: 'kfdksgf'
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === newItem.id);
      state.totalQuantity++
      const num = +newItem.price
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: num,
          quantity: 1,
          totalPrice: num,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + num;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.itemId === id);
      state.totalQuantity--
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      if(existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.itemId !== id)
      } else {
        existingItem.quantity--
      }
    },
    deleteCart(state, action){
      const id = action.payload
      state.items = state.items.find(el=>el.id !== id)
      console.log(state.items);
    },
    zapros(state,action){
      console.log(action.payload);
      state.array = action.payload
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

