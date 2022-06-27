import React from 'react'

import { Card, CardContent } from '@mui/material'

import StockInfoNameContainer from './stock-info-name-container'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'

import { StockStatsDetailsContainer } from './stock-stats-details-container'

import { PRICE_SOURCE_NASDAQ } from '../../services/constants'

import styles from '../../styles/StocksGridList.module.scss'

interface StockInfoProps {
  stock: InstrumentDisplayData
}

const StockInfo: React.FC<StockInfoProps> = ({ stock }) => {
  const canGetStats = stock.PriceSource === PRICE_SOURCE_NASDAQ
  return (
    <div className={styles.stockInfo}>
      <Card sx={{ minWidth: 275, height: 150, background: 'aliceblue' }}>
        <CardContent>
          <div className={styles.stockInfoContainer}>
            <StockInfoNameContainer stock={stock} />
            {canGetStats && <StockStatsDetailsContainer stock={stock} />}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default StockInfo
