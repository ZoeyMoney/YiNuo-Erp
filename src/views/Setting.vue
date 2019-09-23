<template>
    <div class="Setting">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">设置</h1>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <div class="mui-content">
        <ul class="mui-table-view botton-mar">
          <li class="mui-table-view-cell" v-for="item in list">
            <router-link :to="item.href" class="mui-navigate-right">{{item.test}}</router-link>
          </li>
        </ul>
        <div class="form-button">
          <button type="button" class="mui-btn mui-btn-black" @click="setting">退出登录</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      imgUrl_loading: false,
      list: [
        { href: 'SettingName', test: '修改用户名' },
        { href: 'SettingPwd', test: '修改密码' },
        { href: 'userNameUpdate',test:'个人信息'}
      ],
    }
  },
  methods: {
    setting () {
      var then = this
      this.imgUrl_loading = true
      this.axios.get('/logout').then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.msg, function () {
            localStorage.clear()
            sessionStorage.clear()
            localStorage.removeItem('isLogin')
            then.$router.push({ name: 'Login' })
          })
        }
      })
    },
  },
  created () {

  },
  computed:{

  },
}
</script>

<style scoped>
@import "../css/public.css";
  .Setting{font-size: 15px}
.botton-mar{margin-bottom: 22px}
/*按钮*/
.mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
.form-button{text-align: center;}
</style>
