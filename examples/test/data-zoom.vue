<template>
  <div>
    <button @click="changeDataZoom">change dataZoom</button>
    <vi-line
      :data="chartData"
      :not-set-unchange="['dataZoom']"
      :data-zoom="dataZoom">
    </vi-line>
    <vi-line
      :data="chartData"
      :data-zoom="dataZoom">
    </vi-line>
  </div>
</template>

<script>
import { ViLine } from '../../src/index.es'
import { LINE_DATA } from '../test/data'
export default {
  data () {
    this.unchange = ['dataZoom']
    return {
      chartData: LINE_DATA,
      dataZoom: { start: 20, end: 100 }
    }
  },
  methods: {
    changeDataZoom () {
      this.dataZoom.start = this.dataZoom.start === 20 ? 50 : 20
    }
  },
  components: { ViLine }
}
</script>
