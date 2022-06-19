import { getAssetStats } from '../../services/api-services/api-requests'
import { store } from '../../store/create-store'
import { setErrorMEssage } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'

class StockGridHelper {
  convertIsoDateToReadableDate = (isoDate: string) => {
    return isoDate.split('T')[0].split('-').reverse().join('/')
  }

  fetchAssetStats = async (symbol: string) => {
    try {
      return (await getAssetStats(symbol)).historical
    } catch (error) {
      store.dispatch(setErrorMEssage(`Error on fetching asset statistics: ${error}`))
    }
  }
}

const stockGridHelper = new StockGridHelper()
export default stockGridHelper
