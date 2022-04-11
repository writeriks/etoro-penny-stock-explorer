import { EToroAssets, PricesObject } from './api-services-types'

const etoroStaticPath = 'https://api.etorostatic.com'
const getEtoroAssetsPath = '/sapi/instrumentsmetadata/V1.1/instruments'

const etoroCandlePath = 'https://candle.etoro.com'
const chartsTodayPath = '/quickcharts.json/today'
const amountOfPriceAndClientID = `/1?client_request_id=${process.env.CLIENT_REQUEST_ID}`

export const getEtoroAssets = async (bulkNumber: number, totalBulks: number): Promise<EToroAssets> => {
  const res = await fetch(
    etoroStaticPath +
      getEtoroAssetsPath +
      `/bulk?bulkNumber=${bulkNumber}&cv=${process.env.CV_INFO}&totalBulks=${totalBulks}`
  )
  return res.json()
}
export const getEtoroPrices = async (ids: number[]): Promise<PricesObject[]> => {
  const res = await fetch(
    `${etoroCandlePath}${chartsTodayPath}${amountOfPriceAndClientID}&instruments=%5B${ids.toString()}%5D`
  )
  return res.json()
}
;('https://www.etoro.com/sapi/trade-real/instruments?InstrumentDataFilters=Activity,Rates,ActivityInExchange')
