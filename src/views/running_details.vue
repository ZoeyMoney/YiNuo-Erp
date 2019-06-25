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
        <form class="mui-input-group" v-for="item in list">
          <div class="mui-input-row">
            <label>户主</label>
            <input type="text" class="mui-input-clear" :value="item.bank_person">
          </div>
          <div class="mui-input-row">
            <label>开户行</label>
            <input type="text" class="mui-input-clear" :value="item.bank_bank">
          </div>
          <div class="mui-input-row">
            <label>交易金额</label>
            <input type="text" class="mui-input-clear" :value="item.bank_deal_money">
          </div>
          <div class="mui-input-row">
            <label>交易时间</label>
            <input type="text" class="mui-input-clear" :value="item.bank_deal_date | data">
          </div>
          <div class="mui-input-row">
            <label>卡号</label>
            <input type="text" class="mui-input-clear" :value="item.bank_number">
          </div>
          <div class="mui-input-row">
            <label>开户行</label>
            <input type="text" class="mui-input-clear" :value="item.bank_type">
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'running_details',
    data(){
      return{
        fund_details_id:'',
        list:'',
      }
    },
    created () {

      var loc = location.href
      var n1 = loc.length// 地址的总长度
      var n2 = loc.indexOf('=')// 取得=号的位置
      var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
      this.fund_details_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail?bank_deal_id='+id).then(res => {
        this.list = res.data.list_moey
      })
    }
  }
</script>

<style scoped>

</style>
