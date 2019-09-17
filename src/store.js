import Vue from 'vue'
import Vuex from 'vuex'
import config from './js/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: '',  //账号id
    userid: '',
    yingshou:'',//类别名称
    people:'',//相关人
    projet:'',//项目名称
    list_backuo:''// 应收筛选数据
  },
  getters: {
    //账号id
    isLogin (state) {
      if (!state.isLogin) {
        state.isLogin = sessionStorage.getItem(config.KEY.CACHE_LOGIN_ID)
      }
      return state.isLogin
    },
    userid (state) {
      if (!state.userid) {
        state.userid = sessionStorage.getItem(config.KEY.CACHE_LOGIN_ID)
      }
    },
    //应收应付 类别名称
    yingshou(state){
      if (!state.yingshou) {
        state.yingshou = sessionStorage.getItem(config.SEARCH.SEARCH_LIST_NAME)
      }
      return state.yingshou
    },
  // 应收应付 相关人
    people(state) {
      if (!state.people) {
        state.people = sessionStorage.getItem(config.SEARCH.SEARCH_LIST_PEOPLE)
      }
      return state.people
    },
  //  应收应付 项目名称
    projet(state){
      if (!state.projet) {
        state.projet = sessionStorage.getItem(config.SEARCH.SEARCH_LIST_PROJET)
      }
      return state.projet
    },
  //  list_backuo
    list_backuo(state){
      if (!state.list_backuo){
        state.list_backuo = sessionStorage.getItem(config.LIST.LIST_PROJET)
      }
      return state.list_backuo
    }
  },
  mutations: {
    isLogin (state, msg) {
      state.isLogin = msg
      localStorage.setItem('isLogin', msg)
    },
    //应收应付 类别名称
    yingshou(state,msg){
      state.yingshou = msg
      localStorage.setItem('yingshou',msg)
    },
    //应收应付 相关人
    people(state,msg) {
      state.people = msg
      localStorage.getItem('people',msg)
    },
    //应收应付 项目名称
    projet(state,msg) {
      state.projet = msg
      localStorage.getItem('projet',msg)
    },
    list_backuo(state,msg){
      state.list_backuo = msg
      localStorage.getItem('list_backuo',msg)
    }
  },
  actions: {

  }
})
