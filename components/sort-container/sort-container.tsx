import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Typography } from '@mui/material'

import {
  paginateAssetsByLimits,
  sortAssetsByPrice,
} from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'
import { setPage } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import eToroAssetsReducerSelector from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-reducer-selector'

import styles from '../../styles/SortContainer.module.scss'

const SortContainer = () => {
  const isAscendingSort = useSelector(eToroAssetsReducerSelector.getIsAscendingSort)
  const dispatch = useDispatch()
  return (
    <div className={styles.sortContainer}>
      <Typography sx={{ fontSize: 15 }} color="text.secondary">
        Sort By
      </Typography>
      <div
        className={styles.sortArrow}
        onClick={() => {
          dispatch(sortAssetsByPrice(!isAscendingSort))
          dispatch(paginateAssetsByLimits({ lowerLimit: 0, upperLimit: 20 }))
          dispatch(setPage(1))
        }}
      >
        {isAscendingSort ? (
          <ArrowUpwardIcon sx={{ width: 15, height: 15 }} />
        ) : (
          <ArrowDownwardIcon sx={{ width: 15, height: 15 }} />
        )}
      </div>
    </div>
  )
}

export default SortContainer
