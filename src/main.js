import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import Vueaxios from 'vue-axios'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import date from './components/date' // 天小时分钟秒
import data from './components/data' // 年月日
import tosDate from './components/tosDate' // 年月日
import NoYes from './components/NoYes' // 待确认
import MoneyFormat from './components/comma' // 货币逗号分行
import negative from './components/negative'  //过滤减号特殊字符
import buttonSave from './components/button_save' //组件调用button
import dataValue from './components/DateValue' //时间控件
import loginLoading from './components/login_loading' //时间控件
Vue.use(loginLoading)
Vue.use(buttonSave)
Vue.use(dataValue)
Vue.use(element)
Vue.use(Vuex)
Vue.use(Vueaxios, axios)

// 解决token session 被拦截
axios.defaults.withCredentials = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
