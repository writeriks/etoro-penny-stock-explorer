import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { AccordionDetails, FormControl, IconButton, InputAdornment, InputLabel, NativeSelect } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import FilterInput from './filter-input/filter-input'

import { setAssetName } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

import filterPanelHelper from './filter-panel-helper'

import styles from '../../styles/FilterPanel.module.scss'
import { insdustryOptions } from '../../services/constants'

const InputSection = () => {
  const topThreshold = useSelector(displayReducerSelector.getTopThreshold)
  const bottomThreshold = useSelector(displayReducerSelector.getBottomThreshold)
  const assetName = useSelector(displayReducerSelector.getAssetName)
  const stockIndustryId = useSelector(displayReducerSelector.getStockIndustryId)
  const instrumentTypeId = useSelector(displayReducerSelector.getInstrumentTypeId)

  const dispatch = useDispatch()

  return (
    <section className={styles.filterInputs}>
      <FilterInput
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
      <FilterInput
        className="inputContainer"
        id="top-limit-amount"
        label="Top Limit"
        value={topThreshold}
        onInputChange={(e) => filterPanelHelper.onTopThresholdChange(e.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
      <FilterInput
        className="inputContainer"
        id="bottom-limit-amount"
        label="Bottom Limit"
        value={bottomThreshold}
        onInputChange={(e) => filterPanelHelper.onBottomThresholdChange(e.target.value)}
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
      />
      <AccordionDetails>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="industry-selection">
            Industry
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            value={filterPanelHelper.getSelectedIndustryType(stockIndustryId, instrumentTypeId)}
            onChange={(e) => filterPanelHelper.handleIndustryTypeChange(e.target.value)}
            inputProps={{
              name: 'industry',
              id: 'industry-selection',
            }}
          >
            {insdustryOptions.map((industry, index) => (
              <option key={index} value={industry.label}>
                {industry.label}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </AccordionDetails>
    </section>
  )
}

export default InputSection
