import React, { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import { StockInfoRow } from './stock-info-row'

import stockGridHelper from './stock-grid-helper'

import { AssetStatsHistorical } from '../../services/api-services/api-services-types'
import { InstrumentTypeID, PRICE_SOURCE_NASDAQ } from '../../services/constants'

import styles from '../../styles/StocksGridList.module.scss'
import StockStatsDetails from './stock-stats-details'

interface StockStatsDetailsContainerProps {
  symbol: string
  instrumentTypeID: InstrumentTypeID
  priceSource: string
}

export const StockStatsDetailsContainer: React.FC<StockStatsDetailsContainerProps> = ({ symbol, instrumentTypeID, priceSource }) => {
  const [assetStats, setAssetStats] = useState<AssetStatsHistorical[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const canGetStats = instrumentTypeID !== InstrumentTypeID.crpyto && priceSource === PRICE_SOURCE_NASDAQ
  const doesHaveStats = assetStats?.length > 0

  useEffect(() => {
    async function fetchAssetStats() {
      const stats = canGetStats ? await stockGridHelper.fetchAssetStats(symbol) : []
      setAssetStats(stats as AssetStatsHistorical[])
      setIsLoading(false)
    }
    fetchAssetStats()
  }, [symbol, instrumentTypeID, priceSource, canGetStats])

  const getComponentToRender = () => {
    if (isLoading) {
      return <CircularProgress />
    }
    if (doesHaveStats) {
      return <StockStatsDetails assetStats={assetStats} />
    }
    return null
  }

  return <div className={styles.stockInfoStatsContainer}>{getComponentToRender()}</div>
}
