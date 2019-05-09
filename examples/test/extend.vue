<template>
  <!-- 测试属性
    extend: Object
  -->
  <div>
    <vi-line :data="chartData" :extend="extend"></vi-line>
    <vi-line :data="chartData" :extend="extend1"></vi-line>
    <vi-line :data="chartData" :settings="settings" :extend="extend2"></vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    this.extend = {
      series: {
        smooth: false
      }
    }
    this.extend1 = {
      series (v) {
        v.map(item => { item.smooth = false })
        return v
      }
    }
    this.extend2 = {
      'series.1.smooth': false,
      'series.0.symbol': 'rect'
    }
    this.settings = {
      axisSite: {
        right: ['下单用户']
      }
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { ViLine }
}
</script>
