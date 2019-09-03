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
            <label>相关人</label>
            <input type="text" class="mui-input-clear" placeholder="请输入债务人" v-model="person" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>备注</label>
            <input type="text" class="mui-input-clear" v-model="text" disabled="disabled">
          </div>
          <div class="mui-input-row">
            <label>时间</label>
            <input type="date" class="mui-input-clear" v-model="date">
          </div>
        </form>
        <form class="mui-input-group">
          <!--<div class="mui-input-row">
            <label>共有</label>
            <input type="text" class="mui-input-clear" placeholder="￥" v-model="all_money" disabled="disabled">
          </div>-->
          <div class="mui-input-row">
            <label>级别</label>
            <select name="" v-model="level" :class="{select:level==='',selectBlack:level!==''}" >
              <option value="">请选择</option>
              <option v-for="item in list_lev" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>情况</label>
            <select name="" v-model="whether" :class="{select:whether==='',selectBlack:whether!==''}" >
              <option value="">请选择</option>
              <option v-for="item in list_whether" :value="item.text">{{item.text}}</option>
            </select>
          </div>
          <div class="mui-input-row">
            <label>实际转账</label>
            <input type="text" class="mui-input-clear" placeholder="￥" v-model="smoney">
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
      imgUrl_loading: false,
      list: '',
      all_money: '',
      level: '',
      whether: '',
      list_lev: [
        { text: 'A' },
        { text: 'B' },
        { text: 'C' }
      ],
      list_whether: [
        { text: '是' },
        { text: '否' }
      ],
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
      if (this.level == '') {
        mui.toast('级别不能为空')
        check = false
        return false
      }
      if (this.whether == '') {
        mui.toast('情况不能为空')
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
      var add = 'money=' + this.smoney + '&fund_details_id=' + this.id + '&date=' + this.date + '&fund_details_level=' + this.level
      // 情况
      if (this.whether === '是') {
        add += '&fund_details_type=0'
      } else {
        add += '&fund_details_type=1'
      }
      this.axios.get('/fund/add_fund_details?' + add).then(res => {
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
  select{font-size: 15px}
  /*按钮*/
  .mui-btn-blue, .mui-btn-black, input[type=submit]{border: 1px solid #000000;background-color: #000000;color: white;width: 70%;}
  .form-botton{text-align: center;}
</style>
