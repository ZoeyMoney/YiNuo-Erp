<template>
    <div class="income">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">收入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>收入</h2>
          <p>/Income</p>
        </div>
      </div>
      <!--收入记录-->
      <div class="mui-content app">
        <form class="mui-input-group">
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
            <select name="" v-model="slim" @change="list_fund_namea(slim)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_name" :value="item.fund_name_id">{{item.fund_name}}</option>
            </select>
          </div>
          <div class="mui-input-row relevant_people" v-if="relevant_people">
            <label>相关人</label>
            <select name="" v-model="listRelevant">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_bank_card_person" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row site_projet" v-if="site_projet">
            <label>工地名称</label>
            <select name="" v-model="site">
              <option value="">请选择</option>
              <option v-for="item in listProjet" :value="item.customer_id">{{item.customer_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" class="mui-input-clear" v-model="money" placeholder="请输入金额">
          </div>
          <div class="mui-input-row">
            <label>手续费</label>
            <select name="" v-model="money_rate">
              <option value="">请选择</option>
              <option v-for="item in list_money_rate" :value="item.text">{{item.text}}%</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>实际收入</label>
            <input type="text" class="mui-input-clear" v-model="money_actual" placeholder="请输入金额">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" v-model="clearBei" placeholder="请输入备注">
          </div>
          <div class="mui-input-row row-label">
            <label>转入账户</label>
            <label>
              <select  v-model="bank_id" name="" id="card">
                <option value="0" selected="selected">请选择</option>
                <option v-for="item in bank_card" :value="item.bank_id">
                  <div>{{item.bank_bank}}</div>
                  <div>{{item.bank_person}}</div>
                  <div>￥{{item.bank_money}}</div>
                </option>
              </select>
            </label>
          </div>
        </form>
        <div class="mui-input-row mui-checkbox mui-left checkbox">
          <label>转为应付</label>
          <input name="checkbox1" value="转为应付" type="checkbox" v-model="checkbox">
        </div>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="add">Transfers</button>
        </div>
        <!--table-->
        <div class="mui-content all">
          <div class="saving">储蓄卡</div>
          <div class="all-money">￥{{chuXuKa}}</div>
        </div>
        <table class="all-saving" border="0" cellspacing="" cellpadding="">
          <tr>
            <td style="width: 21%">开户行</td>
            <td style="width: 15%">户主</td>
            <td style="width: 15%">尾号</td>
            <td>余额</td>
          </tr>
          <tr v-for="item in chuXu">
            <td>{{item.bank_bank}}</td>
            <td>{{item.bank_person}}</td>
            <td>{{item.bank_number}}</td>
            <td>￥{{item.bank_money}}</td>
          </tr>
        </table>
        <div class="mui-content all">
          <div class="saving">信用卡</div>
          <div class="all-money">￥{{XinYongKa}}</div>
        </div>
        <table class="blaner" border="0" cellspacing="" cellpadding="">
          <tr>
            <td style="width:22%">开户行</td>
            <td style="width: 14%">户主</td>
            <td style="width: 17%">尾号</td>
            <td>余额</td>
            <td>额度</td>
          </tr>
          <tr v-for="item in xinY">
            <td>{{item.bank_bank}}</td>
            <td>{{item.bank_person}}</td>
            <td>{{item.bank_number}}</td>
            <td>￥{{item.bank_money}}</td>
            <td>￥{{item.bank_limit}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'income',
  data () {
    return {
      category:true,
      cotrProjet:false,
      idProjet:true,
      relevant_people:true, //相关人
      site_projet:true,//工地名称
      bank_id: 0, // id
      list_fund_name_type: [],//个人公司
      detailed: '',  //类别详细
      list_fund_names: [],//红包工资
      slim: '',  //类别详细
      list_fund_name: [],  //设计费
      listRelevant: '',//相关人下拉
      list_bank_card_person:[
        {text:'胡永生'},
        {text:'邱梅'},
      ],
      site: '',//工地
      money: '',//金额
      money_rate:'',//手续费
      list_money_rate:[
        {text:0.6},
        {text:0.55},
        {text:0.38},
      ],
      money_get:'',
      account: '',//账户
      clearBei: '',//备注
      checkbox: '',//复选框
      fund_detail_id: '',		// 工程款
      bank_card: '', // 银行卡
      chuXu: '',	// 储蓄卡
      xinY: '',	// 信用卡
      chuXuKa: '', // 储蓄卡总额
      XinYongKa: '', // 储蓄卡总额
      listProjet: '',//工地名称
      list_fund_names:'', //二级查询
      list_fund_name:'',  //三级查询
    }
  },
  created () {

    /*项目名称*/
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer').then(res => {
      this.listProjet = res.data
    })
    /* table */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_stale=1').then(res => {
      this.list_fund_name_type = res.data.fund_name_type
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
    /* 银行卡 */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank').then(res => {
      this.bank_card = res.data
      var chu = []
      var xin = []
      var m = 0
      var y = 0
      for (var index in res.data) {
        if (res.data[index].bank_type === '储蓄卡') {
          var n = res.data[index].bank_number.slice(15, 19) // 截取尾号后4位
          m += res.data[index].bank_money // 储蓄卡总额
          res.data[index].bank_number = n
          chu.push(res.data[index])
        } else {
          if (res.data[index].bank_type === '信用卡') {
            var n = res.data[index].bank_number.slice(12, 16)	// 截取尾号后4位
            y += res.data[index].bank_money
            res.data[index].bank_number = n
            xin.push(res.data[index])
          }
        }
      }
      this.chuXu = chu
      this.xinY = xin
      this.chuXuKa = m
      this.XinYongKa = y
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
  },
  computed:{
    money_actual:{
      get:function () {
       var a = this.money -this.money * this.money_rate / 100
        var b = Math.floor(a*100) /100
        this.money_get = b
        return b
      },
      set:function (value) {
        this.money_get = value
      }
    }
  },
  methods: {
    //一级查询
    fund_deId(id){
      this.fund_nameso = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type=' + this.fund_nameso).then(res => {
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
      this.fund_name = id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + id).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.detailed === '外借款'){
          this.site_projet = false
          this.relevant_people = true
        }else if (this.detailed === '工程') {
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
    //三级查询
    list_fund_namea(id){
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type=' + this.fund_nameso + '&fund_names=' + this.fund_name+'&fund_name'+id).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
      }, error => {
        var then = this
        mui.alert('您无权访问', function () {
          then.$router.push({ name: 'index' })
        })
      })
    },
    //添加
    add () {
      var then = this
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      var add = '?'
      if (this.fund_detail_id == '') {
        mui.toast('类别选择不能为空')
        check = false
        return false
      }
      if (this.fund_detail_id === '个人') {
        add+='fund_name='+this.detailed+'&fund_debtor='+this.listRelevant
      }else if (this.fund_detail_id === '公司') {
        add+='fund_name='+this.slim+'&customer_id='+this.site
      }
      /*金额*/
      if (this.money == '') {
        mui.toast('金额不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.money)) {
        mui.toast('金额只能为纯数字')
        check = false
        return false
      }
      // 转入
      if (this.bank_id == '') {
        mui.toast('转入账户不能为空')
        check = false
        return false
      } else {
        for (var index in this.chuXu) {
          if (parseInt(this.chuXu[index].bank_id) === this.bank_out_id) {
            if (parseInt(this.chuXu[index].bank_money) < parseInt(this.bank_deal_money)) {
              mui.toast('卡内余额不能大于交易余额')
              check = false
              return false
            }
          } else {
            if (parseInt(this.addMoneys) > parseInt(this.chuXu[index].bank_out_id)) {
              mui.toast('实际转账不能大于信用卡额度')
              check = false
              return false
            }
          }
        }
      }
      add+='&money='+this.money+'&fund_text='+this.clearBei+'&bank_id='+this.bank_id+'&shiji_money='+this.money_get
      if (this.checkbox === true) {
        this.axios.post('https://formattingclub.com/YiNuoLogin/fund/Add_out_enter' + add).then(res => {
          var id = ''
          for (var index in this.listProjet) {
            if (this.listProjet[index].customer_id === this.site) {
              id = this.listProjet[index].customer_name
            }
          }
          mui.alert(res.data.data, function () {
            then.$router.push({
              name: 'income_receive',
              query: {
                site: id,
                listRelevant: then.listRelevant,
                money: then.money_get,
                bank_id: then.bank_id,
                clearBei:then.clearBei
              }
            })
          })
        })
      } else {
        this.axios.post('https://formattingclub.com/YiNuoLogin/fund/Add_out_enter' + add).then(res => {
          if (res.data.data === '录入成功') {
            mui.alert('录入成功', function () {
              then.$router.go(0)
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
form{margin-bottom: 12px;}
/*form字体*/
select{font-size: 15px!important;}
/*第二个form*/
.row-label{display: flex;}
.row-label label:nth-child(1) {
  flex: 1;
}
.row-label label:nth-child(2) {
  width: 20%;
  flex: 3;
}
.row-label label{width: 20%;}
.row-label label:nth-child(2)
,.row-label label:nth-child(3)
,.row-label label:nth-child(4),.row-label label:nth-child(5){padding-top: 0;padding-left: 1px;}
.row-label label input{padding: 0;}
/*checkbox*/
.checkbox label{width: 50%!important;text-align: right}
.checkbox input{width: 46%;text-align: right}
/*按钮*/
.mui-checkbox.mui-left label, .mui-radio.mui-left label{width: 37%}
.form-btn{background-color: #EFEFF4!important;margin-top: 0;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*table*/
.all{display: flex;margin-bottom: 12px;padding-left: 10px;}
.saving,.all-money{flex: 1;font-weight: bold}
.all-money{flex: 5;text-align: left;}
.all-saving{width: 100%;font-size: 15px;margin-bottom: 50px;}
.all-saving tr:nth-child(1),.blaner tr:nth-child(1){background-color: #DADADA;line-height: 34px;}
.all-saving tr td:nth-child(1),.blaner tr td:nth-child(1){padding-left: 11px}
.all-saving tr td{padding-left: 10px;border-bottom: 1px solid #DADADA}
.all-saving tr td input,.blaner tr td input{height: 35px!important;font-size: 14px;padding: 0!important;background-color: transparent!important;border: 0!important;border-bottom: 1px solid #454545!important;margin-bottom: 0!important;}
/*第二个表单*/
table{font-size: 15px;width: 100%}
</style>
