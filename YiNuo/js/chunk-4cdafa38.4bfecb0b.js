(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cdafa38"],{"09f2":function(t,e,o){},"560b":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"After_sales_statistics"},[o("header",{staticClass:"mui-bar mui-bar-nav"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),o("h1",{staticClass:"mui-title"},[t._v("售后统计")]),o("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),o("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),o("div",{staticClass:"mui-content"},[o("div",{staticClass:"mui-input-row input-top"},[o("label",[t._v("输入关键字")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.customer_name},on:{input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]),o("div",{staticClass:"mui-content label-flex"},[o("div",{staticClass:"mui-row row-flex"},[o("label",[t._v("工地名称")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.stage_name,expression:"stage_name"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.stage_name=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.stageName,function(e){return o("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])]),o("table",{staticClass:"table_all"},[o("tr",[o("th",{style:t.projet},[o("span",[t._v("工地名称")])]),t._m(1),t._m(2),t._m(3),t._m(4)]),t._l(t.list,function(e){return o("tr",{style:t.ostyle,on:{click:function(o){return t.mername(e.customer_id)}}},[o("td",[o("span",[t._v(t._s(e.customer_name))])]),t._m(5,!0),t._m(6,!0),o("td",[o("span",[t._v(t._s(e.stage_name))])]),o("td",["已逾期"===t.time(e.stage_startdate,e.stage_stipulate)?o("span",[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):"未开始"===t.time(e.stage_startdate,e.stage_stipulate)?o("span",[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t.time(e.stage_startdate,e.stage_stipulate)?o("span",[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t._e()])])})],2)]),o("div",{staticClass:"footer"},[t._m(7),o("div",{staticClass:"footer-botton"},[o("p",[t._v("总人数:"),o("em",{style:t.listRad},[t._v(t._s(t.list.length))])]),o("em",[t._v("￥:"+t._s(t.add)+"W")])])])],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mui-content"},[o("div",{staticClass:"customer"},[o("h2",[t._v("售后统计")]),o("p",[t._v("/Customer input")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("span",[t._v("分类")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("span",[t._v("状态")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("span",[t._v("阶段")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("th",[o("span",[t._v("倒计时")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("td",[o("span",[t._v("分类别")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("td",[o("span",[t._v("已过保")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-botton"},[o("p",[t._v("TOTAL")])])}],a=o("d183"),s=o.n(a),l={name:"customer_statistics",data(){return{imgUrl_loading:!1,customer_name:"",customer_stylist:"",stage_name:"",listName:"",stageName:"",list:"",stage_stipulate:"",add:"",listStyle:{color:"blue",fontWeight:"bold"},listRad:{color:"red",fontWeight:"bold"},listBlue:{color:"green",fontWeight:"bold"},projet:{width:"93px",paddingLeft:"10px"},paLift:{paddingLeft:"3px"}}},created(){this.imgUrl_loading=!0,this.axios.get(s.a.AfterStatistics).then(t=>{200===t.status?(this.imgUrl_loading=!1,this.list=t.data):console.log("获取失败");var e=0;for(var o in this.list){e+=this.list[o].customer_budget;var i=e/1e4}this.add=i}),this.axios.get(s.a.AfterListName).then(t=>{this.listName=t.data}),this.axios.get(s.a.AfterStage).then(t=>{this.stageName=t.data}),setInterval(()=>{var t=new Date;this.listtime=t},1e3)},computed:{},methods:{mername(t){this.$router.push({path:"site_details",query:{id:t}})},time:function(t,e){if(null==t)return"未开始";var o=new Date(t);o.setDate(o.getDate()+e);var i=o.getMonth()+1,n=o.getFullYear()+"-"+i+"-"+o.getDate()+"-"+o.getHours()+":"+o.getMinutes()+":"+o.getSeconds(),a=new Date(n),s=new Date,l=a-s;if(l>0)var r=Math.floor(l/1e3/60/60/24),u=Math.floor(l/1e3/60/60%24),c=Math.floor(l/1e3/60%60),m=Math.floor(l/1e3%60),d=r+":"+u+":"+c+":"+m;else d="已逾期";return d}}},r=l,u=(o("fda5"),o("2877")),c=Object(u["a"])(r,i,n,!1,null,"6fc2a28c",null);e["default"]=c.exports},d183:function(t,e){const o={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details",money_search:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money",money_refund:"https://formattingclub.com/YiNuoLogin/fund/money_refund",newUserName:"https://formattingclub.com/YiNuoLogin/User/Add_User",add_customer_person_fund:"https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund"};t.exports=o},fda5:function(t,e,o){"use strict";var i=o("09f2"),n=o.n(i);n.a}}]);