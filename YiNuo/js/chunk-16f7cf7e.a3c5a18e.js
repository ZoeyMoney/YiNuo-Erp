(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f7cf7e"],{"34be":function(t,e,a){},4052:function(t,e,a){"use strict";var s=a("34be"),i=a.n(s);i.a},"560b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"After_sales_statistics"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),a("h1",{staticClass:"mui-title"},[t._v("售后统计")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),a("div",{staticClass:"mui-content"},[a("div",{staticClass:"mui-input-row input-top"},[a("label",[t._v("输入关键字")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_name,expression:"customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入关键字"},domProps:{value:t.customer_name},on:{input:function(e){e.target.composing||(t.customer_name=e.target.value)}}})]),a("div",{staticClass:"mui-content label-flex"},[a("div",{staticClass:"mui-row row-flex"},[a("label",[t._v("工地名称")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.stage_name,expression:"stage_name"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.stage_name=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.stageName,function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})],2)])]),a("table",{attrs:{border:"0"}},[a("tr",[a("th",[a("span",{style:t.lefta},[t._v("工地名称")])]),t._m(1),t._m(2),t._m(3),t._m(4)]),t._l(t.list_serach,function(e){return a("tr",{on:{click:function(a){return t.mername(e.customer_id)}}},[a("td",[a("span",{style:t.lefta},[t._v(t._s(e.customer_name))])]),a("td",[a("span",[t._v(t._s(e.afterSale_person))])]),a("td",[a("span",[t._v(t._s(e.afterSale_type))])]),a("td",[a("span",[t._v("￥"+t._s(t.all_money(e.afterSale_jia,e.afterSale_yi,e.afterSale_worker)))])]),a("td",[e.afterSale_date>=e.afterSale_date_close?a("span",[t._v("已过保")]):t._e(),e.afterSale_date<=e.AfterSale_date_close?a("span",[t._v("在保")]):t._e()])])})],2)]),a("div",{staticClass:"footer"},[t._m(5),a("div",{staticClass:"footer-botton"},[a("p",[t._v("总人数:"),a("em",{style:t.listRad},[t._v(t._s(t.list.length))])]),a("em",[t._v("￥:"+t._s(t.add)+"W")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[a("div",{staticClass:"customer"},[a("h2",[t._v("售后统计")]),a("p",[t._v("/Customer input")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("span",[t._v("负责人")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("span",[t._v("分类")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("span",[t._v("总金额")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("span",[t._v("状态")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-botton"},[a("p",[t._v("TOTAL")])])}],r={name:"AfterSale_statistics",data(){return{imgUrl_loading:!1,customer_name:"",customer_stylist:"",stage_name:"",listName:"",stageName:"",list:[],stage_stipulate:"",add:"",lefta:{paddingLeft:"10px"},listRad:{color:"red",fontWeight:"bold"}}},created(){this.imgUrl_loading=!0,this.axios.get("/AfterSale/Select_AfterSale").then(t=>{200===t.status?(this.imgUrl_loading=!1,this.list=t.data.data):console.log("获取失败");var e=0;for(var a in this.list){e+=this.list[a].customer_budget;var s=e/1e4}this.add=s}),setInterval(()=>{var t=new Date;this.listtime=t},1e3)},computed:{list_serach(){var t=this,e=[];return t.list.map(function(a){-1!=a.customer_name.search(t.customer_name)&&e.push(a)}),e}},methods:{all_money:function(t,e,a){var s=parseFloat(t)+parseFloat(e)+parseFloat(a);return s},mername(t){var e={};for(var a in this.list)t==this.list[a].customer_id&&(e=this.list[a]);localStorage.AfterSale_statistics=JSON.stringify(e),console.log(e),this.$router.push({name:"site_details",query:{lists:e}})},time:function(t,e){if(null==t)return"未开始";var a=new Date(t);a.setDate(a.getDate()+e);var s=a.getMonth()+1,i=a.getFullYear()+"-"+s+"-"+a.getDate()+"-"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),r=new Date(i),n=new Date,l=r-n;if(l>0)var o=Math.floor(l/1e3/60/60/24),c=Math.floor(l/1e3/60/60%24),u=Math.floor(l/1e3/60%60),_=Math.floor(l/1e3%60),m=o+":"+c+":"+u+":"+_;else m="已逾期";return m}}},n=r,l=(a("4052"),a("2877")),o=Object(l["a"])(n,s,i,!1,null,"34240bf9",null);e["default"]=o.exports}}]);