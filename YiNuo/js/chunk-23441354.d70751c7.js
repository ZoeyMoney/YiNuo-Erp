(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23441354"],{"6dda":function(t,o,e){"use strict";var i=e("89cf"),n=e.n(i);n.a},"89cf":function(t,o,e){},d183:function(t,o){const e={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details",money_search:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money",money_refund:"https://formattingclub.com/YiNuoLogin/fund/money_refund",newUserName:"https://formattingclub.com/YiNuoLogin/User/Add_User",add_customer_person_fund:"https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund"};t.exports=e},ddf3:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"Follow_up_after_sale"},[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),e("h1",{staticClass:"mui-title"},[t._v("售后跟进")]),e("router-link",{staticClass:"mui-action-back mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),e("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),e("div",{staticClass:"mui-content app"},[e("form",{staticClass:"mui-input-group"},[e("div",{staticClass:"mui-input-row"},[e("label",[t._v("工地各项")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],attrs:{name:""},on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.customer_name=o.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,function(o){return e("option",{domProps:{value:o.customer_name}},[t._v(t._s(o.customer_name))])})],2)]),e("div",{staticClass:"mui-input-row"},[e("label",[t._v("跟进人")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.follow_person,expression:"follow_person"}],attrs:{name:""},on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,function(t){return t.selected}).map(function(t){var o="_value"in t?t._value:t.value;return o});t.follow_person=o.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.profetName,function(o){return e("option",{domProps:{value:o}},[t._v(t._s(o))])})],2)]),e("div",{staticClass:"mui-input-row row-textarea"},[e("label",[t._v("跟进内容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.follow_text,expression:"follow_text"}],attrs:{name:"",rows:"",cols:"",id:"textarea",placeholder:"请输入跟进内容"},domProps:{value:t.follow_text},on:{input:function(o){o.target.composing||(t.follow_text=o.target.value)}}})])]),e("div",{staticClass:"mui-input-row form-btn"},[e("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("保存")])])])],1)},n=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mui-content"},[e("div",{staticClass:"customer"},[e("h2",[t._v("售后跟进")]),e("p",[t._v("/Client follow-up")])])])}],l=e("d183"),a=e.n(l),u={name:"customer_follow_up",data(){return{imgUrl_loading:!1,customer_name:"",follow_person:"",follow_text:"",listName:"",profetName:""}},created(){this.axios.get(a.a.listProjet).then(t=>{this.listName=t.data}),this.axios.get(a.a.AfterPerson).then(t=>{this.profetName=t.data})},methods:{go(){var t=this;if(""==this.Customer_name)return mui.toast("项目名称不能为空"),!1,!1;if(""==this.select_follow_person)return mui.toast("跟进人不能为空"),!1,!1;if(""==this.follow_text)return mui.toast("跟进信息不能为空"),!1,!1;this.imgUrl_loading=!0;var o="?Customer_name="+this.customer_name+"&follow_person="+this.follow_person+"&follow_text="+this.follow_text;this.axios.get(a.a.AfterAdd+o).then(o=>{200===o.status?(this.imgUrl_loading=!1,mui.alert(o.data,function(){t.$router.push("money_sale")})):mui.alert("添加失败")})}}},r=u,s=(e("6dda"),e("2877")),m=Object(s["a"])(r,i,n,!1,null,"36c14ba5",null);o["default"]=m.exports}}]);