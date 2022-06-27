import React, { useEffect, useMemo, useState } from 'react'

import CircularProgress from '@mui/material/CircularProgress'

import stockGridHelper from './stock-grid-helper'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'
import { PRICE_SOURCE_NASDAQ } from '../../services/constants'

import styles from '../../styles/StocksGridList.module.scss'
import StockStatsDetails from './stock-stats-details'
import { useSelector } from 'react-redux'
import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'
import Loading from '../loading/loading'

interface StockStatsDetailsContainerProps {
  stock: InstrumentDisplayData
}

export const StockStatsDetailsContainer: React.FC<StockStatsDetailsContainerProps> = ({
  stock,
  stock: { InstrumentTypeID: instrumentTypeID, PriceSource: priceSource, SymbolFull },
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const paginatedAssetStats = useSelector(eToroAssetsReducerSelector.getPaginateAssetStats)
  const didFetchAssetStats = useMemo(() => paginatedAssetStats.some((asset) => asset.symbol === SymbolFull), [paginatedAssetStats, SymbolFull])
  const assetToRender = useMemo(() => paginatedAssetStats.filter((asset) => asset.symbol === stock.SymbolFull), [paginatedAssetStats, stock])

  useEffect(() => {
    async function fetchAssetStats() {
      if (!didFetchAssetStats) {
        await stockGridHelper.loadAssetStats(SymbolFull)
      }
      setIsLoading(false)
    }
    fetchAssetStats()
  }, [SymbolFull, instrumentTypeID, priceSource, didFetchAssetStats])

  const getComponentToRender = () => {
    if (isLoading) {
      return <Loading />
    }
    if (assetToRender.length) {
      return <StockStatsDetails assetStats={assetToRender[0].historical} stock={stock} />
    }
    return null
  }

  return <div className={styles.stockInfoStatsContainer}>{getComponentToRender()}</div>
}
