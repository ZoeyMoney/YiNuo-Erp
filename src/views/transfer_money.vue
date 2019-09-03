<template>
    <div class="transfer_money">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'cash_flow'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">转账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--转账-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>转账</h2>
          <p>/Transfers</p>
        </div>
        <div class="mui-img">
          <div>￥{{allTotal}}</div>
        </div>
      </div>
      <!--form-->
      <v-touch v-on:swipeleft="onSwipeLeft" :swipe-options="{direction: 'horizontal'}">
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row row-label">
            <label>转出</label>
            <label>
              <select  v-model="bank_out_id" name="" id="enter" :class="{select:bank_out_id==='',selectBlack:bank_out_id!==''}" >
                <option value="" selected="selected">请选择</option>
                <option v-for="item in cead"  :value="item.bank_id">
                  <div>{{item.bank_person}}</div>&nbsp;&nbsp;&nbsp;
                  <div>{{item.bank_bank}}</div>
                </option>
              </select>
            </label>
          </div>
          <div class="mui-input-row row-label">
            <label>转入</label>
            <label>
              <select  v-model="bank_enter_id" id="out" :class="{select:bank_enter_id==='',selectBlack:bank_enter_id!==''}" >
                <option value="" selected="selected">请选择</option>
                <option v-for="item in cead"  :value="item.bank_id">
                  <div>{{item.bank_person}}</div>&nbsp;&nbsp;&nbsp;
                  <div>{{item.bank_bank}}</div>
                </option>
              </select>
            </label>
          </div>
          <data-value v-model="dataValue1"></data-value>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" class="mui-input-clear" id="total" placeholder="￥" v-model="bank_deal_money">
          </div>
          <div class="mui-input-row">
            <label>转账费率</label>
            <select name="" id="rate" v-model="bank_deal_rate"  :class="{select:bank_deal_rate==='',selectBlack:bank_deal_rate!==''}" >
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listD" :value="item.Tnumber">{{item.Tnumber}}%</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>实际转账</label>
            <input type="text" class="mui-input-clear" id="transfer" placeholder="如：6,000" v-model="addMoneys">
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
          <td>余额</td>
        </tr>
        <tr v-for="item in chuxuka" @click="msgCu(item.bank_bank,item.bank_person,item.number)">
          <td>{{item.bank_bank}}</td>
          <td>{{item.bank_person}}</td>
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
          <td>余额</td>
          <td>额度</td>
        </tr>
        <tr v-for="item in xinyong" @click="msgCu(item.bank_bank,item.bank_person,item.number)">
          <td>{{item.bank_bank}}</td>
          <td>{{item.bank_person}}</td>
          <td>￥{{item.bank_money}}</td>
          <td>￥{{item.bank_limit}}</td>
        </tr>
      </table>
      </v-touch>
    </div>
</template>

