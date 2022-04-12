import { store } from '../../store/create-store'
import { setErrorMEssage } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import {
  filterAssetsByName,
  filterAssetsByPrice,
} from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'
import { filterObject } from '../types/types'

class FilterPanelHelper {
  handleSearch = ({ assetName, topThreshold, bottomThreshold }: filterObject) => {
    const isValidated = this.validateData(topThreshold, bottomThreshold)
    if (!isValidated) {
      return
    }
    if (assetName) {
      store.dispatch(filterAssetsByName(assetName))
      return
    }
    store.dispatch(filterAssetsByPrice({ topThreshold, bottomThreshold }))
  }

  validateData = (topThreshold: number, bottomThreshold: number): boolean => {
    if (topThreshold <= bottomThreshold) {
      store.dispatch(setErrorMEssage('Top limit can not be lower or equal than Bottom limit'))
      return false
    }
    store.dispatch(setErrorMEssage(''))
    return true
  }
}

const filterPanelHelper = new FilterPanelHelper()
export default filterPanelHelper
