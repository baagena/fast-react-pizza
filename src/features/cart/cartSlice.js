import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
    // cart: [{
    //     pizzaId: 12,
    //     name: 'margarine',
    //     quantity: 2,
    //     unitPrice: 16,
    //     totalPrice: 32
    // }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // payload: newItem
        addItem(state,action) {
             state.cart.push(action.payload)
        },
        // payload: itemId
        deleteItem(state,action) {
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        // payload: itemId
        increaseItemQuantity(state,action) {
            item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++
        },
        // payload: itemId
        decreaseItemQuantity(state,action) {
            item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity--
        },

        clearCart(state) {
            state.cart = []
        }
    }
})

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = state => state.cart.cart

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);