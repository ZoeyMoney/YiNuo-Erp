(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e1d66d2"],{"54df":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"transfer_money"},[e("header",{staticClass:"mui-bar mui-bar-nav"},[e("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"cash_flow"}}}),e("h1",{staticClass:"mui-title"},[t._v("转账")]),e("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),e("div",{staticClass:"mui-content app"},[e("form",{staticClass:"mui-input-group"},[e("div",{staticClass:"mui-input-row row-label"},[e("label",[t._v("转出")]),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_out_id,expression:"bank_out_id"}],attrs:{name:"",id:"enter"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.bank_out_id=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.cead,function(a){return e("option",{domProps:{value:a.bank_id}},[e("div",[t._v(t._s(a.bank_bank))]),e("div",[t._v(t._s(a.bank_person))]),e("div",[t._v("￥"+t._s(a.bank_money))])])})],2)])]),e("div",{staticClass:"mui-input-row row-label"},[e("label",[t._v("转入")]),e("label",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_enter_id,expression:"bank_enter_id"}],attrs:{id:"out"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.bank_enter_id=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.cead,function(a){return e("option",{domProps:{value:a.bank_id}},[e("div",[t._v(t._s(a.bank_bank))]),e("div",[t._v(t._s(a.bank_person))]),e("div",[t._v("￥"+t._s(a.bank_money))])])})],2)])]),e("div",{staticClass:"mui-input-row"},[e("label",[t._v("金额")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_deal_money,expression:"bank_deal_money"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"total",placeholder:"如：900,000"},domProps:{value:t.bank_deal_money},on:{input:function(a){a.target.composing||(t.bank_deal_money=a.target.value)}}})]),e("div",{staticClass:"mui-input-row"},[e("label",[t._v("转账费率")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_deal_rate,expression:"bank_deal_rate"}],attrs:{name:"",id:"rate"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.bank_deal_rate=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listD,function(a){return e("option",{domProps:{value:a.Tnumber}},[t._v(t._s(a.Tnumber)+"%")])})],2)]),e("div",{staticClass:"mui-input-row"},[e("label",[t._v("实际转账")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.addMoneys,expression:"addMoneys"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"transfer",placeholder:"如：6,000"},domProps:{value:t.addMoneys},on:{input:function(a){a.target.composing||(t.addMoneys=a.target.value)}}})])]),e("div",{staticClass:"mui-input-row form-btn"},[e("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("Transfers")])])]),e("div",{staticClass:"mui-content all"},[e("div",{staticClass:"saving"},[t._v("储蓄卡")]),e("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.addMoney))])]),e("table",{staticClass:"all-saving",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(1),t._l(t.chuxuka,function(a){return e("tr",[e("td",[t._v(t._s(a.bank_bank))]),e("td",[t._v(t._s(a.bank_person))]),e("td",[t._v(t._s(a.bank_number))]),e("td",[t._v("￥"+t._s(a.bank_money))])])})],2),e("div",{staticClass:"mui-content all"},[e("div",{staticClass:"saving"},[t._v("信用卡")]),e("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.xinMoney))])]),e("table",{staticClass:"blaner",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(2),t._l(t.xinyong,function(a){return e("tr",[e("td",[t._v(t._s(a.bank_bank))]),e("td",[t._v(t._s(a.bank_person))]),e("td",[t._v(t._s(a.bank_number))]),e("td",[t._v("￥"+t._s(a.bank_money))]),e("td",[t._v("￥"+t._s(a.bank_limit))])])})],2)])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mui-content"},[e("div",{staticClass:"customer"},[e("h2",[t._v("转账")]),e("p",[t._v("/Transfers")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticStyle:{width:"21%"}},[t._v("开户行")]),e("td",{staticStyle:{width:"15%"}},[t._v("户主")]),e("td",{staticStyle:{width:"15%"}},[t._v("尾号")]),e("td",[t._v("余额")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticStyle:{width:"21%"}},[t._v("开户行")]),e("td",{staticStyle:{width:"15%"}},[t._v("户主")]),e("td",{staticStyle:{width:"15%"}},[t._v("尾号")]),e("td",[t._v("余额")]),e("td",[t._v("额度")])])}],s={name:"transfer_money",data:function(){return{bank_id:0,time:new Date,listAdd:"",bank_deal_money:"",bank_deal_rate:"",bank_enter_id:"",bank_out_id:"",chuxuka:"",xinyong:"",bank_number:"",bank_money:"",addMoney:"",xinMoney:"",all_money:"",cead:"",bank_limit:"",listD:[{Tnumber:.6},{Tnumber:.55},{Tnumber:.38}]}},created:function(){var t=this;this.axios.get("https://formattingclub.com/YiNuoLogin/fund/select_bank").then(function(a){t.select_bank=a.data;var e=[],n=[],i=0,s=0;for(var r in a.data)if("储蓄卡"===a.data[r].bank_type){var o=a.data[r].bank_number.slice(15,19);i+=a.data[r].bank_money,a.data[r].bank_number=o,e.push(a.data[r])}else{o=a.data[r].bank_number.slice(12,16);s+=a.data[r].bank_money,a.data[r].bank_number=o,n.push(a.data[r])}t.chuxuka=e,t.xinyong=n,t.addMoney=i,t.xinMoney=s}),this.axios.get("https://formattingclub.com/YiNuoLogin/fund/select_bank").then(function(a){t.cead=a.data},function(a){var e=t;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},computed:{addMoneys:{get:function(){var t=this.bank_deal_money-this.bank_deal_money*this.bank_deal_rate/100,a=Math.floor(100*t)/100;return this.all_money=a,a},set:function(t){this.all_money=t}}},methods:{go:function(){var t=this,a=this,e=/^[0-9]*$/;if(""==this.bank_deal_money)return mui.toast("金额不能为空"),!1,!1;if(!e.test(this.bank_deal_money))return mui.toast("金额有非法格式"),!1,!1;if(""==this.bank_enter_id)return mui.toast("转出银行卡不能为空"),!1,!1;if(""==this.bank_out_id)return mui.toast("转入银行卡不能为空"),!1,!1;if(this.bank_enter_id===this.bank_out_id)return mui.toast("转入和转出银行卡不能一致"),!1,!1;for(var n in this.cead){if(parseInt(this.cead[n].bank_id)===!this.bank_out_id)return mui.toast("卡内余额不能大于交易余额"),!1,!1;if(parseInt(this.addMoneys)>parseInt(this.cead[n].bank_out_id))return mui.toast("实际转账不能大于信用卡额度"),!1,!1}var i="?bank_deal_money="+this.bank_deal_money+"&money="+this.all_money+"&bank_enter_id="+this.bank_enter_id+"&bank_out_id="+this.bank_out_id;this.axios.get("https://formattingclub.com/YiNuoLogin/fund/add_bank_deal"+i).then(function(e){t.listAdd=e.data,200===e.status?mui.alert("转账成功",function(){a.$router.go(0)}):alert("转账失败")})}}},r=s,o=(e("7433"),e("2877")),l=Object(o["a"])(r,n,i,!1,null,"7f97bafa",null);a["default"]=l.exports},7433:function(t,a,e){"use strict";var n=e("ff6b"),i=e.n(n);i.a},ff6b:function(t,a,e){}}]);
//# sourceMappingURL=chunk-2e1d66d2.77feeebd.js.map