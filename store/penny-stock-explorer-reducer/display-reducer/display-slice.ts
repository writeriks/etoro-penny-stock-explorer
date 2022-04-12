import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DisplayState {
  globalLoading: boolean
  topThreshold: number
  bottomThreshold: number
  errorMessage: string
  assetName: string
}

const initialState: DisplayState = {
  globalLoading: false,
  topThreshold: 10,
  bottomThreshold: 0,
  errorMessage: '',
  assetName: '',
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
    setErrorMEssage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
    setAssetName: (state, action: PayloadAction<string>) => {
      state.assetName = action.payload
    },
  },
})

export const { setLoading, setTopThreshold, setBottomThreshold, setAssetName, setErrorMEssage } = displaySlice.actions

export default displaySlice.reducer
