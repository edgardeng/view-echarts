import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
Vue.use(VueRouter);

export const TEST_ROUTES: Array<RouteConfig> = [
  { path: '/columns-rows', name: '测试属性', component: resolve => require(['../test/columns-rows.vue'], resolve) },
  { path: '/load', name: '加载load', component: resolve => require(['../test/load.vue'], resolve) },
  { path: '/custom-props', name: '属性props', component: resolve => require(['../test/custom-props.vue'], resolve) },
  // { path: '/events', name: '事件event', component: resolve => require(['../test/events.vue'], resolve) },
  // { path: '/extend', name: '继承extend', component: resolve => require(['../test/extend.vue'], resolve) },
  // { path: '/hook', name: '钩子hook', component: resolve => require(['../test/hook.vue'], resolve) },
  // { path: '/init', name: '初始化init', component: resolve => require(['../test/init.vue'], resolve) },
  // { path: '/judge-width', name: 'judge-width', component: resolve => require(['../test/judge-width.vue'], resolve) },
  // { path: '/mark', name: 'Mark', component: resolve => require(['../test/mark.vue'], resolve) },
  // { path: '/resize', name: 'resize', component: resolve => require(['../test/resize.vue'], resolve) },
  // { path: '/set-option', name: 'set-option', component: resolve => require(['../test/set-option.vue'], resolve) },
  // { path: '/number-format', name: 'number', component: resolve => require(['../test/number-format.vue'], resolve) },
  // { path: '/data-zoom', name: 'data-zoom', component: resolve => require(['../test/data-zoom.vue'], resolve) }
]

const routes : Array<RouteConfig> = [
  //  { path: '/', name: '安装', component: Home }
  { path: '/', name: '安装', component: resolve => require(['../pages/install.vue'], resolve) },
  { path: '/chart/:type', name: '图表', component: resolve => require(['../pages/chart.vue'], resolve) },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes.concat(TEST_ROUTES)
});

export default router;
