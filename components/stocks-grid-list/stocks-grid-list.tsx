import React from 'react'
import { useSelector } from 'react-redux'

import StockInfo from './stock-info'

import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'

import styles from '../../styles/StocksGridList.module.scss'

const StocksGridList = () => {
  const paginatedAssets = useSelector(eToroAssetsReducerSelector.getPaginateAssets)
  return (
    <>
      <div className={styles.stocksGridContainer}>
        {paginatedAssets && paginatedAssets.map((stock) => <StockInfo key={stock.InstrumentID} stock={stock} />)}
      </div>
    </>
  )
}

export default StocksGridList
