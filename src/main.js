import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import Vueaxios from 'vue-axios'
import state from './js/state'
import element from 'element-ui'  //element
import 'element-ui/lib/theme-chalk/index.css' //element css
import './css/mui.min.css'  //mui css
import './css/fonts/mui.ttf'  //mui-ico
import date from './components/date' // 天小时分钟秒
import data from './components/data' // 年月日
import tosDate from './components/tosDate' // 年月日-1天
import NoYes from './components/NoYes' // 待确认
import MoneyFormat from './components/comma' // 货币逗号分行
import negative from './components/negative' // 过滤减号特殊字符
import buttonSave from './components/button_save' // 组件调用button
import dataValue from './components/DateValue' // 时间控件
import loginLoading from './components/login_loading' // 时间控件
import runingMoneyCard from './components/running_money' // 银行卡
import VueTouch from 'vue-touch' // 滑动
// import 'vue-xlsx-table/dist/style.css'
Vue.use(runingMoneyCard)
Vue.use(loginLoading)
Vue.use(buttonSave)
Vue.use(dataValue)
Vue.use(element)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(Vuex)
// Vue.use(Vueaxios, axios)
const ser = Vue.prototype.axios = axios.create({
  baseURL: 'https://formattingclub.com/YiNuoLogin',
  timeout: 20000, // 请求事件
  crossDomain: true, // 设置cross跨域
  withCredentials: true // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
})
// 添加请求拦截器
ser.interceptors.request.use(config => {
  //每次提交携带token，2019-9-6 携带token后台被拦截
  /*console.log(sessionStorage.getItem('loginToken'))
  if (sessionStorage.getItem('loginToken')) {
    config.headers.Authorization = `${sessionStorage.getItem('loginToken')}`
    console.log('123')
  }*/
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
ser.interceptors.response.use((response) => {
  // console.log(response)
  return response
}, error => {
  // console.log(error)
  if (error.response.status) {
    switch (error.response.status) {
      case 404:
        mui.toast('服务器已挂')
        break
      case 500:
        mui.toast('客户端无法修复服务器')
        break
      case 301:
        mui.toast('禁止浏览器重定向')
        break
      case 406:
        mui.toast('我解析不了')
        break
      case 400:
        mui.toast('服务器解析错误')
        break
      case 401:
        mui.toast('请使用正确的认证正数')
        break
      case 101:
        mui.toast('请切换到http的新版本')
        break
    }
  }
  return Promise.reject(error)
})

axios.defaults.withCredentials = true
new Vue({
  router,
  store,
  state,
  render: h => h(App),
  created () {
    if (localStorage.getItem('isLogin') === null) {
      localStorage.setItem('isLogin', '')
    }
    this.$store.state.isLogin = localStorage.getItem('isLogin')
  }
}).$mount('#app')
