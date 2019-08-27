<template>
    <div class="site_statistics">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'site_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工地统计</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--客户统计-->
      <div class="mui-content">
        <div class="customer">
          <h2>工地统计</h2>
          <p>/site_statistics</p>
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
            <label>设计师</label>
            <select v-model="customer_stylist">
              <option value="" selected="selected">请选择</option>
              <option v-for="(item,index) in listName" :value="item">{{item}}</option>
            </select>
          </div>
          <div class="mui-row row-flex">
            <label>监理</label>
            <select v-model="stage_name">
              <option value="" selected="selected">请选择</option>
              <option v-for="index in stageName" :value="index">{{index}}</option>
            </select>
          </div>
        </div>
        <!--table-->
        <table border="0">
          <tr>
            <th :style="projet">工地各项</th>
            <th>设计师</th>
            <th>合同金额</th>
            <th>监理</th>
            <th>倒计时</th>
          </tr>
          <p v-show="false">{{listtime | data}}</p>
          <tr v-for="item in list" :style="ostyle">
            <td @click="mername(item.customer_id)" :value="item.customer_id"><span :style="projet">{{item.customer_name}}</span></td>
            <td :style="paLift"><span>{{item.customer_stylist}}</span></td>
            <td><span>￥{{item.customer_budget}}</span></td>
            <td><span>{{item.stage_name}}</span></td>
            <td :style="listRad" v-if="time(item.stage_startdate,item.stage_stipulate) === '已逾期'">{{time(item.stage_startdate,item.stage_stipulate)}}</td>
            <td :style="listStyle" v-else-if="time(item.stage_startdate,item.stage_stipulate) === '未开始'">{{time(item.stage_startdate,item.stage_stipulate)}}</td>
            <td :style="listBlue" v-else-if="time(item.stage_startdate,item.stage_stipulate)">{{time(item.stage_startdate,item.stage_stipulate)}}</td>
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
    name: 'site_statistics',
    data () {
      return {
        customer_name: '', // 关键字
        customer_stylist: '', // 设计师
        stage_name: '', // 阶段
        listName: '',
        stageName: '',
        list: '', // table
        stage_stipulate: '',
        add: '', // 钱总
        listtime: '', // 倒计时
        /* table */
        ostyle: {
          fontSize: '12px',
          borderBottom: '1px solid #dadada',
          lineHeight: '30px'
        },
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
      // table数据
      this.axios.get('/Customer/SelectStageCustomer').then(res => {
        if (res.status === 200) {
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
      this.axios.get('/Customer/SelectStylist').then(res => {
        this.listName = res.data
      })
      //  阶段
      this.axios.get('/Customer/SelectStageName').then(res => {
        this.stageName = res.data
      })
      //  倒计时
      setInterval(() => {
        var a = new Date()
        this.listtime = a
      }, 1000)
    },
    methods: {
      // 页面传参
      mername (id) {
        this.$router.push({ path: 'site_after_sale', query: { id: id } })
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

    },
  }
</script>

<style scoped>
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
  .row-flex label{flex: 1;}
  .row-flex label{flex: 1;line-height: 40px;text-align: center;font-size: 15px;}
  .row-flex select{flex: 1;}
  .row-flex select{padding: 9px 15px!important;margin-bottom: 0;}
  /*table*/
  .mui-content table{width: 100%;overflow: auto;margin-bottom: 40px;}
  table tr th{text-align: left;width: 20%;}
  table tr td span{display: block;;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
  .mui-content table tr:nth-child(1){font-size: 12px;background-color: #DADADA;line-height: 30px;}
  /*底部*/
  .footer{background-color: #dedcdc;position: fixed;width: 100%;bottom: 0;display: flex;padding-top: 10px;}
  .footer .footer-botton:nth-child(1){flex: 1;padding-left: 8px;}
  .footer .footer-botton:nth-child(2){flex: 1;display: flex;}
  .footer .footer-botton p{color: black;font-weight: bold;font-size: 15px}
  .footer .footer-botton:nth-child(2) p{flex: 1;text-align: center;font-size:15px;}
  .footer .footer-botton:nth-child(2) em{flex: 1;font-size: 15px;font-weight:bold;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}
</style>
