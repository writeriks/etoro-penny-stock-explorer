import { MouseEvent } from 'react'
import { store } from '../../store/create-store'
import { setLoading } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'

class StockExplorerMainHelper {
  onSearchButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    store.dispatch(setLoading(false))
    console.log('CLICKED')
  }
}

const stockExplorerMainHelper = new StockExplorerMainHelper()
export default stockExplorerMainHelper
