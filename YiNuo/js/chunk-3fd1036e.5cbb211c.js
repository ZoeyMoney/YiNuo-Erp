(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fd1036e"],{"4ef5":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"Setting"},[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"index"}}}),e("h1",{staticClass:"mui-title"},[t._v("设置")])],1),t.imgUrl_loading?e("login-loading"):t._e(),e("div",{staticClass:"mui-content"},[e("ul",{staticClass:"mui-table-view botton-mar"},t._l(t.list,function(i){return e("li",{staticClass:"mui-table-view-cell"},[e("router-link",{staticClass:"mui-navigate-right",attrs:{to:i.href}},[t._v(t._s(i.test))])],1)}),0),e("div",{staticClass:"form-button"},[e("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.setting}},[t._v("退出登录")])])])],1)},s=[],n={name:"Setting",data(){return{imgUrl_loading:!1,list:[{href:"SettingName",test:"修改用户名"},{href:"SettingPwd",test:"修改密码"},{href:"userNameUpdate",test:"个人中心"}]}},created(){},mounted(){},methods:{setting(){var t=this;this.imgUrl_loading=!0,this.axios.get("/logout").then(i=>{200===i.status&&(this.imgUrl_loading=!1,mui.alert(i.data.msg,function(){localStorage.clear(),sessionStorage.clear(),localStorage.removeItem("isLogin"),t.$router.push({name:"Login"})}))})}}},l=n,r=(e("7117"),e("2877")),o=Object(r["a"])(l,a,s,!1,null,"2e042d57",null);i["default"]=o.exports},7117:function(t,i,e){"use strict";var a=e("f0d91"),s=e.n(a);s.a},f0d91:function(t,i,e){}}]);