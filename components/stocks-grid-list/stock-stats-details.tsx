import React from 'react'

import { StockInfoRow } from './stock-info-row'

import { AssetStatsHistorical, InstrumentDisplayData } from '../../services/api-services/api-services-types'

import styles from '../../styles/StocksGridList.module.scss'
import { SxProps, Theme } from '@mui/material'
import stockGridHelper from './stock-grid-helper'

interface StockStatsDetailsProps {
  assetStats: AssetStatsHistorical[]
  stock: InstrumentDisplayData
}

const StockStatsDetails: React.FC<StockStatsDetailsProps> = ({ assetStats, stock }) => {
  const infoDataStyle: SxProps<Theme> = {
    fontSize: 13,
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  const dailyPriceChange = stockGridHelper.calculateDailyPriceChangePercentage(stock.Price, assetStats[0].close)
  const dailyPriceChangeAbs = Math.abs(dailyPriceChange)
  const dailyPriceChangeColor = stockGridHelper.getPriceChangeColor(dailyPriceChange)

  const calculateWeeklyChange = stockGridHelper.calculateWeeklyChangePercentage(stock.Price, assetStats)
  const weeklyPriceChangeAbs = Math.abs(calculateWeeklyChange)
  const weeklyPriceChangeColor = stockGridHelper.getPriceChangeColor(calculateWeeklyChange)

  const RSIValue = stockGridHelper.calculateRSI(assetStats)
  const RSIColor = stockGridHelper.getRSIColor(RSIValue)
  return (
    <div className={styles.statDetailInner}>
      <div className={styles.statDetailRowContainer}>
        <StockInfoRow
          rowClass={styles.stockInfoRow}
          infoData={assetStats[0]?.close.toFixed(2)}
          rowTitle="Close (P)"
          infoDataStyle={infoDataStyle}
          rowTitleStyle={{ ...infoDataStyle, width: '60%' }}
        />
      </div>
      <div className={styles.statDetailRowContainer}>
        <StockInfoRow
          rowClass={styles.stockInfoRow}
          infoData={'%' + dailyPriceChangeAbs.toFixed(2)}
          rowTitle="Change% D"
          infoDataStyle={{ ...infoDataStyle, color: dailyPriceChangeColor }}
          rowTitleStyle={{ ...infoDataStyle, width: '60%' }}
        />
      </div>
      <div className={styles.statDetailRowContainer}>
        <StockInfoRow
          rowClass={styles.stockInfoRow}
          infoData={'%' + weeklyPriceChangeAbs.toFixed(2)}
          rowTitle="Change% W"
          infoDataStyle={{ ...infoDataStyle, color: weeklyPriceChangeColor }}
          rowTitleStyle={{ ...infoDataStyle, width: '60%' }}
        />
      </div>
      <div className={styles.statDetailRowContainer}>
        <StockInfoRow
          rowClass={styles.stockInfoRow}
          infoData={RSIValue.toFixed(1)}
          rowTitle="RSI"
          infoDataStyle={{ ...infoDataStyle, color: RSIColor }}
          rowTitleStyle={{ ...infoDataStyle, width: '60%' }}
        />
      </div>
    </div>
  )
}

export default StockStatsDetails
