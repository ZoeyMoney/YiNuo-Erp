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
      <div class="mui-content one-img">
        <div class="customer">
          <h2>支出</h2>
          <p>/Expense</p>
        </div>
        <div class="mui-img">
          <div>￥{{allTotal}}</div>
        </div>
      </div>
      <!--收入记录-->
      <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight" :swipe-options="{direction: 'horizontal'}">
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row site_projet" v-if="site_projet">
            <label>工地名称</label>
<!--            <input type="text" v-model="site" @click="siteChange" placeholder="请选择">-->
            <input type="text" v-model="site" placeholder="请输入工地名称" @keyup="siteWhite(site)"/>
            <ul class="mui-table-view" v-show="isshow">
              <li class="mui-table-view-cell" v-for="(item,i) in site_projet_name_search" :key="i" @click="siteItem(item.customer_name,item.customer_id)">{{item.customer_name}}</li>
            </ul>
          </div>
          <div class="mui-input-row">
            <label>收款人</label>
<!--            <input type="text" class="mui-input-clear" v-model="fund_person" @click="relecant" placeholder="请输入收款人">-->
            <input type="text" v-model="fund_person" placeholder="请输入相关人" @keyup="listRelevantWhite(fund_person)"/>
            <ul class="mui-table-view" v-show="releshow">
              <li class="mui-table-view-cell" v-for="(item,i) in relelist" :key="i" @click="releItem(item.fund_person,item.fund_person_id)">{{item.fund_person}}</li>
            </ul>
          </div>
          <div class="mui-input-row radio-left">
            <label>类别选择</label>
            <div class="mui-input-row mui-radio mui-left" v-for="(item,i) in list_fund_name_type" :key="i">
              <label>{{item.fund_name_type}}</label>
              <input name="radio1" type="radio" v-model="fund_detail_id" :value="item.fund_name_type" @change="fund_deId(fund_detail_id)">
            </div>
          </div>
          <div class="mui-input-row">
            <label>款项名称</label>
            <select name="" v-model="detailed"  :class="{select:detailed==='',selectBlack:detailed!==''}"  @change="list_fund_nameas(detailed)">
              <option value="" selected="selected">请选择</option>
              <option v-for="(item,i) in list_fund_names" :value="item.fund_names" v-if="cotrProjet" :key="i">{{item.fund_names}}</option>
              <option v-for="(item,i) in list_fund_names" :value="item.fund_name_id" v-if="idProjet" :key="i">{{item.fund_names}}</option>
            </select>
          </div>
          <div class="mui-input-row" v-if="category">
            <label>款项详细</label>
            <select name="" v-model="slim" :class="{select:slim==='',selectBlack:slim!==''}" >
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_fund_name" :value="item.fund_name_id">{{item.fund_name}}</option>
            </select>
          </div>
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
              <input type="text" v-model="mongey_bank" placeholder="请选择下列银行卡" disabled="disabled">
              <!--<select  v-model="mongey_bank_id" name="" id="card" :class="{select:mongey_bank_id==='',selectBlack:mongey_bank_id!==''}">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in bank_card" :value="item.bank_id">
                  <div>{{item.bank_person}}</div>&nbsp;&nbsp;&nbsp;
                  <div>{{item.bank_bank}}</div>
                </option>
              </select>-->
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
          <div class="sc">B/C</div>
          <div class="saving"> 储蓄卡</div>
          <div class="all-money">￥{{chuXuKa}}</div>
        </div>
        <table border="0" class="tables">
          <tr>
            <th><span :style="lefta"></span></th>
            <th><span>开户行</span></th>
            <th><span>户主</span></th>
            <th><span>余额</span></th>
          </tr>
          <tr v-for="item in chuXu">
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
          <div class="all-money">￥{{XinYongKa}}</div>
        </div>
        <table class="table-xin">
          <tr>
            <th><span :style="lefta"></span></th>
            <th><span>开户行</span></th>
            <th><span>户主</span></th>
            <th><span>余额</span></th>
            <th><span>额度</span></th>
          </tr>
          <tr v-for="item in xinY">
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
            <td><span @click="msgCu(item.bank_bank,item.bank_person,item.number)">￥{{item.bank_money}}</span></td>
            <td><span>￥{{item.bank_limit}}</span></td>
          </tr>
        </table>
      </div>
      </v-touch>
    </div>
</template>

