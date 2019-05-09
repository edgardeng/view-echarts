<template>
  <!-- 测试属性
    judgeWidth: { type: Boolean, default: false }
    widthChangeDelay: { type: Number, default: 300 }
  -->
  <div :style="style">
    <vi-line :data="chartData"></vi-line>
    <vi-line :data="chartData" judge-width></vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      style: {
        width: 0
      }
    }
  },
  mounted () {
    this.style.width = '400px'
  },
  components: { ViLine }
}
</script>
