<template>
    <div class="After_sales_statistics">
      <!--头部-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_sale'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">售后统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      <!--客户统计-->
      <div class="mui-content">
        <div class="customer">
          <h2>售后统计</h2>
          <p>/Customer input</p>
        </div>
      </div>
      <!--表格-->
      <div class="mui-content">
        <!--关键字-->
        <div class="mui-input-row input-top">
          <label>输入关键字</label>
          <input type="text" class="mui-input-clear" placeholder="请输入关键字" v-model="customer_name">
        </div>
        <!--表格-->
        <div class="mui-content label-flex">
          <div class="mui-row row-flex">
            <label>工地名称</label>
            <select v-model="stage_name">
              <option value="" selected="selected">请选择</option>
              <option v-for="index in stageName" :value="index">{{index}}</option>
            </select>
          </div>
        </div>
        <table border="0">
          <tr>
            <th><span :style="lefta">工地名称</span></th>
            <th><span>负责人</span></th>
            <th><span>分类</span></th>
            <th><span>时间</span></th>
            <th><span>状态</span></th>
          </tr>
          <tr v-for="item in list_serach" @click="mername(item.afterSale_id)">
            <td><span :style="lefta">{{item.customer_name}}</span></td>
            <td><span>{{item.afterSale_person}}</span></td>
            <td><span>{{item.afterSale_type}}</span></td>
            <td><span>{{datas(item.afterSale_pre_date)}}</span></td>
            <td>
              <span v-show="item.follow_stage">{{item.follow_stage}}</span>
              <span v-show="item.follow_stage ==undefined">无</span>
            </td>
          </tr>
        </table>
      </div>
      <!--底部-->
      <div class="footer">
        <div class="footer-botton">
          <p>TOTAL</p>
        </div>
        <div class="footer-botton">
          <p>总人数:<em :style="listRad">{{list.length}}</em></p>
          <em>￥:{{add}}W</em>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AfterSale_statistics',
  data () {
    return {
      imgUrl_loading: false,
      customer_name: '', // 关键字
      customer_stylist: '', // 设计师
      stage_name: '', // 阶段
      listName: '',
      stageName: '',
      list: [], // table
      stage_stipulate: '',
      add: '', // 钱总
      /* table的最后一个td */
      lefta: {
        paddingLeft: '10px'
      },
      listRad: {
        color: 'red',
        fontWeight: 'bold'
      }
    }
  },
  created () {
    this.imgUrl_loading = true
    // table数据
    this.axios.get('/AfterSale/Select_AfterSale').then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.list = res.data.data
      } else {
        console.log('获取失败')
      }
      // 求钱的总和
      var a = 0
      for (var index in this.list) {
        a += this.list[index].customer_budget
        var b = a / 10000
      }
      this.add = b
    })
    //  倒计时
    setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000)
  },
  computed: {
    list_serach () {
      var then = this
      var newList = []
      then.list.map(function (item) {
        if (item.customer_name.search(then.customer_name) != -1) {
          newList.push(item)
        }
      })
      return newList
    }
  },
  methods: {
    all_money: function (jia, yi, worker) {
      var money = parseFloat(jia) + parseFloat(yi) + parseFloat(worker)
      return money
    },
    // 页面传参
    mername (id) {
      // this.$router.push({ path: 'site_details', query: { id: id } })
      var lists = {}
      for (var index in this.list) {
        if (id == this.list[index].afterSale_id) {
          lists = this.list[index]
        }
      }
      localStorage.AfterSale_statistics = JSON.stringify(lists)
      this.$router.push({ name: 'site_details', query: { lists } })
    },
    datas (datasd) {
      var datas = new Date(datasd)
      var data = datas.getFullYear()
      var d = datas.getMonth() + 1
      var y = datas.getDate()
      var datas = data + '-' + d + '-' + y
      return datas
    },
    // 倒计时
    time: function (date, day) {
      if (date == null) {
        return '未开始'
      } else {
        var startDate = new Date(date)
        startDate.setDate(startDate.getDate() + day)
        var m = startDate.getMonth() + 1
        var end = startDate.getFullYear() + '-' + m + '-' + startDate.getDate() + '-' + startDate.getHours() + ':' +
            startDate.getMinutes() + ':' + startDate.getSeconds()
        var endDate = new Date(end)
        var start = new Date()
        var rightTime = endDate - start // 截止时间减去当前时间
        if (rightTime > 0) { // 判断剩余倒计时时间如果大于0就执行倒计时否则就结束
          var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24)
          var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24)
          var mm = Math.floor((rightTime / 1000 / 60) % 60)
          var ss = Math.floor((rightTime / 1000) % 60)
          var showTime = dd + ':' + hh + ':' + mm + ':' + ss
        } else {
          var showTime = '已逾期'
        }
        return showTime
      }
    }

  }
}
</script>

<style scoped>
  @import "../css/public.css";
  [v-cloak]{
    display: none;
  }
  /*头部*/
  .customer{margin-top: 70px;}
  .mui-bar-nav~.mui-content{padding-top: 3px;}
  /*搜索*/
  .input-top{background-color: white;}
  .mui-icon-clear{display: none!important;}
  /*设计师一行*/
  .label-flex,.row-flex{display: flex;flex: 1;}
  .label-flex{margin-top: 20px;}
  .row-flex label{flex: 1;line-height: 40px;padding-left:13px;font-size: 15px;flex: 1;}
  .row-flex select{padding: 9px 15px!important;margin-bottom: 0;flex: 4;}
  /*table*/
  table{width: 100%;font-size: 14px;text-align: left;white-space: nowrap;margin-bottom: 100px}
  table tr th{background-color: #dadada;line-height: 27px}
  table tr th:nth-child(1){/*min-width: 130px*/width: 30%}
  table tr th:nth-child(2){/*min-width: 52px*/width: 20%}
  table tr th:nth-child(3){/*min-width: 66px*/width: 20%}
  table tr th:nth-child(4){/*min-width: 71px*/width: 20%}
  table tr th:nth-child(5){min-width: 50px;width: 10%}
  table tr{border-bottom: 1px solid #dadada;line-height: 28px}
  table tr td:nth-child(1) span{display: block;overflow: hidden;width: 136px;text-overflow: ellipsis}
  /*底部*/
  .footer{background-color: #dedcdc;position: fixed;width: 100%;bottom: 0;display: flex;padding-top: 10px;}
  .footer .footer-botton:nth-child(1){flex: 1;padding-left: 8px;}
  .footer .footer-botton:nth-child(2){flex: 1;display: flex;}
  .footer .footer-botton p{color: black;font-weight: bold;font-size: 15px}
  .footer .footer-botton:nth-child(2) p{flex: 1;text-align: center;font-size:15px;}
  .footer .footer-botton:nth-child(2) em{flex: 1;font-size: 15px;font-weight:bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
</style>
