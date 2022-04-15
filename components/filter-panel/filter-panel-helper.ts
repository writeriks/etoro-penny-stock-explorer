import { store } from '../../store/create-store'
import {
  setBottomThreshold,
  setErrorMEssage,
  setPage,
  setTopThreshold,
} from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import {
  filterAssetsByName,
  filterAssetsByPrice,
  paginateAssetsByLimits,
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
      this.handlePaginationDispatch()
      return
    }
    store.dispatch(filterAssetsByPrice({ topThreshold, bottomThreshold }))
    this.handlePaginationDispatch()
  }

  validateData = (topThreshold: number, bottomThreshold: number): boolean => {
    if (topThreshold <= bottomThreshold) {
      store.dispatch(setErrorMEssage('Top limit can not be lower or equal than Bottom limit'))
      return false
    }
    store.dispatch(setErrorMEssage(''))
    return true
  }

  onTopThresholdChange = (value: string) => {
    console.log('🚀 ~ file: filter-panel-helper.ts ~ line 40 ~ FilterPanelHelper ~ value', value)
    if (value) {
      store.dispatch(setTopThreshold(parseInt(value)))
    } else {
      store.dispatch(setTopThreshold(0))
    }
  }

  onBottomThresholdChange = (value: string) => {
    if (value) {
      store.dispatch(setBottomThreshold(parseInt(value)))
    } else {
      store.dispatch(setBottomThreshold(0))
    }
  }

  handlePaginationDispatch = () => {
    store.dispatch(paginateAssetsByLimits({ lowerLimit: 0, upperLimit: 20 }))
    store.dispatch(setPage(1))
  }
}

const filterPanelHelper = new FilterPanelHelper()
export default filterPanelHelper
