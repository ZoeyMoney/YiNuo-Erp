<template>
    <div class="NewUserName">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'administrative'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">添加账户</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--form-->
      <div class="mui-content">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear" v-model="name" placeholder="请输入用户名">
          </div>
          <div class="mui-input-row">
            <label>姓名</label>
            <input type="text" class="mui-input-clear" v-model="NewUserName" placeholder="请输入姓名">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input type="text" class="mui-input-clear" v-model="password" placeholder="请输入密码">
          </div>
          <div class="mui-input-row">
            <label>身份</label>
            <input type="text" class="mui-input-clear" v-model="people" placeholder="请输入身份">
          </div>
        </form>
        <button-save @click.native="add"></button-save>

      </div>
    </div>
</template>

<script>
import url from '../components/config'
export default {
  name: 'NewUserName',
  data () {
    return {
      imgUrl_loading: false,
      name: '', // 用户名
      password: '', // 密码
      people: '项目经理', // 身份
      NewUserName: ''// 姓名
    }
  },
  methods: {
    add () {
      var then = this
      var az = /[a-zA-Z]{6}/ // 用户名
      var nameReg = /^[\u4E00-\u9FA5]{2,4}$/ // 验证人的名字
      var pawd = /[0-9]{6}/ // 密码
      var check = true
      // 用户名
      if (this.name == '') {
        mui.toast('用户名不能为空')
        check = false
        return false
      }
      if (!az.test(this.name)) {
        mui.toast('用户名最低长度为6位数或格式错误')
        check = false
        return false
      }
      // 姓名
      if (this.NewUserName == '') {
        mui.toast('姓名不能为空')
        check = false
        return false
      }
      if (!nameReg.test(this.NewUserName)) {
        mui.toast('姓名格式错误')
        check = false
        return false
      }
      // 密码
      if (this.password == '') {
        mui.toast('密码不能为空')
        check = false
        return false
      }
      if (!pawd.test(this.password)) {
        mui.toast('密码格式错误')
        check = false
        return false
      }
      // 身份
      if (this.people == '') {
        mui.toast('身份不能为空')
        check = false
        return false
      }
      if (!nameReg.test(this.people)) {
        mui.toast('身份格式错误')
        check = false
        return false
      }
      this.imgUrl_loading = true
      this.axios.post(url.newUserName + '?user_number=' + this.name + '&user_password=' + this.password + '&role_name=' + this.people + '&user_name=' + this.NewUserName).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data.msg, function () {
            then.$router.go(0)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
