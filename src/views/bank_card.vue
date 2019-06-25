<template>
    <div class="bank_card">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">银行卡录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>银行卡录入</h2>
        <p>administration</p>
      </div>
      <!--录入form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>开户行</label>
            <input type="text" class="mui-input-clear" v-model="bank_bank" placeholder="请输入开户行">
          </div>
            <div class="mui-input-row">
                <label>卡号</label>
                <input type="text" class="mui-input-clear" v-model="bank_number" placeholder="请输入银行卡账户">
            </div>
          <div class="mui-input-row">
            <label>户主</label>
            <input type="text" class="mui-input-clear" v-model="bank_person" placeholder="请输入户主">
          </div>
          <div class="mui-input-row">
            <label>余额</label>
            <input type="text" class="mui-input-clear" v-model="bank_money" placeholder="请输入余额">
          </div>
          <div class="mui-input-row" id="persion">
            <label>额度</label>
            <input type="text" class="mui-input-clear" v-model="bank_limit" placeholder="请输入额度">
          </div>
        </form>
        <div class="mui-input-row input-radio">
          <div class="mui-input-row mui-left mui-radio">
            <label>储蓄卡</label>
            <input v-model="bank_type" @click="fund_cu" type="radio" value="储蓄卡">
          </div>
          <div class="mui-input-row mui-left mui-radio">
            <label>信用卡</label>
            <input v-model="bank_type" @click="fund_xin" type="radio" value="信用卡">
          </div>
        </div>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'bank_card',
  data () {
    return {
      bank_number: '', // 银行卡账户
      bank_bank: '', // 户主
      bank_money: '', // 余额
      bank_person: '', // 开户行
      bank_limit: '', // 额度
      bank_type: '储蓄卡'
    }
  },
  methods: {
    fund_xin () {
      var persion = document.getElementById('persion')
      persion.style.display = 'block'
    },
    fund_cu () {
      var persion = document.getElementById('persion')
      persion.style.display = 'none'
    },
    go () {
      var then = this
      var add = '?bank_number=' + this.bank_number + '&bank_bank=' + this.bank_bank + '&bank_person=' + this.bank_person + '&bank_type=' + this.bank_type +
          '&bank_money=' + this.bank_money/* '&bank_limit='+this.bank_limit */
      var check = true
      var card = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/ // 身份证验证
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var yin = /^(\d{16}|\d{19})$/ // 银行卡验证
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      if (this.bank_type === '储蓄卡') {
        // 银行卡账户
        if (this.bank_number == '') {
          mui.toast('银行卡账户不能为空')
          check = false
          return false
        }
        if (!yin.test(this.bank_number)) {
          mui.toast('银行卡格式错误')
          check = false
          return false
        }
        // 户主
        if (this.bank_bank == '') {
          mui.toast('户主不能为空')
          check = false
          return false
        }
        if (!nameReg.test(this.bank_bank)) {
          mui.toast('户主不能为空')
          check = false
          return false
        }
        // 余额
        if (this.bank_money == '') {
          mui.toast('余额不能为空')
          check = false
          return false
        }
        if (!nuber.test(this.bank_money)) {
          mui.toast('余额格式错误')
          check = false
          return false
        }
        // 开户行
        if (this.bank_person == '') {
          mui.toast('开户行不能为空')
          check = false
          return false
        }
        add = add + '&bank_limit=0'
      } else if (this.bank_type === '信用卡') {
        // 银行卡账户
        if (this.bank_number == '') {
          mui.toast('银行卡账户不能为空')
          check = false
          return false
        }
        if (!yin.test(this.bank_number)) {
          mui.toast('银行卡格式错误')
          check = false
          return false
        }
        // 户主
        if (this.bank_bank == '') {
          mui.toast('户主不能为空')
          check = false
          return false
        }
        if (!nameReg.test(this.bank_bank)) {
          mui.toast('户主不能为空')
          check = false
          return false
        }
        // 余额
        if (this.bank_money == '') {
          mui.toast('余额不能为空')
          check = false
          return false
        }
        if (!nuber.test(this.bank_money)) {
          mui.toast('余额格式错误')
          check = false
          return false
        }
        // 开户行
        if (this.bank_person == '') {
          mui.toast('开户行不能为空')
          check = false
          return false
        }
        // 额度
        if (this.bank_limit == '') {
          mui.toast('额度不能为空')
          check = false
          return false
        }
        if (!nuber.test(this.bank_limit)) {
          mui.toast('额度格式错误')
          check = false
          return false
        }
        add = add + '&bank_limit=' + this.bank_limit
      }

      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/AddBank' + add).then(res => {
        if (res.data === '添加成功') {
          mui.alert('添加成功', function () {
            location.reload()
          })
        }
      }, error => {
        mui.alert('您无权录入', function () {
          then.$router.push({ name: 'index' })
        })
      })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
#persion{display: none}
.mui-radio label{width: 100%}
/*按钮*/
.input-radio{display: flex;}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 16px!important;}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 45px;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*按钮*/
.mui-radio{overflow: visible}
.mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
