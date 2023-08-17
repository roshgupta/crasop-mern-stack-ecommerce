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
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post('/api/users/login', payload, config)
      localStorage.setItem('userInfo', JSON.stringify(data))
      return data
    } catch (error) {
      throw new Error(error.response && error.response.data.message ? error.response.data.message : error.message)
    }

  }
)


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userInfo')
      state.userInfo = null
      state.loading = null
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true
    })
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload
    })
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const { logout } = userSlice.actions

export default userSlice.reducer