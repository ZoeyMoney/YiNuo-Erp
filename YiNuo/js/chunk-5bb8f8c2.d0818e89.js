(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bb8f8c2"],{1971:function(t,i,e){"use strict";e.r(i);var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"informaction"},[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"index"}}}),e("h1",{staticClass:"mui-title"},[t._v("推进信息")]),e("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t.imgUrl_loading?e("login-loading"):t._e(),e("div",{staticClass:"mui-content"},[e("ul",{staticClass:"mui-table-view"},t._l(t.list_info,function(i){return e("li",{staticClass:"mui-table-view-cell"},[e("span",[t._v("大无畏："),e("i",{style:t.iR},[t._v("2019-10-90")])]),t._v(t._s(i))])}),0)])],1)},n=[],s={name:"informaction",data(){return{imgUrl_loading:!1,user_id:"",path_id:"",list_info:[],iR:{float:"right"}}},created(){var t=JSON.parse(localStorage.data).userid;this.path_id="ws://formattingclub.com/YiNuoLogin/websocket/"+t,this.axios.get("/Customer/Select_information").then(t=>{console.log(t)})},mounted(){this.init()},methods:{init:function(){"undefined"===typeof WebSocket?alert("您的浏览器不支持socket"):(this.socket=new WebSocket(this.path_id),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage)},open:function(){console.log("socket连接成功")},error:function(){console.log("连接错误")},getMessage:function(t){console.log(t)},send:function(){this.socket.send()},close:function(){console.log("socket已经关闭")}}},a=s,c=(e("d077"),e("2877")),l=Object(c["a"])(a,o,n,!1,null,"1a773e0e",null);i["default"]=l.exports},a4b3:function(t,i,e){},d077:function(t,i,e){"use strict";var o=e("a4b3"),n=e.n(o);n.a}}]);