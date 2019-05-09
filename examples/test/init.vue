<template>
  <!-- 测试属性
    theme: Object
    themeName: String
    initOptions: { type: Object, default () { return {} } }
  -->
  <div>
    theme
    <vi-line :data="chartData" :theme="theme"></vi-line>
    themeName
    <vi-line :data="chartData" theme-name="test"></vi-line>
    initOptions svg
    <vi-line :data="chartData" :init-options="initOptions"></vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
import echarts from 'echarts/lib/echarts'
import 'zrender/lib/svg/svg'

echarts.registerTheme('test', {
  line: {
    smooth: false
  }
})

export default {
  data () {
    this.theme = {
      line: {
        smooth: false
      }
    }
    this.initOptions = {
      renderer: 'svg'
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { ViLine }
}
</script>
