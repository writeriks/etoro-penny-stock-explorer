import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, PaginationItem } from '@mui/material'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { setPage } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import { paginateAssetsByLimits } from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'
import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

import styles from '../../styles/PaginationContainer.module.scss'

const PaginationContainer = () => {
  const pageLimit = 20 // number of items in page
  const filteredStocks = useSelector(eToroAssetsReducerSelector.getFilteredAssets)
  const pageNumber = useSelector(displayReducerSelector.getPageNumber)

  const dispatch = useDispatch()

  const pageCount = Math.ceil(filteredStocks.length / pageLimit)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const lowerLimit = pageLimit * (value - 1)
    const upperLimit = pageLimit * value
    dispatch(paginateAssetsByLimits({ lowerLimit, upperLimit }))
    dispatch(setPage(value))
  }

  return (
    <>
      <div id="pagination-container" className={styles.paginationContainer}>
        <Pagination
          count={pageCount}
          onChange={handleChange}
          page={pageNumber}
          sx={{ fontSize: 50 }}
          renderItem={(item) => (
            <PaginationItem components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />
          )}
        />
      </div>
    </>
  )
}

export default PaginationContainer
