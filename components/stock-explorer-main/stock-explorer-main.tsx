import React from 'react'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'
import FilterPanel from '../filter-panel/filter-panel'
import StocksGridList from '../stocks-grid-list/stocks-grid-list'

interface StockExplorerMainProps {
  InstrumentDisplayDataWithPrices: InstrumentDisplayData[]
}

const StockExplorerMain: React.FC<StockExplorerMainProps> = () => {
  return (
    <div>
      <FilterPanel />
      <p>Sort by</p>
      <StocksGridList />
    </div>
  )
}

export default StockExplorerMain
