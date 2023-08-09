import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  products: [],
  error: null
}
export const listProducts = createAsyncThunk(
  'product/listProducts',
  async () => {
    const { data } = await axios.get('/api/products')
    return data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(listProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })
    builder.addCase(listProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})



export default productSlice.reducer