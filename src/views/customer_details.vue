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
              <a class="mui-navigate-right left-mar" href="#">
                <div class="mui-input-row">
                  <label>项目名称</label>
<!--                  <input type="text" class="mui-input-clear" v-model="customer_name" placeholder="无" disabled="disabled">-->
                  <div>{{customer_name}}</div>
                </div>
              </a>
              <div class="mui-collapse-content">
                <div class="mui-input-row">
                  <label>项目名称</label>
                  <input type="text" class="mui-input-clear" v-model="customer_name" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>联系人</label>
                  <input type="text" class="mui-input-clear" v-model="customer_linkman" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>联系方式</label>
                  <input type="text" class="mui-input-clear" v-model="customer_connect" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>设计师</label>
<!--                  <input type="text" v-model="customer_stylist">-->
                  <select name="" v-model="customer_stylist">
                    <option value="">请选择</option>
                    <option v-for="item in listName" :value="item.fund_person_id">{{item.fund_person}}</option>
                  </select>
                </div>
                <div class="mui-input-row">
                  <label>装修面积</label>
                  <input type="text" class="mui-input-clear" v-model="customer_Decorate" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>推荐人</label>
                  <input type="text" class="mui-input-clear" v-model="customer_referrer" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>项目预算</label>
                  <input type="text" class="mui-input-clear" v-model="customer_budget" placeholder="无">
                </div>
                <div class="mui-input-row">
                  <label>客户等级</label>
                  <select name="" v-model="Customer_grade" :class="{classGray:Customer_grade =='',classBlack: Customer_grade!=''}">
                    <option value="">请选择</option>
                    <option v-for="item in listLevel" :value="item.text">{{item.text}}</option>
                  </select>
                </div>
                <!--<div class="mui-input-row all-row">
                  <label>所属类型</label>
                  <input type="text" class="mui-input-clear row-input" v-model="Customer_type" placeholder="无">
                  <div class="mui-input-row mui-radio mui-left mui-chech" name="" v-for="item in listRadio">
                    <label>{{item.text}}</label>
                    <input name="Customer_form" type="radio" v-model="listRadio_all" :value="item.text" checked="a">
                  </div>
                </div>-->
                <div class="row-left">
                  <div class="row-left-on">
                    <label>所属类型</label>
                    <select name="" v-model="Customer_type" :class="{classGray:Customer_type =='',classBlack: Customer_type!=''}">
                      <option value="">请选择</option>
                      <option v-for="item in list_type" :value="item.text">{{item.text}}</option>
                    </select>
                  </div>
                  <div class="radio-left">
                    <div class="mui-input-row mui-radio mui-left" v-for="item in listRadio">
                      <label>{{item.text}}</label>
                      <input name="radio1" type="radio" v-model="listRadio_all" :value="item.text">
                    </div>
                  </div>
                </div>
                <div class="mui-input-row all-row textreap">
                  <label>客户需求</label>
                  <input type="text" v-model="customer_demand">
                </div>
                <div class="mui-input-row update-btn">
                  <div>
                    <button type="button" class="mui-btn mui-btn-black" @click="UpdateCustomer">信息修改</button>
                  </div>
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
        <form class="mui-input-group form-pad box-h4">
          <div class="box3 ">
            <div>
              <h4>添加记录</h4>
            </div>
            <div class="mui-input-row go-nai">
              <label>跟进人员</label>
              <select name="" v-model="follow_person" :class="{classGray:follow_person=='',classBlack:follow_person !=''}">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in profetName" :value="item.fund_person_id">{{item.fund_person}}</option>
              </select>
            </div>
            <div class="mui-input-row go-nai">
              <label>下次跟进</label>
              <input type="date" v-model="nexDate">
<!--              <el-date-picker v-model="nexDate" type="date" placeholder="选择日期"></el-date-picker>-->
            </div>
            <div class="mui-input-row go-nai">
              <label>当前阶段</label>
              <select name="" v-model="stage_name" :class="{classGray:stage_name=='',classBlack:stage_name!=''}">
                <option value="">请选择</option>
                <option v-for="item in vstage_name">{{item.stage_name}}</option>
              </select>
            </div>
          </div>
          <div class="box">
            <div class="row-go">
              <div class="mui-input-row row-textarea">
                <textarea name="" rows="" cols="" placeholder="请输入跟进记录" v-model="list_text"></textarea>
              </div>
              <div class="go-add">
                <button type="button" @click="add">保存记录</button>
              </div>
            </div>
          </div>
        </form>
        <form class="mui-input-group form-pad box-h4">
          <h4>跟进记录</h4>
          <div class="box"  v-for="item in stage">
            <div class="mui-input-row jin">
              <div class="jin-date">
                <p>{{item.follow_date | data}}</p>
              </div>
              <div class="gen">
                {{item.fund_person}}
              </div>
              <div class="gen">
                {{item.follow_stage}}
              </div>
            </div>
            <div class="row-go">
              <div class="mui-input-row row-textarea">
                <textarea name="" rows="" cols="" :value="item.follow_text" disabled="disabled"></textarea>
              </div>
            </div>
          </div>
        </form>
          <div class="form-botton">
            <button type="button" class="mui-btn mui-btn-black" @click="goadd">开工</button>
            <button type="button" class="mui-btn mui-btn-black" @click="dele">删除</button>
          </div>
        </div>
    </div>
