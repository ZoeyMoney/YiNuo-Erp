(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5da0d0d8","chunk-7b2330b8"],{"54df":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"transfer_money"},[n("header",{staticClass:"mui-bar mui-bar-nav"},[n("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"cash_flow"}}}),n("h1",{staticClass:"mui-title"},[t._v("转账")]),n("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),n("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),n("div",{staticClass:"mui-content app"},[n("form",{staticClass:"mui-input-group"},[n("div",{staticClass:"mui-input-row row-label"},[n("label",[t._v("转出")]),n("label",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_out_id,expression:"bank_out_id"}],attrs:{name:"",id:"enter"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.bank_out_id=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.cead,function(e){return n("option",{domProps:{value:e.bank_id}},[n("div",[t._v(t._s(e.bank_person))]),t._v("   \n              "),n("div",[t._v(t._s(e.bank_bank))])])})],2)])]),n("div",{staticClass:"mui-input-row row-label"},[n("label",[t._v("转入")]),n("label",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_enter_id,expression:"bank_enter_id"}],attrs:{id:"out"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.bank_enter_id=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.cead,function(e){return n("option",{domProps:{value:e.bank_id}},[n("div",[t._v(t._s(e.bank_person))]),t._v("   \n              "),n("div",[t._v(t._s(e.bank_bank))])])})],2)])]),n("data-value",{model:{value:t.dataValue1,callback:function(e){t.dataValue1=e},expression:"dataValue1"}}),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("金额")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bank_deal_money,expression:"bank_deal_money"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"total",placeholder:"￥"},domProps:{value:t.bank_deal_money},on:{input:function(e){e.target.composing||(t.bank_deal_money=e.target.value)}}})]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("转账费率")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.bank_deal_rate,expression:"bank_deal_rate"}],attrs:{name:"",id:"rate"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.bank_deal_rate=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listD,function(e){return n("option",{domProps:{value:e.Tnumber}},[t._v(t._s(e.Tnumber)+"%")])})],2)]),n("div",{staticClass:"mui-input-row"},[n("label",[t._v("实际转账")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.addMoneys,expression:"addMoneys"}],staticClass:"mui-input-clear",attrs:{type:"text",id:"transfer",placeholder:"如：6,000"},domProps:{value:t.addMoneys},on:{input:function(e){e.target.composing||(t.addMoneys=e.target.value)}}})])],1),n("div",{staticClass:"mui-input-row form-btn"},[n("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("Transfers")])])]),n("div",{staticClass:"mui-content all"},[n("div",{staticClass:"saving"},[t._v("储蓄卡")]),n("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.addMoney))])]),n("table",{staticClass:"all-saving",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(1),t._l(t.chuxuka,function(e){return n("tr",{on:{click:function(n){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[n("td",[t._v(t._s(e.bank_bank))]),n("td",[t._v(t._s(e.bank_person))]),n("td",[t._v("￥"+t._s(e.bank_money))])])})],2),n("div",{staticClass:"mui-content all"},[n("div",{staticClass:"saving"},[t._v("信用卡")]),n("div",{staticClass:"all-money"},[t._v("￥"+t._s(t.xinMoney))])]),n("table",{staticClass:"blaner",attrs:{border:"0",cellspacing:"",cellpadding:""}},[t._m(2),t._l(t.xinyong,function(e){return n("tr",{on:{click:function(n){return t.msgCu(e.bank_bank,e.bank_person,e.number)}}},[n("td",[t._v(t._s(e.bank_bank))]),n("td",[t._v(t._s(e.bank_person))]),n("td",[t._v("￥"+t._s(e.bank_money))]),n("td",[t._v("￥"+t._s(e.bank_limit))])])})],2)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mui-content"},[n("div",{staticClass:"customer"},[n("h2",[t._v("转账")]),n("p",[t._v("/Transfers")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{width:"21%"}},[t._v("开户行")]),n("td",{staticStyle:{width:"15%"}},[t._v("户主")]),n("td",[t._v("余额")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticStyle:{width:"21%"}},[t._v("开户行")]),n("td",{staticStyle:{width:"15%"}},[t._v("户主")]),n("td",[t._v("余额")]),n("td",[t._v("额度")])])}],i=n("d183"),s=n.n(i),l=n("a55b"),r={name:"transfer_money",components:{Login:l["default"]},data(){return{bank_id:0,dataValue1:new Date,imgUrl_loading:!1,bank_deal_money:"",bank_deal_rate:"",bank_enter_id:"",bank_out_id:"",chuxuka:"",xinyong:"",bank_money:"",addMoney:"",xinMoney:"",all_money:"",cead:"",bank_limit:"",bank:"",listD:[{Tnumber:.6},{Tnumber:.55},{Tnumber:.38}]}},created(){this.imgUrl_loading=!0,this.axios.get(s.a.bankCard).then(t=>{if(200===t.status){this.imgUrl_loading=!1,this.bank=t.data;var e=[],n=[],a=0,o=0;for(var i in this.bank)"储蓄卡"===this.bank[i].bank_type?(a+=this.bank[i].bank_money,e.push(this.bank[i])):"信用卡"===this.bank[i].bank_type&&(o+=this.bank[i].bank_money,n.push(this.bank[i]));this.chuxuka=e,this.xinyong=n,this.addMoney=Math.floor(100*a)/100,this.xinMoney=Math.floor(100*o)/100}}),this.axios.get(s.a.bankCard).then(t=>{this.cead=t.data},t=>{var e=this;mui.alert("您无权访问",function(){e.$router.push({name:"index"})})})},computed:{addMoneys:{get:function(){var t=this.bank_deal_money-this.bank_deal_money*this.bank_deal_rate/100,e=Math.floor(100*t)/100;return this.all_money=e,e},set:function(t){this.all_money=t}}},methods:{msgCu(t,e,n){var a="?&bank_person="+e+"&bank_bank="+t;void 0!==n&&(a+="&bank_number="+n);var o="transfer";this.axios.get(s.a.moneyRunning+a).then(t=>{window.transfer=t.data.list_moey,this.$router.push({path:"running_money",query:{transfer:o}})})},go(){var t=this,e=/^\d+(\.\d+)?$/;if(""==this.bank_deal_money)return mui.toast("金额不能为空"),!1,!1;if(!e.test(this.bank_deal_money))return mui.toast("金额有非法格式"),!1,!1;if(""==this.bank_enter_id)return mui.toast("转出银行卡不能为空"),!1,!1;if(""==this.bank_out_id)return mui.toast("转入银行卡不能为空"),!1,!1;if(this.bank_enter_id===this.bank_out_id)return mui.toast("转入和转出银行卡不能一致"),!1,!1;var n=new Date(this.dataValue1),a=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),l=n.getHours(),r=n.getMinutes(),u=n.getSeconds(),c=`${a}-${o}-${i} ${l}:${r}:${u}`;this.imgUrl_loading=!0;var m="?bank_deal_money="+this.bank_deal_money+"&money="+this.all_money+"&bank_enter_id="+this.bank_enter_id+"&bank_out_id="+this.bank_out_id+"&date="+c;this.axios.get(s.a.moneyTransfer+m).then(e=>{200===e.status?(this.imgUrl_loading=!1,mui.alert("转账成功",function(){t.$router.go(0)})):alert("转账失败")})}}},u=r,c=(n("71bc"),n("2877")),m=Object(c["a"])(u,a,o,!1,null,"82e18f32",null);e["default"]=m.exports},"71bc":function(t,e,n){"use strict";var a=n("76af"),o=n.n(a);o.a},"76af":function(t,e,n){},"8c9a":function(t,e,n){"use strict";var a=n("e57a"),o=n.n(a);o.a},a55b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[n("div",{staticClass:"bcg"}),n("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),n("div",{staticClass:"logo"},[n("div",{staticClass:"logo-bcg"},[n("img",{attrs:{src:t.imgSrc,alt:""}})])]),n("form",{staticClass:"bcg-form"},[n("div",{staticClass:"input-rot"},[n("label",[t._v("用户名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入用户名",autocomplete:"off"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"input-rot"},[n("label",[t._v("密    码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})])]),n("div",{staticClass:"mui-button-row go-btn"},[n("button",{attrs:{type:"button"},on:{click:t.go}},[t._v("登录")])])],1)},o=[],i=n("d183"),s=n.n(i),l={name:"Login",data(){return{name:"",pwd:"",imgUrl_loading:!1,imgSrc:n("e725")}},created(){},methods:{go(){if(""==this.name||""==this.pwd)mui.alert("请输入用户名或密码",function(){location.href=""});else{var t=this;this.imgUrl_loading=!0,this.axios.post(s.a.Login+"?name="+this.name+"&pwd="+this.pwd).then(e=>{200===e.status&&(this.imgUrl_loading=!1,"登录成功"===e.data.msg?(localStorage.data=JSON.stringify(e.data.user),mui.alert(e.data.msg,function(){t.$router.push("index")})):mui.alert("账号或密码错误"))})}}}},r=l,u=(n("8c9a"),n("2877")),c=Object(u["a"])(r,a,o,!1,null,"2b60fd9a",null);e["default"]=c.exports},d183:function(t,e){const n={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details"};t.exports=n},e57a:function(t,e,n){},e725:function(t,e,n){t.exports=n.p+"img/2146070222.5abdcb9e.jpg"}}]);