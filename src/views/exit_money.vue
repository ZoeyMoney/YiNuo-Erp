<template>
    <div class="exit_money">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'running_money'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金流水退款</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--form-->
      <div class="mui-content">
        <form class="mui-input-group">
          <data-value v-model="dataValue1"></data-value>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" class="mui-input-clear" v-model="fund_detail_transaction_money" placeholder="无">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" v-model="fund_text" placeholder="无">
          </div>
        </form>
        <div class="mui-input-row btn-form-grey">
          <el-button type="info" @click="add">退款</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'exit_money',
    data(){
      return{
        imgUrl_loading:false,
        list:'',
        dataValue1:new Date(),
        fund_detail_transaction_money:'',
        fund_text:'',
        fund_detail_transaction_id:''
      }
    },
    created () {
      this.list = JSON.parse(localStorage.msg)
      if (this.list.fund_detail_transaction_money < 0) {
        var a  = this.list.fund_detail_transaction_money
        this.fund_detail_transaction_money = Math.abs(a)
      }else{
        this.fund_detail_transaction_money = this.list.fund_detail_transaction_money
      }
      this.fund_text = this.list.fund_text
      this.fund_detail_transaction_id = this.list.fund_detail_transaction_id
    },
    methods:{
      add(){
        var then = this
        var check = true
        var dt = new Date(this.dataValue1)
        var y = dt.getFullYear()
        var m = dt.getMonth() + 1
        var d = dt.getDate()
        var t = dt.getHours();
        var MM =dt.getMinutes();
        var s = dt.getSeconds();
        var dd  = `${y}-${m}-${d} ${t}:${MM}:${s}`
        var number = ''
        if (this.list.fund_detail_transaction_money > 0) {
          number+=this.fund_detail_transaction_money*(-1)
          if (this.fund_detail_transaction_money > this.list.fund_detail_transaction_money) {
            mui.toast('退款金额不能大于交易金额')
            check = false
            return false
          }
        }else{
          number+=Math.abs(this.fund_detail_transaction_money)
          if (this.fund_detail_transaction_money < this.list.fund_detail_transaction_money) {
            mui.toast('退款金额不能大于交易金额')
            check = false
            return false
          }
        }
        this.imgUrl_loading = true
        if (this.fund_detail_transaction_money !== this.list.fund_detail_transaction_money || this.fund_text !== this.list.fund_text) {
          this.axios.get('/fund/money_refund'+'?date='+dd+'&money='+number+'&fund_detail_transaction_id='+this.fund_detail_transaction_id+'&text='+this.fund_text).then(res=>{
            if (res.status === 200) {
              this.imgUrl_loading = false
              mui.alert(res.data,function () {
                then.$router.push({name:'running_money'})
              })
            }
          })
        }else{
          mui.alert('您什么都未修改！')
          this.imgUrl_loading = false
        }
      }
    }
  }
</script>

<style scoped>
.btn-form-grey{text-align: center;margin-top: 18px}
  /deep/.el-button--info{width: 156px}
</style>
