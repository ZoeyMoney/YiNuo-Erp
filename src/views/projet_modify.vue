<template>
    <div class="projet_modify">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_profit'}" href="financial_management.html" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地利润控制表</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>工地利润控制表</h2>
          <p>/Customer input</p>
        </div>
      </div>
      <!--center-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>工地名称</label>
            <input type="text" class="mui-input-clear" placeholder="无" v-model="customer_name" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>预计利润</label>
            <label :class="{money_green:pre_profit>0,money_red:pre_profit<0}">{{pre_profit}}</label>
          </div>
          <div class="mui-input-row">
            <label>预计百分比</label>
            <label :style="lefzero">{{pre_profit_proportion}}%</label>
          </div>
        </form>
        <p class="text-p">支出：</p>
        <form class="mui-input-group">
          <ul class="mui-table-view views">
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="#">
                <label>已支出</label>
                <label :class="{money_green:already_out>0,money_red:already_out<0}">{{already_out | negative}}</label>
              </a>
              <div class="mui-collapse-content" v-for="item in list_already_out">
                <p><span class="item-data-money">时间：</span>{{item.fund_detail_transaction_date | data}}</p>
                <p :class="{money_green:item.fund_detail_transaction_money>0,money_red:item.fund_detail_transaction_money<0}"><span class="item-data-money">交易金额：</span>{{item.fund_detail_transaction_money | negative}}</p>
                <p v-if="item.fund_person !==0"><span class="item-data-money">收款人：</span>{{item.fund_person}}</p>
                <p><span class="item-data-money">相关人：</span>{{item.fund_debtor}}</p>
                <p><span class="item-data-money">款项名称：</span>{{item.fund_name}}</p>
                <p><span class="item-data-money">款项备注：</span>{{item.fund_details_text}}</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="#">
                <label>预支出</label>
                <label :class="{money_green:pre_out>0,money_red:pre_out<0}">{{pre_out | negative}}</label>
              </a>
              <div class="mui-collapse-content" v-for="item in list_pre_out">
                <p><span class="item-data-money">时间：</span>{{item.fund_details_date | data}}</p>
                <p :class="{money_green:item.fund_details_money>0,money_red:item.fund_details_money<0}"><span class="item-data-money">交易金额：</span>{{item.fund_details_money | negative}}</p>
                <p v-if="item.fund_person !==0"><span class="item-data-money">收款人：</span>{{item.fund_person}}</p>
                <p><span class="item-data-money">相关人：</span>{{item.fund_debtor}}</p>
                <p><span class="item-data-money">款项名称：</span>{{item.fund_name}}</p>
                <p><span class="item-data-money">款项备注：</span>{{item.fund_details_text}}</p>
              </div>
            </li>
          </ul>
          <div class="mui-input-row">
            <label>总支出</label>
            <label :class="{money_green:all_out>0,money_red:all_out<0}">{{all_out | negative}}</label>
          </div>
        </form>
        <p class="text-p">收入：</p>
        <form class="mui-input-group">
          <ul class="mui-table-view views">
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="#">
                <label>已收入</label>
                <label :class="{money_green:already_enter>0,money_red:already_enter<0}">{{already_enter}}</label>
              </a>
              <div class="mui-collapse-content" v-for="item in list_already_enter">
                <p><span class="item-data-money">时间：</span>{{item.fund_detail_transaction_date | data}}</p>
                <p :class="{money_green:item.fund_detail_transaction_money>0,money_red:item.fund_detail_transaction_money<0}"><span class="item-data-money">交易金额：</span>{{item.fund_detail_transaction_money | negative}}</p>
                <p v-if="item.fund_person !==0"><span class="item-data-money">收款人：</span>{{item.fund_person}}</p>
                <p><span class="item-data-money">相关人：</span>{{item.fund_debtor}}</p>
                <p><span class="item-data-money">款项名称：</span>{{item.fund_name}}</p>
                <p><span class="item-data-money">款项备注：</span>{{item.fund_details_text}}</p>
              </div>
            </li>
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="#">
                <label>预收入</label>
                <label :class="{money_green:pre_enter>0,money_red:pre_enter<0}">{{pre_enter}}</label>
              </a>
              <div class="mui-collapse-content" v-for="item in list_pre_enter">
                <p><span class="item-data-money">时间：</span>{{item.fund_details_date | data}}</p>
                <p :class="{money_green:item.fund_details_money>0,money_red:item.fund_details_money<0}"><span class="item-data-money">交易金额：</span>{{item.fund_details_money}}</p>
                <p v-if="item.fund_person !==0"><span class="item-data-money">收款人：</span>{{item.fund_person}}</p>
                <p><span class="item-data-money">相关人：</span>{{item.fund_debtor}}</p>
                <p><span class="item-data-money">款项名称：</span>{{item.fund_name}}</p>
                <p><span class="item-data-money">款项备注：</span>{{item.fund_details_text}}</p>
              </div>
            </li>
          </ul>
          <div class="mui-input-row">
            <label>总收入</label>
            <label :class="{money_green:all_enter>0,money_red:all_enter<0}">{{all_enter}}</label>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
  export default {
    name: 'projet_modify',
    data(){
      return{
        list:'',
        customer_name:'', //工地
        pre_profit:'',  //预计利润
        pre_profit_proportion:'',//利润比
        already_out:'',//已支出
        pre_out:'',//预支出
        all_out:'',//总支出
        already_enter:'',//已收入
        pre_enter:'',//预收入
        all_enter:'',//总收入
        list_already_out:'',//详情
        list_pre_out:'',//预支出
        list_already_enter:'',//已收入
        list_pre_enter:'',//预收入
        lefzero:{
          paddingLeft:'0'
        }
      }
    },
    created () {
      this.list = JSON.parse(localStorage.msg)
      console.log(this.list)
      this.customer_name = this.list.customer_name
      this.pre_profit = this.list.pre_profit
      this.pre_profit_proportion = this.list.pre_profit_proportion
      this.already_out = this.list.already_out
      this.already_enter = this.list.already_enter
      this.pre_out = this.list.pre_out
      this.pre_enter = this.list.pre_enter
      this.all_out = parseFloat(this.already_out)+parseFloat(this.pre_out)  //总支出
      this.all_enter = parseFloat(this.already_enter)+parseFloat(this.pre_enter)  //总收入
      this.axios.get(url.moneyModify+'?customer_id='+this.list.customer_id).then(res=>{
        this.list_already_out = res.data.already_out //已支出
        this.list_pre_out = res.data.pre_out //预支出
        this.list_already_enter = res.data.already_enter //已收入
        this.list_pre_enter = res.data.pre_enter //预收入
      })
    }
  }
</script>

<style scoped>
  .mui-input-group{margin-bottom: 10px}
  .customer p,.text-p{padding-left: 14px;margin-bottom: 0}
  .app{margin-bottom: 0}
  .projet_app{padding: 0}
  .projet_app ul{margin-top: 0!important;}
  a{font-size: 15px}
  .mui-input-row label:nth-child(2){padding-left: 0}
  .money_green{color: green;}
  .money_red{color: red}
  .mui-collapse-content p{overflow: hidden}
  .views{background-color: transparent}
  .views li a{padding: unset}
  .views li a label:nth-child(1){width: 30%;display: block;float: left;padding: 11px 15px}
  .views li a label:nth-child(2){width: 70%;display: block;float: left;padding: 11px 0}
  .views li div .item-data-money{width: 29%;display: block;float: left;}
</style>
