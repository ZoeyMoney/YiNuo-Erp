(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dc857d4"],{"4ef5":function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"Setting"},[n("header",{staticClass:"mui-bar mui-bar-nav"},[n("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"index"}}}),n("h1",{staticClass:"mui-title"},[t._v("设置")])],1),n("div",{staticClass:"mui-content"},[n("ul",{staticClass:"mui-table-view botton-mar"},t._l(t.list,function(i){return n("li",{staticClass:"mui-table-view-cell"},[n("router-link",{staticClass:"mui-navigate-right",attrs:{to:i.href}},[t._v(t._s(i.test))])],1)}),0),n("div",{staticClass:"form-button"},[n("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.setting}},[t._v("退出登录")])])])])},a=[],e={name:"Setting",data:function(){return{list:[{href:"SettingName",test:"设置用户名"},{href:"SettingPwd",test:"设置密码"}]}},methods:{setting:function(){var t=this;this.axios.get("https://formattingclub.com/YiNuoLogin/logout").then(function(i){mui.alert(i.data.msg,function(){t.$router.push({name:"Login"})})})}}},u=e,l=(n("a56f"),n("2877")),o=Object(l["a"])(u,s,a,!1,null,"044b019d",null);i["default"]=o.exports},a56f:function(t,i,n){"use strict";var s=n("e787"),a=n.n(s);a.a},e787:function(t,i,n){}}]);
//# sourceMappingURL=chunk-1dc857d4.2c48f9c9.js.map