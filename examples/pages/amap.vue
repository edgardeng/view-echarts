<template>
  <div>
    <vi-amap
      :settings="chartSettings"
      :series="chartSeries"
      :after-set-option-once="getMap"
      :tooltip="{ show: true }">
    </vi-amap>
  </div>
</template>

<script>
import ViAmap from '../../src/packages/amap'
export default {
  name: 'amap',
  data () {
    return {
      chartSettings: {
        key: '**',
        v: '1.4.3',
        amap: {
          resizeEnable: true,
          center: [120.14322240845, 30.236064370321],
          zoom: 10
        }
      },
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'amap',
          data: [
            [120, 30, 1]
          ]
        }
      ]
    }
  },

  methods: {
    getMap (echarts) {
      echarts.getModel().getComponent('amap').getAMap()
    }
  },

  components: { ViAmap }
}
</script>
