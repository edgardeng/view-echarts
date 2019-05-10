<template>
  <!-- 测试属性 extend: Object -->
  <div>
    <h2>属性继承</h2>
    <vi-line :data="chartData" :extend="extend"></vi-line>
    <h2>系列全继承</h2>
    <vi-line :data="chartData" :extend="extend1"></vi-line>
    <h2>单个系列继承</h2>
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
      },
      backgroundColor: '#0a1642',
      title: {
        textStyle: {
          color: '#fefefe'
        },
        subtextStyle: {
          color: '#999999'
        }
      },
      legend: {
        inactiveColor: '#6e747b',
        textStyle: {
          color: '#f0f2f0'
        }
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#fefefe'
          }
        }
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: '#fefefe'
          }
        }
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
