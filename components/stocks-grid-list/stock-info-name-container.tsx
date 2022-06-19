import React from 'react'

import { StockInfoRow } from './stock-info-row'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'

import styles from '../../styles/StocksGridList.module.scss'
import stockGridHelper from './stock-grid-helper'

interface StockInfoNameContainerProps {
  stock: InstrumentDisplayData
}

const StockInfoNameContainer: React.FC<StockInfoNameContainerProps> = ({ stock }) => {
  const typographyRowStyle = { fontWeight: 600, width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
  const stockSymbolTypographyStyle = { fontWeight: 600 }
  return (
    <div className={styles.stockInfoNameContainer}>
      <StockInfoRow
        isStockSymbol
        imageURI={stock.Images[0].Uri}
        imageWidth={stock.Images[0].Width}
        imageHeight={stock.Images[0].Height}
        stockSymbol={stock.SymbolFull}
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        typographyStyle={{ fontSize: 15, ...stockSymbolTypographyStyle }}
        infoData={stock.InstrumentDisplayName}
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        typographyStyle={{ fontSize: 11, ...typographyRowStyle }}
        infoData={stock.InstrumentDisplayName}
      />
      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        typographyStyle={{ fontSize: 11, ...typographyRowStyle }}
        infoData={stockGridHelper.convertIsoDateToReadableDate(stock.ToTime)}
        rowTitle="Date:"
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow}  ${styles.stockInfoPadding}`}
        typographyStyle={{ fontSize: 12, ...typographyRowStyle }}
        infoData={stock.PriceSource}
        rowTitle="Source"
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        typographyStyle={{ fontSize: 15, fontWeight: 600, width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        infoData={stock.Price.toFixed(2)}
        rowTitle="Price:"
      />
    </div>
  )
}

export default StockInfoNameContainer
