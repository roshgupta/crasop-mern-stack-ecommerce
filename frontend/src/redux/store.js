import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './productListSlice';
import productDetailSlice from './productDetailSlice';
import cartSlice from './cartSlice';

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const store = configureStore({
  reducer: {
    products: productListSlice,
    product: productDetailSlice,
    cart: cartSlice
  },
  preloadedState: {
    cart: {
      cartItems: cartItemsFromStorage
    }
  }
})

export default store;