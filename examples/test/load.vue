<template>
  <div>
    <button @click="load">加载数据</button>
    <vi-line :data="chartData" :loading="loading" :dataEmpty="empty"></vi-line>
  </div>
</template>

<script>
import ViLine from '../../lib/line/index.common'
import { LINE_DATA } from '../test/data'
export default {
  data () {
    return {
      chartData: [],
      loading: false,
      empty: true
    }
  },
  methods: {
    load () {
      this.loading = true
      this.empty = false
      setTimeout(_ => {
        this.loading = false
        this.chartData = LINE_DATA
      }, 2000)
    }
  },
  components: { ViLine }
}
</script>