</template>

<script>
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
      listtime: '', // 倒计时
      stage: '', // 修改记录
      stage_name: '', // 当前阶段
      listRadio_all:'',//单选
      follow_text:'',//跟进记录
      listName:'',//设计师
      follow_person:'',//跟进人
      nexDate:'',//时间
      profetName:'',//跟进人
      Customer_grade:'',//客户等级
      list_text:'',
      vstage_name: [
        { stage_name: '未量尺' },
        { stage_name: '平面图' },
        { stage_name: '效果图' },
        { stage_name: '施工图' }
      ],
      listLevel:[
        {text:'A'},
        {text:'B'},
        {text:'C'},
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
    // console.log(this.cv)
    this.customer_name = this.cv.customer_name
    this.customer_linkman = this.cv.customer_linkman
    this.customer_connect = this.cv.customer_connect
    this.customer_stylist = this.cv.fund_person_id
    this.customer_Decorate = this.cv.customer_Decorate
    this.customer_referrer = this.cv.customer_referrer
    this.customer_budget = this.cv.customer_budget
    this.Customer_type = this.cv.customer_type
    // this.listRadio_all = this.cv.customer_form
    this.customer_demand = this.cv.customer_demand
    this.Customer_grade = this.cv.customer_grade
    if (this.cv.customer_form == ''){
      this.listRadio_all = ''
    }else if (this.cv.customer_form == '家装') {
      this.listRadio_all = '家装'
    }else if (this.cv.customer_form == '工装') {
      this.listRadio_all = '工装'
    }
    //  跟进人
    this.axios.get('/select_follow_person'+'?fund_person_state=4').then(res => {
      this.profetName = res.data.data
    })
    // 查询项目的跟进信息
    this.axios.get('/Customer/SelectFollow'+'?Customer_id=' + this.cv.customer_id).then(res => {
      this.stage = res.data
    })

    // 设计师
    this.axios.get('/select_follow_person'+'?fund_person_state=3').then(res => {
      this.listName = res.data.data
    })
    //	修改记录
    /*this.axios.get(url.clientUndata).then(info => {
      this.undata = info.data.data
    })*/
  },
  methods: {
    //记录保存
    add(){
      var then = this
      var check = true
      if (this.follow_person == '') {
        mui.toast('跟进人不能为空')
        check = false
        return false
      }
      if (this.nexDate == '') {
        mui.toast('下次跟进不能为空')
        check = false
        return false
      }
      if (this.stage_name == '') {
        mui.toast('当前阶段不能为空')
        check = false
        return false
      }
      if (this.list_text== '') {
        mui.toast('跟进记录不能为空')
        check = false
        return false
      }
      //    录入数据
      var add = '?Customer_name=' + this.cv.customer_id + '&follow_person=' + this.follow_person + '&follow_text=' + this.list_text +'&follow_stage='+this.stage_name
      + '&follow_Pre_date='+this.nexDate
      this.axios.get('/Customer/AddFollow' + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data, function () {
            then.$router.push('customer_statistics')
          })
        }
      })
    },
    //开工
    goadd(){
        var then = this
        var check=true
        if (this.radio == '') {
          mui.toast('阶段不能为空')
          check = false
          return false
        }
        this.imgUrl_loading = true
        this.axios.get('/Customer/Update_Customer'+'?Customer_id='+this.cv.customer_id+'&Customer_name_state=2').then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            if (res.data.data == '修改成功') {
            mui.alert('已开工',function () {
              then.$router.go(0)
            })
            }
          }
        })
        this.alerto = false
      // this.$router.push({ path: 'site_modify', query: { id: this.cv.customer_id } })
    },
    // 修改
    UpdateCustomer () {
      var then = this
      var add = '?Customer_id='+this.cv.customer_id
      if (this.customer_name != this.cv.customer_name) {
        add+='&Customer_name='+this.customer_name
      }
      if (this.customer_linkman != this.cv.customer_linkman) {
        add+='&Customer_linkman='+this.customer_linkman
      }
      if (this.customer_connect != this.cv.customer_connect) {
        add+='&Customer_connect='+this.customer_connect
      }
      if (this.customer_stylist != this.cv.customer_stylist) {
        add+='&Customer_stylist='+this.customer_stylist
      }
      if (this.customer_Decorate != this.cv.customer_Decorate) {
        add+='&Customer_Decorate='+this.customer_Decorate
      }
      if (this.customer_budget != this.cv.customer_budget) {
        add+='&Customer_budget='+this.customer_budget
      }
      if (this.customer_demand != this.cv.customer_demand) {
        add+='&Customer_demand='+this.customer_demand
      }
      if (this.Customer_type != this.cv.customer_type) {
        add+='&Customer_type='+this.Customer_type
      }
      if (this.listRadio_all != this.cv.customer_form) {
        add+='&Customer_form='+this.listRadio_all
      }
      if (this.customer_referrer != this.cv.customer_referrer) {
        add+='&Customer_referere='+this.customer_referrer
      }
      if (this.Customer_grade != this.cv.Customer_grade) {
        add+='&Customer_grade='+this.Customer_grade
      }
      this.axios.get('/Customer/UpdateCustomer'+add).then(res=>{
        //   判断是否修改数据
        if (this.customer_name != this.cv.customer_name || this.customer_linkman != this.cv.customer_linkman || this.customer_connect!=this.cv.customer_connect||
          this.customer_stylist != this.cv.customer_stylist || this.customer_Decorate!=this.cv.customer_Decorate || this.customer_referrer != this.cv.customer_referrer
          || this.customer_budget != this.cv.customer_budget || this.Customer_type != this.cv.Customer_type){
          mui.alert(res.data,function () {
            then.$router.push({name:'customer_statistics'})
          })
        }else{
          mui.toast('您什么都未修改')
        }
      })
    },
    //  删除
    dele () {
      var then = this
      this.imgUrl_loading = true
      this.axios.get('/Customer/DeleteCustomer'+'?Customer=' + this.cv.customer_id).then(res => {
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
    /*time: function (date, day) {
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
    }*/
  }
}
</script>

<style scoped>
@import "../css/public.css";
/deep/input::-webkit-input-placeholder{color: #818181}
.mui-input-group{background-color: transparent}
/*form与form之间的差距*/
.classGray{color: gray}
.form-pab{margin-bottom: 15px;}
.all-row{display: flex;}
.all-row input{font-size: 14px!important;}
.all-row label:nth-child(1){flex: 1}
.all-row label:nth-child(2){flex:4;overflow: auto}
.update-btn{text-align: center;margin-top: 12px}
.update-btn button{width: 38%;line-height: 10px;float:inherit}
select{font-size: 15px}
/*form2-label*/
#app{padding-top: 0;}
.row-flex label{width: 50%;}
.row-flex input{width: 50%!important;font-size: 12px;}
.flex-mm div{width: 50%;}
.left-mar{padding-left: 0!important;}
.left-mar div{line-height: 40px}
/*记录*/
.jin{display: flex;line-height: 40px;border-bottom: 1px solid black;width: 95%;margin-left: 15px;margin-bottom: 11px}
.jin-date{display: flex;margin-left: 112px}
.gen{text-align: left;font-size: 15px;color: gray;padding-left: 43px}
.jin-date p:nth-child(2){text-align: right;padding-right: 16px;}
.row-textarea{height: 54px!important;border: 1px solid #dadada;width: 95%;margin-left: 11px}
.row-textarea textarea{font-size: 14px;color: black;padding-left: 2px!important;padding-top: 3px}
.box-h4 h4:nth-child(1){line-height: 28px;border-bottom: 2px solid black;font-size: 15px;width: 95%;margin-left: 14px}
ul{background-color: #efeff4;font-size: 15px}
.mui-table-view-cell.mui-collapse .mui-collapse-content{background-color: #efeff4;padding: 0}
/*按钮*/
.row-left{font-size: 15px;display: flex;}
.row-left-on{flex: 1;display: flex;}
.row-left-on:nth-child(1) label{padding: 10px 15px;line-height: 25px;white-space: nowrap}
.row-left-on:nth-child(1) select{margin-left: 10px;margin-bottom: 0}
.radio-left{display: flex;position: relative;right: 18px;top: 6px}
.mui-checkbox.mui-left label, .mui-radio.mui-left label{padding-left: 23px;white-space: nowrap}
.mui-checkbox.mui-left input[type=checkbox], .mui-radio.mui-left input[type=radio]{left: -2px!important;}
.mui-input-row{overflow: unset}
.mui-input-group:before,.mui-table-view:before,.mui-input-group:after,.mui-table-view:after,.mui-table-view-cell:after,
.mui-input-group:after, .mui-input-row:nth-last-child(1):after{background-color: transparent!important;}
.go-add{text-align: center;margin-bottom: 34px;}
.go-add button{background-color: black;color: white;width: 45%;margin-top: 17px}
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}
.form-botton{text-align: center;margin-top: 17px}
.botton-mar{margin-bottom: 27px;}
.mui-chech{white-space: normal}
.mui-chech label{width: 21%;}
.mui-heck{position: relative;right: 9px;}
.mui-chech label,.mui-heck label{padding-left: 48px!important;width: 131%}
.row-input{flex: 1;padding-left: 21px!important;}
.mui-input-group .mui-input-row:after{background-color: transparent}
/deep/.el-input__prefix{display: none}
</style>
