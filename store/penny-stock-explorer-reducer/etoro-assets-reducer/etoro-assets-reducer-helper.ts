import { InstrumentDisplayData } from '../../../services/api-services/api-services-types'

class EToroAssetsReducerHelper {
  filterAssetsForThresholds = (
    tempAllAssets: InstrumentDisplayData[],
    topThreshold: number | undefined,
    bottomThreshold: number | undefined
  ): InstrumentDisplayData[] => {
    let filteredAssets: InstrumentDisplayData[] = []

    if (topThreshold && bottomThreshold) {
      filteredAssets = tempAllAssets.filter((asset) => asset.Price <= topThreshold && asset.Price >= bottomThreshold)
    } else if (topThreshold) {
      filteredAssets = tempAllAssets.filter((asset) => asset.Price <= topThreshold)
    } else if (bottomThreshold) {
      filteredAssets = tempAllAssets.filter((asset) => asset.Price >= bottomThreshold)
    }
    return filteredAssets
  }
}

const eToroAssetsReducerHelper = new EToroAssetsReducerHelper()
export default eToroAssetsReducerHelper
