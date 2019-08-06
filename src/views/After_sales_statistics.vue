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
          <!--<div class="mui-row row-flex">
            <label>责任人</label>
            <select v-model="customer_stylist">
              <option value="" selected="selected">请选择</option>
              <option v-for="(item,index) in listName" :value="item">{{item}}</option>
            </select>
          </div>-->
          <div class="mui-row row-flex">
            <label>工地名称</label>
            <select v-model="stage_name">
              <option value="" selected="selected">请选择</option>
              <option v-for="index in stageName" :value="index">{{index}}</option>
            </select>
          </div>
        </div>
        <!--table-->
        <!--<table border="0">
          <tr>
            <th :style="projet">工地名称</th>
            <th>分类</th>
            <th>状态</th>
            <th>阶段</th>
            <th>倒计时</th>
          </tr>
          <tr v-for="item in list" :style="ostyle">
            <td @click="mername(item.customer_id)" :value="item.customer_id"><span :style="projet">{{item.customer_name}}</span></td>
            <td>分类</td>
            <td>状态</td>
            <td><span>{{item.stage_name}}</span></td>
            <td :style="listRad" v-if="time(item.stage_startdate,item.stage_stipulate) === '已逾期'">{{time(item.stage_startdate,item.stage_stipulate)}}</td>
            <td :style="listStyle" v-else-if="time(item.stage_startdate,item.stage_stipulate) === '未开始'">{{time(item.stage_startdate,item.stage_stipulate)}}</td>
            <td :style="listBlue" v-else-if="time(item.stage_startdate,item.stage_stipulate)">{{time(item.stage_startdate,item.stage_stipulate)}}</td>
          </tr>
        </table>-->
        <table class="table_all">
           <tr>
             <th :style="projet"><span>工地名称</span></th>
             <th><span>分类</span></th>
             <th><span>状态</span></th>
             <th><span>阶段</span></th>
             <th><span>倒计时</span></th>
           </tr>
          <tr v-for="item in list" :style="ostyle" @click="mername(item.customer_id)">
            <td><span>{{item.customer_name}}</span></td>
            <td><span>分类别</span></td>
            <td><span>已过保</span></td>
            <td><span>{{item.stage_name}}</span></td>
            <td>
              <span v-if="time(item.stage_startdate,item.stage_stipulate) === '已逾期'">{{time(item.stage_startdate,item.stage_stipulate)}}</span>
              <span v-else-if="time(item.stage_startdate,item.stage_stipulate) === '未开始'">{{time(item.stage_startdate,item.stage_stipulate)}}</span>
              <span v-else-if="time(item.stage_startdate,item.stage_stipulate)">{{time(item.stage_startdate,item.stage_stipulate)}}</span>
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
  import url from '../components/config'
export default {
  name: 'customer_statistics',
  data () {
    return {
      imgUrl_loading:false,
      customer_name: '', // 关键字
      customer_stylist: '', // 设计师
      stage_name: '', // 阶段
      listName: '',
      stageName: '',
      list: '', // table
      stage_stipulate: '',
      add: '', // 钱总
      /* table的最后一个td */
      listStyle: {
        color: 'blue',
        fontWeight: 'bold'
      },
      listRad: {
        color: 'red',
        fontWeight: 'bold'
      },
      listBlue: {
        color: 'green',
        fontWeight: 'bold'
      },
      projet: {
        width: '93px',
        paddingLeft: '10px'
      },
      paLift: {
        paddingLeft: '3px'
      }
    }
  },
  created () {
    this.imgUrl_loading = true
    // table数据
    this.axios.get(url.AfterStatistics).then(res => {
      if (res.status === 200) {
        this.imgUrl_loading = false
        this.list = res.data
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

    // 设计师
    this.axios.get(url.AfterListName).then(res => {
      this.listName = res.data
    })
    //  阶段
    this.axios.get(url.AfterStage).then(res => {
      this.stageName = res.data
    })
    //  倒计时
    setInterval(() => {
      var a = new Date()
      this.listtime = a
    }, 1000)
  },
  computed: {
  },
  methods: {
    // 页面传参
    mername (id) {
      this.$router.push({ path: 'site_details', query: { id: id } })
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
  .table_all{width: 100%;display: block;overflow: auto;white-space: nowrap;font-size: 14px;padding: 10px 0;line-height: 28px}
  .table_all tr:nth-child(1){width: 100%;display: block;background-color: #dadada}
  .table_all tr:nth-child(2){width: 100%;display: block}
  .table_all tr th{text-align: left;background-color: #dadada}
  .table_all tr th:nth-child(1){text-align: left;min-width: 120px}
  .table_all tr th:nth-child(2),.table_all tr th:nth-child(3){text-align: left;min-width: 52px}
  .table_all tr th:nth-child(4){text-align: left;min-width: 68px}
  .table_all tr td:nth-child(1){padding-left: 10px;min-width: 120px}
  .table_all tr td:nth-child(2),.table_all tr td:nth-child(3){min-width: 52px}
  .table_all tr td:nth-child(4){text-align: left;min-width: 68px}
  .table_all tr td:nth-child(5){min-width: 80px}
  .table_all tr td{border-bottom: 1px solid #dadada}
  /*底部*/
  .footer{background-color: #dedcdc;position: fixed;width: 100%;bottom: 0;display: flex;padding-top: 10px;}
  .footer .footer-botton:nth-child(1){flex: 1;padding-left: 8px;}
  .footer .footer-botton:nth-child(2){flex: 1;display: flex;}
  .footer .footer-botton p{color: black;font-weight: bold;font-size: 15px}
  .footer .footer-botton:nth-child(2) p{flex: 1;text-align: center;font-size:15px;}
  .footer .footer-botton:nth-child(2) em{flex: 1;font-size: 15px;font-weight:bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
</style>
