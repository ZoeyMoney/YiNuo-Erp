(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225b58"],{e60a:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stop_sales"},[s("header",{staticClass:"mui-bar mui-bar-nav"},[s("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_management"}}}),s("h1",{staticClass:"mui-title"},[e._v("暂支销账")]),s("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),e.imgUrl_loading?s("login-loading"):e._e(),s("div",{staticClass:"mui-content"},[s("button",{on:{click:e.send}},[e._v("发消息")])])],1)},i=[],n={name:"stop_sales",data(){return{msg:"",data:"",list:[],list_list:[],textArr:["1 第一条公告","2 第二条公告第二条公告","3 第三条公告第三条公告第三条公告"],number:0,imgUrl_loading:!1,searchData:"",items:[{id:"1001",name:"哈哈",time:"20170207"},{id:"1002",name:"呵呵",time:"20170213"},{id:"1103",name:"晓丽",time:"20170304"},{id:"1104",name:"小兰",time:"20170112"},{id:"1205",name:"财务",time:"20170203"},{id:"1206",name:"嘻嘻",time:"20170208"},{id:"1307",name:"测试",time:"20170201"}],tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],userid:"",path:"ws://formattingclub.com/YiNuoLogin/websocket/6",socket:""}},created(){this.name=JSON.parse(localStorage.data).userNumber,this.userid=JSON.parse(localStorage.data).userid},destroyed:function(){},computed:{Newitems(){var e=this,t=[];return e.items.map(function(s){-1==s.id.search(e.searchData)&&-1==s.name.search(e.searchData)||t.push(s)}),t}},mounted(){this.init()},methods:{init:function(){"undefined"===typeof WebSocket?alert("您的浏览器不支持socket"):(this.socket=new WebSocket(this.path),this.socket.onopen=this.open,this.socket.onerror=this.error,this.socket.onmessage=this.getMessage)},open:function(){console.log("socket连接成功")},error:function(){console.log("连接错误")},getMessage:function(e){console.log(e.data)},send:function(){this.socket.send()},close:function(){console.log("socket已经关闭")},destroyed(){this.socket.onclose=this.close}}},o=n,c=s("2877"),r=Object(c["a"])(o,a,i,!1,null,"306a473b",null);t["default"]=r.exports}}]);