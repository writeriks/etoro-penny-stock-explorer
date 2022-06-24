import React from 'react'

import { StockInfoRow } from './stock-info-row'

import { AssetStatsHistorical, InstrumentDisplayData } from '../../services/api-services/api-services-types'

import styles from '../../styles/StocksGridList.module.scss'
import { SxProps, Theme } from '@mui/material'
import stockGridHelper from './stock-grid-helper'

interface StockStatsDetailsProps {
  assetStats: AssetStatsHistorical[]
}

const StockStatsDetails: React.FC<StockStatsDetailsProps> = ({ assetStats }) => {
  const infoDataStyle: SxProps<Theme> = {
    fontSize: 12,
    fontWeight: 600,
    width: '50%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
  return (
    <div className={styles.statDetailInner}>
      <div className={styles.statDetailRowContainer}>
        <StockInfoRow
          rowClass={styles.stockInfoRow}
          infoData={assetStats[0]?.close.toFixed(2)}
          rowTitle="Prev Close"
          infoDataStyle={infoDataStyle}
          rowTitleStyle={infoDataStyle}
        />
      </div>
      {assetStats.length && (
        <div className={styles.statDetailRowContainer}>
          <StockInfoRow
            rowClass={styles.stockInfoRow}
            infoData={stockGridHelper.calculateRSI(assetStats).toString()}
            rowTitle="RSI"
            infoDataStyle={{ ...infoDataStyle }}
            rowTitleStyle={infoDataStyle}
          />
        </div>
      )}
    </div>
  )
}

export default StockStatsDetails
