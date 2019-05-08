import ViBar from './packages/bar'
import ViHistogram from './packages/histogram'
import ViLine from './packages/line'
import ViPie from './packages/pie'
import ViRing from './packages/ring'
import ViRadar from './packages/radar'
import ViChart from './packages/chart'
import ViMap from './packages/map'
import ViGauge from './packages/gauge'
import ViScatter from './packages/scatter'

// import ViWaterfall from './packages/waterfall'
// import ViFunnel from './packages/funnel'
// import ViBmap from './packages/bmap'
// import ViAmap from './packages/amap'
// import ViSankey from './packages/sankey'
// import ViHeatmap from './packages/heatmap'
// import ViCandle from './packages/candle'
// import ViTree from './packages/tree'
// import ViLiquidfill from './packages/liquidfill'
// import ViWordcloud from './packages/wordcloud'

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
