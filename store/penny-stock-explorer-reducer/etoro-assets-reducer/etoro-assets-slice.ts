import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InstrumentDisplayData } from '../../../services/api-services/api-services-types'
import eToroAssetsReducerHelper from './etoro-assets-reducer-helper'

interface EToroAssetsState {
  allAssets: InstrumentDisplayData[]
  filteredAssets: InstrumentDisplayData[]
}

const initialState: EToroAssetsState = {
  allAssets: [],
  filteredAssets: [],
}

const eToroAssetsSlice = createSlice({
  name: 'eToroAssets',
  initialState,
  reducers: {
    setAllAssets: (state, action: PayloadAction<InstrumentDisplayData[]>) => {
      state.allAssets = action.payload
    },
    filterAssetsByPrice: (state, action: PayloadAction<{ topThreshold?: number; bottomThreshold?: number }>) => {
      const { topThreshold, bottomThreshold } = action.payload

      const tempAllAssets = [...state.allAssets]

      const filtered = eToroAssetsReducerHelper.filterAssetsForThresholds(tempAllAssets, topThreshold, bottomThreshold)

      state.filteredAssets = filtered
    },
  },
})

export const { setAllAssets, filterAssetsByPrice } = eToroAssetsSlice.actions

export default eToroAssetsSlice.reducer
