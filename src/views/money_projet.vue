<template>
    <div class="money_projet">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'summary_entry'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">项目录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>项目录入</h2>
          <p>/Balance input</p>
        </div>
      </div>
      <!--input-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>工地名称</label>
            <input type="text" class="mui-input-clear" placeholder="请输项目名称" v-model="site_projet">
          </div>
        </form>
        <div class="form-botton">
          <button type="button" class="mui-btn mui-btn-black" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'money_projet',
  data () {
    return {
      imgUrl_loading:false,
      site_projet: ''// 项目名称录入
    }
  },
  methods: {
    add () {
      var then = this
      this.imgUrl_loading = true
      this.axios.get(url.projetAdd+'?Customr_name=' + this.site_projet).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
        mui.alert(res.data.msg, function () {
          then.$router.push({ name: 'money_sale' })
        })
        }
      })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .mui-input-group{margin-bottom: 22px;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-botton{text-align: center;}
</style>
