import { store } from '../../store/create-store'

import { setErrorMEssage } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import { addPaginatedAssetPrice } from '../../store/penny-stock-explorer-reducer/etoro-assets-reducer/etoro-assets-slice'

import { getAssetStats } from '../../services/api-services/api-requests'

import { AssetStats, AssetStatsHistorical, InstrumentDisplayData } from '../../services/api-services/api-services-types'

class StockGridHelper {
  convertIsoDateToReadableDate = (isoDate: string) => {
    return isoDate.split('T')[0].split('-').reverse().join('/')
  }

  getPriceColor = (assetStats: AssetStats[], stock: InstrumentDisplayData) => {
    const isAssetExist = assetStats.length > 0
    const isUP = stock.Price - assetStats[0]?.historical[0]?.close > 0
    if (isAssetExist) {
      return isUP ? '#69DC32' : 'red'
    }
  }

  loadAssetStats = async (symbol: string) => {
    try {
      const assetStats = await getAssetStats(symbol)
      if (assetStats != null) {
        store.dispatch(addPaginatedAssetPrice(assetStats))
      }
    } catch (error) {
      store.dispatch(setErrorMEssage(`Error on fetching asset statistics: ${error}`))
    }
  }

  rsi = (data: number[], length = 14) => {
    const arrsi = []
    for (let i = length - 1; i < data.length; i++) {
      let gain = 0
      let loss = 0
      const pl = data.slice(0, length - 1)
      pl.push(data[i])
      for (let q = 1; q < pl.length; q++) {
        if (pl[q] - pl[q - 1] < 0) {
          loss += Math.abs(pl[q] - pl[q - 1])
        } else {
          gain += pl[q] - pl[q - 1]
        }
      }
      const rsi = 100 - 100 / (1 + gain / length / (loss / length))
      arrsi.push(rsi)
      pl.splice(0, 1)
    }
    return arrsi[0]
  }

  calculateRSI = (historicalData: AssetStatsHistorical[]) => {
    const totalDayPeriod = 14

    const reversedData = [...historicalData].reverse()
    const prices = reversedData.map((data) => data.adjClose)

    return this.rsi(prices, totalDayPeriod).toFixed(1)
  }
}

const stockGridHelper = new StockGridHelper()
export default stockGridHelper
