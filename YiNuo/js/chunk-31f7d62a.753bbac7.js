(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31f7d62a"],{"1b47":function(t,e,s){"use strict";var a=s("d89e"),i=s.n(a);i.a},2639:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"site_statistics"},[s("header",{staticClass:"mui-bar mui-bar-nav"},[s("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"site_management"}}}),s("h1",{staticClass:"mui-title"},[t._v("工地统计")]),s("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),s("div",{staticClass:"mui-content"},[s("div",{staticClass:"mui-input-row input-top"},[s("label",[t._v("输入关键字")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.customer_name},on:{input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]),s("div",{staticClass:"mui-content label-flex"},[s("div",{staticClass:"mui-row row-flex"},[s("label",[t._v("设计师")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_stylist,expression:"customer_stylist"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.customer_stylist=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,(function(e,a){return s("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)]),s("div",{staticClass:"mui-row row-flex"},[s("label",[t._v("监理")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.stage_name,expression:"stage_name"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.stage_name=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.stageName,(function(e){return s("option",{domProps:{value:e}},[t._v(t._s(e))])}))],2)])]),s("table",{attrs:{border:"0"}},[s("tr",[s("th",{style:t.projet},[t._v("工地各项")]),s("th",[t._v("设计师")]),s("th",[t._v("合同金额")]),s("th",[t._v("监理")]),s("th",[t._v("倒计时")])]),s("p",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t._f("data")(t.listtime)))]),t._l(t.list,(function(e){return s("tr",{style:t.ostyle},[s("td",{attrs:{value:e.customer_id},on:{click:function(s){return t.mername(e.customer_id)}}},[s("span",{style:t.projet},[t._v(t._s(e.customer_name))])]),s("td",{style:t.paLift},[s("span",[t._v(t._s(e.customer_stylist))])]),s("td",[s("span",[t._v("￥"+t._s(e.customer_budget))])]),s("td",[s("span",[t._v(t._s(e.stage_name))])]),"已逾期"===t.time(e.stage_startdate,e.stage_stipulate)?s("td",{style:t.listRad},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):"未开始"===t.time(e.stage_startdate,e.stage_stipulate)?s("td",{style:t.listStyle},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t.time(e.stage_startdate,e.stage_stipulate)?s("td",{style:t.listBlue},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t._e()])}))],2)]),s("div",{staticClass:"footer"},[t._m(1),s("div",{staticClass:"footer-botton"},[s("p",[t._v("总人数:"),s("em",{style:t.listRad},[t._v(t._s(t.list.length))])]),s("em",[t._v("￥:"+t._s(t.add)+"W")])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mui-content"},[s("div",{staticClass:"customer"},[s("h2",[t._v("工地统计")]),s("p",[t._v("/site_statistics")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-botton"},[s("p",[t._v("TOTAL")])])}],l={name:"site_statistics",data(){return{customer_name:"",customer_stylist:"",stage_name:"",listName:"",stageName:"",list:"",stage_stipulate:"",add:"",listtime:"",ostyle:{fontSize:"12px",borderBottom:"1px solid #dadada",lineHeight:"30px"},listStyle:{color:"blue",fontWeight:"bold"},listRad:{color:"red",fontWeight:"bold"},listBlue:{color:"green",fontWeight:"bold"},projet:{width:"93px",paddingLeft:"10px"},paLift:{paddingLeft:"3px"}}},created(){this.axios.get("/Customer/SelectStageCustomer").then(t=>{200===t.status?this.list=t.data:console.log("获取失败");var e=0;for(var s in this.list){e+=this.list[s].customer_budget;var a=e/1e4}this.add=a}),this.axios.get("/Customer/SelectStylist").then(t=>{this.listName=t.data}),this.axios.get("/Customer/SelectStageName").then(t=>{this.stageName=t.data}),setInterval(()=>{var t=new Date;this.listtime=t},1e3)},methods:{mername(t){this.$router.push({path:"site_after_sale",query:{id:t}})},time:function(t,e){if(null==t)return"未开始";var s=new Date(t);s.setDate(s.getDate()+e);var a=s.getMonth()+1,i=s.getFullYear()+"-"+a+"-"+s.getDate()+"-"+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds(),l=new Date(i),r=new Date,o=l-r;if(o>0)var n=Math.floor(o/1e3/60/60/24),u=Math.floor(o/1e3/60/60%24),m=Math.floor(o/1e3/60%60),c=Math.floor(o/1e3%60),_=n+":"+u+":"+m+":"+c;else _="已逾期";return _}}},r=l,o=(s("1b47"),s("6691")),n=Object(o["a"])(r,a,i,!1,null,"4faa3362",null);e["default"]=n.exports},d89e:function(t,e,s){}}]);