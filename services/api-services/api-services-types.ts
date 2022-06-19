export interface EToroAssets {
  InstrumentDisplayDatas: InstrumentDisplayData[]
}

export interface InstrumentDisplayData {
  InstrumentID: InstrumentID
  ExchangeID: number
  HasExpirationDate: boolean
  Images: Images[]
  InstrumentDisplayName: string
  InstrumentTypeID: number
  PriceSource: string
  SymbolFull: string
  InstrumentTypeSubCategoryID?: number
  IsInternalInstrument?: boolean
  StocksIndustryID?: number
  Price: number
  ToTime: string
}

export type InstrumentID = number

export interface Images {
  Height: number
  Uri: string
  Width: number
}

export interface PricesObject {
  InstrumentId: InstrumentID
  Prices: Price[]
}

export interface Price {
  Price: number
  ToTime: string
}

export enum unwantedAssetTypes {
  crpytoToExchangeInsturmentTypeSubCategoryID = 1002,
  cryptoToCryptoInsturmentTypeSubCategoryID = 1003,
  goldToCrpytoInsturmentTypeSubCategoryID = 1004,
  exchangeToExchangeStockIndustryID = 0,
  etfInstrumentTypeID = 6,
  currencyExchangeID = 1,
  commodityExchangeID = 2,
  indicesExchangeID = 3,
}

export interface AssetStats {
  historical: AssetStatsHistorical[]
  symbol: string
}

export interface AssetStatsHistorical {
  adjClose: number
  change: number
  changeOverTime: number
  changePercent: number
  close: number
  date: string
  high: number
  label: string
  low: number
  open: number
  unadjustedVolume: number
  volume: number
  vwap: number
}
