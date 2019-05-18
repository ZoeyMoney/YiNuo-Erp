<template>
    <div class="expenditure_receive">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'income'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">转为应收</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>转为应收</h2>
          <p>/expenditur receive</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content" id="app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>债务人</label>
            <input type="text" id="pay" class="mui-input-clear" placeholder="请输入债务人">
          </div>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" id="money" class="mui-input-clear" placeholder="请输入金额">
          </div>
          <div class="mui-input-row">
            <label>付款时间</label>
            <input type="date" id="data" class="mui-input-clear">
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn-href" class="mui-btn mui-btn-blue" @click="add">转为应收</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'expenditure_receive',
    data(){
      return{

      }
    },
    methods:{
      add(){
        var pay = document.getElementById('pay').value;
        var money = document.getElementById('money').value;
        var data = document.getElementById('data').value;
        var chkche = true;
        var nuber = /^[0-9]*$/; //验证数字
        var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;     //验证人的名字
        if (pay == '') {
          mui.toast('债务人不能为空');
          chkche = false
          return false
        }
        if (!nameReg.test(pay)) {
          mui.toast('债务人格式错误');
          chkche = false
          return false
        }
        if (money == '') {
          mui.toast('金额不能为空');
          chkche = false
          return false
        }
        if (!nuber.test(money)) {
          mui.toast('金钱只能填入数字');
          chkche = false
          return false
        }
        if (data == '') {
          mui.toast('付款时间不能为空');
          chkche = false
          return false
        }
      }
    }
  }
</script>

<style scoped>
@import "../css/public.css";
/*按钮*/
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}

</style>
