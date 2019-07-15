(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de7fed18"],{"0cbb":function(t,e,o){"use strict";var i=o("b0e2"),r=o.n(i);r.a},b0e2:function(t,e,o){},c0e6:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customer_entry"},[o("header",{staticClass:"mui-bar mui-bar-nav header-top"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"customer_management"}}}),o("h1",{staticClass:"mui-title"},[t._v("客户录入")]),o("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),o("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),o("div",{staticClass:"mui-content app"},[o("form",{staticClass:"mui-input-group"},[o("div",{staticClass:"mui-input-row"},[o("label",[t._v("工地名称")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_name,expression:"Customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入项目名称"},domProps:{value:t.Customer_name},on:{input:function(e){e.target.composing||(t.Customer_name=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("联系人")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_linkman,expression:"Customer_linkman"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系人"},domProps:{value:t.Customer_linkman},on:{input:function(e){e.target.composing||(t.Customer_linkman=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("联系方式")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_connect,expression:"Customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.Customer_connect},on:{input:function(e){e.target.composing||(t.Customer_connect=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("设计师")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.Customer_stylist,expression:"Customer_stylist"}],attrs:{name:"",id:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.Customer_stylist=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,function(e){return o("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("装修面积")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_Decorate,expression:"Customer_Decorate"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"装修面积"},domProps:{value:t.Customer_Decorate},on:{input:function(e){e.target.composing||(t.Customer_Decorate=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("推荐人")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_referrer,expression:"Customer_referrer"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"推荐人"},domProps:{value:t.Customer_referrer},on:{input:function(e){e.target.composing||(t.Customer_referrer=e.target.value)}}})]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("项目预算")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_budget,expression:"Customer_budget"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"budgedt",name:"Customer_budget",placeholder:"请输入预算金额"},domProps:{value:t.Customer_budget},on:{input:function(e){e.target.composing||(t.Customer_budget=e.target.value)}}}),o("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_budget)))])]),o("div",{staticClass:"mui-input-row radio-form"},[o("div",{staticClass:"mui-input-row mui-radio mui-left go-label"},[o("label",[t._v("所属类型")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_type,expression:"Customer_type"}],staticClass:"mui-input-clear",attrs:{type:"text",name:"Customer_type",id:"Customer_type",placeholder:"所属类型"},domProps:{value:t.Customer_type},on:{input:function(e){e.target.composing||(t.Customer_type=e.target.value)}}})]),t._l(t.Customer_formList,function(e,i){return o("div",{staticClass:"mui-input-row mui-radio mui-left mui-chech"},[o("label",[t._v(t._s(e.value))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_form,expression:"Customer_form"}],attrs:{name:"Customer_form",type:"radio"},domProps:{value:e.value,checked:t._q(t.Customer_form,e.value)},on:{change:function(o){t.Customer_form=e.value}}})])})],2),o("div",{staticClass:"mui-input-row form-textarea row-textarea"},[o("label",[t._v("客户需求")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Customer_demand,expression:"Customer_demand"}],attrs:{name:"Customer_demand",rows:"",cols:"",id:"Customer_demand",placeholder:"请填写需求"},domProps:{value:t.Customer_demand},on:{input:function(e){e.target.composing||(t.Customer_demand=e.target.value)}}})])]),o("button-save",{nativeOn:{click:function(e){return t.go(e)}}})],1)],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customer"},[o("h2",[t._v("客户录入")]),o("p",[t._v("/Customer input")])])}],s=o("d183"),u=o.n(s),n={name:"customer_entry",data(){return{imgUrl_loading:!1,Customer_name:"",Customer_linkman:"",Customer_connect:"",Customer_stylist:"",listName:"",Customer_Decorate:"",Customer_referrer:"",Customer_budget:"",Customer_type:"",Customer_form:"工装",Customer_formList:[{value:"家装"},{value:"工装"}],Customer_demand:""}},created(){this.axios.get(u.a.listName).then(t=>{this.listName=t.data})},computed:{},methods:{go(){var t=this,e=/^1[0-9]{10}$/,o=/^[\u4E00-\u9FA5]{2,4}$/,i=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,r=/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,s=/^[0-9]*$/;if(""==this.Customer_name)return mui.toast("项目名称不能为空"),!1,!1;if(i.test(this.Customer_name)||r.test(this.Customer_name))return mui.toast("项目名称不能加入特殊字符"),!1,!1;if(""==this.Customer_linkman)return mui.toast("联系人不能为空"),!1,!1;if(!o.test(this.Customer_linkman))return mui.toast("联系人格式错误"),!1,!1;if(""==this.Customer_connect)return mui.toast("联系方式不能为空"),!1,!1;if(!e.test(this.Customer_connect))return mui.toast("联系方式格式错误"),!1,!1;if(""==this.Customer_stylist)return mui.toast("设计师不能为空"),!1,!1;if(""==this.Customer_Decorate)return mui.toast("装修面积不能为空"),!1,!1;if(!s.test(this.Customer_Decorate))return mui.toast("装修面积格式不正确"),!1,!1;if(""==this.Customer_referrer)return mui.toast("推荐人不能为空"),!1,!1;if(!o.test(this.Customer_referrer))return mui.toast("推荐人格式错误"),!1,!1;if(""==this.Customer_budget)return mui.toast("项目预算不能为空"),!1,!1;if(!s.test(this.Customer_budget))return mui.toast("项目预算格式错误"),!1,!1;this.imgUrl_loading=!0;var n="?Customer_name="+this.Customer_name+"&Customer_linkman="+this.Customer_linkman+"&Customer_connect="+this.Customer_connect+"&Customer_stylist="+this.Customer_stylist+"&Customer_Decorate="+this.Customer_Decorate+"&Customer_referrer="+this.Customer_referrer+"&Customer_budget="+this.Customer_budget+"&Customer_form="+this.Customer_form+"&Customer_type="+this.Customer_type+"&Customer_demand="+this.Customer_demand;this.axios.get(u.a.clientAdd+n).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.push("customer_management")}))})}}},m=n,a=(o("0cbb"),o("2877")),l=Object(a["a"])(m,i,r,!1,null,"415ca85c",null);e["default"]=l.exports},d183:function(t,e){const o={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person"};t.exports=o}}]);