import React from 'react'

import { StockInfoRow } from './stock-info-row'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'

import styles from '../../styles/StocksGridList.module.scss'
import stockGridHelper from './stock-grid-helper'

interface StockInfoNameContainerProps {
  stock: InstrumentDisplayData
}

const StockInfoNameContainer: React.FC<StockInfoNameContainerProps> = ({ stock }) => {
  return (
    <div className={styles.stockInfoNameContainer}>
      <StockInfoRow
        isStockSymbol
        imageURI={stock.Images[0].Uri}
        imageWidth={stock.Images[0].Width}
        imageHeight={stock.Images[0].Height}
        stockSymbol={stock.SymbolFull}
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoData={stock.InstrumentDisplayName}
        rowFontSize={15}
        rowFontWeight={600}
      />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoData={stock.InstrumentDisplayName}
        rowFontSize={11}
        rowFontWeight={600}
      />
      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoData={stockGridHelper.convertIsoDateToReadableDate(stock.ToTime)}
        rowFontSize={11}
        rowFontWeight={600}
        rowTitle="Source:"
      />

      <StockInfoRow rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`} infoData={stock.PriceSource} rowFontSize={12} rowTitle="Source" />

      <StockInfoRow
        rowClass={`${styles.stockInfoRow} ${styles.stockInfoPadding}`}
        infoData={stock.Price.toFixed(2)}
        rowFontSize={15}
        rowFontWeight={600}
        rowTitle="Price:"
      />
    </div>
  )
}

export default StockInfoNameContainer
