import React from 'react'

import { CircularProgress } from '@mui/material'

import styles from '../../styles/Loading.module.scss'

const Loading = () => {
  return <CircularProgress className={styles.loading} />
}

export default Loading
