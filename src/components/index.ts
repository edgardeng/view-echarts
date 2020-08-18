import jieEcharts from './jie-echarts.vue';

(jieEcharts as any).install = (Vue: any) => {
  Vue.component(jieEcharts.name, jieEcharts);
};

export default jieEcharts;
// 以插件的形式进行封装，方便全局引用：
