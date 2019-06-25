<template>
    <div class="task_people">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'admin_task'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">任务下达</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
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
            <label>任务人</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in list_tesl" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>完成时间</label>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="datetime"
                align="left"
                placeholder="选择日期时间">
              </el-date-picker>
            </div>
          </div>
          <div class="mui-input-row">
            <label>下达人</label>
            <select name="">
              <option value="">请选择</option>
              <option v-for="item in list_tesl" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>任务详情</label>
            <input type="text" class="mui-input-clear" placeholder="请输入任务详情">
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
        value1:'',
        list_tesl:[
          {text:'张三'},
          {text:'李四'},
          {text:'王五'},
          {text:'奥利弗就会物理'},
        ],
      }
    },
    methods:{
      saveName(){
        mui.alert('未完成')
      }
    }
  }
</script>

<style lang="scss">
  .task_people{
select{font-size: 15px}
  /*data*/
  .el-input__prefix, .el-input__suffix{display: none}
  .el-input--prefix .el-input__inner{color: black;padding: 0}
    /*btn*/
    .form-btn button{width: 59%!important;margin: 0 3px!important;}
    .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;}
    .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
  }
 .el-time-panel{width: 152px !important;}
</style>
