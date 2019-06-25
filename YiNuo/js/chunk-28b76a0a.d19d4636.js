(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b76a0a"],{b0c6:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"bank_card"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_management"}}}),a("h1",{staticClass:"mui-title"},[t._v("银行卡录入")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("开户行")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_bank,expression:"bank_bank"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入开户行"},domProps:{value:t.bank_bank},on:{input:function(n){n.target.composing||(t.bank_bank=n.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("卡号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_number,expression:"bank_number"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入银行卡账户"},domProps:{value:t.bank_number},on:{input:function(n){n.target.composing||(t.bank_number=n.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("户主")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_person,expression:"bank_person"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入户主"},domProps:{value:t.bank_person},on:{input:function(n){n.target.composing||(t.bank_person=n.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("余额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_money,expression:"bank_money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入余额"},domProps:{value:t.bank_money},on:{input:function(n){n.target.composing||(t.bank_money=n.target.value)}}})]),a("div",{staticClass:"mui-input-row",attrs:{id:"persion"}},[a("label",[t._v("额度")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_limit,expression:"bank_limit"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入额度"},domProps:{value:t.bank_limit},on:{input:function(n){n.target.composing||(t.bank_limit=n.target.value)}}})])]),a("div",{staticClass:"mui-input-row input-radio"},[a("div",{staticClass:"mui-input-row mui-left mui-radio"},[a("label",[t._v("储蓄卡")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_type,expression:"bank_type"}],attrs:{type:"radio",value:"储蓄卡"},domProps:{checked:t._q(t.bank_type,"储蓄卡")},on:{click:t.fund_cu,change:function(n){t.bank_type="储蓄卡"}}})]),a("div",{staticClass:"mui-input-row mui-left mui-radio"},[a("label",[t._v("信用卡")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_type,expression:"bank_type"}],attrs:{type:"radio",value:"信用卡"},domProps:{checked:t._q(t.bank_type,"信用卡")},on:{click:t.fund_xin,change:function(n){t.bank_type="信用卡"}}})])]),a("div",{staticClass:"mui-input-row form-btn"},[a("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("保存")])])])])},i=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"one-noble"},[a("h2",[t._v("银行卡录入")]),a("p",[t._v("administration")])])}],s={name:"bank_card",data:function(){return{bank_number:"",bank_bank:"",bank_money:"",bank_person:"",bank_limit:"",bank_type:"储蓄卡"}},methods:{fund_xin:function(){var t=document.getElementById("persion");t.style.display="block"},fund_cu:function(){var t=document.getElementById("persion");t.style.display="none"},go:function(){var t=this,n="?bank_number="+this.bank_number+"&bank_bank="+this.bank_bank+"&bank_person="+this.bank_person+"&bank_type="+this.bank_type+"&bank_money="+this.bank_money,a=/^[\u4E00-\u9FA5]{2,4}$/,e=/^(\d{16}|\d{19})$/,i=/^\d+(\.\d+)?$/;if("储蓄卡"===this.bank_type){if(""==this.bank_number)return mui.toast("银行卡账户不能为空"),!1,!1;if(!e.test(this.bank_number))return mui.toast("银行卡格式错误"),!1,!1;if(""==this.bank_bank)return mui.toast("户主不能为空"),!1,!1;if(!a.test(this.bank_bank))return mui.toast("户主不能为空"),!1,!1;if(""==this.bank_money)return mui.toast("余额不能为空"),!1,!1;if(!i.test(this.bank_money))return mui.toast("余额格式错误"),!1,!1;if(""==this.bank_person)return mui.toast("开户行不能为空"),!1,!1;n+="&bank_limit=0"}else if("信用卡"===this.bank_type){if(""==this.bank_number)return mui.toast("银行卡账户不能为空"),!1,!1;if(!e.test(this.bank_number))return mui.toast("银行卡格式错误"),!1,!1;if(""==this.bank_bank)return mui.toast("户主不能为空"),!1,!1;if(!a.test(this.bank_bank))return mui.toast("户主不能为空"),!1,!1;if(""==this.bank_money)return mui.toast("余额不能为空"),!1,!1;if(!i.test(this.bank_money))return mui.toast("余额格式错误"),!1,!1;if(""==this.bank_person)return mui.toast("开户行不能为空"),!1,!1;if(""==this.bank_limit)return mui.toast("额度不能为空"),!1,!1;if(!i.test(this.bank_limit))return mui.toast("额度格式错误"),!1,!1;n=n+"&bank_limit="+this.bank_limit}this.axios.get("https://formattingclub.com/YiNuoLogin/fund/AddBank"+n).then(function(t){"添加成功"===t.data&&mui.alert("添加成功",function(){location.reload()})},function(n){mui.alert("您无权录入",function(){t.$router.push({name:"index"})})})}}},u=s,o=(a("eeef"),a("2877")),r=Object(o["a"])(u,e,i,!1,null,"10c3ef19",null);n["default"]=r.exports},ba04:function(t,n,a){},eeef:function(t,n,a){"use strict";var e=a("ba04"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-28b76a0a.d19d4636.js.map