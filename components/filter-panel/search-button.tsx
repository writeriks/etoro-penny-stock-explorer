import React from 'react'

import { Button } from '@mui/material'

import { useSelector } from 'react-redux'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

import styles from '../../styles/FilterPanel.module.scss'
import filterPanelHelper from './filter-panel-helper'

const SearchButton = () => {
  const topThreshold = useSelector(displayReducerSelector.getTopThreshold)
  const bottomThreshold = useSelector(displayReducerSelector.getBottomThreshold)
  const assetName = useSelector(displayReducerSelector.getAssetName)
  return (
    <Button
      onClick={() => filterPanelHelper.handleSearch({ assetName, topThreshold, bottomThreshold })}
      className={styles.searchButton}
      variant="contained"
    >
      Search
    </Button>
  )
}

export default SearchButton
