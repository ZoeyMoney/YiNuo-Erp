(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b48ffc8c"],{"3a84":function(t,e,i){"use strict";var n=i("d9a8"),a=i.n(n);a.a},d183:function(t,e){const i={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details"};t.exports=i},d9a8:function(t,e,i){},fcd1:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"income_receive"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"income"}}}),i("h1",{staticClass:"mui-title"},[t._v("转为应付")]),i("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),i("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),i("div",{staticClass:"mui-content app"},[i("form",{staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[t._v("类别选择")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_detail_id,expression:"fund_detail_id"}],attrs:{name:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.fund_detail_id=e.target.multiple?i:i[0]},function(e){return t.fund_deId(t.fund_detail_id)}]}},[i("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_fund_name_type,function(e){return i("option",{domProps:{value:e.fund_name_type}},[t._v(t._s(e.fund_name_type))])})],2)]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项名称")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.detailed,expression:"detailed"}],attrs:{name:""},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.detailed=e.target.multiple?i:i[0]},function(e){return t.list_fund_nameas(t.detailed)}]}},[i("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e){return t.cotrProjet?i("option",{domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e){return t.idProjet?i("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?i("div",{staticClass:"mui-input-row"},[i("label",[t._v("款项详细")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.slim,expression:"slim"}],attrs:{name:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.slim=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e){return i("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),t.relevant_people?i("div",{staticClass:"mui-input-row relevant_people"},[i("label",[t._v("相关人")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.nameo,expression:"nameo"}],attrs:{name:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.nameo=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_bank_card_person,function(e){return i("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])})],2)]):t._e(),t.site_projet?i("div",{staticClass:"mui-input-row site_projet"},[i("label",[t._v("工地名称")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{name:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.site=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.projet,function(e){return i("option",{domProps:{value:e.customer_id}},[t._v(t._s(e.customer_name))])})],2)]):t._e(),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("金额")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("备注")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_text,expression:"fund_text"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.fund_text},on:{input:function(e){e.target.composing||(t.fund_text=e.target.value)}}})]),i("div",{staticClass:"mui-input-row input-radio"},[i("div",{staticClass:"mui-input-row mui-left mui-radio"},[i("label",[t._v("阶段付款")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"阶段付款"},domProps:{checked:t._q(t.fund_type,"阶段付款")},on:{click:t.stage_one,change:function(e){t.fund_type="阶段付款"}}})]),i("div",{staticClass:"mui-input-row mui-left mui-radio"},[i("label",[t._v("周期付款")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"周期付款"},domProps:{checked:t._q(t.fund_type,"周期付款")},on:{click:t.week,change:function(e){t.fund_type="周期付款"}}})])]),i("table",{staticClass:"table-all",attrs:{border:"0",id:"table"}},[t._m(1),t._l(t.list,function(e){return i("tr",[i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_date,expression:"item.fund_details_date"}],attrs:{type:"date",id:"fund_details_date"},domProps:{value:e.fund_details_date},on:{input:function(i){i.target.composing||t.$set(e,"fund_details_date",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_money,expression:"item.fund_details_money"}],attrs:{type:"text",id:"fund_details_money",placeholder:"金额"},domProps:{value:e.fund_details_money},on:{input:function(i){i.target.composing||t.$set(e,"fund_details_money",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_batch,expression:"item.fund_details_batch"}],attrs:{type:"text",id:"fund_details_batch",placeholder:"批次"},domProps:{value:e.fund_details_batch},on:{input:function(i){i.target.composing||t.$set(e,"fund_details_batch",i.target.value)}}})]),i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_text,expression:"item.fund_details_text"}],attrs:{type:"text",id:"fund_details_text",placeholder:"备注"},domProps:{value:e.fund_details_text},on:{input:function(i){i.target.composing||t.$set(e,"fund_details_text",i.target.value)}}})])])})],2)]),i("div",{staticClass:"mui-content data-time",attrs:{id:"data-time"}},[i("form",{staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[t._v("还款时间")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data_huan,expression:"data_huan"}],staticClass:"mui-input-clear",attrs:{type:"date",id:"data_huan"},domProps:{value:t.data_huan},on:{input:function(e){e.target.composing||(t.data_huan=e.target.value)}}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("还款周期")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.yue,expression:"yue"}],attrs:{name:"",id:"yue"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.yue=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:""}},[t._v("请选择")]),i("option",{attrs:{value:"按月"}},[t._v("按月")]),i("option",{attrs:{value:"按年"}},[t._v("按年")]),i("option",{attrs:{value:"按周"}},[t._v("按周")])])]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("还款期数")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.qi,expression:"qi"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"qi",placeholder:"请填入期数"},domProps:{value:t.qi},on:{input:function(e){e.target.composing||(t.qi=e.target.value)}}})])])]),i("p",{attrs:{id:"btn-form"},on:{click:t.formAdd}},[t._v("添加新一行")]),i("p",{attrs:{id:"btn-del"},on:{click:function(e){return t.del(t.user)}}},[t._v("删除")]),i("div",{staticClass:"mui-input-row form-btn"},[i("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.add}},[t._v("保存")])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mui-content"},[i("div",{staticClass:"customer"},[i("h2",[t._v("转为应付")]),i("p",[t._v("/income_receive ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("日期")]),i("th",[t._v("金额")]),i("th",[t._v("批次")]),i("th",[t._v("备注")])])}],o=i("d183"),s=i.n(o),u={name:"income_receive",data(){return{imgUrl_loading:!1,user:"",category:!0,cotrProjet:!1,idProjet:!0,site_projet:!0,relevant_people:!0,site:"",listProjet:"",money:"",fund_type:"阶段付款",fund_detail_id:"",detailed:"",id:"",fund_text:"",list_fund_name_type:"",slim:"",data_huan:"",projet:"",yue:"",qi:"",fund_details_id:"",nameo:"",list_fund_names:"",list_fund_name:"",batch_index:1,list:[{fund_details_date:"",fund_details_money:"",fund_details_batch:"1",fund_details_text:""}],list_bank_card_person:[{text:"胡永生"},{text:"邱梅"}]}},created(){var t=location.href,e=t.length,i=t.indexOf("="),n=decodeURI(t.substr(i+1,e-i));this.fund_details_id=n,this.lista=n.split("=");var a=[];for(var o in this.lista){var u=this.lista[o].slice(0);a.push(u)}this.money=a[0],this.axios.get(s.a.list).then(t=>{this.projet=t.data}),this.axios.get(s.a.ClassSelect+"?fund_type=1").then(t=>{this.list_fund_name_type=t.data.fund_name_type},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},methods:{fund_deId(t){this.fund_nameso=t,this.axios.get(s.a.ClassSelect+"?fund_type=1&fund_name_type="+this.fund_nameso).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_detail_id?(this.category=!1,this.site_projet=!1,this.relevant_people=!0):"公司"===this.fund_detail_id&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.relevant_people=!1,this.site_projet=!0)},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},list_fund_nameas(t){this.fund_name=t,this.axios.get(s.a.ClassSelect+"?fund_type=1&fund_name_type="+this.fund_nameso+"&fund_names="+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"现金周转"===this.detailed?(this.site_projet=!1,this.relevant_people=!0):"工程"===this.detailed?(this.relevant_people=!1,this.site_projet=!0):"营业费"===this.detailed&&(this.relevant_people=!0,this.site_projet=!1)},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},stage_one(){var t=document.getElementById("table"),e=document.getElementById("data-time"),i=document.getElementById("btn-form"),n=document.getElementById("btn-del");n.style.display="block",i.style.display="block",t.style.display="block",e.style.display="none"},week(){var t=document.getElementById("table"),e=document.getElementById("data-time"),i=document.getElementById("btn-form"),n=document.getElementById("btn-del");n.style.display="none",t.style.display="none",i.style.display="none",e.style.display="block"},formAdd(){this.batch_index++;var t={fund_details_date:"",fund_details_money:"",fund_details_batch:"1",fund_details_text:""};t.fund_details_batch=this.batch_index,this.list.push(t)},del(t){0===this.list.length?mui.alert("没有可删除的了"):this.list.splice(this.list.indexOf(t),1)},add(){var t=this,e=/^\d+(\.\d+)?$/;if(""==this.fund_nameo)return mui.toast("类别选择不能为空"),!1,!1;if(""==this.list_fund_namea)return mui.toast("类别详情不能为空"),!1,!1;if(""==this.money)return mui.toast("总金额不能为空"),!1,!1;if(!e.test(this.money))return mui.toast("总金额只能填入数字"),!1,!1;if("阶段付款"===this.fund_type){var i=document.getElementById("fund_details_money").value,n=document.getElementById("fund_details_batch").value;if(""==i)return mui.toast("金额不能为空"),!1,!1;if(!e.test(i))return mui.toast("金额只能填入数字"),!1,!1;if(""==n)return mui.toast("批次不能为空"),!1,!1;if(!e.test(n))return mui.toast("批次只能填入数字"),!1,!1;var a=0;for(var o in this.list){var u=this.list[o].fund_details_money;a+=parseInt(u)}if(!(this.money>=a))return mui.toast("金额的和不能大于总金额"),!1,!1;var l=0;for(var o in this.list)l+=parseFloat(this.list[o].fund_details_money);if(this.money!=l)return mui.alert("总金额与阶段金额总和不同"),!1,!1}else if("周期付款"===this.fund_type){var d=document.getElementById("qi").value,r=document.getElementById("yue").value,m=document.getElementById("data_huan").value;if(""==m)return mui.toast("还款时间不能为空"),!1,!1;if(""==r)return mui.toast("还款周期不能为空"),!1,!1;if(""==d)return mui.toast("还款期数不能为空"),!1,!1;if(!e.test(d))return mui.toast("还款期数只能填入数字"),!1,!1}m=new Date(this.data_huan);var c=this.yue,_=this.qi,f=-1*this.money/_,p="";if("周期付款"===this.fund_type)if(this.list=[],"按月"===c)for(var g=1;g<=_;g++){var v=m.getMonth()+1+g;p=m.getFullYear()+"-"+v+"-"+m.getDate();var h={fund_details_date:p,fund_details_money:f.toString(),fund_details_batch:g.toString(),fund_details_text:""};this.list.push(h)}else if("按年"===c)for(g=1;g<=_;g++){var y=m.getFullYear()+g;p=y+"-"+m.getMonth()+"-"+m.getDate();h={fund_details_date:p,fund_details_money:f.toString(),fund_details_batch:g.toString(),fund_details_text:""};this.list.push(h)}else if("按周"===c)for(g=1;g<=_;g++){v=m.getMonth()+1;m.setDate(m.getDate()+7),p=m.getFullYear()+"-"+v+"-"+m.getDate();h={fund_details_date:p,fund_details_money:f.toString(),fund_details_batch:g.toString(),fund_details_text:""};this.list.push(h)}var b="",N="";""===this.id?b+="0":b+=this.id,"个人"===this.fund_detail_id?N+=this.detailed:"公司"===this.fund_detail_id&&(N+=this.slim),this.imgUrl_loading=!0,this.axios({method:"POST",url:s.a.moneyAddFund,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{listFund:JSON.stringify(this.list),fund_customer_id:b,fund_workyard_pact_id:1,fund_debtor:this.nameo,fund_name:N,fund_money:-1*this.money,fund_person:5,fund_text:this.fund_text,fund_type:this.fund_type},transformRequest:[function(t){let e="";for(let i in t)e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i])+"&";return e}]}).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.push({path:"income"})}))})}}},l=u,d=(i("3a84"),i("2877")),r=Object(d["a"])(l,n,a,!1,null,"166a1808",null);e["default"]=r.exports}}]);