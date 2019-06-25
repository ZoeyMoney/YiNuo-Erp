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
        </form>
      </div>
      <div class="table_list">
        <div class="leftt">
          <div>户主</div>
          <div>开户行</div>
          <div>交易金额</div>
          <div>交易时间</div>
          <div>项目名称</div>
        </div>
      <table border="0">
          <!--<tr>
            <td :style="leftshi">户主</td>
            <td>开户行</td>
            <td>交易金额</td>
            <td>交易时间</td>
            <td>项目名称</td>
          </tr>-->
        <tr v-for="item in list_moey">
          <td><span :style="leftshi" @click="person(item.bank_deal_id)">{{item.bank_person}}</span></td>
          <td><span>{{item.bank_bank}}</span></td>
          <td>
            <span
              :style="money_aa"
              :class="{money_green:item.fund_detail_transaction_money>0,
               money_red: item.fund_detail_transaction_money<0}"
              v-if="item.fund_detail_transaction_money">
              ￥{{item.fund_detail_transaction_money | negative}}
            </span>
            <span
              :style="money_aa"
              :class="{money_green:item.bank_deal_money>0,
              money_red:item.bank_deal_money<0}"
              v-if="item.bank_deal_money">
              ￥{{item.bank_deal_money | negative}}
            </span>
          </td>
          <td>
            <span v-if="item.fund_detail_transaction_date">{{item.fund_detail_transaction_date | tosDate}}</span>
          </td>
          <td>
            <span v-if="item.customer_name && item.fund_name != '手续费'" :style="hiden">{{item.customer_name}}</span>
            <span v-if="item.bank_deal_money" :style="hiden">转账</span>
            <span v-if="item.bank_deal_money===0 && !item.customer_name && item.fund_details_money>0 && item.fund_name != '手续费'" :style="hiden">收入</span>
            <span v-if="item.bank_deal_money===0 && !item.customer_name && item.fund_details_money<0 && item.fund_name != '手续费'" :style="hiden">支出</span>
            <span v-if="item.fund_name ==='手续费'" :style="hiden">手续费</span>
          </td>
        </tr>
      </table>
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
export default {
  name: 'running_money',
  data () {
    return {
      keyword: '',	// 关键字
      fund_nameo:'',
      showData:true,
      list_fund_name_type:'',
      list_fund_namea:'',
      list_fund_names:'',
      list_slime_all:'',
      bank_person: '', // 户主
      menu_bank_person: '',	// in户主
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
      leftshi: {
        paddingLeft: '10px'
      },
      hiden: {
        display: 'block',
        width: '107px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft:'12px'
      },
      money_aa: {
        display: 'block',
        whiteSpace: 'nowrap',
        width: '77px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
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

    }
  },
  created () {
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail').then(res => {
      this.list_moey = res.data.list_moey //户主
      this.menu_bank_person = res.data.menu_bank_person
      this.menu_bank_bank = res.data.menu_bank_bank
      //尾号
      this.menu_bank_number = res.data.menu_bank_number
      this.list_fund_name_type = res.data.list_fund_name_type
      this.list_fund_names = res.data.list_fund_names
      this.list_customer_name = res.data.list_customer_name
      this.list_fund_name = res.data.list_fund_name
      this.menu_fund_name_type = res.data.menu_fund_name_type
      this.menu_fund_names = res.data.menu_fund_names
      this.menu_Customer_name = res.data.menu_Customer_name
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
      red_all_money += parseInt(zero_money)+parseInt(red_money)
      allMoney += parseInt(green_money)+parseInt(red_all_money)
       this.moneyN = green_money  //绿色
        this.moneyY = red_all_money //红色
        this.moneyNY = allMoney
    })
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.fund_details_id = id
  },
  methods: {
    //户主点击
    person(id){
      this.$router.push({path:'running_details',query:{id:id}})
      // this.$router.push({path:'running_details',query:{id:then.fund_details_id,person:person,bank_bank:bank_bank,bank_deal_date:bank_deal_date,bank_deal_moneya:bank_deal_money,bank_number:bank_number,bank_type:bank_type}})
    },
    //开户行
    bankPerson(id){
      this.bankPerson_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail?bank_person='+id).then(res => {
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
      })
    },
    //开户行
    bankBank(id){
      this.bankBank_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail?bank_person='+this.bankPerson_id + '&bank_bank='+id).then(res => {
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
      })
    },
    //  尾号
    bankNumber(id){
      this.bankNumber_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail?bank_person='+this.bankPerson_id + '&bank_bank='+this.bankBank_id + '&bank_number='+ id).then(res => {
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
      })
    },
    //类别选择
    fund_namesa(id){
      this.fundNamesa_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail' + '?fund_name_type=' + id).then(res => {
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
      })
    },
    //类别名称
    list_fund_nameas(id){
      this.listFund_name_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail'+ '?fund_name_type=' + this.fundNamesa_id + '&fund_names='+id).then(res => {
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
      })
    },
    //工地
    customer_name_list(id){
      this.customerName_id = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail'+'?fund_name_type=' + this.fundNamesa_id + '&fund_names='+this.listFund_name_id+'&Customer_id='+id).then(res => {
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
      })
    },
    //开始时间
    dateList(id){
      this.dataA = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail'+ '?fund_name_type=' + this.fundNamesa_id + '&fund_names='+this.listFund_name_id+'&Customer_id='+this.customerName_id + '&DateStart='+id).then(res => {
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
      })
    },
    //结束时间
    date_list_two_change(id){
      this.dataB = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_detail'+ '?fund_name_type=' + this.fundNamesa_id + '&fund_names='+this.listFund_name_id+'&Customer_id='+this.customerName_id + '&DateStart='+this.dataA+'&DateEnd='+id).then(res => {
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
      })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
input{font-size: 15px;}
.mui-input-group{background-color: transparent}
form div select{background: transparent;font-size: 15px!important;}
.select-row{display: flex;}
.select-row label{display: initial}
.select-row select{flex: 1;}
.select-row .no-span{background-color: black;height: 2px;width: 20px;position: relative;top: 50%;right:23px;}
.app{margin-bottom: 0}
/*black_mui*/
.money_green{color: green;}
.money_red{color: red;}
.black_mui{margin-top: 5px;padding-bottom: 5px;border: 1px solid white;}
/*table*/
.leftt{display: flex;font-size: 15px;position: fixed;background-color: #DADADA;width: 100%;line-height: 31px}
.leftt div:nth-child(1){padding-left: 10px}
.leftt div:nth-child(3){padding-left: 18px}
.leftt div:nth-child(4){padding-left: 30px}
.leftt div:nth-child(5){padding-left: 10px}
.table_list{height: 301px;overflow: auto}
.goOver{display: flex;}
.goOver label{flex: 0.8;}
.goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
.goOver input{flex: 1;}
table{width: 100%;text-align: left;margin-top: 31px}
table tr{font-size: 14px;line-height: 27px;}
/*table tr:nth-child(1){background-color: #DADADA;line-height: 35px;}*/
/*底部*/
footer{position: fixed;bottom: 0;display: flex;width: 100%;background-color: #a7a7a7;line-height: 30px;font-size: 14px;}
footer div,footer em{flex: 1;}
</style>
