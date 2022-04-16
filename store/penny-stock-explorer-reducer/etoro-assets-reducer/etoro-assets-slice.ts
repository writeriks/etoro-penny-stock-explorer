import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { InstrumentDisplayData } from '../../../services/api-services/api-services-types'

interface EToroAssetsState {
  allAssets: InstrumentDisplayData[]
  filteredAssets: InstrumentDisplayData[]
  paginatedAssets: InstrumentDisplayData[]
  isAscendingSort: boolean
}

const initialState: EToroAssetsState = {
  allAssets: [],
  filteredAssets: [],
  paginatedAssets: [],
  isAscendingSort: true,
}

const eToroAssetsSlice = createSlice({
  name: 'eToroAssets',
  initialState,
  reducers: {
    setAllAssets: (state, action: PayloadAction<InstrumentDisplayData[]>) => {
      state.allAssets = action.payload
    },
    filterAssetsByPrice: (
      state,
      action: PayloadAction<{ topThreshold: number; bottomThreshold: number; stockIndustryId: number; instrumentTypeId: number }>
    ) => {
      const { topThreshold, bottomThreshold, stockIndustryId, instrumentTypeId } = action.payload

      const tempAllAssets = [...state.allAssets]

      let filtered: InstrumentDisplayData[] = []
      if (stockIndustryId) {
        filtered = tempAllAssets.filter((asset) => asset.Price <= topThreshold && asset.Price >= bottomThreshold && asset.StocksIndustryID === stockIndustryId)
      } else if (instrumentTypeId) {
        filtered = tempAllAssets.filter((asset) => asset.Price <= topThreshold && asset.Price >= bottomThreshold && asset.InstrumentTypeID === instrumentTypeId)
      } else {
        filtered = tempAllAssets.filter((asset) => asset.Price <= topThreshold && asset.Price >= bottomThreshold)
      }

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
    sortAssetsByPrice: (state, action: PayloadAction<boolean>) => {
      const assets = [...state.filteredAssets]

      let sortedAssets
      if (action.payload) {
        sortedAssets = assets.sort((a, b) => a.Price - b.Price)
      } else {
        sortedAssets = assets.sort((a, b) => b.Price - a.Price)
      }

      state.filteredAssets = sortedAssets
      state.isAscendingSort = action.payload
    },
  },
})

export const { setAllAssets, filterAssetsByPrice, filterAssetsByName, paginateAssetsByLimits, sortAssetsByPrice } = eToroAssetsSlice.actions

export default eToroAssetsSlice.reducer
