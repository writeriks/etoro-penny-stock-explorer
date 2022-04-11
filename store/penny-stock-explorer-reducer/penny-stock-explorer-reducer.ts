import { combineReducers } from 'redux'

import displayReducer from './display-reducer/display-slice'
import etoroAssetsSlice from './etoro-assets-reducer/etoro-assets-slice'

const pennyStockExplorerReducer = combineReducers({
  display: displayReducer,
  eToroAssets: etoroAssetsSlice,
})

export type PennyStockExplorerReducer = ReturnType<typeof pennyStockExplorerReducer>
export default pennyStockExplorerReducer
