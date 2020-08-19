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

<script lang="ts">
import ViBar from '@/components/bar'
import ViLine from '@/components/line'
import ViHistogram from '@/components/histogram'
import ViPie from '@/components/pie'
import ViRing from '@/components/ring'
// import ViRadar from '@/components/radar'
// import ViChart from '@/components/chart'
// import ViMap from '@/components/map'
// import ViScatter from '@/components/scatter'
// import ViGauge from '@/components/gauge'

// import ViSankey from '@/components/sankey'
// import ViHeatmap from '@/components/heatmap'
// import ViScatter from '@/components/scatter'
// import ViCandle from '@/components/candle'
// import ViTree from '@/components/tree'
// import ViLiquidfill from '@/components/liquidfill'
// import ViWordcloud from '@/components/wordcloud'
// import ViWaterfall from '@/components/waterfall'
// import ViFunnel from '@/components/funnel'
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
    // ViRadar,
    // ViChart,
    // ViMap,
    // ViScatter,
    // ViWaterfall,
    // ViFunnel,
    // ViSankey,
    // ViHeatmap,
    // ViCandle,
    // ViTree,
    // ViLiquidfill,
    // ViWordcloud
    // ViGauge
  }
}
</script>

<style lang="scss">
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
