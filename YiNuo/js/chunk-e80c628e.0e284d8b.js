(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e80c628e"],{1307:function(t,e,s){"use strict";var a=s("769f"),i=s.n(a);i.a},"681b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site_statistics"},[s("header",{staticClass:"mui-bar mui-bar-nav"},[s("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"informaction"}}}),s("h1",{staticClass:"mui-title"},[t._v("工人统计")]),s("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),s("div",{staticClass:"mui-content"},[s("div",{staticClass:"mui-input-row input-top"},[s("label",[t._v("输入关键字")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.customer_name},on:{input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]),s("div",{staticClass:"mui-content label-flex"},[s("div",{staticClass:"mui-row row-flex"},[s("label",[t._v("工种")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_stylist,expression:"customer_stylist"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.customer_stylist=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,(function(e,a){return s("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"mui-row row-flex"},[s("label",[t._v("负责人")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.stage_name,expression:"stage_name"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.stage_name=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.stageName,(function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)])]),s("table",{attrs:{border:"0"}},[s("tr",[s("th",{style:t.projet},[t._v("工人名称")]),s("th",[t._v("联系方式")]),s("th",[t._v("工种")]),s("th",[t._v("负责人")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t._f("data")(t.listtime)))]),t._l(t.list,(function(e){return s("tr",{style:t.ostyle},[s("td",{attrs:{value:e.customer_id},on:{click:function(s){return t.mername(e.customer_id)}}},[s("span",{style:t.projet},[t._v(t._s(e.customer_name))])]),s("td",{style:t.paLift},[s("span",[t._v(t._s(e.customer_stylist))])]),s("td",[s("span",[t._v("￥"+t._s(e.customer_budget))])]),s("td",[s("span",[t._v(t._s(e.stage_name))])]),"已逾期"===t.time(e.stage_startdate,e.stage_stipulate)?s("td",{style:t.listRad},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):"未开始"===t.time(e.stage_startdate,e.stage_stipulate)?s("td",{style:t.listStyle},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t.time(e.stage_startdate,e.stage_stipulate)?s("td",{style:t.listBlue},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t._e()])}))],2)]),s("div",{staticClass:"footer"},[t._m(1),s("div",{staticClass:"footer-botton"},[s("p",[t._v("总人数:"),s("em",{style:t.listRad},[t._v(t._s(t.list.length))])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mui-content"},[s("div",{staticClass:"customer"},[s("h2",[t._v("工人统计")]),s("p",[t._v("/site_statistics")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-botton"},[s("p",[t._v("TOTAL")])])}],l={name:"site_statistics",data(){return{customer_name:"",customer_stylist:"",stage_name:"",listName:"",stageName:"",list:"",stage_stipulate:"",add:"",listtime:"",ostyle:{fontSize:"12px",borderBottom:"1px solid #dadada",lineHeight:"30px"},listStyle:{color:"blue",fontWeight:"bold"},listRad:{color:"red",fontWeight:"bold"},listBlue:{color:"green",fontWeight:"bold"},projet:{paddingLeft:"10px"},paLift:{paddingLeft:"3px"}}},created(){this.axios.get("/Customer/SelectStageCustomer").then(t=>{200===t.status?this.list=t.data:console.log("获取失败");var e=0;for(var s in this.list){e+=this.list[s].customer_budget;var a=e/1e4}this.add=a}),this.axios.get("/Customer/SelectStylist").then(t=>{this.listName=t.data}),this.axios.get("/Customer/SelectStageName").then(t=>{this.stageName=t.data})},methods:{mername(t){this.$router.push({path:"site_after_sale",query:{id:t}})}}},o=l,r=(s("1307"),s("6691")),n=Object(r["a"])(o,a,i,!1,null,"57fcbeae",null);e["default"]=n.exports},"769f":function(t,e,s){}}]);