import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  cartItems: [],
  error: null
}
export const cartAddItem = createAsyncThunk(
  'product/cartAddItem',
  async (id, qty, { getState }) => {
    const { data } = await axios.get(`/api/products/${id}`)
    const payload = {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty
    }
    localStorage.setItem('cartItems', JSON.stringify([...getState().cart.cartItems, payload]))
    return payload
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cartAddItem.fulfilled, (state, action) => {
      const item = action.payload

      const existItem = state.cartItems.find(x => x.product === item.product)

      if (existItem) {
        state = {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        state = {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
      state.cartItems = action.payload
    })
    builder.addCase(cartAddItem.rejected, (state, action) => {
      state.error = action.error.message
    })
  }
})



export default cartSlice.reducer