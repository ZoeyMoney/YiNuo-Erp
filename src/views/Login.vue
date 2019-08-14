<template>
    <div class="login">
      <div class="bcg"></div>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <div class="logo">
        <div class="logo-bcg">
          <img :src="imgSrc" alt="">
        </div>
      </div>
      <form class="bcg-form">
        <div class="input-rot">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" v-model="name" autocomplete="off">
        </div>
        <div class="input-rot">
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
          <input type="password" placeholder="请输入密码" v-model="pwd" autocomplete="off">
        </div>
      </form>
      <div class="mui-button-row go-btn">
        <button type="button" @click="go">登录</button>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      pwd: '',
      imgUrl_loading:false,
      imgSrc:require('../image/2146070222.jpg')
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
        this.imgUrl_loading = true
        this.axios.post('/Login'+'?name=' + this.name + '&pwd=' + this.pwd).then(res=>{
          if (res.status === 200) {
            this.imgUrl_loading = false
            if (res.data.msg === '登录成功') {
              localStorage.data = JSON.stringify(res.data)
              // console.log(res.data.token)
              // this.$store.commit('token',res.data.token)
              // console.log(this.state.token)
              mui.alert(res.data.msg, function () {
                _this.$router.push('index')
              })
            }else{
              mui.alert('账号或密码错误')
            }
          }
        })
      }
    }
  },
}
</script>

<style scoped>
  @import "../css/public.css";
  input::-webkit-input-placeholder{color: #464646}
  /*.bcg{position: fixed;z-index: 1000;background: url("../image/507839882.png") no-repeat;background-size: cover;width: 100%;height: 100%;}*/
  .logo{position: relative;z-index: 1000;width: 100%;margin: 0 auto;top: 11%;text-align: center;}
  .logo .logo-bcg{width: 100%}
  .logo .logo-bcg img{width: 80px}
  .login{position: fixed;width: 100%;height: 100%}
  .bcg-form{z-index: 1000;position: relative;top: 20%;width: 90%;margin: 0 auto 23px;}
  .go-btn{z-index: 1000;top: 22%;}
  .bcg-form .input-rot{border: 1px solid rgba(159, 159, 159, 0.28);-webkit-border-radius: 41px;-moz-border-radius: 41px;border-radius: 41px;padding: 1px 0;margin-bottom: 11px;}
  .bcg-form .input-rot label{font-size: 15px;color: #464646;width: 20%;padding-left: 27px;}
  .bcg-form .input-rot input{width: 72%;margin-bottom: 0;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px;background-color: transparent!important;border: 0;padding: 0 36px;color: #464646;}
  .go-btn button{width: 89%;line-height: 28px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;background-color: rgba(112, 60, 24,0.4);border: 0;color: #464646;letter-spacing: 15px}
</style>
