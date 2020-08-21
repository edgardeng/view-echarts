<template>
  <div class='indicator-box' ref="box" >
    <div class="indicator" v-for="item in indicatorList" :key="item.label">
      <div :style='textStyle' class="indicator-value">{{item.value}}</div>
      <div class="indicator-label">{{item.label}}</div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { getFormated } from '../utils'
export default {
  name: 'Indicator',
  props: {
    data: { type: [Object, Array], default () { return {} } },
    settings: { type: Object, default () { return {} } }
  },
  data () {
    return {
      textStyle: '',
      textH: 12,
      textW: 12,
      wordCount: 0,
      indicatorList: [{label: '', value: '无数据'}]
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
      let columns = this.data.columns // 1维数组
      if (!columns || columns.length < 1) {
        return
      }
      this.indicatorList = []
      let rows = this.data.rows // 1 维数组 或者 字典
      if (rows && rows.length > 0) {
        let data = rows[0]
        for (let col of columns) {
          let value = data[col]
          if (value) {
            let type = 'normal'
            if (this.settings.yAxisType) {
              type = this.settings.yAxisType[0]
            }
            value = getFormated(value, type, 2)
          } else {
            value = '无数据'
          }
          if (value.length > this.wordCount) {
            this.wordCount = value.length
          }
          this.indicatorList.push({label: col, value })
        }
      }
    },
    heightChanged () {
      this.$nextTick(() => {
        let box = this.$refs.box
        this.textH = parseInt(box.offsetHeight)
        this.textW = parseInt(box.offsetWidth)
        console.log('textH:', this.textH, 'textW:', this.textW)
        this.styleChange()
      })
    },
    settingsChanged () {
      this.styleChange()
      this.dataChanged()
    },
    styleChange () {
      let size = this.textW / (this.wordCount)
      if (this.indicatorList.length > 0) {
        size = size / this.indicatorList.length
      }
      console.log(this.textW, size,this.wordCount)
      if (size > this.textH) {
        size = this.textH / 2
      }
      if (size < 12) {
        size = 12
      }
      if (size > 90) {
        size = 90
      }
      this.textStyle = 'font-size:' + parseInt(size) + 'px; line-height:' + (size * 2) + 'px;margin-top:' + (this.textH - size * 2 - 20) / 2 + 'px;'
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
  display: flex;
  .indicator {
    flex-grow: 1;
    .indicator-label {
      color: #a8b9d1;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
