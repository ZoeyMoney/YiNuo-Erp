(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5973dd8a"],{"54df":function(a,n,t){"use strict";t.r(n);var e=function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"transfer_money"},[t("header",{staticClass:"mui-bar mui-bar-nav"},[t("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"cash_flow"}}}),t("h1",{staticClass:"mui-title"},[a._v("转账")]),t("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t("login-loading",{directives:[{name:"show",rawName:"v-show",value:a.imgUrl_loading,expression:"imgUrl_loading"}]}),t("div",{staticClass:"mui-content one-img"},[a._m(0),t("div",{staticClass:"mui-img"},[t("div",[a._v("￥"+a._s(a.allTotal))])])]),t("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:a.onSwipeLeft}},[t("div",{staticClass:"mui-content app"},[t("form",{staticClass:"mui-input-group"},[t("div",{staticClass:"mui-input-row row-label"},[t("label",[a._v("转出")]),t("label",[t("select",{directives:[{name:"model",rawName:"v-model",value:a.bank_out_id,expression:"bank_out_id"}],class:{select:""===a.bank_out_id,selectBlack:""!==a.bank_out_id},attrs:{name:"",id:"enter"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(a){return a.selected})).map((function(a){var n="_value"in a?a._value:a.value;return n}));a.bank_out_id=n.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"",selected:"selected"}},[a._v("请选择")]),a._l(a.cead,(function(n){return t("option",{domProps:{value:n.bank_id}},[t("div",[a._v(a._s(n.bank_person))]),a._v("   \n                  "),t("div",[a._v(a._s(n.bank_bank))])])}))],2)])]),t("div",{staticClass:"mui-input-row row-label"},[t("label",[a._v("转入")]),t("label",[t("select",{directives:[{name:"model",rawName:"v-model",value:a.bank_enter_id,expression:"bank_enter_id"}],class:{select:""===a.bank_enter_id,selectBlack:""!==a.bank_enter_id},attrs:{id:"out"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(a){return a.selected})).map((function(a){var n="_value"in a?a._value:a.value;return n}));a.bank_enter_id=n.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"",selected:"selected"}},[a._v("请选择")]),a._l(a.cead,(function(n){return t("option",{domProps:{value:n.bank_id}},[t("div",[a._v(a._s(n.bank_person))]),a._v("   \n                  "),t("div",[a._v(a._s(n.bank_bank))])])}))],2)])]),t("data-value",{model:{value:a.dataValue1,callback:function(n){a.dataValue1=n},expression:"dataValue1"}}),t("div",{staticClass:"mui-input-row"},[t("label",[a._v("金额")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.bank_deal_money,expression:"bank_deal_money"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"total",placeholder:"￥"},domProps:{value:a.bank_deal_money},on:{input:function(n){n.target.composing||(a.bank_deal_money=n.target.value)}}})]),t("div",{staticClass:"mui-input-row"},[t("label",[a._v("转账费率")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.bank_deal_rate,expression:"bank_deal_rate"}],class:{select:""===a.bank_deal_rate,selectBlack:""!==a.bank_deal_rate},attrs:{name:"",id:"rate"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(a){return a.selected})).map((function(a){var n="_value"in a?a._value:a.value;return n}));a.bank_deal_rate=n.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"",selected:"selected"}},[a._v("请选择")]),a._l(a.listD,(function(n){return t("option",{domProps:{value:n.Tnumber}},[a._v(a._s(n.Tnumber)+"%")])}))],2)]),t("div",{staticClass:"mui-input-row"},[t("label",[a._v("实际转账")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.addMoneys,expression:"addMoneys"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"transfer",placeholder:"如：6,000"},domProps:{value:a.addMoneys},on:{input:function(n){n.target.composing||(a.addMoneys=n.target.value)}}})])],1),t("div",{staticClass:"mui-input-row form-btn"},[t("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:a.go}},[a._v("Transfers")])])]),t("div",{staticClass:"mui-content all"},[t("div",{staticClass:"sc"},[a._v("B/C")]),t("div",{staticClass:"saving"},[a._v(" 储蓄卡")]),t("div",{staticClass:"all-money"},[a._v("￥"+a._s(a.addMoney))])]),t("table",{staticClass:"tables",attrs:{border:"0"}},[t("tr",[t("th",[t("span",{style:a.lefta})]),t("th",[t("span",[a._v("开户行")])]),t("th",[t("span",[a._v("户主")])]),t("th",[t("span",[a._v("余额")])])]),a._l(a.chuxuka,(function(n){return t("tr",[t("td",[t("span",["建设银行"==n.bank_bank?t("img",{attrs:{src:a.jianshe}}):a._e()]),t("span",["工商银行"==n.bank_bank?t("img",{attrs:{src:a.gonghang}}):a._e()]),t("span",["现金"==n.bank_bank?t("img",{attrs:{src:a.xianjinmong}}):a._e()]),t("span",["微信"==n.bank_bank?t("img",{attrs:{src:a.weixin}}):a._e()]),t("span",["支付宝"==n.bank_bank?t("img",{attrs:{src:a.zhifubao}}):a._e()]),t("span",["农村信用社"==n.bank_bank?t("img",{attrs:{src:a.nongcun}}):a._e()]),t("span",["包商银行"==n.bank_bank?t("img",{attrs:{src:a.baoshang}}):a._e()]),t("span",["中原银行"==n.bank_bank?t("img",{attrs:{src:a.zhongyuan}}):a._e()]),t("span",["农业银行"==n.bank_bank?t("img",{attrs:{src:a.nongye}}):a._e()]),t("span",["中国银行"==n.bank_bank?t("img",{attrs:{src:a.zhongguo}}):a._e()])]),t("td",[t("span",{on:{click:function(t){return a.bankClick(n.bank_bank,n.bank_id)}}},[a._v(a._s(n.bank_bank))])]),t("td",[t("span",[a._v(a._s(n.bank_person))])]),t("td",[t("span",{on:{click:function(t){return a.msgCu(n.bank_bank,n.bank_person,n.number)}}},[a._v("￥"+a._s(n.bank_money))])])])}))],2),t("div",{staticClass:"mui-content all"},[t("div",{staticClass:"sc cc"},[a._v("C/C")]),t("div",{staticClass:"saving"},[a._v("信用卡")]),t("div",{staticClass:"all-money"},[a._v("￥"+a._s(a.xinMoney))])]),t("table",{staticClass:"table-xin"},[t("tr",[t("th",[t("span",{style:a.lefta})]),t("th",[t("span",[a._v("开户行")])]),t("th",[t("span",[a._v("户主")])]),t("th",[t("span",[a._v("余额")])]),t("th",[t("span",[a._v("额度")])])]),a._l(a.xinyong,(function(n){return t("tr",[t("td",[t("span",["民生信用"==n.bank_bank?t("img",{attrs:{src:a.minsheng}}):a._e()]),t("span",["建设信用"==n.bank_bank?t("img",{attrs:{src:a.jianshe}}):a._e()]),t("span",["交通信用"==n.bank_bank?t("img",{attrs:{src:a.jiaotong}}):a._e()]),t("span",["中行信用"==n.bank_bank?t("img",{attrs:{src:a.zhonghang}}):a._e()]),t("span",["蚂蚁花呗"==n.bank_bank?t("img",{attrs:{src:a.mayi}}):a._e()]),t("span",["华夏信用"==n.bank_bank?t("img",{attrs:{src:a.huaxiayinhang}}):a._e()]),t("span",["浦发信用"==n.bank_bank?t("img",{attrs:{src:a.pufa}}):a._e()]),t("span",["上海信用"==n.bank_bank?t("img",{attrs:{src:a.shanghai}}):a._e()]),t("span",["招商信用"==n.bank_bank?t("img",{attrs:{src:a.zhaoshang}}):a._e()]),t("span",["农业信用"==n.bank_bank?t("img",{attrs:{src:a.nongye}}):a._e()]),t("span",["平安信用"==n.bank_bank?t("img",{attrs:{src:a.pingan}}):a._e()]),t("span",["兴业信用"==n.bank_bank?t("img",{attrs:{src:a.xingye}}):a._e()]),t("span",["工商信用"==n.bank_bank?t("img",{attrs:{src:a.gonghang}}):a._e()]),t("span",["中原信用"==n.bank_bank?t("img",{attrs:{src:a.zhongyuan}}):a._e()])]),t("td",[t("span",{on:{click:function(t){return a.bankClick(n.bank_bank,n.bank_id)}}},[a._v(a._s(n.bank_bank))])]),t("td",[t("span",[a._v(a._s(n.bank_person))])]),t("td",[t("span",[a._v("￥"+a._s(n.bank_money))])]),t("td",[t("span",{on:{click:function(t){return a.msgCu(n.bank_bank,n.bank_person,n.number)}}},[a._v("￥"+a._s(n.bank_limit))])])])}))],2)])],1)},s=[function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"customer"},[t("h2",[a._v("转账")]),t("p",[a._v("/Transfers")])])}],i=t("c8cb"),r={name:"transfer_money",components:{Running_money:i["default"]},data(){return{bank_id:0,dataValue1:new Date,imgUrl_loading:!1,bank_deal_money:"",bank_deal_rate:"",bank_enter:"",bank_enter_id:"",bank_out:"",bank_out_id:"",chuxuka:"",xinyong:"",bank_money:"",addMoney:"",xinMoney:"",allTotal:"",all_money:"",cead:"",bank_limit:"",bank:"",baoshang:t("a715"),baocun:t("2d0b"),gonghang:t("024f"),huaxiayinhang:t("2b6c"),jianshe:t("abea"),jiaotong:t("e601"),mayi:t("c0cf"),minsheng:t("5b2d"),nongcun:t("7f15"),nonghang:t("875c"),pingan:t("3a15"),pufa:t("cbb1"),shanghai:t("c5f4"),weixin:t("99ea"),xingye:t("ac01"),zhaoshang:t("52e1"),zhifubao:t("eefb"),zhonghang:t("82ee"),zhongyuan:t("e0d8"),xianjinmong:t("6c10"),zhongguo:t("a461"),nongye:t("6554"),lefta:{paddingLeft:"10px"},listD:[{Tnumber:.6},{Tnumber:.55},{Tnumber:.38}]}},created(){this.imgUrl_loading=!0,this.axios.get("/fund/select_bank").then(a=>{if(200===a.status){this.imgUrl_loading=!1,this.bank=a.data;var n=[],t=[],e=0,s=0,i=0;for(var r in this.bank)"储蓄卡"===this.bank[r].bank_type?(e+=this.bank[r].bank_money,n.push(this.bank[r])):"信用卡"===this.bank[r].bank_type&&(this.bank[r].bank_money>0&&(s+=this.bank[r].bank_money),t.push(this.bank[r]));this.chuxuka=n,this.xinyong=t,this.addMoney=Math.floor(100*e)/100,this.xinMoney=Math.floor(100*s)/100,i+=this.addMoney+this.xinMoney,this.allTotal=Math.floor(100*i)/100}}),this.axios.get("/fund/select_bank").then(a=>{this.cead=a.data})},computed:{addMoneys:{get:function(){if(""===this.bank_deal_rate||void 0===this.bank_deal_rate){var a=this.bank_deal_money;return a}a=this.bank_deal_money-this.bank_deal_money*this.bank_deal_rate/100;var n=Math.floor(100*a)/100;return this.all_money=n,n},set:function(a){this.all_money=a}}},methods:{bankClick(a,n){""==this.bank_out?(this.bank_out=a,this.bank_out_id=n):(this.bank_enter=a,this.bank_enter_id=n)},msgCu(a,n,t){var e="?&bank_person="+n+"&bank_bank="+a;void 0!==t&&(e+="&bank_number="+t);var s="transfer";this.axios.get("/fund/select_detail"+e).then(a=>{window.transfer=a.data.list_moey,this.$router.push({path:"running_money",query:{transfer:s}})})},onSwipeLeft:function(){this.$router.push({name:"expenditure"})},go(){var a=this,n=/^\d+(\.\d+)?$/;if(""==this.bank_deal_money)return mui.toast("金额不能为空"),!1,!1;if(!n.test(this.bank_deal_money))return mui.toast("金额有非法格式"),!1,!1;if(""==this.bank_enter_id)return mui.toast("转出银行卡不能为空"),!1,!1;if(""==this.bank_out_id)return mui.toast("转入银行卡不能为空"),!1,!1;if(this.bank_enter_id===this.bank_out_id)return mui.toast("转入和转出银行卡不能一致"),!1,!1;var t=new Date(this.dataValue1),e=t.getFullYear(),s=t.getMonth()+1,i=t.getDate(),r=t.getHours(),o=t.getMinutes(),_=t.getSeconds(),l=`${e}-${s}-${i} ${r}:${o}:${_}`;this.imgUrl_loading=!0;var u="";""===this.all_money?u+=this.bank_deal_money:u+=this.all_money;var b="?bank_deal_money="+this.bank_deal_money+"&money="+u+"&bank_enter_id="+this.bank_enter_id+"&bank_out_id="+this.bank_out_id+"&date="+l;this.axios.get("/fund/add_bank_deal"+b).then(n=>{200===n.status?(this.imgUrl_loading=!1,mui.alert("转账成功",(function(){a.$router.go(0)}))):alert("转账失败")})}}},o=r,_=(t("6bc0"),t("6691")),l=Object(_["a"])(o,e,s,!1,null,"14c5e1b7",null);n["default"]=l.exports},"6bc0":function(a,n,t){"use strict";var e=t("ac9c"),s=t.n(e);s.a},ac9c:function(a,n,t){}}]);