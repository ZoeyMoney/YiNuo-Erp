<template>
    <div class="stop_sales">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'money_management'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">暂支销账</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>

<!--      <vue-xlsx-table @on-select-file="handleSelectedFile"></vue-xlsx-table>-->
      <!--table-->
      <!--<div class="mui-content">
        <input type="text" v-model="searchData" placeholder="请输入id或姓名">
        <ul>
          <li v-for="(item,index) in Newitems" :key="index">
            <span>{{item.id}}</span>
            <span>{{item.name}}</span>
            <span>{{item.time}}</span>
          </li>
        </ul>
        &lt;!&ndash;<template>
          <el-table :data="tableData" style="width: 100%;white-space: nowrap">
            <el-table-column prop="date" label="日期" width="100"></el-table-column>
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </template>&ndash;&gt;
      </div>-->
      <!--<div>
        <h2>公告栏文字停顿滚动</h2>
        <div class="textBox">
          <transition name="slide">
            <p class="text" :key="text.id">{{text.val}}</p>
          </transition>
        </div>
      </div>
      <div class="cibtainer"></div>-->
      <div class="mui-content">
        <button @click="send">发消息</button>
      </div>
      </div>
</template>

<script>
export default {
  name: 'stop_sales',
  data () {
    return {
      msg: '',
      data: '',
      list: [],
      list_list: [],
      textArr: [
        '1 第一条公告',
        '2 第二条公告第二条公告',
        '3 第三条公告第三条公告第三条公告'
      ],
      number: 0,
      imgUrl_loading: false,
      searchData: '',
      items: [
        { id: '1001', name: '哈哈', time: '20170207' },
        { id: '1002', name: '呵呵', time: '20170213' },
        { id: '1103', name: '晓丽', time: '20170304' },
        { id: '1104', name: '小兰', time: '20170112' },
        { id: '1205', name: '财务', time: '20170203' },
        { id: '1206', name: '嘻嘻', time: '20170208' },
        { id: '1307', name: '测试', time: '20170201' }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      userid: '',
      path: 'ws://formattingclub.com/YiNuoLogin/websocket/6',
      socket: ''
    }
  },
  created () {
    this.name = JSON.parse(localStorage.data).userNumber
    this.userid = JSON.parse(localStorage.data).userid
    // 实时运行
    // this.initWebSocket()
  },
  destroyed: function () {
    // 页面销毁时关闭长连接
    // this.websocketclose();
  },
  computed: {
    /* text () {
        return {
          id: this.number,
          val: this.textArr[this.number]
        }
      }, */
    Newitems () {
      var _this = this
      var Newitems = []
      _this.items.map(function (item) {
        if (
          item.id.search(_this.searchData) != -1 ||
            item.name.search(_this.searchData) != -1
        ) {
          Newitems.push(item)
        }
      })
      return Newitems
    }
  },
  mounted () {
    // 初始化
    this.init()
  },
  // 0群发 1单独 2部门 3多个人
  // 用户id
  methods: {
    init: function () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      console.log('socket连接成功')
    },
    error: function () {
      console.log('连接错误')
    },
    getMessage: function (msg) {
      console.log(msg.data)
    },
    send: function () {
      this.socket.send()
    },
    close: function () {
      console.log('socket已经关闭')
    },
    destroyed () {
      // 销毁监听
      this.socket.onclose = this.close
    }
    /* asd(id){
      // console.log(id)
      this.$router.push(`/customer_follow_up/${id}`)
    } */
    /* startMove () {
        // eslint-disable-next-line
        let timer = setTimeout(() => {
          if (this.number === 2) {
            this.number = 0;
          } else {
            this.number += 1;
          }
          this.startMove();
        }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
      } */
  }
}
</script>

<style scoped>

</style>
