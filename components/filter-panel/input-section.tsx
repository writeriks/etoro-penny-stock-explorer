import React from 'react'
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

import { useDispatch, useSelector } from 'react-redux'

import { setAssetName } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

import filterPanelHelper from './filter-panel-helper'

import styles from '../../styles/FilterPanel.module.scss'
import InputComponent from '../input-component/input-component'

const InputSection = () => {
  const topThreshold = useSelector(displayReducerSelector.getTopThreshold)
  const bottomThreshold = useSelector(displayReducerSelector.getBottomThreshold)
  const assetName = useSelector(displayReducerSelector.getAssetName)

  const dispatch = useDispatch()

  return (
    <section className={styles.filterInputs}>
      <InputComponent
        value={assetName}
        className="nameSearchInputContainer"
        id="name-search"
        label="Search Name"
        onInputChange={(e) => dispatch(setAssetName(e.target.value))}
        endAdornment={
          !!assetName && (
            <IconButton onClick={() => dispatch(setAssetName(''))}>
              <ClearIcon className={styles.clearIconContainer} />
            </IconButton>
          )
        }
      />
      <InputComponent
        className="inputContainer"
        id="top-limit-amount"
        label="Top Limit"
        value={topThreshold}
        onInputChange={(e) => filterPanelHelper.onTopThresholdChange(e.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
      <InputComponent
        className="inputContainer"
        id="bottom-limit-amount"
        label="Bottom Limit"
        value={bottomThreshold}
        onInputChange={(e) => filterPanelHelper.onBottomThresholdChange(e.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
    </section>
  )
}

export default InputSection
