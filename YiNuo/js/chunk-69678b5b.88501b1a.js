(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69678b5b"],{"3be7":function(t,e,n){"use strict";var a=n("635d"),i=n.n(a);i.a},"635d":function(t,e,n){},"9d6d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"expenditure_receive"},[n("header",{staticClass:"mui-bar mui-bar-nav"},[n("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"expenditure"}}}),n("h1",{staticClass:"mui-title"},[t._v("转为应收")]),n("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),n("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),n("div",{staticClass:"mui-content app"},[n("form",{staticClass:"mui-input-group"},[t.site_various?n("div",{staticClass:"mui-input-row site_projet"},[n("label",[t._v("工地名称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],attrs:{type:"text",placeholder:"请选择"},domProps:{value:t.customer_name},on:{click:t.siteChange,input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]):t._e(),t.relevant_people?n("div",{staticClass:"mui-input-row"},[n("label",[t._v("相关人")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_debtor,expression:"fund_debtor"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入债务人"},domProps:{value:t.fund_debtor},on:{click:t.relecantProsen,input:function(e){e.target.composing||(t.fund_debtor=e.target.value)}}})]):t._e(),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别选择")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_nameo,expression:"fund_nameo"}],class:{select:""===t.fund_nameo,selectBlack:""!==t.fund_nameo},attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.fund_nameo=e.target.multiple?n:n[0]},function(e){return t.fund_namesa(t.fund_nameo)}]}},[n("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_fund_name_type,function(e){return n("option",{domProps:{value:e.fund_name_type}},[t._v(t._s(e.fund_name_type))])})],2)]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别名称")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.list_fund_namea,expression:"list_fund_namea"}],class:{select:""===t.list_fund_namea,selectBlack:""!==t.list_fund_namea},attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.list_fund_namea=e.target.multiple?n:n[0]},function(e){return t.list_fund_nameas(t.list_fund_namea)}]}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e){return t.cotrProjet?n("option",{domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e){return t.idProjet?n("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?n("div",{staticClass:"mui-input-row"},[n("label",[t._v("类别详情")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.all_rate,expression:"all_rate"}],class:{select:""===t.all_rate,selectBlack:""!==t.all_rate},attrs:{name:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.all_rate=e.target.multiple?n:n[0]},function(e){return t.all_rate_name(t.all_rate)}]}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e){return n("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("级别")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],class:{select:""===t.level,selectBlack:""!==t.level},attrs:{name:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.level=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_lev,function(e){return n("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])})],2)]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("情况")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.whether,expression:"whether"}],class:{select:""===t.whether,selectBlack:""!==t.whether},attrs:{name:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.whether=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_whether,function(e){return n("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])})],2)]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("总金额")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_money,expression:"fund_money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.fund_money},on:{input:function(e){e.target.composing||(t.fund_money=e.target.value)}}})]),n("div",{staticClass:"mui-input-row input-radio"},[n("div",{staticClass:"mui-input-row mui-left mui-radio"},[n("label",[t._v("阶段付款")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"阶段付款"},domProps:{checked:t._q(t.fund_type,"阶段付款")},on:{click:t.stage_one,change:function(e){t.fund_type="阶段付款"}}})]),n("div",{staticClass:"mui-input-row mui-left mui-radio"},[n("label",[t._v("周期付款")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_type,expression:"fund_type"}],attrs:{type:"radio",value:"周期付款"},domProps:{checked:t._q(t.fund_type,"周期付款")},on:{click:t.week,change:function(e){t.fund_type="周期付款"}}})])]),n("table",{staticClass:"table-all",attrs:{border:"0",id:"table"}},[n("tr",[n("th",[t._v("预收日期")]),n("th",[t._v("批次")]),n("th",{style:t.padLeft},[t._v("金额")]),n("th",[t._v("备注")])]),t._l(t.list,function(e){return n("tr",[n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_date,expression:"item.fund_details_date"}],style:t.paRight,attrs:{type:"date",id:"fund_details_date"},domProps:{value:e.fund_details_date},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_date",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_batch,expression:"item.fund_details_batch"}],attrs:{type:"text",id:"fund_details_batch",placeholder:"批次"},domProps:{value:e.fund_details_batch},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_batch",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_money,expression:"item.fund_details_money"}],style:t.padLeft,attrs:{type:"text",id:"fund_details_money",placeholder:"￥"},domProps:{value:e.fund_details_money},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_money",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_details_text,expression:"item.fund_details_text"}],attrs:{type:"text",id:"fund_details_text",placeholder:"备注"},domProps:{value:e.fund_details_text},on:{input:function(n){n.target.composing||t.$set(e,"fund_details_text",n.target.value)}}})])])})],2)]),n("div",{staticClass:"mui-content data-time",attrs:{id:"data-time"}},[n("form",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款时间")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.data_huan,expression:"data_huan"}],staticClass:"mui-input-clear",attrs:{type:"date",id:"data_huan"},domProps:{value:t.data_huan},on:{input:function(e){e.target.composing||(t.data_huan=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款周期")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.yue,expression:"yue"}],attrs:{name:"",id:"yue"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.yue=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("请选择")]),n("option",{attrs:{value:"按月"}},[t._v("按月")]),n("option",{attrs:{value:"按年"}},[t._v("按年")]),n("option",{attrs:{value:"按周"}},[t._v("按周")])])]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("还款期数")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.qi,expression:"qi"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"qi",placeholder:"请填入期数"},domProps:{value:t.qi},on:{input:function(e){e.target.composing||(t.qi=e.target.value)}}})])])]),n("p",{attrs:{id:"btn-form"},on:{click:t.formAdd}},[t._v("添加新一行")]),n("p",{attrs:{id:"btn-del"},on:{click:function(e){return t.del(t.user)}}},[t._v("删除")]),n("button-save",{nativeOn:{click:function(e){return t.add(e)}}})],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mui-content"},[n("div",{staticClass:"customer"},[n("h2",[t._v("转为应收")]),n("p",[t._v("/expenditur receive")])])])}],s={name:"expenditure_receive",data(){return{imgUrl_loading:!1,user:"",all_rate:"",all_id:"",category:!0,relevant_people:!0,cotrProjet:!1,idProjet:!0,site_various:!0,level:"",whether:"",list_lev:[{text:"A"},{text:"B"},{text:"C"}],list_whether:[{text:"是"},{text:"否"}],fund_type:"阶段付款",list_fund_name_type:"",fund_nameo:"",fund_debtor:"",fund_debtor_id:"",fund_money:"",list_fund_debtor:[{text:"胡永生"},{text:"邱梅"}],fund_person:"",fund_text:"0",list_fund_names:"",list_fund_namea:"",list_fund_name:"",customer_name:"",customer_name_id:"",list_customer_name:"",data_huan:"",fund_name:"",yue:"",qi:"",list:[{fund_details_date:"",fund_details_batch:"1".toString(),fund_details_money:"",fund_details_text:""}],batch_index:1,list_list:[],padLeft:{padding:"0"},paRight:{paddingRight:"0"}}},created(){var t=location.href,e=t.length,n=t.indexOf("="),a=decodeURI(t.substr(n+1,e-n));this.fund_details_id=a,this.lista=a.split("=");var i=[];for(var s in this.lista){var u=this.lista[s].slice(0);i.push(u)}this.moneys=i[0],this.axios.get(url.list).then(t=>{this.projet=t.data}),this.axios.get("/fund/Select_three_fund_name?fund_type=1").then(t=>{this.list_fund_name_type=t.data.fund_name_type}),this.customer_name=window.test,this.customer_name_id=window.test_id,this.fund_debtor=window.fund_people,this.fund_debtor_id=window.fund_people_name},methods:{formAdd(){this.batch_index++;var t={fund_details_date:"",fund_details_money:"",fund_details_batch:"1",fund_details_text:""};t.fund_details_batch=this.batch_index.toString(),this.list.push(t)},del(t){0===this.list.length?mui.alert("没有可删除的了"):this.list.splice(this.list.indexOf(t),1)},fund_namesa(t){this.fund_nameso=t,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_name_type="+this.fund_nameso).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_nameo?(this.category=!1,this.site_various=!1):"公司"===this.fund_nameo&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.site_various=!0)})},list_fund_nameas(t){this.fund_name=t,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_name_type="+this.fund_nameso+"&fund_names="+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"外借款"===this.fund_name?(this.site_various=!1,this.relevant_people=!0):"工程"===this.fund_name&&(this.relevant_people=!0,this.site_various=!0)})},all_rate_name(t){this.all_id=t,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_name_type="+this.fund_nameso+"&fund_names="+this.fund_name).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name})},stage_one(){var t=document.getElementById("table"),e=document.getElementById("data-time"),n=document.getElementById("btn-form"),a=document.getElementById("btn-del");n.style.display="block",t.style.display="block",a.style.display="block",e.style.display="none"},week(){var t=document.getElementById("table"),e=document.getElementById("data-time"),n=document.getElementById("btn-form"),a=document.getElementById("btn-del");a.style.display="none",t.style.display="none",n.style.display="none",e.style.display="block"},siteChange(){var t="expenditure_receive";this.$router.push({path:"siteList"}),window.expenditure=t},relecantProsen(){var t="expenditure_receive";this.$router.push({path:"relevant_people"}),window.prosen=t},add(){var t=this,e=/^[0-9]*$/,n=/^\d+(\.\d+)?$/;if(""==this.fund_nameo)return mui.toast("类别选择不能为空"),!1,!1;if(""==this.list_fund_namea)return mui.toast("类别详情不能为空"),!1,!1;if(""==this.level)return mui.toast("级别不能为空"),!1,!1;if(""==this.whether)return mui.toast("情况不能为空"),!1,!1;if(""==this.fund_money)return mui.toast("总金额不能为空"),!1,!1;if(!n.test(this.fund_money))return mui.toast("总金额只能填入数字"),!1,!1;if("阶段付款"===this.fund_type){document.getElementById("fund_details_date").value;var a=document.getElementById("fund_details_money").value,i=document.getElementById("fund_details_batch").value;if(""==a)return mui.toast("金额不能为空"),!1,!1;if(!n.test(a))return mui.toast("金额只能填入数字"),!1,!1;if(""==i)return mui.toast("批次不能为空"),!1,!1;if(!e.test(i))return mui.toast("批次只能填入数字"),!1,!1;for(var s in this.list){if(""==this.list[s].fund_details_batch)return mui.toast("批次不能为空"),!1,!1;if(!e.test(this.list[s].fund_details_batch))return mui.toast("批次内容只能为数字"),!1,!1;if(""==this.list[s].fund_details_money)return mui.toast("金额不能为空"),!1,!1;if(!n.test(this.list[s].fund_details_money))return mui.toast("金额只能为数字"),!1,!1}var u=0;for(var s in this.list){var l=this.list[s].fund_details_money;u+=parseFloat(l)}if(!(this.fund_money>=u))return mui.toast("金额的和不能大于总金额"),!1,!1;var d=0;for(var s in this.list)d+=parseFloat(this.list[s].fund_details_money);if(this.fund_money!=d)return mui.toast("总金额与阶段金额总和不同"),!1,!1}else if("周期付款"===this.fund_type){var r=document.getElementById("qi").value,o=document.getElementById("yue").value,_=document.getElementById("data_huan").value;if(""==_)return mui.toast("还款时间不能为空"),!1,!1;if(""==o)return mui.toast("还款周期不能为空"),!1,!1;if(""==r)return mui.toast("还款期数不能为空"),!1,!1;if(!e.test(r))return mui.toast("还款期数只能填入数字"),!1,!1}_=new Date(this.data_huan);var m=this.yue,f=this.qi,c=this.fund_money/f,p="";if("周期付款"===this.fund_type)if(this.list=[],"按月"===m)for(var v=1;v<=f;v++){var h=_.getMonth()+1+v;p=_.getFullYear()+"-"+h+"-"+_.getDate();var y={fund_details_date:p,fund_details_money:c.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(y)}else if("按年"===m)for(v=1;v<=f;v++){var g=_.getFullYear()+v;p=g+"-"+_.getMonth()+"-"+_.getDate();y={fund_details_date:p,fund_details_money:c.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(y)}else if("按周"===m)for(v=1;v<=f;v++){h=_.getMonth()+1;_.setDate(_.getDate()+7),p=_.getFullYear()+"-"+h+"-"+_.getDate();y={fund_details_date:p,fund_details_money:c.toString(),fund_details_batch:v.toString(),fund_details_text:""};this.list.push(y)}var b="",x="",w="",C="";"个人"===this.fund_nameo?(b=this.list_fund_namea,w+=this.fund_debtor_id,x+="0"):"公司"===this.fund_nameo&&(b=this.all_rate,void 0===this.customer_name?x+="0":x+=this.customer_name_id,void 0===this.fund_debtor?w+="0":w+=this.fund_debtor_id),"是"===this.whether?C+="0":C+="1",this.imgUrl_loading=!0,this.axios({method:"POST",url:"/fund/Add_Fund",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},data:{listFund:JSON.stringify(this.list),fund_customer_id:x,fund_workyard_pact_id:1,fund_name:b,fund_money:this.fund_money,fund_person:w,fund_text:this.fund_text,fund_type:this.fund_type,fund_details_level:this.level,fund_details_type:C},transformRequest:[function(t){let e="";for(let n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.push({path:"money_receivable"})}))})}}},u=s,l=(n("3be7"),n("2877")),d=Object(l["a"])(u,a,i,!1,null,"240c767c",null);e["default"]=d.exports}}]);