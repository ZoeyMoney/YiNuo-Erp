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
           <input type="text" v-model="bank_out" placeholder="请选择下列银行卡" disabled="disabled">
            <!-- <label>
              <select  v-model="bank_out_id" name="" id="enter" :class="{select:bank_out_id==='',selectBlack:bank_out_id!==''}" >
                <option value="" selected="selected">请选择</option>
                <option v-for="(item,index) in cead" :value="item.bank_id" :key="index">
                  <div>{{item.bank_person}}</div>&nbsp;&nbsp;&nbsp;
                  <div>{{item.bank_bank}}</div>
                </option>
              </select>
            </label> -->
          </div>
          <div class="mui-input-row row-label">
            <label>转入</label>
           <input type="text" v-model="bank_enter" placeholder="请选择下列银行卡" disabled="disabled">
            <!-- <label>
              <select  v-model="bank_enter_id" id="out" :class="{select:bank_enter_id==='',selectBlack:bank_enter_id!==''}" >
                <option value="" selected="selected">请选择</option>
                <option v-for="(item,index) in cead" :value="item.bank_id" :key="index">
                  <div>{{item.bank_person}}</div>&nbsp;&nbsp;&nbsp;
                  <div>{{item.bank_bank}}</div>
                </option>
              </select>
            </label> -->
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
              <option v-for="(item,index) in listD" :value="item.Tnumber" :key="index">{{item.Tnumber}}%</option>
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
          <div class="sc">B/C</div>
          <div class="saving"> 储蓄卡</div>
          <div class="all-money">￥{{addMoney}}</div>
        </div>
        <table border="0" class="tables">
          <tr>
            <th><span :style="lefta"></span></th>
            <th><span>开户行</span></th>
            <th><span>户主</span></th>
            <th><span>余额</span></th>
          </tr>
          <tr v-for="(item,index) in chuxuka" :key="index">
            <td>
              <span><img :src="jianshe" v-if="item.bank_bank == '建设银行'"></span>
              <span><img :src="gonghang" v-if="item.bank_bank == '工商银行'"></span>
              <span><img :src="xianjinmong" v-if="item.bank_bank == '现金'"></span>
              <span><img :src="weixin" v-if="item.bank_bank == '微信'"></span>
              <span><img :src="zhifubao" v-if="item.bank_bank == '支付宝'"></span>
              <span><img :src="nongcun" v-if="item.bank_bank == '农村信用社'"></span>
              <span><img :src="baoshang" v-if="item.bank_bank == '包商银行'"></span>
              <span><img :src="zhongyuan" v-if="item.bank_bank == '中原银行'"></span>
              <span><img :src="nongye" v-if="item.bank_bank == '农业银行'"></span>
              <span><img :src="zhongguo" v-if="item.bank_bank == '中国银行'"></span>
            </td>
            <td><span @click="bankClick(item.bank_bank,item.bank_id,item.bank_person)">{{item.bank_bank}}</span></td>
            <td><span>{{item.bank_person}}</span></td>
            <td><span @click="msgCu(item.bank_bank,item.bank_person,item.number)">￥{{item.bank_money}}</span></td>
          </tr>
        </table>
        <div class="mui-content all">
          <div class="sc cc">C/C</div>
          <div class="saving">信用卡</div>
          <div class="all-money">￥{{xinMoney}}</div>
        </div>
        <table class="table-xin">
          <tr>
            <th><span :style="lefta"></span></th>
            <th><span>开户行</span></th>
            <th><span>户主</span></th>
            <th><span>余额</span></th>
            <th><span>额度</span></th>
          </tr>
          <tr v-for="(item,index) in xinyong" :key="index">
            <td>
              <span><img :src="minsheng" v-if="item.bank_bank == '民生信用'"></span>
              <span><img :src="jianshe" v-if="item.bank_bank == '建设信用'"></span>
              <span><img :src="jiaotong" v-if="item.bank_bank == '交通信用'"></span>
              <span><img :src="zhonghang" v-if="item.bank_bank == '中行信用'"></span>
              <span><img :src="mayi" v-if="item.bank_bank == '蚂蚁花呗'"></span>
              <span><img :src="huaxiayinhang" v-if="item.bank_bank == '华夏信用'"></span>
              <span><img :src="pufa" v-if="item.bank_bank == '浦发信用'"></span>
              <span><img :src="shanghai" v-if="item.bank_bank == '上海信用'"></span>
              <span><img :src="zhaoshang" v-if="item.bank_bank == '招商信用'"></span>
              <span><img :src="nongye" v-if="item.bank_bank == '农业信用'"></span>
              <span><img :src="pingan" v-if="item.bank_bank == '平安信用'"></span>
              <span><img :src="xingye" v-if="item.bank_bank == '兴业信用'"></span>
              <span><img :src="gonghang" v-if="item.bank_bank == '工商信用'"></span>
              <span><img :src="zhongyuan" v-if="item.bank_bank == '中原信用'"></span>
            </td>
            <td><span @click="bankClick(item.bank_bank,item.bank_id,item.bank_person)">{{item.bank_bank}}</span></td>
            <td><span>{{item.bank_person}}</span></td>
            <td><span>￥{{item.bank_money}}</span></td>
            <td><span @click="msgCu(item.bank_bank,item.bank_person,item.number)">￥{{item.bank_limit}}</span></td>
          </tr>
        </table>
      </v-touch>
    </div>
