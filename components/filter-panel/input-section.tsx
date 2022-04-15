import React from 'react'
import { AccordionDetails, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

import { useDispatch, useSelector } from 'react-redux'

import { setAssetName } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

import filterPanelHelper from './filter-panel-helper'

import styles from '../../styles/FilterPanel.module.scss'

const InputSection = () => {
  const topThreshold = useSelector(displayReducerSelector.getTopThreshold)
  const bottomThreshold = useSelector(displayReducerSelector.getBottomThreshold)
  const assetName = useSelector(displayReducerSelector.getAssetName)

  const dispatch = useDispatch()

  return (
    <section className={styles.filterInputs}>
      <AccordionDetails>
        <FormControl className={styles.nameSearchInputContainer} variant="standard">
          <InputLabel htmlFor="top-limit-amount">Search Name</InputLabel>
          <Input
            id="name-search"
            error
            value={assetName}
            onChange={(e) => dispatch(setAssetName(e.target.value))}
            endAdornment={
              !!assetName && (
                <IconButton onClick={() => dispatch(setAssetName(''))}>
                  <ClearIcon className={styles.clearIconContainer} />
                </IconButton>
              )
            }
          />
        </FormControl>
      </AccordionDetails>
      <AccordionDetails>
        <FormControl className={styles.inputContainer} variant="standard">
          <InputLabel htmlFor="top-limit-amount">Top Limit</InputLabel>
          <Input
            id="top-limit-amount"
            error
            value={topThreshold}
            onChange={(e) => filterPanelHelper.onTopThresholdChange(e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </AccordionDetails>
      <AccordionDetails>
        <FormControl className={styles.inputContainer} variant="standard">
          <InputLabel htmlFor="bottom-limit-amount">Bottom Limit</InputLabel>
          <Input
            error
            value={bottomThreshold}
            onChange={(e) => filterPanelHelper.onBottomThresholdChange(e.target.value)}
            id="bottom-limit-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </AccordionDetails>
    </section>
  )
}

export default InputSection
