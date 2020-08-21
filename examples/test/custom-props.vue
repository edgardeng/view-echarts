<template>
  <!-- 测试属性
    grid: [Object, Array]
    colors: Array
    visualMap: [Object, Array]
    dataZoom: [Object, Array]
    toolbox: [Object, Array]
    title: Object
    backgroundColor: [Object, String]

    legend: [Object, Array]
    xAxis: [Object, Array]
    yAxis: [Object, Array]
    radar: Object
    tooltip: Object
    axisPointer: Object
    brush: [Object, Array]
    geo: Object
    timeline: [Object, Array]
    graphic: [Object, Array]
    series: [Object, Array]
    textStyle: Object
    animation: Object
  -->
  <div>
    <h2> backgroundColor</h2>
    <vi-line :data="chartData" :grid="chartGrid" background-color="#eee"></vi-line>
    <h2> grid</h2>
    <vi-line :data="chartData" :grid="chartGrid1"></vi-line>
    <h2> colors</h2>
    <vi-line :data="chartData" :colors="chartColors"></vi-line>
    <h2>visualMap</h2>
    <vi-line :data="chartData" :visual-map="visualMap"></vi-line>
    <h2>dataZoom</h2>
    <vi-line :data="chartData" :data-zoom="dataZoom"></vi-line>
    <h2>toolbox</h2>
    <vi-line :data="chartData" :toolbox="toolbox"></vi-line>
    <h2>title</h2>
    <vi-pie :data="chartData" :title="title" :legend="{show:false}"></vi-pie>
    <h2>others</h2>
<!--    :radar="radar"-->
    <vi-line
        :data="chartData"
      :legend="legend"
      :x-axis="xAxis"
      :y-axis="yAxis"

      :tooltip="tooltip"
      :axis-pointer="axisPointer"
      :brush="brush"
      :geo="geo"
      :timeline="timeline"
      :graphic="graphic"
      :series="series"
      :text-style="textStyle"
      :after-config="afterConfig">
    </vi-line>
  </div>
</template>

<script>
import ViLine from '@/components/line'
import ViPie from '@/components/pie'
import { LINE_DATA } from './data'
import 'echarts/lib/component/visualMap'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/title'

export default {
  data () {
    this.chartGrid = { right: '50%' }
    this.chartGrid1 = [this.chartGrid]
    this.chartColors = ['red', 'blue']
    this.visualMap = [{ type: 'continuous' }]
    this.dataZoom = [
      {
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter'
      }
    ]
    this.toolbox = {
      show: true,
      feature: {
        dataZoom: { yAxisIndex: 'none' },
        dataView: { readOnly: false },
        magicType: { type: ['line', 'bar'] },
        restore: {},
        saviAsImage: {}
      }
    }
    this.title = {
      x:'center',
      y:'top',
      textAlign: 'center',
      text: 'Custom Chart Title',
      // textStyle: {
      //   fontSize: 20,
      //   fontWeight: 'normal'
      // }
    }
    this.legend = {}
    this.xAxis = {}
    this.yAxis = {}
    this.radar = {}
    this.tooltip = {}
    this.axisPointer = {}
    this.brush = {}
    this.geo = {}
    this.timeline = {}
    this.graphic = {}
    this.series = {}
    this.textStyle = {}
    return {
      chartData: LINE_DATA
    }
  },
  methods: {
    afterConfig (v) {
      console.log(v)
      return v
    }
  },
  components: { ViLine , ViPie}
}
</script>
