<<<<<<< HEAD:YiNuo/js/chunk-c37767d4.e450f239.js
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c37767d4"],{"5f2f":function(t,e,a){},"6c94":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"income"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"running_details"}}}),a("h1",{staticClass:"mui-title"},[t._v("修改")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._v("\n    收入\n    "),a("div",{staticClass:"mui-content one-img"}),a("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}},[a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[t.site_projet?a("div",{staticClass:"mui-input-row site_projet"},[a("label",[t._v("工地名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{type:"text",placeholder:"请输入工地名称"},domProps:{value:t.site},on:{keyup:function(e){return t.siteWhite(t.site)},input:function(e){e.target.composing||(t.site=e.target.value)}}}),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mui-table-view"},t._l(t.site_projet_name_search,function(e,n){return a("li",{key:n,staticClass:"mui-table-view-cell",on:{click:function(a){return t.siteItem(e.customer_name,e.customer_id)}}},[t._v(t._s(e.customer_name))])}),0)]):t._e(),t.relevant_people?a("div",{staticClass:"mui-input-row relevant_people"},[a("label",[t._v("相关人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.listRelevant,expression:"listRelevant"}],attrs:{type:"text",placeholder:"请输入相关人"},domProps:{value:t.listRelevant},on:{keyup:function(e){return t.listRelevantWhite(t.listRelevant)},input:function(e){e.target.composing||(t.listRelevant=e.target.value)}}}),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.releshow,expression:"releshow"}],staticClass:"mui-table-view"},t._l(t.relelist,function(e,n){return a("li",{key:n,staticClass:"mui-table-view-cell",on:{click:function(a){return t.releItem(e.fund_person,e.fund_person_id)}}},[t._v(t._s(e.fund_person))])}),0)]):t._e(),a("div",{staticClass:"mui-input-row radio-left"},[a("label",[t._v("类别选择")]),t._l(t.list_fund_name_type,function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:"原始数据"!=e.fund_name_type,expression:"item.fund_name_type !='原始数据'"}],key:n,staticClass:"mui-input-row mui-radio mui-left"},[a("label",[t._v(t._s(e.fund_name_type))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_detail_id,expression:"fund_detail_id"}],attrs:{name:"radio1",type:"radio"},domProps:{value:e.fund_name_type,checked:t._q(t.fund_detail_id,e.fund_name_type)},on:{change:[function(a){t.fund_detail_id=e.fund_name_type},function(e){return t.fund_deId(t.fund_detail_id)}]}})])})],2),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.detailed,expression:"detailed"}],class:{select:""===t.detailed,selectBlack:""!==t.detailed},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.detailed=e.target.multiple?a:a[0]},function(e){return t.list_fund_nameas(t.detailed)}]}},[a("option",{staticStyle:{color:"#6e6e6e"},attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e,n){return t.cotrProjet?a("option",{key:n,domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e,n){return t.idProjet?a("option",{key:n,domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项详细")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.slim,expression:"slim"}],class:{select:""===t.slim,selectBlack:""!==t.slim},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.slim=e.target.multiple?a:a[0]},function(e){return t.list_fund_namea(t.slim)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e,n){return a("option",{key:n,domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),a("data-value",{model:{value:t.dataValue1,callback:function(e){t.dataValue1=e},expression:"dataValue1"}}),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("备注")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clearBei,expression:"clearBei"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.clearBei},on:{input:function(e){e.target.composing||(t.clearBei=e.target.value)}}})]),a("div",{staticClass:"mui-input-row row-label"},[a("label",[t._v("转入账户")]),a("input",{attrs:{type:"text",placeholder:"请选择下列银行卡",disabled:"disabled"},domProps:{value:t.mongey_bank}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("手续费")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.money_rate,expression:"money_rate"}],class:{select:""===t.money_rate,selectBlack:""!==t.money_rate},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.money_rate=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_money_rate,function(e,n){return a("option",{key:n,domProps:{value:e.text}},[t._v(t._s(e.text)+"%")])})],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("实际收入")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money_actual,expression:"money_actual"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money_actual},on:{input:function(e){e.target.composing||(t.money_actual=e.target.value)}}})])],1),a("div",{staticClass:"mui-input-row form-btn"},[a("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.add}},[t._v("保存")])]),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc"},[t._v("B/C")]),a("div",{staticClass:"saving"},[t._v("储蓄卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.chuXuKa))])]),a("table",{staticClass:"tables",attrs:{border:"0"}},[a("tr",[a("th",[a("span",{style:t.lefta})]),a("th",[a("span",[t._v("开户行")])]),a("th",[a("span",[t._v("户主")])]),a("th",[a("span",[t._v("余额")])])]),t._l(t.chuXu,function(e,n){return a("tr",{key:n},[a("td",[a("span",["建设银行"==e.bank_bank?a("img",{attrs:{src:t.jianshe}}):t._e()]),a("span",["工商银行"==e.bank_bank?a("img",{attrs:{src:t.gonghang}}):t._e()]),a("span",["现金"==e.bank_bank?a("img",{attrs:{src:t.xianjinmong}}):t._e()]),a("span",["微信"==e.bank_bank?a("img",{attrs:{src:t.weixin}}):t._e()]),a("span",["支付宝"==e.bank_bank?a("img",{attrs:{src:t.zhifubao}}):t._e()]),a("span",["农村信用社"==e.bank_bank?a("img",{attrs:{src:t.nongcun}}):t._e()]),a("span",["包商银行"==e.bank_bank?a("img",{attrs:{src:t.baoshang}}):t._e()]),a("span",["中原银行"==e.bank_bank?a("img",{attrs:{src:t.zhongyuan}}):t._e()]),a("span",["农业银行"==e.bank_bank?a("img",{attrs:{src:t.nongye}}):t._e()]),a("span",["中国银行"==e.bank_bank?a("img",{attrs:{src:t.zhongguo}}):t._e()])]),a("td",[a("span",{on:{click:function(a){return t.bankClick(e.bank_bank,e.bank_id,e.bank_person)}}},[t._v(t._s(e.bank_bank))])]),a("td",[a("span",[t._v(t._s(e.bank_person))])]),a("td",[a("span",{on:{click:function(a){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[t._v("￥"+t._s(e.bank_money))])])])})],2),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc cc"},[t._v("C/C")]),a("div",{staticClass:"saving"},[t._v("信用卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.XinYongKa))])]),a("table",{staticClass:"table-xin"},[a("tr",[a("th",[a("span",{style:t.lefta})]),a("th",[a("span",[t._v("开户行")])]),a("th",[a("span",[t._v("户主")])]),a("th",[a("span",[t._v("余额")])]),a("th",[a("span",[t._v("额度")])])]),t._l(t.xinY,function(e,n){return a("tr",{key:n},[a("td",[a("span",["民生信用"==e.bank_bank?a("img",{attrs:{src:t.minsheng}}):t._e()]),a("span",["建设信用"==e.bank_bank?a("img",{attrs:{src:t.jianshe}}):t._e()]),a("span",["交通信用"==e.bank_bank?a("img",{attrs:{src:t.jiaotong}}):t._e()]),a("span",["中行信用"==e.bank_bank?a("img",{attrs:{src:t.zhonghang}}):t._e()]),a("span",["蚂蚁花呗"==e.bank_bank?a("img",{attrs:{src:t.mayi}}):t._e()]),a("span",["华夏信用"==e.bank_bank?a("img",{attrs:{src:t.huaxiayinhang}}):t._e()]),a("span",["浦发信用"==e.bank_bank?a("img",{attrs:{src:t.pufa}}):t._e()]),a("span",["上海信用"==e.bank_bank?a("img",{attrs:{src:t.shanghai}}):t._e()]),a("span",["招商信用"==e.bank_bank?a("img",{attrs:{src:t.zhaoshang}}):t._e()]),a("span",["农业信用"==e.bank_bank?a("img",{attrs:{src:t.nongye}}):t._e()]),a("span",["平安信用"==e.bank_bank?a("img",{attrs:{src:t.pingan}}):t._e()]),a("span",["兴业信用"==e.bank_bank?a("img",{attrs:{src:t.xingye}}):t._e()]),a("span",["工商信用"==e.bank_bank?a("img",{attrs:{src:t.gonghang}}):t._e()]),a("span",["中原信用"==e.bank_bank?a("img",{attrs:{src:t.zhongyuan}}):t._e()])]),a("td",[a("span",{on:{click:function(a){return t.bankClick(e.bank_bank,e.bank_id,e.bank_person)}}},[t._v(t._s(e.bank_bank))])]),a("td",[a("span",[t._v(t._s(e.bank_person))])]),a("td",[a("span",{on:{click:function(a){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[t._v("￥"+t._s(e.bank_money))])]),a("td",[a("span",[t._v("￥"+t._s(e.bank_limit))])])])})],2)])])],1)},i=[],s={name:"income",data(){return{imgUrl_loading:!1,category:!0,cotrProjet:!1,idProjet:!0,relevant_people:!0,site_projet:"",dataValue1:"",bank_id:"",sitePrihet:"",mongey_bank_id:"",mongey_bank:"",list_fund_name_type:[""],detailed:"",list_fund_names:[],slim:"",list_fund_name:[],listRelevant:"",listRelevant_id:"",radio:"1",list_bank_card_person:[{text:"胡永生"},{text:"邱梅"}],site:"",money:"",money_rate:"",list_money_rate:[{text:.6},{text:.55},{text:.38}],money_get:"",account:"",clearBei:"",checkbox:"",prosen_name:"",fund_detail_id:"",fund_detail_ids:"",bank_card:"",chuXu:"",xinY:"",chuXuKa:"",XinYongKa:"",allTotal:"",list_fund_names:"",list_fund_name:"",site_projet_name:"",site_projet_name_search:[],relefor:"",relelist:[],releshow:!1,test_id:"",fund_id:"",list:"",customer_id:"",fund_detail_transaction_id:"",fund_name_id:"",fund_date:"",isshow:!1,fund_name:"",fund_nameso:"",baoshang:a("a715"),baocun:a("2d0b"),gonghang:a("024f"),huaxiayinhang:a("2b6c"),jianshe:a("abea"),jiaotong:a("e601"),mayi:a("c0cf"),minsheng:a("5b2d"),nongcun:a("7f15"),nonghang:a("875c"),pingan:a("3a15"),pufa:a("cbb1"),shanghai:a("c5f4"),weixin:a("99ea"),xingye:a("ac01"),zhaoshang:a("52e1"),zhifubao:a("eefb"),zhonghang:a("82ee"),zhongyuan:a("e0d8"),xianjinmong:a("6c10"),zhongguo:a("a461"),nongye:a("6554"),lefta:{paddingLeft:"10px"}}},methods:{fund_deId(t){this.fund_nameso=t,this.axios.get("/fund/Select_three_fund_name?fund_stale=0&fund_name_type="+this.fund_detail_id).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_detail_id?(this.category=!1,this.site_projet=!1,this.relevant_people=!0,this.idProjet=!0,this.cotrProjet=!1):"公司"===this.fund_detail_id&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.relevant_people=!0,this.site_projet=!0)})},list_fund_nameas(t){this.axios.get("/fund/Select_three_fund_name?fund_stale=0&fund_name_type="+this.fund_detail_id+"&fund_names="+this.fund_name).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"外借款"===this.detailed?(this.site_projet=!1,this.relevant_people=!0):"工程"===this.detailed&&(this.relevant_people=!0,this.site_projet=!0)})},list_fund_namea(t){this.axios.get("/fund/Select_three_fund_name?fund_stale=0&fund_name_type="+this.fund_detail_id+"&fund_names="+this.fund_name+"&fund_name="+this.slim).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name})},siteItem(t,e){this.site=t,this.test_id=e,this.isshow=!1},releItem(t,e){this.listRelevant=t,this.listRelevant_id=e,this.releshow=!1},onSwipeLeft:function(){this.$router.push({name:"expenditure"})},onSwipeRight:function(){this.$router.push({name:"transfer_money"})},bankClick(t,e,a){var n=t+" "+a;this.mongey_bank=n,this.mongey_bank_id=e},msgCu(t,e,a){this.imgUrl_loading=!0;var n="?&bank_person="+e+"&bank_bank="+t;void 0!==a&&(n+="&bank_number="+a);var i="transfer";this.axios.get("/fund/select_detail"+n).then(t=>{200===t.status&&(this.imgUrl_loading=!1,window.transfer=t.data.list_moey,this.$router.push({path:"running_money",query:{transfer:i}}))})},siteData(){this.axios.get("/SelectAllCustomer?Customer_A=1&Customer_B=2&Customer_C=3&Customer_D=4").then(t=>{200===t.status&&(this.site_projet_name=t.data.data)})},person_all(){this.axios.get("/fund/Select_fund_person?fund_person_state_A=1").then(t=>{200===t.status&&(this.relefor=t.data.data)})},siteWhite(t){if(0==t.length)this.isshow=!1;else{this.isshow=!0;var e=this,a=[];""!=this.site_projet_name&&(this.site_projet_name.map(function(t){-1!=t.customer_name.search(e.site)&&a.push(t)}),this.site_projet_name_search=a)}},listRelevantWhite(t){if(0==t.length)this.releshow=!1;else{this.releshow=!0;var e=this,a=[];""!=this.relefor&&(this.relefor.map(function(t){-1!=t.fund_person.search(e.listRelevant)&&a.push(t)}),this.relelist=a)}},add(){var t=this,e=/^\d+(\.\d+)?$/,a="?";if(""!=this.site&&(a+="customer_id="+this.test_id),""!=this.listRelevant&&(a+="&fund_person="+this.listRelevant_id),""==this.fund_detail_id)return mui.toast("类别选择不能为空"),!1,!1;if("个人"===this.fund_detail_id?a+="&fund_name="+this.detailed:"公司"===this.fund_detail_id&&(a+="&fund_name="+this.slim),""==this.money)return mui.toast("金额不能为空"),!1,!1;if(!e.test(this.money))return mui.toast("金额只能为纯数字"),!1,!1;if(""==this.bank_id)return mui.toast("转入账户不能为空"),!1,!1;var n=new Date(this.dataValue1),i=n.getFullYear(),s=n.getMonth()+1,_=n.getDate(),l=n.getHours(),o=n.getMinutes(),r=n.getSeconds(),d=`${i}-${s}-${_} ${l}:${o}:${r}`;""===this.money_get?this.money:this.money_get,a+="&fund_money="+this.money+"&fund_text="+this.clearBei+"&fund_detail_transaction_bank_id="+this.bank_id+"&fund_id="+this.fund_id+"&fund_date="+d+"&fund_details_id="+this.fund_detail_ids+"&fund_detail_transaction_id="+this.fund_detail_transaction_id+"&fund_customer_id="+this.customer_id,!0===this.checkbox?this.axios.post("fund/Update_money"+a).then(e=>{for(var a in this.listProjet)this.listProjet[a].customer_id===this.site&&this.listProjet[a].customer_name;200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,function(){t.$router.push({name:"income_receive",query:{money:t.money_get}})}))}):this.axios.get("/fund/Update_money"+a).then(e=>{200===e.status&&(this.imgUrl_loading=!1,"修改成功"===e.data.data&&mui.alert("修改成功",function(){t.$router.push({name:"running_money"})}))})}},created(){var t=location.href,e=t.length,a=t.indexOf("="),n=decodeURI(t.substr(a+1,e-a));this.fund_details_id=n,this.list=JSON.parse(localStorage.msg),this.bank_id=this.list.bank_id,this.mongey_bank=this.list.bank_person+this.list.bank_bank,this.bank_bank=this.list.bank_bank,0===this.list.bank_deal_money?this.money=this.list.fund_detail_transaction_money:0===this.list.fund_detail_transaction_money&&(this.money=this.list.bank_deal_money),console.log(JSON.parse(localStorage.msg)),this.dates=this.list.dates,this.fund_detail_ids=this.list.fund_detail_id,this.customer_id=this.list.fund_detail_transaction_customer_id,this.listRelevant_id=this.list.fund_person_id,this.fund_detail_id=this.list.fund_name_type,this.dataValue1=this.list.dates,this.site=this.list.customer_name,this.fund_details_batch=this.list.fund_details_batch,this.test_id=this.list.fund_detail_transaction_customer_id,"个人"==this.fund_detail_id?this.detailed=this.list.fund_name_id:this.detailed=this.list.fund_names,this.slim=this.list.fund_name_id,this.fund_name=this.list.fund_names,this.listRelevant=this.list.fund_person,this.clearBei=this.list.fund_details_text,this.fund_id=this.list.fund_id,this.fund_detail_transaction_id=this.list.fund_detail_transaction_id,this.imgUrl_loading=!0,this.siteData(),this.person_all(),this.axios.get("/fund/Select_three_fund_name?fund_stale=0").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.list_fund_name_type=t.data.fund_name_type)}),this.axios.get("/fund/select_bank").then(t=>{this.bank_card=t.data;var e=[],a=[],n=0,i=0,s=0;for(var _ in t.data)"储蓄卡"===t.data[_].bank_type?(n+=t.data[_].bank_money,e.push(t.data[_])):"信用卡"===t.data[_].bank_type&&(t.data[_].bank_money>0&&(i+=t.data[_].bank_money),a.push(t.data[_]));this.chuXu=e,this.xinY=a,this.chuXuKa=Math.floor(100*n)/100,this.XinYongKa=Math.floor(100*i)/100,s+=this.chuXuKa+this.XinYongKa,this.allTotal=Math.floor(100*s)/100}),this.fund_deId(),this.list_fund_nameas(),this.list_fund_namea()},computed:{money_actual:{get:function(){if(""===this.money_rate||void 0===this.money_rate){var t=this.money;return t}t=this.money-this.money*this.money_rate/100;var e=Math.floor(100*t)/100;return this.money_get=e,e},set:function(t){this.money_get=t}}},watch:{}},_=s,l=(a("c982"),a("2877")),o=Object(l["a"])(_,n,i,!1,null,"6a313eb4",null);e["default"]=o.exports},c982:function(t,e,a){"use strict";var n=a("5f2f"),i=a.n(n);i.a}}]);
=======
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6ec8a84"],{"57a1":function(t,e,a){},"6c94":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"income"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"running_details"}}}),a("h1",{staticClass:"mui-title"},[t._v("修改")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._v("\n    收入\n    "),a("div",{staticClass:"mui-content one-img"}),a("v-touch",{attrs:{"swipe-options":{direction:"horizontal"}},on:{swipeleft:t.onSwipeLeft,swiperight:t.onSwipeRight}},[a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[t.site_projet?a("div",{staticClass:"mui-input-row site_projet"},[a("label",[t._v("工地名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{type:"text",placeholder:"请输入工地名称"},domProps:{value:t.site},on:{keyup:function(e){return t.siteWhite(t.site)},input:function(e){e.target.composing||(t.site=e.target.value)}}}),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"mui-table-view"},t._l(t.site_projet_name_search,function(e,n){return a("li",{key:n,staticClass:"mui-table-view-cell",on:{click:function(a){return t.siteItem(e.customer_name,e.customer_id)}}},[t._v(t._s(e.customer_name))])}),0)]):t._e(),t.relevant_people?a("div",{staticClass:"mui-input-row relevant_people"},[a("label",[t._v("相关人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.listRelevant,expression:"listRelevant"}],attrs:{type:"text",placeholder:"请输入相关人"},domProps:{value:t.listRelevant},on:{keyup:function(e){return t.listRelevantWhite(t.listRelevant)},input:function(e){e.target.composing||(t.listRelevant=e.target.value)}}}),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.releshow,expression:"releshow"}],staticClass:"mui-table-view"},t._l(t.relelist,function(e,n){return a("li",{key:n,staticClass:"mui-table-view-cell",on:{click:function(a){return t.releItem(e.fund_person,e.fund_person_id)}}},[t._v(t._s(e.fund_person))])}),0)]):t._e(),a("div",{staticClass:"mui-input-row radio-left"},[a("label",[t._v("类别选择")]),t._l(t.list_fund_name_type,function(e,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:"原始数据"!=e.fund_name_type,expression:"item.fund_name_type !='原始数据'"}],key:n,staticClass:"mui-input-row mui-radio mui-left"},[a("label",[t._v(t._s(e.fund_name_type))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fund_detail_id,expression:"fund_detail_id"}],attrs:{name:"radio1",type:"radio"},domProps:{value:e.fund_name_type,checked:t._q(t.fund_detail_id,e.fund_name_type)},on:{change:[function(a){t.fund_detail_id=e.fund_name_type},function(e){return t.fund_deId(t.fund_detail_id)}]}})])})],2),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.detailed,expression:"detailed"}],class:{select:""===t.detailed,selectBlack:""!==t.detailed},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.detailed=e.target.multiple?a:a[0]},function(e){return t.list_fund_nameas(t.detailed)}]}},[a("option",{staticStyle:{color:"#6e6e6e"},attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_names,function(e,n){return t.cotrProjet?a("option",{key:n,domProps:{value:e.fund_names}},[t._v(t._s(e.fund_names))]):t._e()}),t._l(t.list_fund_names,function(e,n){return t.idProjet?a("option",{key:n,domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_names))]):t._e()})],2)]),t.category?a("div",{staticClass:"mui-input-row"},[a("label",[t._v("款项详细")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.slim,expression:"slim"}],class:{select:""===t.slim,selectBlack:""!==t.slim},attrs:{name:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.slim=e.target.multiple?a:a[0]},function(e){return t.list_fund_namea(t.slim)}]}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_fund_name,function(e,n){return a("option",{key:n,domProps:{value:e.fund_name_id}},[t._v(t._s(e.fund_name))])})],2)]):t._e(),a("data-value",{model:{value:t.dataValue1,callback:function(e){t.dataValue1=e},expression:"dataValue1"}}),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("备注")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.clearBei,expression:"clearBei"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入备注"},domProps:{value:t.clearBei},on:{input:function(e){e.target.composing||(t.clearBei=e.target.value)}}})]),a("div",{staticClass:"mui-input-row row-label"},[a("label",[t._v("转入账户")]),a("input",{attrs:{type:"text",placeholder:"请选择下列银行卡",disabled:"disabled"},domProps:{value:t.mongey_bank}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.money},on:{input:function(e){e.target.composing||(t.money=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("手续费")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.money_rate,expression:"money_rate"}],class:{select:""===t.money_rate,selectBlack:""!==t.money_rate},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.money_rate=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_money_rate,function(e,n){return a("option",{key:n,domProps:{value:e.text}},[t._v(t._s(e.text)+"%")])})],2)]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("实际收入")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.money_actual,expression:"money_actual"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入金额"},domProps:{value:t.money_actual},on:{input:function(e){e.target.composing||(t.money_actual=e.target.value)}}})])],1),a("div",{staticClass:"mui-input-row form-btn"},[a("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.add}},[t._v("保存")])]),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc"},[t._v("B/C")]),a("div",{staticClass:"saving"},[t._v("储蓄卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.chuXuKa))])]),a("table",{staticClass:"tables",attrs:{border:"0"}},[a("tr",[a("th",[a("span",{style:t.lefta})]),a("th",[a("span",[t._v("开户行")])]),a("th",[a("span",[t._v("户主")])]),a("th",[a("span",[t._v("余额")])])]),t._l(t.chuXu,function(e,n){return a("tr",{key:n},[a("td",[a("span",["建设银行"==e.bank_bank?a("img",{attrs:{src:t.jianshe}}):t._e()]),a("span",["工商银行"==e.bank_bank?a("img",{attrs:{src:t.gonghang}}):t._e()]),a("span",["现金"==e.bank_bank?a("img",{attrs:{src:t.xianjinmong}}):t._e()]),a("span",["微信"==e.bank_bank?a("img",{attrs:{src:t.weixin}}):t._e()]),a("span",["支付宝"==e.bank_bank?a("img",{attrs:{src:t.zhifubao}}):t._e()]),a("span",["农村信用社"==e.bank_bank?a("img",{attrs:{src:t.nongcun}}):t._e()]),a("span",["包商银行"==e.bank_bank?a("img",{attrs:{src:t.baoshang}}):t._e()]),a("span",["中原银行"==e.bank_bank?a("img",{attrs:{src:t.zhongyuan}}):t._e()]),a("span",["农业银行"==e.bank_bank?a("img",{attrs:{src:t.nongye}}):t._e()]),a("span",["中国银行"==e.bank_bank?a("img",{attrs:{src:t.zhongguo}}):t._e()])]),a("td",[a("span",{on:{click:function(a){return t.bankClick(e.bank_bank,e.bank_id,e.bank_person)}}},[t._v(t._s(e.bank_bank))])]),a("td",[a("span",[t._v(t._s(e.bank_person))])]),a("td",[a("span",{on:{click:function(a){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[t._v("￥"+t._s(e.bank_money))])])])})],2),a("div",{staticClass:"mui-content all"},[a("div",{staticClass:"sc cc"},[t._v("C/C")]),a("div",{staticClass:"saving"},[t._v("信用卡")]),a("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.XinYongKa))])]),a("table",{staticClass:"table-xin"},[a("tr",[a("th",[a("span",{style:t.lefta})]),a("th",[a("span",[t._v("开户行")])]),a("th",[a("span",[t._v("户主")])]),a("th",[a("span",[t._v("余额")])]),a("th",[a("span",[t._v("额度")])])]),t._l(t.xinY,function(e,n){return a("tr",{key:n},[a("td",[a("span",["民生信用"==e.bank_bank?a("img",{attrs:{src:t.minsheng}}):t._e()]),a("span",["建设信用"==e.bank_bank?a("img",{attrs:{src:t.jianshe}}):t._e()]),a("span",["交通信用"==e.bank_bank?a("img",{attrs:{src:t.jiaotong}}):t._e()]),a("span",["中行信用"==e.bank_bank?a("img",{attrs:{src:t.zhonghang}}):t._e()]),a("span",["蚂蚁花呗"==e.bank_bank?a("img",{attrs:{src:t.mayi}}):t._e()]),a("span",["华夏信用"==e.bank_bank?a("img",{attrs:{src:t.huaxiayinhang}}):t._e()]),a("span",["浦发信用"==e.bank_bank?a("img",{attrs:{src:t.pufa}}):t._e()]),a("span",["上海信用"==e.bank_bank?a("img",{attrs:{src:t.shanghai}}):t._e()]),a("span",["招商信用"==e.bank_bank?a("img",{attrs:{src:t.zhaoshang}}):t._e()]),a("span",["农业信用"==e.bank_bank?a("img",{attrs:{src:t.nongye}}):t._e()]),a("span",["平安信用"==e.bank_bank?a("img",{attrs:{src:t.pingan}}):t._e()]),a("span",["兴业信用"==e.bank_bank?a("img",{attrs:{src:t.xingye}}):t._e()]),a("span",["工商信用"==e.bank_bank?a("img",{attrs:{src:t.gonghang}}):t._e()]),a("span",["中原信用"==e.bank_bank?a("img",{attrs:{src:t.zhongyuan}}):t._e()])]),a("td",[a("span",{on:{click:function(a){return t.bankClick(e.bank_bank,e.bank_id,e.bank_person)}}},[t._v(t._s(e.bank_bank))])]),a("td",[a("span",[t._v(t._s(e.bank_person))])]),a("td",[a("span",{on:{click:function(a){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[t._v("￥"+t._s(e.bank_money))])]),a("td",[a("span",[t._v("￥"+t._s(e.bank_limit))])])])})],2)])])],1)},i=[],s={name:"income",data(){return{imgUrl_loading:!1,category:!0,cotrProjet:!1,idProjet:!0,relevant_people:!0,site_projet:"",dataValue1:"",bank_id:"",sitePrihet:"",mongey_bank_id:"",mongey_bank:"",list_fund_name_type:[""],detailed:"",list_fund_names:[],slim:"",list_fund_name:[],listRelevant:"",listRelevant_id:"",radio:"1",list_bank_card_person:[{text:"胡永生"},{text:"邱梅"}],site:"",money:"",money_rate:"",list_money_rate:[{text:.6},{text:.55},{text:.38}],money_get:"",account:"",clearBei:"",checkbox:"",prosen_name:"",fund_detail_id:"",fund_detail_ids:"",bank_card:"",chuXu:"",xinY:"",chuXuKa:"",XinYongKa:"",allTotal:"",list_fund_names:"",list_fund_name:"",site_projet_name:"",site_projet_name_search:[],relefor:"",relelist:[],releshow:!1,test_id:"",fund_id:"",list:"",customer_id:"",fund_detail_transaction_id:"",fund_name_id:"",fund_date:"",isshow:!1,fund_name:"",fund_nameso:"",baoshang:a("a715"),baocun:a("2d0b"),gonghang:a("024f"),huaxiayinhang:a("2b6c"),jianshe:a("abea"),jiaotong:a("e601"),mayi:a("c0cf"),minsheng:a("5b2d"),nongcun:a("7f15"),nonghang:a("875c"),pingan:a("3a15"),pufa:a("cbb1"),shanghai:a("c5f4"),weixin:a("99ea"),xingye:a("ac01"),zhaoshang:a("52e1"),zhifubao:a("eefb"),zhonghang:a("82ee"),zhongyuan:a("e0d8"),xianjinmong:a("6c10"),zhongguo:a("a461"),nongye:a("6554"),lefta:{paddingLeft:"10px"}}},methods:{fund_deId(t){this.fund_nameso=t,this.axios.get("/fund/Select_three_fund_name?fund_stale=0&fund_name_type="+this.fund_detail_id).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"个人"===this.fund_detail_id?(this.category=!1,this.site_projet=!1,this.relevant_people=!0,this.idProjet=!0,this.cotrProjet=!1):"公司"===this.fund_detail_id&&(this.category=!0,this.cotrProjet=!0,this.idProjet=!1,this.relevant_people=!0,this.site_projet=!0)})},list_fund_nameas(t){this.axios.get("/fund/Select_three_fund_name?fund_stale=0&fund_name_type="+this.fund_detail_id+"&fund_names="+this.fund_name).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name,"外借款"===this.detailed?(this.site_projet=!1,this.relevant_people=!0):"工程"===this.detailed&&(this.relevant_people=!0,this.site_projet=!0)})},list_fund_namea(t){this.axios.get("/fund/Select_three_fund_name?fund_stale=0&fund_name_type="+this.fund_detail_id+"&fund_names="+this.fund_name+"&fund_name="+this.slim).then(t=>{this.list_fund_name_type=t.data.fund_name_type,this.list_fund_names=t.data.fund_names,this.list_fund_name=t.data.fund_name})},siteItem(t,e){this.site=t,this.test_id=e,this.customer_id=e,this.isshow=!1},releItem(t,e){this.listRelevant=t,this.listRelevant_id=e,this.releshow=!1},onSwipeLeft:function(){this.$router.push({name:"expenditure"})},onSwipeRight:function(){this.$router.push({name:"transfer_money"})},bankClick(t,e,a){var n=t+" "+a;this.mongey_bank=n,this.mongey_bank_id=e},msgCu(t,e,a){this.imgUrl_loading=!0;var n="?&bank_person="+e+"&bank_bank="+t;void 0!==a&&(n+="&bank_number="+a);var i="transfer";this.axios.get("/fund/select_detail"+n).then(t=>{200===t.status&&(this.imgUrl_loading=!1,window.transfer=t.data.list_moey,this.$router.push({path:"running_money",query:{transfer:i}}))})},siteData(){this.axios.get("/SelectAllCustomer?Customer_A=1&Customer_B=2&Customer_C=3&Customer_D=4").then(t=>{200===t.status&&(this.site_projet_name=t.data.data)})},person_all(){this.axios.get("/fund/Select_fund_person?fund_person_state_A=1").then(t=>{200===t.status&&(this.relefor=t.data.data)})},siteWhite(t){if(0==t.length)this.isshow=!1;else{this.isshow=!0;var e=this,a=[];""!=this.site_projet_name&&(this.site_projet_name.map(function(t){-1!=t.customer_name.search(e.site)&&(console.log(t),a.push(t))}),this.site_projet_name_search=a)}},listRelevantWhite(t){if(0==t.length)this.releshow=!1;else{this.releshow=!0;var e=this,a=[];""!=this.relefor&&(this.relefor.map(function(t){-1!=t.fund_person.search(e.listRelevant)&&a.push(t)}),this.relelist=a)}},add(){var t=this,e="?";if(""!=this.site&&(e+="fund_customer_id="+this.test_id),""!=this.listRelevant&&(e+="&fund_person="+this.listRelevant_id),""==this.fund_detail_id)return mui.toast("类别选择不能为空"),!1,!1;if("个人"===this.fund_detail_id?e+="&fund_name="+this.detailed:"公司"===this.fund_detail_id&&(e+="&fund_name="+this.slim),""==this.money)return mui.toast("金额不能为空"),!1,!1;if(""==this.bank_id)return mui.toast("转入账户不能为空"),!1,!1;var a=new Date(this.dataValue1),n=a.getFullYear(),i=a.getMonth()+1,s=a.getDate(),_=a.getHours(),l=a.getMinutes(),o=a.getSeconds(),r=`${n}-${i}-${s} ${_}:${l}:${o}`;""===this.money_get?this.money:this.money_get,e+="&fund_money="+this.money+"&fund_text="+this.clearBei+"&fund_detail_transaction_bank_id="+this.bank_id+"&fund_id="+this.fund_id+"&fund_date="+r+"&fund_details_id="+this.fund_detail_ids+"&fund_detail_transaction_id="+this.fund_detail_transaction_id,!0===this.checkbox?this.axios.post("fund/Update_money"+e).then(e=>{for(var a in this.listProjet)this.listProjet[a].customer_id===this.site&&this.listProjet[a].customer_name;200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,function(){t.$router.push({name:"income_receive",query:{money:t.money_get}})}))}):this.axios.get("/fund/Update_money"+e).then(e=>{200===e.status&&(this.imgUrl_loading=!1,"修改成功"===e.data.data&&mui.alert("修改成功",function(){t.$router.push({name:"running_money"})}))})}},created(){var t=location.href,e=t.length,a=t.indexOf("="),n=decodeURI(t.substr(a+1,e-a));this.fund_details_id=n,this.list=JSON.parse(localStorage.msg),this.bank_id=this.list.bank_id,this.mongey_bank=this.list.bank_person+this.list.bank_bank,this.bank_bank=this.list.bank_bank,0===this.list.bank_deal_money?this.money=this.list.fund_detail_transaction_money:0===this.list.fund_detail_transaction_money&&(this.money=this.list.bank_deal_money),console.log(JSON.parse(localStorage.msg)),this.dates=this.list.dates,this.fund_detail_ids=this.list.fund_detail_id,this.customer_id=this.list.fund_detail_transaction_customer_id,this.listRelevant_id=this.list.fund_person_id,this.fund_detail_id=this.list.fund_name_type,this.dataValue1=this.list.dates,this.site=this.list.customer_name,this.fund_details_batch=this.list.fund_details_batch,this.test_id=this.list.fund_detail_transaction_customer_id,"个人"==this.fund_detail_id?this.detailed=this.list.fund_name_id:this.detailed=this.list.fund_names,this.slim=this.list.fund_name_id,this.fund_name=this.list.fund_names,this.listRelevant=this.list.fund_person,this.clearBei=this.list.fund_details_text,this.fund_id=this.list.fund_id,this.fund_detail_transaction_id=this.list.fund_detail_transaction_id,this.imgUrl_loading=!0,this.siteData(),this.person_all(),this.axios.get("/fund/Select_three_fund_name?fund_stale=0").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.list_fund_name_type=t.data.fund_name_type)}),this.axios.get("/fund/select_bank").then(t=>{this.bank_card=t.data;var e=[],a=[],n=0,i=0,s=0;for(var _ in t.data)"储蓄卡"===t.data[_].bank_type?(n+=t.data[_].bank_money,e.push(t.data[_])):"信用卡"===t.data[_].bank_type&&(t.data[_].bank_money>0&&(i+=t.data[_].bank_money),a.push(t.data[_]));this.chuXu=e,this.xinY=a,this.chuXuKa=Math.floor(100*n)/100,this.XinYongKa=Math.floor(100*i)/100,s+=this.chuXuKa+this.XinYongKa,this.allTotal=Math.floor(100*s)/100}),this.fund_deId(),this.list_fund_nameas(),this.list_fund_namea()},computed:{money_actual:{get:function(){if(""===this.money_rate||void 0===this.money_rate){var t=this.money;return t}t=this.money-this.money*this.money_rate/100;var e=Math.floor(100*t)/100;return this.money_get=e,e},set:function(t){this.money_get=t}}},watch:{}},_=s,l=(a("f638"),a("2877")),o=Object(l["a"])(_,n,i,!1,null,"68c497a1",null);e["default"]=o.exports},f638:function(t,e,a){"use strict";var n=a("57a1"),i=a.n(n);i.a}}]);
>>>>>>> 3d170071b83b0b5b75291e2fa23f25c1556c5157:YiNuo/js/chunk-f6ec8a84.5a35b343.js
