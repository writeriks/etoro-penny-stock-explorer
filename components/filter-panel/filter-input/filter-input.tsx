import React, { ChangeEvent } from 'react'

import { AccordionDetails, FormControl, Input, InputLabel } from '@mui/material'

import styles from '../../../styles/FilterPanel.module.scss'

interface FilterInputProps {
  className: string
  id: string
  label: string
  value: string | number
  onInputChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { payload: string; type: string } | void
  variant?: 'standard' | 'outlined' | 'filled' | undefined
  endAdornment?: React.ReactNode
  startAdornment?: React.ReactNode
}

const FilterInput: React.FC<FilterInputProps> = ({
  className,
  id,
  label,
  value,
  onInputChange,
  endAdornment,
  startAdornment,
  variant = 'standard',
}) => (
  <AccordionDetails>
    <FormControl className={styles[className]} variant={variant}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        value={value}
        onChange={(e) => onInputChange(e)}
        endAdornment={endAdornment}
        startAdornment={startAdornment}
      />
    </FormControl>
  </AccordionDetails>
)

export default FilterInput
