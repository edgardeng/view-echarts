<template>
  <!-- 测试属性
    beforeConfig: Function,
    afterConfig: Function,
    afterSetOption: Function,
    afterSetOptionOnce: Function,
    @ready
    @ready-once
  -->
  <div>
    <vi-line
      :before-config="beforeConfig"
      :after-config="afterConfig"
      :after-set-option="afterSetOption"
      :after-set-option-once="afterSetOptionOnce"
      @ready="ready"
      @ready-once="readyOnvi"
      :data="chartData"
      :settings="chartSettings">
    </vi-line>

    <button @click="chartSettings = {}">trigger change</button>
  </div>
</template>

<script>
import { ViLine } from '../../src/packages/index'
import { LINE_DATA } from './data'
export default {
  data () {
    return {
      chartData: LINE_DATA,
      chartSettings: {}
    }
  },
  methods: {
    beforeConfig () {
      console.log('beforeConfig', arguments)
      return arguments[0]
    },
    afterConfig () {
      console.log('afterConfig', arguments)
      return arguments[0]
    },
    afterSetOption () {
      console.log('afterSetOption', arguments)
    },
    afterSetOptionOnce () {
      console.log('afterSetOptionOnce', arguments)
    },
    ready () {
      console.log('ready', arguments)
    },
    readyOnvi () {
      console.log('readyOnvi', arguments)
    }
  },
  components: { ViLine }
}
</script>
