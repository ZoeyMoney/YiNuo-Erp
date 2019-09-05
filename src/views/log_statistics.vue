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
         <el-card class="box-card">
          <!-- <div slot="header" class="clearfix">
            <span v-if="today_data">{{today_data}}</span>
            <span v-if="today_data ==''">无</span>
          </div> -->
          <div class="text item">
            <div v-if="today">{{today}}</div>
            <div v-if="today ==''">无</div>
          </div>
          
          
        </el-card>
       
       
        <!-- <div class="text-input">
          <el-input
            type="textarea"
            :rows="5"
            placeholder="完成情况"
            :maxlength="150"
            :minlength="50"
            v-model="textarea"
            :show-word-limit="true"></el-input>
        </div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span v-if="tomorrow_data">{{tomorrow_data}}</span>
            <span v-if="tomorrow_data ==''">无</span>
          </div>
          <div class="text item">
            <div v-if="tomorrow">{{tomorrow}}</div>
            <div v-if="tomorrow ==''">无</div>
          </div>
        </el-card> -->
       
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
        today_data:'',//今日时间
        tomorrow:'',//明日
        tomorrow_data:'',//明日时间
        Yesterday:'',//昨日
        textarea:'',//汇报内容
        dates:''
      }
    },
    methods:{
      
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
  /deep/.box-card {width: 100%;}
  /deep/.box-card:nth-child(2){margin-bottom: 20px}
  /*按钮*/
  .btn-add{float: left;text-align: center;width: 100%;margin-bottom: 30px;margin-top: 15px}
  /deep/.el-button--success{width: 80%}
  /deep/.el-textarea .el-input__count{bottom: 21px}
  .form-botton{text-align: center}
  .form-botton button{width: 80%;margin-top: 30px}
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 22%;margin-left: 18px}

</style>
