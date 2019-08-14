<template>
    <div class="task_people">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'admin_task'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">任务下达</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--任务下达-->
      <div class="mui-content">
        <div class="customer">
          <h2>任务下达</h2>
          <p>/admin_task</p>
        </div>
      </div>
      <!--center-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>执行人</label>
            <input type="text" v-model="task_people" @click="task_peopleClick" placeholder="请选择执行人">
          </div>
          <div class="mui-input-row">
            <label>下达人</label>
            <input type="text" v-model="Release" @click="Release_peopleClick" placeholder="请选择下达人">
          </div>
          <div class="mui-input-row">
            <label>期限</label>
            <div class="block">
              <el-date-picker v-model="valueDate" type="date" align="left" placeholder="选择日期时间"></el-date-picker>
            </div>
          </div>
          <div class="mui-input-row">
            <label>任务详情</label>
            <input type="text" class="mui-input-clear" v-model="task_text" placeholder="请输入任务详情">
          </div>
          <div class="mui-input-row">
            <label>天数</label>
            <input type="text" class="mui-input-clear" v-model="task_day" placeholder="请输入天数">
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" class="mui-btn mui-btn-blue" @click="saveName">下达任务</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'task_people',
    data(){
      return{
        valueDate:'',//期限
        task_people:'',//任务人
        task_people_id:'',//执行人id
        Release:'',//下达人
        Release_id:'',//下任达id
        task_text:'',//任务详情
        task_day:'',//天数
        imgUrl_loading:false,
        list_tesl:[
          {text:'张三'},
          {text:'李四'},
          {text:'王五'},
          {text:'奥利弗就会物理'},
        ],
      }
    },
    created(){
      this.task_people = window.fund_people
      this.task_people_id = window.fund_people_name
      this.Release = window.fund_people_huan
      this.Release_id = window.fund_people_huan_name
    },
    methods:{
      //执行人
      task_peopleClick(){
        var prosen = 'task_admin'
        this.$router.push({path:'relevant_people'})
        window.prosen = prosen
      },
      //下任ren
      Release_peopleClick(){
        var prosen = 'Release_admin'
        this.$router.push({path:'relevant_people'})
        window.prosen = prosen
      },
      saveName(){
        var then = this
        this.imgUrl_loading = true
        var dates = new Date(this.valueDate)
        var d = dates.getFullYear()
        var m = dates.getMonth() + 1
        var y = dates.getDate()
        var date = d+'-'+m+'-'+y
        var add = '?mission_make_person='+this.task_people_id+'&mission_inform_person='+this.Release_id+'&mission_text='+this.task_text+'&mission_day='+
          this.task_day+'&mission_startDate='+date+'&mission_state=0'
        this.axios.post('/Administration/Add_Mission'+add).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            mui.alert(res.data.data,function () {
              then.$router.push({name:'admin_task'})
            })
          }
        })
      }
    }
  }
</script>

<style scoped>
    .classGray{color: gray}
    .classBlack{color: black}
    select{font-size: 15px}
    /*data*/
    /deep/.el-input__prefix, .el-input__suffix{display: none}
    /deep/.el-input--prefix .el-input__inner{color: black;padding: 0}
    /*btn*/
    .form-btn button{width: 59%!important;margin: 0 3px!important;}
    .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
    .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
    /deep/input::-webkit-input-placeholder{color: #818181}
</style>
