(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51926160"],{4093:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"money_entry"},[n("header",{staticClass:"mui-bar mui-bar-nav"},[n("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_receivable"}}}),n("h1",{staticClass:"mui-title"},[t._v("应收款录入")]),n("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),n("div",{staticClass:"mui-content app"},[n("form",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别选择")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_nameo,expression:"fund_nameo"}],attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.fund_nameo=e.target.multiple?n:n[0]},function(e){return t.fund_namesa(t.fund_nameo)}]}},[n("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_fund_name_type,function(e){return n("option",{domProps:{value:e.fund_name_type}},[t._v(t._s(e.fund_name_type))])})],2)]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别名称")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.list_fund_namea,expression:"list_fund_namea"}],attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.list_fund_namea=e.target.multiple?n:n[0]},function(e){return t.list_fund_nameas(t.list_fund_namea)}]}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e){return t.cotrProjet?n("option",{domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e){return t.idProjet?n("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别详情")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.all_rate,expression:"all_rate"}],attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.all_rate=e.target.multiple?n:n[0]},function(e){return t.all_rate_name(t.all_rate)}]}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e){return n("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),t.site_various?n("div",{staticClass:"mui-input-row"},[n("label",[t._v("工地各项")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],attrs:{name:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.customer_name=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.projet,function(e){return n("option",{domProps:{value:e.customer_name}},[t._v(t._s(e.customer_name))])})],2)]):t._e(),n("div",{ref:"no",staticClass:"mui-input-row"},[n("label",[t._v("债务人")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_debtor,expression:"fund_debtor"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入债务人"},domProps:{value:t.fund_debtor},on:{input:function(e){e.target.composing||(t.fund_debtor=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("总金额")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_money,expression:"fund_money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入总金额"},domProps:{value:t.fund_money},on:{input:function(e){e.target.composing||(t.fund_money=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("公司人员")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_person,expression:"fund_person"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入经手人"},domProps:{value:t.fund_person},on:{input:function(e){e.target.composing||(t.fund_person=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("备注")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_text,expression:"fund_text"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"备注"},domProps:{value:t.fund_text},on:{input:function(e){e.target.composing||(t.fund_text=e.target.value)}}})]),n("div",{staticClass:"mui-input-row input-radio"},[n("div",{staticClass:"mui-input-row mui-left mui-radio"},[n("label",[t._v("阶段付款")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"阶段付款"},domProps:{checked:t._q(t.fund_type,"阶段付款")},on:{click:t.stage_one,change:function(e){t.fund_type="阶段付款"}}})]),n("div",{staticClass:"mui-input-row mui-left mui-radio"},[n("label",[t._v("周期付款")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"周期付款"},domProps:{checked:t._q(t.fund_type,"周期付款")},on:{click:t.week,change:function(e){t.fund_type="周期付款"}}})])]),n("table",{staticClass:"table-all",attrs:{border:"0",id:"table"}},[n("tr",[n("th",[t._v("日期")]),n("th",[t._v("批次")]),n("th",{style:t.padLeft},[t._v("金额")]),n("th",[t._v("备注")])]),t._l(t.list,function(e){return n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_date,expression:"item.fund_details_date"}],style:t.paRight,attrs:{type:"date",id:"fund_details_date"},domProps:{value:e.fund_details_date},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_date",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_batch,expression:"item.fund_details_batch"}],attrs:{type:"text",id:"fund_details_batch",placeholder:"批次"},domProps:{value:e.fund_details_batch},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_batch",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_money,expression:"item.fund_details_money"}],style:t.padLeft,attrs:{type:"text",id:"fund_details_money",placeholder:"金额"},domProps:{value:e.fund_details_money},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_money",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_text,expression:"item.fund_details_text"}],attrs:{type:"text",id:"fund_details_text",placeholder:"备注"},domProps:{value:e.fund_details_text},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_text",n.target.value)}}})])])})],2)]),n("div",{staticClass:"mui-content data-time",attrs:{id:"data-time"}},[n("form",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款时间")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data_huan,expression:"data_huan"}],staticClass:"mui-input-clear",attrs:{type:"date",id:"data_huan"},domProps:{value:t.data_huan},on:{input:function(e){e.target.composing||(t.data_huan=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款周期")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.yue,expression:"yue"}],attrs:{name:"",id:"yue"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.yue=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("请选择")]),n("option",{attrs:{value:"按月"}},[t._v("按月")]),n("option",{attrs:{value:"按年"}},[t._v("按年")]),n("option",{attrs:{value:"按周"}},[t._v("按周")])])]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款期数")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qi,expression:"qi"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"qi",placeholder:"请填入期数"},domProps:{value:t.qi},on:{input:function(e){e.target.composing||(t.qi=e.target.value)}}})])])]),n("p",{attrs:{id:"btn-form"},on:{click:t.formAdd}},[t._v("添加新一行")]),n("p",{attrs:{id:"btn-del"},on:{click:function(e){return t.del(t.user)}}},[t._v("删除")]),n("div",{staticClass:"mui-input-row form-btn"},[n("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.add}},[t._v("保存")])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mui-content"},[n("div",{staticClass:"customer"},[n("h2",[t._v("应收款录入")]),n("p",[t._v("/Receivables entry")])])])}],u=(n("6b54"),{name:"money_entry",data:function(){return{user:"",all_rate:"",all_id:"",category:!0,cotrProjet:!1,idProjet:!0,site_various:!0,fund_type:"阶段付款",list_fund_name_type:"",fund_nameo:"",fund_debtor:"",fund_money:"",fund_person:"",fund_text:"",list_fund_names:"",list_fund_namea:"",list_fund_name:"",customer_name:"",list_customer_name:"",data_huan:"",projet:"",fund_name:"",yue:"",qi:"",list:[{fund_details_date:"",fund_details_batch:"1",fund_details_money:"",fund_details_text:""}],batch_index:1,list_list:[],padLeft:{padding:"0"},paRight:{paddingRight:"0"}}},computed:{},created:function(){var t=this;this.axios.get("https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer").then(function(e){t.projet=e.data}),this.axios.get("https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=1").then(function(e){t.list_fund_name_type=e.data.fund_name_type},function(e){var n=t;mui.alert("您无权访问",function(){n.$router.push({name:"index"})})})},methods:{formAdd:function(){this.batch_index++;var t={fund_details_date:"",fund_details_money:"",fund_details_batch:"1",fund_details_text:""};t.fund_details_batch=this.batch_index,this.list.push(t)},del:function(t){0===this.list.length?mui.alert("没有可删除的了"):this.list.splice(this.list.indexOf(t),1)},fund_namesa:function(t){var e=this;this.fund_nameso=t,this.axios.get("https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_name_type="+this.fund_nameso).then(function(t){e.list_fund_name_type=t.data.fund_name_type,e.list_fund_names=t.data.fund_names,e.list_fund_name=t.data.fund_name,"个人"===e.fund_nameo?(e.category=!1,e.site_various=!1):"公司"===e.fund_nameo&&(e.category=!0,e.cotrProjet=!0,e.idProjet=!1,e.site_various=!0)},function(t){var n=e;mui.alert("您无权访问",function(){n.$router.push({name:"index"})})})},list_fund_nameas:function(t){var e=this;this.fund_name=t,this.axios.get("https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_name_type="+this.fund_nameso+"&fund_names="+t).then(function(t){e.list_fund_name_type=t.data.fund_name_type,e.list_fund_names=t.data.fund_names,e.list_fund_name=t.data.fund_name},function(t){var n=e;mui.alert("您无权访问",function(){n.$router.push({name:"index"})})})},all_rate_name:function(t){var e=this;this.all_id=t,this.axios.get("https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name?fund_type=0&fund_name_type="+this.fund_nameso+"&fund_names="+this.fund_name).then(function(t){e.list_fund_name_type=t.data.fund_name_type,e.list_fund_names=t.data.fund_names,e.list_fund_name=t.data.fund_name})},stage_one:function(){var t=document.getElementById("table"),e=document.getElementById("data-time"),n=document.getElementById("btn-form"),a=document.getElementById("btn-del");n.style.display="block",t.style.display="block",a.style.display="block",e.style.display="none"},week:function(){var t=document.getElementById("table"),e=document.getElementById("data-time"),n=document.getElementById("btn-form"),a=document.getElementById("btn-del");a.style.display="none",t.style.display="none",n.style.display="none",e.style.display="block"},add:function(){var t=this,e=/^[0-9]*$/,n=/^[\u4E00-\u9FA5]{2,4}$/;if(""==this.fund_nameo)return mui.toast("类别选择不能为空"),!1,!1;if(""==this.list_fund_namea)return mui.toast("类别详情不能为空"),!1,!1;if("block"===this.$refs["no"].style.display&&!n.test(this.fund_debtor))return mui.toast("债权人名称格式错误"),!1,!1;if(""==this.fund_money)return mui.toast("总金额不能为空"),!1,!1;if(!e.test(this.fund_money))return mui.toast("总金额只能填入数字"),!1,!1;if(""==this.fund_person)return mui.toast("经手人不能为空"),!1,!1;if(!n.test(this.fund_person))return mui.toast("经手人格式错误"),!1,!1;if("阶段付款"===this.fund_type){var a=document.getElementById("fund_details_money").value,i=document.getElementById("fund_details_batch").value;if(""==a)return mui.toast("金额不能为空"),!1,!1;if(!e.test(a))return mui.toast("金额只能填入数字"),!1,!1;if(""==i)return mui.toast("批次不能为空"),!1,!1;if(!e.test(i))return mui.toast("批次只能填入数字"),!1,!1;var u=0;for(var s in this.list){var d=this.list[s].fund_details_money;u+=parseInt(d)}if(!(this.fund_money>=u))return mui.toast("金额的和不能大于总金额"),!1,!1;var o=0;for(var s in this.list)o+=parseInt(this.list[s].fund_details_money);if(this.fund_money!=o)return mui.alert("总金额与阶段金额总和不同"),!1,!1}else if("周期付款"===this.fund_type){var l=document.getElementById("qi").value,r=document.getElementById("yue").value,_=document.getElementById("data_huan").value;if(""==_)return mui.toast("还款时间不能为空"),!1,!1;if(""==r)return mui.toast("还款周期不能为空"),!1,!1;if(""==l)return mui.toast("还款期数不能为空"),!1,!1;if(!e.test(l))return mui.toast("还款期数只能填入数字"),!1,!1}_=new Date(this.data_huan);var m=this.yue,f=this.qi,c=this.fund_money/f,p="";if("周期付款"===this.fund_type)if(this.list=[],"按月"===m)for(var v=1;v<=f;v++){var h=_.getMonth()+1+v;p=_.getFullYear()+"-"+h+"-"+_.getDate();var y={fund_details_date:p,fund_details_money:c.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(y)}else if("按年"===m)for(v=1;v<=f;v++){var g=_.getFullYear()+v;p=g+"-"+_.getMonth()+"-"+_.getDate();y={fund_details_date:p,fund_details_money:c.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(y)}else if("按周"===m)for(v=1;v<=f;v++){h=_.getMonth()+1;_.setDate(_.getDate()+7),p=_.getFullYear()+"-"+h+"-"+_.getDate();y={fund_details_date:p,fund_details_money:c.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(y)}var b="",x="";"个人"===this.fund_nameo?(b=this.list_fund_namea,x+="0"):"公司"===this.fund_nameo&&(b=this.all_rate,x+=this.customer_name),this.axios({method:"POST",url:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{listFund:JSON.stringify(this.list),fund_customer_id:x,fund_workyard_pact_id:1,fund_debtor:this.fund_debtor,fund_name:b,fund_money:this.fund_money,fund_person:this.fund_person,fund_text:this.fund_text,fund_type:this.fund_type},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(function(e){mui.alert(e.data,function(){t.$router.push({path:"money_receivable"})})})}}}),s=u,d=(n("d1c8"),n("2877")),o=Object(d["a"])(s,a,i,!1,null,"503346eb",null);e["default"]=o.exports},"6d0a":function(t,e,n){},d1c8:function(t,e,n){"use strict";var a=n("6d0a"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-51926160.856f68b2.js.map