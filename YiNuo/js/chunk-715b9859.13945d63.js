(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-715b9859"],{"95f6":function(t,e,i){},ce05:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"money_projet"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),i("h1",{staticClass:"mui-title"},[t._v("项目录入")]),i("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),i("div",{staticClass:"mui-content app"},[i("form",{staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[t._v("工地名称")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.site_projet,expression:"site_projet"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输项目名称"},domProps:{value:t.site_projet},on:{input:function(e){e.target.composing||(t.site_projet=e.target.value)}}})])]),i("div",{staticClass:"form-botton"},[i("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.add}},[t._v("保存")])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mui-content"},[i("div",{staticClass:"customer"},[i("h2",[t._v("项目录入")]),i("p",[t._v("/Balance input")])])])}],n={name:"money_projet",data:function(){return{site_projet:""}},methods:{add:function(){var t=this;this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name?Customr_name="+this.site_projet).then(function(e){mui.alert(e.data.msg,function(){t.$router.push({name:"money_sale"})})})}}},o=n,u=(i("cfd6"),i("2877")),r=Object(u["a"])(o,a,s,!1,null,"5e487a26",null);e["default"]=r.exports},cfd6:function(t,e,i){"use strict";var a=i("95f6"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-715b9859.13945d63.js.map