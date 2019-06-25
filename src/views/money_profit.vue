<template>
    <div class="money_profit">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" href="financial_management.html" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">利润统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>利润统计</h2>
          <p>/Customer input</p>
        </div>
      </div>
      <!--利润统计-->
      <div class="mui-content app">
        <div class="mui-input-row all-input">
          <label>关键字</label>
          <input type="text" class="mui-input-clear" placeholder="请输入用户名">
        </div>
        <table border="0">
          <tr>
            <th>工地各项</th>
            <th>支出合计</th>
            <th>收入合计</th>
            <th>预计利润</th>
            <th>利润比</th>
          </tr>
          <tr v-for="item in list">
            <td>{{item.projet}}</td>
            <td>{{item.expenditure}}</td>
            <td>{{item.income}}</td>
            <td>{{item.expected}}</td>
            <td>{{item.ratio}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'money_profit',
  data () {
    return {
      list: [
        { projet: '空气美发店', expenditure: '100,000', income: '100,000', expected: '100,000', ratio: '35%' },
        { projet: '新天地', expenditure: '100,000', income: '100,000', expected: '100,000', ratio: '35%' },
        { projet: '利润最大', expenditure: '100,000', income: '100,000', expected: '100,000', ratio: '35%' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  @import "../css/public.css";
  /*input white*/
  .all-input{background-color: white!important;margin-bottom: 20px;}
  .all-input input{font-size: 15px}
  /*tbale*/
  table{width: 100%;font-size: 15px;}
  table tr{text-align: center;line-height: 29px;border-bottom: 1px solid #DADADA;}
  table tr th{background-color: #DADADA;line-height: 40px;}
</style>
