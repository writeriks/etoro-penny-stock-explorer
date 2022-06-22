import React, { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import stockGridHelper from './stock-grid-helper'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'
import { PRICE_SOURCE_NASDAQ } from '../../services/constants'

import styles from '../../styles/StocksGridList.module.scss'
import StockStatsDetails from './stock-stats-details'
import { useSelector } from 'react-redux'
import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'

interface StockStatsDetailsContainerProps {
  stock: InstrumentDisplayData
}

export const StockStatsDetailsContainer: React.FC<StockStatsDetailsContainerProps> = ({
  stock,
  stock: { InstrumentTypeID: instrumentTypeID, PriceSource: priceSource, SymbolFull },
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const paginatedAssetStats = useSelector(eToroAssetsReducerSelector.getPaginateAssetStats)
  const canGetStats = stock.PriceSource === PRICE_SOURCE_NASDAQ
  const doesHaveStats = paginatedAssetStats?.length > 0
  const isAssetFetched = paginatedAssetStats.some((asset) => asset.symbol === SymbolFull)

  useEffect(() => {
    async function fetchAssetStats() {
      if (!isAssetFetched && canGetStats) {
        await stockGridHelper.loadAssetStats(SymbolFull)
      }
      setIsLoading(false)
    }
    fetchAssetStats()
  }, [SymbolFull, instrumentTypeID, priceSource, canGetStats, isAssetFetched])

  const getComponentToRender = () => {
    if (isLoading) {
      return <CircularProgress />
    }
    if (doesHaveStats) {
      const assetToRender = paginatedAssetStats.filter((asset) => asset.symbol === stock.SymbolFull)
      if (assetToRender.length) {
        return <StockStatsDetails assetStats={assetToRender[0].historical} />
      }
    }
    return null
  }

  return <div className={styles.stockInfoStatsContainer}>{getComponentToRender()}</div>
}
