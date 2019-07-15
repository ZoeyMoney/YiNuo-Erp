<template>
  <div class="payable_entry">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'payable_money'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">余额</h1>
      <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户详情-->
    <div class="mui-content">
      <div class="customer">
        <h2>余额</h2>
        <p>/Balance input</p>
      </div>
    </div>
    <!--form-->
    <div class="mui-content app">
      <form class="mui-input-group" v-for="item in projet">
        <div class="mui-input-row">
          <label>工地名称</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_name" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>债务人</label>
          <input type="text" class="mui-input-clear" v-model="item.fund_debtor" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>首款备注</label>
          <input type="text" class="mui-input-clear" v-model="item.fund_details_text" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>时间</label>
          <input type="text" class="mui-input-clear" :value="item.fund_details_date | data" disabled="disabled">
        </div>
      </form>
      <form class="mui-input-group" v-for="item in projet">
        <div class="mui-input-row">
          <label>银行卡</label>
          <select name="" v-model="fund_bank">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in income_y" :value="item.bank_id">
              <div>{{item.bank_bank}}</div>
              <div>{{item.bank_person}}</div>
              <div>￥{{item.bank_money}}</div>
            </option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>共有</label>
          <input type="text" class="mui-input-clear" v-model="item.fund_details_money" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>实际转账</label>
          <input type="text" class="mui-input-clear" v-model="money" placeholder="请输入实际转账">
        </div>
      </form>
      <div class="mui-input-row mui-checkbox mui-left radio-one">
        <label>转为应付</label>
        <input name="checkbox1" type="checkbox" v-model="checkBox">
      </div>
      <div class="form-botton">
        <button type="button" class="mui-btn mui-btn-black" @click="add">立即支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payable_entry',
  data () {
    return {
      imgUrl_loading:false,
      projet: '', // 项目
      checkBox: '', // 复选框
      money: '', // 实际转账
      funn_data: '', // 时间
      fund_details_id: '', // 传参ID
      fund_bank: '', // 银行卡
      income_y: ''// 银行卡
    }
  },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.fund_details_id = id
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/Select_fund_details?fund_details_id=' + id).then(res => {
      this.projet = res.data.data
    })
    // 银行卡
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank').then(res => {
      this.income_y = res.data
    })
  },
  methods: {
    add () {
      var then = this
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      // 银行卡
      if (this.fund_bank == '') {
        mui.toast('银行卡不能为空')
        check = false
        return false
      }
      // 实际转账
      if (this.money == '') {
        mui.toast('实际转账不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.money)) {
        mui.toast('实际转账必须纯数字')
        check = false
        return false
      }
      this.imgUrl_loading = true
      this.money = ~this.money+1
      var add = '?fund_details_id=' + this.fund_details_id + '&money=' + this.money + '&bank_id=' + this.fund_bank
      if (this.checkBox === true) {
        // console.log('点住')
        var fund_money = this.projet[0].fund_details_money
        var money = fund_money + parseInt(this.money)
        var cumoterName = this.projet[0].customer_name
        var person = this.projet[0].fund_debtor
        var text = this.projet[0].fund_details_text
        var data = this.projet[0].fund_details_date
        var datas = data.split(' ')
        this.axios.get('https://formattingclub.com/YiNuoLogin/fund/update_fund_details' + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
            then.$router.push({ path: 'payable_pay', query: { id: then.fund_details_id, money: money, cumoterName: cumoterName, person: person, text: text, datas: datas } })
          }
        })
      } else {
        // console.log('没')
        this.axios.get('https://formattingclub.com/YiNuoLogin/fund/update_fund_details' + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
          if (res.data.msg === '支付成功') {
            mui.alert('支付成功', function () {
              then.$router.push({ name: 'payable_money' })
            })
          } else {
            mui.alert('支付失败')
          }
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  select{font-size: 15px}
  .mui-input-group{margin-bottom: 10px;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-botton{text-align: center;}
  .radio-one label{width: 100%;}
</style>
