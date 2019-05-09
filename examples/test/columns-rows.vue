<template>
  <!-- 测试属性
    data: { columns, rows }
    changeDelay: { type: Number, default: 0 }
    width: { type: String, default: 'auto' }
    height: { type: String, default: '400px' }
  -->
  <div>

    <vi-line
      :data="chartData"
      class="custom-class"
      width="300px"
      height="300px">
    </vi-line>
    <button @click="changeSettings">trigger change</button>
    <br>
    change delay 0
    <vi-line
      :data="chartData"
      :after-config="afterConfig"
      :settings="chartSettings">
    </vi-line>
    change delay 2000
    <vi-line
      :data="chartData"
      :after-config="afterConfig.bind(this, 2)"
      :change-delay="2000"
      :settings="chartSettings">
    </vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      chartSettings: {}
    }
  },
  methods: {
    changeSettings () {
      this.timer = Date.now()
      console.log('触发 watch')
      this.chartSettings = { yAxisType: ['0.0a'] }
    },
    afterConfig () {
      console.log(arguments)
      console.log('绘制延迟时间', Date.now() - (this.timer || Date.now()))
      return arguments[arguments.length - 1]
    }
  },
  components: { ViLine }
}
</script>
