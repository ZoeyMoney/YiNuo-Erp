(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f1df285"],{"0d0d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"income"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"cash_flow"}}}),a("h1",{staticClass:"mui-title"},[t._v("收入")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("类别选择")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_detail_id,expression:"fund_detail_id"}],attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.fund_detail_id=e.target.multiple?a:a[0]},function(e){return t.fund_deId(t.fund_detail_id)}]}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_fund_name_type,function(e){return a("option",{domProps:{value:e.fund_name_type}},[t._v(t._s(e.fund_name_type))])})],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.detailed,expression:"detailed"}],attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.detailed=e.target.multiple?a:a[0]},function(e){return t.list_fund_nameas(t.detailed)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e){return t.cotrProjet?a("option",{domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e){return t.idProjet?a("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项详细")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.slim,expression:"slim"}],attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.slim=e.target.multiple?a:a[0]},function(e){return t.list_fund_namea(t.slim)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e){return a("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),t.relevant_people?a("div",{staticClass:"mui-input-row relevant_people"},[a("label",[t._v("相关人")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.listRelevant,expression:"listRelevant"}],attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.listRelevant=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_bank_card_person,function(e){return a("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])})],2)]):t._e(),t.site_projet?a("div",{staticClass:"mui-input-row site_projet"},[a("label",[t._v("工地名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.site=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.listProjet,function(e){return a("option",{domProps:{value:e.customer_id}},[t._v(t._s(e.customer_name))])})],2)]):t._e(),a("data-value",{model:{value:t.dataValue1,callback:function(e){t.dataValue1=e},expression:"dataValue1"}}),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("备注")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clearBei,expression:"clearBei"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.clearBei},on:{input:function(e){e.target.composing||(t.clearBei=e.target.value)}}})]),a("div",{staticClass:"mui-input-row row-label"},[a("label",[t._v("转入账户")]),a("label",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_id,expression:"bank_id"}],attrs:{name:"",id:"card"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.bank_id=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:"selected"}},[t._v("请选择")]),t._l(t.bank_card,function(e){return a("option",{domProps:{value:e.bank_id}},[a("div",[t._v(t._s(e.bank_bank))]),a("div",[t._v(t._s(e.bank_person))]),a("div",[t._v("￥"+t._s(e.bank_money))])])})],2)])]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("手续费")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.money_rate,expression:"money_rate"}],attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.money_rate=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_money_rate,function(e){return a("option",{domProps:{value:e.text}},[t._v(t._s(e.text)+"%")])})],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("实际收入")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money_actual,expression:"money_actual"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money_actual},on:{input:function(e){e.target.composing||(t.money_actual=e.target.value)}}})])],1),a("div",{staticClass:"mui-input-row mui-checkbox mui-left checkbox"},[a("label",[t._v("转为应付")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],attrs:{name:"checkbox1",value:"转为应付",type:"checkbox"},domProps:{checked:Array.isArray(t.checkbox)?t._i(t.checkbox,"转为应付")>-1:t.checkbox},on:{change:function(e){var a=t.checkbox,n=e.target,i=!!n.checked;if(Array.isArray(a)){var o="转为应付",s=t._i(a,o);n.checked?s<0&&(t.checkbox=a.concat([o])):s>-1&&(t.checkbox=a.slice(0,s).concat(a.slice(s+1)))}else t.checkbox=i}}})]),a("div",{staticClass:"mui-input-row form-btn"},[a("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.add}},[t._v("Transfers")])]),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"saving"},[t._v("储蓄卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.chuXuKa))])]),a("table",{staticClass:"all-saving",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(1),t._l(t.chuXu,function(e){return a("tr",[a("td",[t._v(t._s(e.bank_bank))]),a("td",[t._v(t._s(e.bank_person))]),a("td",[t._v(t._s(e.bank_number))]),a("td",[t._v("￥"+t._s(e.bank_money))])])})],2),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"saving"},[t._v("信用卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.XinYongKa))])]),a("table",{staticClass:"blaner",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(2),t._l(t.xinY,function(e){return a("tr",[a("td",[t._v(t._s(e.bank_bank))]),a("td",[t._v(t._s(e.bank_person))]),a("td",[t._v(t._s(e.bank_number))]),a("td",[t._v("￥"+t._s(e.bank_money))]),a("td",[t._v("￥"+t._s(e.bank_limit))])])})],2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[a("div",{staticClass:"customer"},[a("h2",[t._v("收入")]),a("p",[t._v("/Income")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticStyle:{width:"21%"}},[t._v("开户行")]),a("td",{staticStyle:{width:"15%"}},[t._v("户主")]),a("td",{staticStyle:{width:"15%"}},[t._v("尾号")]),a("td",[t._v("余额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticStyle:{width:"22%"}},[t._v("开户行")]),a("td",{staticStyle:{width:"14%"}},[t._v("户主")]),a("td",{staticStyle:{width:"17%"}},[t._v("尾号")]),a("td",[t._v("余额")]),a("td",[t._v("额度")])])}],o=a("d183"),s=a.n(o),l={name:"income",data(){return{category:!0,cotrProjet:!1,idProjet:!0,relevant_people:!0,site_projet:!0,dataValue1:(new Date).toString(),bank_id:0,list_fund_name_type:[],detailed:"",list_fund_names:[],slim:"",list_fund_name:[],listRelevant:"",list_bank_card_person:[{text:"胡永生"},{text:"邱梅"}],site:"",money:"",money_rate:"",list_money_rate:[{text:.6},{text:.55},{text:.38}],money_get:"",account:"",clearBei:"",checkbox:"",fund_detail_id:"",bank_card:"",chuXu:"",xinY:"",chuXuKa:"",XinYongKa:"",listProjet:"",list_fund_names:"",list_fund_name:""}},created(){this.axios.get(s.a.list).then(t=>{this.listProjet=t.data}),this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_stale=1").then(t=>{this.list_fund_name_type=t.data.fund_name_type},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})}),this.axios.get(s.a.bankCard).then(t=>{this.bank_card=t.data;var e=[],a=[],n=0,i=0;for(var o in t.data)if("储蓄卡"===t.data[o].bank_type){var s=t.data[o].bank_number.slice(15,19);n+=t.data[o].bank_money,t.data[o].bank_number=s,e.push(t.data[o])}else if("信用卡"===t.data[o].bank_type){s=t.data[o].bank_number.slice(12,16);i+=t.data[o].bank_money,t.data[o].bank_number=s,a.push(t.data[o])}this.chuXu=e,this.xinY=a,this.chuXuKa=n,this.XinYongKa=i},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},computed:{money_actual:{get:function(){var t=this.money-this.money*this.money_rate/100,e=Math.floor(100*t)/100;return this.money_get=e,e},set:function(t){this.money_get=t}}},methods:{fund_deId(t){this.fund_nameso=t,this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_detail_id?(this.category=!1,this.site_projet=!1,this.relevant_people=!0):"公司"===this.fund_detail_id&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.relevant_people=!1,this.site_projet=!0)},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},list_fund_nameas(t){this.fund_name=t,this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso+"&fund_names="+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"外借款"===this.detailed?(this.site_projet=!1,this.relevant_people=!0):"工程"===this.detailed&&(this.relevant_people=!1,this.site_projet=!0)},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},list_fund_namea(t){this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso+"&fund_names="+this.fund_name+"&fund_name"+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},add(){var t=this,e=/^[0-9]*$/,a="?";if(""==this.fund_detail_id)return mui.toast("类别选择不能为空"),!1,!1;if("个人"===this.fund_detail_id?a+="fund_name="+this.detailed+"&fund_debtor="+this.listRelevant:"公司"===this.fund_detail_id&&(a+="fund_name="+this.slim+"&customer_id="+this.site),""==this.money)return mui.toast("金额不能为空"),!1,!1;if(!e.test(this.money))return mui.toast("金额只能为纯数字"),!1,!1;if(""==this.bank_id)return mui.toast("转入账户不能为空"),!1,!1;for(var n in this.chuXu)if(parseInt(this.chuXu[n].bank_id)===this.bank_id){if(parseInt(this.chuXu[n].bank_money)<parseInt(this.money_actual))return mui.toast("卡内余额不能大于交易余额"),!1,!1}else if(parseFloat(this.money_actual)>parseFloat(this.chuXu[n].bank_id))return mui.toast("实际转账不能大于信用卡额度"),!1,!1;var i=new Date(this.dataValue1),o=i.getFullYear(),l=i.getMonth()+1,u=i.getDate(),r=i.getHours(),c=i.getMinutes(),d=i.getSeconds(),m=`${o}-${l}-${u} ${r}:${c}:${d}`;a+="&money="+this.money+"&fund_text="+this.clearBei+"&bank_id="+this.bank_id+"&shiji_money="+this.money_get+"&date="+m,!0===this.checkbox?this.axios.post(s.a.moneyOutEnter+a).then(e=>{for(var a in this.listProjet)this.listProjet[a].customer_id===this.site&&this.listProjet[a].customer_name;mui.alert(e.data.data,function(){t.$router.push({name:"income_receive",query:{money:t.money_get}})})}):this.axios.post(s.a.moneyOutEnter+a).then(e=>{"录入成功"===e.data.data&&mui.alert("录入成功",function(){t.$router.go(0)})})}}},u=l,r=(a("edcb"),a("2877")),c=Object(r["a"])(u,n,i,!1,null,"115f5d03",null);e["default"]=c.exports},d183:function(t,e){const a={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing"};t.exports=a},dd8e:function(t,e,a){},edcb:function(t,e,a){"use strict";var n=a("dd8e"),i=a.n(n);i.a}}]);