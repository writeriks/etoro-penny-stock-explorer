import { createSelector } from 'reselect'
import { RootState } from '../create-store'

import { PennyStockExplorerReducer } from './penny-stock-explorer-reducer'

class PennyStockExplorerReducerSelector {
  getPennyStockExplorerReducer = (state: RootState): PennyStockExplorerReducer => state.pennyStockExplorer

  getDisplayReducer = createSelector(
    this.getPennyStockExplorerReducer,
    (pennyStockExplorer) => pennyStockExplorer.display
  )

  getEtoroAssetsReducer = createSelector(
    this.getPennyStockExplorerReducer,
    (pennyStockExplorer) => pennyStockExplorer.eToroAssets
  )
}

const pennyStockExplorerReducerSelector = new PennyStockExplorerReducerSelector()
export default pennyStockExplorerReducerSelector
