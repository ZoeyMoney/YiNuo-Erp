(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3079f276"],{2680:function(t,e,i){},"296e":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"running_details"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"running_money"}}}),i("h1",{staticClass:"mui-title"},[t._v("现金流水详情")]),i("router-link",{staticClass:" mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),i("div",{staticClass:"mui-content"},[i("form",{staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[t._v("户主")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_person}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("开户行")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_bank}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("卡号类型")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_type}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("交易金额")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_deal_money}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("余额")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.balance}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("交易时间")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.dates}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("卡号")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_number}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("项目名称")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_projet}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("期款")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_details_batch}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项类别")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_name_type}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项详情")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_names}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项详细")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_name}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("相关人")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_person}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("备注")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.text}})])]),i("div",{staticClass:"mui-input-row form-btn"},[i("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button"},on:{click:t.dele}},[t._v("删除")]),i("button",{directives:[{name:"show",rawName:"v-show",value:t.exit_money,expression:"exit_money"}],staticClass:"mui-btn mui-btn-blue",attrs:{type:"button"},on:{click:t.exitMoney}},[t._v("退款")])])])])},o=[],a=i("d183"),s=i.n(a),l={name:"running_details",data(){return{fund_details_id:"",list:"",bank_person:"",bank_bank:"",bank_deal_money:"",dates:"",bank_number:"",fund_name:"",bank_projet:"",fund_details_batch:"",fund_name_type:"",fund_names:"",fund_type:"",bank_type:"",balance:"",fund_person:"",fund_debtor:"",exit_money:!0,text:""}},created(){var t=location.href,e=t.length,i=t.indexOf("="),n=decodeURI(t.substr(i+1,e-i)),o=/^(\d{4})\d+(\d{4})$/;this.fund_details_id=n,this.list=JSON.parse(localStorage.msg),this.bank_person=this.list.bank_person,this.bank_bank=this.list.bank_bank,0===this.list.bank_deal_money?this.bank_deal_money=this.list.fund_detail_transaction_money:0===this.list.fund_detail_transaction_money&&(this.bank_deal_money=this.list.bank_deal_money),this.dates=this.list.dates,this.bank_number=this.list.bank_number.replace(o,"$1 **** **** $2"),this.bank_projet=this.list.customer_name,this.fund_details_batch=this.list.fund_details_batch,this.fund_name=this.list.fund_name,this.fund_name_type=this.list.fund_name_type,this.fund_names=this.list.fund_names,this.fund_type=this.list.fund_details_text,this.balance=this.list.balance,this.fund_person=this.list.fund_person,this.fund_debtor=this.list.fund_debtor,this.text=this.list.fund_details_text,""!==this.list.fund_name&&void 0!==this.list.fund_name&&"手续费"!==this.list.fund_name||(this.exit_money=!1),""!==this.fund_name_type&&(this.exit_money=!0)},methods:{dele(){var t=this,e="";this.list.bank_deal_id>0?(e=this.list.bank_deal_id,mui.confirm("是否删除",function(i){1==i.index?t.axios.get(s.a.ringNingDelect+"?bank_detail_id="+e).then(e=>{mui.alert(e.data,function(){t.$router.push({path:"running_money"})})}):mui.alert("取消成功")})):this.list.fund_detail_transaction_id>0&&(e=this.list.fund_detail_transaction_id,mui.confirm("是否删除",function(i){1==i.index?t.axios.get(s.a.ringNingDelect+"?fund_detail_id="+e).then(e=>{mui.alert(e.data,function(){t.$router.push({path:"running_money"})})}):mui.alert("取消成功")}))},exitMoney(){this.$router.push({name:"exit_money"})}}},u=l,d=(i("da6c"),i("2877")),r=Object(d["a"])(u,n,o,!1,null,"6d3ab400",null);e["default"]=r.exports},d183:function(t,e){const i={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details",money_search:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money",money_refund:"https://formattingclub.com/YiNuoLogin/fund/money_refund",newUserName:"https://formattingclub.com/YiNuoLogin/User/Add_User",add_customer_person_fund:"https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund"};t.exports=i},da6c:function(t,e,i){"use strict";var n=i("2680"),o=i.n(n);o.a}}]);