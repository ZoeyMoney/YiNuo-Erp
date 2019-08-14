<template>
  <div class="payable_entry">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'payable_money'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">金额</h1>
      <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户详情-->
    <div class="mui-content">
      <div class="customer">
        <h2>金额</h2>
        <p>/Balance input</p>
      </div>
    </div>
    <!--form-->
    <div class="mui-content app">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>工地名称</label>
          <input type="text" class="mui-input-clear" v-model="customer_name" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>相关人</label>
          <input type="text" class="mui-input-clear" v-model="fund_person" disabled="disabled">
        </div>
       <!-- <div class="mui-input-row">
          <label>备注</label>
          <input type="text" class="mui-input-clear" v-model="fund_details_text" disabled="disabled">
        </div>-->
        <div class="mui-input-row">
          <label>预付时间</label>
          <el-date-picker v-model="dates" id="nodata" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div class="mui-input-row">
          <label>金额</label>
          <input type="text" class="mui-input-clear" v-model="fund_details_money">
        </div>
        <div class="mui-input-row">
          <label>级别</label>
          <select name="" v-model="level" :class="{select:level==='',selectBlack:level!==''}" >
            <option value="">请选择</option>
            <option v-for="item in list_lev" :value="item.text">{{item.text}}</option>
          </select>
        </div>
        <div class="mui-input-row dian">
          <label>情况</label>
          <div class="mui-input-row mui-radio dian-a">
            <label>是</label>
            <input name="radio1" type="radio" checked="a" value="0" v-model="ab">
          </div>
          <div class="mui-input-row mui-radio dian-a">
            <label>否</label>
            <input name="radio1" type="radio" checked="b" value="1" v-model="ab">
          </div>
        </div>
      </form>
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>银行卡</label>
          <select name="" v-model="fund_bank">
            <option value="" selected="selected">请选择</option>
            <option v-for="item in income_y" :value="item.bank_id">
              <div>{{item.bank_bank}}</div>
              <div>{{item.bank_person}}</div>
              <div>￥{{item.bank_money}}</div>
            </option>
          </select>
        </div>
        <div class="mui-input-row">
          <label>付款时间</label>
          <el-date-picker v-model="DateValue" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>
        <div class="mui-input-row">
          <label>实际转账</label>
          <input type="text" class="mui-input-clear" v-model="money" placeholder="请输入实际转账">
        </div>
        <!--<div class="mui-input-row">
          <label>情况</label>
          <input type="text" v-model="whether" v-if="whether==='0'" value="否">
          <input type="text" v-model="whether" v-if="whether==='0'" value="是">
          &lt;!&ndash;<select name="" v-model="whether" v-if="whe" :class="{select:whether==='',selectBlack:whether!==''}" >
            <option value="">请选择</option>
            <option v-for="item in list_whether" :value="item.text">{{item.text}}</option>
          </select>&ndash;&gt;
        </div>-->
        <div class="mui-input-row">
          <label>备注</label>
          <input type="text" class="mui-input-clear" v-model="fund_details_text" placeholder="请输入备注">
        </div>
      </form>
      <div class="mui-input-row mui-checkbox mui-left radio-one">
        <label>转为应付</label>
        <input name="checkbox1" type="checkbox" v-model="checkBox">
      </div>
      <div class="form-botton">
        <button type="button" class="mui-btn mui-btn-black" @click="update">修改</button>
        <button type="button" class="mui-btn mui-btn-black" @click="dele">删除</button>
        <button type="button" class="mui-btn mui-btn-black" @click="add">支出</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payable_entry',
  data () {
    return {
      imgUrl_loading:false,
      projet: '', // 项目
      checkBox: '', // 复选框
      money: '', // 实际转账
      funn_data: '', // 时间
      fund_details_id: '', // 传参ID
      fund_bank: '', // 银行卡
      income_y: '',// 银行卡
      fund_details_money:'',//金额
      fund_details_text:'',//备注
      DateValue:new Date(),//时间修改
      ab:'',
      dian:[
        {text:'是',name:'情况A'},
        {text:'否',name:'情况B'},
      ],
      level:'',//级别
      whether:'',//情况
      list_lev:[  //级别说明
        {text:'A'},
        {text:'B'},
        {text:'C'},
      ],
      list_whether:[  //情况说明
        {text:'是'},
        {text:'否'},
      ],
      dates:''
    }
  },
  created () {
    //接收应收详情数据
    // console.log(JSON.parse(localStorage.payable_entry))
    this.projet = JSON.parse(localStorage.payable_entry)
    this.customer_name = this.projet.customer_name
    this.fund_person = this.projet.fund_person
    this.fund_details_text = this.projet.fund_details_text
    this.dates = this.projet.dates
    this.fund_details_money = this.projet.fund_details_money
    this.fund_details_id = this.projet.fund_details_id
    this.level = this.projet.fund_details_level
    this.whether = this.projet.fund_details_type
    if (this.projet.fund_details_type == 1) {
      this.ab = '1'
    }else if (this.projet.fund_details_type == 0) {
      this.ab = '0'
    }
    // 银行卡
    this.axios.get('/fund/select_bank').then(res => {
      this.income_y = res.data
    })
  },
  methods: {
    //收款
    add(){
      var then = this
      var check = true
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      if (this.fund_bank == '') {
        mui.toast('银行卡不能为空')
        check = false
        return false
      }
      if (this.DateValue == '') {
        mui.toast('收款时间不能为空')
        check = false
        return false
      }
      if (this.money == '') {
        mui.toast('实际转账不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.money)) {
        mui.toast('实际转账只能为纯数字')
        check = false
        return false
      }
      this.imgUrl_loading = true
      var dt = new Date(this.DateValue)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      var t = dt.getHours();
      var MM =dt.getMinutes();
      var s = dt.getSeconds();
      var dd  = `${y}-${m}-${d} ${t}:${MM}:${s}`
      var add = '?fund_details_id=' + this.fund_details_id +'&money='+this.money*(-1)+'&fund_details_date='+dd+'&bank_id='+this.fund_bank+'&fund_details_type='+this.ab
      if (this.checkBox === true) {
        // console.log('点住')
        var fund_money = this.projet.fund_details_money
        var money = fund_money - this.money
        var cumoterName = this.projet.customer_name
        var person = this.projet.fund_person
        var text = this.projet.fund_details_text
        var data = this.projet.dates
        var datas = data.split(' ')
        // then.$router.push({ path: 'account_translation_one', query: { id: this.fund_details_id, money: money, cumoterName: cumoterName, person: person, text: text, datas: datas } })
        this.axios.get('/fund/update_fund_details' + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
            then.$router.push({ path: 'payable_pay', query: { id: then.fund_details_id, money: money, cumoterName: cumoterName, person: person, text: text, datas: datas } })
          }else if (res.status === 406) {
            mui.alert('数据异常')
          }
        })
      } else {
        // console.log('没')
        this.axios.get('/fund/update_fund_details' + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
            if (res.data.msg === '支付成功') {
              mui.alert('添加成功', function () {
                then.$router.push({ name: 'payable_money' })
              })
            }
          } else {
            mui.alert('支付失败')
          }
        })
      }
    },
    //删除
    dele(){
      var then = this
      this.imgUrl_loading = true
      this.axios('/fund/Delete_fund_details'+'?fund_details_id='+this.fund_details_id).then(res=>{
        if (res.status ===200){
          this.imgUrl_loading = false
          mui.alert(res.data.data,function () {
            then.$router.push({path:'payable_money'})
          })
        }
      })
    },
    //修改
    update () {
      var then = this
      var check = true
      var nuber = /^\d+(\.\d+)?$/ // 验证数字
      //预收时间
      /*if (this.dates == '') {
        mui.toast('收款时间不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.fund_details_money)) {
        mui.toast('实际转账必须纯数字')
        check = false
        return false
      }*/
      this.imgUrl_loading = true
      var dt = new Date(this.dates)
      var y = dt.getFullYear()
      var m = dt.getMonth() + 1
      var d = dt.getDate()
      var t = dt.getHours();
      var MM =dt.getMinutes();
      var s = dt.getSeconds();
      var dd  = `${y}-${m}-${d} ${t}:${MM}:${s}`
      this.money = ~this.money+1
      var add = '?fund_details_id=' + this.fund_details_id +'&fund_id='+this.projet.fund_id+'&text='+this.fund_details_text+'&fund_details_type='+this.ab
      //情况
      if (this.whether === '是') {
        add+='&fund_details_type=0'
      }else{
        add+='&fund_details_type=1'
      }
      if (this.dates !== null) {
        add+='&date='+dd
      }
      if (this.fund_details_money !== this.projet.fund_details_money){
        add+='&money='+this.fund_details_money
      }
        this.axios.get('/fund/Update_fund_detail' + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
            if (this.dates !== this.projet.dates || this.fund_details_id !== this.projet.fund_details_id || this.fund_details_money !== this.projet.fund_details_money || this.fund_details_type!==this.projet.fund_details_type) {
              mui.alert(res.data.data, function () {
                then.$router.push({ path: 'payable_money' })
              })
            }else{
              mui.alert('您什么都未修改哦!')
            }
          }else if (res.status === 406) {
            mui.alert('数据异常')
          }
        })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  select{font-size: 15px}
  .mui-input-group{margin-bottom: 10px;}
  .radio-one label{width: 52%}
  .mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: 194px!important;}
  .mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 113px}
  .dian{display: flex;white-space: nowrap}
  .dian-a{position: relative;right: 11px}
  /*按钮*/
  .mui-checkbox input[type=checkbox], .mui-radio input[type=radio]{top: 8px!important;}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}
  .form-botton{text-align: center;}
  .botton-mar{margin-bottom: 27px;}
  .mui-chech{white-space: normal}
  .mui-chech label{width: 21%;}
  .mui-heck{position: relative;right: 9px;}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  .row-input{flex: 1;padding-left: 21px!important;}
</style>
