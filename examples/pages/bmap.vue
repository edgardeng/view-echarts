<template>
  <div>
    <vi-bmap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :mark-line="markLine">
    </vi-bmap>
    <button @click="markLine = {}">toggle</button>
    <button @click="add">add</button>
  </div>
</template>

<script>
import ViBmap from '../../src/components/bmap'
export default {
  name: 'bmap',
  data () {
    return {
      chartSettings: {
        key: 'Z5S0DmA3cDZwIr20ZBAnINPxkjerHTMx',
        v: '3.0',
        useOuterMap: true,
        bmap: {
          center: [120, 30],
          zoom: 14,
          roam: true,
          mapStyle: {}
        }
      },
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [120, 30.0000001, 5],
            [120, 30.0000002, 5]
          ]
        }
      ],
      markLine: {}
    }
  },

  methods: {
    getMap (echarts) {
      console.log()
      const bmap = echarts.getModel().getComponent('bmap').getBMap()
      bmap.addControl(new window.BMap.MapTypeControl())
    },

    add () {
      this.chartSeries[0].data.push([120, 30.2, 1])
    }
  },

  components: { ViBmap }
}
</script>
