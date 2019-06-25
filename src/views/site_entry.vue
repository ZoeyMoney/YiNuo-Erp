<template>
    <div class="site_entry">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'site_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>工地录入</h2>
          <p>/Site input</p>
        </div>
      </div>
      <!--表单-->
      <div class="mui-content app">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>工地各项</label>
                <select name="" v-model="projetName">
                  <option value="">请选择</option>
                  <option v-for="item in listName" :value="item.customer_name">{{item.customer_name}}</option>
                </select>
              </div>
            <div class="mui-input-row">
              <label>联系人</label>
              <input type="text" class="mui-input-clear" v-model="people" placeholder="请输入联系人">
            </div>
            <div class="mui-input-row">
              <label>联系方式</label>
              <input type="text" class="mui-input-clear" v-model="mobilePeople" placeholder="请输入联系方式">
            </div>
            <div class="mui-input-row">
              <label>设计师</label>
              <select name="" v-model="psName">
                <option value="">请选择</option>
                <option v-for="item in ps" :value="item">{{item}}</option>
              </select>
            </div>
            <div class="mui-input-row">
              <label>装修面积</label>
              <input type="text" class="mui-input-clear" v-model="decoration" placeholder="请输入装修面积">
            </div>
            <div class="mui-input-row">
              <label>推荐人</label>
              <input type="text" class="mui-input-clear" v-model="recommendPeople" placeholder="请输入推荐人">
            </div>
            <div class="mui-input-row radio-form">
              <div class="mui-input-row mui-radio mui-left go-label">
                <label>所属类型</label>
                <input type="text" class="mui-input-clear" v-model="Customer_type" name="Customer_type" placeholder="所属类型">
              </div>
              <div class="mui-input-row mui-radio mui-left mui-chech" v-for="item in csName">
                <label>{{item.text}}</label>
                <input name="Customer_form" type="radio" :value="item.text" v-model="className">
              </div>
            </div>
            <div class="mui-input-row form-textarea row-textarea">
              <label>客户需求</label>
              <textarea name="Customer_form" rows="" cols="" v-model="client" placeholder="请填写需求"></textarea>
            </div>
          </form>
        <!--第二个form-->
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>项目经理</label>
                <input type="text" class="mui-input-clear" v-model="projetManager" placeholder="请输入项目经理">
            </div>
          <div class="mui-input-row">
            <label>工程监理</label>
            <select name="">
              <option value="">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>装修标准</label>
            <select name="">
              <option value="">123</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>项目备注</label>
            <input type="text" class="mui-input-clear" v-model="projetText" placeholder="备注">
          </div>
        </form>
        <!--第三个form-->
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>合同日期</label>
                <input type="date" class="mui-input-clear" v-model="contractDate" placeholder="input">
            </div>
          <div class="mui-input-row goOver">
            <label>施工日期</label>
            <input type="date" class="mui-input-clear" v-model="constructionOne">
            <span class="go-span"></span>
            <input type="date" class="mui-input-clear" v-model="constructionTwo">
          </div>
        </form>
        <!--第四个form-->
        <form class="mui-input-group">
          <div class="two">
            <div class="mui-input-row">
              <label>合同金额</label>
            </div>
            <div class="mui-input-row">
              <label>设计费</label>
            </div>
          </div>
            <table border="0">
              <tr>
                <td :style="Ywith"><span>原价</span></td>
                <td :style="inClerar"><span><input type="text" class="mui-input-clear allmoney" v-model="originMoney" placeholder="请输入金额"></span></td>
                <td :style="inClerar"><span><input type="text" class="mui-input-clear allmoney" v-model="originOffer" placeholder="请输入金额"></span></td>
              </tr>
              <tr>
                <td :style="Ywith"><span>合同价</span></td>
                <td :style="inClerar"><span><input type="text" class="mui-input-clear allmoney" v-model="contractMoney" placeholder="请输入金额"></span></td>
                <td :style="inClerar"><span><input type="text" class="mui-input-clear allmoney" v-model="contractOffer" placeholder="请输入金额"></span></td>
              </tr>
              <tr>
                <td :style="Ywith"><span>优惠率</span></td>
                <td :style="inClerar"><span><input type="text" class="mui-input-clear allmoney" v-model="OfferMoney" placeholder="请输入金额"></span></td>
                <td :style="inClerar"><span><input type="text" class="mui-input-clear allmoney" v-model="Offer" placeholder="请输入金额"></span></td>
              </tr>
            </table>
          <div :style="Ybai">费用共计：<span :style="YbaiMony">￥{{allMoney | MoneyFormat}}</span></div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'site_entry',
  data () {
    return {
      projetName:'',
      listName:'',  //项目名称
      psName:'',
      ps:'',    //设计师
      clasN:'',
      people:'',//联系人
      mobilePeople:'',//联系方式
      decoration:'',//装修面积
      recommendPeople:'',//推荐人
      Customer_type:'',//属性
      client:'',//客户需求
      projetManager:'',//项目经理
      projetText:'',//项目备注
      className:'工装',
      csName:[
        {text:'家装'},
        {text:'工装'},
      ],
      contractDate:'',//合同日期
      constructionOne:'',//施工开始时间
      constructionTwo:'',//施工结束时间
      constructList:[
        {text:'原价'},
        {text:'合同价'},
        {text:'优惠率'},
      ],
      originMoney:'',//原价金额
      originOffer:'',//原价设计费
      contractMoney:'',//合同金额
      contractOffer:'',//合同费用
      OfferMoney:'',//优惠率合同
      Offer:'',//优惠率设计费
      Ywith:{
        width:'30%',
        textAlign:'center',
      },
      inClerar:{
        width:'35%',
      },
      Ybai:{
        width:'100%',
        fontSize:'15px',
        paddingLeft:'20px',
        paddingBottom:'9px'
      },
      YbaiMony:{
        paddingLeft:'15px'
      }
    }
  },
  created () {
    // 项目名称
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer').then(res => {
      this.listName = res.data
    })
  //  设计师
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectStylist').then(customName => {
      this.ps = customName.data
    })
  },
  computed:{
    /*费用共计*/
    allMoney(){
      var a = parseInt(this.contractMoney) + parseInt(this.contractOffer)
      return a
    }
  },
  methods: {
      add(){
        console.log(this.className)
      }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  form select{font-size: 15px!important;}

  .mui-input-group {background-color: transparent;margin-bottom: 10px;}
  .mui-input-row select{background-color: #efeff4;}

  /*单选系列*/
  .radio-form{display: flex;}
  .go-label label{width: 43%;}
  .go-label input{width: 48%!important;}
  .mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 16px}
  .mui-chech{white-space: normal}
  .mui-chech label{width: 21%;}
  .mui-heck{position: relative;right: 9px;}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  .mui-radio{overflow: visible}
  /*日期*/
  .goOver{display: flex;}
  .goOver label{flex: 0.8;}
  .goOver .go-span{width: 20px;height: 2px;background-color: black;position: relative;top: 50%;right: 23px;}
  .goOver input{flex: 1;}
  /*table*/
  table{font-size: 15px}
  .allmoney{padding-left: 0}
  /*two*/
  .two{display: flex}
  .two .mui-input-row{flex: 1}
  .two .mui-input-row label{width: 100%;text-align: center;background-color: #373737;color: white;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
