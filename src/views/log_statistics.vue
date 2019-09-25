<template>
    <div class="admin_log">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'log_admin'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工作统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>工作统计</h2>
          <p>/Log statistics</p>
        </div>
      </div>
      <!--内容-->
      <div class="mui-content asd">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>用户名</label>
            <select name="" v-model="user_id" :class="{gren:user_id=='',blak:user_id!=''}" @change="btn(user_id)">
              <option value="">请选择</option>
              <option v-for="item in user" :value="item.user_id">{{item.user_name}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>开始时间</label>
            <el-date-picker v-model="startDate" type="date" placeholder="选择日期" @change="star"></el-date-picker>
          </div>
          <div class="mui-input-row">
            <label>结束时间</label>
            <el-date-picker v-model="entDate" type="date" placeholder="选择日期" @change="ent"></el-date-picker>
          </div>
        </form>
      </div>
      <div class="mui-content app">
        <el-card class="box-card" v-for="(item,index) in text" :key="index" v-if="item.plan_over !=''">
          <div slot="header" class="clearfix">
            <span>{{item.plan_person}}</span>
            <span>{{item.date | data}}</span>
          </div>
          <div class="text item">
            {{reol(item.plan_text)}}
<!--            {{item.plan_text}}-->
          </div>
          <div style="color: #919191;word-break: break-all" v-if="item.plan_over">{{item.plan_over}}</div>
          <div style="color: #919191;word-break: break-all" v-if="item.plan_over == undefined">待汇报</div>
        </el-card>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'admin_log',
    data(){
      return{
        money_plus: require('../image/plus.png'),
        text:'',//查询数据
        user:'',//用户变量
        user_id: '',
        startDate:'',//结束时间
        entDate:'',//开始时间
        data:'',//今日时间
        qianData:'',//昨天时间
        str:'',//开始时间
        ents:'',//结束时间
        prosen_id:'',//用户id
      }
    },
    methods:{
      // 封装前一天时间
      GetDateStr (AddDayCount) {
        var dd = new Date()
        dd.setDate(dd.getDate() + AddDayCount)// 获取AddDayCount天后的日期
        var y = dd.getFullYear()
        var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)// 获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()// 获取当前几号，不足10补0
        return y + '-' + m + '-' + d
      },
    //  搜索
      btn(id){
        this.prosen_id = id
        this.axios.get('/Administration/Select_Plan?user_id='+id+'&StartDate='+this.qianData).then(res=>{
          this.text = res.data.data
          this.user = res.data.user
        })
      },
    //  开始时间
      star(){
        var data = new Date(this.startDate)
        var y = data.getFullYear()
        var m = data.getMonth() + 1
        if (m < 10) {
          m='0'+m
        }
        var d = data.getDate() - 1
        if (d < 10) {
          d='0'+d
        }
        var dd = y+'-'+m+'-'+d
        this.str = dd
        var add = '?StartDate='+dd
        if (this.prosen_id != '') {
          add+='&user_id='+this.prosen_id
        }
        if (this.ents != '') {
          add+='&EndDate='+this.ents
        }
        this.axios.get('/Administration/Select_Plan'+add).then(res=>{
          this.text = res.data.data
          this.user = res.data.user
        })
      },
    //  结束时间
      ent(){
        var data = new Date(this.entDate)
        var y = data.getFullYear()
        var m = data.getMonth() + 1
        if (m < 10) {
          m='0'+m
        }
        var d = data.getDate() - 1
        if (d < 10) {
          d='0'+d
        }
        var dd = y+'-'+m+'-'+d
        this.ents = dd
        var add = '?EndDate='+dd
        if (this.prosen_id != '') {
          add+='&user_id='+this.prosen_id
        }
        if (this.str != '') {
          add+='&StartDate='+this.str
        }
        this.axios.get('/Administration/Select_Plan'+add).then(res=>{
          this.text = res.data.data
          this.user = res.data.user
        })
      },
    //查询信息
      search_text(){
        this.axios.get('/Administration/Select_Plan?StartDate='+this.qianData).then(res=>{
          this.text = res.data.data
          // var str = a.replace(/,|，|、/g, '\n')
          for(var index in this.text){
            // console.log(this.text[index].plan_text.replace(/\d+./g, '\n'))
            // console.log(this.text[index].plan_text.split(/([0-9]|.)\r\n\r\n\s+/))
          }
          this.user = res.data.user
        })
      },
    //  文章截取
      reol(str){
        return str.replace(/。/g, '\n')
      },
    //  今天时间
      datas(){
        var data = new Date()
        var y = data.getFullYear()
        var m = data.getMonth() + 1
        if (m < 10) {
          m = '0'+m
        }
        var d = data.getDate()
        if (d < 10) {
          d = '0'+d
        }
        var dd = y+'-'+m+'-'+d
        this.data = dd
      }
    },
    created () {
      this.qianData = this.GetDateStr(-1)
      this.datas()
      this.search_text()
    }
  }
</script>

<style scoped>
  /deep/input::-webkit-input-placeholder{color: #818181}
  .asd{padding-top: 0}
  .customer{flex: 1;}
  .one-img{display: flex;}
  .item{white-space: pre-line}
  .mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
  .mui-img a img{width: 100%;}
  .clearfix span:nth-child(2){float: right}
  /*表*/
  /deep/.el-card__header{background-color: black;color: white;padding: 10px 20px}
  /deep/.text {font-size: 14px;}
  /deep/.item {margin-bottom: 18px;border-bottom: 1px solid;word-break: break-all}
  /deep/.clearfix:before, .clearfix:after {display: table;content: "";}
  /deep/.clearfix:after {clear: both}
  /deep/.box-card {width: 100%;font-size: 15px;margin-bottom: 20px}
  /deep/.box-card:nth-child(2){margin-bottom: 20px}
  /deep/.el-card__body{padding-left: 20px;padding-right: 20px;padding-top: 0}
  select{font-size: 15px}
  .gren{color: gray}
  .blak{color: black}
  /*按钮*/
  .btn-add{float: left;text-align: center;width: 100%;margin-bottom: 30px;margin-top: 15px}
  /deep/.el-button--success{width: 80%}
  /deep/.el-textarea .el-input__count{bottom: 21px}
  .form-botton{text-align: center}
  .form-botton button{width: 80%;margin-top: 30px}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}

</style>
