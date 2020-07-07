import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/vchart'
import Echarts from 'echarts'
import VueECharts from 'vue-echarts'
import './style/index.css'
Vue.config.productionTip = false
Vue.component('v-chart', VueECharts)

Vue.prototype.$echarts = Echarts // 加在原型上
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
