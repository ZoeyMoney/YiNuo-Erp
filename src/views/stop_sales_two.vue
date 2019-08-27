<template>
    <div class="stop_sales_two">
      <div>
        <input type="text" v-model="msg">
        <button @click="send">发消息</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'stop_sales_two',
    data(){
      return {
        msg: '',
        Soket: null,
        list:[],
        list_list:[],
        userid:'',
        path:"ws://formattingclub.com/YiNuoLogin/websocket/5",
        socket:""
      }
    },
    computed:{
      name(){
        console.log(this.$store.state.state.name)
      }
    },
    created(){
      this.userid = JSON.parse(localStorage.data).userid
      //实时运行
      // this.initWebSocket()
    },
    destroyed: function() {
      //页面销毁时关闭长连接
      this.websocketclose();
    },
    mounted(){
      // 初始化
      this.init()
    },
    methods: {
      init: function () {
        if(typeof(WebSocket) === "undefined"){
          alert("您的浏览器不支持socket")
        }else{
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
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        console.log(msg.data)
      },
      send: function () {
        this.socket.send('1|5|5|'+this.msg)
      },
      close: function () {
        console.log("socket已经关闭")
      }
    },
    /*destroyed () {
      // 销毁监听
      this.socket.onclose = this.close
    }*/
  }
</script>

<style scoped>

</style>
