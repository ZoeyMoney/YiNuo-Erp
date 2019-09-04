<template>
    <div class="admin_log">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工作日志</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>工作日志</h2>
          <p>projet log</p>
        </div>
        <div class="mui-img" v-if="tomorrow ==''">
          <router-link :to="{name:'Plan_to_increase'}"><img :src="money_plus" alt="增加"></router-link>
        </div>
      </div>
      <!--内容-->
      <div class="mui-content app">

       <!-- <div class="box">
          <div class="box-text box-one" v-for="item in text">
            <div class="data-box">
              {{item.date}}
            </div>
            <div class="box-s">
              <div>计划内容：</div>
              <div>{{item.plan_text}}</div>
            </div>
            <div class="box-s">
              <div>完成情况：</div>
              <div v-if="item.plan_over == undefined">待汇报</div>
              <div v-else>{{item.plan_over}}</div>
            </div>
          </div>
        </div>-->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>今日计划</span>
          </div>
          <div class="text item">
            {{today}}
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>明日计划</span>
          </div>
          <div class="text item">
            {{tomorrow}}
          </div>
        </el-card>
        <div class="text-input">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="汇报内容"
            :maxlength="150"
            :minlength="50"
            v-model="textarea"
            :show-word-limit="true"></el-input>
        </div>
        <div class="btn-add">
          <el-button type="success" @click="add">{{dates}}工作汇报</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'admin_log',
    data(){
      return{
        money_plus: require('../image/plus.png'),
        text:'',
        today:'',//今日
        tomorrow:'',//明日
        Yesterday:'',//昨日
        textarea:'',//汇报内容
        dates:''
      }
    },
    methods:{
      //工作提交
      add(){
        var _true = true
        var then = this
        var id =''
        var data = new Date()
        var y = data.getFullYear()
        var m = data.getMonth() + 1
        if (m < 10) {
          m='0'+m
        }
        var d = data.getDate()
        if (d < 10) {
          d='0'+d
        }
        var t = data.getHours();
        var MM =data.getMinutes();
        var s = data.getSeconds();
        var ds = y+'-'+m+'-'+d
        var dd = y+'-'+m+'-'+d+' '+t+':'+MM+':'+s
        var datesd = ''
        var fa = false
        for (var index in this.text) {
          datesd = this.text[index].date.split(' ')[0]
          if (ds == datesd) {
            id = this.text[index].plan_id
            fa = true
          }
        }
        if (fa = true) {
          for (var index in this.text) {
            if (this.text[index].plan_over == undefined) {
              id = this.text[index].plan_id
              break
            }
          }
        }
        var add = '?plan_over='+this.textarea+'&plan_id='+id
        if (this.textarea.length < 50) {
          mui.toast('汇报内容不能低于50字')
          _true = false
          return false
        }
        if (t < '18') {
          mui.toast('六点后才可以汇报')
          _true = false
          return false
        }
        this.imgUrl_loading = true
        this.axios.post('/Administration/Update_Plan'+add).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert('汇报完成',function () {
              then.$router.go(0)
            })
          }
        })
      },
      //查询信息
      search_text(){
        this.axios.get('/Administration/Select_Plan').then(res=>{
          this.text = res.data.data
          // this.list_data(res.data.data)
          var id =''
          var datesd = ''
          var data = new Date()
          var y = data.getFullYear()
          var m = data.getMonth() + 1
          if (m < 10) {
            m='0'+m
          }
          var d = data.getDate()
          if (d < 10) {
            d='0'+d
          }
          var t = data.getHours();
          var MM =data.getMinutes();
          var s = data.getSeconds();
          var ds = y+'-'+m+'-'+d
          var dd = y+'-'+m+'-'+d+' '+t+':'+MM+':'+s
          for (var index in this.text) {
            datesd = this.text[index].date.split(' ')[0]
            if (ds == datesd) {
              this.today = this.text[index].plan_text
            }else if (ds > datesd) {
              this.tomorrow = this.text[index].plan_text
            }
          }
        })
      },
      /*list_data(text){
        var id =''
        var data = new Date()
        var y = data.getFullYear()
        var m = data.getMonth() + 1
        if (m < 10) {
          m='0'+m
        }
        var d = data.getDate()
        if (d < 10) {
          d='0'+d
        }
        var t = data.getHours();
        var MM =data.getMinutes();
        var s = data.getSeconds();
        var ds = y+'-'+m+'-'+d
        var dd = y+'-'+m+'-'+d+' '+t+':'+MM+':'+s
        var datesd = ''
        var fa = false
        for (var index in text) {
          datesd = text[index].date.split(' ')[0]
          if (ds == datesd) {
            this.dates = text[index].date
            id = text[index].plan_id
            fa = true
          }
        }
        if (fa = true) {
          for (var index in text) {
            if (text[index].plan_over == undefined) {
              this.dates = text[index].date
              id = text[index].plan_id
              break
            }
          }
        }
      }*/
    },
    created () {
      this.search_text()
    }
  }
</script>

<style scoped>
  .customer{flex: 1;}
  .one-img{display: flex;}
  .mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
  .mui-img a img{width: 100%;}
  /*表*/
  /*.box{float: left;height: 100px;width: 100%;font-size: 15px;margin-bottom: 243px}
  .box div{float: left;width: 100%}
  .box-plan{text-align: center;}
  .plan{line-height: 39px;height: 40%;background-color: black;color: white}
  .box-one{border: 1px solid #a2a2a2;}
  .text{word-break: break-all}
  .box-text{overflow: auto;height: 330px;margin-bottom: 20px;border-radius: 11px}
  .box-s{display: flex}
  .box-s:nth-child(2){border-bottom: 1px solid black}
  .box-s div:nth-child(1){flex: 1;text-align: center;line-height: 145px;}
  .box-s div:nth-child(2){flex: 2;padding: 20px}
  .data-box{text-align: center;font-weight: 600;padding-top: 5px;padding-bottom: 10px;background-color: black;color: white}*/
  /deep/.el-card__header{background-color: black;color: white;padding: 10px 20px}
  /deep/.text {font-size: 14px;}
  /deep/.item {margin-bottom: 18px;}
  /deep/.clearfix:before, .clearfix:after {display: table;content: "";}
  /deep/.clearfix:after {clear: both}
  /deep/.box-card {width: 100%;margin-bottom: 20px}
  /*按钮*/
  .btn-add{float: left;text-align: center;width: 100%;margin-bottom: 30px;margin-top: 15px}
  /deep/.el-button--success{width: 80%}
  /deep/.el-textarea .el-input__count{bottom: 21px}
</style>
