import React from 'react'

import { StockInfoRow } from './stock-info-row'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'

import styles from '../../styles/StocksGridList.module.scss'
import stockGridHelper from './stock-grid-helper'
import { SxProps } from '@mui/material'
import { Theme } from '@emotion/react'

interface StockInfoNameContainerProps {
  stock: InstrumentDisplayData
}

const StockInfoNameContainer: React.FC<StockInfoNameContainerProps> = ({ stock }) => {
  const typographyRowStyle: SxProps<Theme> = { fontWeight: 600, width: '50%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
  const stockSymbolTypographyStyle: SxProps<Theme> = { fontWeight: 600 }
  return (
    <div className={styles.stockInfoNameContainer}>
      <StockInfoRow
        isStockSymbol
        imageURI={stock.Images[0].Uri}
        imageWidth={stock.Images[0].Width}
        imageHeight={stock.Images[0].Height}
        stockSymbol={stock.SymbolFull}
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoDataStyle={{ fontSize: 15, ...stockSymbolTypographyStyle }}
        infoData={stock.InstrumentDisplayName}
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoDataStyle={{ fontSize: 13, ...typographyRowStyle }}
        infoData={stock.InstrumentDisplayName}
      />
      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoDataStyle={{ fontSize: 13, ...typographyRowStyle }}
        rowTitleStyle={{ fontSize: 13, ...typographyRowStyle }}
        infoData={stockGridHelper.convertIsoDateToReadableDate(stock.ToTime)}
        rowTitle="Date"
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow}  ${styles.stockInfoPadding}`}
        infoDataStyle={{ fontSize: 13, ...typographyRowStyle }}
        rowTitleStyle={{ fontSize: 13, ...typographyRowStyle }}
        infoData={stock.PriceSource}
        rowTitle="Source"
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoDataStyle={{ fontSize: 13, ...typographyRowStyle }}
        rowTitleStyle={{ fontSize: 13, ...typographyRowStyle }}
        infoData={stock.Price.toFixed(2)}
        rowTitle="Price"
      />
    </div>
  )
}

export default StockInfoNameContainer
