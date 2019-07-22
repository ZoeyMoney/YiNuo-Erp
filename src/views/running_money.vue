<template>
    <div class="running_money">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金流水</h1>
        <router-link :to="{name:'index'}" class=" mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
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
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse" @click="search_fa">
              <a class="mui-navigate-right" href="#">查询</a>
              <div class="mui-collapse-content">
                <div class="mui-input-row">
                  <label>户主</label>
                  <select name="" v-model="bank_person" @change="bankPerson(bank_person)">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="item in menu_bank_person" :value="item">{{item}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>开户行</label>
                  <select name="" v-model="bank_bank" @change="bankBank(bank_bank)">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="item in menu_bank_bank" :value="item">{{item}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>尾号</label>
                  <select name="" v-model="bank_number" @change="bankNumber(bank_number)">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="item in menu_bank_number" :value="item">{{item}}</option>
                  </select>
                </div>
                <form class="mui-input-group black_mui">
                  <div class="mui-input-row goOver">
                    <label>起始时间</label>
                    <input type="date" class="mui-input-clear" v-model="dateStart" @change="dateList(dateStart)">
                    <span class="go-span"></span>
                    <input type="date" class="mui-input-clear" v-model="dateEnter" @change="date_list_two_change(dateEnter)">
                  </div>
                </form>
                <div class="mui-input-row">
                  <label>类别选择</label>
                  <select name="" v-model="fund_nameo" @change="fund_namesa(fund_nameo)">
                    <option value="">请选择</option>
                    <option v-for="item in menu_fund_name_type" :value="item.fund_name_type">{{item.fund_name_type}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>类别名称</label>
                  <select name="" v-model="list_fund_namea" @change="list_fund_nameas(list_fund_namea)">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="item in menu_fund_names" :value="item.fund_names">{{item.fund_names}}</option>
                  </select>
                </div>
                <div class="mui-input-row" v-if="list_slime_all">
                  <label>款项详细</label>
                  <select name="" v-model="slim" @change="list_slim_name(slim)">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="item in menu_fund_name" :value="item.fund_name_id">{{item.fund_name}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>工地名称</label>
                  <select name="" v-model="customer_name" @change="customer_name_list(customer_name)">
                    <option value="" selected="selected">请选择</option>
                    <option v-for="item in menu_Customer_name" :value="item.customer_id">{{item.customer_name}}</option>
                  </select>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div class="table_list">
        <div class="div-th">
          <div>户主</div>
          <div>开户行</div>
          <div>交易金额</div>
          <div>余额</div>
          <div>日期</div>
        </div>
        <div class="div-table">
        <div class="div-tr" v-for="item in list_moey" v-if="al_projet">
          <div>{{item.bank_person}}</div>
          <div>{{item.bank_bank}}</div>
          <!--<div>
            <span v-if="item.customer_name && item.fund_name != '手续费'" :style="nameWidth">{{item.customer_name}}</span>
            <span v-if="item.bank_deal_money" :style="nameWidth">转账</span>
            <span v-if="item.bank_deal_money===0 && !item.customer_name && item.fund_details_money>0 && item.fund_name != '手续费'" :style="nameWidth">收入</span>
            <span v-if="item.bank_deal_money===0 && !item.customer_name && item.fund_details_money<0 && item.fund_name != '手续费'" :style="nameWidth">支出</span>
            <span v-if="item.fund_name ==='手续费'">手续费</span>
          </div>-->
          <div>
            <span @click="person(item.fund_detail_id)"
                  :class="{money_green:item.fund_detail_transaction_money>0,
               money_red: item.fund_detail_transaction_money<0}"
                  v-if="item.fund_detail_transaction_money">￥{{item.fund_detail_transaction_money | negative}}</span>
            <span @click="person(item.bank_deal_id)"
                  :class="{money_green:item.bank_deal_money>0,
              money_red:item.bank_deal_money<0}"
                  v-if="item.bank_deal_money">￥{{item.bank_deal_money | negative}}</span>
          </div>
          <div :style="floorNumber">￥{{item.balance}}</div>
          <div v-if="item.date">{{item.date}}</div>
          </div>
          <!--er-->
          <div class="div-tr" v-for="item in list_moey_two" v-if="al_projet_two">
            <div>{{item.bank_person}}</div>
            <div>{{item.bank_bank}}</div>
            <!--<div>
              <span v-if="item.customer_name && item.fund_name != '手续费'" :style="nameWidth">{{item.customer_name}}</span>
              <span v-if="item.bank_deal_money" :style="nameWidth">转账</span>
              <span v-if="item.bank_deal_money===0 && !item.customer_name && item.fund_details_money>0 && item.fund_name != '手续费'" :style="nameWidth">收入</span>
              <span v-if="item.bank_deal_money===0 && !item.customer_name && item.fund_details_money<0 && item.fund_name != '手续费'" :style="nameWidth">支出</span>
              <span v-if="item.fund_name ==='手续费'">手续费</span>
            </div>-->
            <div>
            <span @click="person(item.fund_detail_id)"
                  :class="{money_green:item.fund_detail_transaction_money>0,
               money_red: item.fund_detail_transaction_money<0}"
                  v-if="item.fund_detail_transaction_money">￥{{item.fund_detail_transaction_money | negative}}</span>
              <span @click="person(item.bank_deal_id)"
                    :class="{money_green:item.bank_deal_money>0,
              money_red:item.bank_deal_money<0}"
                    v-if="item.bank_deal_money">￥{{item.bank_deal_money | negative}}</span>
            </div>
            <div :style="floorNumber">￥{{item.balance}}</div>
            <div v-if="item.date">{{item.date}}</div>
        </div>
      </div>
      </div>
      <footer>
        <div>TOTAL</div>
        <em :style="green">￥{{moneyN}}</em>
        <em :style="red">￥{{moneyY}}</em>
        <div>￥{{moneyNY}}</div>
      </footer>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'running_money',
  data () {
    return {
      imgUrl_loading:false,
      keyword: '',	// 关键字
      fund_nameo:'',
      showData:true,
      list_fund_name_type:'',
      list_fund_namea:'',
      list_fund_names:'',
      list_slime_all:'',
      bank_person: '', // 户主
      menu_bank_person: '',	// in户主
      al_projet:true,
      al_projet_two:false,
      bank_bank: '',	// 开户行
      menu_bank_bank: '', // in开户行
      bank_number: '',	// 尾号
      menu_bank_number:'',
      listNumber: '',		// 后四位数
      listN: '',	// 创建、后四位、空数组
      menu_fund_name_type:'',//类别选择
      menu_fund_names:'',//类别名称
      menu_fund_name:'',//类别详细
      menu_Customer_name:'',//工地各项
      date_list: '',	// 起始时间
      date_list_two:'',//结束时间
      list_moey_two:'',
      dateStart:'',
      dateEnter:'',
      list_moey:'',
      customer_name: '',
      list_customer_name: '', // 项目名称
      list: [], // 总
      moneyN: '', // 正数
      moneyY: '', // 负数
      moneyNY: '', // 正负总
      bankPerson_id:'',
      bankBank_id:'',
      bankNumber_id:'',
      fundNamesa_id:'',
      listFund_name_id:'',
      customerName_id:'',
      dataA:'',
      dataB:'',
      menuBankNumber:'',
      fund_details_id:'',//传参id
      all_all:'',
      leftshi: {
        paddingLeft: '10px'
      },
      red: {
        color: 'red',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      green: {
        color: 'green',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      floorNumber:{
        color:'gray',
        paddingLeft:'5px'
      }
    }
  },
  component:{

  },
  created () {
    this.imgUrl_loading = true
    //获取前两天时间
    var sh_data = this.GetDateStr(-2)
    //传给后台时间
    this.axios.get(url.moneyRunning+'?DateStart='+sh_data).then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
      }
      this.package(res)
      //去掉-
      var green_money = 0 //绿色
      var zero_money = 0  //红色
      var allMoney = 0 //黑色
      var bankDealMoney = 0  //正数
      var red_all_money = 0
      var red_money = 0
      var fund_transaction_money = 0  //总数 fund_detail_transaction_money
       for (var index in this.list_moey) {
         /*判断当fund_detail_transaction_money没有显示bank_deal_money*/
         if (this.list_moey[index].bank_deal_money === 0) {
           if (this.list_moey[index].fund_detail_transaction_money > 0) {
             fund_transaction_money += this.list_moey[index].fund_detail_transaction_money
           }
           if (this.list_moey[index].fund_detail_transaction_money < 0) {
             zero_money += this.list_moey[index].fund_detail_transaction_money
           }
         }
         if (this.list_moey[index].bank_deal_money > 0) {
           bankDealMoney += this.list_moey[index].bank_deal_money
         }
         if (this.list_moey[index].bank_deal_money < 0){
           red_money += this.list_moey[index].bank_deal_money
         }
       }
      green_money += parseFloat(bankDealMoney)+parseFloat(fund_transaction_money)
      red_all_money += parseFloat(zero_money)+parseFloat(red_money)
      allMoney += parseFloat(green_money)+parseFloat(red_all_money)
       this.moneyN = Math.floor(green_money*100) /100  //绿色
        this.moneyY = Math.floor(red_all_money*100)/100 //红色
        this.moneyNY = Math.floor(allMoney * 100) /100
    })
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.fund_details_id = id
    this.list = id.split('=')
    this.all_all = this.list[0]
    //  接收收入支出转账银行卡信息
    if (this.all_all === 'transfer') {
      this.al_projet = false
      this.al_projet_two = true
      this.list_moey_two = window.transfer
      console.log(this.list_moey_two)
    }
  },
  methods: {
    //查询
    search_fa(){
      this.al_projet_two = false
      this.al_projet = true
    },
    //封装前两天时间
    GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
    return y+"-"+m+"-"+d;
    },
    //金额点击
    person(id){
      var list = {}
      if (this.all_all === 'transfer') {
      for (var index in this.list_moey_two) {
        if (id === this.list_moey_two[index].bank_deal_id || id === this.list_moey_two[index].fund_detail_id) {
          list = this.list_moey_two[index]
        }
      }
      }else{
        for (var index in this.list_moey) {
        if (id === this.list_moey[index].bank_deal_id || id === this.list_moey[index].fund_detail_id) {
          list = this.list_moey[index]
        }
      }
      }
      localStorage.msg = JSON.stringify(list)
      this.$router.push({path:'running_details',query:{list:list}})
      // this.$router.push({path:'running_details',query:{id:then.fund_details_id,person:person,bank_bank:bank_bank,bank_deal_date:bank_deal_date,bank_deal_moneya:bank_deal_money,bank_number:bank_number,bank_type:bank_type}})
    },
    //封装model
    package(res){
      this.list_moey = res.data.list_moey //户主
      this.menu_bank_person = res.data.menu_bank_person
      this.menu_bank_bank = res.data.menu_bank_bank
      this.menu_bank_number = res.data.menu_bank_number
      this.list_fund_name_type = res.data.list_fund_name_type
      this.list_fund_names = res.data.list_fund_names
      this.list_customer_name = res.data.list_customer_name
      this.list_fund_name = res.data.list_fund_name
      this.menu_fund_name_type = res.data.menu_fund_name_type
      this.menu_fund_names = res.data.menu_fund_names
      this.menu_Customer_name = res.data.menu_Customer_name
    },
    //户主
    bankPerson(id){
      this.bankPerson_id = id
      this.axios.get(url.moneyRunning+'?bank_person='+id).then(res => {
        this.package(res)
      })
    },
    //开户行
    bankBank(id){
      this.bankBank_id = id
      var add = '?'
      if (this.bankPerson_id !== '' && this.bankPerson_id !== undefined) {
        add+='bank_person='+this.bankPerson_id
      }
      this.axios.get(url.moneyRunning+add+ '&bank_bank='+id).then(res => {
        this.package(res)
      })
    },
    //  尾号
    bankNumber(id){
      this.bankNumber_id = id
      this.axios.get(url.moneyRunning+'?bank_person='+this.bankPerson_id + '&bank_bank='+this.bankBank_id + '&bank_number='+ id).then(res => {
        this.package(res)
      })
    },
    //类别选择
    fund_namesa(id){
      this.fundNamesa_id = id
      var add = '?'
      if (this.bankPerson_id !== '' && this.bankPerson_id !== undefined) {
        add+='bank_person='+this.bankPerson_id
      }
      if (this.bankBank_id !== '' && this.bankBank_id !== undefined) {
        add+='&bankBank_id='+this.bankBank_id
      }
      if (this.dataA !== '' && this.dataA !== undefined) {
        add+='&DateStart='+this.dataA
      }
      if (this.dataB !== '' && this.dataB !== undefined) {
        add+='&DateEnd='+this.dataB
      }
      this.axios.get(url.moneyRunning + add + '&fund_name_type=' + id).then(res => {
        this.package(res)
      })
    },
    //类别名称
    list_fund_nameas(id){
      this.listFund_name_id = id
      this.axios.get(url.moneyRunning + '?fund_name_type=' + this.fundNamesa_id + '&fund_names='+id).then(res => {
        this.package(res)
      })
    },
    //工地
    customer_name_list(id){
      this.customerName_id = id
      var add = '?'
      if (this.fundNamesa_id !== '' && this.fundNamesa_id !==undefined){
        add+= 'fund_name_type='+this.fundNamesa_id
      }
      if (this.listFund_name_id !== '' && this.listFund_name_id !== undefined) {
        add+= '&fund_names='+this.listFund_name_id
      }
      this.axios.get(url.moneyRunning +add+'&Customer_id='+id).then(res => {
        this.package(res)
      })
    },
    //开始时间
    dateList(id){
      this.dataA = id
      var add = '?'
      if (this.bankPerson_id !== '' && this.bankPerson_id !== undefined) {
        add+='bank_person='+this.bankPerson_id
      }
      if (this.bankBank_id !== '' && this.bankBank_id !== undefined) {
        add+='&bank_bank='+this.bankBank_id
      }
      if (this.fundNamesa_id !== '' && this.fundNamesa_id !== undefined) {
        add+='&fund_name_type='+this.fundNamesa_id
      }
      if (this.listFund_name_id !== '' && this.listFund_name_id !== undefined) {
        add+='&fund_names='+this.listFund_name_id
      }
      if (this.customerName_id !== '' && this.customerName_id !== undefined) {
        add+='&Customer_id='+this.customerName_id
      }
      this.axios.get(url.moneyRunning + add + '&DateStart='+id).then(res => {
        this.package(res)
      })
    },
    //结束时间
    date_list_two_change(id){
      this.dataB = id
      var add = '?'
      if (this.fundNamesa_id !== '' && this.fundNamesa_id !== undefined) {
        add+='fund_name_type='+this.fundNamesa_id
      }
      if (this.listFund_name_id !== '' && this.listFund_name_id !== undefined) {
        add+='&fund_names='+this.listFund_name_id
      }
      if (this.customerName_id !== '' && this.customerName_id !== undefined) {
        add+='&Customer_id='+this.customerName_id
      }
      if (this.dataA !==''&& this.dataA!==undefined){
        add+='&DateStart='+this.dataA
      }
      this.axios.get(url.moneyRunning + add +'&DateEnd='+id).then(res => {
        this.package(res)
      })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
.one-noble{padding-left: 4%}
input,div{font-size: 15px;}
.mui-input-group{background-color: transparent}
form div select{background: transparent;font-size: 15px!important;}
.select-row{display: flex;}
.select-row label{display: initial}
.select-row select{flex: 1;}
.select-row .no-span{background-color: black;height: 2px;width: 20px;position: relative;top: 50%;right:23px;}
.app{margin-bottom: 0}
.mui-table-view{background-color: transparent}
.mui-table-view-cell.mui-collapse .mui-collapse-content{background: transparent}
.mui-collapse-content .mui-input-row:nth-child(1){border-top: 1px solid #dadada}
.mui-collapse-content .mui-input-row label:nth-child(1){padding-left: 0}
.goOver label:nth-child(1){padding-left: 15px!important;}
/*black_mui*/
.money_green{color: green;}
.money_red{color: red;}
.black_mui{margin-top: 5px;padding-bottom: 5px;border: 1px solid white;}
/*table*/
.div-th,.div-tr{display: flex;}
.div-th{background-color: #DADADA;line-height: 26px;padding-left: 17px;position: absolute;width: 100%;}
.div-table{position: relative;top: 28px;height: 543px;overflow: auto}
.div-tr{padding-left: 17px;border-bottom: 1px solid #DADADA}
.div-th div,.div-tr div{width: 19%}
.div-th div:nth-child(3),.div-th div:nth-child(4){width: 25%}
.div-th div:nth-child(3){padding-left: 5px}
.div-th div:nth-child(4){padding-left: 10px}
.div-th div:nth-child(5){width: 17%;padding-left: 12px}
.div-th div:nth-child(1),.div-tr div:nth-child(1){width: 14%}
.div-tr div:nth-child(5){text-align: right}
.div-tr div:nth-child(2){width: 70px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis}
.div-tr div:nth-child(3){width: 25%}
.mui-table-view-cell.mui-collapse .mui-collapse-content{padding: 0 15px}
.goOver{display: flex;padding-top: 4px}
.goOver span{width: 67px;height: 1px;background-color: black;position: relative;right: 24px;top: 50%}
.goOver label{width: 45%}
/*底部*/
footer{position: fixed;bottom: 0;display: flex;width: 100%;background-color: #a7a7a7;line-height: 30px;font-size: 14px;}
footer div,footer em{flex: 1;}
</style>
