<template>
  <!-- 测试属性
    markLine: Object
    markArea: Object
    markPoint: Object
  -->
  <div>
    <h2> Mark Line </h2>
    <vi-line :data="chartData" :mark-line="markLine"></vi-line>
    <h2> Mark Line Extend</h2>
    <vi-line :data="chartData" :extend="chartExtend"></vi-line>
    <h2> Mark Point </h2>
    <vi-line :data="chartData" :mark-point="markPoint"></vi-line>
    <h2> Mark Area </h2>
    <vi-line :data="chartData" :mark-area="markArea"></vi-line>
    <h2> Settings</h2>
    <vi-line :data="chartData" :settings="settings"></vi-line>

  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markArea'

export default {
  data () {
    this.markLine = {
      data: [
        { name: '平均线', type: 'average' }
      ]
    }
    this.markPoint = {
      data: [
        {
          name: '最大值',
          type: 'max'
        }
      ]
    }
    this.markArea = {
      data: [
        [
          {
            name: '平均值到最大值',
            type: 'average'
          },
          {
            type: 'max'
          }
        ]
      ]
    }
    this.chartExtend = {
      series (item) {
        item[0].markLine = {
          label: {
            position: 'middle'
          },
          data: [
            { name: '平均线', type: 'average' }
          ]
        }
        return item
      }
    }
    return {
      chartData: LINE_DATA,
      settings: {
        markPoint: {
          data: [
            {
              name: '最大值',
              type: 'max'
            }
          ]
        }
      }
    }
  },
  components: { ViLine }
}
</script>
