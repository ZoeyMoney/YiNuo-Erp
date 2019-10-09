<template>
    <div class="running_details">
      <!--返回-->
<!--      :to="{name:'running_money'}"-->
      <header class="mui-bar mui-bar-nav">
        <router-link to="" @click.native="hrefGo" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金流水详情</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--form-->
      <div class="mui-content">
        <form class="mui-input-group"  ref="edit">
          <div class="mui-input-row">
            <label>户主</label>
            <input type="text" class="mui-input-clear" :value="bank_person" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>开户行</label>
            <input type="text" class="mui-input-clear" :value="bank_bank" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>卡号类型</label>
            <input type="text" class="mui-input-clear" :value="bank_type" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>交易金额</label>
            <input type="text" class="mui-input-clear" :value="bank_deal_money" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>余额</label>
            <input type="text" class="mui-input-clear" :value="balance" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>交易时间</label>
            <input type="text" class="mui-input-clear" :value="dates" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>项目名称</label>
            <input type="text" class="mui-input-clear" :value="bank_projet" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>期款</label>
            <input type="text" class="mui-input-clear" :value="fund_details_batch" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>款项类别</label>
            <input type="text" class="mui-input-clear" :value="fund_name_type" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>款项详情</label>
            <input type="text" class="mui-input-clear" :value="fund_names" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>款项详细</label>
            <input type="text" class="mui-input-clear" :value="fund_name" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>相关人</label>
            <input type="text" class="mui-input-clear" :value="fund_person" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" :value="text" placeholder="无" :disabled="disabled">
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="dele" v-show="exit_money" >删除</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="exitMoney" v-show="exit_money">退款</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="editMessage" v-show="exit_money">修改</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="preServe" v-show="liu">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
import { loadavg } from 'os'
import { log } from 'util'
export default {
  name: 'running_details',
  data () {
    return {
      fund_details_id: '',
      list: '',
      bank_person: '', // 户主
      bank_bank: '', // 开户行
      bank_deal_money: '', // 交易金额
      dates: '', // 交易金额
      fund_name: '', // 信用卡
      bank_projet: '', // 项目名称
      fund_details_batch: '', // 期款
      fund_name_type: '', // 款项类别
      fund_names: '', // 款项详情
      fund_type: '', // 款项详细
      balance: '', // 余额
      fund_person: '', // 债权人
      fund_debtor: '', // 相关人
      exit_money: true, // 退款
      liu:false, //保存
      disabled:true,
      text: '',// 备注
      bank_type:'',//卡号类型
      quan:''
    }
  },
  methods: {
    dele () {
      var then = this
      var allfund_detail_id = ''
      // 删除转账
      if (this.list.bank_deal_id > 0) {
        allfund_detail_id = this.list.bank_deal_id
        mui.confirm('是否删除', function (e) {
          if (e.index == 1) {
            then.axios.get('/fund/Deleter_flowing' + '?bank_detail_id=' + allfund_detail_id).then(res => {
              mui.alert(res.data, function () {
                then.$router.push({ path: 'running_money' })
              })
            })
          } else {
            mui.alert('取消成功')
          }
        })
        //  删除收入支出
      } else if (this.list.fund_detail_transaction_id > 0) {
        allfund_detail_id = this.list.fund_detail_transaction_id
        mui.confirm('是否删除', function (e) {
          if (e.index == 1) {
            then.axios.get('/fund/Deleter_flowing' + '?fund_detail_id=' + allfund_detail_id).then(res => {
              mui.alert(res.data, function () {
                then.$router.push({ path: 'running_money' })
              })
            })
          } else {
            mui.alert('取消成功')
          }
        })
      }
    },
    hrefGo(){
      if (this.quan == 'Project_Reconciliation'){
        this.$router.push({name:'Project_Reconciliation'})
      }else if (this.quan == undefined){
        this.$router.push({name:'running_money'})
      }
    },
    //  退款
    exitMoney () {
      this.$router.push({ name: 'exit_money' })
    },
    //编辑
    editMessage(){
      console.log(this.$refs.edit);
      console.log(this.$refs.edit.getElementsByTagName('input'));
      this.disabled=false
      this.exit_money=false
      this.liu=!this.liu
    },
    preServe(){
      console.log('1');
      
    }
      },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    var reg = /^(\d{4})\d+(\d{4})$/ // 银行卡
    this.fund_details_id = id
    this.list = JSON.parse(localStorage.msg)
    this.bank_person = this.list.bank_person
    this.bank_bank = this.list.bank_bank
    if (this.list.bank_deal_money === 0) {
      this.bank_deal_money = this.list.fund_detail_transaction_money
    } else if (this.list.fund_detail_transaction_money === 0) {
      this.bank_deal_money = this.list.bank_deal_money
    }
    console.log(JSON.parse(localStorage.msg))
    this.dates = this.list.dates
    /* if (this.list.bank_number != undefined) {
       this.bank_number = this.list.bank_number.replace(reg, '$1 **** **** $2')
     }*/
    this.bank_projet = this.list.customer_name
    this.fund_details_batch = this.list.fund_details_batch
    this.fund_name = this.list.fund_name
    this.fund_name_type = this.list.fund_name_type
    this.fund_names = this.list.fund_names
    this.fund_type = this.list.fund_details_text
    this.balance = this.list.balance
    this.fund_person = this.list.fund_person
    this.fund_debtor = this.list.fund_debtor
    this.text = this.list.fund_details_text
    if (this.list.fund_name === '' || this.list.fund_name === undefined || this.list.fund_name === '手续费') {
      this.exit_money = false
    }
    if (this.fund_name_type !== '') {
      this.exit_money = true
    }
    this.quan = window.quan
  },
}
</script>

<style scoped>
  .form-btn button{width: 24% !important;margin: 16px}
  .form-btn{background-color: #EFEFF4!important;margin-top: 0;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}

</style>
