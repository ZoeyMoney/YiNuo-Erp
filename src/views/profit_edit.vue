<template>
    <div class="profit_edit">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">利润原始数据修改</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--top-->
      <div class="mui-content">
        <div class="customer">
          <h2>利润原始数据修改</h2>
          <p>/profit_edit</p>
        </div>
      </div>
      <!--content-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>项目名称</label>
            <input type="text" v-model="site" @click="siteChange" placeholder="请选择">
          </div>
          <div class="mui-input-row">
            <label>已收款</label>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名">
          </div>
          <div class="mui-input-row">
            <label>已付款</label>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名">
          </div>
        </form>
        <button-save @click.native="add"></button-save>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'profit_edit',
    data(){
      return{
        site:'',
        test_id:''
      }
    },
    created(){
      this.site = window.test
      this.test_id = window.test_id
    },
    methods:{
      siteChange(){
        var expenditure = 'profit_edit'
        this.$router.push({path:'siteList',})
        window.expenditure = expenditure
      },
      add(){

      }
    }
  }
</script>

<style scoped>

</style>
