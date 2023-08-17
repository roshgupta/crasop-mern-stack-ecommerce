import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  userInfo: {},
  error: null
}
export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post('/api/users/login', payload, config)
    localStorage.setItem('userInfo', JSON.stringify(data))
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(listProducts.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload
    })
    builder.addCase(listProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})



export default userSlice.reducer