import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Typography } from '@mui/material'

import styles from '../../styles/StocksGridList.module.scss'

interface StockInfoRowProps {
  infoData: string | number
  rowClass: string
  typographyStyle: {
    fontSize: number
    fontWeight: number
    width?: string
    whiteSpace?: string
    overflow?: string
    textOverflow?: string
  }
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
  typographyStyle,
}) =>
  isStockSymbol ? (
    <section className={styles.stockInfoRow}>
      <div className={styles.stockImage}>
        <Image src={imageURI as string} width={imageWidth} height={imageHeight} alt="image" />
      </div>
      <Typography className={styles.stockSymbol} sx={typographyStyle} color="text.secondary" gutterBottom>
        <Link href={`https://www.etoro.com/markets/${stockSymbol}`} passHref>
          <a target="_blank">{stockSymbol}</a>
        </Link>
      </Typography>
    </section>
  ) : (
    <section className={rowClass}>
      <Typography sx={typographyStyle} color="text.secondary" gutterBottom>
        {rowTitle} {infoData}
      </Typography>
    </section>
  )
