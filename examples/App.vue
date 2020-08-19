<template>
  <div id="app">
<!--    <jie-echarts :options="echartsOptions"></jie-echarts>-->
<!--    <vi-line :data="mdata" :setting="msettings"></vi-line>-->
    <div class="main-container">
      <div class="left-section">
        <sidebar></sidebar>
      </div>
      <div class="right-section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from './components/sidebar'
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">

html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}
  //#app {
  //  font-family: Avenir, Helvetica, Arial, sans-serif;
  //  -webkit-font-smoothing: antialiased;
  //  -moz-osx-font-smoothing: grayscale;
  //  text-align: center;
  //  color: #2c3e50;
  //}

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


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    height: 100%;

    .top-container {
      height: 60px;
      border-bottom: 1px solid #ccc;
    }

    .multi-tip {
      color: #ccc;
    }

    .multi-title {
      color: #888;
    }

    .main-container {
      flex: 1;
      display: flex;

      .left-section {
        width: 150px;
        height: 100%;
        overflow: auto;
        background-color: #f8f8f8;
        border-right: 1px solid #f2f2f2;
      }

      .right-section {
        flex: 1;
        overflow: auto;
        padding: 20px;
        font-size: 14px;
        p {
          line-height: 22px;
        }
      }
    }
  }
  button {
    display: inline-block;
    box-sizing: border-box;
    padding: 6px 10px;
    margin: 0;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    background-color: #409eff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
  }
</style>
