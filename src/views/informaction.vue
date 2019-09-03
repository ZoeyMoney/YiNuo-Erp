<template>
    <div class="site_management">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">袋鼠帮帮</h1>
        <router-link :to="{name:'index'}" class="mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <!--菜单-->
      <div class="one-noble">
        <h2>袋鼠帮帮</h2>
        <p>Customer management</p>
      </div>
      <!--九宫格-->
      <div class="mui-content app">
      <ul class="mui-table-view mui-grid-view mui-grid-9 jiugongge">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="item in list">
          <router-link :to="item.href">
            <img :src="item.listImg" alt="">
              <div class="mui-media-body">{{item.name}}</div>
          </router-link>
      </li>
      </ul>
      </div>
    </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'informaction',
  data () {
    return {
      imgUrl_loading: false,
      user_id: '',
      path_id: '',
      list_info: [],
      iR: {
        float: 'right'
      }
    }
  },
  created () {
    var use = JSON.parse(localStorage.data).userid
    this.path_id = 'ws://formattingclub.com/YiNuoLogin/websocket/' + use

    this.axios.get('/Customer/Select_information').then(res => {
      console.log(res)
    })
  },
  mounted () {
    // 初始化
    this.init()
  },
  methods: {
    init: function () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path_id)
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
      console.log(msg)
    },
    send: function () {
      this.socket.send()
    },
    close: function () {
      console.log('socket已经关闭')
    }
    /* destroyed () {
        // 销毁监听
        this.socket.onclose = this.close
      } */
=======
  export default {
   name: 'site_management',
  data () {
    return {
      list: [
        { name: '工人录入', listImg: require('../image/bi.png'), href: 'workers_enter' },
        { name: '工人统计', listImg: require('../image/data.png'), href: 'list_workers' },
        { name: '工地评论', listImg: require('../image/cheliang.png'), href: 'site_Inspection' },
        { name: '其他', listImg: require('../image/cheliang.png'), href: 'site_Inspection' }
      ]
    }
  },
>>>>>>> e72c251428cbcf0db14ce838eadfb1f3adb60217
  }
}
</script>

<style scoped>
  .mui-bar-nav~.mui-content{padding-top: 31px}
  *{font-size: 15px}
  span{display: block}
</style>
