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
            <th><span :style="siteSlect">工地各项</span></th>
            <th><span>支出合计</span></th>
            <th><span>收入合计</span></th>
            <th><span>预计利润</span></th>
            <th><span>利润比</span></th>
          </tr>
          <tr v-for="item in list">
            <td @click="projet_modify(item.customer_id)"><span :style="lefProjet">{{item.customer_name}}</span></td>
            <td><span>￥{{item.already_out}}</span></td>
            <td><span>￥{{item.already_enter}}</span></td>
            <td>
              <span v-if="item.pre_profit">￥{{item.pre_profit}}</span>
              <span v-if="item.pre_profit === 0">￥0</span>
            </td>
            <td>
              <span :style="widCate" v-if="item.pre_profit_proportion">￥{{item.pre_profit_proportion}}%</span>
              <span :style="widCate" v-if="item.pre_profit_proportion === 0">￥0%</span>
            </td>
          </tr>
        </table>
      </div>
      <footer>
        <div>TOTAL</div>
        <div>%</div>
        <div>￥{{moneyNY}}</div>
      </footer>
    </div>
</template>

<script>
  import url from '../components/config'
export default {
  name: 'money_profit',
  data () {
    return {
      moneyNY:'',
      list: '',


      siteSlect:{
        paddingLeft:'10px'
      },
      lefProjet:{
        display:'block',
        width:'107px',
        whiteSpace:'nowrap',
        overflow:'hidden',
        textOverflow:'ellipsis',
        paddingLeft:'10px'
      },
      widCate:{
        width: '67px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  created(){
    this.axios.get(url.moneyProfit).then(res=>{
      this.list = res.data.data
    })
  },
  methods: {
    projet_modify(id){
      var list = {}
      for (var index in this.list) {
        if (id === this.list[index].customer_id) {
          list = this.list[index]
        }
      }
      localStorage.msg = JSON.stringify(list)
      this.$router.push({path:'projet_modify',query:{list:list}})
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  /*input white*/
  .all-input{background-color: white!important;margin-bottom: 20px;}
  .all-input input{font-size: 15px}
  /*tbale*/
  table{width: 100%;font-size: 14px;text-align: left}
  table span{display: block;}
  table tr{line-height: 29px;border-bottom: 1px solid #DADADA;}
  table tr th{background-color: #DADADA;line-height:32px;}
  /*bottom*/
  footer{position: fixed;bottom: 0;display: flex;width: 100%;background-color: #a7a7a7;line-height: 30px;font-size: 14px;}
  footer div{flex: 1;text-align: right;padding-right: 20px}
</style>
