(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4249c9"],{"1b56":function(e,t,a){"use strict";var i=a("61af"),s=a.n(i);s.a},"61af":function(e,t,a){},b3c3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Project_Reconciliation"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"index"}}}),a("h1",{staticClass:"mui-title"},[e._v("项目对账")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),e.imgUrl_loading?a("login-loading"):e._e(),a("div",{staticClass:"mui-content projet-recon"},[e.divinput?a("div",{staticClass:"username"},[a("label",[e._v("账号：")]),a("div",[e._v(e._s(e.divname))])]):e._e(),e.AdminName?a("div",{staticClass:"mui-input-row input-top"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.userName=t.target.multiple?a:a[0]},function(t){return e.userClick(e.userName)}]}},[a("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.listHos,function(t){return a("option",{domProps:{value:t.fund_person_id}},[a("div",[e._v(e._s(t.user_name))])])})],2)]):e._e(),a("div",{staticClass:"ok"},[a("div",[e._v("总计金额：￥"+e._s(e._f("negative")(e.all_money)))])]),a("div",{staticClass:"all-hot"},[a("div",[e._v("已付金额：￥"+e._s(e._f("negative")(e.all_paid)))]),a("div",[e._v("应付金额：￥"+e._s(e._f("negative")(e.enter_paid)))]),a("div",[e._v("质保金额：￥"+e._s(e._f("negative")(e.no_paid)))])]),e._m(0),[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.first_hos},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"已处理",name:"first"},model:{value:e.hos,callback:function(t){e.hos=t},expression:"hos"}},[a("tbody",{ref:"activeName"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"tableSelect",attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?a:a[0]},function(t){return e.projetClick(e.value)}]}},[a("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.projetName,function(t){return a("option",{domProps:{value:t.customer_id}},[e._v(e._s(t.customer_name))])})],2)]),a("table",[a("tr",[a("th",[a("span",[e._v("工地名称")])]),a("th",{style:e.lefta},[a("span",[e._v("款项名称")])]),a("th",[a("span",[e._v("金额")])]),a("th",{style:e.lefta},[a("span",[e._v("日期")])])]),e._l(e.yesFu,function(t){return a("tr",{on:{click:function(a){return e.rinningClick(t.fund_details_id)}}},[a("td",[a("span",[e._v(e._s(t.customer_name))])]),a("td",["99"===t.fund_details_batch?a("span",{style:e.fund_name},[e._v("质保金")]):t.fund_name?a("span",{style:e.fund_name},[e._v(e._s(t.fund_name))]):void 0===t.fund_name?a("span",{style:e.fund_name},[e._v(e._s(t.fund_names))]):e._e()]),a("td",[a("span",{class:{clasred:1===t.fund_details_type},style:e.money},[e._v("￥"+e._s(e._f("negative")(t.fund_details_money)))])]),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.fund_details_date,expression:"item.fund_details_date"}],style:e.paLft},[e._v(e._s(e._f("NoYes")(t.fund_details_date)))]),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0==t.fund_details_date,expression:"item.fund_details_date==undefined"}],style:e.paLft},[e._v("待确认")])])])})],2)]),a("el-tab-pane",{attrs:{label:"未处理",name:"second"},model:{value:e.second,callback:function(t){e.second=t},expression:"second"}},[a("tbody",{ref:"second"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"tableSelect",attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.value=t.target.multiple?a:a[0]},function(t){return e.projetClick(e.value)}]}},[a("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.projetName,function(t){return a("option",{domProps:{value:t.customer_id}},[e._v(e._s(t.customer_name))])})],2)]),a("table",[a("tr",[a("th",[a("span",[e._v("工地名称")])]),a("th",{style:e.lefta},[a("span",[e._v("款项名称")])]),a("th",[a("span",[e._v("金额")])]),a("th",{style:e.lefta},[a("span",[e._v("日期")])])]),e._l(e.listSecond,function(t){return a("tr",{on:{click:function(a){return e.nodeal(t.fund_details_id)}}},[a("td",[a("span",[e._v(e._s(t.customer_name))])]),a("td",["99"===t.fund_details_batch?a("span",{style:e.fund_name},[e._v("质保金")]):t.fund_name?a("span",{style:e.fund_name},[e._v(e._s(t.fund_name))]):void 0===t.fund_name?a("span",{style:e.fund_name},[e._v(e._s(t.fund_names))]):e._e()]),a("td",[a("span",{class:{clasred:1===t.fund_details_type},style:e.money},[e._v("￥"+e._s(e._f("negative")(t.fund_details_money)))])]),a("td",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.fund_details_date,expression:"item.fund_details_date"}],style:e.paLft},[e._v(e._s(e._f("NoYes")(t.fund_details_date)))]),a("span",{directives:[{name:"show",rawName:"v-show",value:void 0==t.fund_details_date,expression:"item.fund_details_date==undefined"}],style:e.paLft},[e._v("待确认")])])])})],2)])],1)]],2),a("div",{staticClass:"footer"},[a("div",{staticClass:"box"},[e._v("\n          已处理:￥"+e._s(e._f("negative")(e.all_paid))+"\n        ")]),a("div",{staticClass:"box"},[e._v("\n          未处理:￥"+e._s(e._f("negative")(e.ou_paid))+"\n        ")])])],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Comment"},[a("p",[e._v("注：金额显示红色,表示该金额未最终确定,请尽快与监理联系确认.时间显示为'待确认',表示为该款项付款时间待定,会计会根据工程完成时间及财务状况及时更新,请关注核对.")])])}],n={name:"Project_Reconciliation",data(){return{imgUrl_loading:!1,AdminName:!1,divinput:!1,activeName:"first",projetName:"",value:"",userName:"",list:"",first:"",hos:"已付款",listHos:"",second:"未付款",name_num:"",listSecond:"",yesFu:"",paid_for:!0,divname:"",listPaid_for:"",Uncollected:"",listUncollected:"",userName_id:"",all_money:"0",all_paid:"0",no_paid:"0",ou_paid:0,enter_paid:"0",paLft:{display:"block",padding:"0 10px",width:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},lefta:{paddingLeft:"10px",minWidth:"85px"},money:{display:"block",width:"72px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},fund_name:{display:"block",width:"57px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",paddingLeft:"10px"}}},created(){this.NewUserNameServe=JSON.parse(localStorage.data).role,this.imgUrl_loading=!0;this.axios.get("/User/Select_accounting").then(e=>{if(200===e.status)for(var t in this.imgUrl_loading=!1,this.NewUserName=JSON.parse(localStorage.data).role,this.NewUserName)this.projetName=e.data.list_fund_customer_name,"项目对账"===this.NewUserName[t].jurisdiction_name&&("总权限"===this.NewUserName[t].role_name?(this.AdminName=!0,this.divinput=!1):(this.divname=e.data.name,this.yesFu=e.data.list_fund_Already_out,this.listSecond=e.data.list_fund_pre_out,this.divinput=!0,this.AdminName=!1),this.listHos=e.data.list_fund_user_number,""!=this.userName&&(this.yesFu=e.data.list_fund_Already_out,this.listSecond=e.data.list_fund_pre_out,this.listPaid_for=e.data.list_fund_Already_enter,this.listUncollected=e.data.list_fund_pre_enter),"总权限"!=this.NewUserName[t].role_name&&this.all_model_money(e))})},methods:{nodeal(e){var t={};for(var a in this.NewUserNameServe)if("fund:fund"===this.NewUserNameServe[a].jurisdiction){for(var a in this.listSecond)e==this.listSecond[a].fund_details_id&&(t=this.listSecond[a]);localStorage.msg=JSON.stringify(t),this.$router.push({path:"payable_entry",query:{listVal:t}})}},rinningClick(e){var t={};for(var a in this.NewUserNameServe)if("fund:fund"===this.NewUserNameServe[a].jurisdiction){for(var a in this.yesFu)e==this.yesFu[a].fund_details_id&&(t=this.yesFu[a]);localStorage.msg=JSON.stringify(t),window.quan="Project_Reconciliation",this.$router.push({path:"running_details",query:{listVal:t}})}},all_model_money(e){var t=0,a=0,i=0,s=0;for(var n in e.data.list_fund_Already_out)t+=e.data.list_fund_Already_out[n].fund_details_money;for(var n in e.data.list_fund_pre_out)a+=e.data.list_fund_pre_out[n].fund_details_money;for(var n in e.data.list_fund_pre_out)"99"===e.data.list_fund_pre_out[n].fund_details_batch&&(i+=e.data.list_fund_pre_out[n].fund_details_money),"99"!==e.data.list_fund_pre_out[n].fund_details_batch&&(s+=e.data.list_fund_pre_out[n].fund_details_money);this.all_money=parseFloat(t)+parseFloat(a),this.all_paid=t,this.ou_paid=a,this.no_paid=i,this.enter_paid=s},list_model_search(e){this.yesFu=e.data.list_fund_Already_out,this.listSecond=e.data.list_fund_pre_out,this.listPaid_for=e.data.list_fund_Already_enter,this.listUncollected=e.data.list_fund_pre_enter,this.projetName=e.data.list_fund_customer_name},userClick(e){var t="?";t+=""==e?"user_number=0":"user_number="+e,this.axios.get("/User/Select_accounting"+t).then(e=>{this.list_model_search(e),this.all_model_money(e)})},projetClick(e){var t="?";""==this.userName?t+="Customer_name="+e:""!=this.value?t+="&Customer_name="+e+"&user_number="+this.userName:t+="&user_number="+this.userName,this.axios.get("/User/Select_accounting"+t).then(e=>{this.imgUrl_loading=!1,this.list_model_search(e),this.all_model_money(e)})},first_hos(e){}}},l=n,d=(a("1b56"),a("2877")),r=Object(d["a"])(l,i,s,!1,null,null,null);t["default"]=r.exports}}]);