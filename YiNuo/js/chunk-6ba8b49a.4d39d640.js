(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ba8b49a"],{"296e":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"running_details"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"running_money"}}}),i("h1",{staticClass:"mui-title"},[t._v("现金流水详情")]),i("router-link",{staticClass:" mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),i("div",{staticClass:"mui-content"},[i("form",{staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[t._v("户主")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_person}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("开户行")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_bank}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("卡号类型")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_type}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("交易金额")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_deal_money}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("余额")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.balance}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("交易时间")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.dates}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("卡号")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_number}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("项目名称")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.bank_projet}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("期款")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_details_batch}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项类别")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_name_type}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项详情")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_names}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项详细")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_type}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("相关人")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_person}})])]),i("div",{staticClass:"mui-input-row form-btn"},[i("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button"},on:{click:t.dele}},[t._v("删除")])])])])},o=[],n=i("d183"),s=i.n(n),l={name:"running_details",data(){return{fund_details_id:"",list:"",bank_person:"",bank_bank:"",bank_deal_money:"",dates:"",bank_number:"",bank_type:"",bank_projet:"",fund_details_batch:"",fund_name_type:"",fund_names:"",fund_type:"",balance:"",fund_person:"",fund_debtor:""}},created(){var t=location.href,e=t.length,i=t.indexOf("="),a=decodeURI(t.substr(i+1,e-i)),o=/^(\d{4})\d+(\d{4})$/;this.fund_details_id=a,this.list=JSON.parse(localStorage.msg),this.bank_person=this.list.bank_person,this.bank_bank=this.list.bank_bank,0===this.list.bank_deal_money?this.bank_deal_money=this.list.fund_detail_transaction_money:0===this.list.fund_detail_transaction_money&&(this.bank_deal_money=this.list.bank_deal_money),this.dates=this.list.dates,this.bank_number=this.list.bank_number.replace(o,"$1 **** **** $2"),this.bank_projet=this.list.customer_name,this.fund_details_batch=this.list.fund_details_batch,this.bank_type=this.list.bank_type,this.fund_name_type=this.list.fund_name_type,this.fund_names=this.list.fund_names,this.fund_type=this.list.fund_details_text,this.balance=this.list.balance,this.fund_person=this.list.fund_person,this.fund_debtor=this.list.fund_debtor},methods:{dele(){var t=this,e="";this.list.bank_deal_id>0?(e=this.list.bank_deal_id,mui.confirm("是否删除",function(i){1==i.index?t.axios.get(s.a.ringNingDelect+"?bank_detail_id="+e).then(e=>{mui.alert(e.data,function(){t.$router.push({path:"running_money"})})}):mui.alert("取消成功")})):this.list.fund_detail_transaction_id>0&&(e=this.list.fund_detail_transaction_id,mui.confirm("是否删除",function(i){1==i.index?t.axios.get(s.a.ringNingDelect+"?fund_detail_id="+e).then(e=>{mui.alert(e.data,function(){t.$router.push({path:"running_money"})})}):mui.alert("取消成功")}))}}},u=l,d=(i("9c71"),i("2877")),r=Object(d["a"])(u,a,o,!1,null,"0d2133ee",null);e["default"]=r.exports},"9c71":function(t,e,i){"use strict";var a=i("a862"),o=i.n(a);o.a},a862:function(t,e,i){},d183:function(t,e){const i={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details"};t.exports=i}}]);