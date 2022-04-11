import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  filterAssetsByPrice,
  setAllAssets,
} from '../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'
import { InstrumentDisplayData } from './api-services/api-services-types'

const useInitializeData = (InstrumentDisplayDataWithPrices: InstrumentDisplayData[]) => {
  const dispatch = useDispatch()
  const [isDataInitialized, setIsDataInitialized] = useState(false)

  const initiateData = useCallback(async (): Promise<void> => {
    dispatch(setAllAssets(InstrumentDisplayDataWithPrices))
    dispatch(filterAssetsByPrice({ topThreshold: 10 }))
  }, [InstrumentDisplayDataWithPrices, dispatch])

  useEffect(() => {
    if (!isDataInitialized && InstrumentDisplayDataWithPrices.length) {
      initiateData()
      setIsDataInitialized(true)
    }
  }, [initiateData, isDataInitialized, InstrumentDisplayDataWithPrices.length])
}

export default useInitializeData
