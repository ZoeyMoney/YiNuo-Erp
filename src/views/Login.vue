<template>
    <div class="login">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>用户名</label>
          <input type="text" class="mui-input-clear" id="name" v-model="name" placeholder="请输入用户名">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input type="password" class="mui-input-password" id="pwd" v-model="pwd" placeholder="请输入密码">
        </div>
        <div class="mui-button-row">
          <button type="button" @click="go" class="mui-btn mui-btn-primary">登录</button>
        </div>
      </form>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      pwd: ''
    }
  },
  created () {

  },
  methods: {
    go () {
      if (this.name == '' || this.pwd == '') {
        mui.alert('请输入用户名或密码', function () {
          location.href = ''
        })
      } else {
        var _this = this
        const all = {name:this.name,pwd:this.pwd}
        this.axios.post('https://formattingclub.com/YiNuoLogin/Login?name=' + this.name + '&pwd=' + this.pwd).then(res => {
          if (res.data.msg === '登录成功') {
            mui.alert(res.data.msg, function () {
              _this.$router.push('index')
            })
          }else{
            mui.alert('登录失败')
          }
        })
      }
    }
  },
}
</script>

<style scoped>
  @import "../../public/mui.min.css";
  @import "../css/public.css";
  .login{position: fixed;top: 35%;width: 100%;}
</style>
