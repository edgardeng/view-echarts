<template>
<div class='indicator-box' ref="box" >
  <span :style='textStyle'>{{text}}</span>
</div>
</template>
<script type="text/ecmascript-6">
import { getFormated } from '../utils'
export default {
  name: 'ViIndicator',
  props: {
    data: { type: [Object, Array], default () { return {} } },
    settings: { type: Object, default () { return {} } }
  },
  data () {
    return {
      text: '无数据',
      textStyle: '',
      textH: 12,
      textW: 12
    }
  },
  watch: {
    data (oldV, newV) {
      this.dataChanged()
    },
    settings (oldV, newV) {
      this.settingsChanged()
    }
  },
  mounted () {
    this.dataChanged()
    this.heightChanged()
  },
  methods: {
    dataChanged () {
      if (!this.data) {
        return
      }
      let columns = this.data.columns
      let rows = this.data.rows
      if (rows && rows.length > 0) {
        // TODO 注意传入的数据类型
        let data = rows[0][columns[0]]
        if (!data) {
          data = rows[0][0]
        }
        let type = 'normal'
        if (this.settings.yAxisType) {
          type = this.settings.yAxisType[0]
        }
        let t = getFormated(data, type, 2)
        // percent
        this.text = t !== '-' ? t : data
      }
    },
    heightChanged () {
      this.$nextTick(() => {
        let box = this.$refs.box
        this.textH = parseInt(box.offsetHeight)
        this.textW = parseInt(box.offsetWidth)
        // console.log('textH:', this.textH, 'textW:', this.textW)
        this.styleChange()
      })
    },
    settingsChanged () {
      this.styleChange()
      this.dataChanged()
    },
    styleChange () {
      let size = this.textW * 3 / (4 * this.text.length)
      if (size > this.textH) {
        size = this.textH / 2
      }
      if (size < 12) {
        size = 12
      }
      if (size > 90) {
        size = 90
      }
      this.textStyle = 'font-size:' + parseInt(size) + 'px; line-height:' + this.textH + 'px;'
      let color = this.settings.colors
      if (color && color[0]) {
        this.textStyle = this.textStyle + 'color: ' + color[0] + ';'
      }
    },
    echartsResize () {
      this.heightChanged()
    }
  }
}
</script>
<style lang='scss' scoped>
.indicator-box {
  color: #5ab1ef;
  text-align: center;
  font-weight: 400;
  width: 100%;
  height: 100%;
}
</style>
