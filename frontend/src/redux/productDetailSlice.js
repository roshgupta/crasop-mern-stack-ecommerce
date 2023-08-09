import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  product: { reviews: [] },
  error: null
}
export const productDetail = createAsyncThunk(
  'product/productDetail',
  async (id) => {
    const { data } = await axios.get(`/api/products/${id}`)
    return data
  }
)

export const productDetailSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productDetail.pending, (state) => {
      state.loading = true
    })
    builder.addCase(productDetail.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
    })
    builder.addCase(productDetail.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})



export default productDetailSlice.reducer