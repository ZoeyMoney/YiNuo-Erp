(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46ade596"],{"0c23":function(t,e,a){"use strict";var i=a("6524"),s=a.n(i);s.a},6524:function(t,e,a){},7657:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SettingName"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"Setting"}}}),a("h1",{staticClass:"mui-title"},[t._v("用户名设置")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("div",{staticClass:"mui-content"},[a("form",{staticClass:"mui-input-group setting-name"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("用户名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.sesName,expression:"sesName"}],staticClass:"mui-input-clear",attrs:{type:"text",disabled:"disabled"},domProps:{value:t.sesName},on:{input:function(e){e.target.composing||(t.sesName=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("新用户名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("div",{staticClass:"form-button"},[a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.setting}},[t._v("确定")])])])])},s=[],n={name:"SettingName",data(){return{sesName:sessionStorage.getItem("loginUser"),name:""}},methods:{setting(){var t=this,e=/^[^\s]*$/;if(""==this.name)return mui.toast("用户名不能为空"),!1,!1;if(!e.test(this.name))return mui.toast("用户名不能有空格"),!1,!1;var a="?name="+this.name+"&user_id="+JSON.parse(localStorage.data).userid;this.axios.get("/User/update_user"+a).then(e=>{"修改成功"===e.data.msg?mui.alert("修改成功",(function(){t.$router.push({name:"login"})})):mui.alert("修改失败")})}}},u=n,r=(a("0c23"),a("6691")),m=Object(r["a"])(u,i,s,!1,null,"080c1cd6",null);e["default"]=m.exports}}]);