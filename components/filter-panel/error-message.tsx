import React from 'react'

import { Typography } from '@mui/material'

import styles from '../../styles/FilterPanel.module.scss'

export const ErroorMessage = () => {
  return (
    <Typography className={styles.errorMessage} variant="subtitle2" fontWeight={600} fontStyle={{ color: 'red' }}>
      Error Information message
    </Typography>
  )
}
