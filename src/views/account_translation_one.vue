<template>
    <div class="account_translation_one">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_receivable'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">应收余额</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>应收余额</h2>
          <p>/Balance input</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>项目名称</label>
            <input type="text" class="mui-input-clear" placeholder="请输项目名称">
          </div>
          <div class="mui-input-row">
            <label>债务人</label>
            <input type="text" class="mui-input-clear" placeholder="请输入债务人">
          </div>
          <div class="mui-input-row">
            <label>首款备注</label>
            <input type="text" class="mui-input-clear" placeholder="备注">
          </div>
        </form>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>调取应收</label>
            <input type="text" class="mui-input-clear" placeholder="请输入调取">
          </div>
        </form>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>共有</label>
            <input type="text" class="mui-input-clear" placeholder="共有额度">
          </div>
          <div class="mui-input-row">
            <label>实际转账</label>
            <input type="text" class="mui-input-clear" placeholder="请输入实际转账">
          </div>
        </form>
        <div class="form-botton">
          <button type="button" class="mui-btn mui-btn-black" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'account_translation_one',
  data () {
    return {

    }
  },
  methods: {
    add () {
      mui.alert('hello')
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
