import type { NextPage } from 'next'

import Head from 'next/head'

import StockExplorerMain from '../components/stock-explorer-main/stock-explorer-main'

import useInitializeData from '../services/useInitializaData'
import loadApplicationDataService from '../services/load-application/load-application-data-service'

import { InstrumentDisplayData } from '../services/api-services/api-services-types'

interface PennyStockExplorerMainProps {
  InstrumentDisplayDataWithPrices: InstrumentDisplayData[]
}

const PennyStockExplorerMain: NextPage<PennyStockExplorerMainProps> = ({ InstrumentDisplayDataWithPrices }) => {
  useInitializeData(InstrumentDisplayDataWithPrices)
  return (
    <div>
      <Head>
        <title>Penny Stock Explorer</title>
        <meta name="description" content="Etoro penny stock explorer" />
      </Head>

      <main>
        <StockExplorerMain InstrumentDisplayDataWithPrices={InstrumentDisplayDataWithPrices} />
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      InstrumentDisplayDataWithPrices: await loadApplicationDataService.fetchAssetsOnServerSide(),
    },
  }
}

export default PennyStockExplorerMain
