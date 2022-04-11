import { createSelector } from 'reselect'
import pennyStockExplorerReducerSelector from '../penny-stock-explorer-selector'

class EToroAssetsReducerSelector {
  getAllAssets = createSelector(
    pennyStockExplorerReducerSelector.getEtoroAssetsReducer,
    (eToroAssets) => eToroAssets.allAssets
  )
  getFilteredAssets = createSelector(
    pennyStockExplorerReducerSelector.getEtoroAssetsReducer,
    (eToroAssets) => eToroAssets.filteredAssets
  )
}

const eToroAssetsReducerSelector = new EToroAssetsReducerSelector()
export default eToroAssetsReducerSelector
