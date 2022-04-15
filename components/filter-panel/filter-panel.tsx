import React from 'react'

import { Accordion, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchButton from './search-button'
import InputSection from './input-section'
import ErrorMessage from './error-message'

import styles from '../../styles/FilterPanel.module.scss'
import { useSelector } from 'react-redux'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

const FilterPanel = () => {
  const errorMessage = useSelector(displayReducerSelector.getErrorMessage)
  return (
    <div id="filter-panel">
      <Accordion className={styles.filterPanelContainer}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant="h5" fontWeight={600} fontStyle={{ color: '#08d508' }}>
            eToro Penny Stock Explorer
          </Typography>
        </AccordionSummary>
        <div className={styles.filterPanel}>
          <InputSection />
          <SearchButton />
          {!!errorMessage && <ErrorMessage />}
        </div>
      </Accordion>
    </div>
  )
}

export default FilterPanel