<script>
export default {
  name: 'transfer_money',
  data () {
    return {
      bank_id: 0,
      dataValue1: new Date(),
      imgUrl_loading: false,
      bank_deal_money: '', // 金额
      bank_deal_rate: '', // 转账费率
      bank_enter_id: '', // 转出
      bank_out_id: '', // 转入
      chuxuka: '', // 储蓄卡
      xinyong: '', // 信用卡
      bank_money: '', // 余额
      addMoney: '', // 储蓄卡总额
      xinMoney: '', // 信用卡总额
      allTotal: '', // 合计金额
      all_money: '',
      cead: '', // 银行卡
      bank_limit: '', // 额度
      bank: '',
      listD: [
        { Tnumber: 0.6 },
        { Tnumber: 0.55 },
        { Tnumber: 0.38 }
      ]
    }
  },
  created () {
    this.imgUrl_loading = true
    /* 储蓄卡 */
    this.axios.get('/fund/select_bank').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.bank = res.data
        var chux = []
        var xin = []
        var m = 0 // 储蓄卡总额
        var y = 0 // 信用卡总额
        var all = 0// 合计储蓄卡信用卡总额
        for (var index in this.bank) {
          if (this.bank[index].bank_type === '储蓄卡') {
            m += this.bank[index].bank_money // 算出储蓄卡总额
            chux.push(this.bank[index])
          } else {
            if (this.bank[index].bank_type === '信用卡') {
              if (this.bank[index].bank_money > 0) {
                y += this.bank[index].bank_money
              }
              xin.push(this.bank[index])
            }
          }
        }
        this.chuxuka = chux
        this.xinyong = xin
        this.addMoney = Math.floor(m * 100) / 100
        this.xinMoney = Math.floor(y * 100) / 100
        all += this.addMoney + this.xinMoney
        this.allTotal = Math.floor(all * 100) / 100
      }
    })
    /* 银行卡 */
    this.axios.get('/fund/select_bank').then(res => {
      this.cead = res.data
    })
  },

  computed: {
    /* 自动计算 */
    addMoneys: {
      get: function () {
        if (this.bank_deal_rate === '' || this.bank_deal_rate === undefined) {
          var a = this.bank_deal_money
          return a
        } else {
          var a = this.bank_deal_money - this.bank_deal_money * this.bank_deal_rate / 100
          var b = Math.floor(a * 100) / 100
          this.all_money = b
          return b
        }
      },
      set: function (value) {
        this.all_money = value
      }
    }
  },
  methods: {
    msgCu (id, person, number) {
      var add = '?' + '&bank_person=' + person + '&bank_bank=' + id
      if (number !== undefined) {
        add += '&bank_number=' + number
      }
      var transfer = 'transfer'
      this.axios.get('/fund/select_detail' + add).then(res => {
        window.transfer = res.data.list_moey
        this.$router.push({ path: 'running_money', query: { transfer: transfer } })
        // console.log(res.data.list_moey)
      })
    },
    // 左滑动
    onSwipeLeft: function () {
      this.$router.push({ name: 'expenditure' })
    },
    /* bankBank(id){
      var bank_bank={}
      for (var index in this.bank) {
        if (id === this.bank[index].bank_bank) {
        bank_bank = this.bank[index]
        }
      }
     localStorage.bank_bank = JSON.stringify(bank_bank)
      this.$router.push({name:'edit_bank',query:{bank_bank:bank_bank}})
    }, */
    go () {
      var then = this
      var check = true
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      // 金额
      if (this.bank_deal_money == '') {
        mui.toast('金额不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.bank_deal_money)) {
        mui.toast('金额有非法格式')
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
      }
      /* //金额不能大于储蓄卡金额
      for (var index in this.cead) {
        if (this.cead[index].bank_id === this.bank_out_id) {
          if (this.cead[index].bank_limit <= '0') {
            if (this.addMoneys > this.cead[index].bank_money) {
              mui.toast('金额不能大于卡内余额')
              check = false
              return false
            }
          }else{
            //金额不能大于信用卡额度
            if (this.addMoneys > this.cead[index].bank_limit) {
              mui.toast('金额不能大于信用卡额度')
              check = false
              return false
            }
          }
        }
      } */

      var dt = new Date(this.dataValue1)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      var t = dt.getHours()
      var MM = dt.getMinutes()
      var s = dt.getSeconds()
      var dd = `${y}-${m}-${d} ${t}:${MM}:${s}`
      this.imgUrl_loading = true
      var all_money = ''
      if (this.all_money === '') {
        all_money += this.bank_deal_money
      } else {
        all_money += this.all_money
      }
      var all = '?bank_deal_money=' + this.bank_deal_money + '&money=' + all_money + '&bank_enter_id=' + this.bank_enter_id + '&bank_out_id=' + this.bank_out_id + '&date=' + dd
      this.axios.get('/fund/add_bank_deal' + all).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert('转账成功', function () {
            then.$router.go(0)
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
  select,input::-webkit-input-placeholder{color: #6e6e6e}
  .selectBlack{color: black}
  .app {margin-bottom: 0;}
  .customer{flex: 3;}
  .one-img{display: flex;white-space: nowrap}
  .mui-img{width: 100%;padding-top: 10%;padding-right: 31px;font-size: 17px;color: black;font-weight: bold;flex: 1;}
  .mui-img a img{width: 100%;}
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
    margin-bottom: 20px;
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
    margin-top: 20px;
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
  }
  .blaner{width: 100%;white-space: nowrap}
  .all-saving tr {
    width: 25%!important;
  }

  .all-saving tr td{
    padding-left: 11px;
    white-space: nowrap;
    border-bottom: 1px solid #dadada;
    line-height: 28px
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
  .blaner tr td{border-bottom: 1px solid #989898;line-height: 28px}
  /*第二个表单*/
  table {font-size: 15px;}
  table tr:nth-child(1){background-color: #DADADA;text-align: left;padding-left: 10px;line-height: 32px;}
  .blaner tr td {padding-left: 11px;border-bottom: 1px solid #DADADA}
  /*加粗*/
  .saving,.all-money{font-weight: bold}
  select{font-size: 15px!important;}
  #enter,#out{font-size: 16px!important;}

</style>
