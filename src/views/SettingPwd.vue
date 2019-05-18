<template>
    <div class="SettingPwd">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'Setting'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">密码设置</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--form-->
      <div class="mui-content">
        <form class="mui-input-group setting-botton">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear" v-model="user_number">
          </div>
          <div class="mui-input-row">
            <label>原密码</label>
            <input type="text" class="mui-input-clear" v-model="pwd" placeholder="请输入密码">
          </div>
          <div class="mui-input-row">
            <label>新密码</label>
            <input type="password" class="mui-input-password" v-model="user_password" placeholder="请输入密码">
          </div>
        </form>
        <div class="form-button">
          <button type="button" class="mui-btn mui-btn-black" @click="go">确定</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'SettingPwd',
    data(){
      return{
        user_number:'',//用户名
        pwd:'',//原密码
        user_password:'',//新密码
      }
    },
    methods:{
      go(){
        var then = this
        var check = true
        var reg = /^[^\s]*$/; //不能有空格
        if (this.user_number == '') {
          mui.toast('用户名不能为空')
          check = false
          return false
        }
        if (this.pwd == '') {
          mui.toast('原密码不能为空')
          check = false
          return false
        }
        if (this.user_password == '') {
          mui.toast('新密码不能为空')
          check = false
          return false
        }
        if (!reg.test(this.user_password)) {
          mui.toast('新密码不能有空格')
          check = false
          return false
        }


        var add = '?user_number='+this.user_number+'&pwd='+this.pwd+'&user_password='+this.user_password
        this.axios.get('https://formattingclub.com/YiNuoLogin/User/update_user'+add).then(res=>{
          if (res.data.msg === '修改成功') {
            mui.alert('修改成功',function () {
              then.$router.push({name:'login'})
            })
          }else{
            mui.alert('修改失败')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .setting-botton{margin-bottom: 22px}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-button{text-align: center;}
</style>
