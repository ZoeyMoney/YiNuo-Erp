(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8112756"],{b89e:function(t,e,o){},d183:function(t,e){const o={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details"};t.exports=o},d230:function(t,e,o){"use strict";var i=o("b89e"),n=o.n(i);n.a},ef4c:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customer_follow_up"},[o("header",{staticClass:"mui-bar mui-bar-nav"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"customer_management"}}}),o("h1",{staticClass:"mui-title"},[t._v("客户跟进")]),o("router-link",{staticClass:"mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),o("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),o("div",{staticClass:"mui-content app"},[o("form",{staticClass:"mui-input-group"},[o("div",{staticClass:"mui-input-row"},[o("label",[t._v("工地名称")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.customer_name=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,function(e){return o("option",{domProps:{value:e.customer_name}},[t._v(t._s(e.customer_name))])})],2)]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("跟进人")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.follow_person,expression:"follow_person"}],attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.follow_person=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.profetName,function(e){return o("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),o("div",{staticClass:"mui-input-row row-textarea"},[o("label",[t._v("跟进内容")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.follow_text,expression:"follow_text"}],attrs:{name:"",rows:"",cols:"",id:"textarea",placeholder:"请输入跟进内容"},domProps:{value:t.follow_text},on:{input:function(e){e.target.composing||(t.follow_text=e.target.value)}}})])]),o("button-save",{nativeOn:{click:function(e){return t.go(e)}}})],1)],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mui-content"},[o("div",{staticClass:"customer"},[o("h2",[t._v("客户跟进")]),o("p",[t._v("/Client follow-up")])])])}],l=o("d183"),a=o.n(l),u={name:"customer_follow_up",data(){return{imgUrl_loading:!1,customer_name:"",follow_person:"",follow_text:"",listName:"",profetName:""}},created(){this.axios.get(a.a.clientProjet).then(t=>{this.listName=t.data}),this.axios.get(a.a.clientFollowPerson).then(t=>{this.profetName=t.data})},methods:{go(){var t=this;if(""==this.Customer_name)return mui.toast("项目名称不能为空"),!1,!1;if(""==this.select_follow_person)return mui.toast("跟进人不能为空"),!1,!1;if(""==this.follow_text)return mui.toast("跟进信息不能为空"),!1,!1;this.imgUrl_loading=!0;var e="?Customer_name="+this.customer_name+"&follow_person="+this.follow_person+"&follow_text="+this.follow_text;this.axios.get(a.a.clientAddFollow+e).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.push("customer_management")}))})}}},r=u,s=(o("d230"),o("2877")),m=Object(s["a"])(r,i,n,!1,null,"6abd5854",null);e["default"]=m.exports}}]);