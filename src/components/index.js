import ViBar from './bar/index'
import ViHistogram from './histogram/index'
import ViLine from './line/index'
import ViPie from './pie/index'
import ViRing from './ring/index'
// import ViRadar from './radar/index'
import ViChart from './chart/index'
// import ViMap from './map/index'
// import ViGauge from './gauge/index'
// import ViScatter from './scatter/index'

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
  ViChart,
  // ViRadar,
  // ViMap,
  // ViScatter,
  // ViGauge
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
  // ViRadar,
  ViChart,
  // ViMap,
  // ViScatter,
  // ViGauge,
  install
}
