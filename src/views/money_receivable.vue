<template>
    <div class="money_receivable">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">应收款汇总</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>应收款汇总</h2>
          <p>/Summary of receivables</p>
        </div>
        <div class="mui-img">
          <router-link :to="{name:'money_entry'}"><img :src="money_plus" alt="增加"></router-link>
        </div>
      </div>
      <!--类别-->
      <div class="mui-content app">
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>类别选择</label>
              <select v-model="fund_name">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in enterName" :value="item.fund_name">{{item.fund_name}}</option>
              </select>
            </div>
          <div class="mui-input-row">
            <label>项目名称</label>
            <select name="" v-model="customer_name">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in enterPorjet" :value="item.customer_id">{{item.customer_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>债务人</label>
            <input type="text" class="mui-input-clear" placeholder="请填入债务人">
          </div>
          <div class="mui-input-row">
            <label>总金额</label>
            <input type="text" class="mui-input-clear" placeholder="请填入总金额">
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
            <td><span :style="hid" @click="msg(item.fund_details_id)">{{item.customer_name}}</span></td>
            <td><span>{{item.fund_debtor}}</span></td>
            <td><span :style="money">￥{{item.fund_money}}</span></td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'money_receivable',
  data () {
    return {
      enterName: '', // 项目类别
      fund_name: '', // 项目类别
      enterPorjet: '', // 项目名称
      customer_name: '', // 项目名称
      listTable: '', // table
      money_plus: require('../image/plus.png'),
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
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?s=1').then(res => {
      this.listTable = res.data
    },error=>{
      var then  =this
      mui.alert('您无权访问',function () {
        then.$router.push({name:'index'})
      })
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
form{margin-bottom: 20px;}
.goOver{display: flex;}
.goOver label{flex: 0.8;}
.goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
.goOver input{flex: 1;}
table{width: 100%;text-align: left;font-size: 15px;}
table th{text-align: left;background-color: #DADADA;line-height: 32px;}
table tr{line-height: 29px;border-bottom: 1px solid #DADADA;}
select{font-size: 15px!important;}
</style>
