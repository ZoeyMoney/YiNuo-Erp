(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330ce515"],{"2dab":function(t,e,a){},"6ca7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer_entry"},[a("header",{staticClass:"mui-bar mui-bar-nav header-top"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"informaction"}}}),a("h1",{staticClass:"mui-title"},[t._v("工人录入")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("工人名称")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_name,expression:"Customer_name"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入工人名称"},domProps:{value:t.Customer_name},on:{input:function(e){e.target.composing||(t.Customer_name=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("联系方式")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_connect,expression:"Customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.Customer_connect},on:{input:function(e){e.target.composing||(t.Customer_connect=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("div",{staticClass:"row-left-on"},[a("label",[t._v("推荐人")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.Customer_type,expression:"Customer_type"}],class:{classGray:""==t.Customer_type,classBlack:""!=t.Customer_type},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.Customer_type=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.list_type,function(e,s){return a("option",{key:s,domProps:{value:e.fund_person_id}},[t._v(t._s(e.fund_person))])})],2)])]),a("div",{staticClass:"row-left"},[a("div",{staticClass:"row-left-on"},[a("label",[t._v("工种")]),a("el-cascader",{attrs:{options:t.options,props:t.props,clearable:""},on:{change:t.handleChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])]),a("button-save",{nativeOn:{click:function(e){return t.go(e)}}})],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"customer"},[a("h2",[t._v("工人录入")]),a("p",[t._v("/Customer input")])])}],n={name:"customer_entry",data(){return{imgUrl_loading:!1,Customer_name:"",Customer_connect:"",Customer_type:"",value:[],options:[],list_type:"",list_value:"",props:{multiple:!0}}},methods:{handleChange(t){t=t;if(void 0!=t){var e=t.join("-");console.log(e)}},go(){var t=this,e=/^1[0-9]{10}$/,a=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,s=/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;if(""==this.Customer_name)return mui.toast("工人名称不能为空"),!1,!1;if(a.test(this.Customer_name)||s.test(this.Customer_name))return mui.toast("工人名称不能加入特殊字符"),!1,!1;if(""==this.Customer_connect)return mui.toast("联系方式不能为空"),!1,!1;if(!e.test(this.Customer_connect))return mui.toast("联系方式格式错误"),!1,!1;if(""==this.value)return mui.toast("工种不能为空"),!1,!1;this.imgUrl_loading=!0;var i="?name="+this.Customer_name+"&phone="+this.Customer_connect+"&person="+this.Customer_type+"&zhaunye="+this.list_value;this.axios.post("/DaiShu/Worker/add_worker"+i).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,function(){t.$router.go(0)}))})}},created(){this.axios.get("/fund/Select_fund_person?fund_person_state_A=2").then(t=>{this.list_type=t.data.data}),this.axios.get("/DaiShu/Sort/Select_sort?type=1").then(t=>{var e=t.data.data,a=t=>t.map(({id:t,name:e,list_Sort:s})=>s?{label:e,children:a(s)}:{value:t,label:e});this.options=a(e)})}},o=n,r=(a("a45f"),a("2877")),u=Object(r["a"])(o,s,i,!1,null,"8246b606",null);e["default"]=u.exports},a45f:function(t,e,a){"use strict";var s=a("2dab"),i=a.n(s);i.a}}]);