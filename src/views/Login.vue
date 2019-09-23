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
      <div class="pay">
        <el-button @click="pay">支付</el-button>
      </div>
    </div>
</template>
<script>
import config from '../js/index'
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      pwd: '',
      imgUrl_loading: false,
      imgSrc: require('../image/2146070222.jpg'),
      config:false
    }
  },
  created () {

  },
  methods: {
    go () {
      var _this = this
      var check = true
      var regEn = /[`~!@#$%^&*()_+<>?:"{},.\\/;'[\]]/im,
        regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
      if (this.name == '' || this.pwd == '') {
        mui.alert('请输入用户名或密码', function () {
          location.href = ''
        })
      } else {
        if (regEn.test(this.name) || regCn.test(this.name)) {
          mui.toast('不能含有特殊字符')
          check = false
          return false
        }
        this.imgUrl_loading = true
        this.axios.post('/Login' + '?name=' + this.name + '&pwd=' + this.pwd).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
            this.config = true
            if (res.data.msg === '登录成功') {
              sessionStorage.setItem(config.KEY.CACHE_LOGIN_USER, _this.name)
              sessionStorage.setItem(config.KEY.CACHE_LOGIN_ID, res.data.userid)
              sessionStorage.setItem(config.KEY.CACHE_LOGIN_NAME,res.data.userNumber)
              sessionStorage.setItem(config.KEY.CACHE_LOGIN_TOKEN,res.data.token)
              localStorage.data = JSON.stringify(res.data)
              _this.$store.commit('isLogin', res.data.userid)
              // _this.$router.push('index')
              _this.$router.push({ name: 'index' })
              // })
            } else {
              mui.alert('账号或密码错误')
            }
          }
        })
      }
    },
      pay(){
        this.axios.post('pay/pay?oid=5').then(res=>{
            if (res.status===200){
                location.href = res.data.mwebUrl
            }
        })
      }
    /*add(){

    }*/
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  input::-webkit-input-placeholder{color: #464646}
  /*.bcg{position: fixed;z-index: 1000;background: url("../image/507839882.png") no-repeat;background-size: cover;width: 100%;height: 100%;}*/
  .pay{position: relative;top: 30%;text-align: center}
  .logo{position: relative;z-index: 1000;width: 100%;margin: 0 auto;top: 11%;text-align: center;}
  .logo .logo-bcg{width: 100%}
  .logo .logo-bcg img{width: 80px}
  .login{position: fixed;width: 100%;height: 100%}
  .bcg-form{z-index: 1000;position: relative;top: 20%;width: 90%;margin: 0 auto 23px;}
  .go-btn{z-index: 1000;top: 22%;}
  .bcg-form .input-rot{border: 1px solid rgba(159, 159, 159, 0.28);-webkit-border-radius: 41px;-moz-border-radius: 41px;border-radius: 41px;padding: 1px 0;margin-bottom: 11px;}
  .bcg-form .input-rot label{font-size: 15px;color: #464646;width: 20%;padding-left: 27px;}
  .bcg-form .input-rot input{width: 72%;margin-bottom: 0;-webkit-border-radius: 50px;-moz-border-radius: 50px;border-radius: 50px;background-color: transparent!important;border: 0;padding: 0 36px;color: #464646;}
  .go-btn button{width: 89%;line-height: 28px;-webkit-border-radius: 30px;-moz-border-radius: 30px;border-radius: 30px;background-color: rgba(112, 60, 24,0.4);border: 0;color: #464646;letter-spacing: 15px}
   input[type=datetime-local]{-webkit-appearance:none;outline:none;border:none;}
      select{-webkit-appearance: none;}

  /*弹窗*/
  .msg{width: 80%;margin: auto;text-align: center;background-color: white;position: relative;top: 35%;z-index: 1000;padding: 18px;
    -webkit-border-radius: 18px;
    -moz-border-radius: 18px;
    border-radius: 18px;}
  .meg{background-color: rgba(135, 135, 135, 0.31);position: absolute;left: 0;top: 0;right: 0;bottom: 0;z-index: 1000}

</style>
