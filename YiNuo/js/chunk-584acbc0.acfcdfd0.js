(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-584acbc0"],{"05e5":function(t,i,e){"use strict";var a=e("1926"),s=e.n(a);s.a},1926:function(t,i,e){},"4ef5":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Setting"},[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"index"}}}),e("h1",{staticClass:"mui-title"},[t._v("设置")])],1),t.imgUrl_loading?e("login-loading"):t._e(),e("div",{staticClass:"mui-content"},[e("ul",{staticClass:"mui-table-view botton-mar"},t._l(t.list,function(i){return e("li",{staticClass:"mui-table-view-cell"},[e("router-link",{staticClass:"mui-navigate-right",attrs:{to:i.href}},[t._v(t._s(i.test))])],1)}),0),e("div",{staticClass:"form-button"},[e("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.setting}},[t._v("退出登录")])])])],1)},s=[],n={name:"Setting",data(){return{imgUrl_loading:!1,list:[{href:"SettingName",test:"修改用户名"},{href:"SettingPwd",test:"修改密码"},{href:"userNameUpdate",test:"个人信息"}]}},methods:{setting(){var t=this;this.imgUrl_loading=!0,this.axios.get("/logout").then(i=>{200===i.status&&(this.imgUrl_loading=!1,mui.alert(i.data.msg,function(){localStorage.clear(),sessionStorage.clear(),localStorage.removeItem("isLogin"),t.$router.push({name:"Login"})}))})}},created(){},computed:{}},l=n,r=(e("05e5"),e("2877")),o=Object(r["a"])(l,a,s,!1,null,"867a4e26",null);i["default"]=o.exports}}]);