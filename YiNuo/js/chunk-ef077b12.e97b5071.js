(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef077b12"],{2229:function(t,e,a){},d872:function(t,e,a){"use strict";var i=a("2229"),s=a.n(i);s.a},f044:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account_translation"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_receivable"}}}),a("h1",{staticClass:"mui-title"},[t._v("金额")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("工地名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.customer_name},on:{input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("相关人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_person,expression:"fund_person"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.fund_person},on:{input:function(e){e.target.composing||(t.fund_person=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("预收时间")]),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.dates,callback:function(e){t.dates=e},expression:"dates"}})],1),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_details_money,expression:"fund_details_money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.fund_details_money},on:{input:function(e){e.target.composing||(t.fund_details_money=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("级别")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],class:{select:""===t.level,selectBlack:""!==t.level},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_lev,(function(e){return a("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))],2)]),a("div",{staticClass:"mui-input-row dian"},[a("label",[t._v("情况")]),a("div",{staticClass:"mui-input-row mui-radio dian-a"},[a("label",[t._v("是")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ab,expression:"ab"}],attrs:{name:"radio1",type:"radio",checked:"a",value:"0"},domProps:{checked:t._q(t.ab,"0")},on:{change:function(e){t.ab="0"}}})]),a("div",{staticClass:"mui-input-row mui-radio dian-a"},[a("label",[t._v("否")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.ab,expression:"ab"}],attrs:{name:"radio1",type:"radio",checked:"b",value:"1"},domProps:{checked:t._q(t.ab,"1")},on:{change:function(e){t.ab="1"}}})])])]),a("form",{staticClass:"mui-input-group"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("银行卡")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_bank,expression:"fund_bank"}],attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.fund_bank=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.income_y,(function(e){return a("option",{domProps:{value:e.bank_id}},[a("div",[t._v(t._s(e.bank_bank))]),t._v("   \n                "),a("div",[t._v(t._s(e.bank_person))]),t._v("   \n                "),a("div",[t._v("￥"+t._s(e.bank_money))])])}))],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("收款时间")]),a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.DateValue,callback:function(e){t.DateValue=e},expression:"DateValue"}})],1),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("实际转账")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入实际转账"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("备注")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_details_text,expression:"fund_details_text"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.fund_details_text},on:{input:function(e){e.target.composing||(t.fund_details_text=e.target.value)}}})])]),a("div",{staticClass:"mui-input-row mui-checkbox mui-left radio-one"},[a("label",[t._v("转为应收")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkBox,expression:"checkBox"}],attrs:{name:"checkbox1",type:"checkbox"},domProps:{checked:Array.isArray(t.checkBox)?t._i(t.checkBox,null)>-1:t.checkBox},on:{change:function(e){var a=t.checkBox,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=null,l=t._i(a,n);i.checked?l<0&&(t.checkBox=a.concat([n])):l>-1&&(t.checkBox=a.slice(0,l).concat(a.slice(l+1)))}else t.checkBox=s}}})]),a("div",{staticClass:"form-botton"},[a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.update}},[t._v("修改")]),a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.dele}},[t._v("删除")]),a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.add}},[t._v("收款")])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[a("div",{staticClass:"customer"},[a("h2",[t._v("金额")]),a("p",[t._v("/Amount")])])])}],n={name:"account_translation",data(){return{imgUrl_loading:!1,projet:"",customer_name:"",fund_person:"",fund_details_text:"",dates:"",fund_details_money:"",checkBox:"",money:"",funn_data:"",fund_details_id:"",fund_bank:"",income_y:"",DateValue:new Date,ab:"",dian:[{text:"是",name:"情况A"},{text:"否",name:"情况B"}],level:"",whether:"",list_lev:[{text:"A"},{text:"B"},{text:"C"}],list_whether:[{text:"是"},{text:"否"}]}},created(){this.projet=JSON.parse(localStorage.account_translation),this.customer_name=this.projet.customer_name,this.fund_person=this.projet.fund_person,this.fund_details_text=this.projet.fund_details_text,this.dates=this.projet.dates,this.fund_details_money=this.projet.fund_details_money,this.fund_details_id=this.projet.fund_details_id,this.level=this.projet.fund_details_level,1==this.projet.fund_details_type?this.ab="1":0==this.projet.fund_details_type&&(this.ab="0"),this.axios.get("/fund/select_bank").then(t=>{this.income_y=t.data})},methods:{add(){var t=this,e=/^\d+(\.\d+)?$/;if(""==this.fund_bank)return mui.toast("银行卡不能为空"),!1,!1;if(""==this.DateValue)return mui.toast("收款时间不能为空"),!1,!1;if(""==this.money)return mui.toast("实际转账不能为空"),!1,!1;if(!e.test(this.money))return mui.toast("实际转账只能为纯数字"),!1,!1;this.imgUrl_loading=!0;var a=new Date(this.DateValue),i=a.getFullYear(),s=a.getMonth()+1,n=a.getDate(),l=a.getHours(),o=a.getMinutes(),u=a.getSeconds(),d=`${i}-${s}-${n} ${l}:${o}:${u}`,r="?fund_details_id="+this.fund_details_id+"&money="+this.money+"&fund_details_date="+d+"&bank_id="+this.fund_bank+"&fund_details_type="+this.ab;if(!0===this.checkBox){var c=this.projet.fund_details_money,m=c-this.money,_=this.projet.customer_name,p=this.projet.fund_person,v=this.projet.fund_details_text,h=this.projet.dates,f=h.split(" ");this.axios.get("/fund/update_fund_details"+r).then(e=>{200===e.status?(this.imgUrl_loading=!1,t.$router.push({path:"account_translation_one",query:{id:t.fund_details_id,money:m,cumoterName:_,person:p,text:v,datas:f}})):406===e.status&&mui.alert("数据异常")})}else this.axios.get("/fund/update_fund_details"+r).then(e=>{200===e.status?(this.imgUrl_loading=!1,mui.alert(e.data.msg,(function(){t.$router.push({name:"money_receivable"})}))):mui.alert("支付失败")})},dele(){var t=this;this.imgUrl_loading=!0,this.axios("/fund/Delete_fund_details?fund_details_id="+this.fund_details_id).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,(function(){t.$router.push({path:"money_receivable"})})))})},update(){var t=this,e=/^\d+(\.\d+)?$/;if(""==this.dates)return mui.toast("收款时间不能为空"),!1,!1;if(!e.test(this.fund_details_money))return mui.toast("实际转账必须纯数字"),!1,!1;this.imgUrl_loading=!0;var a=new Date(this.dates),i=a.getFullYear(),s=a.getMonth()+1,n=a.getDate(),l=a.getHours(),o=a.getMinutes(),u=a.getSeconds(),d=`${i}-${s}-${n} ${l}:${o}:${u}`,r="?fund_details_id="+this.fund_details_id+"&fund_id="+this.projet.fund_id+"&fund_details_type="+this.ab;this.fund_details_money!==this.projet.fund_details_money&&(r+="&money="+this.fund_details_money),this.fund_details_text!==this.projet.fund_details_text&&(r+="&text="+this.fund_details_text),null!==this.dates&&(r+="&date="+d),this.axios.get("/fund/Update_fund_detail"+r).then(e=>{200===e.status?(this.imgUrl_loading=!1,this.dates!==this.projet.dates||this.fund_details_id!==this.projet.fund_details_id||this.fund_details_money!==this.projet.fund_details_money||this.fund_details_type!==this.projet.fund_details_type?mui.alert(e.data.data,(function(){t.$router.push({path:"money_receivable"})})):mui.alert("您什么都没有修改！")):406===e.status&&mui.alert("数据异常")})}}},l=n,o=(a("d872"),a("6691")),u=Object(o["a"])(l,i,s,!1,null,"4b6168d0",null);e["default"]=u.exports}}]);