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
          <select v-model="fund_nameo" @change="fund_namesa(fund_nameo)">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in list_fund_names" :value="item.fund_names">{{item.fund_names}}</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>类别详情</label>
          <select name="" v-model="list_fund_namea" @change="list_fund_nameas(list_fund_namea)">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in list_fund_name" :value="item.fund_name">{{item.fund_name}}</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>项目名称</label>
          <select v-model="customer_name" @change="customer_name_list(customer_name)">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in list_customer_name" :value="item.customer_name">{{item.customer_name}}</option>
          </select>
        </div>
        <div class="mui-input-row goOver">
          <label>起始时间</label>
          <input type="date" class="mui-input-clear" v-model="date_list" @change="dateList(date_list)">
          <span class="go-span"></span>
          <input type="date" class="mui-input-clear" v-model="date_list_two" @change="date_list_two_change(date_list_two)">
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
          <td><span :style="paLft">{{item.fund_details_date | data}}</span></td>
          <td><span :style="fund_name">{{item.fund_name}}</span></td>
          <td><span :style="hid" @click="msg(item.fund_details_id)">{{item.customer_name}}</span></td>
          <td><span>{{item.fund_debtor}}</span></td>
          <td><span :style="money">￥{{item.fund_details_money}}</span></td>
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
      fund_nameo: '', // 类别选择
      customer_name: '',
      list_fund_names: '', // table
      money_plus: require('../image/plus.png'),
      listTable: '', // table
      list_names: '', // 类别选择
      list_fund_namea: '', // 类别详情
      list_fund_name: '',
      list_customer_name: '',
      date_list: '',
      date_list_two: '',

      paLft: {
        display: 'block',
        padding: '0 10px',
        whiteSpace:'nowrap'
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
      },
      fund_name:{
        display:'block',
        width:'74px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
      }
    }
  },
  created () {
    /* table */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=0').then(res => {
      this.listTable = res.data.list_fund
      this.list_fund_names = res.data.list_fund_names
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
  },
  methods: {
    // 类别选择
    fund_namesa (id) {
      this.fund_nameso = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=0&fund_names=' + this.fund_nameso).then(res => {
        this.listTable = res.data.list_fund
        this.list_fund_name = res.data.list_fund_name
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    // 类别详情
    list_fund_nameas (id) {
      this.fund_name = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1&fund_names=' + this.fund_nameso + '&fund_name=' + id).then(res => {
        this.listTable = res.data.list_fund
        this.list_fund_name = res.data.list_fund_name
        this.list_customer_name = res.data.list_customer_name
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    //  项目名称
    customer_name_list (id) {
      this.customer_name_list_one = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1&fund_names=' + this.fund_nameso + '&fund_name=' + this.fund_name + '&Customer_name=' + id).then(res => {
        this.listTable = res.data.list_fund
        this.list_fund_name = res.data.list_fund_name
        this.list_customer_name = res.data.list_customer_name
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    //  时间
    dateList (id) {
      this.deteList = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1&fund_names=' + this.fund_nameso + '&fund_name=' + this.fund_name + '&customer_name=' + this.customer_name_list_one + '&dateA=' + id + '&dateB=' + this.dateB).then(res => {
        this.listTable = res.data.list_fund
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    date_list_two_change (id) {
      this.dateB = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?fund_type=1&fund_names=' + this.fund_nameso + '&fund_name=' + this.fund_name + '&customer_name=' + this.customer_name_list_one + '&dateA=' + this.deteList + '&dateB=' + id).then(res => {
        this.listTable = res.data.list_fund
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    msg (id) {
      this.$router.push({ path: 'payable_entry', query: { id: id } })
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
table th{text-align: left;background-color: #DADADA;line-height: 32px;white-space: nowrap}
</style>
