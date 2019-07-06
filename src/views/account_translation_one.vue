<template>
    <div class="account_translation_one">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_receivable'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">应收余额</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>应收余额</h2>
          <p>/Balance input</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>工地名称</label>
            <input type="text" class="mui-input-clear" placeholder="请输项目名称" v-model="cumoterName" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>债务人</label>
            <input type="text" class="mui-input-clear" placeholder="请输入债务人" v-model="person" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>首款备注</label>
            <input type="text" class="mui-input-clear" v-model="text" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>时间</label>
            <input type="date" class="mui-input-clear" v-model="date">
          </div>
        </form>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>共有</label>
            <input type="text" class="mui-input-clear" placeholder="共有额度" v-model="all_money" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>实际转账</label>
            <input type="text" class="mui-input-clear" placeholder="请输入实际转账" v-model="smoney">
          </div>
        </form>
        <div class="form-botton">
          <button type="button" class="mui-btn mui-btn-black" @click="add">立即保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'account_translation_one',
  data () {
    return {
      imgUrl_loading:false,
      list: '',
      all_money: '',
      smoney: '',
      cumoterName: '',
      person: '',
      text: '',
      date: '',
      id: ''
    }
  },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.fund_details_id = id
    this.list = id.split('=')
    var lists = []
    for (var index in this.list) {
      var a1 = this.list[index].indexOf('&')
      var a2 = this.list[index].slice(0, a1)
      lists.push(a2)
    }
    this.id = lists[0]
    this.all_money = lists[1]
    this.smoney = lists[1]
    this.cumoterName = lists[2]
    this.person = lists[3]
    this.text = lists[4]
    this.date = lists[5]
  },
  methods: {
    add () {
      var then = this
      var check = true
      var nuber = /^[0-9]*$/ // 验证数字
      // data
      if (this.date == '') {
        mui.toast('日期不能为空')
        check = false
        return false
      }
      // 实际转账
      if (this.smoney == '') {
        mui.toast('实际转账不能为空')
        check = false
        return false
      }
      if (!nuber.test(this.smoney)) {
        mui.toast('实际转账只能为纯数字')
        check = false
        return false
      }
      this.imgUrl_loading = true
      var add = 'money=' + this.smoney + '&fund_details_id=' + this.id + '&date=' + this.date
      this.axios.get('https://formattingclub.com/YiNuoLogin/fund/add_fund_details?' + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false
        mui.alert(res.data, function () {
          then.$router.push({ name: 'money_receivable' })
        })
        }
      })
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .mui-input-group{margin-bottom: 10px;}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-botton{text-align: center;}
</style>