<script>
export default {
  name: 'expenditure',
  data () {
    return {
      imgUrl_loading: false,
      category: true,
      cotrProjet: false,
      idProjet: true,
      relevant_people: true, // 相关人
      site_projet: true, // 工地名称
      dataValue: new Date().toString(),
      bank_id: 0, // id
      mongey_bank:'',//银行卡name
      mongey_bank_id: '',
      list_fund_name_type: [], // 个人公司
      detailed: '', // 类别详细
      list_fund_names: [], // 红包工资
      slim: '', // 类别详细
      list_fund_name: [], // 设计费
      listRelevant: '', // 相关人下拉
      site: '', // 工地
      bank_money: '', // 金额
      account: '', // 账户
      clearBei: '', // 备注
      checkbox: '', // 复选框
      fund_person: '', // 收款人
      fund_detail_id: '公司',		// 工程款
      bank_card: '', // 银行卡
      chuXu: '',	// 储蓄卡
      xinY: '',	// 信用卡
      allTotal: '', // 合计金额
      chuXuKa: '', // 储蓄卡总额
      XinYongKa: '', // 储蓄卡总额
      fund_name_id: '', // 类别详情id
      list_fund_name_type: '', // 一级查询
      list_fund_names: '', // 二级查询
      list_fund_name: '', // 三级查询
      site_projet_name:'',//工地数据
      site_projet_name_search:[],
      relefor:'',//相关人数据
      relelist:[],//相关人数据
      releshow:false,//相关人列表
      test_id: '',
      isshow:false,
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
      list_bank_card_person: [
        { text: '胡永生' },
        { text: '邱梅' }
      ]
    }
  },

  methods: {
    // 一级查询
    fund_deId (id) {
      this.fund_nameso = id
      this.axios.get('/fund/Select_three_fund_name' + '?fund_type=1&fund_stale=1&fund_name_type=' + this.fund_detail_id).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.fund_detail_id === '个人') {
          this.category = false
          this.site_projet = false
          this.relevant_people = true
          this.idProjet = true
          this.cotrProjet = false
        } else if (this.fund_detail_id === '公司') {
          this.category = true
          this.cotrProjet = true
          this.idProjet = false
          this.relevant_people = false
          this.site_projet = true
        }
      })
    },
    // 二级查询
    list_fund_nameas (id) {
      this.fund_name_id = id
      this.axios.get('/fund/Select_three_fund_name' + '?fund_type=1&fund_stale=1&fund_name_type=' + this.fund_detail_id + '&fund_names=' + id).then(res => {
        this.list_fund_name_type = res.data.fund_name_type
        this.list_fund_names = res.data.fund_names
        this.list_fund_name = res.data.fund_name
        if (this.detailed === '现金周转') {
          this.site_projet = false
          this.relevant_people = true
        } else if (this.detailed === '工程') {
          this.site_projet = true
          this.relevant_people = false
        }
      })
    },
    // 左滑动
    onSwipeLeft: function () {
      this.$router.push({ name: 'income' })
    },
    // 右滑动
    onSwipeRight: function () {
      this.$router.push({ name: 'transfer_money' })
    },
    //银行卡传送
    bankClick(name,id,prosen){
      var bank = name + ' ' + prosen
      this.mongey_bank = bank
      this.mongey_bank_id = id
    },
    //搜索
    msgCu (id, person, number) {
      this.imgUrl_loading = true
      var add = '?' + '&bank_person=' + person + '&bank_bank=' + id
      if (number !== undefined) {
        add += '&bank_number=' + number
      }
      var transfer = 'transfer'
      this.axios.get('/fund/select_detail' + add).then(res => {
        if (res.status === 200){
          window.transfer = res.data.list_moey
          this.$router.push({ path: 'running_money', query: { transfer: transfer } })
        }
        // console.log(res.data.list_moey)
      })
    },
    //工地
    siteData(){
      this.axios.get('/SelectAllCustomer' + '?Customer_A=1' + '&Customer_B=2' + '&Customer_C=3' + '&Customer_D=4').then(res => {
        if (res.status ===200){
          this.site_projet_name = res.data.data
        }
      })
    },
    //相关人
    person_all(){
      this.axios.get('/fund/Select_fund_person'+'?fund_person_state_A=1').then(res=>{
        if (res.status ===200){
          this.relefor = res.data.data
        }
      })
    },
    //工地键盘监听
    siteWhite(val){
      if (val.length ==0){
        this.isshow = false;
      }else{
        this.isshow = true;
        var then =this
        var citys = [];
        if (this.site_projet_name !=''){
          this.site_projet_name.map(function (item) {
            if (item.customer_name.search(then.site) != -1){
              citys.push(item)
            }
          })
          this.site_projet_name_search = citys
        }
      }
    },
    //相关人键盘监听
    listRelevantWhite(val){
      if (val.length ==0){
        this.releshow = false;
      }else{
        this.releshow = true;
        var then =this
        var citys = [];
        if (this.relefor !=''){
          this.relefor.map(function (item) {
            if (item.fund_person.search(then.fund_person) != -1){
              citys.push(item)
            }
          })
          this.relelist = citys
        }
      }
    },
    //工地传送
    siteItem(val,id){
      this.site = val;
      this.test_id = id;
      this.isshow = false;
    },
    //相关人传送
    releItem(val,id){
      this.fund_person = val;
      this.fund_people_name = id;
      this.releshow = false;
    },
    /* 保存 */
    add () {
      var then = this
      var check = true
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      var add = '?'
      // 第一选择
      if (this.fund_detail_id == '') {
        mui.toast('类别名称不能为空')
        check = false
        return false
      }
      if (this.site !== undefined && this.test_id !== undefined) {
        add += 'customer_id=' + this.test_id
      }
      if (this.fund_person !== undefined && this.fund_people_name !== undefined) {
        add += '&fund_person=' + this.fund_people_name
      }
      if (this.fund_detail_id === '个人') {
        add += '&fund_name=' + this.detailed/* +'&fund_debtor='+this.listRelevant */
      } else if (this.fund_detail_id === '公司') {
        add += '&fund_name=' + this.slim
      }
      // 金额
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
      // 转账费率
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
      /* for (var index in this.bank_card) {
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
      } */
      var dt = new Date(this.dataValue)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      var t = dt.getHours()
      var MM = dt.getMinutes()
      var s = dt.getSeconds()
      var dd = `${y}-${m}-${d} ${t}:${MM}:${s}`
      this.imgUrl_loading = true
      add += '&money=' + (-this.bank_money) + '&fund_text=' + this.clearBei + '&bank_id=' + this.mongey_bank_id + '&shiji_money=' + (-this.bank_money) + '&date=' + dd
      if (this.checkbox === true) {
        this.axios.post('/fund/Add_out_enter' + add).then(res => {
          var id = ''
          for (var index in this.listProjet) {
            if (this.listProjet[index].customer_id === this.site) {
              id = this.listProjet[index].customer_name
            }
          }
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert(res.data.data, function () {
              then.$router.push({ name: 'expenditure_receive', query: { money: then.bank_money } })
            })
          }
        })
      } else {
        this.axios.post('/fund/Add_out_enter' + add).then(res => {
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
    }
  },
  created () {
    this.imgUrl_loading = true
    //工地
    this.siteData()
    //相关人
    this.person_all()
    /* table */
    this.axios.get('/fund/Select_three_fund_name' + '?fund_type=1&fund_stale=1').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.list_fund_name_type = res.data.fund_name_type
      }
    })
    /* 银行卡 */
    this.axios.get('/fund/select_bank').then(res => {
      this.bank_card = res.data
      var chu = []
      var xin = []
      var m = 0
      var y = 0
      var all = 0// 合计储蓄卡信用卡总额
      for (var index in res.data) {
        if (res.data[index].bank_type === '储蓄卡') {
          m += res.data[index].bank_money // 储蓄卡总额
          chu.push(res.data[index])
        } else {
          if (res.data[index].bank_type === '信用卡') {
            if (res.data[index].bank_money > 0) {
              y += res.data[index].bank_money
            }
            xin.push(res.data[index])
          }
        }
      }
      this.chuXu = chu
      this.xinY = xin
      this.chuXuKa = Math.floor(m * 100) / 100
      this.XinYongKa = Math.floor(y * 100) / 100
      all += this.chuXuKa + this.XinYongKa
      this.allTotal = Math.floor(all * 100) / 100
    })
    /*this.site = window.test
    this.test_id = window.test_id
    this.fund_person = window.fund_people
    this.fund_people_name = window.fund_people_name*/

    this.fund_deId()
    this.list_fund_nameas()
  },
}
</script>

