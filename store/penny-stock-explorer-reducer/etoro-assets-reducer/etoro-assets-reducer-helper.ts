import { InstrumentDisplayData } from '../../../services/api-services/api-services-types'

class EToroAssetsReducerHelper {
  filterAssetsForThresholds = (
    tempAllAssets: InstrumentDisplayData[],
    topThreshold = 10,
    bottomThreshold = 0
  ): InstrumentDisplayData[] =>
    tempAllAssets.filter((asset) => asset.Price <= topThreshold && asset.Price >= bottomThreshold)
}

const eToroAssetsReducerHelper = new EToroAssetsReducerHelper()
export default eToroAssetsReducerHelper
