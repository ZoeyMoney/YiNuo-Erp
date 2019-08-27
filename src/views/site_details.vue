<template>
  <div class="site_details">
    <!--返回-->
    <header class="mui-bar mui-bar-nav">
      <router-link :to="{name:'After_sales_statistics'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">售后详细</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户详情-->
    <div class="mui-content">
      <div class="customer">
        <h2>售后详细</h2>
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
                <label>工地名称</label>
                <div>{{customer_name}}</div>
              </div>
            </a>
            <div class="mui-collapse-content">
              <div class="mui-input-row">
                <label>对接人</label>
                <input type="text" class="mui-input-clear" v-model="customer_linkman" placeholder="input">
              </div>
              <div class="mui-input-row">
                <label>分类</label>
                <input type="text" class="mui-input-clear" v-model="customer_connect" placeholder="input">
              </div>
              <div class="mui-input-row money-input">
                <label>甲方</label>
                <input type="text" class="mui-input-clear" v-model="Customer_DecorateJia">
                <span class="span-money">{{Customer_DecorateJia | MoneyFormat}}</span>
              </div>
              <div class="mui-input-row money-input">
                <label>乙方</label>
                <input type="text" class="mui-input-clear" placeholder="请输入预算金额" v-model="Customer_DecorateYi">
                <span class="span-money">{{Customer_DecorateYi | MoneyFormat}}</span>
              </div>
              <div class="mui-input-row money-input">
                <label>工人</label>
                <input type="text" class="mui-input-clear" placeholder="请输入预算金额" v-model="worker">
                <span class="span-money">{{worker | MoneyFormat}}</span>
              </div>
              <div class="mui-input-row">
                <label>总金额</label>
                <input type="text" class="mui-input-clear" v-model="customer_all" disabled="disabled">
              </div>
              <div class="mui-input-row">
                <label>报修时间</label>
                <el-date-picker v-model="customer_baoxiushijian" type="date" placeholder="选择日期时间"></el-date-picker>
              </div>
              <div class="mui-input-row">
                <label>预计完成</label>
                <el-date-picker v-model="customer_yujiwanchengshijian" type="date"
                                placeholder="选择日期时间"></el-date-picker>
              </div>
              <div class="mui-input-row">
                <label>质保截止</label>
                <el-date-picker v-model="customer_baozhiqi" type="date" placeholder="选择日期时间"></el-date-picker>
              </div>
              <div class="mui-input-row all-row textreap">
                <label>问题描述</label>
                <input type="text" v-model="customer_demand">
              </div>
              <div class="mui-input-row ImgUrl">
                <label>售后图片</label>
                <div class="imgWid">
                  <img :src="getImgUrl(ItemImgUrl)" @click="imgClick" alt="loading">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </form>
      <div class="mui-input-row update-btn">
        <div>
          <button type="button" class="mui-btn mui-btn-black" @click="UpdateCustomer">信息修改</button>
        </div>
      </div>
      <!--跟进记录-->
      <form class="mui-input-group form-pad box-h4">
        <div class="box3">
          <div>
            <h4>问题反馈及进度</h4>
          </div>
          <div class="mui-input-row go-nai">
            <label>跟进人员</label>
            <select name="" v-model="follow_person" :class="{classGray:follow_person=='',classBlack:follow_person !=''}">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in profetName" :value="item.fund_person_id">{{item.fund_person}}</option>
            </select>
          </div>
          <div class="mui-input-row go-nai">
            <label>跟进状态</label>
            <select name="" v-model="follow_loading" :class="{classGray:follow_loading=='',classBlack:follow_loading !=''}">
              <option value="" selected="selected">请选择</option>
              <option v-for="item in list_follow_loading" :value="item.text">{{item.text}}</option>
            </select>
          </div>
        </div>
        <div class="box">
          <div class="row-go">
            <div class="mui-input-row row-textarea">
              <textarea name="" rows="" cols="" placeholder="请输入问题反馈及进度" v-model="list_text"></textarea>
            </div>
            <div class="go-add">
              <button type="button" @click="add">反馈记录</button>
            </div>
          </div>
        </div>
      </form>
      <form class="mui-input-group form-pad box-h4">
        <h4>问题记录</h4>
        <div class="box" v-for="item in undata">
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
            <div class="mui-input-row row-textarea-two">
<!--              <textarea name="" rows="" cols="" :value="item.follow_text" disabled="disabled"></textarea>-->
              <div>{{item.follow_text}}</div>
            </div>
          </div>
        </div>
      </form>
      <div class="form-botton">
        <button type="button" class="mui-btn mui-btn-black" @click="dele">删除</button>
      </div>
    </div>
