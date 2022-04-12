import { store } from '../../store/create-store'
import {
  filterAssetsByName,
  filterAssetsByPrice,
} from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'
import { filterObject } from '../types/types'

class FilterPanelHelper {
  handleSearch = ({ assetName, topThreshold, bottomThreshold }: filterObject) => {
    this.validateData(topThreshold, bottomThreshold)
    if (assetName) {
      store.dispatch(filterAssetsByName(assetName))
      return
    }
    store.dispatch(filterAssetsByPrice({ topThreshold, bottomThreshold }))
  }

  validateData = (topThreshold: number, bottomThreshold: number) => {
    if (topThreshold <= bottomThreshold) {
      throw 'Top limit can not be below or equal to Bottom limit'
    }
  }
}

const filterPanelHelper = new FilterPanelHelper()
export default filterPanelHelper
