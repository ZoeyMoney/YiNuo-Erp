<template>
    <div class="SettingName">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'Setting'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">用户名设置</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <div class="mui-content">
        <form class="mui-input-group setting-name">
          <div class="mui-input-row">
            <label>用户名</label>
            <input type="text" class="mui-input-clear" disabled="disabled" v-model="sesName">
          </div>
          <div class="mui-input-row">
            <label>新用户名</label>
            <input type="text" class="mui-input-clear" v-model="name" placeholder="请输入用户名">
          </div>
        </form>
        <div class="form-button">
          <button type="button" class="mui-btn mui-btn-black" @click="setting">确定</button>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'SettingName',
  data () {
    return {
      sesName:sessionStorage.getItem('loginUser'),
      name: ''// 新用户名
    }
  },
  methods: {
    setting () {
      var then = this
      var check = true
      var reg = /^[^\s]*$/ // 不能有空格
      if (this.name == '') {
        mui.toast('用户名不能为空')
        check = false
        return false
      }
      if (!reg.test(this.name)) {
        mui.toast('用户名不能有空格')
        check = false
        return false
      }
      var add = '?name=' + this.name +  '&user_id=' + JSON.parse(localStorage.data).userid
      this.axios.get('/User/update_user' + add).then(res => {
        if (res.data.msg === '修改成功') {
          mui.alert('修改成功', function () {
            then.$router.push({ name: 'login' })
          })
        } else {
          mui.alert('修改失败')
        }
      })
    }
  }
}
</script>

<style scoped>
  .setting-name{margin-bottom: 22px}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-button{text-align: center;}
</style>
