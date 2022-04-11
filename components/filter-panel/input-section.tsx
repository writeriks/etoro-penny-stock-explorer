import React from 'react'
import { AccordionDetails, FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material'

import styles from '../../styles/FilterPanel.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'
import {
  setBottomThreshold,
  setTopThreshold,
} from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'

const InputSection = () => {
  const topThreshold = useSelector(displayReducerSelector.getTopThreshold)
  const bottomThreshold = useSelector(displayReducerSelector.getBottomThreshold)
  const dispatch = useDispatch()

  return (
    <section className={styles.filterInputs}>
      <AccordionDetails>
        <FormControl className={styles.inputContainer} variant="standard">
          <InputLabel htmlFor="top-limit-amount">Top Limit</InputLabel>
          <TextField
            id="top-limit-amount"
            error
            helperText="Can't be lower than bottom limit"
            variant="filled"
            value={topThreshold || 0}
            onChange={(e) => dispatch(setTopThreshold(parseInt(e.target.value)))}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
        </FormControl>
      </AccordionDetails>
      <AccordionDetails>
        <FormControl className={styles.inputContainer} variant="standard">
          <InputLabel htmlFor="bottom-limit-amount">Bottom Limit</InputLabel>
          <Input
            value={bottomThreshold || 0}
            onChange={(e) => dispatch(setBottomThreshold(parseInt(e.target.value)))}
            id="bottom-limit-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </AccordionDetails>
    </section>
  )
}

export default InputSection
