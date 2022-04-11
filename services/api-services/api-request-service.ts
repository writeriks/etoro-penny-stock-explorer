import { getEtoroAssets, getEtoroPrices } from './api-requests'
import { EToroAssets, InstrumentDisplayData, InstrumentID, PricesObject } from './api-services-types'

class ApiRequestService {
  loadEtoroAssetsInBulks = async (): Promise<InstrumentDisplayData[]> => {
    let bulkNumber = 1
    const totalBulks = 8 // assume 4k assets, 4k / 500 = 8 assets per batch
    const InstrumentDisplayDatas: InstrumentDisplayData[] = []
    while (bulkNumber <= totalBulks) {
      const eToroAssets: EToroAssets = await getEtoroAssets(bulkNumber, totalBulks)
      InstrumentDisplayDatas.push(...eToroAssets.InstrumentDisplayDatas)
      bulkNumber++
    }
    return InstrumentDisplayDatas
  }

  loadAssetPricesInBulks = async (instrumentIds: InstrumentID[]) => {
    const totalCount = instrumentIds.length
    // max limit of a single batch
    const batchLimit = Math.floor(totalCount / 10)
    let lowestLimit = 0
    let highestLimit = batchLimit
    const pricesArray: PricesObject[] = []
    let batchNumber = 1
    while (highestLimit < totalCount) {
      const batchedStocks: InstrumentID[] = instrumentIds.slice(lowestLimit, highestLimit)
      const pricesResp = await getEtoroPrices(batchedStocks)
      pricesArray.push(...pricesResp)
      lowestLimit += batchLimit
      highestLimit += batchLimit
      batchNumber++
    }

    return pricesArray
  }
}

const apiRequestService = new ApiRequestService()
export default apiRequestService
