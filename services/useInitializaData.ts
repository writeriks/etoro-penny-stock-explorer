import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  filterAssetsByPrice,
  paginateAssetsByLimits,
  setAllAssets,
  sortAssetsByPrice,
} from '../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'

import { InstrumentDisplayData } from './api-services/api-services-types'

const useInitializeData = (InstrumentDisplayDataWithPrices: InstrumentDisplayData[]) => {
  const dispatch = useDispatch()
  const [isDataInitialized, setIsDataInitialized] = useState(false)

  const initiateData = useCallback(async (): Promise<void> => {
    dispatch(setAllAssets(InstrumentDisplayDataWithPrices))

    const initialFilterPrice = { topThreshold: 10, bottomThreshold: 0 }
    dispatch(filterAssetsByPrice(initialFilterPrice))
    dispatch(sortAssetsByPrice(true))
    dispatch(paginateAssetsByLimits({ lowerLimit: 0, upperLimit: 20 }))
  }, [InstrumentDisplayDataWithPrices, dispatch])

  useEffect(() => {
    if (!isDataInitialized && InstrumentDisplayDataWithPrices.length) {
      initiateData()
      setIsDataInitialized(true)
    }
  }, [initiateData, isDataInitialized, InstrumentDisplayDataWithPrices.length])
}

export default useInitializeData
