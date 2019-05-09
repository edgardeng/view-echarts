import ViBar from '../bar'
import ViHistogram from '../histogram'
import ViLine from '../line'
import ViPie from '../pie'
import ViRing from '../ring'
import ViRadar from '../radar'
import ViChart from '../chart'
import ViMap from '../map'
import ViGauge from '../gauge'
import ViScatter from '../scatter'

// import ViWaterfall from '../waterfall'
// import ViFunnel from '../funnel'
// import ViBmap from '../bmap'
// import ViAmap from '../amap'
// import ViSankey from '../sankey'
// import ViHeatmap from '../heatmap'
// import ViCandle from '../candle'
// import ViTree from '../tree'
// import ViLiquidfill from '../liquidfill'
// import ViWordcloud from '../wordcloud'

const components = [
  ViBar,
  ViHistogram,
  ViLine,
  ViPie,
  ViRing,
  ViRadar,
  ViChart,
  ViMap,
  ViScatter,
  ViGauge
  // ViHeatmap,
  // ViWaterfall,
  // ViFunnel,
  // ViBmap,
  // ViAmap,
  // ViSankey,
  // ViCandle,
  // ViTree,
  // ViLiquidfill,
  // ViWordcloud
]

function install (Vue, _) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  ViBar,
  ViHistogram,
  ViLine,
  ViPie,
  ViRing,
  ViRadar,
  ViChart,
  ViMap,
  ViScatter,
  ViGauge,
  install
}
