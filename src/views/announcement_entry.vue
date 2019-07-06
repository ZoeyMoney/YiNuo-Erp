<template>
    <div class="announcement_entry">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'company_announcement'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">公告录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--菜单-->
      <div class="one-noble">
        <h2>公告录入</h2>
        <p>administration entry</p>
      </div>
      <!--input-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>标题</label>
            <input type="text" class="mui-input-clear" placeholder="请输入公告说明" v-model="notice_title">
          </div>
          <div class="mui-input-row">
            <label>公告编号</label>
            <input type="text" class="mui-input-clear" placeholder="请输入公告编号" v-model="notice_number">
          </div>
          <div class="mui-input-row">
            <label>下达人群</label>
            <input type="text" class="mui-input-clear" placeholder="请输入部门" v-model="notice_person">
          </div>
          <div class="mui-input-row form-textarea row-textarea">
            <label>公告内容</label>
            <textarea name="Customer_demand" rows="" cols="" v-model="notice_text" placeholder="请填写内容"></textarea>
          </div>
        </form>
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">发布</button>
        </div>
      </div>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'announcement_entry',
  data () {
    return {
      imgUrl_loading:false,
      notice_title: '', // 标题
      notice_number: '', // 公告编号
      notice_person: '', // 下达人群
      notice_text: ''// 公告内容
    }
  },
  methods: {
    go () {
      var then = this
      var check = true
      //  标题
      if (this.notice_title == '') {
        mui.toast('标题不能为空')
        check = false
        return false
      }
      //  公告编号
      if (this.notice_number == '') {
        mui.toast('公告编号')
        check = false
        return false
      }
      //  下达人群
      if (this.notice_person == '') {
        mui.toast('下达人群不能为空')
        check = false
        return false
      }
      //  公告内容
      if (this.notice_text == '') {
        mui.toast('公告内容不能为空')
        check = false
        return false
      }
      this.imgUrl_loading = true
      this.axios.get(url.AnnouncementAdd+'?notice_title=' + this.notice_title + '&notice_number=' + this.notice_number +
        '&notice_person=' + this.notice_person + '&notice_text=' + this.notice_text).then(res => {
          if (res.status === 200) {
            this.imgUrl_loading = false
              mui.alert(res.data, function () {
              then.$router.push({ name: 'company_announcement' })
            })
          }
      })
    }
  }
}
</script>

<style scoped>
  /*按钮*/
  .mui-radio{overflow: visible}
  .mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
