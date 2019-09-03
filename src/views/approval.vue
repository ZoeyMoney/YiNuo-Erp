<template>
    <div class="approval">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">审批管理</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--center-->
      <div class="mui-content">
        <!--任务下达-->
        <div class="mui-content">
          <div class="customer">
            <h2>审批费用</h2>
            <p>/Payment approval</p>
          </div>
        </div>
        <!--top-->
        <div class="mui-content app">
          <form class="mui-input-group">
            <!--<div class="mui-input-row">
              <label>类别选择</label>
              <input type="text" class="mui-input-clear" v-model="category" placeholder="请选择类别">
            </div>-->
            <div class="mui-input-row">
              <label>项目名称</label>
              <input type="text" class="mui-input-clear" v-model="projet" @click="projetClick" placeholder="请选择项目名称">
            </div>
            <div class="mui-input-row">
              <label>下达人</label>
              <input type="text" class="mui-input-clear" v-model="Application" placeholder="请选择申请人">
            </div>
            <div class="mui-input-row">
              <label>总金额</label>
              <input type="text" class="mui-input-clear" v-model="totalMoney" placeholder="请输入总金额">
            </div>
            <div class="mui-input-row">
              <label>付款日期</label>
              <input type="text" class="mui-input-clear" v-model="paymentDate" placeholder="请选择付款日期">
            </div>
            <div class="mui-input-row">
              <label>收款人</label>
              <input type="text" class="mui-input-clear" v-model="ReceiptPeople" placeholder="请选择收款人">
            </div>
            <div class="mui-input-row">
              <label>账号</label>
              <input type="text" class="mui-input-clear" v-model="userName" placeholder="请输入账号">
            </div>
            <div class="mui-input-row">
              <label>费用明细</label>
              <input type="text" class="mui-input-clear" v-model="DetailMoney" placeholder="请输入费用">
            </div>
          </form>
          <div class="mui-input-row form-btn">
            <button type="button" class="mui-btn mui-btn-blue" @click="saveName">提交审核</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'approval',
  data () {
    return {
      imgUrl_loading: false,
      // category:'',//类别选择
      projet: '', // 项目名称
      projet_id: '', // 项目id
      Application: '', // 申请人
      totalMoney: '', // 总金额
      paymentDate: '', // 付款日期
      ReceiptPeople: '', // 收款人
      userName: '', // 账户
      DetailMoney: ''// 费用明细
    }
  },
  created () {
    // 接收工地参数
    this.projet = window.test
    this.projet_id = window.test_id
  },
  methods: {
    // 项目名称传参
    projetClick () {
      var expenditure = 'approval'
      this.$router.push({ path: 'siteList' })
      window.expenditure = expenditure
    },

    // 保存
    saveName () {
      var then = this
      var _true = true
      if (this.category == '' || this.projet == '' || this.Application == '' || this.totalMoney == '' || this.paymentDate == '' ||
          this.ReceiptPeople == '' || this.userName == '' || this.DetailMoney == '') {
        mui.toast('所有资料不能为空')
        _true = false
        return false
      }
    }
  }
}
</script>

<style scoped>
  .form-btn button{width: 59%!important;margin: 0 3px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
