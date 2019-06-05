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
            <!--个人公司-->
            <label>类别名称</label>
            <select name="" v-model="fund_detail_id" @change="fund_deId(fund_detail_id)">
              <option v-for="item in projet" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--个人私人-->
          <div class="mui-input-row detailed" ref="detailed">
            <label>款项名称</label>
            <select name="" v-model="detailed">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listDetailed" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--公司详情二级菜单-->
          <div class="mui-input-row the_company" ref="the_company">
            <label>款项名称</label>
            <select name="" v-model="the_company" @change="the_companyGe(the_company)">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listThe_company" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--工程三级菜单-->
          <div class="mui-input-row detailed" ref="slim">
            <label>款项详细</label>
            <select name="" v-model="slim">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listSlim" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--现金周转三级菜单-->
          <div class="mui-input-row detailed" ref="engineering">
            <label>款项详细</label>
            <select name="" v-model="engineering">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listEngineering" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <!--YY营业费详情-->
          <div class="mui-input-row detailed" ref="YYgo">
            <label>款项详细</label>
            <select name="" v-model="YYgo">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in listYYgo" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row detailed" ref="relevant">
            <label>相关人</label>
            <select name="" v-model="relevant_people_dat">
              <option value="">请选择</option>
              <option v-for="item in listRelevant" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row detailed" ref="site">
            <label>工地名称</label>
            <select name="" v-model="site">
              <option value="">请选择</option>
              <option v-for="item in listProjet" :value="item.customer_id">{{item.customer_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>金额</label>
            <input type="text" class="mui-input-clear" placeholder="请输入金额" v-model="bank_money">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" v-model="clearBei" placeholder="请输入备注">
          </div>
          <div class="mui-input-row row-label">
            <label>转出账户</label>
            <label style="padding: 0;width: 70%">
              <select name="" v-model="bank_id">
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
      projet:[{text:'个人'}, {text:'公司'},], //类别名称
      detailed:'',
      listDetailed:[
        {text:'洗衣'}, {text:'父母'}, {text:'孩子'}, {text:'吃饭'}, {text:'卫生'}, {text:'烟酒'}, {text:'会员'}, {text:'电话费'}, {text:'礼金'},
        {text:'娱乐'}, {text:'红包'}, {text:'健康医疗'}, {text:'化妆品'}, {text:'家庭聚餐'}, {text:'请客'}, {text:'保险'}, {text:'衣服'}, {text:'住宿'},
        {text:'住房公积金'}, {text:'加油'}, {text:'车辆维修'}, {text:'洗车'}, {text:'停车'}, {text:'车贷'}, {text:'电费'}, {text:'煤气费'}, {text:'装修'}, {text:'其他'},
        ],  //个人私人
      fund_detail_id: '公司', // 类别选择 model
      the_company:'',//公司详情
      listThe_company:[{text:'工程'},{text:'现金周转'},{text:'YY营业费'}], //二级菜单
      slim:'',//三级菜单
      listSlim:[{text:'打包费'}, {text:'人工费'}, {text:'材料费'}, {text:'招待费'}, {text:'返点'}, {text:'税款'}, {text:'招标'}, {text:'押金'}, {text:'交通'}, {text:'奖励'}, {text:'其他'},],//工程选择
      engineering:'',//现金周转
      listEngineering:[{text:'外部过户'},{text:'利息'},{text:'暂支'},{text:'还款'}],//现金周转菜单
      YYgo:'',//YY营业费
      listYYgo:[{text:'工资'}, {text:'招待费'}, {text:'福利'}, {text:'物业费'}, {text:'交通'}, {text:'加油'}, {text:'红包'}, {text:'住宿费'}, {text:'餐费'}, {text:'店面维护'},
        {text:'学习'}, {text:'物料采购'}, {text:'日常招待'}, {text:'押金'}, {text:'广告宣传'}, {text:'办公用品'}, {text:'房租'}, {text:'电费'}, {text:'电话费'}, {text:'水费'},
        {text:'养老险'}, {text:'公积金'}, {text:'保险'}, {text:'税款'}, {text:'捐款'}, {text:'其他'},],//YY详情
      relevant_people_dat:'',//相关人
      listRelevant:[{text:'张三'},{text:'李四'}],
      site:'',//工地
      clearBei:'',//备注
      bank_money: '', // 余额
      checkbox:'',//复选框
      bank_id: '', // 转出model
      bank_card: '', // 数据转出
      chuXuKa: '', // 储蓄卡总额
      chuXu: '', // 数据储蓄卡
      XinYongKa: '', // 信用卡总额
      xinY: '', // 数据信用卡
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
  computed: {

  },
  methods: {
    fund_deId(){
      if (this.fund_detail_id === '个人') {
        /*红包类型*/
        this.$refs['detailed'].style.display = 'block'
        this.$refs['the_company'].style.display = 'none'
        this.$refs['slim'].style.display = 'none'
        this.$refs['YYgo'].style.display = 'none'
        this.$refs['relevant'].style.display = 'block'
        this.$refs['engineering'].style.display = 'none'
      }else if (this.fund_detail_id === '公司') {
        /*公司*/
        this.$refs['detailed'].style.display = 'none'
        this.$refs['the_company'].style.display = 'block'
        this.$refs['relevant'].style.display = 'none'
        this.$refs['site'].style.display = 'block'
      }
    },
    the_companyGe(){
      if (this.the_company === '工程') {
        this.$refs['slim'].style.display = 'block'
        this.$refs['engineering'].style.display = 'none'
        this.$refs['YYgo'].style.display = 'none'
        this.$refs['site'].style.display = 'block'
        this.$refs['relevant'].style.display = 'none'
      }else if (this.the_company === '现金周转') {
        this.$refs['engineering'].style.display = 'block'
        this.$refs['slim'].style.display = 'none'
        this.$refs['relevant'].style.display = 'block'
        this.$refs['YYgo'].style.display = 'none'
        this.$refs['site'].style.display = 'none'
      }else if (this.the_company === 'YY营业费') {
        this.$refs['engineering'].style.display = 'none'
        this.$refs['YYgo'].style.display = 'block'
        this.$refs['slim'].style.display = 'none'
        this.$refs['site'].style.display ='none'
        this.$refs['relevant'].style.display='block'
      }
    },
    /* 保存 */
    add () {
      var then = this
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var add = '?fund_name='+this.fund_detail_id+'&fund_names='+this.the_company
      //第一选择
      if (this.fund_detail_id == '') {
        mui.toast('类别名称不能为空')
        check = false
        return false
      }
      if (this.fund_detail_id === '个人') {
        //红包
        if (this.detailed == '') {
          mui.toast('款项名称不能为空')
          check = false
          return false
        }
        add = add+'&fund_debtor='+this.relevant_people_dat
        add = add+'&fund_names='+this.detailed
      }else if (this.fund_detail_id === '公司') {
        if (this.the_company == '') {
          mui.toast('款项名称不能为空')
          check = false
          return false
        }else if (this.the_company === '工程') {
          if (this.slim == '') {
            mui.toast('款项详细不能为空')
            check = false
            return false
          }
          if (this.site == '') {
            mui.toast('工地名称不能为空')
            check = false
            return false
          }

          add = add+'&customer_id='+this.site
          add = add+'&fund_designation='+this.slim
        }else if (this.the_company === '现金周转') {
          if (this.engineering == '') {
            mui.toast('款项纤细不能为空')
            check = false
            return false
          }
          add = add+'&fund_designation='+this.engineering
          add = add+'&fund_debtor='+this.relevant_people_dat
        }else if (this.the_company === 'YY营业费') {
          if (this.YYgo == '') {
            mui.toast('款项名称不能为空')
            check = false
            return false
          }
          add = add+'&fund_designation='+this.YYgo
          add = add+'&fund_debtor='+this.relevant_people_dat
        }
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
      add = add+'&money='+~this.bank_money
      add = add+'&fund_text='+this.clearBei
      //转账费率
      if (this.bank_deal_rate == '') {
        mui.toast('转账费率不能为空')
        check = false
        return false
      }
      // 转出
      if (this.bank_id == '') {
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
          }
        }
      }
      add = add+'&bank_id='+this.bank_id
      if (this.checkbox === true) {
        this.axios.post('https://formattingclub.com/YiNuoLogin/fund/Add_out_enter'+add).then(res=>{
          var id = ''
          for (var index in this.listProjet) {
            if (this.listProjet[index].customer_id === this.site){
              id = this.listProjet[index].customer_name
            }
          }
          mui.alert(res.data.data,function () {
            then.$router.push({name:'expenditure_receive',query:{site:id,relevant_people_dat:then.relevant_people_dat,money:then.bank_money,bank_id:then.bank_id}})
          })
        })
      }else {
        this.axios.post('https://formattingclub.com/YiNuoLogin/fund/Add_out_enter'+add).then(res=>{
          if (res.data.data === '录入成功') {
            mui.alert('录入成功', function () {
              then.$router.push({ name: 'cash_flow' })
            })
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
.all-saving tr td{padding-left: 10px;}
.all-saving tr td input,.blaner tr td input{height: 35px!important;font-size: 14px;padding: 0!important;background-color: transparent!important;border: 0!important;border-bottom: 1px solid #454545!important;margin-bottom: 0!important;}
/*第二个表单*/
table{font-size: 15px;width: 100%}
.blaner tr td{padding-left: 10px}
</style>
