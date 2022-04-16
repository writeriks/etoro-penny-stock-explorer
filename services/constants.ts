export enum InstrumentTypeID {
  none = 0,
  crpyto = 10,
}
export enum StockIndustryID {
  none = 0,
  basicMaterials = 1,
  conglomeretes = 2,
  consumerGood = 3,
  financial = 4,
  healthcare = 5,
  industrialGoods = 6,
  services = 7,
  technology = 8,
  utilities = 9,
}

export interface IndustryType {
  label: string
  instrumentTypeId: number
  stockIndustryId: number
}

export const insdustryOptions: IndustryType[] = [
  { label: 'None', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.none },
  { label: 'Crypto', instrumentTypeId: InstrumentTypeID.crpyto, stockIndustryId: StockIndustryID.none },
  { label: 'Technology', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.technology },
  { label: 'Consumer Goods', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.consumerGood },
  { label: 'Financial', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.financial },
  { label: 'Healthcare', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.healthcare },
  { label: 'Basic Materials', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.basicMaterials },
  { label: 'Conglomeretes', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.conglomeretes },
  { label: 'Industrial Goods', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.industrialGoods },
  { label: 'Services', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.services },
  { label: 'Utilities', instrumentTypeId: InstrumentTypeID.none, stockIndustryId: StockIndustryID.utilities },
]
