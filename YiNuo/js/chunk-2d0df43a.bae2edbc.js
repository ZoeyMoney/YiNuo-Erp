(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df43a"],{"88bf":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stop_sales_two"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),s("button",{on:{click:t.send}},[t._v("发消息")])])])},n=[],i={name:"stop_sales_two",data(){return{msg:"",Soket:null,list:[],list_list:[],userid:"",path:"wss://formattingclub.com/YiNuoLogin/websocket/6",socket:""}},computed:{name(){console.log(this.$store.state.state.name)}},created(){},mounted(){this.init()},methods:{init:function(){"undefined"===typeof WebSocket?alert("您的浏览器不支持socket"):(this.socket=new WebSocket(this.path),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage)},open:function(){console.log("socket连接成功")},error:function(){console.log("连接错误")},getMessage:function(t){console.log(t.data)},send:function(){this.socket.send("1|36|6|"+this.msg)},close:function(){console.log("socket已经关闭")}}},c=i,a=s("2877"),l=Object(a["a"])(c,o,n,!1,null,"8a5b86f4",null);e["default"]=l.exports}}]);