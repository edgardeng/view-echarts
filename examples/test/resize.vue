<template>
  <!-- 测试属性
    resizeable: { type: Boolean, default: true },
    resizeDelay: { type: Number, default: 200 },
    width: { type: String },
    height: { type: String },
  -->
  <div>
    <vi-line :data="chartData"></vi-line>
    <vi-line :data="chartData" :cancel-resize-check="false"></vi-line>
    <button @click="resizeable = !resizeable">
      change resizeable: {{ resizeable }}
    </button>
    <vi-line :data="chartData" :resizeable="resizeable"></vi-line>
    <button @click="change">change width height</button>
    <vi-line :data="chartData" :width="chartWidth" :height="chartHeight"></vi-line>
    <vi-line :data="chartData" :resizeable="false"></vi-line>
    <vi-line :data="chartData" :resize-delay="1000"></vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      chartWidth: '400px',
      chartHeight: '400px',
      resizeable: true
    }
  },
  methods: {
    change () {
      this.chartWidth = this.chartWidth === '400px' ? '300px' : '400px'
      this.chartHeight = this.chartHeight === '400px' ? '300px' : '400px'
    }
  },
  components: { ViLine }
}
</script>
