import router from '../router'
import config from '../js/index'
var then = this
var socket
var websocket = {
  init: function () {
    socket = new WebSocket('wss://formattingclub.com/YiNuoLogin/websocket/' + sessionStorage.getItem('loginUserId'))
    // 打开事件
    socket.onopen = function () {
      console.log('以打开')
    }
    // 获得消息事件
    socket.onmessage = function (msg) {
    console.log(msg.data);
      if (msg.data != '连接成功') {
        //  创建div
        var div = document.createElement('div')
        // 给div加class
        var divarr = document.createAttribute('class')
        // class命名test
        divarr.value = 'test'
        // 给创建的div绑定点击事件
        div.setAttributeNode(divarr)
        var style = document.createAttribute('style')
        div.setAttributeNode(style)
        /*div.style.width = '80%'
        div.style.background = 'white'
        div.style.margin = 'auto'
        div.style.fontSize = '15px'
        div.style.padding = '10px 10px'
        div.style.boxShadow = '0px 2px 7px 1px #b6b6b6'
        div.style.position = 'fixed'
        div.style.zIndex = '1000'
        /!* div.style.left= (parseInt(document.body.scrollWidth - 300) /2 +'px')
      div.style.top=(parseInt(document.body.scrollHeight -550) /2 +'px') *!/
        div.style.left = '10%'
        div.style.top = '50px'*/
        div.innerHTML = msg.data
        div.onclick = function () {
          // then.router.push({ name: 'informaction' })
          sessionStorage.setItem(config.KEY.CACHE_WEBSOCKET_NAME,'webs')
          console.log(sessionStorage.getItem(config.KEY.CACHE_WEBSOCKET_NAME))
        }
        var box = document.getElementById('box')
        box.style.display = 'block'
        box.onclick = function(){
          box.style.display = 'none'
        }
        // 3秒后消失
        setTimeout(function () {
          if (div != null) {
            div.parentNode.removeChild(div)
            box.style.display = 'none'
          }
        }, 3000)
        // document.getElementsByTagName('body').item(0).append(div)

        document.getElementById('box').appendChild(div)
      }
    // 发现消息进入    调后台获取
    }
    // 发生了错误事件
    socket.onerror = function () {
      mui.toast('发生了错误')
    }
  },
  close: function () {
    socket.close()
    console.log('连接已关闭')
  },
  send: function (msg) {
    // socket.send('1|12|5|123456')
    socket.send(msg)
    console.log(msg)
  }
}

export { websocket, socket }
