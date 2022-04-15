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
  getPaginateAssets = createSelector(
    pennyStockExplorerReducerSelector.getEtoroAssetsReducer,
    (eToroAssets) => eToroAssets.paginatedAssets
  )
  getIsAscendingSort = createSelector(
    pennyStockExplorerReducerSelector.getEtoroAssetsReducer,
    (eToroAssets) => eToroAssets.isAscendingSort
  )
}

const eToroAssetsReducerSelector = new EToroAssetsReducerSelector()
export default eToroAssetsReducerSelector
