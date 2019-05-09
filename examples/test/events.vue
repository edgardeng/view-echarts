<template>
  <!-- 测试属性
    evints: Object
  -->
  <div>
    <vi-line :data="chartData" :evints="evints"></vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from './data'
export default {
  data () {
    this.evints = {
      click (v) {
        console.log('v', v)
      }
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { ViLine }
}
</script>
