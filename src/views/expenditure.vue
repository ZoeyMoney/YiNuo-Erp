<template>
    <div class="expenditure">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">支出</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
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
          <div class="mui-input-row">
            <label>类别选择</label>
            <select name="" v-model="fund_detail_id" id="dateil">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in selectEnterFundName" :value="item.fund_id">{{item.fund_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>项目名称</label>
            <select name="" v-model="fund_detail_transaction_customer_id" id="projet">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in projet" :value="item.customer_id">{{item.customer_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>债务人</label>
            <input type="text" class="mui-input-clear" id="debtval" v-model="debtVal" placeholder="债务人">
          </div>
          <div class="mui-input-row">
            <label>收款备注</label>
            <input type="text" class="mui-input-clear" id="clearBei" placeholder="备注" v-model="fund_detail_transaction_type">
          </div>
        </form>
        <form class="mui-input-group form-check">
          <div class="mui-input-row">
            <label>调取应付</label>
            <select name="" v-model="retrievalVal" id="retrieval">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in retrieval" :value="item.fund_details_batch">{{item.fund_details_batch}}</option>
            </select>
          </div>
        </form>
        <!--第二个form-->
        <form class="mui-input-group form-check">
          <div class="mui-input-row">
            <label>共有</label>
            <input type="text" class="mui-input-clear" id="all-money" placeholder="如：900,000" v-model="bank_money">
          </div>
          <div class="mui-input-row">
            <label>转账费率</label>
            <select name="" id="rate" v-model="bank_deal_rate">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listD" :value="item.Tnumber">{{item.Tnumber}}%</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>实际转账</label>
            <input type="text" class="mui-input-clear" placeholder="如：6,000" v-model="addMoney" disabled="disabled">
          </div>
          <div class="mui-input-row row-label">
            <label>转出账户</label>
            <label style="padding: 0;width: 70%">
              <select name="" v-model="bank_id" id="card">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in bank_card" :value="item.bank_id">
                  <div>{{item.bank_bank}}</div>
                  <div>{{item.bank_person}}</div>
                  <div>{{item.bank_number}}</div>
                  <div>￥{{item.bank_money}}</div>
                </option>
              </select>
            </label>
          </div>
          <div class="mui-input-row form-btn">
            <button type="button" id="btn-hrem" class="mui-btn mui-btn-blue" @click="btnHrem">转为应收</button>
            <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="add">Transfers</button>
          </div>
        </form>
        <!--table-->
        <div class="mui-content all">
          <div class="saving">储蓄卡</div>
          <div class="all-money">￥{{chuXuKa}}</div>
        </div>
        <table class="all-saving" border="0" cellspacing="" cellpadding="">
          <tr>
            <td style="width: 22%">开户行</td>
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
          <div class="saving">信用</div>
          <div class="all-money">￥{{XinYongKa}}</div>
        </div>
        <table class="blaner" border="0" cellspacing="" cellpadding="">
          <tr>
            <td style="width: 21%">开户行</td>
            <td style="width: 15%">户主</td>
            <td style="width: 15%">尾号</td>
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
  name: 'expenditure',
  data () {
    return {
      time: new Date(),
      fund_detail_transaction_customer_id: '', // 项目名称model
      projet: '',	// 数据获取项目名称
      fund_detail_id: '', // 类别选择 model
      selectEnterFundName: '', // 获取类别选择
      retrievalVal: '', // 调取应收model
      retrieval: '',	// 数据获取调取应收
      debtVal: '', // 债务人model
      debt: '', // 数据债务人
      fund_detail_transaction_type: '', // 收款备注
      bank_money: '', // 余额
      bank_deal_rate: '', // 转账费率
      bank_id: '', // 转出model
      bank_card: '', // 数据转出
      chuXuKa: '', // 储蓄卡总额
      chuXu: '', // 数据储蓄卡
      XinYongKa: '', // 信用卡总额
      xinY: '', // 数据信用卡
      listD: [
        { Tnumber: 0.6 },
        { Tnumber: 0.55 }
      ]
    }
  },
  created () {
    /* 项目名称 */
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer').then(res => {
      this.projet = res.data
    })
    /* 类别选择 */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/selectEnterFundName').then(res => {
      this.selectEnterFundName = res.data
    })
    /* 调取应收 */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_Out_Fund_detailsName').then(res => {
      this.retrieval = res.data
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
          var n = res.data[index].bank_number.slice(8, 12) // 截取尾号后4位
          m += res.data[index].bank_money // 储蓄卡总额
          res.data[index].bank_number = n
          chu.push(res.data[index])
        } else {
          if (res.data[index].bank_type === '信用卡') {
            var n = res.data[index].bank_number.slice(8, 12)	// 截取尾号后4位
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
  computed: {
    addMoney () {
      var a = this.bank_money - this.bank_money * this.bank_deal_rate / 100
      var b = Math.floor(a * 100) / 100
      return b
    }
  },
  methods: {
    /* 保存 */
    add () {
      var then = this
      var projet = document.getElementById('projet').value	// 项目名称
      var dateil = document.getElementById('dateil').value	// 类别选择
      var retrieval = document.getElementById('retrieval').value		// 调取应收
      var debtval = document.getElementById('debtval').value		// 债务人
      var clearBei = document.getElementById('clearBei').value	// 收款备注
      var allMoney = document.getElementById('all-money').value	// 共有
      var card = document.getElementById('card').value		// 转出
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      // 项目名称
      if (projet == '') {
        mui.toast('项目名称不能为空')
        check = false
        return false
      }
      // 类别选择
      if (dateil == '') {
        mui.toast('类别选择不能为空')
        check = false
        return false
      }
      // 调取应收
      if (retrieval == '') {
        mui.toast('调取应收不能为空')
        check = false
        return false
      }
      // 债务人
      if (debtval == '') {
        mui.toast('债务人不能为空')
        check = false
        return false
      }
      if (!nameReg.test(debtval)) {
        mui.toast('债务人格式错误')
        check = false
        return false
      }
      // 收款备注
      if (clearBei == '') {
        mui.toast('备注不能为空')
        check = false
        return false
      }
      // 共有
      if (allMoney == '') {
        mui.toast('共有不能为空')
        check = false
        return false
      }
      if (!nuber.test(allMoney)) {
        mui.toast('共有只能输入数字')
        check = false
        return false
      }
      // 转出
      if (card == '') {
        mui.toast('转出不能为空')
        check = false
        return false
      } else {
        for (var index in this.cead) {
          if (parseInt(this.cead[index].bank_id) === this.bank_out_id) {
            if (parseInt(this.cead[index].bank_money) < parseInt(this.bank_deal_money)) {
              mui.toast('卡内余额不能大于交易余额')
              check = false
              return false
            }
          } else {
            if (parseInt(this.addMoneys) > parseInt(this.cead[index].bank_out_id)) {
              mui.toast('实际转账不能大于信用卡额度')
              check = false
              return false
            }
          }
        }
      }
      this.fund_detail_transaction_bank_id = this.bank_id

      var add = '?fund_detail_id=' + this.fund_detail_id + '&fund_detail_transaction_bank_id=' + this.fund_detail_transaction_bank_id + '&fund_detail_transaction_customer_id=' + this.fund_detail_transaction_customer_id + '&fund_detail_transaction_type=' +
          this.fund_detail_transaction_type + '&fund_detail_transaction_money=' + this.bank_money + '&this.this.bank_deal_rate=' + this.bank_deal_rate * 100
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/add_fund_detail_transaction' + add).then(res => {
        this.listAdd = res.data
        if (res.status === 200) {
          mui.alert('保存成功', function () {
            then.$router.push({ name: 'cash_flow' })
          })
        } else {
          alert('保存失败')
        }
      })
    },
    btnHrem () {
      this.$router.push({ name: 'expenditure_receive' })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
form{margin-bottom: 12px;}
/*form字体*/
form div select{font-size: 15px!important;}
/*第二个form*/
.row-label label:nth-child(2)
,.row-label label:nth-child(3)
,.row-label label:nth-child(4),.row-label label:nth-child(5){padding-top: 0;padding-left: 1px;}
.row-label label input{padding: 0;}
/*多选框*/
.form-btn button{width: 40%!important;float: none!important;}
.check{flex: 1;text-align: left!important;position: relative;right: 13px;}
.check label{white-space: nowrap;padding-left: 50px!important;}
.check input{padding-top: 2px;}
/*按钮*/
.form-btn{background-color: #EFEFF4!important;padding-top: 25px;margin-top: 0;padding-bottom: 100px;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
/*form底部栏*/
.check:after,.form-check:after{background-color: transparent!important;}
/*table*/
.all{display: flex;margin-bottom: 12px;padding-left: 10px;}
.saving{flex: 1;}
.all-money{flex: 4;text-align: left;}
.saving,.all-money{font-weight: bold}
.all-saving{width: 100%;font-size: 15px;margin-bottom: 50px;}
.all-saving tr{width: 25%!important;}
.all-saving tr:nth-child(1),.blaner tr:nth-child(1){background-color: #DADADA;line-height: 34px}
.all-saving tr td{padding-left: 10px;}
.all-saving tr td input,.blaner tr td input{height: 35px!important;font-size: 14px;padding: 0!important;background-color: transparent!important;border: 0!important;border-bottom: 1px solid #454545!important;margin-bottom: 0!important;}
/*第二个表单*/
table{font-size: 15px;width: 100%}
.blaner tr td{padding-left: 10px}
</style>