<!--     :style="{height:imgW+'px'}"-->
    <div class="tests" v-show="Imgtest" @click="cancel">
      <div class="imgWid" :class="{active: isActive, test: hasError}">
        <img :src="getImgUrl(ItemImgUrl)"  alt="loading">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'site_details',
  data () {
    return {
      imgUrl_loading:false,
      Imgtest:false,
      customer_name: '', // 项目
      customer_linkman:'',//负责人
      customer_connect:'',//分类
      Customer_DecorateJia:'',//甲方
      Customer_DecorateYi:'',//乙方
      worker:'',//工人
      customer_all:'',//总金额
      customer_baoxiushijian:'',//报修时间
      customer_yujiwanchengshijian:'',//预计完成
      customer_baozhiqi:'',//质保截止
      customer_demand:'',//问题描述
      ItemImgUrl:'',
      follow_person:'',//跟进人员
      profetName:'',//跟进人员列表
      follow_loading:'',//跟进状态
      list_follow_loading:[ //跟进内容
        {text:'待查看'},
        {text:'协商安排'},
        {text:'维修中'},
        {text:'观察期'},
        {text:'维修完工'},
      ],
      isActive: true,
      hasError: false,
      list_text:'',//跟进内容
      stageName: '', // 第二个form
      listtime: '', // 倒计时
      stage: '', // 修改记录
      undata: '',// 修改记录
      list:'',
      imgW:0
    }
  },
  created () {
    setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000)
    console.log(JSON.parse(localStorage.AfterSale_statistics))
    this.customer_name  = JSON.parse(localStorage.AfterSale_statistics).customer_name
    this.customer_linkman  = JSON.parse(localStorage.AfterSale_statistics).afterSale_person
    this.customer_connect  = JSON.parse(localStorage.AfterSale_statistics).afterSale_type
    this.Customer_DecorateJia  = JSON.parse(localStorage.AfterSale_statistics).afterSale_jia
    this.Customer_DecorateYi  = JSON.parse(localStorage.AfterSale_statistics).afterSale_yi
    this.worker  = JSON.parse(localStorage.AfterSale_statistics).afterSale_worker
    this.customer_all  = JSON.parse(localStorage.AfterSale_statistics).afterSale_yi + JSON.parse(localStorage.AfterSale_statistics).afterSale_jia + JSON.parse(localStorage.AfterSale_statistics).afterSale_worker
    this.customer_baoxiushijian  = JSON.parse(localStorage.AfterSale_statistics).afterSale_date
    this.ItemImgUrl  = JSON.parse(localStorage.AfterSale_statistics).afterSale_img
    this.customer_yujiwanchengshijian  = JSON.parse(localStorage.AfterSale_statistics).afterSale_pre_date
    this.customer_baozhiqi  = JSON.parse(localStorage.AfterSale_statistics).afterSale_date_close
    this.customer_demand  = JSON.parse(localStorage.AfterSale_statistics).afterSale_text
    //  跟进人员
    this.axios.get('/select_follow_person'+'?fund_person_state=4').then(res => {
      this.profetName = res.data.data
    })
    //问题记录查询
    this.axios.get('/AfterSale/SelectFollow'+'?Customer_id='+JSON.parse(localStorage.AfterSale_statistics).afterSale_id).then(res =>{
      this.undata = res.data
    })
  },
  methods: {
    //图片解析
    getImgUrl(val){
      var url = 'https://formattingclub.com/static/YiNuo/'+val
      return url
    },
    //点击放大
    imgClick(){
      this.Imgtest = true
      this.isActive = false
      this.hasError = true
      var mo=function(e){e.preventDefault();};
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",mo,false);//禁止页面滑动

      // this.imgW = 100+'100%'
      //判断页面的高度
      /*var scrollTop=0;
      if(document.documentElement&&document.documentElement.scrollTop)
      {
        scrollTop=document.documentElement.scrollTop;
      }
      else if(document.body)
      {
        scrollTop=document.body.scrollTop;
      }
      console.log(scrollTop)
       if (scrollTop >100){

       }*/
    },
    //图片放大后取消
    cancel(){
      this.Imgtest = false
      var mo=function(e){e.preventDefault();};
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",mo,false);
    },
    // 修改
    UpdateCustomer() {
      // this.$router.push({ path: 'siteModify', query: { id: this.customer_id } })
      var then =this
      var add = '?AfterSale_id='+JSON.parse(localStorage.AfterSale_statistics).afterSale_id
      if (this.customer_linkman != JSON.parse(localStorage.AfterSale_statistics).afterSale_person) {
        add+='&AfterSale_person='+this.customer_linkman
      }
      if (this.customer_connect != JSON.parse(localStorage.AfterSale_statistics).afterSale_type) {
        add+='&AfterSale_type='+this.customer_connect
      }
      if (this.worker != JSON.parse(localStorage.AfterSale_statistics).afterSale_worker) {
        add+='&AfterSale_worker='+this.worker
      }
      if (this.Customer_DecorateJia != JSON.parse(localStorage.AfterSale_statistics).afterSale_jia) {
        add+='&AfterSale_jia='+this.Customer_DecorateJia
      }
      if (this.Customer_DecorateYi != JSON.parse(localStorage.AfterSale_statistics).afterSale_yi) {
        add+='&AfterSale_yi='+this.Customer_DecorateYi
      }
      if (this.customer_yujiwanchengshijian != JSON.parse(localStorage.AfterSale_statistics).afterSale_pre_date) {
        var date = new Date(this.customer_yujiwanchengshijian)
        var dds = date.getFullYear()
        var yys = date.getMonth() + 1
        var mms = date. getDate()
        var dss = dds+'-'+yys+'-'+mms
        add+='&AfterSale_pre_date='+dss
      }
      if (this.customer_baozhiqi != JSON.parse(localStorage.AfterSale_statistics).afterSale_date_close) {
        var date = new Date(this.customer_baozhiqi)
        var ddsd = date.getFullYear()
        var yysd = date.getMonth() + 1
        var mmsd = date. getDate()
        var dssd = ddsd+'-'+yysd+'-'+mmsd
        add+='&AfterSale_date_close='+dssd
      }
      if (this.customer_demand != JSON.parse(localStorage.AfterSale_statistics).afterSale_text) {
        add+='&AfterSale_text='+this.customer_demand
      }
      if (this.customer_baoxiushijian != JSON.parse(localStorage.AfterSale_statistics).afterSale_date) {
        var date = new Date(this.customer_baoxiushijian)
        var dd = date.getFullYear()
        var yy = date.getMonth() + 1
        var mm = date. getDate()
        var ds = dd+'-'+yy+'-'+mm
        add+='&afterSale_date='+ds
      }

      this.imgUrl_loading = true
      this.axios.post('/AfterSale/Update_AfterSale'+add).then(res=>{
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.data,function () {
            then.$router.push({name:'After_sales_statistics'})
          })
        }
      })
    },
    //记录保存
    add(){
      var then = this
      var _true = true
      var add = '?'
      if (this.follow_person == '' || this.follow_loading == '' || this.list_text == '') {
        mui.toast('问题反馈不能有空')
        _true = false
        return false
      }
      add+='follow_person='+this.follow_person+'&follow_text='+this.list_text+'&Customer_name='+JSON.parse(localStorage.AfterSale_statistics).afterSale_id
      +'&follow_stage='+this.follow_loading
      this.imgUrl_loading = true
      this.axios.get('/AfterSale/AddFollow'+add).then(res=>{
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data,function () {
            then.$router.push({name:'After_sales_statistics'})
          })
        }
      })
    },
    //  删除
    dele () {
      var then = this
      var va = this.customer_id
      this.imgUrl_loading = true
      this.axios.post('/AfterSale/Delete_AfterSale'+'?AfterSale_id=' + JSON.parse(localStorage.AfterSale_statistics).afterSale_id).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.data,function () {
            then.$router.push({name:'After_sales_statistics'})
          })
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
  *{touch-action: pan-y;}
  /deep/input::-webkit-input-placeholder{color: #818181}
  .mui-input-group{background-color: transparent}
  .classGray{color: gray}
  .classBlack{color: black}
  select{font-size: 15px}
  img{width: 100%}
  .left-mar{padding-left: 0!important;}
  .left-mar div{line-height: 40px}
  /*form与form之间的差距*/
  .all-row{display: flex;}
  .all-row input{font-size: 14px!important;}
  .all-row label:nth-child(1){flex: 1}
  .all-row label:nth-child(2){flex:4;overflow: auto}
  /*img*/
  .ImgUrl{padding-bottom: 128px}
  .ImgUrl label{width: 100%!important;}
  .ImgUrl .imgWid{width: 120px;padding-left: 11px}
  .ImgUrl .imgWid img{width: 100%}
  .tests{position: absolute;top: 0%;left: 0;right: 0;bottom: 0;width: 100% !important;height:100%;background-color: rgba(51, 51, 51, 0.5)}
  .tests .test{position: relative;top: 47%}
  /*记录*/
  .jin{line-height: 40px;padding: 6px 15px}
  .jin-date{float: left;width: 30%}
  .gen{float: left;font-size: 15px}
  .gen{width: 26%}
  .row-textarea{height: 100px!important;}
  .row-textarea-two{height: auto!important;border: 1px solid #dadada;width: 95%;margin-left: 11px;font-size: 14px}
  .row-textarea textarea:nth-child(1){padding-left: 113px!important;font-size: 14px;}
  .box-h4 h4:nth-child(1){line-height: 28px;border-bottom: 2px solid black;font-size: 15px;width: 95%;margin-left: 14px}
  .mui-table-view-cell.mui-collapse .mui-collapse-content{background-color: #efeff4;padding: 0}
  ul{background-color: #efeff4;font-size: 15px}
  .mui-input-group:before,.mui-table-view:before,.mui-input-group:after,.mui-table-view:after,.mui-table-view-cell:after,
  .mui-input-group:after, .mui-input-row:nth-last-child(1):after{background-color: transparent!important;}
  /*按钮*/
  .go-add{text-align: center;}
  .go-add button{background-color: black;color: white;width: 38%;margin-top: 17px}
  .update-btn{text-align: center;margin-top: 12px}
  .update-btn button{width: 38%;line-height: 10px;float:inherit}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width:38%;}
  .form-botton{text-align: center;}
  /deep/.el-input__prefix{display: none}
</style>
