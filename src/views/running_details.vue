<template>
    <div class="running_details">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'running_money'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金流水详情</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--form-->
      <div class="mui-content">
        <form class="mui-input-group">
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
            <label>交易时间</label>
            <input type="text" class="mui-input-clear" :value="bank_deal_date | tosDate" placeholder="无" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>卡号</label>
            <input type="text" class="mui-input-clear" :value="bank_number" placeholder="无" disabled="disabled">
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
            <input type="text" class="mui-input-clear" :value="fund_type" placeholder="无" disabled="disabled">
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="dele">删除</button>
        </div>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'running_details',
    data(){
      return{
        fund_details_id:'',
        list:'',
        bank_person:'',//户主
        bank_bank:'', //开户行
        bank_deal_money:'',//交易金额
        bank_deal_date:'',  //交易金额
        bank_number:'', //卡号
        bank_type:'', //信用卡
        bank_projet:'',//项目名称
        fund_details_batch:'',//期款
        fund_name_type:'',//款项类别
        fund_names:'',  //款项详情
        fund_type:'',//款项详细
      }
    },
    created () {
      var loc = location.href
      var n1 = loc.length// 地址的总长度
      var n2 = loc.indexOf('=')// 取得=号的位置
      var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
      var reg = /^(\d{4})\d+(\d{4})$/;  //银行卡
      this.fund_details_id = id
      this.list = JSON.parse(localStorage.msg)
      this.bank_person = this.list.bank_person
      this.bank_bank = this.list.bank_bank
      if (this.list.bank_deal_money === 0) {
        this.bank_deal_money = this.list.fund_detail_transaction_money
      }else if (this.list.fund_detail_transaction_money === 0) {
        this.bank_deal_money = this.list.bank_deal_money
      }
      console.log(JSON.parse(localStorage.msg))
      this.bank_deal_date = this.list.fund_detail_transaction_date
      this.bank_number = this.list.bank_number.replace(reg, "$1 **** **** $2")
      this.bank_projet = this.list.customer_name
      this.fund_details_batch = this.list.fund_details_batch
      this.bank_type = this.list.bank_type
      this.fund_name_type = this.list.fund_name_type
      this.fund_names = this.list.fund_names
      this.fund_type = this.list.fund_type
    },
    methods:{
      dele(){
        var then = this
        var allfund_detail_id = ''
        if (this.list.bank_deal_id > 0) {
          allfund_detail_id = this.list.bank_deal_id
          this.axios.get(url.ringNingDelect+'?bank_detail_id='+allfund_detail_id).then(res=>{
            mui.alert(res.data,function () {
              then.$router.push({path:'running_money'})
            })
          })
        }else if (this.list.fund_detail_transaction_id > 0) {
          allfund_detail_id = this.list.fund_detail_transaction_id
          this.axios.get(url.ringNingDelect+'?fund_detail_id='+allfund_detail_id).then(res=>{
            mui.alert(res.data,function () {
              then.$router.push({path:'running_money'})
            })
          })
        }

        console.log(allfund_detail_id)
       /* this.axios.get(url.ringNingDelect+'?fund_detail_id='+allfund_detail_id).then(res=>{
          mui.alert(res.data,function () {
            then.$router.push({path:'running_money'})
          })
        })*/
      }
    }
  }
</script>

<style scoped>
  .form-btn button{width: 28% !important;margin: 16px}
  .form-btn{background-color: #EFEFF4!important;margin-top: 0;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}

</style>
