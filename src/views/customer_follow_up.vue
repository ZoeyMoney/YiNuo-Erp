<template>
    <div class="customer_follow_up">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'customer_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户跟进</h1>
        <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户跟进-->
      <div class="mui-content">
        <div class="customer">
          <h2>客户跟进</h2>
          <p>/Client follow-up</p>
        </div>
      </div>
        <!--form-->
      <div class="mui-content app">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>工地名称</label>
                <select name="" v-model="customer_name">
                  <option value="" selected="selected">请选择</option>
                  <option v-for="item in listName" :value="item.customer_name">{{item.customer_name}}</option>
                </select>
              </div>
            <div class="mui-input-row">
              <label>跟进人</label>
              <select name="" v-model="follow_person">
                <option value="" selected="selected">请选择</option>
                <option v-for="item in profetName" :value="item">{{item}}</option>
              </select>
            </div>
            <div class="mui-input-row row-textarea">
              <label>跟进内容</label>
              <textarea name="" rows="" cols="" id="textarea" placeholder="请输入跟进内容" v-model="follow_text"></textarea>
            </div>
          </form>
        <button-save @click.native="go"></button-save>
      </div>
    </div>
</template>

<script>
import url from '../components/config'
export default {
  name: 'customer_follow_up',
  data () {
    return {
      imgUrl_loading: false,
      customer_name: '', // 项目名称
      follow_person: '', // 跟进人
      follow_text: '', // 跟进信息
      listName: '', // 集合项目
      profetName: ''// 跟进人集合
    }
  },
  created () {
    // 项目名称
    this.axios.get(url.clientProjet).then(res => {
      this.listName = res.data
    })
    //  跟进人
    this.axios.get(url.clientFollowPerson).then(res => {
      this.profetName = res.data
    })
    /* this.axios.get(`customer_follow_up/${this.$route.params.id}`).then(res=>{
      console.log(res)
    }) */
  },
  methods: {
    go () {
      var then = this
      var check = true
      // 项目名称
      if (this.Customer_name == '') {
        mui.toast('项目名称不能为空')
        check = false
        return false
      }
      // 跟进人
      if (this.select_follow_person == '') {
        mui.toast('跟进人不能为空')
        check = false
        return false
      }
      // 跟进信息
      if (this.follow_text == '') {
        mui.toast('跟进信息不能为空')
        check = false
        return false
      }
      this.imgUrl_loading = true
      //    录入数据
      var add = '?Customer_name=' + this.customer_name + '&follow_person=' + this.follow_person + '&follow_text=' + this.follow_text
      this.axios.get(url.clientAddFollow + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
          mui.alert(res.data, function () {
            then.$router.push('customer_management')
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  /*表单*/
  .mui-input-group{background-color: transparent;}
  .mui-input-row label{width: 26%;}
  .row-time{display: flex}
  .row-time label{flex: 1;}
  .row-time div{line-height: 40px;flex: 3.1;}

  form div select{background-color: transparent!important;}
  select{font-size: 15px!important;}
</style>
