<template>
    <div class="customer_entry">
      <!--头部-->
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'customer_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户录入-->
      <div class="customer">
        <h2>客户录入</h2>
        <p>/Customer input</p>
      </div>
      <div class="mui-content app">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>项目名称</label>
                  <input type="text" class="mui-input-clear" placeholder="请输入项目名称" v-model="Customer_name">
              </div>
            <div class="mui-input-row">
              <label>联系人</label>
              <input type="text" class="mui-input-clear" placeholder="请输入联系人" v-model="Customer_linkman">
            </div>
            <div class="mui-input-row">
              <label>联系方式</label>
              <input type="text" class="mui-input-clear" placeholder="请输入手机号" v-model="Customer_connect">
            </div>
            <div class="mui-input-row">
              <label>设计师</label>
              <select name="" id="" v-model="Customer_stylist">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in listName" :value="item">{{item}}</option>
              </select>
            </div>
            <div class="mui-input-row">
              <label>装修面积</label>
              <input type="text" class="mui-input-clear" placeholder="装修面积" v-model="Customer_Decorate">
            </div>
            <div class="mui-input-row">
              <label>推荐人</label>
              <input type="text" class="mui-input-clear" placeholder="推荐人" v-model="Customer_referrer">
            </div>
            <div class="mui-input-row money-input">
              <label>项目预算</label>
              <input type="text" class="mui-input-clear" id="budgedt" v-model="Customer_budget" name="Customer_budget" placeholder="请输入预算金额">
              <span class="span-money">{{Customer_budget | MoneyFormat}}</span>
            </div>
            <div class="mui-input-row radio-form">
              <div class="mui-input-row mui-radio mui-left go-label">
                <label>所属类型</label>
                <input type="text" class="mui-input-clear" v-model="Customer_type" name="Customer_type" id="Customer_type" placeholder="所属类型">
              </div>
              <div class="mui-input-row mui-radio mui-left mui-chech" v-for="(item,index) in Customer_formList">
                <label>{{item.value}}</label>
                <input name="Customer_form" type="radio" :value="item.value" v-model="Customer_form">
              </div>
            </div>
            <div class="mui-input-row form-textarea row-textarea">
              <label>客户需求</label>
              <textarea name="Customer_demand" rows="" cols="" v-model="Customer_demand" id="Customer_demand" placeholder="请填写需求"></textarea>
            </div>
          </form>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'customer_entry',
  data () {
    return {
      Customer_name: '', // 项目名称
      Customer_linkman: '', // 联系人
      Customer_connect: '', // 联系方式
      Customer_stylist: '', // 设计师
      listName: '', // 设计师集合
      Customer_Decorate: '', // 装修面积
      Customer_referrer: '', // 推荐人
      Customer_budget: '', // 项目预算
      Customer_type: '', // 所属类型
      Customer_form: '工装', // 家装或工装'=
      Customer_formList: [
        { value: '家装' },
        { value: '工装' }
      ],
      Customer_demand: ''// 客户需求
    }
  },
  created () {
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectStylist').then(customName => {
      this.listName = customName.data
    })
  },
  computed: {

  },
  methods: {

    go () {
      var _this = this
      var check = true
      var pattern = /^1[0-9]{10}$/ // 验证手机号
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var nuber = /^[0-9]*$/ // 验证数字
      //  项目名称
      if (this.Customer_name == '') {
        mui.toast('项目名称不能为空')
        check = false
        return false
      }
      //  联系人
      if (this.Customer_linkman == '') {
        mui.toast('联系人不能为空')
        check = false
        return false
      }
      if (!nameReg.test(this.Customer_linkman)) {
        mui.toast('联系人格式错误')
        check = false
        return false
      }
      //  联系方式
      if (this.Customer_connect == '') {
        mui.toast('联系方式不能为空')
        check = false
        return false
      }
      if (!pattern.test(this.Customer_connect)) {
        mui.toast('联系方式格式错误')
        check = false
        return false
      }
      //  设计师
      if (this.Customer_stylist == '') {
        mui.toast('设计师不能为空')
        check = false
        return false
      }
      //  装修面积
      if (this.Customer_Decorate == '') {
        mui.toast('装修面积不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.Customer_Decorate)) {
        mui.toast('装修面积格式不正确')
        check = false
        return false
      }
      //  推荐人
      if (this.Customer_referrer == '') {
        mui.toast('推荐人不能为空')
        check = false
        return false
      }
      if (!nameReg.test(this.Customer_referrer)) {
        mui.toast('推荐人格式错误')
        check = false
        return false
      }
      //  项目预算
      if (this.Customer_budget == '') {
        mui.toast('项目预算不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.Customer_budget)) {
        mui.toast('项目预算格式错误')
        check = false
        return false
      }
      /* 录入数据 */
      var add = '?Customer_name=' + this.Customer_name + '&Customer_linkman=' + this.Customer_linkman + '&Customer_connect=' + this.Customer_connect +
            '&Customer_stylist=' + this.Customer_stylist + '&Customer_Decorate=' + this.Customer_Decorate + '&Customer_referrer=' + this.Customer_referrer +
            '&Customer_budget=' + this.Customer_budget + '&Customer_form=' + this.Customer_form + '&Customer_type=' + this.Customer_type + '&Customer_demand=' + this.Customer_demand
      this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/AddCustomer' + add).then(res => {
        if (res.data === '录入成功') {
          mui.alert('录入成功', function () {
            _this.$router.push('customer_management')
          })
        } else {
          mui.alert('录入失败 提示：项目名称可能重复')
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
/*表单*/
/*    x */
.mui-icon-clear{display: none!important;}
form div select{font-size: 15px!important;}
.mui-input-row label{width: 30%;}
.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{width: 70%;}
.radio-form{display: flex;}
.go-label label{width: 50%;}
.go-label input{width: 48%!important;}
/*平方米*/
.square{display: flex;}
.square input{width: 55%!important;}
.square div{line-height: 38px;border-left: 1px solid #DADADA;width: 15%;padding-left: 19px;font-weight: 600}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 16px}
.mui-input-row select{background-color: #efeff4;}
.mui-select{flex: 2;padding-left: 25px}
.mui-chech{white-space: normal}
.mui-chech label{width: 21%;}
.mui-heck{position: relative;right: 9px;}
.mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
/*所属类型*/
.money-input{display: flex;}
.money-input label{flex: 1;width: 30%}
.money-input input{flex: 1.6;width: 40%}
.span-money{display: block;line-height: 43px;font-size: 13px;width: 30%;}
/*客户需求*/
textarea{overflow: auto;height: 100%;padding-bottom: 0;font-size: 15px;padding-left: 13px!important;}
/*按钮*/
.mui-radio{overflow: visible}
.mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
.mui-select:before{display: none}
.mui-input-group:after,.mui-input-row:nth-last-child(1):after{background-color: transparent;}
</style>
