import apiRequestService from '../api-services/api-request-service'
import { InstrumentDisplayData, InstrumentID, PricesObject, unwantedAssetTypes } from '../api-services/api-services-types'

class LoadApplicationDataService {
  fetchAssetsOnServerSide = async () => {
    const InstrumentDisplayDatas = await apiRequestService.loadEtoroAssetsInBulks()

    const filteredInsrumentDisplayDatas = this.filterUnwantedAssets(InstrumentDisplayDatas)

    const InstrumentIDs: InstrumentID[] = filteredInsrumentDisplayDatas.map((instrumentData) => instrumentData.InstrumentID)

    const prices: PricesObject[] = await apiRequestService.loadAssetPricesInBulks(InstrumentIDs)

    const InstrumentDisplayDataWithPrices = this.mergePricesWithAssets(filteredInsrumentDisplayDatas, prices)
    const upToDateFilteredInstrumentWithPrices = this.filterNotUpdatedAssets(InstrumentDisplayDataWithPrices)

    return upToDateFilteredInstrumentWithPrices
  }

  filterNotUpdatedAssets = (InstrumentDisplayDataWithPrices: InstrumentDisplayData[]): InstrumentDisplayData[] => {
    return InstrumentDisplayDataWithPrices.filter((instrument) => {
      const toDate = new Date()
      const instrumentDate = new Date(instrument.ToTime)

      //@ts-ignore date difference
      const daysDifference = Math.abs(toDate - instrumentDate) / (1000 * 3600 * 24)

      if (daysDifference < 3) {
        return instrument
      }
    })
  }

  mergePricesWithAssets = (InstrumentDisplayDatas: InstrumentDisplayData[], prices: PricesObject[]): InstrumentDisplayData[] =>
    InstrumentDisplayDatas.map((instrumentData) => {
      const filteredPriceObject = prices.filter((price) => instrumentData.InstrumentID === price.InstrumentId)[0]

      if (filteredPriceObject) {
        const filteredPrices = filteredPriceObject.Prices
        const filteredPricesLenght = filteredPrices.length
        if (filteredPrices.length) {
          const latestPrice = filteredPricesLenght - 1
          instrumentData.Price = filteredPrices[latestPrice].Price
          instrumentData.ToTime = filteredPrices[latestPrice].ToTime
        } else {
          instrumentData.Price = 0
          instrumentData.ToTime = ''
        }
      }

      return instrumentData
    })

  filterUnwantedAssets = (InstrumentDisplayDatas: InstrumentDisplayData[]): InstrumentDisplayData[] =>
    InstrumentDisplayDatas.filter(
      (instrumentData) =>
        instrumentData.ExchangeID !== unwantedAssetTypes.commodityExchangeID &&
        instrumentData.ExchangeID !== unwantedAssetTypes.currencyExchangeID &&
        instrumentData.ExchangeID !== unwantedAssetTypes.indicesExchangeID &&
        instrumentData.InstrumentTypeID !== unwantedAssetTypes.etfInstrumentTypeID &&
        instrumentData.StocksIndustryID !== unwantedAssetTypes.exchangeToExchangeStockIndustryID &&
        instrumentData.InstrumentTypeSubCategoryID !== unwantedAssetTypes.crpytoToExchangeInsturmentTypeSubCategoryID &&
        instrumentData.InstrumentTypeSubCategoryID !== unwantedAssetTypes.cryptoToCryptoInsturmentTypeSubCategoryID &&
        instrumentData.InstrumentTypeSubCategoryID !== unwantedAssetTypes.goldToCrpytoInsturmentTypeSubCategoryID
    )
}

const loadApplicationDataService = new LoadApplicationDataService()
export default loadApplicationDataService
