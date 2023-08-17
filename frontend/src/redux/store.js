import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './productListSlice';
import productDetailSlice from './productDetailSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const store = configureStore({
  reducer: {
    products: productListSlice,
    product: productDetailSlice,
    cart: cartSlice,
    userLogin: userSlice
  },
  preloadedState: {
    cart: {
      cartItems: cartItemsFromStorage
    },
    userLogin: {
      userInfo: userInfoFromStorage
    }
  }
})

export default store;