(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ee42098"],{"599c":function(t,e,o){"use strict";var a=o("d4a7"),n=o.n(a);n.a},d4a7:function(t,e,o){},ddf3:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Follow_up_after_sale"},[o("header",{staticClass:"mui-bar mui-bar-nav"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),o("h1",{staticClass:"mui-title"},[t._v("售后跟进")]),o("router-link",{staticClass:"mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),o("div",{staticClass:"mui-content app"},[o("form",{staticClass:"mui-input-group"},[o("div",{staticClass:"mui-input-row"},[o("label",[t._v("工地各项")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.customer_name=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,function(e){return o("option",{domProps:{value:e.customer_name}},[t._v(t._s(e.customer_name))])})],2)]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("跟进人")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.follow_person,expression:"follow_person"}],attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.follow_person=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.profetName,function(e){return o("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),o("div",{staticClass:"mui-input-row row-textarea"},[o("label",[t._v("跟进内容")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.follow_text,expression:"follow_text"}],attrs:{name:"",rows:"",cols:"",id:"textarea",placeholder:"请输入跟进内容"},domProps:{value:t.follow_text},on:{input:function(e){e.target.composing||(t.follow_text=e.target.value)}}})])]),o("div",{staticClass:"mui-input-row form-btn"},[o("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("保存")])])])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mui-content"},[o("div",{staticClass:"customer"},[o("h2",[t._v("售后跟进")]),o("p",[t._v("/Client follow-up")])])])}],i={name:"customer_follow_up",data:function(){return{customer_name:"",follow_person:"",follow_text:"",listName:"",profetName:""}},created:function(){var t=this;this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer").then(function(e){t.listName=e.data}),this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person").then(function(e){t.profetName=e.data})},methods:{go:function(){var t=this;if(""==this.Customer_name)return mui.toast("项目名称不能为空"),!1,!1;if(""==this.select_follow_person)return mui.toast("跟进人不能为空"),!1,!1;if(""==this.follow_text)return mui.toast("跟进信息不能为空"),!1,!1;var e="?Customer_name="+this.customer_name+"&follow_person="+this.follow_person+"&follow_text="+this.follow_text;this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow"+e).then(function(e){"添加成功"===e.data?mui.alert("添加成功",function(){t.$router.push("customer_management")}):mui.alert("添加失败")})}}},l=i,s=(o("599c"),o("2877")),r=Object(s["a"])(l,a,n,!1,null,"5d2729d6",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-6ee42098.92b9ddec.js.map