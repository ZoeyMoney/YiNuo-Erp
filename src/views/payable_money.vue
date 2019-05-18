<template>
  <div class="payable_money">
    <!--头部-->
    <header class="mui-bar mui-bar-nav header-top">
      <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">应付款汇总</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <!--客户录入-->
    <div class="mui-content one-img">
      <div class="customer">
        <h2>应付款汇总</h2>
        <p>/Summary of payable</p>
      </div>
      <div class="mui-img">
        <router-link :to="{name:'accounts_payable'}"><img :src="money_plus" alt="增加"></router-link>
      </div>
    </div>
    <!--form-->
    <div class="mui-content app">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>类别选择</label>
          <select>
            <option value="" selected="selected">请选择</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>项目名称</label>
          <select>
            <option value="" selected="selected">请选择</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>债务人</label>
          <input type="text" class="mui-input-clear" placeholder="请填写债务人">
        </div>
        <div class="mui-input-row">
          <label>总金额</label>
          <input type="text" class="mui-input-clear" placeholder="￥900,000">
        </div>
        <div class="mui-input-row goOver">
          <label>起始时间</label>
          <input type="text" class="mui-input-clear" placeholder="2018.2-12">
          <span class="go-span"></span>
          <input type="text" class="mui-input-clear" placeholder="2018.2-12">
        </div>
      </form>
      <!--table-->
      <table border="0">
        <tr>
          <th :style="lefta">日期</th>
          <th>类别</th>
          <th>项目</th>
          <th>债务人</th>
          <th>金额</th>
        </tr>
        <tr v-for="item in listTable">
          <td><span :style="paLft">{{item.fund_date | data}}</span></td>
          <td><span>{{item.fund_name}}</span></td>
          <td><span :style="hid" @click="msg(item.customer_id)">{{item.customer_name}}</span></td>
          <td><span>{{item.fund_debtor}}</span></td>
          <td><span :style="money">￥{{item.fund_money}}</span></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payable_money',
  data () {
    return {
      money_plus: require('../image/plus.png'),
      listTable: '', // table

      paLft: {
        display: 'block',
        padding: '0 10px'
      },
      hid: {
        display: 'block',
        width: '94px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      money: {
        display: 'block',
        width: '72px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      lefta: {
        paddingLeft: '10px'
      }
    }
  },
  created () {
    // 项目类别
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/selectEnterFundName').then(res => {
      this.enterName = res.data
    })
    //  项目名称
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer').then(res => {
      this.enterPorjet = res.data
    })
    /* table */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?s=-1').then(res => {
      this.listTable = res.data
    })
  },
  methods: {
    msg (id) {
      this.$router.push({ path: 'account_translation', query: { id: id } })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
.customer{flex: 1;}
.one-img{display: flex;}
.mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
.mui-img a img{width: 100%;}
.header-top{position: absolute;}
form{margin-bottom: 20px;}
select{font-size: 15px!important;}
.goOver{display: flex;}
.goOver label{flex: 0.8;}
.goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
.goOver input{flex: 1;}
/*table*/
table{width: 100%;text-align: left;font-size: 15px;}
table tr {line-height: 29px;border-bottom: 1px solid #DADADA}
table th{text-align: left;background-color: #DADADA;line-height: 32px;}
</style>
