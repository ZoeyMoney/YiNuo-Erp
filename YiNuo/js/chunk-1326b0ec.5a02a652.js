(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1326b0ec"],{2253:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"After_sales_entry"},[o("header",{staticClass:"mui-bar mui-bar-nav header-top"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),o("h1",{staticClass:"mui-title"},[t._v("售后录入")]),o("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),o("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),o("div",{staticClass:"mui-content app"},[o("form",{staticClass:"mui-input-group"},[o("div",{staticClass:"mui-input-row"},[o("label",[t._v("工地各项")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.Customer_name,expression:"Customer_name"}],attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.Customer_name=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.projet,function(e){return o("option",{domProps:{value:e.customer_name}},[t._v(t._s(e.customer_name))])})],2)]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("联系人")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_linkman,expression:"Customer_linkman"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系人"},domProps:{value:t.Customer_linkman},on:{input:function(e){e.target.composing||(t.Customer_linkman=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("联系方式")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_connect,expression:"Customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.Customer_connect},on:{input:function(e){e.target.composing||(t.Customer_connect=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("责任人")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.Customer_stylist,expression:"Customer_stylist"}],attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.Customer_stylist=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.SelectStylist,function(e){return o("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("甲方预算")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_DecorateJia,expression:"Customer_DecorateJia"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入预算金额"},domProps:{value:t.Customer_DecorateJia},on:{input:function(e){e.target.composing||(t.Customer_DecorateJia=e.target.value)}}}),o("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_DecorateJia)))])]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("乙方预算")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_DecorateYi,expression:"Customer_DecorateYi"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入预算金额"},domProps:{value:t.Customer_DecorateYi},on:{input:function(e){e.target.composing||(t.Customer_DecorateYi=e.target.value)}}}),o("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_DecorateYi)))])]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("项目时间")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_Date,expression:"Customer_Date"}],staticClass:"mui-input-clear",attrs:{type:"date"},domProps:{value:t.Customer_Date},on:{input:function(e){e.target.composing||(t.Customer_Date=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("报修时间")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_baoxiushijian,expression:"Customer_baoxiushijian"}],staticClass:"mui-input-clear",attrs:{type:"date"},domProps:{value:t.Customer_baoxiushijian},on:{input:function(e){e.target.composing||(t.Customer_baoxiushijian=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("预计完成")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_yujiwanchengshijian,expression:"Customer_yujiwanchengshijian"}],staticClass:"mui-input-clear",attrs:{type:"date"},domProps:{value:t.Customer_yujiwanchengshijian},on:{input:function(e){e.target.composing||(t.Customer_yujiwanchengshijian=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("保质期")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_baozhiqi,expression:"Customer_baozhiqi"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入保质期"},domProps:{value:t.Customer_baozhiqi},on:{input:function(e){e.target.composing||(t.Customer_baozhiqi=e.target.value)}}})]),o("div",{staticClass:"mui-input-row radio-form"},[o("div",{staticClass:"mui-input-row mui-radio mui-left go-label"},[o("label",[t._v("所属类型")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_type,expression:"Customer_type"}],staticClass:"mui-input-clear",attrs:{type:"text",name:"Customer_type",id:"Customer_type",placeholder:"所属类型"},domProps:{value:t.Customer_type},on:{input:function(e){e.target.composing||(t.Customer_type=e.target.value)}}})]),t._l(t.Customer_formList,function(e,i){return o("div",{staticClass:"mui-input-row mui-radio mui-left mui-chech"},[o("label",[t._v(t._s(e.value))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_form,expression:"Customer_form"}],attrs:{name:"Customer_form",type:"radio"},domProps:{value:e.value,checked:t._q(t.Customer_form,e.value)},on:{change:function(o){t.Customer_form=e.value}}})])})],2),o("div",{staticClass:"mui-input-row form-textarea row-textarea"},[o("label",[t._v("客户需求")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Customer_demand,expression:"Customer_demand"}],attrs:{name:"Customer_demand",rows:"",cols:"",id:"Customer_demand",placeholder:"请填写需求"},domProps:{value:t.Customer_demand},on:{input:function(e){e.target.composing||(t.Customer_demand=e.target.value)}}})])]),o("div",{staticClass:"mui-input-row form-btn"},[o("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("保存")])])])],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customer"},[o("h2",[t._v("售后录入")]),o("p",[t._v("/Customer input")])])}],a=o("d183"),r=o.n(a),u={name:"After_sales_entry",data(){return{imgUrl_loading:!1,Customer_name:"",projet:"",SelectStylist:"",Customer_linkman:"",Customer_connect:"",Customer_stylist:"",Customer_type:"",Customer_DecorateJia:"",Customer_DecorateYi:"",Customer_baozhiqi:"",Customer_Date:"",Customer_baoxiushijian:"",Customer_yujiwanchengshijian:"",Customer_form:"工装",Customer_formList:[{value:"家装"},{value:"工装"}],Customer_demand:""}},created(){this.axios.get(r.a.listProjet).then(t=>{this.projet=t.data}),this.axios.get(r.a.AfterListName).then(t=>{this.SelectStylist=t.data})},methods:{go(){var t=this,e=/^1[0-9]{10}$/,o=/^[\u4E00-\u9FA5]{2,4}$/,i=/^[0-9]*$/;if(""==this.Customer_name)return mui.toast("项目名称不能为空"),!1,!1;if(""==this.Customer_linkman)return mui.toast("联系人不能为空"),!1,!1;if(!o.test(this.Customer_linkman))return mui.toast("联系人格式不正确"),!1,!1;if(""==this.Customer_connect)return mui.toast("联系方式不能为空"),!1,!1;if(!e.test(this.Customer_connect))return mui.toast("联系方式格式不正确"),!1,!1;if(""==this.Customer_stylist)return mui.toast("责任人不能为空"),!1,!1;if(""==this.Customer_DecorateJia||""==this.Customer_DecorateYi)return mui.toast("甲方或乙方不能为空"),!1,!1;if(!i.test(this.Customer_DecorateJia)||!i.test(this.Customer_DecorateYi))return mui.toast("甲方或乙方格式不正确"),!1,!1;if(""==this.Customer_Date)return mui.toast("项目时间不能为空"),!1,!1;if(""==this.Customer_baoxiushijian)return mui.toast("报修时间不能为空"),!1,!1;if(""==this.Customer_yujiwanchengshijian)return mui.toast("预计完成时间不能为空"),!1,!1;if(""==this.Customer_baozhiqi)return mui.toast("保质期不能为空"),!1,!1;this.imgUrl_loading=!0;var s="?Customer_name="+this.Customer_name+"&Customer_linkman="+this.Customer_linkman+"&Customer_connect="+this.Customer_connect+"&Customer_stylist="+this.Customer_stylist+"&Customer_form="+this.Customer_form+"&Customer_type="+this.Customer_type+"&Customer_demand="+this.Customer_demand+"&Customer_DecorateJia="+this.Customer_DecorateJia+"&Customer_DecorateYi="+this.Customer_DecorateYi+"&Customer_baozhiqi="+this.Customer_baozhiqi+"&Customer_Date="+this.Customer_Date+"&Customer_baoxiushijian="+this.Customer_baoxiushijian+"&Customer_yujiwanchengshijian="+this.Customer_yujiwanchengshijian;this.axios.post(r.a.AfterSaleAdd+s).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.push("money_sale")}))})}}},n=u,m=(o("5fcb"),o("2877")),l=Object(m["a"])(n,i,s,!1,null,"37b2b55e",null);e["default"]=l.exports},"5fcb":function(t,e,o){"use strict";var i=o("7b05"),s=o.n(i);s.a},"7b05":function(t,e,o){},d183:function(t,e){const o={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person"};t.exports=o}}]);