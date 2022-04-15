import React from 'react'

import { InstrumentDisplayData } from '../../services/api-services/api-services-types'
import FilterPanel from '../filter-panel/filter-panel'
import PaginationContainer from '../pagination/pagination-container'
import SortContainer from '../sort-container/sort-container'
import StocksGridList from '../stocks-grid-list/stocks-grid-list'

interface StockExplorerMainProps {
  InstrumentDisplayDataWithPrices: InstrumentDisplayData[]
}

const StockExplorerMain: React.FC<StockExplorerMainProps> = () => {
  return (
    <div>
      <FilterPanel />
      <PaginationContainer />
      <SortContainer />
      <StocksGridList />
    </div>
  )
}

export default StockExplorerMain
