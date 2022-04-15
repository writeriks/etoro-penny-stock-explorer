import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DisplayState {
  globalLoading: boolean
  topThreshold: number
  bottomThreshold: number
  errorMessage: string
  assetName: string
  pageNumber: number
}

const initialState: DisplayState = {
  globalLoading: false,
  topThreshold: 10,
  bottomThreshold: 0,
  errorMessage: '',
  assetName: '',
  pageNumber: 1,
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
    setPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    },
  },
})

export const { setLoading, setTopThreshold, setBottomThreshold, setAssetName, setErrorMEssage, setPage } =
  displaySlice.actions

export default displaySlice.reducer
