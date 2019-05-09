/* eslint-disable comma-dangle */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const TEST_ROUTES = [
  { path: '/columns-rows', name: '测试属性', component: resolve => require(['./test/columns-rows.vue'], resolve) },
  { path: '/load', name: '加载', component: resolve => require(['./test/load.vue'], resolve) },
  { path: '/custom-props', name: '属性', component: resolve => require(['./test/custom-props.vue'], resolve) },
  { path: '/events', name: '事件', component: resolve => require(['./test/events.vue'], resolve) },
  { path: '/extend', name: 'extend', component: resolve => require(['./test/extend.vue'], resolve) },
  { path: '/hook', name: 'hook', component: resolve => require(['./test/hook.vue'], resolve) },
  { path: '/init', name: 'init', component: resolve => require(['./test/init.vue'], resolve) },
  { path: '/judge-width', name: 'judge-width', component: resolve => require(['./test/judge-width.vue'], resolve) },
  { path: '/mark', name: 'Mark', component: resolve => require(['./test/mark.vue'], resolve) },
  { path: '/resize', name: 'resize', component: resolve => require(['./test/resize.vue'], resolve) },
  { path: '/set-option', name: 'set-option', component: resolve => require(['./test/set-option.vue'], resolve) },
  { path: '/number-format', name: 'number', component: resolve => require(['./test/number-format.vue'], resolve) },
  { path: '/data-zoom', name: 'data-zoom', component: resolve => require(['./test/data-zoom.vue'], resolve) }
]

export default new Router({
  routes: [
    { path: '/', name: '安装', component: resolve => require(['./pages/install'], resolve) },
    { path: '/chart/:type', name: '图表', component: resolve => require(['./pages/chart'], resolve) },
    // { path: '/bmap', name: '百度地图', component: resolve => require(['./pages/bmap'], resolve) },
    // { path: '/amap', name: '高德地图', component: resolve => require(['./pages/amap'], resolve) }
  ].concat(TEST_ROUTES)
})
