<template>
    <div class="customer_entry">
      <!--头部-->
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'customer_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户录入-->
      <div class="customer">
        <h2>客户录入</h2>
        <p>/Customer input</p>
      </div>
      <div class="mui-content app">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>工地名称</label>
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
              <select name="" id="" v-model="Customer_stylist" :class="{classGray:Customer_stylist == '',classBlack:Customer_stylist!=''}">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in listName" :value="item.fund_person_id">{{item.fund_person}}</option>
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
              <input type="text" class="mui-input-clear" id="budgedt" v-model="Customer_budget" name="Customer_budget" placeholder="￥">
              <span class="span-money">{{Customer_budget | MoneyFormat}}</span>
            </div>
            <div class="mui-input-row">
              <label>客户级别</label>
              <select name="" v-model="level" :class="{classGray:level =='',classBlack: level!=''}">
                <option value="">请选择</option>
                <option v-for="item in listLevel" :value="item.text">{{item.text}}</option>
              </select>
            </div>
            <div class="row-left">
              <div class="row-left-on">
                <label>所属类型</label>
                <select name="" v-model="Customer_type" :class="{classGray:Customer_type =='',classBlack: Customer_type!=''}">
                  <option value="">请选择</option>
                  <option v-for="item in list_type" :value="item.text">{{item.text}}</option>
                </select>
              </div>
              <div class="radio-left">
                <div class="mui-input-row mui-radio mui-left" v-for="item in Customer_formList">
                  <label>{{item.value}}</label>
                  <input name="radio1" type="radio" v-model="Customer_form" :value="item.value">
                </div>
              </div>
            </div>
             <div class="mui-input-row form-textarea row-textarea">
               <label>客户需求</label>
               <textarea name="Customer_demand" rows="" cols="" v-model="Customer_demand" id="Customer_demand" placeholder="请填写需求"></textarea>
             </div>
          </form>
        <button-save @click.native="go"></button-save>
      </div>
    </div>
</template>

<script>
export default {
  name: 'customer_entry',
  data () {
    return {
      imgUrl_loading:false,
      Customer_name: '', // 项目名称
      Customer_linkman: '', // 联系人
      Customer_connect: '', // 联系方式
      Customer_stylist: '', // 设计师
      listName: '', // 设计师集合
      Customer_Decorate: '', // 装修面积
      Customer_referrer: '', // 推荐人
      Customer_budget: '', // 项目预算
      Customer_type: '', // 所属类型
      level:'A',//级别
      listLevel:[
        {text:'A'},
        {text:'B'},
        {text:'C'},
      ],
      Customer_form: '工装', // 家装或工装'=
      Customer_formList: [
        { value: '家装' },
        { value: '工装' }
      ],
      list_type:[
        {text:'餐饮'},
        {text:'服装'},
        {text:'办公'},
        {text:'健身'},
        {text:'美容'},
        {text:'娱乐'},
        {text:'教育'},
        {text:'医疗'},
        {text:'销售'},
        {text:'小区'},
      ],
      Customer_demand: ''// 客户需求
    }
  },
  created () {
    //设计师
    this.axios.get('/select_follow_person'+'?fund_person_state=3').then(customName => {
      this.listName = customName.data.data
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
      var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im
      var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im
      var nuber = /^[0-9]*$/ // 验证数字
      //  项目名称
      if (this.Customer_name == '') {
        mui.toast('项目名称不能为空')
        check = false
        return false
      }
      if (regEn.test(this.Customer_name) || regCn.test(this.Customer_name)) {
        mui.toast('项目名称不能加入特殊字符')
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
      this.imgUrl_loading = true
      /* 录入数据 */
      var add = '?Customer_name=' + this.Customer_name + '&Customer_linkman=' + this.Customer_linkman + '&Customer_connect=' + this.Customer_connect +
            '&Customer_stylist=' + this.Customer_stylist + '&Customer_Decorate=' + this.Customer_Decorate + '&Customer_referrer=' + this.Customer_referrer +
            '&Customer_budget=' + this.Customer_budget + '&Customer_form=' + this.Customer_form + '&Customer_type=' + this.Customer_type + '&Customer_demand=' + this.Customer_demand+
            '&Customer_grade='+this.level
      this.axios.get('/Customer/AddCustomer'+add).then(res=>{
        if (res.status === 200) {
          this.imgUrl_loading = false
          if (res.data == '项目名称重复') {
            mui.alert('项目名称重复')
          }else{
            mui.alert(res.data, function () {
              _this.$router.push('customer_management')
            })
          }
        }
      })
    }
  }
}
</script>

<style scoped>
@import "../css/public.css";
/*表单*/
input::-webkit-input-placeholder{color: #6e6e6e}
.classBlack{color: black}
.classGray{color: #6e6e6e}
/*    x */
.mui-icon-clear{display: none!important;}
form div select{font-size: 15px!important;}
.mui-input-row label{width: 30%;}
.mui-input-row label~input, .mui-input-row label~select, .mui-input-row label~textarea{width: 70%;}
textarea{padding-left: 0!important;}
/*平方米*/
.square{display: flex;}
.square input{width: 55%!important;}
.square div{line-height: 38px;border-left: 1px solid #DADADA;width: 15%;padding-left: 19px;font-weight: 600}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 23px;white-space: nowrap}
.mui-input-row select{background-color: #efeff4;}
/*所属类型*/
.row-textarea label{width: 26% !important;line-height: 20px!important;}
.row-left{font-size: 15px;display: flex;}
.row-left-on{flex: 1;display: flex;}
.row-left-on:nth-child(1) label{padding: 10px 15px;line-height: 25px;white-space: nowrap}
.row-left-on:nth-child(1) select{margin-left: 10px;margin-bottom: 0}
.radio-left{display: flex;position: relative;right: 18px;top: 6px}
.row-textarea{border-top: 1px solid #dadada;}
.money-input{display: flex}
.money-input input{flex: 1}
.money-input span{flex: 1}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: -2px!important;}
.mui-input-row{overflow: unset}
.span-money{display: block;line-height: 43px;font-size: 13px;width: 30%;}
.mui-select:before{display: none}
.mui-input-group:after,.mui-input-row:nth-last-child(1):after{background-color: transparent;}
.mui-checkbox input[type=checkbox], .mui-radio input[type=radio]{top: 8px!important;}
</style>
