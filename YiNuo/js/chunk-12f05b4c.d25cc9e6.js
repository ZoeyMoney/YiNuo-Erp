(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12f05b4c"],{4093:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"money_entry"},[n("header",{staticClass:"mui-bar mui-bar-nav"},[n("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_receivable"}}}),n("h1",{staticClass:"mui-title"},[t._v("应收款录入")]),n("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),n("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),n("div",{staticClass:"mui-content app"},[n("form",{staticClass:"mui-input-group"},[t.site_various?n("div",{staticClass:"mui-input-row site_projet"},[n("label",[t._v("工地名称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],attrs:{type:"text",placeholder:"请选择"},domProps:{value:t.customer_name},on:{click:t.siteChange,input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]):t._e(),t.relevant_people?n("div",{staticClass:"mui-input-row"},[n("label",[t._v("相关人")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_debtor,expression:"fund_debtor"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入债务人"},domProps:{value:t.fund_debtor},on:{click:t.relecantProsen,input:function(e){e.target.composing||(t.fund_debtor=e.target.value)}}})]):t._e(),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别选择")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_nameo,expression:"fund_nameo"}],attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.fund_nameo=e.target.multiple?n:n[0]},function(e){return t.fund_namesa(t.fund_nameo)}]}},[n("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_fund_name_type,function(e){return n("option",{domProps:{value:e.fund_name_type}},[t._v(t._s(e.fund_name_type))])})],2)]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别名称")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.list_fund_namea,expression:"list_fund_namea"}],attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.list_fund_namea=e.target.multiple?n:n[0]},function(e){return t.list_fund_nameas(t.list_fund_namea)}]}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e){return t.cotrProjet?n("option",{domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e){return t.idProjet?n("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别详情")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.all_rate,expression:"all_rate"}],attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.all_rate=e.target.multiple?n:n[0]},function(e){return t.all_rate_name(t.all_rate)}]}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e){return n("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("总金额")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_money,expression:"fund_money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.fund_money},on:{input:function(e){e.target.composing||(t.fund_money=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("备注")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_text,expression:"fund_text"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"备注"},domProps:{value:t.fund_text},on:{input:function(e){e.target.composing||(t.fund_text=e.target.value)}}})]),n("div",{staticClass:"mui-input-row input-radio"},[n("div",{staticClass:"mui-input-row mui-left mui-radio"},[n("label",[t._v("阶段付款")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"阶段付款"},domProps:{checked:t._q(t.fund_type,"阶段付款")},on:{click:t.stage_one,change:function(e){t.fund_type="阶段付款"}}})]),n("div",{staticClass:"mui-input-row mui-left mui-radio"},[n("label",[t._v("周期付款")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"周期付款"},domProps:{checked:t._q(t.fund_type,"周期付款")},on:{click:t.week,change:function(e){t.fund_type="周期付款"}}})])]),n("table",{staticClass:"table-all",attrs:{border:"0",id:"table"}},[n("tr",[n("th",[t._v("日期")]),n("th",[t._v("批次")]),n("th",{style:t.padLeft},[t._v("金额")]),n("th",[t._v("备注")])]),t._l(t.list,function(e){return n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_date,expression:"item.fund_details_date"}],style:t.paRight,attrs:{type:"date",id:"fund_details_date"},domProps:{value:e.fund_details_date},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_date",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_batch,expression:"item.fund_details_batch"}],attrs:{type:"text",id:"fund_details_batch",placeholder:"批次"},domProps:{value:e.fund_details_batch},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_batch",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_money,expression:"item.fund_details_money"}],style:t.padLeft,attrs:{type:"text",id:"fund_details_money",placeholder:"￥"},domProps:{value:e.fund_details_money},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_money",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_text,expression:"item.fund_details_text"}],attrs:{type:"text",id:"fund_details_text",placeholder:"备注"},domProps:{value:e.fund_details_text},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_text",n.target.value)}}})])])})],2)]),n("div",{staticClass:"mui-content data-time",attrs:{id:"data-time"}},[n("form",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款时间")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data_huan,expression:"data_huan"}],staticClass:"mui-input-clear",attrs:{type:"date",id:"data_huan"},domProps:{value:t.data_huan},on:{input:function(e){e.target.composing||(t.data_huan=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款周期")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.yue,expression:"yue"}],attrs:{name:"",id:"yue"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.yue=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("请选择")]),n("option",{attrs:{value:"按月"}},[t._v("按月")]),n("option",{attrs:{value:"按年"}},[t._v("按年")]),n("option",{attrs:{value:"按周"}},[t._v("按周")])])]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款期数")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qi,expression:"qi"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"qi",placeholder:"请填入期数"},domProps:{value:t.qi},on:{input:function(e){e.target.composing||(t.qi=e.target.value)}}})])])]),n("p",{attrs:{id:"btn-form"},on:{click:t.formAdd}},[t._v("添加新一行")]),n("p",{attrs:{id:"btn-del"},on:{click:function(e){return t.del(t.user)}}},[t._v("删除")]),n("button-save",{nativeOn:{click:function(e){return t.add(e)}}})],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mui-content"},[n("div",{staticClass:"customer"},[n("h2",[t._v("应收款录入")]),n("p",[t._v("/Receivables entry")])])])}],o=n("d183"),s=n.n(o),u={name:"money_entry",data(){return{imgUrl_loading:!1,user:"",all_rate:"",all_id:"",category:!0,relevant_people:!0,cotrProjet:!1,idProjet:!0,site_various:!0,fund_type:"阶段付款",list_fund_name_type:"",fund_nameo:"",fund_debtor:"",fund_debtor_id:"",fund_money:"",list_fund_debtor:[{text:"胡永生"},{text:"邱梅"}],fund_person:"",fund_text:"",list_fund_names:"",list_fund_namea:"",list_fund_name:"",customer_name:"",customer_name_id:"",list_customer_name:"",data_huan:"",fund_name:"",yue:"",qi:"",list:[{fund_details_date:"",fund_details_batch:"1".toString(),fund_details_money:"",fund_details_text:""}],batch_index:1,list_list:[],padLeft:{padding:"0"},paRight:{paddingRight:"0"}}},created(){this.axios.get(s.a.ClassSelect+"?fund_type=1").then(t=>{this.list_fund_name_type=t.data.fund_name_type},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})}),this.customer_name=window.test,this.customer_name_id=window.test_id,this.fund_debtor=window.fund_people,this.fund_debtor_id=window.fund_people_name},methods:{formAdd(){this.batch_index++;var t={fund_details_date:"",fund_details_money:"",fund_details_batch:"1",fund_details_text:""};t.fund_details_batch=this.batch_index.toString(),this.list.push(t)},del(t){0===this.list.length?mui.alert("没有可删除的了"):this.list.splice(this.list.indexOf(t),1)},fund_namesa(t){this.fund_nameso=t,this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_name_type="+this.fund_nameso).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_nameo?(this.category=!1,this.site_various=!1):"公司"===this.fund_nameo&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.site_various=!0)},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},list_fund_nameas(t){this.fund_name=t,this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_name_type="+this.fund_nameso+"&fund_names="+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"外借款"===this.fund_name?(this.site_various=!1,this.relevant_people=!0):"工程"===this.fund_name&&(this.relevant_people=!0,this.site_various=!0)},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},all_rate_name(t){this.all_id=t,this.axios.get(s.a.ClassSelect+"?fund_type=0&fund_name_type="+this.fund_nameso+"&fund_names="+this.fund_name).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name})},stage_one(){var t=document.getElementById("table"),e=document.getElementById("data-time"),n=document.getElementById("btn-form"),i=document.getElementById("btn-del");n.style.display="block",t.style.display="block",i.style.display="block",e.style.display="none"},week(){var t=document.getElementById("table"),e=document.getElementById("data-time"),n=document.getElementById("btn-form"),i=document.getElementById("btn-del");i.style.display="none",t.style.display="none",n.style.display="none",e.style.display="block"},siteChange(){var t="money_entry";this.$router.push({path:"siteList"}),window.expenditure=t},relecantProsen(){var t="money_entry";this.$router.push({path:"relevant_people"}),window.prosen=t},add(){var t=this,e=/^[0-9]*$/,n=/^\d+(\.\d+)?$/;if(""==this.fund_nameo)return mui.toast("类别选择不能为空"),!1,!1;if(""==this.list_fund_namea)return mui.toast("类别详情不能为空"),!1,!1;if(""==this.fund_money)return mui.toast("总金额不能为空"),!1,!1;if(!n.test(this.fund_money))return mui.toast("总金额只能填入数字"),!1,!1;if("阶段付款"===this.fund_type){var i=document.getElementById("fund_details_date").value,a=document.getElementById("fund_details_money").value,o=document.getElementById("fund_details_batch").value;if(""==i)return mui.toast("时间不能为空"),!1,!1;if(""==a)return mui.toast("金额不能为空"),!1,!1;if(!n.test(a))return mui.toast("金额只能填入数字"),!1,!1;if(""==o)return mui.toast("批次不能为空"),!1,!1;if(!e.test(o))return mui.toast("批次只能填入数字"),!1,!1;for(var u in this.list){if(""==this.list[u].fund_details_date)return mui.toast("时间不能为空"),!1,!1;if(""==this.list[u].fund_details_batch)return mui.toast("批次不能为空"),!1,!1;if(!e.test(this.list[u].fund_details_batch))return mui.toast("批次内容只能为数字"),!1,!1;if(""==this.list[u].fund_details_money)return mui.toast("金额不能为空"),!1,!1;if(!n.test(this.list[u].fund_details_money))return mui.toast("金额只能为数字"),!1,!1}var l=0;for(var u in this.list){var d=this.list[u].fund_details_money;l+=parseInt(d)}if(!(this.fund_money>=l))return mui.toast("金额的和不能大于总金额"),!1,!1;var r=0;for(var u in this.list)r+=parseInt(this.list[u].fund_details_money);if(this.fund_money!=r)return mui.toast("总金额与阶段金额总和不同"),!1,!1}else if("周期付款"===this.fund_type){var m=document.getElementById("qi").value,_=document.getElementById("yue").value,c=document.getElementById("data_huan").value;if(""==c)return mui.toast("还款时间不能为空"),!1,!1;if(""==_)return mui.toast("还款周期不能为空"),!1,!1;if(""==m)return mui.toast("还款期数不能为空"),!1,!1;if(!e.test(m))return mui.toast("还款期数只能填入数字"),!1,!1}c=new Date(this.data_huan);var f=this.yue,p=this.qi,h=this.fund_money/p,g="";if("周期付款"===this.fund_type)if(this.list=[],"按月"===f)for(var v=1;v<=p;v++){var y=c.getMonth()+1+v;g=c.getFullYear()+"-"+y+"-"+c.getDate();var b={fund_details_date:g,fund_details_money:h.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(b)}else if("按年"===f)for(v=1;v<=p;v++){var N=c.getFullYear()+v;g=N+"-"+c.getMonth()+"-"+c.getDate();b={fund_details_date:g,fund_details_money:h.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(b)}else if("按周"===f)for(v=1;v<=p;v++){y=c.getMonth()+1;c.setDate(c.getDate()+7),g=c.getFullYear()+"-"+y+"-"+c.getDate();b={fund_details_date:g,fund_details_money:h.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(b)}var C="",S="";"个人"===this.fund_nameo?(C=this.list_fund_namea,S+="0"):"公司"===this.fund_nameo&&(C=this.all_rate,S+=this.customer_name),this.axios({method:"POST",url:s.a.moneyAddFund,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{listFund:JSON.stringify(this.list),fund_customer_id:S,fund_workyard_pact_id:1,fund_name:C,fund_money:this.fund_money,fund_person:this.fund_debtor_id,fund_text:this.fund_text,fund_type:this.fund_type},transformRequest:[function(t){let e="";for(let n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.push({path:"money_receivable"})}))})}}},l=u,d=(n("b21d"),n("2877")),r=Object(d["a"])(l,i,a,!1,null,"0d600147",null);e["default"]=r.exports},"5bfd":function(t,e,n){},b21d:function(t,e,n){"use strict";var i=n("5bfd"),a=n.n(i);a.a},d183:function(t,e){const n={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details"};t.exports=n}}]);