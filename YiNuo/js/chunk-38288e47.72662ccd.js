(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38288e47"],{"06d5":function(t,e,o){"use strict";var i=o("6a1d"),n=o.n(i);n.a},"6a1d":function(t,e,o){},b642:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"site_stage"},[o("header",{staticClass:"mui-bar mui-bar-nav"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_management"}}}),o("h1",{staticClass:"mui-title"},[t._v("工地阶段")]),o("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t.imgUrl_loading?o("login-loading"):t._e(),o("div",{staticClass:"mui-content pad"},[[o("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[o("el-tab-pane",{attrs:{label:"洽谈阶段",name:"first"}},[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_A}},[o("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2),o("el-tab-pane",{attrs:{label:"施工阶段",name:"second"}},[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_B}},[o("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2),o("el-tab-pane",{attrs:{label:"回款阶段",name:"third"}},[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_C}},[o("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2),o("el-tab-pane",{attrs:{label:"完成阶段",name:"fourth"}},[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_D}},[o("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2)],1)],t.alerto?o("div",{staticClass:"aleft"},[o("div",{staticClass:"asd"},[o("div",[t._v("详情阶段")]),o("div",[o("i",{staticClass:"el-icon-close",on:{click:t.close}})])]),o("div",{staticClass:"radio"},t._l(t.listRadio,function(e){return o("div",{staticClass:"mui-input-row mui-radio mui-left radio-text"},[o("label",[t._v(t._s(e.text))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],attrs:{name:"radio1",type:"radio"},domProps:{value:e.id,checked:t._q(t.radio,e.id)},on:{change:function(o){t.radio=e.id}}})])}),0),o("div",{staticClass:"mui-input-row mui-radio mui-left button-el"},[o("el-button",{on:{click:t.add}},[t._v("保存")])],1)]):t._e()],2)],1)},n=[],l=o("d183"),a=o.n(l),s={name:"site_stage",data(){return{show:!0,activeName:"first",imgUrl_loading:!1,radio:"",listRadio:[{text:"洽谈阶段",id:"1"},{text:"施工阶段",id:"2"},{text:"回款阶段",id:"3"},{text:"完成阶段",id:"4"}],Aprojet:!0,Bprojet:!0,Cprojet:!0,Dprojet:!0,listProjet_A:[{customer_name:""}],listProjet_B:[{customer_name:""}],listProjet_C:[{customer_name:""}],listProjet_D:[{customer_name:""}],customer_id:"",alerto:!1}},created(){this.imgUrl_loading=!0,this.axios.get(a.a.clientProjet+"?Customer_A=1").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.listProjet_A=t.data)})},methods:{handleClick(t){"0"===t.index?(this.imgUrl_loading=!0,this.axios.get(a.a.clientProjet+"?Customer_A=1").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.listProjet_A=t.data)})):"1"===t.index?(this.imgUrl_loading=!0,this.axios.get(a.a.clientProjet+"?Customer_B=2").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.listProjet_B=t.data)})):"2"===t.index?this.axios.get(a.a.clientProjet+"?Customer_C=3").then(t=>{this.imgUrl_loading=!0,200===t.status&&(this.imgUrl_loading=!1,this.listProjet_C=t.data)}):"3"===t.index&&this.axios.get(a.a.clientProjet+"?Customer_D=4").then(t=>{this.imgUrl_loading=!0,200===t.status&&(this.imgUrl_loading=!1,this.listProjet_D=t.data)})},handleEdit(t,e){this.customer_id=e.customer_id,this.alerto=!0},handleDelete(t,e){var o=this;this.imgUrl_loading=!0,this.customer_id=e.customer_id,mui.confirm("是否删除",function(t){1==t.index?o.axios.get(a.a.clientDelect+"?Customer="+this.customer_id).then(t=>{200===t.status&&(this.imgUrl_loading=!1,mui.alert(t.data,function(){o.$router.go(0)}))}):mui.alert("取消成功")})},close(){this.alerto=!1},add(){var t=this;if(""==this.radio)return mui.toast("阶段不能为空"),!1,!1;this.imgUrl_loading=!0,this.axios.get(a.a.Update_Customer+"?Customer_id="+this.customer_id+"&Customer_name_state="+this.radio).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,function(){t.$router.go(0)}))}),this.alerto=!1}}},r=s,u=(o("06d5"),o("2877")),c=Object(u["a"])(r,i,n,!1,null,"40e29752",null);e["default"]=c.exports},d183:function(t,e){const o={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details",money_search:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money",money_refund:"https://formattingclub.com/YiNuoLogin/fund/money_refund",newUserName:"https://formattingclub.com/YiNuoLogin/User/Add_User",add_customer_person_fund:"https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund"};t.exports=o}}]);