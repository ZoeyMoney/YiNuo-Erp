<template>
    <div class="money_profit">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" href="financial_management.html" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">利润统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
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
        <template>
          <el-radio v-model="radio" label="2">未完成</el-radio>
          <el-radio v-model="radio" label="1">已完成</el-radio>
        </template>
        <div class="input-x">
       <!-- <table border="0">
          <thead>
          <tr>
            <th><span :style="siteSlect">工地名称</span></th>
            <th><span>支出合计</span></th>
            <th><span>收入合计</span></th>
            <th><span>预计利润</span></th>
            <th><span>利润比</span></th>
          </tr>
          </thead>
          <tbody id="add">
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
          </tbody>
        </table>-->
          <template>
            <el-table :data="list" style="width: 100%;color: black" height="77vh" @row-click="projet_modify" >
              <el-table-column :key="Math.random()" fixed prop="customer_name" label="工地名称" width="150" :header-cell-style="getClass"></el-table-column>
              <el-table-column :key="Math.random()" v-if="list.already_out<=0" prop="already_out" label="支出合计" width="100"></el-table-column>
              <el-table-column prop="already_enter" label="收入合计" width="100"></el-table-column>
              <el-table-column prop="" label="已收合计" width="100"></el-table-column>
              <el-table-column prop="" label="已付合计" width="100"></el-table-column>
              <el-table-column prop="" label="应付合计" width="100"></el-table-column>
              <el-table-column prop="pre_profit" label="预计利润" width="100"></el-table-column>
              <el-table-column prop="pre_profit_proportion" label="利润比" width="100"></el-table-column>
            </el-table>
          </template>
      </div>
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
      imgUrl_loading:false,
      moneyNY:'',
      radio: '2',
      list: [{
          customer_name:'',
          already_out:'',
          already_enter:'',
          pre_profit:'',
          pre_profit_proportion:'',
          customer_id:''
        }],
      siteSlect:{
        paddingLeft:'10px'
      },
      lefProjet:{
        display:'block',
        width:'122px',
        whiteSpace:'nowrap',
        overflow:'hidden',
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
    this.imgUrl_loading = true
    this.axios.get(url.moneyProfit).then(res=>{
      if (res.status === 200) {
        this.imgUrl_loading = false
      this.list = res.data.data
      }
    })
  },
  methods: {
    getClass({row, column, rowIndex, columnIndex}){
      if (rowIndex === 0) {
        return 'background: #F2F2F2 '
      } else {
        return ''
      }
      },
    projet_modify(id){
      var list = {}
      for (var index in this.list) {
        if (id.customer_id === this.list[index].customer_id) {
          list = this.list[index]
        }
      }
      // localStorage.msg = JSON.stringify(list)
      sessionStorage.setItem('listProfit',JSON.stringify(list))
      this.$router.push({path:'projet_modify',query:{list:list}})
    }
  }
}
</script>

<style scoped>
  @import "../css/public.css";
  .app{margin-bottom: 18px}
  /*input white*/
  .customer{padding-left: 10px;}
  .mui-input-row label{padding: 11px 10px}
  /deep/.el-table .cell{white-space: nowrap}
  /deep/.el-table__header th, .el-table__header tr{background-color: #dadada;color: black;padding: 4px 0;}
  /deep/.el-table td, .el-table th.is-leaf{border-bottom: 1px solid #dadada;padding: 4px 0;background-color: #efeff4}
  .element::-webkit-scrollbar {display:none}
  /deep/.el-radio{padding-left: 9px;line-height: 36px}
  /*bottom*/
  footer{position: fixed;bottom: 0;display: flex;width: 100%;background-color: #a7a7a7;line-height: 30px;font-size: 14px;z-index: 1000}
  footer div{flex: 1;text-align: right;padding-right: 20px}
</style>
