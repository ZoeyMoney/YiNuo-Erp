(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c0bec91"],{"6ea6":function(t,o,e){},"7f23":function(t,o,e){"use strict";var i=e("6ea6"),n=e.n(i);n.a},a55b:function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"login"},[e("div",{staticClass:"bcg"}),e("div",{staticClass:"logo"},[e("div",{staticClass:"logo-bcg"},[e("img",{attrs:{src:t.imgSrc,alt:""}})])]),e("form",{staticClass:"bcg-form"},[e("div",{staticClass:"input-rot"},[e("label",[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入用户名",autocomplete:"off"},domProps:{value:t.name},on:{input:function(o){o.target.composing||(t.name=o.target.value)}}})]),e("div",{staticClass:"input-rot"},[e("label",[t._v("密    码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},domProps:{value:t.pwd},on:{input:function(o){o.target.composing||(t.pwd=o.target.value)}}})])]),e("div",{staticClass:"mui-button-row go-btn"},[e("button",{attrs:{type:"button"},on:{click:t.go}},[t._v("登录")])])])},n=[],a=e("d183"),l=e.n(a),c={name:"Login",data(){return{name:"",pwd:"",imgSrc:e("e725")}},created(){},methods:{go(){if(""==this.name||""==this.pwd)mui.alert("请输入用户名或密码",function(){location.href=""});else{var t=this;this.name,this.pwd;this.axios.post(l.a.Login+"?name="+this.name+"&pwd="+this.pwd).then(o=>{"登录成功"===o.data.msg?(localStorage.data=JSON.stringify(o.data.user),mui.alert(o.data.msg,function(){t.$router.push("index")})):mui.alert("账号或密码错误")})}}}},s=c,u=(e("7f23"),e("2877")),r=Object(u["a"])(s,i,n,!1,null,"67536e8b",null);o["default"]=r.exports},d183:function(t,o){const e={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/Customer/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/Customer/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",stageName:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageName",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing"};t.exports=e},e725:function(t,o,e){t.exports=e.p+"img/2146070222.5abdcb9e.jpg"}}]);