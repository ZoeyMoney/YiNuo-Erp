(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-553ede5b"],{"870d":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"money_profit"},[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_management"},href:"financial_management.html"}}),e("h1",{staticClass:"mui-title"},[t._v("利润统计")]),e("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),e("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),e("div",{staticClass:"mui-content app"},[t._m(1),[e("el-radio",{attrs:{label:"2"},model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[t._v("未完成")]),e("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(o){t.radio=o},expression:"radio"}},[t._v("已完成")])],e("div",{staticClass:"input-x"},[[e("el-table",{staticStyle:{width:"100%",color:"black"},attrs:{data:t.list,height:"77vh"},on:{"row-click":t.projet_modify}},[e("el-table-column",{key:Math.random(),attrs:{fixed:"",prop:"customer_name",label:"工地名称",width:"150","header-cell-style":t.getClass}}),t.list.already_out<=0?e("el-table-column",{key:Math.random(),attrs:{prop:"already_out",label:"支出合计",width:"100"}}):t._e(),e("el-table-column",{attrs:{prop:"already_enter",label:"收入合计",width:"100"}}),e("el-table-column",{attrs:{prop:"",label:"已收合计",width:"100"}}),e("el-table-column",{attrs:{prop:"",label:"已付合计",width:"100"}}),e("el-table-column",{attrs:{prop:"",label:"应付合计",width:"100"}}),e("el-table-column",{attrs:{prop:"pre_profit",label:"预计利润",width:"100"}}),e("el-table-column",{attrs:{prop:"pre_profit_proportion",label:"利润比",width:"100"}})],1)]],2)],2),e("footer",[e("div",[t._v("TOTAL")]),e("div",[t._v("%")]),e("div",[t._v("￥"+t._s(t.moneyNY))])])],1)},n=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mui-content"},[e("div",{staticClass:"customer"},[e("h2",[t._v("利润统计")]),e("p",[t._v("/Customer input")])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"mui-input-row all-input"},[e("label",[t._v("关键字")]),e("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入用户名"}})])}],l=e("d183"),a=e.n(l),r={name:"money_profit",data(){return{imgUrl_loading:!1,moneyNY:"",radio:"2",list:[{customer_name:"",already_out:"",already_enter:"",pre_profit:"",pre_profit_proportion:"",customer_id:""}],siteSlect:{paddingLeft:"10px"},lefProjet:{display:"block",width:"122px",whiteSpace:"nowrap",overflow:"hidden",paddingLeft:"10px"},widCate:{width:"67px",overflow:"hidden",textOverflow:"ellipsis"}}},created(){this.imgUrl_loading=!0,this.axios.get(a.a.moneyProfit).then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.list=t.data.data)})},methods:{getClass({row:t,column:o,rowIndex:e,columnIndex:i}){return 0===e?"background: #F2F2F2 ":""},projet_modify(t){var o={};for(var e in this.list)t.customer_id===this.list[e].customer_id&&(o=this.list[e]);sessionStorage.setItem("listProfit",JSON.stringify(o)),this.$router.push({path:"projet_modify",query:{list:o}})}}},u=r,s=(e("bdcb"),e("2877")),c=Object(s["a"])(u,i,n,!1,null,"2fbc19fe",null);o["default"]=c.exports},"8cb2":function(t,o,e){},bdcb:function(t,o,e){"use strict";var i=e("8cb2"),n=e.n(i);n.a},d183:function(t,o){const e={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details",money_search:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money",money_refund:"https://formattingclub.com/YiNuoLogin/fund/money_refund",newUserName:"https://formattingclub.com/YiNuoLogin/User/Add_User",add_customer_person_fund:"https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund"};t.exports=e}}]);