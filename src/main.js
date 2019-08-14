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
import tosDate from './components/tosDate' // 年月日-1天
import NoYes from './components/NoYes' // 待确认
import MoneyFormat from './components/comma' // 货币逗号分行
import negative from './components/negative'  //过滤减号特殊字符
import buttonSave from './components/button_save' //组件调用button
import dataValue from './components/DateValue' //时间控件
import loginLoading from './components/login_loading' //时间控件
import VueTouch from 'vue-touch'  //滑动
Vue.use(loginLoading)
Vue.use(buttonSave)
Vue.use(dataValue)
Vue.use(element)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Vuex)
// Vue.use(Vueaxios, axios)
const ser = Vue.prototype.axios = axios.create({
  baseURL:'https://formattingclub.com/YiNuoLogin',
  timeout:20000,//请求事件
  crossDomain:true,//设置cross跨域
  withCredentials:true //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
})


ser.interceptors.request.use(function (config) {
  return config
},function (error) {
  console.log(error)
  return Promise.reject(error)
})

//http response 拦截器
/*ser.interceptors.response.use(response =>{
    if (response.data.errno === 999) {
      router.replace('/Login')
      console.log('token过期')
    }else if (response.data === 406) {
      router.replace('/Login')
      console.log('数据异常')
    }else if (response.data === 404) {
      router.replace('/Login')
      console.log('404')
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)*/
axios.defaults.withCredentials = true
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
