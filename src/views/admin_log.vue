<template>
    <div class="admin_log">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'log_admin'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工作日志</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="mui-content one-img">
        <div class="customer">
          <h2>工作日志</h2>
          <p>/projet log</p>
        </div>
      </div>
      <!--内容-->
      <div class="mui-content app">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span v-if="today_data">{{today_data}}</span>
            <span v-if="today_data ==''">无</span>
          </div>
          <div class="text item">
            <div v-if="today">{{today}}</div>
            <div v-if="today ==''">无</div>
          </div>
        </el-card>
        <div class="text-input">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="完成情况"
            :maxlength="150"
            :minlength="50"
            v-model="textarea"
            :show-word-limit="true"></el-input>
        </div>
        <div class="textrate">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span v-if="tomorrow_data">{{tomorrow_data}}</span>
            <span v-if="tomorrow_data ==''">{{tomorrow_dates}}</span>
          </div>
          <div class="text item">
            <div>{{tomorrow}}</div>
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入明日计划"
              :maxlength="150"
              :minlength="50"
              v-model="textareaval"
              :show-word-limit="true"
            :disabled="fasl"></el-input>
          </div>
        </el-card>
        </div>
        <div class="form-botton">
          <button type="button" class="mui-btn mui-btn-black" @click="add">提交</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'admin_log',
    data(){
      return{
        text:'',
        today:'',//今日
        today_data:'',//今日时间
        tomorrow:'',//明日
        tomorrow_data:'',//明日时间
        tomorrow_dates:'',
        Yesterday:'',//昨日
        textarea:'',//汇报内容
        dates:'',
        textareaval:'',
        fasl:false
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
        /*if (t < '18') {
          mui.toast('六点后才可以汇报')
          _true = false
          return false
        }*/
        if (this.tomorrow == '') {
          if (this.textarea.length < 50) {
            mui.toast('汇报内容不能低于50字')
            _true = false
            return false
          }
          if (this.textareaval.length < '50') {
            mui.toast('明日计划不能低于50字')
            _true = false
            return false
          }
          var add = '?plan_over='+this.textarea+'&plan_id='+id
        this.imgUrl_loading = true
        this.axios.post('/Administration/Update_Plan'+add).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert('汇报完成',function () {
              then.$router.go(0)
            })
          }
          })
        var adds = '?plan_text='+this.textareaval
        this.axios.post('/Administration/Add_Plan'+adds).then(res=>{
          /*if (res.status === 200) {
            mui.alert('执行成功',function () {
              then.$router.push({name:'admin_log'})
            })
          }*/
          })
        }else if (this.tomorrow != '') {
          if (this.textarea.length < 50) {
            mui.toast('汇报内容不能低于50字')
            _true = false
            return false
          }
          var add = '?plan_over='+this.textarea+'&plan_id='+id
          this.imgUrl_loading = true
          this.axios.post('/Administration/Update_Plan'+add).then(res=>{
            if (res.status === 200) {
              this.imgUrl_loading = false
              mui.alert('汇报完成',function () {
                then.$router.go(0)
              })
            }
          })
        }
      },
      //查询信息
      search_text(){

        this.axios.get('/Administration/Select_Plan').then(res=>{
          this.text = res.data.data
          // this.list_data(res.data.data)
          var datesd = ''
          var dier = ''
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
              this.today_data = datesd
            }else if (ds < datesd) {
              this.tomorrow_data = datesd
              this.tomorrow = this.text[index].plan_text
            }
            var dier = this.text[index.length-1].date.split(' ')[0]
            if (this.tomorrow_data == '') {
              var dad = new Date(dier)
              var yy = dad.getFullYear()
              var mm = dad.getMonth() + 1
              if (mm < 10) {
                mm='0'+mm
              }
              var dds = dad.getDate() + 1
              if (dds < 10) {
                dds='0'+dds
              }
              this.tomorrow_data = yy+'-'+mm+'-'+dds
            }
          }
          if (this.tomorrow == '') {
            this.fasl = false
          }else{
            this.fasl = true
          }
        })
      },
    },
    created () {
      this.search_text()
    },
  }
</script>

<style scoped>
  .customer{flex: 1;}
  .one-img{display: flex;}
  .mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
  .mui-img a img{width: 100%;}
  /*表*/
  .textrate /deep/.el-card__body{padding: 0}
  .textrate .item{margin-bottom: 0}
  .textrate textarea{margin-bottom: 0}
  /deep/.el-card__header{background-color: black;color: white;padding: 10px 20px}
  /deep/.text {font-size: 14px;}
  /deep/.item {margin-bottom: 18px;}
  /deep/.clearfix:before, .clearfix:after {display: table;content: "";}
  /deep/.clearfix:after {clear: both}
  /deep/.box-card {width: 100%;}
  /deep/.box-card:nth-child(2){margin-bottom: 20px}
  .textrate .item div:nth-child(1){padding: 20px}
  /*按钮*/
  .btn-add{float: left;text-align: center;width: 100%;margin-bottom: 30px;margin-top: 15px}
  /deep/.el-button--success{width: 80%}
  /deep/.el-textarea .el-input__count{bottom: 21px}
  .form-botton{text-align: center}
  .form-botton button{width: 80%;margin-top: 30px}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}

</style>
