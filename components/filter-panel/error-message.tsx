import React from 'react'

import { Typography } from '@mui/material'

import styles from '../../styles/FilterPanel.module.scss'
import { useSelector } from 'react-redux'
import displayReducerSelector from '../../store/penny-stock-explorer-reducer/display-reducer/display-reducer-selector'

export const ErroorMessage = () => {
  const errorMessage = useSelector(displayReducerSelector.getErrorMessage)
  return (
    <Typography className={styles.errorMessage} variant="subtitle2" fontWeight={600} fontStyle={{ color: 'red' }}>
      {errorMessage}
    </Typography>
  )
}
