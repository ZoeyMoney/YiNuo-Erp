(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31b9016c"],{"08f4":function(e,t,a){"use strict";var n=a("3ee2"),i=a.n(n);i.a},"0d0d":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"income"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"cash_flow"}}}),a("h1",{staticClass:"mui-title"},[e._v("收入")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:e.imgUrl_loading,expression:"imgUrl_loading"}]}),a("div",{staticClass:"mui-content one-img"},[e._m(0),a("div",{staticClass:"mui-img"},[a("div",[e._v("￥"+e._s(e.allTotal))])])]),a("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:e.onSwipeLeft,swiperight:e.onSwipeRight}},[a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[e.site_projet?a("div",{staticClass:"mui-input-row site_projet"},[a("label",[e._v("工地名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.site,expression:"site"}],attrs:{type:"text",placeholder:"请选择"},domProps:{value:e.site},on:{click:e.siteChange,input:function(t){t.target.composing||(e.site=t.target.value)}}})]):e._e(),e.relevant_people?a("div",{staticClass:"mui-input-row relevant_people"},[a("label",[e._v("相关人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.listRelevant,expression:"listRelevant"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请选择相关人"},domProps:{value:e.listRelevant},on:{click:e.relecantProsen,input:function(t){t.target.composing||(e.listRelevant=t.target.value)}}})]):e._e(),a("div",{staticClass:"mui-input-row radio-left"},[a("label",[e._v("类别选择")]),e._l(e.list_fund_name_type,function(t,n){return a("div",{key:n,staticClass:"mui-input-row mui-radio mui-left"},[a("label",[e._v(e._s(t.fund_name_type))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fund_detail_id,expression:"fund_detail_id"}],attrs:{name:"radio1",type:"radio"},domProps:{value:t.fund_name_type,checked:e._q(e.fund_detail_id,t.fund_name_type)},on:{change:[function(a){e.fund_detail_id=t.fund_name_type},function(t){return e.fund_deId(e.fund_detail_id)}]}})])})],2),a("div",{staticClass:"mui-input-row"},[a("label",[e._v("款项名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.detailed,expression:"detailed"}],class:{select:""===e.detailed,selectBlack:""!==e.detailed},attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.detailed=t.target.multiple?a:a[0]},function(t){return e.list_fund_nameas(e.detailed)}]}},[a("option",{staticStyle:{color:"#6e6e6e"},attrs:{value:"",selected:"selected"}},[e._v("请选择")]),e._l(e.list_fund_names,function(t,n){return e.cotrProjet?a("option",{key:n,domProps:{value:t.fund_names}},[e._v(e._s(t.fund_names))]):e._e()}),e._l(e.list_fund_names,function(t,n){return e.idProjet?a("option",{key:n,domProps:{value:t.fund_name_id}},[e._v(e._s(t.fund_names))]):e._e()})],2)]),e.category?a("div",{staticClass:"mui-input-row"},[a("label",[e._v("款项详细")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.slim,expression:"slim"}],class:{select:""===e.slim,selectBlack:""!==e.slim},attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.slim=t.target.multiple?a:a[0]},function(t){return e.list_fund_namea(e.slim)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("请选择")]),e._l(e.list_fund_name,function(t,n){return a("option",{key:n,domProps:{value:t.fund_name_id}},[e._v(e._s(t.fund_name))])})],2),a("select",{directives:[{name:"model",rawName:"v-model",value:e.slim,expression:"slim"}],class:{select:""===e.slim,selectBlack:""!==e.slim},attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.slim=t.target.multiple?a:a[0]},function(t){return e.list_fund_namea(e.slim)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[e._v("请选择")]),e._l(e.list_fund_name,function(t){return a("option",{domProps:{value:t.fund_name_id}},[e._v(e._s(t.fund_name))])})],2)]):e._e(),a("data-value",{model:{value:e.dataValue1,callback:function(t){e.dataValue1=t},expression:"dataValue1"}}),a("div",{staticClass:"mui-input-row"},[a("label",[e._v("备注")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.clearBei,expression:"clearBei"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:e.clearBei},on:{input:function(t){t.target.composing||(e.clearBei=t.target.value)}}})]),a("div",{staticClass:"mui-input-row row-label"},[a("label",[e._v("转入账户")]),a("input",{attrs:{type:"text",placeholder:"请选择下列银行卡",disabled:"disabled"},domProps:{value:e.mongey_bank}})]),a("div",{staticClass:"mui-input-row"},[a("label",[e._v("金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:e.money},on:{input:function(t){t.target.composing||(e.money=t.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[e._v("手续费")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.money_rate,expression:"money_rate"}],class:{select:""===e.money_rate,selectBlack:""!==e.money_rate},attrs:{name:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.money_rate=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.list_money_rate,function(t,n){return a("option",{key:n,domProps:{value:t.text}},[e._v(e._s(t.text)+"%")])})],2),a("select",{directives:[{name:"model",rawName:"v-model",value:e.money_rate,expression:"money_rate"}],class:{select:""===e.money_rate,selectBlack:""!==e.money_rate},attrs:{name:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.money_rate=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.list_money_rate,function(t){return a("option",{domProps:{value:t.text}},[e._v(e._s(t.text)+"%")])})],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[e._v("实际收入")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.money_actual,expression:"money_actual"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:e.money_actual},on:{input:function(t){t.target.composing||(e.money_actual=t.target.value)}}})])],1),a("div",{staticClass:"mui-input-row mui-checkbox mui-left checkbox"},[a("label",[e._v("转为应付")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],attrs:{name:"checkbox1",value:"转为应付",type:"checkbox"},domProps:{checked:Array.isArray(e.checkbox)?e._i(e.checkbox,"转为应付")>-1:e.checkbox},on:{change:function(t){var a=e.checkbox,n=t.target,i=!!n.checked;if(Array.isArray(a)){var s="转为应付",o=e._i(a,s);n.checked?o<0&&(e.checkbox=a.concat([s])):o>-1&&(e.checkbox=a.slice(0,o).concat(a.slice(o+1)))}else e.checkbox=i}}})]),a("div",{staticClass:"mui-input-row form-btn"},[a("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:e.add}},[e._v("Transfers")])]),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc"},[e._v("B/C")]),a("div",{staticClass:"saving"},[e._v("储蓄卡")]),a("div",{staticClass:"all-money"},[e._v("￥"+e._s(e.chuXuKa))])]),a("table",{staticClass:"tables",attrs:{border:"0"}},[a("tr",[a("th",[a("span",{style:e.lefta})]),a("th",[a("span",[e._v("开户行")])]),a("th",[a("span",[e._v("户主")])]),a("th",[a("span",[e._v("余额")])])]),e._l(e.chuXu,function(t,n){return a("tr",{key:n},[a("td",[a("span",["建设银行"==t.bank_bank?a("img",{attrs:{src:e.jianshe}}):e._e()]),a("span",["工商银行"==t.bank_bank?a("img",{attrs:{src:e.gonghang}}):e._e()]),a("span",["现金"==t.bank_bank?a("img",{attrs:{src:e.xianjinmong}}):e._e()]),a("span",["微信"==t.bank_bank?a("img",{attrs:{src:e.weixin}}):e._e()]),a("span",["支付宝"==t.bank_bank?a("img",{attrs:{src:e.zhifubao}}):e._e()]),a("span",["农村信用社"==t.bank_bank?a("img",{attrs:{src:e.nongcun}}):e._e()]),a("span",["包商银行"==t.bank_bank?a("img",{attrs:{src:e.baoshang}}):e._e()]),a("span",["中原银行"==t.bank_bank?a("img",{attrs:{src:e.zhongyuan}}):e._e()]),a("span",["农业银行"==t.bank_bank?a("img",{attrs:{src:e.nongye}}):e._e()]),a("span",["中国银行"==t.bank_bank?a("img",{attrs:{src:e.zhongguo}}):e._e()])]),a("td",[a("span",{on:{click:function(a){return e.bankClick(t.bank_bank,t.bank_id,t.bank_person)}}},[e._v(e._s(t.bank_bank))])]),a("td",[a("span",[e._v(e._s(t.bank_person))])]),a("td",[a("span",{on:{click:function(a){return e.msgCu(t.bank_bank,t.bank_person,t.number)}}},[e._v("￥"+e._s(t.bank_money))])])])})],2),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc cc"},[e._v("C/C")]),a("div",{staticClass:"saving"},[e._v("信用卡")]),a("div",{staticClass:"all-money"},[e._v("￥"+e._s(e.XinYongKa))])]),a("table",{staticClass:"table-xin"},[a("tr",[a("th",[a("span",{style:e.lefta})]),a("th",[a("span",[e._v("开户行")])]),a("th",[a("span",[e._v("户主")])]),a("th",[a("span",[e._v("余额")])]),a("th",[a("span",[e._v("额度")])])]),e._l(e.xinY,function(t,n){return a("tr",{key:n},[a("td",[a("span",["民生信用"==t.bank_bank?a("img",{attrs:{src:e.minsheng}}):e._e()]),a("span",["建设信用"==t.bank_bank?a("img",{attrs:{src:e.jianshe}}):e._e()]),a("span",["交通信用"==t.bank_bank?a("img",{attrs:{src:e.jiaotong}}):e._e()]),a("span",["中行信用"==t.bank_bank?a("img",{attrs:{src:e.zhonghang}}):e._e()]),a("span",["蚂蚁花呗"==t.bank_bank?a("img",{attrs:{src:e.mayi}}):e._e()]),a("span",["华夏信用"==t.bank_bank?a("img",{attrs:{src:e.huaxiayinhang}}):e._e()]),a("span",["浦发信用"==t.bank_bank?a("img",{attrs:{src:e.pufa}}):e._e()]),a("span",["上海信用"==t.bank_bank?a("img",{attrs:{src:e.shanghai}}):e._e()]),a("span",["招商信用"==t.bank_bank?a("img",{attrs:{src:e.zhaoshang}}):e._e()]),a("span",["农业信用"==t.bank_bank?a("img",{attrs:{src:e.nongye}}):e._e()]),a("span",["平安信用"==t.bank_bank?a("img",{attrs:{src:e.pingan}}):e._e()]),a("span",["兴业信用"==t.bank_bank?a("img",{attrs:{src:e.xingye}}):e._e()]),a("span",["工商信用"==t.bank_bank?a("img",{attrs:{src:e.gonghang}}):e._e()]),a("span",["中原信用"==t.bank_bank?a("img",{attrs:{src:e.zhongyuan}}):e._e()])]),a("td",[a("span",{on:{click:function(a){return e.bankClick(t.bank_bank,t.bank_id,t.bank_person)}}},[e._v(e._s(t.bank_bank))])]),a("td",[a("span",[e._v(e._s(t.bank_person))])]),a("td",[a("span",{on:{click:function(a){return e.msgCu(t.bank_bank,t.bank_person,t.number)}}},[e._v("￥"+e._s(t.bank_money))])]),a("td",[a("span",[e._v("￥"+e._s(t.bank_limit))])])])})],2)])])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"customer"},[a("h2",[e._v("收入")]),a("p",[e._v("/Income")])])}],s={name:"income",data(){return{imgUrl_loading:!1,category:!0,cotrProjet:!1,idProjet:!0,relevant_people:!0,site_projet:!0,dataValue1:(new Date).toString(),bank_id:0,sitePrihet:"",mongey_bank_id:"",mongey_bank:"",list_fund_name_type:[],detailed:"",list_fund_names:[],slim:"",list_fund_name:[],listRelevant:"",listRelevant_id:"",radio:"1",list_bank_card_person:[{text:"胡永生"},{text:"邱梅"}],site:"",money:"",money_rate:"",list_money_rate:[{text:.6},{text:.55},{text:.38}],money_get:"",account:"",clearBei:"",checkbox:"",prosen_name:"",fund_detail_id:"公司",bank_card:"",chuXu:"",xinY:"",chuXuKa:"",XinYongKa:"",allTotal:"",list_fund_names:"",list_fund_name:"",test_id:"",baoshang:a("a715"),baocun:a("2d0b"),gonghang:a("024f"),huaxiayinhang:a("2b6c"),jianshe:a("abea"),jiaotong:a("e601"),mayi:a("c0cf"),minsheng:a("5b2d"),nongcun:a("7f15"),nonghang:a("875c"),pingan:a("3a15"),pufa:a("cbb1"),shanghai:a("c5f4"),weixin:a("99ea"),xingye:a("ac01"),zhaoshang:a("52e1"),zhifubao:a("eefb"),zhonghang:a("82ee"),zhongyuan:a("e0d8"),xianjinmong:a("6c10"),zhongguo:a("a461"),nongye:a("6554"),lefta:{paddingLeft:"10px"}}},created(){this.imgUrl_loading=!0,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0").then(e=>{200===e.status&&(this.imgUrl_loading=!1,this.list_fund_name_type=e.data.fund_name_type)}),this.axios.get("/fund/select_bank").then(e=>{this.bank_card=e.data;var t=[],a=[],n=0,i=0,s=0;for(var o in e.data)"储蓄卡"===e.data[o].bank_type?(n+=e.data[o].bank_money,t.push(e.data[o])):"信用卡"===e.data[o].bank_type&&(e.data[o].bank_money>0&&(i+=e.data[o].bank_money),a.push(e.data[o]));this.chuXu=t,this.xinY=a,this.chuXuKa=Math.floor(100*n)/100,this.XinYongKa=Math.floor(100*i)/100,s+=this.chuXuKa+this.XinYongKa,this.allTotal=Math.floor(100*s)/100}),this.site=window.test,this.test_id=window.test_id,this.listRelevant=window.fund_people,this.listRelevant_id=window.fund_people_name,this.fund_deId(),this.list_fund_nameas()},computed:{money_actual:{get:function(){if(""===this.money_rate||void 0===this.money_rate){var e=this.money;return e}e=this.money-this.money*this.money_rate/100;var t=Math.floor(100*e)/100;return this.money_get=t,t},set:function(e){this.money_get=e}}},methods:{fund_deId(e){this.fund_nameso=e,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type="+this.fund_detail_id).then(e=>{this.list_fund_name_type=e.data.fund_name_type,this.list_fund_names=e.data.fund_names,this.list_fund_name=e.data.fund_name,"个人"===this.fund_detail_id?(this.category=!1,this.site_projet=!1,this.relevant_people=!0):"公司"===this.fund_detail_id&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.relevant_people=!0,this.site_projet=!0)})},list_fund_nameas(e){this.fund_name=e,this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type="+this.fund_detail_id+"&fund_names="+e).then(e=>{this.list_fund_name_type=e.data.fund_name_type,this.list_fund_names=e.data.fund_names,this.list_fund_name=e.data.fund_name,"外借款"===this.detailed?(this.site_projet=!1,this.relevant_people=!0):"工程"===this.detailed&&(this.relevant_people=!0,this.site_projet=!0)})},list_fund_namea(e){this.axios.get("/fund/Select_three_fund_name?fund_type=0&fund_stale=0&fund_name_type="+this.fund_nameso+"&fund_names="+this.fund_name+"&fund_name"+e).then(e=>{this.list_fund_name_type=e.data.fund_name_type,this.list_fund_names=e.data.fund_names,this.list_fund_name=e.data.fund_name})},onSwipeLeft:function(){this.$router.push({name:"expenditure"})},onSwipeRight:function(){this.$router.push({name:"transfer_money"})},siteChange(){var e="income";this.$router.push({path:"siteList"}),window.expenditure=e},relecantProsen(){var e="income";this.$router.push({path:"relevant_people"}),window.prosen=e},bankClick(e,t,a){var n=e+" "+a;this.mongey_bank=n,this.mongey_bank_id=t},msgCu(e,t,a){var n="?&bank_person="+t+"&bank_bank="+e;void 0!==a&&(n+="&bank_number="+a);var i="transfer";this.axios.get("/fund/select_detail"+n).then(e=>{window.transfer=e.data.list_moey,this.$router.push({path:"running_money",query:{transfer:i}})})},add(){var e=this,t=/^\d+(\.\d+)?$/,a="?";if(""==this.fund_detail_id)return mui.toast("类别选择不能为空"),!1,!1;if(void 0!==this.site&&void 0!==this.test_id&&(a+="customer_id="+this.test_id),void 0!==this.listRelevant&&void 0!==this.listRelevant_id&&(a+="&fund_person="+this.listRelevant_id),"个人"===this.fund_detail_id?a+="&fund_name="+this.detailed:"公司"===this.fund_detail_id&&(a+="&fund_name="+this.slim),""==this.money)return mui.toast("金额不能为空"),!1,!1;if(!t.test(this.money))return mui.toast("金额只能为纯数字"),!1,!1;if(""==this.mongey_bank_id)return mui.toast("转入账户不能为空"),!1,!1;var n=new Date(this.dataValue1),i=n.getFullYear(),s=n.getMonth()+1,o=n.getDate(),r=n.getHours(),l=n.getMinutes(),_=n.getSeconds(),u=`${i}-${s}-${o} ${r}:${l}:${_}`;this.imgUrl_loading=!0;var d="";""===this.money_get?d+=this.money:d+=this.money_get,a+="&money="+this.money+"&fund_text="+this.clearBei+"&bank_id="+this.mongey_bank_id+"&shiji_money="+d+"&date="+u,!0===this.checkbox?this.axios.post("/fund/Add_out_enter"+a).then(t=>{for(var a in this.listProjet)this.listProjet[a].customer_id===this.site&&this.listProjet[a].customer_name;200===t.status&&(this.imgUrl_loading=!1,mui.alert(t.data.data,function(){e.$router.push({name:"income_receive",query:{money:e.money_get}})}))}):this.axios.post("/fund/Add_out_enter"+a).then(t=>{200===t.status&&(this.imgUrl_loading=!1,"录入成功"===t.data.data&&mui.alert("录入成功",function(){e.$router.go(0)}))})}}},o=s,r=(a("08f4"),a("2877")),l=Object(r["a"])(o,n,i,!1,null,"efa3e232",null);t["default"]=l.exports},"3ee2":function(e,t,a){}}]);