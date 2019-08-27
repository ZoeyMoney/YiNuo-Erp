import Vue from 'vue'
import Vuex from 'vuex'
import config from './js/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    state:{
      isLogin:'',
      userid:'',
    }
  },
  getters:{
    isLogin(state){
      if (!state.isLogin) {
        state.isLogin = sessionStorage.getItem(config.KEY.CACHE_LOGIN_ID)
      }
      return state.isLogin
    }
  },
  mutations: {
    newAuthor(state,msg){
      state.author = msg
    },
    isLogin(state,msg){
      state.isLogin = msg
      localStorage.setItem('isLogin',msg)
    }
  },
  actions: {

  }
})
