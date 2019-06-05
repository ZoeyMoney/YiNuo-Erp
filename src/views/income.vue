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
            <!--个人公司-->
            <label>类别名称</label>
            <select name="" v-model="fund_detail_id" @change="fund_deId(fund_detail_id)">
              <option v-for="item in projet" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--红包-->
          <div class="mui-input-row detailed" ref="personal">
            <label>款项名称</label>
            <select name="" v-model="detailed">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listDetailed" :value="item.Red">{{item.Red}}</option>
            </select>
          </div>
          <!--工程外借款-->
          <div class="mui-input-row the_company" ref="the_company">
            <label>款项名称</label>
            <select name="" v-model="the_company" @change="the_companyYi(the_company)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listThe_company" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--设计费工程款-->
          <div class="mui-input-row slim" ref="slim">
            <label>款项详细</label>
            <select name="" v-model="slim">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listSlim" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--外借款-->
          <div class="mui-input-row slim_wai" ref="slim_wai">
            <label>款项详细</label>
            <select name="" v-model="slim">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listSlim_wai" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row relevant_people" ref="relevant_people">
            <label>相关人</label>
            <select name="" v-model="relevant_people_dat">
              <option value="">请选择</option>
              <option v-for="item in listRelevant" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row site_projet" ref="site_projet">
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
      time: new Date(),
      bank_id: 0, // id
      projet: [// 项目名称
        {id:'1',text:'个人'},
        {id:'2',text:'公司'},
      ],
      detailed:'',  //类别详细
      listDetailed:[
        {Red:'红包'},
        {Red:'工资'},
        {Red:'还款'},
      ],
      the_company:'',
      listThe_company:[
        {text:'工程'},
        {text:'外借款'},
      ],
      listTable: '',	// 类别选择
      slim:'',  //类别详细
      listSlim:[
        {text:'设计费'},
        {text:'工程款'},
        {text:'售后维修'},
        {text:'处罚'},
        {text:'押金'},
        {text:'物品出售'}
      ],
      slim_wai:'',//外借款
      listSlim_wai:[
        {text:'银行贷款'},
        {text:'私人贷款'},
        {text:'亲戚朋友'},
        {text:'网络平台'},
        {text:'利息'},
        {text:'外部过户'},
      ],
      relevant_people_dat:'',//相关人
      listRelevant:[{text:'张三'},{text:'李四'}],
      site:'',//工地
      money:'',//金额
      account:'',//账户
      clearBei:'',//备注
      checkbox:'',//复选框
      fund_detail_id: '公司',		// 工程款
      bank_card: '', // 银行卡
      chuXu: '',	// 储蓄卡
      xinY: '',	// 信用卡
      chuXuKa: '', // 储蓄卡总额
      XinYongKa: '', // 储蓄卡总额
      fund_name:'', //类别详情id
      listProjet:'',//工地名称
    }
  },
  created () {
    /*项目名称*/
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer').then(res=>{
      this.listProjet = res.data
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
  methods: {
    fund_deId(){  //类别选择判断
      if (this.fund_detail_id === '个人') {
        //红包类型
        this.$refs['personal'].style.display = 'block'
        /*工程类型*/
        this.$refs['the_company'].style.display = 'none'
        //相关类型
        this.$refs['relevant_people'].style.display = 'block'
        //工地名称
        this.$refs['site_projet'].style.display = 'none'
        //银行
        this.$refs['slim'].style.display ='none'
        this.$refs['slim_wai'].style.display ='none'
      }else if (this.fund_detail_id === '公司') {
        this.$refs['the_company'].style.display = 'block'
        this.$refs['personal'].style.display = 'none'
        this.$refs['relevant_people'].style.display = 'none'
        this.$refs['site_projet'].style.display = 'block'
        this.$refs['site'].style.display = 'none'
      }
    },
    the_companyYi(){
      if (this.the_company === '工程') {
        this.$refs['personal'].style.display ='none'
        this.$refs['slim'].style.display = 'block'
        this.$refs['slim_wai'].style.display = 'none'
        this.$refs['site_projet'].style.display = 'block'
        this.$refs['relevant_people'].style.display = 'none'
      }else if (this.the_company === '外借款') {
        this.$refs['slim_wai'].style.display ='block'
        this.$refs['slim'].style.display = 'none'
        this.$refs['site_projet'].style.display = 'none'
        //相关类型
        this.$refs['relevant_people'].style.display = 'block'
      }
    },
    //添加
    add () {
      var then = this
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var add = '?fund_name='+this.fund_detail_id
      if (this.fund_detail_id == '') {
        mui.toast('类别选择不能为空')
        check = false
        return false
      }
      if (this.fund_detail_id === '个人') {
        /*款项名称*/
        if (this.detailed == '') {
          mui.toast('款项名称不能为空')
          check = false
          return false
        }
        add = add+'&fund_names='+this.detailed
        add = add+'&fund_debtor='+this.relevant_people_dat
      }else if (this.fund_detail_id === '公司') {
        //款项名称
        if (this.the_company == '') {
          mui.toast('款项名称不能为空')
          check = false
          return false
        }
        add = add+'&fund_names='+this.the_company
        add = add+'&fund_designation='+this.slim
        add = add+'&customer_id='+this.site
      }else if (this.the_company === '外借款') {
        //  款项详细
        if (this.slim == '') {
          mui.toast('款项详细不能为空')
          check = false
          return false
        }
        add = add+'&customer_id='+this.slim
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

      add = add+'&money='+this.money
      add = add+'&fund_text='+this.clearBei
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
        add = add+'&bank_id='+this.bank_id
      }

      if (this.checkbox === true) {
        this.axios.post('https://formattingclub.com/YiNuoLogin/fund/Add_out_enter'+add).then(res=>{
          var id = ''
          for (var index in this.listProjet) {
            if (this.listProjet[index].customer_id === this.site){
              id = this.listProjet[index].customer_name
            }
          }
          mui.alert(res.data.data,function () {
              then.$router.push({name:'income_receive',query:{site:id,relevant_people_dat:then.relevant_people_dat,money:then.money,bank_id:then.bank_id}})
          })
        })
      }else{
        this.axios.post('https://formattingclub.com/YiNuoLogin/fund/Add_out_enter'+add).then(res=>{
          if (res.data.data === '录入成功') {
            mui.alert('录入成功', function () {
              then.$router.push({ name: 'cash_flow' })
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
.detailed,.relevant_people,.site_projet,.slim,.slim_wai{display: none}
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
