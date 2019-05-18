<template>
    <div class="running_money">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金流水</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>现金流水</h2>
        <p>administration</p>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
        <div class="mui-input-row">
          <label>输入关键字</label>
          <input type="text" class="mui-input-clear" placeholder="请输入关键字">
        </div>
        <div class="mui-input-row">
          <label>户主</label>
          <select name="" v-model="bank_person">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in listPerson" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>开户行</label>
          <select name="" v-model="bank_bank">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in listBank" :value="item">{{item}}</option>
          </select>
        </div>
          <div class="mui-input-row">
            <label>尾号</label>
            <select name="" v-model="bank_number">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listN" :value="item">{{item}}</option>
            </select>
          </div>
        <div class="mui-input-row select-row">
          <label>起始时间</label>
          <select name="" v-model="fund_detail_transaction_date">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in listArr" :value="item">{{item | data}}</option>
          </select>
          <span class="no-span"></span>
          <select name="" v-model="fund_detail_transaction_date">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in listArr" :value="item">{{item | data}}</option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>项目名称</label>
          <select name="" v-model="customer_name">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in projet" :value="item.customer_name">{{item.customer_name}}</option>
          </select>
        </div>
        </form>
      </div>
      <table border="0">
          <tr>
            <td :style="leftshi">户主</td>
            <td>开户行</td>
            <td>交易金额</td>
            <td>交易时间</td>
            <td>项目名称</td>
          </tr>
        <tr v-for="item in list">
          <td><span :style="leftshi">{{item.bank_person}}</span></td>
          <td><span>{{item.bank_bank}}</span></td>
          <td><span :style="money_aa">￥{{item.fund_detail_transaction_money}}</span></td>
          <td><span>{{item.fund_detail_transaction_date | data}}</span></td>
          <td><span :style="hiden">{{item.customer_name}}</span></td>
        </tr>
      </table>
      <footer>
        <div>TOTAL</div>
        <em :style="green">￥{{moneyN}}</em>
        <em :style="red">￥{{moneyY}}</em>
        <div>￥{{moneyNY}}</div>
      </footer>
    </div>
</template>

<script>
  export default {
    name: 'running_money',
    data(){
      return{
        keyword:'',	//关键字
        bank_person:'', //户主
        listPerson:'',	//in户主
        bank_bank:'',	//开户行
        listBank:'', //in开户行
        bank_number:'',	//尾号
        fund_detail_transaction_date:'', //交易时间
        listNumber:'',		//后四位数
        listN:'',	//创建、后四位、空数组
        listDetail:'',	//起始时间
        listD:'', //过滤
        listArr:{},//过滤起始时间
        customer_name:'',
        projet:'',//项目名称
        list:[],//总
        moneyN:'',//正数
        moneyY:'',//负数
        moneyNY:'', //正负总
        leftshi:{
          paddingLeft:'10px'
        },
        hiden:{
          display:'block',
          width:'112px',
          whiteSpace:'nowrap',
          overflow:'hidden',
          textOverflow:'ellipsis'
        },
        money_aa:{
          display:'block',
          whiteSpace:'nowrap',
          width:'60px',
          overflow:'hidden',
          textOverflow:'ellipsis'
        },
        red:{
          color:'red',
          overflow:'hidden',
          textOverflow:'ellipsis'
        },
        green:{
          color:'green',
          overflow:'hidden',
          textOverflow:'ellipsis'
        }

      }
    },
    created(){
      /*尾号*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank_number').then(res=>{
        this.listNumber = res.data
        this.listN = [];
        for (var index in res.data) {
          var aa = res.data[index].slice(8,12)
          this.listN.push(aa)
        }
      })
      /*项目流水户主*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank_person').then(res=>{
        this.listPerson = res.data
      })
      /*开户行*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank_bank').then(res=>{
        this.listBank = res.data
      })
      /*起始时间*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail').then(res=>{
        this.listDetail = res.data
        this.listD = [];
        var  obj ={};
        var arr = []
        for (var index in res.data) {
          var a = res.data[index].fund_detail_transaction_date
          this.listD.push(a)
        }
        for (var index in this.listD){
          var s = this.listD[index];
          if (obj[s]) continue;
          else{
            obj[s]=s;
            arr.push(s)
          }
        }
        this.listArr = arr
      })
      /*项目名称*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer').then(res=>{
        this.projet = res.data
      })
      /*交易记录*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail').then(res=>{
        this.list = res.data
        var n = 0;	//转出
        var y=0//转入
        for (var index in res.data) {
          if (res.data[index].fund_detail_transaction_money > 0) {
            n += res.data[index].fund_detail_transaction_money	//转出
          }else{
            y += res.data[index].fund_detail_transaction_money	//转如
          }
          this.moneyN = n;	//负
          this.moneyY = y;	//正
          this.moneyNY = n+y;		//正负总
        }
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
@import "../css/public.css";
input{font-size: 15px;}
.mui-input-group{background-color: transparent}
form div select{background: transparent;font-size: 15px!important;}
.mui-input-group{margin-bottom: 20px;}
.select-row{display: flex;}
.select-row label{display: initial}
.select-row select{flex: 1;}
.select-row .no-span{background-color: black;height: 2px;width: 20px;position: relative;top: 50%;right:23px;}
.app{margin-bottom: 0}
/*table*/
table{width: 100%;text-align: left;}
table tr{font-size: 14px;line-height: 27px;}
table tr:nth-child(1){background-color: #DADADA;line-height: 35px;}
/*底部*/
footer{position: fixed;bottom: 0;display: flex;width: 100%;background-color: #a7a7a7;line-height: 30px;font-size: 14px;}
footer div,footer em{flex: 1;}
</style>
