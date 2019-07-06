<template>
    <div class="Follow_up">
      <!--头部-->
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">跟进人添加</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户管理-->
      <div class="one-noble">
        <h2>跟进人添加</h2>
        <p>Customer management</p>
      </div>
      <!--input-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>责任人</label>
            <input type="text" class="mui-input-clear" v-model="name" placeholder="请输入设计师名字">
          </div>
        </form>
        <div class="form-botton">
          <button type="button" class="mui-btn mui-btn-black" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'Follow_up',
    data(){
      return{
        imgUrl_loading:false,
        name:''
      }
    },
    methods:{
      add(){
        var then = this
        this.imgUrl_loading = true
        this.axios.get(url.AfterPersonAdd+'?Follow_person=' + this.name + '&Customer_aftersale=1').then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
          mui.alert(res.data.msg, function () {
            then.$router.push({ name: 'money_sale' })
          })
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import "../css/public.css";
  .mui-input-group{margin-bottom: 10px;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-botton{text-align: center;}
</style>
