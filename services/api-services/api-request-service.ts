import { store } from '../../store/create-store'
import { setErrorMEssage } from '../../store/penny-stock-explorer-reducer/display-reducer/display-slice'
import { getEtoroAssets, getEtoroPrices } from './api-requests'
import { EToroAssets, InstrumentDisplayData, InstrumentID, PricesObject } from './api-services-types'

class ApiRequestService {
  loadEtoroAssetsInBulks = async (): Promise<InstrumentDisplayData[]> => {
    try {
      let bulkNumber = 1
      const totalBulks = 8 // assume 4k assets, 4k / 500 = 8 assets per batch
      const InstrumentDisplayDatas: InstrumentDisplayData[] = []
      while (bulkNumber <= totalBulks) {
        const eToroAssets: EToroAssets = await getEtoroAssets(bulkNumber, totalBulks)
        InstrumentDisplayDatas.push(...eToroAssets.InstrumentDisplayDatas)
        bulkNumber++
      }
      return InstrumentDisplayDatas
    } catch (error) {
      store.dispatch(setErrorMEssage('Error on fetching assaets'))
      return []
    }
  }

  loadAssetPricesInBulks = async (instrumentIds: InstrumentID[]) => {
    try {
      const totalCount = instrumentIds.length
      // max limit of a single batch
      const batchLimit = Math.floor(totalCount / 15)
      let lowestLimit = 0
      let highestLimit = batchLimit
      const pricesArray: PricesObject[] = []
      while (highestLimit <= totalCount) {
        const batchedStocks: InstrumentID[] = instrumentIds.slice(lowestLimit, highestLimit)
        const pricesResp = await getEtoroPrices(batchedStocks)
        pricesArray.push(...pricesResp)
        lowestLimit += batchLimit
        highestLimit += batchLimit
      }

      return pricesArray
    } catch (error) {
      store.dispatch(setErrorMEssage('Error on fetching prices'))
      return []
    }
  }
}

const apiRequestService = new ApiRequestService()
export default apiRequestService
