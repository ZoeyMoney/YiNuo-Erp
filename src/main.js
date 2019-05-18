import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import jquery from 'jquery'
import ElementUI from 'element-ui'
import date from './components/date' // 天小时分钟秒
import data from './components/data' // 年月日
import MoneyFormat from './components/comma' // 货币逗号分行
import form from 'vue-resource/src/http/interceptor/form'

Vue.use(Vueaxios, axios)
// 解决token session 被拦截
axios.defaults.withCredentials = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
