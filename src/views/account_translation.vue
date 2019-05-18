<template>
    <div class="account_translation">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_receivable'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">余额</h1>
        <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户详情-->
      <div class="mui-content">
        <div class="customer">
          <h2>余额</h2>
          <p>/Balance input</p>
        </div>
      </div>
      <!--form-->
      <div class="mui-content app">
        <form class="mui-input-group" v-for="item in projet">
            <div class="mui-input-row">
                <label>项目名称</label>
                <input type="text" class="mui-input-clear" v-model="item.customer_name">
            </div>
          <div class="mui-input-row">
            <label>债务人</label>
            <input type="text" class="mui-input-clear" v-model="item.fund_debtor">
          </div>
          <div class="mui-input-row">
            <label>首款备注</label>
            <input type="text" class="mui-input-clear" v-model="item.fund_text">
          </div>
        </form>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label>调取应收</label>
            <input type="text" class="mui-input-clear" placeholder="请输入调取">
          </div>
        </form>
        <form class="mui-input-group" v-for="item in projet">
          <div class="mui-input-row">
            <label>共有</label>
            <input type="text" class="mui-input-clear" v-model="item.fund_money">
          </div>
          <div class="mui-input-row">
            <label>实际转账</label>
            <input type="text" class="mui-input-clear" placeholder="请输入实际转账">
          </div>
        </form>
        <div class="mui-input-row mui-checkbox mui-left radio-one">
          <label>转为应收</label>
          <input name="checkbox1" type="checkbox" v-model="checkBox">
        </div>
        <div class="form-botton">
          <button type="button" class="mui-btn mui-btn-black" @click="add">保存</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'account_translation',
  data () {
    return {
      projet: '', // 项目
      checkBox: ''// 复选框
    }
  },
  created () {
    var loc = location.href
    var n1 = loc.length// 地址的总长度
    var n2 = loc.indexOf('=')// 取得=号的位置
    var id = decodeURI(loc.substr(n2 + 1, n1 - n2))// 从=号后面的内容
    // 查询客户项目信息
    this.customer_id = id
    this.axios.get('https://formattingclub.com/YiNuoLogin/fund/select_fund_sum?s=1' + id).then(res => {
      this.projet = res.data
    })
  },
  methods: {
    add () {
      var then = this
      if (this.checkBox === true) {
        mui.alert('转为应收成功', function () {
          then.$router.push({ path: 'account_translation_one' })
        })
      } else {
        mui.alert('保存成功', function () {
          then.$router.push({ path: 'money_receivable' })
        })
      }
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
.radio-one label{width: 100%;}
</style>
