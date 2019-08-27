/*
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import config from './index'
export default new Vuex.Store({
  state:{
    setName:''
  },
  getters:{
    LOGIN_USER(state){
      return state.setName || sessionStorage.getItem(config.KEY.CACHE_LOGIN_USER)
    }
  },
  mutations:{
    setUserName(state,val){
      state.setName = val
      sessionStorage.setItem(config.KEY.CACHE_LOGIN_USER,_this.name)
      sessionStorage.setItem(config.KEY.CACHE_LOGIN_ID,res.data.userid)
    }
  }
})
*/
