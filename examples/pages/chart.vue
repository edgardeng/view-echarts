<template>
  <div class="page-item-test">
    <div class="chart-item" v-for="(d, i) in chartData" :key="i">
      <div class="chart-part">
        <h3>{{ d.name }}</h3>
        <component
          :is="`vi-${innerType}`"
          :data="d.data"
          :settings="d.settings"
        >
        </component>
      </div>
      <div class="code-view">
        <p>数据格式</p>
        <div class="data-code">
          <code-section :content="d.data" json></code-section>
        </div>
        <p>配置项</p>
        <div class="setting-code">
          <code-section :content="d.settings" json></code-section>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ViBar from '../../src/packages/bar'
import ViLine from '../../src/packages/line'
import ViHistogram from '../../src/packages/histogram'
import ViPie from '../../src/packages/pie'
import ViRing from '../../src/packages/ring'
import ViRadar from '../../src/packages/radar'
import ViChart from '../../src/packages/chart'
import ViMap from '../../src/packages/map'
import ViScatter from '../../src/packages/scatter'
import ViGauge from '../../src/packages/gauge'

// import ViSankey from '../../src/packages/sankey'
// import ViHeatmap from '../../src/packages/heatmap'
// import ViScatter from '../../src/packages/scatter'
// import ViCandle from '../../src/packages/candle'
// import ViTree from '../../src/packages/tree'
// import ViLiquidfill from '../../src/packages/liquidfill'
// import ViWordcloud from '../../src/packages/wordcloud'
// import ViWaterfall from '../../src/packages/waterfall'
// import ViFunnel from '../../src/packages/funnel'
import CHART_DATA from '../data'

export default {
  name: 'Item',

  data () {
    return {
      chartData: [],
      type: null,
      innerType: null
    }
  },

  methods: {
    init () {
      this.type = this.$route.params.type
      this.chartData = CHART_DATA[this.type].data
      this.innerType = CHART_DATA[this.type].type
    }
  },

  created () { this.init() },

  watch: {
    $route () {
      this.init()
    }
  },

  components: {
    ViBar,
    ViLine,
    ViHistogram,
    ViPie,
    ViRing,
    ViRadar,
    ViChart,
    ViMap,
    ViScatter,
    // ViWaterfall,
    // ViFunnel,
    // ViSankey,
    // ViHeatmap,
    // ViCandle,
    // ViTree,
    // ViLiquidfill,
    // ViWordcloud
    ViGauge
  }
}
</script>

<style lang="less">
.page-item-test {
  h3, p {
    margin: 0;
  }

  pre {
    height: 150px;
  }

  .chart-item {
    display: flex;
    padding: 15px;

    .chart-part {
      max-width: 900px;
      flex: 1;
    }

    .code-view {
      width: 400px;
      margin-left: 20px;
    }
  }
}
</style>
