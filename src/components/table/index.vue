<template>
  <div class="v-table" :style="tableStyle">
    <table >
      <tr class="">
        <th v-for="col in columns" :key="col">
          <div class="cell">{{col}}</div>
        </th>
      </tr>
      <tr v-for="row in rows" class="el-table__row" :key="row">
        <td v-for="item in row" :key="item">
          <div class="cell"> {{item}}</div>
        </td>
      </tr>
    </table>
  </div>

</template>
<script>
import { getFormated } from '../utils'
export default {
  name: 'VTable',
  props: {
    data: { type: [Object, Array], default () { return {} } },
    settings: { type: Object, default () { return {} } },
    extend: { type: Object, default () { return {} } }
  },
  data () {
    return {
      columns: [],
      rows: [],
      tableStyle: ''
    }
  },
  watch: {
    data (oldV, newV) {
      this.init()
    },
    extend (oldV, newV) {
      this.tableStyle = this.extend && this.extend.legend ? 'color: #fefefe;' : 'color: #46474a;'
    },
    settings (oldV, newV) {
      this.dataChanged()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.dataChanged()
    },
    dataChanged () {
      this.columns = this.data.columns
      let rows = this.data.rows
      let type = 'normal'
      if (this.settings.yAxisType) {
        type = this.settings.yAxisType[0]
      }
      this.rows = rows.map((row, index) => {
        return this.columns.map((col, index) => {
          let item = row[col]
          if (!item) {
            item = row[index]
          }
          return index > 0 ? getFormated(item, type, 2) : item
          // return item
        })
      })
      this.tableStyle = this.extend && this.extend.legend ? 'color: #fefefe;' : 'color: #46474a;'
    },
    echartsResize () {
      // console.log('table resize')
    }
  }
}
</script>
<style lang="scss" scoped>

  .v-table {
    position: relative;
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    /*color: #46474a;*/
    overflow: scroll;
    table {
      border-collapse:collapse;
      width: 95%;
      margin: auto;
    }
    th {
      white-space: nowrap;
      overflow: hidden;
      user-select: none;
      /*background-color: #fff;*/
    }
    td, th {
      padding: 4px 0;
      min-width: 0;
      box-sizing: border-box;
      text-overflow: ellipsis;
      white-space: normal;
      vertical-align: middle;
      word-break: break-all;
      position: relative;
      text-align: left;
      border-bottom: 1px solid #ebeef5
    }
    .cell {
      line-height: 24px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
