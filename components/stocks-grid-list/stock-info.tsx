import React from 'react'

import { Card, CardContent } from '@mui/material'

import StockInfoNameContainer from './stock-info-name-container'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'

import { StockStatsDetailsContainer } from './stock-stats-details-container'

import styles from '../../styles/StocksGridList.module.scss'

interface StockInfoProps {
  stock: InstrumentDisplayData
}

const StockInfo: React.FC<StockInfoProps> = ({ stock }) => {
  return (
    <div className={styles.stockInfo}>
      <Card sx={{ minWidth: 275, height: 150 }}>
        <CardContent>
          <div className={styles.stockInfoContainer}>
            <StockInfoNameContainer stock={stock} />
            <StockStatsDetailsContainer symbol={stock.SymbolFull} instrumentTypeID={stock.InstrumentTypeID} priceSource={stock.PriceSource} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default StockInfo
