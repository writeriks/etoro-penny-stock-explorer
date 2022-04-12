import React from 'react'

import { Accordion, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ErroorMessage } from './error-message'
import SearchButton from './search-button'

import InputSection from './input-section'

import styles from '../../styles/FilterPanel.module.scss'

const FilterPanel = () => {
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
          <ErroorMessage />
        </div>
      </Accordion>
    </div>
  )
}

export default FilterPanel
