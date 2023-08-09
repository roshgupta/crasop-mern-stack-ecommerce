import { configureStore } from '@reduxjs/toolkit'
import productListSlice from './productListSlice';
import productDetailSlice from './productDetailSlice';

const store = configureStore({
  reducer: {
    products: productListSlice,
    product: productDetailSlice,
  },
})

export default store;