<template>
    <div class="customer_follow_up">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'customer_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">客户跟进</h1>
        <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
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
                  <label>工地各项</label>
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
        <div class="mui-input-row form-btn">
          <button type="button" id="btn" class="mui-btn mui-btn-blue" @click="go">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'customer_follow_up',
  data () {
    return {
      customer_name: '', // 项目名称
      follow_person: '', // 跟进人
      follow_text: '', // 跟进信息
      listName: '', // 集合项目
      profetName: ''// 跟进人集合
    }
  },
  created () {
    // 项目名称
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer').then(res => {
      this.listName = res.data
    })
    //  跟进人
    this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/select_follow_person').then(res => {
      this.profetName = res.data
    })
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
      //    录入数据
      var add = '?Customer_name=' + this.customer_name + '&follow_person=' + this.follow_person + '&follow_text=' + this.follow_text
      this.axios.get('https://formattingclub.com/YiNuoLogin/Customer/AddFollow' + add).then(res => {
          mui.alert(res.data, function () {
            then.$router.push('customer_management')
          })
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
  /*按钮*/
  .mui-input-group:after,.mui-input-row:nth-last-child(1):after{background-color: transparent;}
  .mui-btn-blue, .mui-btn-primary, input[type=submit]{border: 1px solid #000000;background-color: #000000;}
  .mui-btn-blue.mui-active:enabled, .mui-btn-blue:enabled:active, .mui-btn-primary.mui-active:enabled, .mui-btn-primary:enabled:active, input[type=submit].mui-active:enabled, input[type=submit]:enabled:active{border: 1px solid #000000;background-color: #000000;}
</style>
