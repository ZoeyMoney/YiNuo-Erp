<template>
    <div class="customer_details">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'customer_statistics'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户详情</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>客户详细</h2>
          <p>/Client follow-up</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-collapse">
              <a class="mui-navigate-right" href="#">默认信息</a>
              <div class="mui-collapse-content">
                <div class="mui-input-row">
                  <label>客户名称</label>
                  <input type="text" class="mui-input-clear" v-model="customer_name" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row">
                  <label>联系人</label>
                  <input type="text" class="mui-input-clear" v-model="customer_linkman" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row">
                  <label>联系方式</label>
                  <input type="text" class="mui-input-clear" v-model="customer_connect" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row">
                  <label>设计师</label>
                  <input type="text" class="mui-input-clear" v-model="customer_stylist" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row">
                  <label>装修面积</label>
                  <input type="text" class="mui-input-clear" v-model="customer_Decorate" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row">
                  <label>推荐人</label>
                  <input type="text" class="mui-input-clear" v-model="customer_referrer" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row">
                  <label>项目预算</label>
                  <input type="text" class="mui-input-clear" v-model="customer_budget" placeholder="无" disabled="disabled">
                </div>
                <div class="mui-input-row all-row">
                  <label>所属类型</label>
                  <input type="text" class="mui-input-clear row-input" v-model="Customer_type" placeholder="无" disabled="disabled">
                  <div class="mui-input-row mui-radio mui-left mui-chech" name="" v-for="item in listRadio">
                    <label>{{item.text}}</label>
                    <input name="Customer_form" type="radio" v-model="listRadio_all" :value="item.text" checked="a" disabled="disabled">
                  </div>
                  <!--<div class="mui-input-row mui-radio mui-left mui-chech" name="">
                    <label>家装</label>
                    <input name="Customer_form" type="radio" value="家装" checked="a" disabled="disabled">
                  </div>
                  <div class="mui-input-row mui-radio mui-left mui-heck">
                    <label>工装</label>
                    <input name="Customer_form" type="radio" value="工装" checked="b" disabled="disabled">
                  </div>-->
                </div>
                <div class="mui-input-row all-row textreap">
                  <label>客户需求</label>
                  <label>{{customer_demand}}</label>
                </div>
              </div>
            </li>
          </ul>
        </form>
        <!--第二个form-->
       <!-- <form class="mui-input-group form-pab form-padding" v-for="item in stageName">
          <div class="mui-content">
            <div class="row-box">
              <div class="mui-input-row">
                <label>建单时间</label>
                <input type="text" class="mui-input-clear" id="stageData" :value="item.stage_measure | data"
                       placeholder="2019-01-14" disabled="disabled">
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
                <input type="text" class="mui-input-clear" :value="item.stage_stipulate" id="stage_name"
                       disabled="disabled">
              </div>
            </div>
            <div class="row-box">
              <div class="mui-input-row">
                <label>开始时间</label>
                <input type="text" class="mui-input-clear" id="goData" :value="item.stage_startdate | data"
                       placeholder="2019-01-12" disabled="disabled">
              </div>
              <p v-show="false">{{listtime | data}}</p>
              <div class="mui-input-row item-time">
                <label>倒计时</label>
                <label>{{time(item.stage_startdate,item.stage_stipulate)}}</label>
              </div>
            </div>
          </div>
        </form>-->
          <!--跟进记录-->
          <!--<form class="mui-input-group form-pad box-h4">
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
          </form>-->
        <form class="mui-input-group form-pad box-h4">
          <div class="box3">
            <div>
              <h4>跟进记录添加</h4>
            </div>
            <div>
              <label>相关人</label>
              <select name="" v-model="follow_person">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in profetName" :value="item">{{item}}</option>
              </select>
            </div>
          </div>
          <div class="box">
            <div class="row-go">
              <div class="mui-input-row row-textarea">
                <textarea name="" rows="" cols="" placeholder="请输入跟进记录" v-model="list_text"></textarea>
              </div>
              <!--<div class="go-yi">
                <span @click="NewLine">添加新一行</span>
                <span @click="Newdel">删除</span>
              </div>-->
              <div class="go-add">
                <button type="button" @click="add">记录保存</button>
              </div>
            </div>
          </div>
        </form>
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
          <!--<form class="mui-input-group form-pad box-h4 botton-mar">
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
          </form>-->
          <div class="form-botton">
            <button type="button" class="mui-btn mui-btn-black">开工</button>
            <button type="button" class="mui-btn mui-btn-black" @click="dele">删除</button>
            <button type="button" class="mui-btn mui-btn-black" @click="UpdateCustomer">修改</button>
          </div>
        </div>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'customer_details',
  data () {
    return {
      imgUrl_loading:false,
      projet: '', // 项目
      customer_name:'',//项目名
      customer_linkman:'',//联系人
      customer_connect:'',//联系方式
      customer_stylist:'',//设计师
      customer_Decorate:'',//装修面积
      Customer_type:'',//所属类型
      customer_referrer:'',//推荐人
      customer_budget:'',//项目预算
      customer_demand:'',//需求
      // stageName: '', // 第二个form
      listtime: '', // 倒计时
      stage: '', // 修改记录
      // undata: '',// 修改记录
      listRadio_all:'家装',//单选
      follow_text:'',//跟进记录
      follow_person:'',//跟进人
      profetName:'',//跟进人
      list_text:'',
      listRadio:[
        {text:'家装'},
        {text:'工装'},
      ],
      cv:"",
    }
  },
  created () {
    /*setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000)*/

    this.cv = JSON.parse(localStorage.customer_statistics)
    this.customer_name = this.cv.customer_name
    this.customer_linkman = this.cv.customer_linkman
    this.customer_connect = this.cv.customer_connect
    this.customer_stylist = this.cv.customer_stylist
    this.customer_Decorate = this.cv.customer_Decorate
    this.customer_referrer = this.cv.customer_referrer
    this.customer_budget = this.cv.customer_budget
    this.Customer_type = this.cv.Customer_type
    // this.listRadio_all = this.cv.customer_form
    this.customer_demand = this.cv.customer_demand
    if (this.cv.customer_form == ''){
      this.listRadio_all = ''
    }else if (this.cv.customer_form == '家装') {
      this.listRadio_all = '家装'
    }else if (this.cv.customer_form == '工装') {
      this.listRadio_all = '工装'
    }
      console.log(this.cv)
   /* var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.customer_id = id

    this.axios.get(url.modify_projet+'?Customer=' + id).then(res => {
      this.projet = res.data
      if (this.projet.Customer_form == '家装') {
        this.a = true
        this.b = true
      } else {
        this.a = false
        this.b = true
      }
    })*/
    // 客户信息
    /*this.axios.get(url.modify_stage+'?Customer=' + this.cv.customer_id).then(res => {
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
    })*/
    //  跟进人
    this.axios.get(url.clientFollowPerson).then(res => {
      this.profetName = res.data
    })
    // 查询项目的跟进信息
    this.axios.get(url.projet_follow+'?Customer_id=' + this.cv.customer_id).then(res => {
      this.stage = res.data
    })
    //	修改记录
    /*this.axios.get(url.clientUndata).then(info => {
      this.undata = info.data.data
    })*/
  },
  methods: {
    //添加新一行
    /*NewLine(){
      var newLinek = {text:''}
      this.list_text.push(newLinek)
    },
    //删除新一行
    Newdel(){
      if (this.list_text.length == '0') {
        mui.alert('没有可删除的了')
      }else{
        this.list_text.splice(this.list_text.indexOf(1))
      }
    },*/
    //记录保存
    add(){
      var check = true
      if (this.follow_person == '') {
        mui.toast('相关人不能为空')
        check = false
        return false
      }
      for (var index in this.list_text) {
        if (this.list_text[index].text == '') {
          mui.toast('跟进记录不能为空')
          check = false
          return false
        }
      }
      //    录入数据
      var add = '?Customer_name=' + this.customer_name + '&follow_person=' + this.follow_person + '&follow_text=' + this.list_text
      this.axios.get(url.clientAddFollow + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data, function () {
            then.$router.push('customer_management')
          })
        }
      })
    },
    // 修改
    UpdateCustomer () {
      this.$router.push({ path: 'site_modify', query: { id: this.customer_id } })
    },
    //  删除
    dele () {
      var then = this
      var va = this.customer_id
      this.imgUrl_loading = true
      this.axios.get(url.clientDelect+'?Customer=' + va).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          if (res.data == '删除成功') {
            mui.alert('删除成功', function () {
              then.$router.push({ path: 'customer_statistics' })
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
.box3 div:nth-child(2){font-size: 15px;padding: 0 13px}
.box3 div:nth-child(2) select{width: 70%;padding: 0 10px;margin-bottom: 4px}
/*记录*/
.jin{display: flex;line-height: 40px;}
.jin-date{display: flex;width: 100%}
.gen{flex: 1;text-align: center;font-size: 15px}
.jin-date{flex: 4}
.jin-date p{padding-left: 16px;flex: 1;}
.jin-date p:nth-child(2){text-align: right;padding-right: 16px;}
.row-textarea{height: 54px!important;border: 1px solid #dadada}
.row-textarea textarea{font-size: 14px;padding: 3px;color: black}
.box-h4 h4{line-height: 40px;padding-left: 14px;border-bottom: 1px solid #DADADA;font-size: 15px}
ul{background-color: #efeff4;font-size: 15px}
.mui-table-view-cell.mui-collapse .mui-collapse-content{background-color: #efeff4;padding: 0}
.go-yi{text-align: right;font-size: 15px;padding: 15px 13px 0;color: #007aff;font-weight: bold}
.go-yi span{display: block}
/*form尺量*/
.row-box{display: flex;}
.row-box div label{width: 50%}
.row-box div input{width: 50%;padding-left: 14px;}
.row-box .mui-input-row{width: 50%}
.row-box:nth-last-child(1) .mui-input-row:nth-child(2) label:nth-child(1){width: 40%}
.item-time label:nth-child(2){padding-left: 0;}
.mui-navigate-right{font-weight: bold}
/*按钮*/
.go-add{text-align: center;margin-bottom: 34px;}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}
.form-botton{text-align: center;}
.botton-mar{margin-bottom: 27px;}
.mui-chech{white-space: normal}
.mui-chech label{width: 21%;}
.mui-heck{position: relative;right: 9px;}
.mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
.row-input{flex: 1;padding-left: 21px!important;}
</style>
