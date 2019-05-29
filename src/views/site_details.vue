<template>
  <div class="site_details">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'After_sales_statistics'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">售后详细</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <!--客户详情-->
    <div class="mui-content">
      <div class="customer">
        <h2>售后详细</h2>
        <p>/Client follow-up</p>
      </div>
    </div>
    <!--form-->
    <div class="mui-content app">
      <form class="mui-input-group" v-for="item in projet">
        <div class="mui-input-row">
          <label>客户名称</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_name" placeholder="input" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>联系人</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_linkman" placeholder="input" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>联系方式</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_connect" placeholder="input" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>责任人</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_stylist" placeholder="input" disabled="disabled">
        </div>
        <div class="mui-input-row money-input">
          <label>甲方预算</label>
          <input type="text" class="mui-input-clear" v-model="item.customer_DecorateJia" disabled="disabled">
          <span class="span-money">{{Customer_DecorateJia | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row money-input">
          <label>乙方预算</label>
          <input type="text" class="mui-input-clear" placeholder="请输入预算金额" v-model="item.customer_DecorateYi" disabled="disabled">
          <span class="span-money">{{Customer_DecorateYi | MoneyFormat}}</span>
        </div>
        <div class="mui-input-row">
          <label>项目时间</label>
          <input type="text" class="mui-input-clear" :value="item.customer_Date | data" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>报修时间</label>
          <input type="text" class="mui-input-clear" :value="item.customer_baoxiushijian | data" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>预计完成</label>
          <input type="text" class="mui-input-clear" :value="item.customer_yujiwanchengshijian | data" disabled="disabled">
        </div>
        <div class="mui-input-row">
          <label>保质期</label>
          <input type="text" class="mui-input-clear" placeholder="请输入保质期" v-model="item.customer_baozhiqi" disabled="disabled">
        </div>
        <div class="mui-input-row all-row">
          <label>所属类型</label>
          <input type="text" class="mui-input-clear row-input" v-model="item.customer_type" disabled="disabled">
          <div class="mui-input-row mui-radio mui-left mui-chech" name="">
            <label>家装</label>
            <input name="Customer_form" type="radio" value="家装" checked="a" disabled="disabled">
          </div>
          <div class="mui-input-row mui-radio mui-left mui-heck">
            <label>工装</label>
            <input name="Customer_form" type="radio" value="工装" checked="b" disabled="disabled">
          </div>
        </div>
        <div class="mui-input-row all-row textreap">
          <label>客户需求</label>
          <label>{{item.customer_demand}}</label>
        </div>
      </form>
      <!--第二个form-->
      <form class="mui-input-group form-pab form-padding" v-for="item in stageName">
        <div class="mui-content">
          <div class="row-box">
            <div class="mui-input-row">
              <label>建单时间</label>
              <input type="text" class="mui-input-clear" id="stageData" :value="item.stage_measure | data" placeholder="2019-01-14" disabled="disabled">
            </div>
            <div class="mui-input-row">
              <label>已建单</label>
              <input type="text" class="mui-input-clear" :value="item.stage_day" id="day" disabled="disabled">
            </div>
          </div>
          <div class="row-box">
            <div class="mui-input-row">
              <label>当前阶段</label>
              <input type="text" class="mui-input-clear" :value="item.stage_name" id="stipulate" disabled="disabled">
            </div>
            <div class="mui-input-row">
              <label>限时</label>
              <input type="text" class="mui-input-clear" :value="item.stage_stipulate" id="stage_name" disabled="disabled">
            </div>
          </div>
          <div class="row-box">
            <div class="mui-input-row">
              <label>开始时间</label>
              <input type="text" class="mui-input-clear" id="goData" :value="item.stage_startdate | data" placeholder="2019-01-12" disabled="disabled">
            </div>
            <p v-show="false">{{listtime | data}}</p>
            <div class="mui-input-row item-time">
              <label>倒计时</label>
              <label>{{time(item.stage_startdate,item.stage_stipulate)}}</label>
            </div>
          </div>
        </div>
      </form>
      <!--跟进记录-->
      <form class="mui-input-group form-pad box-h4">
        <h4>跟进记录</h4>
        <div class="box"  v-for="item in stage">
          <div class="mui-input-row jin">
            <div class="gen">
              {{item.follow_person}}
            </div>
            <div class="jin-date">
              <p>{{item.follow_date | data}}</p>
            </div>
          </div>
          <div class="row-go">
            <div class="mui-input-row row-textarea">
              <textarea name="" rows="" cols="" :value="item.follow_text" disabled="disabled"></textarea>
            </div>
          </div>
        </div>
      </form>
      <form class="mui-input-group form-pad box-h4 botton-mar">
        <h4>修改记录</h4>
        <div class="box" v-for="item in undata">
          <div class="mui-input-row jin">
            <div class="gen">
              {{item.follow_person}}
            </div>
            <div class="jin-date">
              <p>{{item.update_date | data}}</p>
              <p>修改人：{{item.update_user_id}}</p>
            </div>
          </div>
          <div class="row-go">
            <div class="mui-input-row row-textarea">
              <textarea name="" rows="" cols="" :value="item.update_text" disabled="disabled"></textarea>
            </div>
          </div>
        </div>
      </form>
      <div class="form-botton">
        <button type="button" class="mui-btn mui-btn-black">开工</button>
        <button type="button" class="mui-btn mui-btn-black" @click="dele">删除</button>
        <button type="button" class="mui-btn mui-btn-black" @click="UpdateCustomer">修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'site_details',
  data () {
    return {
      projet: '', // 项目
      stageName: '', // 第二个form
      listtime: '', // 倒计时
      stage: '', // 修改记录
      undata: ''// 修改记录
    }
  },
  created () {
    setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000)

    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.customer_id = id
    this.axios.get('https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer?Customer=' + id).then(res => {
      this.projet = res.data
      if (this.projet.Customer_form == '家装') {
        this.a = true
        this.b = true
      } else {
        this.a = false
        this.b = true
      }
    })
    // 客户信息
    this.axios.get('https://formattingclub.com/YiNuoLogin/AfterSale/selectStage?Customer=' + id).then(res => {
      this.stageName = res.data
      if (res.data == '') {
        var k = [{
          stage_measure: '',
          stage_day: '',
          stage_stipulate: '',
          stage_name: '',
          stage_startdate: ''
        }]
        this.stageName = k
      }
    })
    // 时间
    this.axios.get('https://formattingclub.com/YiNuoLogin/AfterSale/selectStage?Customer=' + id).then(info => {
      if (info.status === 200) {
        this.list = info.data
      } else {
        console.log('获取失败')
      }
    })
    // 查询项目的跟进信息
    this.axios.get('https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow?Customer_id=' + id).then(res => {
      this.stage = res.data
    })
    //	修改记录
    this.axios.get('https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate').then(info => {
      this.undata = info.data.data
    })
  },
  methods: {
    // 修改
    UpdateCustomer () {
      this.$router.push({ path: 'siteModify', query: { id: this.customer_id } })
    },
    //  删除
    dele () {
      var then = this
      var va = this.customer_id
      this.axios.get('https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer?Customer=' + va).then(res => {
        if (res.status === 200) {
          if (res.data == '删除成功') {
            mui.alert('删除成功', function () {
              then.$router.push({ path: 'After_sales_statistics' })
            })
          } else {
            alert('删除失败')
          }
        }
      })
    },
    //  倒计时
    time: function (date, day) {
      if (date == null) {
        return '未开始'
      } else {
        var startDate = new Date(date)
        startDate.setDate(startDate.getDate() + day)
        var m = startDate.getMonth() + 1
        var end = startDate.getFullYear() + '-' + m + '-' + startDate.getDate() + '-' + startDate.getHours() + ':' + startDate.getMinutes() + ':' + startDate.getSeconds()
        var endDate = new Date(end)
        var start = new Date()
        var rightTime = endDate - start // 截止时间减去当前时间
        if (rightTime > 0) { // 判断剩余倒计时时间如果大于0就执行倒计时否则就结束
          var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24)
          var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24)
          var mm = Math.floor((rightTime / 1000 / 60) % 60)
          var ss = Math.floor((rightTime / 1000) % 60)
          var showTime = dd + ':' + hh + ':' + mm + ':' + ss
        } else {
          var showTime = '已逾期'
        }
        return showTime
      }
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .mui-input-group{background-color: transparent}
  /*form与form之间的差距*/
  .form-pab{margin-bottom: 15px;}
  .all-row{display: flex;}
  .all-row input{font-size: 14px!important;}
  .all-row label:nth-child(1){flex: 1}
  .all-row label:nth-child(2){flex:4;overflow: auto}
  .textreap{height: 80px!important;}
  .textreap label:nth-child(1){line-height: 58px}
  /*form2-label*/
  #app{padding-top: 0;}
  .row-flex label{width: 50%;}
  .row-flex input{width: 50%!important;font-size: 12px;}
  .flex-mm div{width: 50%;}
  /*记录*/
  .jin{display: flex;line-height: 40px;}
  .jin-date{display: flex;width: 100%}
  .jin-date p{padding-left: 16px;flex: 1;}
  .jin-date p:nth-child(2){text-align: right;padding-right: 16px;}
  .row-textarea{height: 100px!important;}
  .row-textarea textarea{padding-left: 13px!important;font-size: 14px;}
  .box-h4 h4{line-height: 40px;padding-left: 14px;border-bottom: 1px solid #DADADA;}

  /*form尺量*/
  .row-box{display: flex;}
  .row-box div label{width: 50%}
  .row-box div input{width: 50%;padding-left: 14px;}
  .row-box .mui-input-row{width: 50%}
  .row-box:nth-last-child(1) .mui-input-row:nth-child(2) label:nth-child(1){width: 40%}
  .item-time label:nth-child(2){padding-left: 0;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
  .form-botton{text-align: center;}
  .botton-mar{margin-bottom: 27px;}
  .mui-chech{white-space: normal}
  .mui-chech label{width: 21%;}
  .mui-heck{position: relative;right: 9px;}
  .mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
  .row-input{flex: 1;padding-left: 21px!important;}
</style>
