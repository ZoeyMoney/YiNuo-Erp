<template>
    <div class="running_mongy_comment">
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
        <tr v-for="item in chuxuka" @click="msgCu(item.bank_bank,item.bank_person,item.number)">
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
          <td><span>{{item.bank_bank}}</span></td>
          <td><span>{{item.bank_person}}</span></td>
          <td><span>￥{{item.bank_money}}</span></td>
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
        <tr v-for="item in xinyong" @click="msgCu(item.bank_bank,item.bank_person,item.number)">
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
          <td><span>{{item.bank_bank}}</span></td>
          <td><span>{{item.bank_person}}</span></td>
          <td><span>￥{{item.bank_money}}</span></td>
          <td><span>￥{{item.bank_limit}}</span></td>
        </tr>
      </table>
    </div>
</template>

<script>
  export default {
    name: 'running_mongy_comment',
    data(){
      return{
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
    methods:{
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
    }
  }
</script>

<style scoped>
  /*table*/
  .all{display: flex;margin-bottom: 12px;margin-left: 15px}
  .saving,.all-money{font-weight: bold}
  .all-money{flex: 5;text-align: left;}
  .sc{font-weight: 600;width: 13%}
  .cc{width: 9%}
  .saving{width: 23%}
  .tables,.table-xin{width:100%;font-size: 14px;text-align: left;white-space: nowrap;margin-bottom: 75px}
  .tables tr th,.table-xin tr th{background-color: #dadada;line-height: 27px}
  .tables tr th:nth-child(1){width: 17%;min-width: 40px}
  .tables tr th:nth-child(2),table tr th:nth-child(3){min-width: 55px;width: 23%}
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

</style>
