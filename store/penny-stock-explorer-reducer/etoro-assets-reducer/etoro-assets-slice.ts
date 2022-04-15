import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InstrumentDisplayData } from '../../../services/api-services/api-services-types'
import eToroAssetsReducerHelper from './etoro-assets-reducer-helper'

interface EToroAssetsState {
  allAssets: InstrumentDisplayData[]
  filteredAssets: InstrumentDisplayData[]
  paginatedAssets: InstrumentDisplayData[]
}

const initialState: EToroAssetsState = {
  allAssets: [],
  filteredAssets: [],
  paginatedAssets: [],
}

const eToroAssetsSlice = createSlice({
  name: 'eToroAssets',
  initialState,
  reducers: {
    setAllAssets: (state, action: PayloadAction<InstrumentDisplayData[]>) => {
      state.allAssets = action.payload
    },
    filterAssetsByPrice: (state, action: PayloadAction<{ topThreshold: number; bottomThreshold: number }>) => {
      const { topThreshold, bottomThreshold } = action.payload

      const tempAllAssets = [...state.allAssets]

      const filtered = tempAllAssets.filter((asset) => asset.Price <= topThreshold && asset.Price >= bottomThreshold)

      state.filteredAssets = filtered
    },
    filterAssetsByName: (state, action: PayloadAction<string>) => {
      const tempAllAssets = [...state.allAssets]

      const filtered = tempAllAssets.filter(
        (asset) =>
          asset.InstrumentDisplayName.toLowerCase().includes(action.payload.toLowerCase()) ||
          asset.SymbolFull.toLowerCase().includes(action.payload.toLowerCase())
      )

      state.filteredAssets = filtered
    },
    paginateAssetsByLimits: (state, action: PayloadAction<{ lowerLimit: number; upperLimit: number }>) => {
      const assets = [...state.filteredAssets]
      const { lowerLimit, upperLimit } = action.payload

      state.paginatedAssets = assets.slice(lowerLimit, upperLimit)
    },
  },
})

export const { setAllAssets, filterAssetsByPrice, filterAssetsByName, paginateAssetsByLimits } =
  eToroAssetsSlice.actions

export default eToroAssetsSlice.reducer
