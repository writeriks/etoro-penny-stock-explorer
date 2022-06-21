import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { SxProps, Theme, Typography } from '@mui/material'

import styles from '../../styles/StocksGridList.module.scss'

interface StockInfoRowProps {
  infoData: string | number
  rowClass: string
  infoDataStyle: SxProps<Theme> | undefined
  rowTitleStyle?: SxProps<Theme> | undefined
  isStockSymbol?: boolean
  imageURI?: string
  imageWidth?: number
  imageHeight?: number
  rowTitle?: string
  stockSymbol?: string
}

export const StockInfoRow: React.FC<StockInfoRowProps> = ({
  isStockSymbol,
  infoData,
  rowTitle,
  rowClass,
  imageURI,
  imageWidth,
  imageHeight,
  stockSymbol,
  infoDataStyle,
  rowTitleStyle,
}) =>
  isStockSymbol ? (
    <section className={styles.stockInfoRow}>
      <div className={styles.stockImage}>
        <Image src={imageURI as string} width={imageWidth} height={imageHeight} alt="image" />
      </div>
      <Typography className={styles.stockSymbol} sx={infoDataStyle} color="text.secondary" gutterBottom>
        <Link href={`https://www.etoro.com/markets/${stockSymbol}`} passHref>
          <a target="_blank">{stockSymbol}</a>
        </Link>
      </Typography>
    </section>
  ) : (
    <section className={rowClass}>
      {rowTitle && (
        <Typography sx={rowTitleStyle} color="text.secondary" gutterBottom>
          {rowTitle}:
        </Typography>
      )}
      <Typography sx={infoDataStyle} color="text.secondary" gutterBottom>
        {infoData}
      </Typography>
    </section>
  )
