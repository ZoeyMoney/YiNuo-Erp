(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22a5f18e"],{3282:function(t,e,s){},c0e6:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customer_entry"},[s("header",{staticClass:"mui-bar mui-bar-nav header-top"},[s("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"customer_management"}}}),s("h1",{staticClass:"mui-title"},[t._v("客户录入")]),s("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),s("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),s("div",{staticClass:"mui-content app"},[s("form",{staticClass:"mui-input-group"},[s("div",{staticClass:"mui-input-row"},[s("label",[t._v("工地名称")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_name,expression:"Customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入项目名称"},domProps:{value:t.Customer_name},on:{input:function(e){e.target.composing||(t.Customer_name=e.target.value)}}})]),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("联系人")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_linkman,expression:"Customer_linkman"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系人"},domProps:{value:t.Customer_linkman},on:{input:function(e){e.target.composing||(t.Customer_linkman=e.target.value)}}})]),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("联系方式")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_connect,expression:"Customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.Customer_connect},on:{input:function(e){e.target.composing||(t.Customer_connect=e.target.value)}}})]),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("设计师")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.Customer_stylist,expression:"Customer_stylist"}],class:{classGray:""==t.Customer_stylist,classBlack:""!=t.Customer_stylist},attrs:{name:"",id:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Customer_stylist=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,(function(e){return s("option",{domProps:{value:e.fund_person_id}},[t._v(t._s(e.fund_person))])}))],2)]),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("装修面积")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_Decorate,expression:"Customer_Decorate"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"装修面积"},domProps:{value:t.Customer_Decorate},on:{input:function(e){e.target.composing||(t.Customer_Decorate=e.target.value)}}})]),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("推荐人")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_referrer,expression:"Customer_referrer"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"推荐人"},domProps:{value:t.Customer_referrer},on:{input:function(e){e.target.composing||(t.Customer_referrer=e.target.value)}}})]),s("div",{staticClass:"mui-input-row money-input"},[s("label",[t._v("项目预算")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_budget,expression:"Customer_budget"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"budgedt",name:"Customer_budget",placeholder:"￥"},domProps:{value:t.Customer_budget},on:{input:function(e){e.target.composing||(t.Customer_budget=e.target.value)}}}),s("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_budget)))])]),s("div",{staticClass:"mui-input-row"},[s("label",[t._v("客户级别")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],class:{classGray:""==t.level,classBlack:""!=t.level},attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.listLevel,(function(e){return s("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))],2)]),s("div",{staticClass:"row-left"},[s("div",{staticClass:"row-left-on"},[s("label",[t._v("所属类型")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.Customer_type,expression:"Customer_type"}],class:{classGray:""==t.Customer_type,classBlack:""!=t.Customer_type},attrs:{name:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.Customer_type=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_type,(function(e){return s("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))],2)]),s("div",{staticClass:"radio-left"},t._l(t.Customer_formList,(function(e){return s("div",{staticClass:"mui-input-row mui-radio mui-left"},[s("label",[t._v(t._s(e.value))]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_form,expression:"Customer_form"}],attrs:{name:"radio1",type:"radio"},domProps:{value:e.value,checked:t._q(t.Customer_form,e.value)},on:{change:function(s){t.Customer_form=e.value}}})])})),0)]),s("div",{staticClass:"mui-input-row form-textarea row-textarea"},[s("label",[t._v("客户需求")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Customer_demand,expression:"Customer_demand"}],attrs:{name:"Customer_demand",rows:"",cols:"",id:"Customer_demand",placeholder:"请填写需求"},domProps:{value:t.Customer_demand},on:{input:function(e){e.target.composing||(t.Customer_demand=e.target.value)}}})])]),s("button-save",{nativeOn:{click:function(e){return t.go(e)}}})],1)],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customer"},[s("h2",[t._v("客户录入")]),s("p",[t._v("/Customer input")])])}],o={name:"customer_entry",data(){return{imgUrl_loading:!1,Customer_name:"",Customer_linkman:"",Customer_connect:"",Customer_stylist:"",listName:"",Customer_Decorate:"",Customer_referrer:"",Customer_budget:"",Customer_type:"",level:"A",listLevel:[{text:"A"},{text:"B"},{text:"C"}],Customer_form:"工装",Customer_formList:[{value:"家装"},{value:"工装"}],list_type:[{text:"餐饮"},{text:"服装"},{text:"办公"},{text:"健身"},{text:"美容"},{text:"娱乐"},{text:"教育"},{text:"医疗"},{text:"销售"},{text:"小区"}],Customer_demand:""}},created(){this.axios.get("/select_follow_person?fund_person_state=3").then(t=>{this.listName=t.data.data})},computed:{},methods:{go(){var t=this,e=/^1[0-9]{10}$/,s=/^[\u4E00-\u9FA5]{2,10}$/,r=/^[0-9]*$/,a=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,o=/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;if(""==this.Customer_name)return mui.toast("项目名称不能为空"),!1,!1;if(a.test(this.Customer_name)||o.test(this.Customer_name))return mui.toast("项目名称不能加入特殊字符"),!1,!1;if(""==this.Customer_linkman)return mui.toast("联系人不能为空"),!1,!1;if(!s.test(this.Customer_linkman))return mui.toast("联系人格式错误"),!1,!1;if(""==this.Customer_connect)return mui.toast("联系方式不能为空"),!1,!1;if(!e.test(this.Customer_connect))return mui.toast("联系方式格式错误"),!1,!1;if(""==this.Customer_stylist)return mui.toast("设计师不能为空"),!1,!1;if(""==this.Customer_Decorate)return mui.toast("装修面积不能为空"),!1,!1;if(!r.test(this.Customer_Decorate))return mui.toast("装修面积格式不正确"),!1,!1;if(""==this.Customer_referrer)return mui.toast("推荐人不能为空"),!1,!1;if(!s.test(this.Customer_referrer))return mui.toast("推荐人格式错误"),!1,!1;if(""==this.Customer_budget)return mui.toast("项目预算不能为空"),!1,!1;if(!r.test(this.Customer_budget))return mui.toast("项目预算格式错误"),!1,!1;this.imgUrl_loading=!0;var i="?Customer_name="+this.Customer_name+"&Customer_linkman="+this.Customer_linkman+"&Customer_connect="+this.Customer_connect+"&Customer_stylist="+this.Customer_stylist+"&Customer_Decorate="+this.Customer_Decorate+"&Customer_referrer="+this.Customer_referrer+"&Customer_budget="+this.Customer_budget+"&Customer_form="+this.Customer_form+"&Customer_type="+this.Customer_type+"&Customer_demand="+this.Customer_demand+"&Customer_grade="+this.level;this.axios.get("/Customer/AddCustomer"+i).then(e=>{200===e.status&&(this.imgUrl_loading=!1,"项目名称重复"==e.data?mui.alert("项目名称重复"):mui.alert(e.data,(function(){t.$router.push("customer_management")})))})}}},i=o,u=(s("d758"),s("6691")),n=Object(u["a"])(i,r,a,!1,null,"50a763da",null);e["default"]=n.exports},d758:function(t,e,s){"use strict";var r=s("3282"),a=s.n(r);a.a}}]);