<style scoped>
@import "../css/public.css";
input::-webkit-input-placeholder{color: #6e6e6e}
/*form字体*/
select{color: #6e6e6e}
.selectBlack{color: black}
form div select{font-size: 15px!important;}
.customer{flex: 3;}
.one-img{display: flex;white-space: nowrap}
.mui-img{width: 100%;padding-top: 10%;padding-right: 31px;font-size: 17px;color: black;font-weight: bold;flex: 1;}
.mui-img a img{width: 100%;}
/*第二个form*/
.row-label label:nth-child(2)
,.row-label label:nth-child(3)
,.row-label label:nth-child(4),.row-label label:nth-child(5){padding-top: 0;padding-left: 1px;}
.row-label label input{padding: 0;}
/*消失*/
.detailed{display: none}
.radio-left{display: flex}
/*多选框*/
.mui-checkbox.mui-left label, .mui-radio.mui-left label{width: 100%;padding-left: 0;margin-right: 27px;white-space: nowrap;}
/*按钮*/
.form-btn{background-color: #EFEFF4!important;margin-top: 20px;padding-bottom: 0;margin-bottom: 20px}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 34px!important;}
/*form底部栏*/
.checkbox label{width: 50%!important;text-align: right}
.checkbox input{width: 46%;text-align: right}
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
/*工地选择*/
.mui-table-view{position: absolute;z-index: 1000;top: 38px;left: 0;right: 0;height: 345px;overflow: auto;font-size: 15px;line-height: 15px}
.mui-input-row{overflow: inherit;}

/*第二个表单*/
table{font-size: 15px;width: 100%;white-space: nowrap}
.blaner tr td{padding-left: 10px;border-bottom: 1px solid #dadada;line-height: 28px}
</style>
