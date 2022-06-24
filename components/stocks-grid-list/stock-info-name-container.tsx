import React from 'react'

import { useSelector } from 'react-redux'

import { Theme } from '@emotion/react'

import { StockInfoRow } from './stock-info-row'

import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'

import stockGridHelper from './stock-grid-helper'

import { SxProps } from '@mui/material'
import { InstrumentDisplayData } from '../../services/api-services/api-services-types'
import styles from '../../styles/StocksGridList.module.scss'

interface StockInfoNameContainerProps {
  stock: InstrumentDisplayData
}

const StockInfoNameContainer: React.FC<StockInfoNameContainerProps> = ({ stock }) => {
  const paginatedAssetStats = useSelector(eToroAssetsReducerSelector.getPaginateAssetStats)
  const assetFromSymbol = paginatedAssetStats.filter((asset) => asset.symbol === stock.SymbolFull)
  const priceColor = stockGridHelper.getPriceColor(assetFromSymbol, stock)

  const stockSymbolTypographyStyle: SxProps<Theme> = { fontWeight: 600 }
  const typographyRowStyle: SxProps<Theme> = { fontWeight: 600, width: '50%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }

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
        infoDataStyle={{ color: priceColor, fontSize: 13, ...typographyRowStyle }}
        rowTitleStyle={{ fontSize: 13, ...typographyRowStyle }}
        infoData={stock.Price.toFixed(2)}
        rowTitle="Price"
      />
    </div>
  )
}

export default StockInfoNameContainer
