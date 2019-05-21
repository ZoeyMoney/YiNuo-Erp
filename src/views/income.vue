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
            <input type="text" class="mui-input-clear" v-model="debtVal" id="debtval" placeholder="债务人">
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

          <div class="mui-input-row form-btn">
            <button type="button" id="btn-href" class="mui-btn mui-btn-blue" @click="btnHref">转为应付</button>
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
    data(){
      return{
        time:new Date,
        bank_id:0,//id
        listAdd:[],//保存
        projet:'',	//项目名称
        fund_detail_transaction_customer_id:'',	//渲染主
        selectEnterFundName:'',	//类别选择
        fund_detail_id:'',		//工程款
        retrieval:'',	//调取应收
        retrievalVal:'',
        debt:'',	//债务人
        debtVal:'',
        bank_card:'',//银行卡
        fund_detail_transaction_type:'',//备注
        bank_money:'', //实际转账
        bank_deal_rate:'', //转账费率
        chuXu:'',	//储蓄卡
        xinY:'',	//信用卡
        chuXuKa:'', //储蓄卡总额
        XinYongKa:'', //储蓄卡总额
        fund_detail_transaction_bank_id:'',
        listD:[
          {Tnumber:0.6},
          {Tnumber:0.55}
        ],
      }
    },
    created () {
      /*项目名称*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer').then(res=>{
        this.projet = res.data
      })
      /*类别选择*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/selectEnterFundName').then(res=>{
        this.selectEnterFundName = res.data
      })
      /*调取应收*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_Enter_Fund_detailsName').then(res=>{
        this.retrieval = res.data
      })
      /*银行卡*/
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_bank').then(res=>{
        this.bank_card = res.data
        var chu = [];
        var xin = [];
        var m = 0;
        var y = 0;
        for (var index in res.data) {
          if (res.data[index].bank_type === '储蓄卡') {
            var n = res.data[index].bank_number.slice(8, 12) //截取尾号后4位
            m += res.data[index].bank_money //储蓄卡总额
            res.data[index].bank_number = n
            chu.push(res.data[index])
          }else{
            if (res.data[index].bank_type === '信用卡') {
              var n = res.data[index].bank_number.slice(8,12)	//截取尾号后4位
              y += res.data[index].bank_money
              res.data[index].bank_number = n
              xin.push(res.data[index])
            }
          }
        }
        this.chuXu = chu;
        this.xinY = xin;
        this.chuXuKa = m;
        this.XinYongKa = y;
      },error=>{
        var then = this
        mui.alert('您无权访问',function () {
          then.$router.push({name:'index'})
        })
      })
    },
    computed:{
      addMoney(){
        var a = this.bank_money - this.bank_money * this.bank_deal_rate / 100
        var b = Math.floor(a*100)/100
        return b;
      }
    },
    methods:{
      add(){
        var then = this
        var check = true;
        var nuber = /^[0-9]*$/; //验证数字
        var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;     //验证人的名字
        //类别选择
        if (this.fund_detail_id == '') {
          mui.toast('类别选择不能为空');
          check = false
          return false
        }
        //项目名称
        if (this.fund_detail_transaction_customer_id == '') {
          mui.toast('项目名称不能为空');
          check = false
          return false
        }
        //债务人
        if (this.debtVal == '') {
          mui.toast('债务人不能为空');
          check = false
          return false
        }
        if (!nameReg.test(this.debtVal)) {
          mui.toast('债务人格式错误');
          check = false
          return false
        }
        //调取应收
        if (this.retrievalVal == ''){
          mui.toast('调取应收不能为空');
          check = false
          return false
        }
        //共有
        if (this.bank_money == '') {
          mui.toast('共有不能为空');
          check = false
          return false
        }
        if (!nuber.test(this.bank_money)) {
          mui.toast('共有只能输入数字');
          check = false
          return false
        }
        //转入
        if (this.bank_id == '') {
          mui.toast('转出不能为空');
          check = false
          return false
        }else{
          for (var index in this.chuXu){
            if (parseInt(this.chuXu[index].bank_id) === this.bank_out_id) {
              if (parseInt(this.chuXu[index].bank_money) < parseInt(this.bank_deal_money)) {
                mui.toast('卡内余额不能大于交易余额');
                check = false;
                return false;
              }
            }else{
              if (parseInt(this.addMoneys) > parseInt(this.chuXu[index].bank_out_id)){
                mui.toast('实际转账不能大于信用卡额度');
                check = false;
                return false;
              }
            }
          }
        }

        this.fund_detail_transaction_bank_id = this.bank_id

        var add = '?fund_detail_id='+this.fund_detail_id+ '&fund_detail_transaction_bank_id='+this.fund_detail_transaction_bank_id+'&fund_detail_transaction_customer_id='+this.fund_detail_transaction_customer_id+'&fund_detail_transaction_type='+
          this.fund_detail_transaction_type+'&fund_detail_transaction_money='+this.bank_money
        this.axios.get('https://formattingclub.com/YiNuoLogin/fund/add_fund_detail_transaction'+add).then(res=>{
          this.listAdd = res.data
          if (res.status === 200) {
            mui.alert('保存成功',function () {
              then.$router.push({name:'cash_flow'})
            });
          }else{
            alert('保存失败')
          }
        })
      },
      btnHref(){
        this.$router.push({name:'income_pay'})
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
