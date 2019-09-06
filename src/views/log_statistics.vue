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
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
          <div class="mui-input-row">
            <label>结束时间</label>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </form>
      </div>
      <div class="mui-content app">
        <el-card class="box-card" v-for="(item,index) in text" :key="index" v-if="item.plan_over !=''">
          <div slot="header" class="clearfix">
            <span>{{item.date | data}}</span>
          </div>
          <div class="text item">
            {{item.plan_text}}
          </div>
          <div style="color: #919191;word-break: break-all">{{item.plan_over}}</div>
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
        text:'',
        user:'',
        user_id: '',
        value1:''
      }
    },
    methods:{
    //  搜索
      btn(id){
        this.axios.get('/Administration/Select_Plan?user_id='+id).then(res=>{
          this.text = res.data.data
          this.user = res.data.user
        })
      },
    //查询信息
      search_text(){
        this.axios.get('/Administration/Select_Plan').then(res=>{
          this.text = res.data.data
          this.user = res.data.user
        })
      }
    },
    created () {
      this.search_text()
    }
  }
</script>

<style scoped>
  /deep/input::-webkit-input-placeholder{color: #818181}
  .asd{padding-top: 0}
  .customer{flex: 1;}
  .one-img{display: flex;}
  .mui-img{width: 36px;padding-top: 9%;padding-right: 9px;}
  .mui-img a img{width: 100%;}
  /*表*/
  /deep/.el-card__header{background-color: black;color: white;padding: 10px 20px}
  /deep/.text {font-size: 14px;}
  /deep/.item {margin-bottom: 18px;border-bottom: 1px solid;padding-bottom: 12px;word-break: break-all}
  /deep/.clearfix:before, .clearfix:after {display: table;content: "";}
  /deep/.clearfix:after {clear: both}
  /deep/.box-card {width: 100%;font-size: 15px;margin-bottom: 20px}
  /deep/.box-card:nth-child(2){margin-bottom: 20px}
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
