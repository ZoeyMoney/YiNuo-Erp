(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-538363f0"],{"26b5":function(t,i,a){},"4ef5":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"Setting"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"index"}}}),a("h1",{staticClass:"mui-title"},[t._v("设置")])],1),t.imgUrl_loading?a("login-loading"):t._e(),a("div",{staticClass:"mui-content"},[a("ul",{staticClass:"mui-table-view botton-mar"},t._l(t.list,function(i){return a("li",{staticClass:"mui-table-view-cell"},[a("router-link",{staticClass:"mui-navigate-right",attrs:{to:i.href}},[t._v(t._s(i.test))])],1)}),0),a("div",{staticClass:"form-button"},[a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.setting}},[t._v("退出登录")])])])],1)},s=[],n={name:"Setting",data(){return{imgUrl_loading:!1,list:[{href:"SettingName",test:"修改用户名"},{href:"SettingPwd",test:"修改密码"},{href:"userNameUpdate",test:"个人信息"}]}},created(){},mounted(){},methods:{setting(){var t=this;this.imgUrl_loading=!0,this.axios.get("/logout").then(i=>{200===i.status&&(this.imgUrl_loading=!1,mui.alert(i.data.msg,function(){localStorage.clear(),sessionStorage.clear(),localStorage.removeItem("isLogin"),t.$router.push({name:"Login"})}))})}}},l=n,r=(a("d0ae"),a("2877")),o=Object(r["a"])(l,e,s,!1,null,"3fa17242",null);i["default"]=o.exports},d0ae:function(t,i,a){"use strict";var e=a("26b5"),s=a.n(e);s.a}}]);