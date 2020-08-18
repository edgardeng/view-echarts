<template>
  <div id="app">
    <jie-echarts :options="echartsOptions"></jie-echarts>
    <vi-line :data="mdata" :setting="msettings"></vi-line>
  </div>
</template>
<script lang="ts">
  import { Component, Vue, Watch, Prop } from "vue-property-decorator";
  import jieEcharts from "../src/index";
  import ViLine from "../src/components/line/index";
  @Component({
    components: {
      jieEcharts, ViLine
    }
  })
  export default class TestJieEchartsPreview extends Vue {
    protected echartsOptions = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    protected mdata = {
      columns: ['日期', '2015', '2016'],
      rows: [
        { '日期': '1-1', '2015': 100, '2016': 40 },
        { '日期': '1-2', '2015': 110, '2016': 60 },
        { '日期': '1-3', '2015': 140, '2016': 10 },
        { '日期': '1-4', '2015': 260, '2016': 30 },
        { '日期': '1-5', '2015': 300, '2016': 20 },
        { '日期': '1-6', '2015': 380, '2016': 70 }
      ]
    }
    protected msettings = {
      stack: {
        '年份': ['2015', '2016']
      }
    }


  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
