(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53bea616"],{"175d":function(t,e,a){},"560b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"After_sales_statistics"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),a("h1",{staticClass:"mui-title"},[t._v("售后统计")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),a("div",{staticClass:"mui-content"},[a("div",{staticClass:"mui-input-row input-top"},[a("label",[t._v("输入关键字")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.customer_name},on:{input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]),a("div",{staticClass:"mui-content label-flex"},[a("div",{staticClass:"mui-row row-flex"},[a("label",[t._v("责任人")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.customer_stylist,expression:"customer_stylist"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.customer_stylist=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.listName,function(e,s){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)]),a("div",{staticClass:"mui-row row-flex"},[a("label",[t._v("阶段")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.stage_name,expression:"stage_name"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.stage_name=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.stageName,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])]),a("table",{attrs:{border:"0"}},[a("tr",[a("th",{style:t.projet},[t._v("工地各项")]),a("th",{style:t.paLift},[t._v("责任人")]),a("th",[t._v("预算金额")]),a("th",[t._v("阶段")]),a("th",[t._v("倒计时")])]),t._l(t.list,function(e){return a("tr",{style:t.ostyle},[a("td",{attrs:{value:e.customer_id},on:{click:function(a){return t.mername(e.customer_id)}}},[a("span",{style:t.projet},[t._v(t._s(e.customer_name))])]),a("td",{style:t.paLift},[a("span",[t._v(t._s(e.customer_stylist))])]),a("td",[a("span",[t._v("￥"+t._s(e.customer_budget))])]),a("td",[a("span",[t._v(t._s(e.stage_name))])]),"已逾期"===t.time(e.stage_startdate,e.stage_stipulate)?a("td",{style:t.listRad},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):"未开始"===t.time(e.stage_startdate,e.stage_stipulate)?a("td",{style:t.listStyle},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t.time(e.stage_startdate,e.stage_stipulate)?a("td",{style:t.listBlue},[t._v(t._s(t.time(e.stage_startdate,e.stage_stipulate)))]):t._e()])})],2)]),a("div",{staticClass:"footer"},[t._m(1),a("div",{staticClass:"footer-botton"},[a("p",[t._v("总人数:"),a("em",{style:t.listRad},[t._v(t._s(t.list.length))])]),a("em",[t._v("￥:"+t._s(t.add)+"W")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[a("div",{staticClass:"customer"},[a("h2",[t._v("售后统计")]),a("p",[t._v("/Customer input")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-botton"},[a("p",[t._v("TOTAL")])])}],l={name:"customer_statistics",data:function(){return{customer_name:"",customer_stylist:"",stage_name:"",listName:"",stageName:"",list:"",stage_stipulate:"",add:"",ostyle:{fontSize:"12px",borderBottom:"1px solid #dadada",lineHeight:"30px"},listStyle:{color:"blue",fontWeight:"bold"},listRad:{color:"red",fontWeight:"bold"},listBlue:{color:"green",fontWeight:"bold"},projet:{width:"93px",paddingLeft:"10px"},paLift:{paddingLeft:"3px"}}},created:function(){var t=this;this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer").then(function(e){200===e.status?t.list=e.data:console.log("获取失败");var a=0;for(var s in t.list){a+=t.list[s].customer_budget;var i=a/1e4}t.add=i}),this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist").then(function(e){t.listName=e.data}),this.axios.get("https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName").then(function(e){t.stageName=e.data}),setInterval(function(){var e=new Date;t.listtime=e},1e3)},computed:{},methods:{mername:function(t){this.$router.push({path:"site_details",query:{id:t}})},time:function(t,e){if(null==t)return"未开始";var a=new Date(t);a.setDate(a.getDate()+e);var s=a.getMonth()+1,i=a.getFullYear()+"-"+s+"-"+a.getDate()+"-"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),l=new Date(i),o=new Date,n=l-o;if(n>0)var r=Math.floor(n/1e3/60/60/24),u=Math.floor(n/1e3/60/60%24),c=Math.floor(n/1e3/60%60),m=Math.floor(n/1e3%60),_=r+":"+u+":"+c+":"+m;else _="已逾期";return _}}},o=l,n=(a("a1af"),a("2877")),r=Object(n["a"])(o,s,i,!1,null,"336b9c71",null);e["default"]=r.exports},a1af:function(t,e,a){"use strict";var s=a("175d"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-53bea616.1adddf29.js.map