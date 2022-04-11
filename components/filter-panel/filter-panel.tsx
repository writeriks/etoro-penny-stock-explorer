import React from 'react'

import { Accordion, AccordionSummary, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
          <Button onClick={() => console.log('CLICK')} className={styles.searchButton} variant="contained">
            Search
          </Button>
          <a>asdasdssadasd</a>
        </div>
      </Accordion>
    </div>
  )
}

export default FilterPanel
