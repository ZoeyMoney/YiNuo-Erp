<template>
    <div class="transfer_money">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">转账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--转账-->
      <div class="mui-content">
        <div class="customer">
          <h2>转账</h2>
          <p>/Transfers</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>共有</label>
            <input type="text" class="mui-input-clear" id="total" placeholder="如：900,000" v-model="bank_deal_money">
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
            <input type="text" class="mui-input-clear" id="transfer" placeholder="如：6,000" v-model="addMoneys" disabled="disabled">
          </div>
          <div class="mui-input-row row-label">
            <label>转出</label>
            <label>
              <select  v-model="bank_out_id" name="" id="enter">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in cead"  :value="item.bank_id">
                  <div>{{item.bank_bank}}</div>
                  <div>{{item.bank_person}}</div>
                </option>
              </select>
            </label>
          </div>
          <div class="mui-input-row row-label">
            <label>转入</label>
            <label>
              <select  v-model="bank_enter_id" id="out">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in cead"  :value="item.bank_id">
                  <div>{{item.bank_bank}}</div>
                  <div>{{item.bank_person}}</div>
                </option>
              </select>
            </label>
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">Transfers</button>
        </div>
      </div>
      <!--table-->
      <div class="mui-content all">
        <div class="saving">储蓄卡</div>
        <div class="all-money">￥{{addMoney}}</div>
      </div>
      <table class="all-saving" border="0" cellspacing="" cellpadding="">
        <tr>
          <td style="width: 21%">开户行</td>
          <td style="width: 15%">户主</td>
          <td style="width: 15%">尾号</td>
          <td>余额</td>
        </tr>
        <tr v-for="item in chuxuka">
          <td>{{item.bank_bank}}</td>
          <td>{{item.bank_person}}</td>
          <td>{{item.bank_number}}</td>
          <td>￥{{item.bank_money}}</td>
        </tr>
      </table>
      <div class="mui-content all">
        <div class="saving">信用卡</div>
        <div class="all-money">￥{{xinMoney}}</div>
      </div>
      <table class="blaner" border="0" cellspacing="" cellpadding="">
        <tr>
          <td style="width: 21%">开户行</td>
          <td style="width: 15%">户主</td>
          <td style="width: 15%">尾号</td>
          <td>余额</td>
          <td>额度</td>
        </tr>
        <tr v-for="item in xinyong">
          <td>{{item.bank_bank}}</td>
          <td>{{item.bank_person}}</td>
          <td>{{item.bank_number}}</td>
          <td>￥{{item.bank_money}}</td>
          <td>￥{{item.bank_limit}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'transfer_money',
  data () {
    return {
      bank_id: 0,
      time: new Date(),
      listAdd: '', // 银行记录
      bank_deal_money: '', // 共有
      bank_deal_rate: '', // 转账费率
      bank_enter_id: '', // 转出
      bank_out_id: '', // 转入
      chuxuka: '', // 储蓄卡
      xinyong: '', // 信用卡
      bank_number: '', // 尾号
      bank_money: '', // 余额
      addMoney: '', // 储蓄卡总额
      xinMoney: '', // 信用卡总额
      cead: '', // 银行卡
      bank_limit: '', // 额度
      listD: [
        { Tnumber: 0.6 },
        { Tnumber: 0.55 }
      ]
    }
  },
  created () {
    /* 储蓄卡 */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank').then(res => {
      this.select_bank = res.data
      var chux = []
      var xin = []
      var m = 0 // 储蓄卡总额
      var y = 0 // 信用卡总额
      for (var index in res.data) {
        if (res.data[index].bank_type === '储蓄卡') {
          var n = res.data[index].bank_number.slice(8, 12) // 截取尾号后4位
          m += res.data[index].bank_money // 算出储蓄卡总额
          res.data[index].bank_number = n
          chux.push(res.data[index])
        } else {
          var n = res.data[index].bank_number.slice(8, 12)
          y += res.data[index].bank_money
          res.data[index].bank_number = n
          xin.push(res.data[index])
        }
      }
      this.chuxuka = chux
      this.xinyong = xin
      this.addMoney = m
      this.xinMoney = y
    })
    /* 银行卡 */
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank').then(res => {
      this.cead_money = res.data
      var si = []
      for (var index in res.data) {
        var n = res.data[index].bank_number.slice(8, 12)
        res.data[index].bank_number = n
        si.push(res.data[index])
      }
      this.cead = si
    }, error => {
      var then = this
      mui.alert('您无权访问', function () {
        then.$router.push({ name: 'index' })
      })
    })
  },
  computed: {
    /* 自动计算 */
    addMoneys () {
      var a = this.bank_deal_money - this.bank_deal_money * this.bank_deal_rate / 100
      var b = Math.floor(a * 100) / 100
      return b
    },
    slelect_bank () {
      this.$http.get('https://formattingclub.com/YiNuoLogin/fund/select_bank').then(res => {
        var chux = []
        var xin = []
        var m = 0 // 储蓄卡总额
        var y = 0 // 信用卡总额
        for (var index in res.data) {
          if (res.data[index].bank_type === '储蓄卡') {
            var n = res.data[index].bank_number.slice(8, 12) // 截取尾号后4位
            m += res.data[index].bank_money // 算出储蓄卡总额
            res.data[index].bank_number = n
            chux.push(res.data[index])
          } else {
            var n = res.data[index].bank_number.slice(8, 12)
            y += res.data[index].bank_money
            res.data[index].bank_number = n
            xin.push(res.data[index])
          }
        }
        this.chuxuka = chux
        this.xinyong = xin
        this.addMoney = m
        this.xinMoney = y
      })
    }
  },
  methods: {
    go () {
      var then = this
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      // 共有
      if (this.bank_deal_money == '') {
        mui.toast('共有不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.bank_deal_money)) {
        mui.toast('共有有非法格式')
        check = false
        return false
      }
      //  转出
      if (this.bank_enter_id == '') {
        mui.toast('转出银行卡不能为空')
        check = false
        return false
      }
      //  转入
      if (this.bank_out_id == '') {
        mui.toast('转入银行卡不能为空')
        check = false
        return false
      }
      if (this.bank_enter_id === this.bank_out_id) {
        mui.toast('转入和转出银行卡不能一致')
        check = false
        return false
      } else {
        for (var index in this.cead) {
          if (parseInt(this.cead[index].bank_id) === !this.bank_out_id) {
            mui.toast('卡内余额不能大于交易余额')
            check = false
            return false
          } else {
            if (parseInt(this.addMoneys) > parseInt(this.cead[index].bank_out_id)) {
              mui.toast('实际转账不能大于信用卡额度')
              check = false
              return false
            }
          }
        }
      }
      var all = '?bank_deal_money=' + this.bank_deal_money + '&bank_deal_rate=' + parseInt(this.bank_deal_rate * 100) + '&bank_enter_id=' + this.bank_enter_id + '&bank_out_id=' + this.bank_out_id
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/add_bank_deal' + all).then(res => {
        this.listAdd = res.data
        if (res.status === 200) {
          mui.alert('转账成功', function () {
            then.$router.push({ name: 'cash_flow' })
          })
        } else {
          alert('转账失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  /*table{width: 100%;}*/
  .app {margin-bottom: 0;}
  /*转账单*/

  .mui-input-group {
    margin-bottom: 30px;
  }
  .row-label{display: flex;}
  .row-label label:nth-child(1) {
    width: 20%;
    flex: 1;
  }
  .row-label label:nth-child(2){width: 80%;flex: 3;}
  .row-label label:nth-child(2) select{font-size: 15px}
  .row-label label:nth-child(2),
  .row-label label:nth-child(3),
  .row-label label:nth-child(4),
  .row-label label:nth-child(5) {
    padding-top: 0;
    padding-left: 1px;
  }

  /*按钮*/

  .form-btn {
    background-color: #EFEFF4!important;
    margin-top: 0;
    padding-bottom: 0;
  }

  .mui-btn-blue,
  .mui-btn-black,
  input[type=submit] {
    border: 1px solid #000000;
    background-color: #000000;
    color: white;
    width: 22%;
  }

  .mui-btn-blue.mui-active:enabled,
  .mui-btn-blue:enabled:active,
  .mui-btn-primary.mui-active:enabled,
  .mui-btn-primary:enabled:active,
  input[type=submit].mui-active:enabled,
  input[type=submit]:enabled:active {
    border: 1px solid #000000;
    background-color: #000000;
  }
  /*form底部栏*/

  .check:after,
  .form-check:after {
    background-color: transparent!important;
  }
  /*table*/

  .all {
    display: flex;
    margin-bottom: 12px;
    padding-left: 10px;
  }

  .saving {
    flex: 1;
  }

  .all-money {
    flex: 4;
    text-align: left;
  }

  .all-saving{
    width: 100%;
    font-size: 15px;
    margin-bottom: 50px;
  }
  .blaner{width: 100%}
  .all-saving tr {
    width: 25%!important;
  }

  .all-saving tr td{
    padding-left: 11px;
    border-bottom: 1px solid #dadada;
  }
  .all-saving tr td input,
  .blaner tr td input {
    height: 35px!important;
    font-size: 14px;
    padding: 0!important;
    background-color: transparent!important;
    border: 0!important;
    border-bottom: 1px solid #454545!important;
    margin-bottom: 0!important;
  }
  /*第二个表单*/
  table {font-size: 15px;}
  table tr:nth-child(1){background-color: #DADADA;text-align: left;padding-left: 10px;line-height: 32px;}
  .blaner tr td {padding-left: 11px;border-bottom: 1px solid #DADADA}
  /*加粗*/
  .saving,.all-money{font-weight: bold}
  select{font-size: 15px!important;}
  #enter,#out{font-size: 16px!important;}
</style>
