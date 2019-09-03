<template>
    <div class="Plan_to_increase">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'admin_log'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">明日计划</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>明日计划</h2>
          <p>/Plan_to_increase</p>
        </div>
      </div>
      <!--明日计划-->
      <div class="mui-content app">
        <el-input
          type="textarea"
          :rows="10"
          placeholder="请输入内容"
          :maxlength="150"
          :minlength="50"
          v-model="textarea"
        :show-word-limit="true"></el-input>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">开始执行</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Plan_to_increase',
    data(){
      return{
        textarea:'',
        imgUrl_loading:false,
      }
    },
    methods:{
      go(){
        var then = this
        var _true = true
        if (this.textarea.length < '50') {
          mui.toast('内容不能小于50位')
          _true = false
          return false
        }
        this.imgUrl_loading = true
        var add = '?plan_text='+this.textarea
        this.axios.post('/Administration/Add_Plan'+add).then(res=>{
           if (res.status === 200) {
             this.imgUrl_loading = false
             mui.alert('执行成功',function () {
               then.$router.push({name:'admin_log'})
             })
           }
        })
      }
    }
  }
</script>

<style scoped>
/deep/.el-textarea .el-input__count{bottom: 21px}
.mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
.mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
