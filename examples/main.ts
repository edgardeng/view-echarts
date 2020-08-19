import Vue from 'vue';
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false;
import CodeSection from './components/code-section.vue'
Vue.component(CodeSection.name, CodeSection)

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  render: (h) => h(App),

}).$mount('#app');
