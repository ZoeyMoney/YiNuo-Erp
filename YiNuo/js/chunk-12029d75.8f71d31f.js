(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12029d75"],{"0d0d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"income"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"cash_flow"}}}),a("h1",{staticClass:"mui-title"},[t._v("收入")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),a("div",{staticClass:"mui-content one-img"},[t._m(0),a("div",{staticClass:"mui-img"},[a("div",[t._v("￥"+t._s(t.allTotal))])])]),a("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}},[a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[t.site_projet?a("div",{staticClass:"mui-input-row site_projet"},[a("label",[t._v("工地名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{type:"text",placeholder:"请选择"},domProps:{value:t.site},on:{click:t.siteChange,input:function(e){e.target.composing||(t.site=e.target.value)}}})]):t._e(),t.relevant_people?a("div",{staticClass:"mui-input-row relevant_people"},[a("label",[t._v("相关人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.listRelevant,expression:"listRelevant"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请选择相关人"},domProps:{value:t.listRelevant},on:{click:t.relecantProsen,input:function(e){e.target.composing||(t.listRelevant=e.target.value)}}})]):t._e(),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("类别选择")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.fund_detail_id,expression:"fund_detail_id"}],class:{select:""===t.fund_detail_id,selectBlack:""!==t.fund_detail_id},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.fund_detail_id=e.target.multiple?a:a[0]},function(e){return t.fund_deId(t.fund_detail_id)}]}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_fund_name_type,(function(e){return a("option",{domProps:{value:e.fund_name_type}},[t._v(t._s(e.fund_name_type))])}))],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.detailed,expression:"detailed"}],class:{select:""===t.detailed,selectBlack:""!==t.detailed},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.detailed=e.target.multiple?a:a[0]},function(e){return t.list_fund_nameas(t.detailed)}]}},[a("option",{staticStyle:{color:"#6e6e6e"},attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,(function(e){return t.cotrProjet?a("option",{domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()})),t._l(t.list_fund_names,(function(e){return t.idProjet?a("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()}))],2)]),t.category?a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项详细")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.slim,expression:"slim"}],class:{select:""===t.slim,selectBlack:""!==t.slim},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.slim=e.target.multiple?a:a[0]},function(e){return t.list_fund_namea(t.slim)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,(function(e){return a("option",{domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])}))],2)]):t._e(),a("data-value",{model:{value:t.dataValue1,callback:function(e){t.dataValue1=e},expression:"dataValue1"}}),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("备注")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clearBei,expression:"clearBei"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.clearBei},on:{input:function(e){e.target.composing||(t.clearBei=e.target.value)}}})]),a("div",{staticClass:"mui-input-row row-label"},[a("label",[t._v("转入账户")]),a("input",{attrs:{type:"text",placeholder:"请选择下列银行卡",disabled:"disabled"},domProps:{value:t.mongey_bank}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("手续费")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.money_rate,expression:"money_rate"}],class:{select:""===t.money_rate,selectBlack:""!==t.money_rate},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.money_rate=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_money_rate,(function(e){return a("option",{domProps:{value:e.text}},[t._v(t._s(e.text)+"%")])}))],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("实际收入")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money_actual,expression:"money_actual"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money_actual},on:{input:function(e){e.target.composing||(t.money_actual=e.target.value)}}})])],1),a("div",{staticClass:"mui-input-row mui-checkbox mui-left checkbox"},[a("label",[t._v("转为应付")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkbox,expression:"checkbox"}],attrs:{name:"checkbox1",value:"转为应付",type:"checkbox"},domProps:{checked:Array.isArray(t.checkbox)?t._i(t.checkbox,"转为应付")>-1:t.checkbox},on:{change:function(e){var a=t.checkbox,n=e.target,i=!!n.checked;if(Array.isArray(a)){var s="转为应付",o=t._i(a,s);n.checked?o<0&&(t.checkbox=a.concat([s])):o>-1&&(t.checkbox=a.slice(0,o).concat(a.slice(o+1)))}else t.checkbox=i}}})]),a("div",{staticClass:"mui-input-row form-btn"},[a("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.add}},[t._v("Transfers")])]),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc"},[t._v("B/C")]),a("div",{staticClass:"saving"},[t._v(" 储蓄卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.chuXuKa))])]),a("table",{staticClass:"tables",attrs:{border:"0"}},[a("tr",[a("th",[a("span",{style:t.lefta})]),a("th",[a("span",[t._v("开户行")])]),a("th",[a("span",[t._v("户主")])]),a("th",[a("span",[t._v("余额")])])]),t._l(t.chuXu,(function(e){return a("tr",[a("td",[a("span",["建设银行"==e.bank_bank?a("img",{attrs:{src:t.jianshe}}):t._e()]),a("span",["工商银行"==e.bank_bank?a("img",{attrs:{src:t.gonghang}}):t._e()]),a("span",["现金"==e.bank_bank?a("img",{attrs:{src:t.xianjinmong}}):t._e()]),a("span",["微信"==e.bank_bank?a("img",{attrs:{src:t.weixin}}):t._e()]),a("span",["支付宝"==e.bank_bank?a("img",{attrs:{src:t.zhifubao}}):t._e()]),a("span",["农村信用社"==e.bank_bank?a("img",{attrs:{src:t.nongcun}}):t._e()]),a("span",["包商银行"==e.bank_bank?a("img",{attrs:{src:t.baoshang}}):t._e()]),a("span",["中原银行"==e.bank_bank?a("img",{attrs:{src:t.zhongyuan}}):t._e()]),a("span",["农业银行"==e.bank_bank?a("img",{attrs:{src:t.nongye}}):t._e()]),a("span",["中国银行"==e.bank_bank?a("img",{attrs:{src:t.zhongguo}}):t._e()])]),a("td",[a("span",{on:{click:function(a){return t.bankClick(e.bank_bank,e.bank_id,e.bank_person)}}},[t._v(t._s(e.bank_bank))])]),a("td",[a("span",[t._v(t._s(e.bank_person))])]),a("td",[a("span",{on:{click:function(a){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[t._v("￥"+t._s(e.bank_money))])])])}))],2),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc cc"},[t._v("C/C")]),a("div",{staticClass:"saving"},[t._v("信用卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.XinYongKa))])]),a("table",{staticClass:"table-xin"},[a("tr",[a("th",[a("span",{style:t.lefta})]),a("th",[a("span",[t._v("开户行")])]),a("th",[a("span",[t._v("户主")])]),a("th",[a("span",[t._v("余额")])]),a("th",[a("span",[t._v("额度")])])]),t._l(t.xinY,(function(e){return a("tr",[a("td",[a("span",["民生信用"==e.bank_bank?a("img",{attrs:{src:t.minsheng}}):t._e()]),a("span",["建设信用"==e.bank_bank?a("img",{attrs:{src:t.jianshe}}):t._e()]),a("span",["交通信用"==e.bank_bank?a("img",{attrs:{src:t.jiaotong}}):t._e()]),a("span",["中行信用"==e.bank_bank?a("img",{attrs:{src:t.zhonghang}}):t._e()]),a("span",["蚂蚁花呗"==e.bank_bank?a("img",{attrs:{src:t.mayi}}):t._e()]),a("span",["华夏信用"==e.bank_bank?a("img",{attrs:{src:t.huaxiayinhang}}):t._e()]),a("span",["浦发信用"==e.bank_bank?a("img",{attrs:{src:t.pufa}}):t._e()]),a("span",["上海信用"==e.bank_bank?a("img",{attrs:{src:t.shanghai}}):t._e()]),a("span",["招商信用"==e.bank_bank?a("img",{attrs:{src:t.zhaoshang}}):t._e()]),a("span",["农业信用"==e.bank_bank?a("img",{attrs:{src:t.nongye}}):t._e()]),a("span",["平安信用"==e.bank_bank?a("img",{attrs:{src:t.pingan}}):t._e()]),a("span",["兴业信用"==e.bank_bank?a("img",{attrs:{src:t.xingye}}):t._e()]),a("span",["工商信用"==e.bank_bank?a("img",{attrs:{src:t.gonghang}}):t._e()]),a("span",["中原信用"==e.bank_bank?a("img",{attrs:{src:t.zhongyuan}}):t._e()])]),a("td",[a("span",{on:{click:function(a){return t.bankClick(e.bank_bank,e.bank_id,e.bank_person)}}},[t._v(t._s(e.bank_bank))])]),a("td",[a("span",[t._v(t._s(e.bank_person))])]),a("td",[a("span",[t._v("￥"+t._s(e.bank_money))])]),a("td",[a("span",{on:{click:function(a){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[t._v("￥"+t._s(e.bank_limit))])])])}))],2)])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer"},[a("h2",[t._v("收入")]),a("p",[t._v("/Income")])])}],s={name:"income",data(){return{imgUrl_loading:!1,category:!0,cotrProjet:!1,idProjet:!0,relevant_people:!0,site_projet:!0,dataValue1:(new Date).toString(),bank_id:0,sitePrihet:"",mongey_bank_id:"",mongey_bank:"",list_fund_name_type:[],detailed:"",list_fund_names:[],slim:"",list_fund_name:[],listRelevant:"",listRelevant_id:"",radio:"1",list_bank_card_person:[{text:"胡永生"},{text:"邱梅"}],site:"",money:"",money_rate:"",list_money_rate:[{text:.6},{text:.55},{text:.38}],money_get:"",account:"",clearBei:"",checkbox:"",prosen_name:"",fund_detail_id:"",bank_card:"",chuXu:"",xinY:"",chuXuKa:"",XinYongKa:"",allTotal:"",list_fund_names:"",list_fund_name:"",test_id:"",baoshang:a("a715"),baocun:a("2d0b"),gonghang:a("024f"),huaxiayinhang:a("2b6c"),jianshe:a("abea"),jiaotong:a("e601"),mayi:a("c0cf"),minsheng:a("5b2d"),nongcun:a("7f15"),nonghang:a("875c"),pingan:a("3a15"),pufa:a("cbb1"),shanghai:a("c5f4"),weixin:a("99ea"),xingye:a("ac01"),zhaoshang:a("52e1"),zhifubao:a("eefb"),zhonghang:a("82ee"),zhongyuan:a("e0d8"),xianjinmong:a("6c10"),zhongguo:a("a461"),nongye:a("6554"),lefta:{paddingLeft:"10px"}}},created(){this.imgUrl_loading=!0,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.list_fund_name_type=t.data.fund_name_type)}),this.axios.get("/fund/select_bank").then(t=>{this.bank_card=t.data;var e=[],a=[],n=0,i=0,s=0;for(var o in t.data)"储蓄卡"===t.data[o].bank_type?(n+=t.data[o].bank_money,e.push(t.data[o])):"信用卡"===t.data[o].bank_type&&(t.data[o].bank_money>0&&(i+=t.data[o].bank_money),a.push(t.data[o]));this.chuXu=e,this.xinY=a,this.chuXuKa=Math.floor(100*n)/100,this.XinYongKa=Math.floor(100*i)/100,s+=this.chuXuKa+this.XinYongKa,this.allTotal=Math.floor(100*s)/100}),this.site=window.test,this.test_id=window.test_id,this.listRelevant=window.fund_people,this.listRelevant_id=window.fund_people_name},computed:{money_actual:{get:function(){if(""===this.money_rate||void 0===this.money_rate){var t=this.money;return t}t=this.money-this.money*this.money_rate/100;var e=Math.floor(100*t)/100;return this.money_get=e,e},set:function(t){this.money_get=t}}},methods:{fund_deId(t){this.fund_nameso=t,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_detail_id?(this.category=!1,this.site_projet=!1,this.relevant_people=!0):"公司"===this.fund_detail_id&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.relevant_people=!0,this.site_projet=!0)})},list_fund_nameas(t){this.fund_name=t,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso+"&fund_names="+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"外借款"===this.detailed?(this.site_projet=!1,this.relevant_people=!0):"工程"===this.detailed&&(this.relevant_people=!0,this.site_projet=!0)})},list_fund_namea(t){this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso+"&fund_names="+this.fund_name+"&fund_name"+t).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name})},onSwipeLeft:function(){this.$router.push({name:"expenditure"})},onSwipeRight:function(){this.$router.push({name:"transfer_money"})},siteChange(){var t="income";this.$router.push({path:"siteList"}),window.expenditure=t},relecantProsen(){var t="income";this.$router.push({path:"relevant_people"}),window.prosen=t},bankClick(t,e,a){var n=t+" "+a;this.mongey_bank=n,this.mongey_bank_id=e},msgCu(t,e,a){var n="?&bank_person="+e+"&bank_bank="+t;void 0!==a&&(n+="&bank_number="+a);var i="transfer";this.axios.get("/fund/select_detail"+n).then(t=>{window.transfer=t.data.list_moey,this.$router.push({path:"running_money",query:{transfer:i}})})},add(){var t=this,e=/^\d+(\.\d+)?$/,a="?";if(""==this.fund_detail_id)return mui.toast("类别选择不能为空"),!1,!1;if(void 0!==this.site&&void 0!==this.test_id&&(a+="customer_id="+this.test_id),void 0!==this.listRelevant&&void 0!==this.listRelevant_id&&(a+="&fund_person="+this.listRelevant_id),"个人"===this.fund_detail_id?a+="fund_name="+this.detailed:"公司"===this.fund_detail_id&&(a+="&fund_name="+this.slim),""==this.money)return mui.toast("金额不能为空"),!1,!1;if(!e.test(this.money))return mui.toast("金额只能为纯数字"),!1,!1;if(""==this.mongey_bank_id)return mui.toast("转入账户不能为空"),!1,!1;var n=new Date(this.dataValue1),i=n.getFullYear(),s=n.getMonth()+1,o=n.getDate(),r=n.getHours(),l=n.getMinutes(),_=n.getSeconds(),u=`${i}-${s}-${o} ${r}:${l}:${_}`;this.imgUrl_loading=!0;var d="";""===this.money_get?d+=this.money:d+=this.money_get,a+="&money="+this.money+"&fund_text="+this.clearBei+"&bank_id="+this.mongey_bank_id+"&shiji_money="+d+"&date="+u,!0===this.checkbox?this.axios.post("/fund/Add_out_enter"+a).then(e=>{for(var a in this.listProjet)this.listProjet[a].customer_id===this.site&&this.listProjet[a].customer_name;200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,(function(){t.$router.push({name:"income_receive",query:{money:t.money_get}})})))}):this.axios.post("/fund/Add_out_enter"+a).then(e=>{200===e.status&&(this.imgUrl_loading=!1,"录入成功"===e.data.data&&mui.alert("录入成功",(function(){t.$router.go(0)})))})}}},o=s,r=(a("0ed2"),a("6691")),l=Object(r["a"])(o,n,i,!1,null,"b4867ad6",null);e["default"]=l.exports},"0ed2":function(t,e,a){"use strict";var n=a("e2f0"),i=a.n(n);i.a},e2f0:function(t,e,a){}}]);