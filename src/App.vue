<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'app',
    data () {
      return {
        user_id:this.$store.state.isLogin,
        // path:"ws://formattingclub.com/YiNuoLogin/websocket/6",
        socket:"",
        path_id:'',
        text:''
      }
    },
    created () {

      var p = new Promise(function (resolve, reject) {
        this.path_id = `ws://formattingclub.com/YiNuoLogin/websocket/`+this.$store.state.isLogin
      },2000)

      if (this.$store.state.isLogin != '') {
        console.log(this.$store.state.isLogin)
      }
      this.user_id = this.$store.state.isLogin
      console.log(this.$store.state.isLogin)
      if (this.user_id != '') {
        console.log(this.user_id)
      }
        // this.path_id = 'ws://formattingclub.com/YiNuoLogin/websocket/5'
      try {
        document.body.removeChild(document.getElementById('loading'))
        setTimeout(function () {
          document.getElementById('app').style.display = 'block';
        },500)
      } catch (e) {

      }


      //在页面加载时读取sessionSttorage里的状态信息
      if (localStorage.getItem('isLogin')) {
        this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('isLogin'))))
      }
        //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('isLogin',()=>{
        localStorage.setItem('isLogin',JSON.stringify(this.$store.state))
      })

        /*console.log("%c ", "padding:112px 150px;background:url('http://pic.962.net/up/2018-8/2018828124514356.png') no-repeat;");
        console.log("%c ", "padding:50px 150px;text-align:center;background:url('https://imgsa.baidu.com/forum/w%3D580/sign=5741eb9eb13eb13544c7b7b3961fa8cb/dca0da95d143ad4b065881b68f025aafa50f06e1.jpg') no-repeat;");*/
    },
    computed:{

    },
    mounted(){
      // 初始化
      this.init()
    },
    methods:{
      init: function () {
        if(typeof(WebSocket) === "undefined"){
          alert("您的浏览器不支持socket")
        }else {
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
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        console.log(msg)
        if (msg.data != '连接成功') {
          const h = this.$createElement;
          this.$notify({
            title: '新消息',
            duration:4000,
            // message: h('i', { style: 'color: teal' }, msg.data)
            message:h('a',{style:'color:teal', on:{ click:this.onClick } },msg.data) });
        }
      },
      onClick(){
        this.$router.push({name:'informaction'})
      },
      send: function () {
        this.socket.send()
      },
      close: function () {
        console.log("socket已经关闭")
      },
      /*destroyed () {
        // 销毁监听
        this.socket.onclose = this.close
      }*/
    }
  }
</script>

<style lang="scss">

</style>
