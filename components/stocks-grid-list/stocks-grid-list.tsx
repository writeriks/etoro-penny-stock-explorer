import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { Pagination, PaginationItem, Stack } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StockInfo from './stock-info'

import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'

import styles from '../../styles/StocksGridList.module.scss'

const StocksGridList = () => {
  const pageLimit = 20 // number of items in page
  const filteredStocks = useSelector(eToroAssetsReducerSelector.getFilteredAssets)
  const [lowerLimit, setLowerLimit] = useState(0)
  const [upperLimit, setUpperLimit] = useState(pageLimit)

  const slicedStocks = useMemo(
    () => filteredStocks.slice(lowerLimit, upperLimit),
    [filteredStocks, lowerLimit, upperLimit]
  )

  const pageCount = Math.ceil(filteredStocks.length / pageLimit)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setLowerLimit(pageLimit * (value - 1))
    setUpperLimit(pageLimit * value)
  }

  return (
    <>
      <div id="pagination-container" className={styles.paginationContainer}>
        <Pagination
          count={pageCount}
          onChange={handleChange}
          sx={{ fontSize: 50 }}
          renderItem={(item) => (
            <PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </div>
      <div className={styles.stocksGridContainer}>
        {slicedStocks && slicedStocks.map((stock) => <StockInfo key={stock.InstrumentID} stock={stock} />)}
      </div>
    </>
  )
}

export default StocksGridList
