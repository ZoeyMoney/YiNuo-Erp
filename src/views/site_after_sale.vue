<template>
    <div class="site_after_sale">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'site_statistics'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地详情</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>工地详情</h2>
          <p>/site_after_sale</p>
        </div>
      </div>
      <!--form-->
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group" v-for="item in projet">
          <div class="mui-input-row">
            <label>工地名称</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_name" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>联系人</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_linkman" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>联系方式</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_connect" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>设计师</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_stylist" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>装修面积</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_Decorate" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>推荐人</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_referrer" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>项目预算</label>
            <input type="text" class="mui-input-clear" v-model="item.customer_budget" placeholder="input" disabled="disabled">
          </div>
          <div class="mui-input-row all-row">
            <label>所属类型</label>
            <input type="text" class="mui-input-clear row-input" v-model="item.Customer_type" disabled="disabled">
            <div class="mui-input-row mui-radio mui-left mui-chech" name="">
              <label>家装</label>
              <input name="Customer_form" type="radio" value="家装" checked="a" disabled="disabled">
            </div>
            <div class="mui-input-row mui-radio mui-left mui-heck">
              <label>工装</label>
              <input name="Customer_form" type="radio" value="工装" checked="b" disabled="disabled">
            </div>
          </div>
          <div class="mui-input-row all-row textreap">
            <label>客户需求</label>
            <label>{{item.customer_demand}}</label>
          </div>
        </form>
        <!--第二个form-->
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>项目经理</label>
            <input type="text" class="mui-input-clear" v-model="projetManager" placeholder="请输入项目经理">
          </div>
          <div class="mui-input-row">
            <label>工程监理</label>
            <select name="">
              <option value="">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>装修标准</label>
            <select name="">
              <option value="">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>项目备注</label>
            <input type="text" class="mui-input-clear" v-model="projetText" placeholder="备注">
          </div>
        </form>
        <!--第三个form-->
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>合同日期</label>
            <input type="date" class="mui-input-clear" v-model="contractDate" placeholder="input">
          </div>
          <div class="mui-input-row goOver">
            <label>施工日期</label>
            <input type="date" class="mui-input-clear" v-model="constructionOne">
            <span class="go-span"></span>
            <input type="date" class="mui-input-clear" v-model="constructionTwo">
          </div>
        </form>
        <!--第4个-->
        <form class="mui-input-group">
          <div class="contract">
            <div class="mui-input-row all-contract">
              <div>合同</div>
            </div>
            <div class="mui-input-row all-contract">
              <div>设计费</div>
            </div>
          </div>
        </form>
        <!--合同、设计费-->
        <form class="mui-input-group ">
          <table class="table-all">
            <tr>
              <td><span>原价</span></td>
              <td><span>￥{{contractMoney | MoneyFormat}}</span></td>
              <td><span>￥{{designMoney | MoneyFormat}}</span></td>
            </tr>
            <tr>
              <td><span>合同价</span></td>
              <td><span>￥{{contractMoney | MoneyFormat}}</span></td>
              <td><span>￥{{designMoney | MoneyFormat}}</span></td>
            </tr>
            <tr>
              <td><span>优惠率</span></td>
              <td><span>￥{{contractMoney | MoneyFormat}}</span></td>
              <td><span>￥{{designMoney | MoneyFormat}}</span></td>
            </tr>
          </table>
        </form>
        <!--table-->
        <form class="mui-input-group">
          <table class="all-data">
            <tr>
              <th>日期</th>
              <th>金额</th>
              <th>类别</th>
              <th>批次</th>
            </tr>
            <tr v-for="item in list_table_all">
              <td><span>{{item.data | data}}</span></td>
              <td><span>￥{{item.money}}</span></td>
              <td><span>{{item.text}}</span></td>
              <td><span>{{item.fund}}</span></td>
            </tr>
          </table>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="construction">施工进度</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="log">工地日志</button>
          <button type="button" class="mui-btn mui-btn-blue" @click="Inspection">工地巡检</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'site_after_sale',
  data () {
    return {
      projet: '', // 项目
      projetManager: '', // 项目经理
      projetText: '', // 项目备注
      contractDate: '', // 合同日期
      constructionOne: '', // 开始施工日期
      constructionTwo: '', // 结束施工日期
      contractMoney: '2000000', // 原价合同
      designMoney: '2000000', // 原价设计费
      list_table_all: [
        { data: new Date(), money: '300000', text: '设计费', fund: '全额款' },
        { data: new Date(), money: '300000', text: '设计费', fund: '全额款' },
        { data: new Date(), money: '300000', text: '设计费', fund: '全额款' },
        { data: new Date(), money: '300000', text: '设计费', fund: '全额款' }
      ]
    }
  },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.customer_id = id
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer?Customer=' + id).then(res => {
      this.projet = res.data
      if (this.projet.Customer_form == '家装') {
        this.a = true
        this.b = true
      } else {
        this.a = false
        this.b = true
      }
    })
  },
  methods: {
    // 施工进度
    construction () {},
    // 工地日志
    log () {
      var customer_name = this.projet[0].customer_name
      var customer_demand = this.projet[0].customer_demand
      this.$router.push({ path: 'site_log', query: { customer_name: customer_name, customer_demand: customer_demand } })
    },
    // 工地巡检
    Inspection () { this.$router.push({ name: 'site_Inspection' }) }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .app{margin-bottom: 0}
  .mui-input-group{background-color: transparent}
  /*form与form之间的差距*/
  .form-pab{margin-bottom: 15px;}
  .all-row{display: flex;}
  .all-row input{font-size: 14px!important;}
  .all-row label:nth-child(1){flex: 1}
  .all-row label:nth-child(2){flex:4;overflow: auto}
  .textreap{height: 80px!important;}
  .textreap label:nth-child(1){line-height: 58px}
  /*form2-label*/
  #app{padding-top: 0;}
  .row-flex label{width: 50%;}
  .row-flex input{width: 50%!important;font-size: 12px;}
  .flex-mm div{width: 50%;}
  /*记录*/
  .jin{display: flex;line-height: 40px;}
  .jin-date{display: flex;width: 100%}
  .gen{flex: 1;text-align: center}
  .jin-date{flex: 4}
  .jin-date p{padding-left: 16px;flex: 1;}
  .jin-date p:nth-child(2){text-align: right;padding-right: 16px;}
  .row-textarea{height: 100px!important;}
  .row-textarea textarea{padding-left: 13px!important;font-size: 14px;}
  .box-h4 h4{line-height: 40px;padding-left: 14px;border-bottom: 1px solid #DADADA;}
  .row-input{flex: 1;padding-left: 21px!important;}
  .mui-chech{white-space: normal}
  .mui-chech label{width: 21%;}
  .mui-heck{position: relative;right: 9px;}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  /*日期*/
  .goOver{display: flex;}
  .goOver label{flex: 0.8;}
  .goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
  .goOver input{flex: 1;}
  /*form尺量*/
  .row-box{display: flex;}
  .row-box div label{width: 50%}
  .row-box div input{width: 50%;padding-left: 14px;}
  .row-box .mui-input-row{width: 50%}
  .row-box:nth-last-child(1) .mui-input-row:nth-child(2) label:nth-child(1){width: 40%}
  .item-time label:nth-child(2){padding-left: 0;}
  /*合同、设计费*/
  .contract{display: flex;font-size: 15px}
  .all-contract{line-height: 42px}
  .all-contract:nth-child(1){flex: 1;text-align: right;padding-right: 72px;}
  .all-contract:nth-child(2){flex: 1;}
  .all-contract:nth-child(2) div{padding-left: 23px}
  /*table*/
  table{font-size: 15px;width: 100%}
  .table-all tr td:nth-child(1){width: 30%;padding: 5px 19px}
  /*all-data*/
  .all-data tr th{line-height: 35px;background: #dadada}
  .all-data tr td{text-align: center;width: 20%}
  /*按钮*/
  .form-btn button{width: 29%!important;margin: 0 3px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
