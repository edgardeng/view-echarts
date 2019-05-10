<template>
  <div>
    <vi-line
      :set-option-opts="false"
      :data="chartData"
      :data-zoom="chartDataZoom">
    </vi-line>
    <button @click="change">change</button>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
import 'echarts/lib/component/dataZoom'
export default {
  data () {
    this.chartDataZoom = [{
      type: 'slider'
    }]
    return {
      chartData: LINE_DATA
    }
  },
  methods: {
    change () {
      this.chartData.rows.push({
        '日期': '1/7',
        '访问用户': Math.random() * 1000,
        '下单用户': Math.random() * 1000
      })
    }
  },
  components: { ViLine }
}
</script>
