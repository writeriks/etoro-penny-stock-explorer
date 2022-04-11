import { createSelector } from 'reselect'
import pennyStockExplorerReducerSelector from '../penny-stock-explorer-selector'

class DisplayReducerSelector {
  getLoading = createSelector(pennyStockExplorerReducerSelector.getDisplayReducer, (display) => display.globalLoading)
  getTopThreshold = createSelector(
    pennyStockExplorerReducerSelector.getDisplayReducer,
    (display) => display.topThreshold
  )
  getBottomThreshold = createSelector(
    pennyStockExplorerReducerSelector.getDisplayReducer,
    (display) => display.bottomThreshold
  )
}

const displayReducerSelector = new DisplayReducerSelector()
export default displayReducerSelector
