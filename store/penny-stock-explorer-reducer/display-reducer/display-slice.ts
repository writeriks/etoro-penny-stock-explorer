import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DisplayState {
  globalLoading: boolean
  topThreshold: number
  bottomThreshold: number
}

const initialState: DisplayState = {
  globalLoading: false,
  topThreshold: 10,
  bottomThreshold: 0,
}

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload
    },
    setTopThreshold: (state, action: PayloadAction<number>) => {
      state.topThreshold = action.payload
    },
    setBottomThreshold: (state, action: PayloadAction<number>) => {
      state.bottomThreshold = action.payload
    },
  },
})

export const { setLoading, setTopThreshold, setBottomThreshold } = displaySlice.actions

export default displaySlice.reducer
