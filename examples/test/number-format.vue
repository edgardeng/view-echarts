<template>
  <div>
    <vi-line :settings="chartSettings" :data="chartData"></vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
ViLine._numerify.setOptions({
  abbrLabel: {
    th: 'K',
    mi: 'M',
    bi: 'G',
    tr: 'T'
  }
})
export default {
  data () {
    this.chartSettings = {
      yAxisType: ['0.0a']
    }
    return {
      chartData: LINE_DATA
    }
  },
  components: { ViLine }
}
</script>
