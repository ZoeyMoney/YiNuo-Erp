<template>
    <div class="money_receivable">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">应收款汇总</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
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
              <select name="" v-model="fund_nameo" @change="fund_namesa(fund_nameo)">
                <option value="">请选择</option>
                <option v-for="item in list_fund_name_type" :value="item.fund_name_type">{{item.fund_name_type}}</option>
              </select>
            </div>
          <div class="mui-input-row">
            <label>类别名称</label>
            <select name="" v-model="list_fund_namea" @change="list_fund_nameas(list_fund_namea)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_names" :value="item.fund_names">{{item.fund_names}}</option>
            </select>
          </div>
          <div class="mui-input-row" v-if="list_slime_all">
            <label>类别详情</label>
            <select name="" v-model="slim" @change="list_slim_name(slim)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_name" :value="item.fund_name">{{item.fund_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>工地名称</label>
            <select name="" v-model="customer_name" @change="customer_name_list(customer_name)">
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
            <th>相关人</th>
            <th>金额</th>
          </tr>
          <tr v-for="item in listTable" @click="msg(item.fund_details_id)" :class="{clasred:item.dates <= datesdm}">
            <td>
              <span v-if="item.dates" :style="paLft">{{item.dates}}</span>
              <span v-if="item.dates===undefined" :style="paLft">待定</span>
            </td>
            <td>
              <span v-if="item.fund_details_batch==='99'" :style="fund_name">质保金</span>
              <span v-else-if="item.fund_name" :style="fund_name">{{item.fund_name}}</span>
              <span v-else-if="item.fund_name===undefined" :style="fund_name">无</span>
            </td>
            <td>
              <span :style="hid" v-if="item.customer_name">{{item.customer_name}}</span>
              <span v-if="item.customer_name===undefined">无</span>
            </td>
            <td><span :style="person">{{item.fund_person}}</span></td>
            <td><span :style="money" :class="{clasyews:item.fund_details_type =='1'}">￥{{item.fund_details_money}}</span></td>
          </tr>
        </table>
      </div>
      <div class="footer">
        <div class="box">
          总金额:￥{{allMoney | negative}}
        </div>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'money_receivable',
  data () {
    return {
      imgUrl_loading:false,
      fund_nameso: '',
      fund_nameo: '', // 项目类别
      datesdm:'',
      fund_name: '',
      list_slime_all:true,
      customer_name: '', // 项目名称
      fund_names: '',
      listTable: '', // table
      customer_name_list_one: '',
      date_list_two: '',
      deteList: '',
      list_fund_names: '', // 类别选择
      list_fund_name: '',
      list_fund_namea: '',
      date_list: '',
      list_customer_name: '',
      list_fund_name_type:'',
      allMoney:'',
      slim:'',
      dateB: '',
      list_fund_slim_id:'',
      money_plus: require('../image/plus.png'),
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
        width: '67px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      lefta: {
        paddingLeft: '10px'
      },
      boder:{
        border:'1px solid #565656',
        display:'block',
        width:'63px',

      },
      person:{
        display:'block',
        width:'62px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis'
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
    this.imgUrl_loading = true
    /* table */
    this.axios.get(url.moneyReceivable+'?fund_type=0').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.package(res)
        var allMoney = 0
        for (var index in this.listTable) {
          allMoney+=this.listTable[index].fund_details_money
        }
        this.allMoney = Math.floor(allMoney * 100) /100
      }
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
    /*data*/
    var data = new Date()
    var dt = new Date(data)
    var y = dt.getFullYear()
    var mm = dt.getMonth() + 1
    var d = dt.getDate()
    if (mm < 10) {
      mm = '0'+mm
    }
    if (d < 10) {
      d = '0'+d
    }
    var dd  = y+'-'+mm+'-'+d
    this.datesdm = dd
  },
  methods: {
    msg (id) {
      var account_translation = {}
      for (var index in this.listTable) {
        if (id === this.listTable[index].fund_details_id) {
          account_translation = this.listTable[index]
        }
      }
      localStorage.account_translation = JSON.stringify(account_translation)
      this.$router.push({ path: 'account_translation', query: { id: account_translation } })
    },
    //封装model
    package(res){
      this.listTable = res.data.list_fund
      this.list_fund_name_type = res.data.list_fund_name_type
      this.list_fund_names = res.data.list_fund_names
      this.list_customer_name = res.data.list_customer_name
      this.list_fund_name = res.data.list_fund_name
    },
    // 类别选择
    fund_namesa (id) {
      this.fund_nameso = id
      this.axios.get(url.moneyReceivable+'?fund_type=0&fund_name_type=' + this.fund_nameso).then(res => {
        this.package(res)
        if (this.fund_nameo === '个人') {
          this.list_slime_all = false
        }else if (this.fund_nameo === '公司') {
          this.list_slime_all = true
        }
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    // 类别名称
    list_fund_nameas (id) {
      for (var index in this.list_fund_names) {
        if (this.list_fund_names[index].fund_names === id) {
          this.fund_name = this.list_fund_names[index].fund_name
        }
      }
      this.axios.get(url.moneyReceivable+'?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + id).then(res => {
        this.package(res)
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    // 类别详细
    list_slim_name(id){
      this.list_fund_slim_id = id
      this.axios.get(url.moneyReceivable+'?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + this.list_fund_namea + '&fund_name='+id).then(res=>{
        this.package(res)
      })
    },
    //  项目名称
    customer_name_list (id) {
      this.customer_name_list_one = id
      this.axios.get(url.moneyReceivable+'?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_name=' + this.fund_name +'&fund_names=' + this.list_fund_namea + '&Customer_name=' + id).then(res => {
        this.package(res)
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
      this.axios.get(url.moneyReceivable+'?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + this.list_fund_namea + '&fund_name=' +this.fund_name  + '&Customer_name=' + this.customer_name_list_one + '&dateA=' + id + '&dateB=' + this.dateB).then(res => {
        this.package(res)
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    date_list_two_change (id) {
      this.dateB = id
      this.axios.get(url.moneyReceivable+'?fund_type=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + this.list_fund_namea  + '&fund_name=' + this.fund_name + '&Customer_name=' + this.customer_name_list_one + '&dateA=' + this.deteList + '&dateB=' + id).then(res => {
        this.package(res)
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
.customer{flex: 1;}
.one-img{display: flex;}
.mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
  .clasred{color: #007aff}
  .clasyews{color: red}
.mui-img a img{width: 100%;}
form{margin-bottom: 20px;}
.goOver{display: flex;}
.goOver label{flex: 0.8;}
.goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
.goOver input{flex: 1;}
table{width: 100%;text-align: left;font-size: 13px;display: block;overflow: auto}
table th{text-align: left;background-color: #DADADA;line-height: 32px;}
table tr{line-height: 29px;border-bottom: 1px solid #DADADA;white-space: nowrap}
select{font-size: 15px!important;}
  /*底部*/
  .footer{position: fixed;bottom: 0;background-color: #acacac;width: 100%;line-height: 29px;font-size: 15px;text-align: right;padding-right: 30px}
</style>
