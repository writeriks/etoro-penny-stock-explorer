import React from 'react'

import { Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'

import stockGridHelper from './stock-grid-helper'
import { InstrumentDisplayData } from '../../services/api-services/api-services-types'

import styles from '../../styles/StocksGridList.module.scss'
import Link from 'next/link'

interface StockInfoProps {
  stock: InstrumentDisplayData
}

const StockInfo: React.FC<StockInfoProps> = ({ stock }) => {
  return (
    <div className={styles.stockInfo}>
      <Card sx={{ minWidth: 275, height: 150 }}>
        <CardContent>
          <section className={styles.stockInfoRow}>
            <Image
              src={stock.Images[0].Uri}
              width={stock.Images[0].Width}
              height={stock.Images[0].Height}
              alt="image"
            />
            <Typography
              className={styles.stockSymbol}
              sx={{ fontSize: 15, fontWeight: 600 }}
              color="text.secondary"
              gutterBottom
            >
              <Link href={`https://www.etoro.com/markets/${stock.SymbolFull}`} passHref>
                <a target="_blank">{stock.SymbolFull}</a>
              </Link>
            </Typography>
          </section>

          <section className={styles.stockInfoRow}>
            <Typography
              className={styles.stockFullName}
              sx={{ fontSize: 15, fontWeight: 600 }}
              color="text.secondary"
              gutterBottom
            >
              {stock.InstrumentDisplayName}
            </Typography>
          </section>

          <section className={styles.stockInfoRow}>
            <Typography className={styles.stockFullName} sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
              Date: {stockGridHelper.convertIsoDateToReadableDate(stock.ToTime)}
            </Typography>
          </section>

          <section className={styles.stockInfoRow}>
            <Typography className={styles.stockFullName} sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
              Source: {stock.PriceSource}
            </Typography>
          </section>

          <section className={styles.stockInfoRow}>
            <Typography
              className={styles.stockFullName}
              sx={{ fontSize: 15, fontWeight: 600 }}
              color="text.secondary"
              gutterBottom
            >
              Price: {stock.Price.toFixed(2)}
            </Typography>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

export default StockInfo
