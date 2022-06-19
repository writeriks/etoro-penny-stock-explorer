import React, { useEffect, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import stockGridHelper from './stock-grid-helper'

import { AssetStatsHistorical } from '../../services/api-services/api-services-types'
import { InstrumentTypeID, PRICE_SOURCE_NASDAQ } from '../../services/constants'

import styles from '../../styles/StocksGridList.module.scss'
interface StockStatsDetailsProps {
  symbol: string
  instrumentTypeID: InstrumentTypeID
  priceSource: string
}

export const StockStatsDetails: React.FC<StockStatsDetailsProps> = ({ symbol, instrumentTypeID, priceSource }) => {
  const [assetStats, setAssetStats] = useState<AssetStatsHistorical[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const canGetStats = instrumentTypeID !== InstrumentTypeID.crpyto && priceSource === PRICE_SOURCE_NASDAQ

  useEffect(() => {
    async function fetchAssetStats() {
      const stats = canGetStats ? await stockGridHelper.fetchAssetStats(symbol) : []
      setAssetStats(stats as AssetStatsHistorical[])
      setIsLoading(false)
    }
    fetchAssetStats()
  }, [symbol, instrumentTypeID, priceSource, canGetStats])

  return (
    <div className={styles.stockInfoStatsContainer}>
      {isLoading ? <CircularProgress /> : <span>{assetStats?.length ? assetStats[0].close : 'No Asset'}</span>}
    </div>
  )
}
