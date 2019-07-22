<template>
    <div class="expenditure">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">支出</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>支出</h2>
          <p>/Expense</p>
        </div>
      </div>
      <!--收入记录-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row site_projet" v-if="site_projet">
            <label>工地名称</label>
            <input type="text" v-model="site" @click="siteChange" placeholder="请选择">
          </div>
          <div class="mui-input-row">
            <label>收款人</label>
            <input type="text" class="mui-input-clear" v-model="fund_person" @click="relecant" placeholder="请输入收款人">
          </div>
          <div class="mui-input-row">
            <label>类别选择</label>
            <select name="" v-model="fund_detail_id" @change="fund_deId(fund_detail_id)">
              <option value="">请选择</option>
              <option v-for="item in list_fund_name_type" :value="item.fund_name_type">{{item.fund_name_type}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>款项名称</label>
            <select name="" v-model="detailed" @change="list_fund_nameas(detailed)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_names" :value="item.fund_names" v-if="cotrProjet">{{item.fund_names}}</option>
              <option v-for="item in list_fund_names" :value="item.fund_name_id" v-if="idProjet">{{item.fund_names}}</option>
            </select>
          </div>
          <div class="mui-input-row" v-if="category">
            <label>款项详细</label>
            <select name="" v-model="slim">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_name" :value="item.fund_name_id">{{item.fund_name}}</option>
            </select>
          </div>
          <!--<div class="mui-input-row relevant_people" v-if="relevant_people">
            <label>相关人</label>
            <select name="" v-model="listRelevant">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_bank_card_person" :value="item.text">{{item.text}}</option>
            </select>
          </div>-->
          <data-value v-model="dataValue"></data-value>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" class="mui-input-clear" placeholder="￥" v-model="bank_money">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" v-model="clearBei" placeholder="请输入备注">
          </div>
          <div class="mui-input-row row-label">
            <label>转出账户</label>
            <label style="padding: 0;width: 70%">
              <select  v-model="mongey_bank_id" name="" id="card">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in bank_card" :value="item.bank_id">
                  <div>{{item.bank_person}}</div>&nbsp;&nbsp;&nbsp;
                  <div>{{item.bank_bank}}</div>
                </option>
              </select>
            </label>
          </div>
        </form>
        <div class="mui-input-row mui-checkbox mui-left checkbox">
          <label>转为应收</label>
          <input name="checkbox1" value="转为应收" type="checkbox" v-model="checkbox">
        </div>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="add">Transfers</button>
        </div>
        <!--table-->
        <div class="mui-content all">
          <div class="saving">储蓄卡</div>
          <div class="all-money">￥{{chuXuKa}}</div>
        </div>
        <table class="all-saving" border="0" cellspacing="" cellpadding="">
          <tr>
            <td style="width: 22%">开户行</td>
            <td style="width: 15%">户主</td>
            <td>余额</td>
          </tr>
          <tr v-for="item in chuXu" @click="msgCu(item.bank_bank,item.bank_person,item.number)">
            <td>{{item.bank_bank}}</td>
            <td>{{item.bank_person}}</td>
            <td>￥{{item.bank_money}}</td>
          </tr>
        </table>
        <div class="mui-content all">
          <div class="saving">信用</div>
          <div class="all-money">￥{{XinYongKa}}</div>
        </div>
        <table class="blaner" border="0" cellspacing="" cellpadding="">
          <tr>
            <td style="width: 21%">开户行</td>
            <td style="width: 15%">户主</td>
            <td>余额</td>
            <td>额度</td>
          </tr>
          <tr v-for="item in xinY" @click="msgCu(item.bank_bank,item.bank_person,item.number)">
            <td>{{item.bank_bank}}</td>
            <td>{{item.bank_person}}</td>
            <td>￥{{item.bank_money}}</td>
            <td>￥{{item.bank_limit}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'expenditure',
  data () {
    return {
      imgUrl_loading:false,
      category:true,
      cotrProjet:false,
      idProjet:true,
      relevant_people:true, //相关人
      site_projet:true,//工地名称
      dataValue:new Date().toString(),
      bank_id: 0, // id
      mongey_bank_id:'',
      list_fund_name_type: [],//个人公司
      detailed: '',  //类别详细
      list_fund_names: [],//红包工资
      slim: '',  //类别详细
      list_fund_name: [],  //设计费
      listRelevant: '',//相关人下拉
      site: '',//工地
      bank_money: '',//金额
      account: '',//账户
      clearBei: '',//备注
      checkbox: '',//复选框
      fund_person:'',//收款人
      fund_detail_id: '',		// 工程款
      bank_card: '', // 银行卡
      chuXu: '',	// 储蓄卡
      xinY: '',	// 信用卡
      chuXuKa: '', // 储蓄卡总额
      XinYongKa: '', // 储蓄卡总额
      fund_name_id: '', //类别详情id
      list_fund_name_type:'',//一级查询
      list_fund_names:'', //二级查询
      list_fund_name:'',  //三级查询
      test_id:'',
      fund_people_name:'',//id
      list_bank_card_person:[
        {text:'胡永生'},
        {text:'邱梅'},
      ],
    }
  },
  created () {
    this.imgUrl_loading = true
    /* table */
    this.axios.get(url.ClassSelect+'?fund_type=1&fund_stale=0').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
      this.list_fund_name_type = res.data.fund_name_type
      }
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
    /* 银行卡 */
    this.axios.get(url.bankCard).then(res => {
      this.bank_card = res.data
      var chu = []
      var xin = []
      var m = 0
      var y = 0
      for (var index in res.data) {
        if (res.data[index].bank_type === '储蓄卡') {
          m += res.data[index].bank_money // 储蓄卡总额
          chu.push(res.data[index])
        } else {
          if (res.data[index].bank_type === '信用卡') {
            y += res.data[index].bank_money
            xin.push(res.data[index])
          }
        }
      }
      this.chuXu = chu
      this.xinY = xin

      this.chuXuKa = Math.floor(m * 100)/100
      this.XinYongKa = Math.floor(y*100)/100
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
    this.site = window.test
    this.test_id = window.test_id
    this.fund_person = window.fund_people
    this.fund_people_name = window.fund_people_name
  },
  methods: {
    //一级查询
    fund_deId(id){
      this.fund_nameso = id
      this.axios.get(url.ClassSelect+'?fund_type=1&fund_stale=0&fund_name_type=' + this.fund_nameso).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.fund_detail_id === '个人') {
          this.category = false
          this.site_projet = false
          this.relevant_people = true
        }else if (this.fund_detail_id === '公司') {
          this.category = true
          this.cotrProjet = true
          this.idProjet = false
          this.relevant_people = false
          this.site_projet = true
        }
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    //二级查询
    list_fund_nameas(id){
      this.fund_name_id = id
      this.axios.get(url.ClassSelect+'?fund_type=1&fund_stale=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + id).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.detailed === '现金周转') {
          this.site_projet = false
          this.relevant_people = true
        }else if (this.detailed === '工程') {
          this.site_projet = true
          this.relevant_people = false
        }
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    siteChange(){
      var expenditure = 'expenditure'
      this.$router.push({path:'siteList',})
      window.expenditure = expenditure
    },
    relecant(){
      // this.$router.push({path:'relevant_people'})
      var expenditure = 'expenditure_people'
      this.$router.push({path:'relevant_people',})
      window.prosen = expenditure
    },
    msgCu(id,person,number){
      var add = '?'+'&bank_person='+person+'&bank_bank='+id
      if (number !== undefined) {
        add+='&bank_number='+number
      }
      var transfer = 'transfer'
      this.axios.get(url.moneyRunning+add).then(res=>{
        window.transfer = res.data.list_moey
        this.$router.push({path:'running_money',query:{transfer:transfer}})
        // console.log(res.data.list_moey)
      })
    },
    /* 保存 */
    add () {
      var then = this
      var check = true
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      var add = '?'
      //第一选择
      if (this.fund_detail_id == '') {
        mui.toast('类别名称不能为空')
        check = false
        return false
      }
      if (this.site !== undefined && this.test_id !==undefined) {
        add+='customer_id='+this.test_id
      }
      if (this.fund_person !== undefined && this.fund_people_name !== undefined){
        add+='&fund_person='+this.fund_people_name
      }
      if (this.fund_detail_id === '个人') {
        add+='fund_name='+this.detailed/*+'&fund_debtor='+this.listRelevant*/
      }else if (this.fund_detail_id === '公司') {
        add+='&fund_name='+this.slim
      }
      //金额
      if (this.bank_money == '') {
        mui.toast('金额不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.bank_money)) {
        mui.toast('金额格式错误')
        check = false
        return false
      }
      //转账费率
      if (this.bank_deal_rate == '') {
        mui.toast('转账费率不能为空')
        check = false
        return false
      }
      // 转出
      if (this.mongey_bank_id == '') {
        mui.toast('转出不能为空')
        check = false
        return false
      }
      /*for (var index in this.bank_card) {
        if (this.bank_card[index].bank_id === this.mongey_bank_id) {
          if (this.bank_money > this.bank_card[index].bank_money) {
            mui.toast('支出金额不能大于卡内余额')
            check = false
            return false
          }else{
            if (this.bank_card[index].limit === '0') {
              if (this.bank_money > this.bank_card[index].bank_limit) {
                mui.toast('金额不能大于储蓄卡余额或信用卡额度')
                check = false
                return false
              }
            }
          }
        }
      }*/
      var dt = new Date(this.dataValue)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      var t = dt.getHours();
      var MM =dt.getMinutes();
      var s = dt.getSeconds();
      var dd  = `${y}-${m}-${d} ${t}:${MM}:${s}`
      this.imgUrl_loading = true
      add+='&money='+(-this.bank_money)+'&fund_text='+this.clearBei+'&bank_id='+this.mongey_bank_id+'&shiji_money='+(-this.bank_money)+'&date='+dd
      if (this.checkbox === true) {
        this.axios.post(url.moneyOutEnter+add).then(res=>{
          var id = ''
          for (var index in this.listProjet) {
            if (this.listProjet[index].customer_id === this.site){
              id = this.listProjet[index].customer_name
            }
          }
          if (res.status === 200) {
            this.imgUrl_loading = false
          mui.alert(res.data.data,function () {
            then.$router.push({name:'expenditure_receive',query:{money:then.bank_money}})
          })
          }
        })
      }else {
        this.axios.post(url.moneyOutEnter+add).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
          if (res.data.data === '录入成功') {
            mui.alert('录入成功', function () {
              then.$router.go(0)
            })
          }
          }
        })
      }
    },
  }
}
</script>

<style scoped>
@import "../css/public.css";
form{margin-bottom: 12px;}
input::-webkit-input-placeholder{color: black}
/*form字体*/
form div select{font-size: 15px!important;}
/*第二个form*/
.row-label label:nth-child(2)
,.row-label label:nth-child(3)
,.row-label label:nth-child(4),.row-label label:nth-child(5){padding-top: 0;padding-left: 1px;}
.row-label label input{padding: 0;}
/*消失*/
.detailed{display: none}
/*多选框*/
.mui-checkbox.mui-left label, .mui-radio.mui-left label{width: 37%}
/*按钮*/
.form-btn{background-color: #EFEFF4!important;margin-top: 0;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*form底部栏*/
.checkbox label{width: 50%!important;text-align: right}
.checkbox input{width: 46%;text-align: right}
/*table*/
.all{display: flex;margin-bottom: 12px;padding-left: 10px;}
.saving{flex: 1;}
.all-money{flex: 4;text-align: left;}
.saving,.all-money{font-weight: bold}
.all-saving{width: 100%;font-size: 15px;margin-bottom: 50px;}
.all-saving tr{width: 25%!important;}
.all-saving tr:nth-child(1),.blaner tr:nth-child(1){background-color: #DADADA;line-height: 34px}
.all-saving tr td{padding-left: 10px;border-bottom: 1px solid #dadada;line-height: 28px}
.all-saving tr td input,.blaner tr td input{height: 35px!important;font-size: 14px;padding: 0!important;background-color: transparent!important;border: 0!important;border-bottom: 1px solid #454545!important;margin-bottom: 0!important;}
/*第二个表单*/
table{font-size: 15px;width: 100%;white-space: nowrap}
.blaner tr td{padding-left: 10px;border-bottom: 1px solid #dadada;line-height: 28px}
</style>
