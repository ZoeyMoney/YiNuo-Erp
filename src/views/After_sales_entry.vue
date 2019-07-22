<template>
  <div class="After_sales_entry">
    <!--头部-->
    <header class="mui-bar mui-bar-nav header-top">
      <router-link :to="{name:'money_sale'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">售后录入</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户录入-->
    <div class="customer">
      <h2>售后录入</h2>
      <p>/Customer input</p>
    </div>
    <div class="mui-content app">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>工地各项</label>
          <select name="" v-model="Customer_name">
            <option value="">请选择</option>
            <option v-for="item in projet" :value="item.customer_name">{{item.customer_name}}</option>
          </select>
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
          <label>责任人</label>
          <select name="" v-model="Customer_stylist">
            <option value="">请选择</option>
            <option v-for="item in SelectStylist" :value="item">{{item}}</option>
          </select>
        </div>
        <div class="mui-input-row money-input">
          <label>甲方预算</label>
          <input type="text" class="mui-input-clear" placeholder="￥" v-model="Customer_DecorateJia">
          <span class="span-money">{{Customer_DecorateJia | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row money-input">
          <label>乙方预算</label>
          <input type="text" class="mui-input-clear" placeholder="￥" v-model="Customer_DecorateYi">
          <span class="span-money">{{Customer_DecorateYi | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row">
          <label>项目时间</label>
          <input type="date" class="mui-input-clear" v-model="Customer_Date">
        </div>
        <div class="mui-input-row">
          <label>报修时间</label>
          <input type="date" class="mui-input-clear" v-model="Customer_baoxiushijian">
        </div>
        <div class="mui-input-row">
          <label>预计完成</label>
          <input type="date" class="mui-input-clear" v-model="Customer_yujiwanchengshijian">
        </div>
        <div class="mui-input-row">
          <label>保质期</label>
          <input type="text" class="mui-input-clear" placeholder="请输入保质期" v-model="Customer_baozhiqi">
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
  import url from '../components/config'
  export default {
    name: 'After_sales_entry',
    data () {
      return {
        imgUrl_loading:false,
        Customer_name: '', // 项目名称
        projet:'',
        SelectStylist:'',
        Customer_linkman: '', // 联系人
        Customer_connect: '', // 联系方式
        Customer_stylist: '', // 责任人
        Customer_type: '', // 所属类型
        Customer_DecorateJia:'',//甲方预算
        Customer_DecorateYi:'',//一方预算
        Customer_baozhiqi:'',//保质期
        Customer_Date:'',//项目时间
        Customer_baoxiushijian:'',
        Customer_yujiwanchengshijian:'',//
        Customer_form: '工装', // 家装或工装'=
        Customer_formList: [
          { value: '家装' },
          { value: '工装' }
        ],
        Customer_demand: ''// 客户需求
      }
    },
    created () {
      /*项目名称*/
      this.axios.get(url.listProjet).then(res=>{
        this.projet = res.data
      })
      /*责任人*/
      this.axios.get(url.AfterListName).then(res=>{
        this.SelectStylist = res.data
      })
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
        //项目名称
        if (this.Customer_name == '') {
          mui.toast('项目名称不能为空')
          check = false
          return false
        }
        //联系人
        if (this.Customer_linkman == '') {
          mui.toast('联系人不能为空')
          check = false
          return false
        }
        if (!nameReg.test(this.Customer_linkman)) {
          mui.toast('联系人格式不正确')
          check = false
          return false
        }
        //联系方式
        if (this.Customer_connect == '') {
          mui.toast('联系方式不能为空')
          check = false
          return false
        }
        if (!pattern.test(this.Customer_connect)) {
          mui.toast('联系方式格式不正确')
          check = false
          return false
        }
        //责任人
        if (this.Customer_stylist == '') {
          mui.toast('责任人不能为空')
          check = false
          return false
        }
        //甲方与乙方预算
        if (this.Customer_DecorateJia == '' || this.Customer_DecorateYi == '') {
          mui.toast('甲方或乙方不能为空')
          check = false
          return false
        }
        if (!nuber.test(this.Customer_DecorateJia) || !nuber.test(this.Customer_DecorateYi)) {
          mui.toast('甲方或乙方格式不正确')
          check = false
          return false
        }
        // 项目时间
        if (this.Customer_Date == '') {
          mui.toast('项目时间不能为空')
          check = false
          return false
        }
        //报修时间
        if (this.Customer_baoxiushijian == '') {
          mui.toast('报修时间不能为空')
          check = false
          return false
        }
        //预计完成
        if (this.Customer_yujiwanchengshijian == '') {
          mui.toast('预计完成时间不能为空')
          check = false
          return false
        }
        //保质期
        if (this.Customer_baozhiqi == '') {
          mui.toast('保质期不能为空')
          check = false
          return false
        }
        this.imgUrl_loading = true
        /* 录入数据 */
        var add = '?Customer_name=' + this.Customer_name + '&Customer_linkman=' + this.Customer_linkman + '&Customer_connect=' + this.Customer_connect + '&Customer_stylist=' + this.Customer_stylist +
          '&Customer_form=' + this.Customer_form + '&Customer_type=' + this.Customer_type + '&Customer_demand=' + this.Customer_demand+
          '&Customer_DecorateJia='+this.Customer_DecorateJia+'&Customer_DecorateYi='+this.Customer_DecorateYi+'&Customer_baozhiqi='+this.Customer_baozhiqi+
          '&Customer_Date='+this.Customer_Date+'&Customer_baoxiushijian='+this.Customer_baoxiushijian+'&Customer_yujiwanchengshijian='+this.Customer_yujiwanchengshijian
        this.axios.post(url.AfterSaleAdd + add).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
          mui.alert(res.data, function () {
            _this.$router.push('money_sale')
          })
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
  /*按钮*/
  .mui-radio{overflow: visible}
  .mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
  .mui-select:before{display: none}
  .mui-input-group:after,.mui-input-row:nth-last-child(1):after{background-color: transparent;}
</style>
