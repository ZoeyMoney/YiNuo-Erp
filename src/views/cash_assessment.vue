<template>
    <div class="money_profit">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" href="financial_management.html" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">现金评估</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--收入-->
      <div class="mui-content">
        <div class="customer">
          <h2>现金评估</h2>
          <p>/Customer input</p>
        </div>
      </div>
      <!--利润统计-->
      <div class="mui-content app">
          <div class="cash_table">
            <table>
                <tr>
                <th></th>
                <th>收入</th>
                <th>支出</th>
                <th>余额</th>
                <th @click="getNow">
                    <i></i>
                </th>
                </tr>
                <tbody>
                <tr v-for="(item,i) in num" :key="i">
                    <td><span>{{(i == 1)?yearDate : ''}}</span>{{item.nowData}}<i :class="(strDate === item.nowData)? 'circlered' : ''"></i></td>
                    <td>￥{{item.income}}</td>
                    <td>￥{{item.expend}}</td>
                    <td :class="(item.total < 0) ? 'red' : 'green'">￥{{(item.total < 0)?(item.total+'').slice(1):item.total}}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'money_profit',
  data () {
    return {
      imgUrl_loading: false,
      moneyNY: '',
      search: '',
      radio: '2',
      list: [{
        customer_name: '',
        already_out: '',
        already_enter: '',
        pre_profit: '',
        pre_profit_proportion: '',
        customer_id: ''
      }],
      siteSlect: {
        paddingLeft: '10px'
      },
      lefProjet: {
        display: 'block',
        width: '122px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        paddingLeft: '10px'
      },
      widCate: {
        width: '67px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      num: [
        { nowData: 31, income: 5000, expend: 2000, total: 500 },
        { nowData: 1, income: 5000, expend: 8000, total: 500 },
        { nowData: 2, income: 5000, expend: 8000, total: 500 }
      ],
      strDate: '',
      yearDate: '',
      isLoading: false
    }
  },
  created () {
    this.imgUrl_loading = true
    this.axios.get('/fund/Select_profits').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.list = res.data.data
      }
    })
    this.getNum()
  },
  computed: {
    lists () {
      var then = this
      var newList = []
      then.list.map(function (item) {
        if (item.customer_name.search(then.search) != -1) {
          newList.push(item)
        }
      })
      return newList
    }
  },
  methods: {
    getClass ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background: #F2F2F2 '
      } else {
        return ''
      }
    },
    projet_modify (id) {
      var list = {}
      for (var index in this.list) {
        if (id.customer_id === this.list[index].customer_id) {
          list = this.list[index]
        }
      }
      // localStorage.msg = JSON.stringify(list)
      sessionStorage.setItem('listProfit', JSON.stringify(list))
      this.$router.push({ path: 'projet_modify', query: { list: list } })
    },
    getNum () {
      var date = new Date()
      var strYear = date.getFullYear()
      var strMouth = date.getMonth() + 1
      strMouth = strMouth < 10 ? '0' + strMouth : strMouth
      var strDate = date.getDate()
      this.yearDate = strYear + '.' + strMouth
      this.strDate = strDate
      this.num.forEach(item => {
        var total = parseInt(item.income) - parseInt(item.expend)
        item.total = total
      })
    },
    getNow () {
      var date = new Date()
      var strDate = date.getDate()
      this.strDate = strDate
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      }, 500)
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

  .cash_table table {
  width: 100%;
  height: 80px;
  border-collapse: collapse;
  text-align: center;
}
.cash_table th,
.cash_table td {
  width: 20%;
  height: 35px;
  position: relative;
}
.cash_table td {
  border-top: 1px solid #000;
  font-size: 14px;
  position: relative;
}
.cash_table th:first-child,
.cash_table td:first-child {
  border-right: 1px solid #000;
  text-align: right;
  padding-right: 10px;
}
.cash_table td:first-child {
  width: 30%;
  border-bottom: 1px solid transparent;
}
.cash_table h {
  position: relative;
}
.cash_table th i {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.cash_table tr i {
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
}
.cash_table i {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
}

.cash_table .green {
  color: green;
}
.cash_table .red {
  color: red;
}
.cash_table .circlered {
  background-color: red;
}
.cash_table span {
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
}
</style>
