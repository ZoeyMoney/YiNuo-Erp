(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-734c7130"],{"41fb":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer_details"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"customer_statistics"}}}),a("h1",{staticClass:"mui-title"},[t._v("客户详情")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),a("div",{staticClass:"mui-content app"},[t._l(t.projet,function(e){return a("form",{staticClass:"mui-input-group"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("客户名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_name,expression:"item.customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_name},on:{input:function(a){a.target.composing||t.$set(e,"customer_name",a.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("联系人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_linkman,expression:"item.customer_linkman"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_linkman},on:{input:function(a){a.target.composing||t.$set(e,"customer_linkman",a.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("联系方式")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_connect,expression:"item.customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_connect},on:{input:function(a){a.target.composing||t.$set(e,"customer_connect",a.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("设计师")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_stylist,expression:"item.customer_stylist"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_stylist},on:{input:function(a){a.target.composing||t.$set(e,"customer_stylist",a.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("装修面积")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_Decorate,expression:"item.customer_Decorate"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_Decorate},on:{input:function(a){a.target.composing||t.$set(e,"customer_Decorate",a.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("推荐人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_referrer,expression:"item.customer_referrer"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_referrer},on:{input:function(a){a.target.composing||t.$set(e,"customer_referrer",a.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("项目预算")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.customer_budget,expression:"item.customer_budget"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input",disabled:"disabled"},domProps:{value:e.customer_budget},on:{input:function(a){a.target.composing||t.$set(e,"customer_budget",a.target.value)}}})]),a("div",{staticClass:"mui-input-row all-row"},[a("label",[t._v("所属类型")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Customer_type,expression:"item.Customer_type"}],staticClass:"mui-input-clear row-input",attrs:{type:"text",disabled:"disabled"},domProps:{value:e.Customer_type},on:{input:function(a){a.target.composing||t.$set(e,"Customer_type",a.target.value)}}}),t._m(1,!0),t._m(2,!0)]),a("div",{staticClass:"mui-input-row all-row textreap"},[a("label",[t._v("客户需求")]),a("label",[t._v(t._s(e.customer_demand))])])])}),t._l(t.stageName,function(e){return a("form",{staticClass:"mui-input-group form-pab form-padding"},[a("div",{staticClass:"mui-content"},[a("div",{staticClass:"row-box"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("建单时间")]),a("input",{staticClass:"mui-input-clear",attrs:{type:"text",id:"stageData",placeholder:"2019-01-14",disabled:"disabled"},domProps:{value:t._f("data")(e.stage_measure)}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("已建单")]),a("input",{staticClass:"mui-input-clear",attrs:{type:"text",id:"day",disabled:"disabled"},domProps:{value:e.stage_day}})])]),a("div",{staticClass:"row-box"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("当前阶段")]),a("input",{staticClass:"mui-input-clear",attrs:{type:"text",id:"stipulate",disabled:"disabled"},domProps:{value:e.stage_name}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("限时")]),a("input",{staticClass:"mui-input-clear",attrs:{type:"text",id:"stage_name",disabled:"disabled"},domProps:{value:e.stage_stipulate}})])]),a("div",{staticClass:"row-box"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("开始时间")]),a("input",{staticClass:"mui-input-clear",attrs:{type:"text",id:"goData",placeholder:"2019-01-12",disabled:"disabled"},domProps:{value:t._f("data")(e.stage_startdate)}})]),a("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t._f("data")(t.listtime)))]),a("div",{staticClass:"mui-input-row item-time"},[a("label",[t._v("倒计时")]),a("label",[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))])])])])])}),a("form",{staticClass:"mui-input-group form-pad box-h4"},[a("h4",[t._v("跟进记录")]),t._l(t.stage,function(e){return a("div",{staticClass:"box"},[a("div",{staticClass:"mui-input-row jin"},[a("div",{staticClass:"gen"},[t._v("\n              "+t._s(e.follow_person)+"\n            ")]),a("div",{staticClass:"jin-date"},[a("p",[t._v(t._s(t._f("data")(e.follow_date)))])])]),a("div",{staticClass:"row-go"},[a("div",{staticClass:"mui-input-row row-textarea"},[a("textarea",{attrs:{name:"",rows:"",cols:"",disabled:"disabled"},domProps:{value:e.follow_text}})])])])})],2),a("form",{staticClass:"mui-input-group form-pad box-h4 botton-mar"},[a("h4",[t._v("修改记录")]),t._l(t.undata,function(e){return a("div",{staticClass:"box"},[a("div",{staticClass:"mui-input-row jin"},[a("div",{staticClass:"gen"},[t._v("\n              "+t._s(e.follow_person)+"\n            ")]),a("div",{staticClass:"jin-date"},[a("p",[t._v(t._s(t._f("data")(e.update_date)))]),a("p",[t._v("修改人："+t._s(e.update_user_id))])])]),a("div",{staticClass:"row-go"},[a("div",{staticClass:"mui-input-row row-textarea"},[a("textarea",{attrs:{name:"",rows:"",cols:"",disabled:"disabled"},domProps:{value:e.update_text}})])])])})],2),a("div",{staticClass:"form-botton"},[a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"}},[t._v("开工")]),a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.dele}},[t._v("删除")]),a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.UpdateCustomer}},[t._v("修改")])])],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[a("div",{staticClass:"customer"},[a("h2",[t._v("客户详细")]),a("p",[t._v("/Client follow-up")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-input-row mui-radio mui-left mui-chech",attrs:{name:""}},[a("label",[t._v("家装")]),a("input",{attrs:{name:"Customer_form",type:"radio",value:"家装",checked:"a",disabled:"disabled"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-input-row mui-radio mui-left mui-heck"},[a("label",[t._v("工装")]),a("input",{attrs:{name:"Customer_form",type:"radio",value:"工装",checked:"b",disabled:"disabled"}})])}],o={name:"customer_details",data:function(){return{projet:"",stageName:"",listtime:"",stage:"",undata:""}},created:function(){var t=this;setInterval(function(){var e=new Date;t.listtime=e},1e3);var e=location.href,a=e.length,s=e.indexOf("="),i=decodeURI(e.substr(s+1,a-s));this.customer_id=i,this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer?Customer="+i).then(function(e){t.projet=e.data,"家装"==t.projet.Customer_form?(t.a=!0,t.b=!0):(t.a=!1,t.b=!0)}),this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/selectStage?Customer="+i).then(function(e){if(t.stageName=e.data,""==e.data){var a=[{stage_measure:"",stage_day:"",stage_stipulate:"",stage_name:"",stage_startdate:""}];t.stageName=a}}),this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/selectStage?Customer="+i).then(function(e){200===e.status?t.list=e.data:console.log("获取失败")}),this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/SelectFollow?Customer_id="+i).then(function(e){t.stage=e.data}),this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate").then(function(e){t.undata=e.data.data})},methods:{UpdateCustomer:function(){this.$router.push({path:"site_modify",query:{id:this.customer_id}})},dele:function(){var t=this,e=this.customer_id;this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer?Customer="+e).then(function(e){200===e.status&&("删除成功"==e.data?mui.alert("删除成功",function(){t.$router.push({path:"customer_statistics"})}):alert("删除失败"))})},time:function(t,e){if(null==t)return"未开始";var a=new Date(t);a.setDate(a.getDate()+e);var s=a.getMonth()+1,i=a.getFullYear()+"-"+s+"-"+a.getDate()+"-"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),o=new Date(i),u=new Date,r=o-u;if(r>0)var l=Math.floor(r/1e3/60/60/24),n=Math.floor(r/1e3/60/60%24),m=Math.floor(r/1e3/60%60),c=Math.floor(r/1e3%60),d=l+":"+n+":"+m+":"+c;else d="已逾期";return d}}},u=o,r=(a("c3c8"),a("2877")),l=Object(r["a"])(u,s,i,!1,null,"05f46511",null);e["default"]=l.exports},c3c8:function(t,e,a){"use strict";var s=a("c5f1"),i=a.n(s);i.a},c5f1:function(t,e,a){}}]);
//# sourceMappingURL=chunk-734c7130.ac684262.js.map