</template>

<script>
import Running_money from './running_money'
export default {
  name: 'transfer_money',
  components: { Running_money },
  data () {
    return {
      bank_id: 0,
      dataValue1: new Date(),
      imgUrl_loading: false,
      bank_deal_money: '', // 金额
      bank_deal_rate: '', // 转账费率
      bank_enter:'',//银行卡name
      bank_enter_id: '', // 转出id
      bank_out:'',//银行卡name
      bank_out_id: '', // 转入id
      chuxuka: '', // 储蓄卡
      xinyong: '', // 信用卡
      bank_money: '', // 余额
      addMoney: '', // 储蓄卡总额
      xinMoney: '', // 信用卡总额
      allTotal: '', // 合计金额
      all_money: '',
      cead: '', // 银行卡
      bank_limit: '', // 额度
      numerone:0,//判断偶数奇数
      bank: '',
      //银行卡
      baoshang:require('../image/baoshang.png'),
      baocun:require('../image/baocun.png'),
      gonghang:require('../image/gonghang.png'),
      huaxiayinhang:require('../image/huaxiayinhang.png'),
      jianshe:require('../image/jianshe.png'),
      jiaotong:require('../image/jiaotong.png'),
      mayi:require('../image/mayi.png'),
      minsheng:require('../image/minsheng.png'),
      nongcun:require('../image/nongcun.png'),
      nonghang:require('../image/nonghang.png'),
      pingan:require('../image/pingan.png'),
      pufa:require('../image/pufa.png'),
      shanghai:require('../image/shanghai.png'),
      weixin:require('../image/weixin.png'),
      xingye:require('../image/xingye.png'),
      zhaoshang:require('../image/zhaoshang.png'),
      zhifubao:require('../image/zhifubao.png'),
      zhonghang:require('../image/zhonghang.png'),
      zhongyuan:require('../image/zhongyuan.png'),
      xianjinmong:require('../image/xianjinmong.png'),
      zhongguo:require('../image/zhonguo.png'),
      nongye:require('../image/nongye.png'),
      lefta: {
        paddingLeft: '10px'
      },
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
    //银行卡传送
    bankClick(name,id,prosen){
      this.numerone++
      var ss = name+' ' + prosen
      if(this.numerone %2== 0){
        this.bank_enter = ss
        this.bank_enter_id = id
      }else{
       this.bank_out = ss
      this.bank_out_id = id
      }
    },
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
  .all{display: flex;margin-bottom: 12px;margin-left: 15px}
  .saving,.all-money{font-weight: bold}
  .all-money{flex: 5;text-align: left;}
  .sc{font-weight: 600;width: 9%}
  .saving{width: 20%}
  .tables,.table-xin{width:100%;font-size: 14px;text-align: left;white-space: nowrap;margin-bottom: 75px}
  .tables tr th,.table-xin tr th{background-color: #dadada;line-height: 27px}
  .tables tr th:nth-child(1){width: 12%;min-width: 40px}
  .tables tr th:nth-child(2),table tr th:nth-child(3){min-width: 55px;width: 16%}
  .tables tr th:nth-child(4){min-width: 30px;width: 45%}
  .tables tr td:nth-child(1) span,.table-xin tr td:nth-child(1) span{display: block;overflow: hidden;width: 20px;text-overflow: ellipsis;margin-left: 15px;line-height: 13px}
  .tables tr td:nth-child(1) span img,.table-xin tr td:nth-child(1) span img{width: 100%}
  .tables tr,.table-xin tr{border-bottom: 1px solid #dadada;line-height: 28px}
  /*table-xin*/
  .table-xin tr th:nth-child(1){width: 12%}
  .table-xin tr th:nth-child(2){width: 20%}
  .table-xin tr th:nth-child(3){width: 15%}
  .table-xin tr th:nth-child(4){width: 21%}
  .table-xin tr th:nth-child(5){width: 22%}


  /*第二个表单*/
  table {font-size: 15px;}
  table tr:nth-child(1){background-color: #DADADA;text-align: left;padding-left: 10px;line-height: 32px;}
  .blaner tr td {padding-left: 11px;border-bottom: 1px solid #DADADA}
  /*加粗*/
  .saving,.all-money{font-weight: bold}
  select{font-size: 15px!important;}
  #enter,#out{font-size: 16px!important;}

</style>
