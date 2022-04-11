class StockGridHelper {
  convertIsoDateToReadableDate = (isoDate: string) => {
    return isoDate.split('T')[0].split('-').reverse().join('/')
  }
}

const stockGridHelper = new StockGridHelper()
export default stockGridHelper
