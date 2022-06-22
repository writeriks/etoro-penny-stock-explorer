import { AssetStats, EToroAssets, PricesObject } from './api-services-types'

const etoroStaticPath = 'https://api.etorostatic.com'
const getEtoroAssetsPath = '/sapi/instrumentsmetadata/V1.1/instruments'

const etoroCandlePath = 'https://candle.etoro.com'
const chartsTodayPath = '/quickcharts.json/today'
const amountOfPriceAndClientID = `/1?client_request_id=${process.env.CLIENT_REQUEST_ID}`

const fmpCloudApiKey = process.env.NEXT_PUBLIC_FPM_API_KEY

export const getEtoroAssets = async (bulkNumber: number, totalBulks: number): Promise<EToroAssets> => {
  const res = await fetch(etoroStaticPath + getEtoroAssetsPath + `/bulk?bulkNumber=${bulkNumber}&cv=${process.env.CV_INFO}&totalBulks=${totalBulks}`)
  return res.json()
}
export const getEtoroPrices = async (ids: number[]): Promise<PricesObject[]> => {
  const res = await fetch(`${etoroCandlePath}${chartsTodayPath}${amountOfPriceAndClientID}&instruments=%5B${ids.toString()}%5D`)
  return res.json()
}

export const getAssetStats = async (symbol: string): Promise<{ status: number; assetStats: AssetStats }> => {
  const res = await fetch(`https://fmpcloud.io/api/v3/historical-price-full/${symbol}?timeseries=14&apikey=${fmpCloudApiKey}`)
  const assetStats = res.json() as unknown as AssetStats
  const status = res.status
  return { status, assetStats }
}
;('https://www.etoro.com/sapi/trade-real/instruments?InstrumentDataFilters=Activity,Rates,ActivityInExchange')
