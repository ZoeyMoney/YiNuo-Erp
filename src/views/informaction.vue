<template>
    <div class="informaction">
      <!--返回-->
      <header class="mui-bar mui-bar-nav">
        <router-link :to="{name:'index'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">推进信息</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-if="imgUrl_loading"></login-loading>
      <!--信息-->
      <div class="mui-content">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell" v-for="item in list_info"><span>大无畏：<i :style="iR">2019-10-90</i></span>{{item}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
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
  }
}
</script>

<style scoped>
  .mui-bar-nav~.mui-content{padding-top: 31px}
  *{font-size: 15px}
  span{display: block}
</style>
