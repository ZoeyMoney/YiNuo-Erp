(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e525f"],{"92f6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profit_edit"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"summary_entry"}}}),i("h1",{staticClass:"mui-title"},[t._v("利润原始数据修改")]),i("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t._m(0),i("div",{staticClass:"mui-content app"},[i("form",{staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[t._v("项目名称")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{type:"text",placeholder:"请选择"},domProps:{value:t.site},on:{click:t.siteChange,input:function(e){e.target.composing||(t.site=e.target.value)}}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("已收款")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.paid_for,expression:"paid_for"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.paid_for},on:{input:function(e){e.target.composing||(t.paid_for=e.target.value)}}})]),i("div",{staticClass:"mui-input-row"},[i("label",[t._v("已付款")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.Paid_out_for,expression:"Paid_out_for"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入用户名"},domProps:{value:t.Paid_out_for},on:{input:function(e){e.target.composing||(t.Paid_out_for=e.target.value)}}})])]),i("button-save",{nativeOn:{click:function(e){return t.add(e)}}})],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mui-content"},[i("div",{staticClass:"customer"},[i("h2",[t._v("利润原始数据修改")]),i("p",[t._v("/profit_edit")])])])}],o={name:"profit_edit",data(){return{site:"",test_id:"",paid_for:"",Paid_out_for:""}},created(){this.site=window.test,this.test_id=window.test_id,this.search_for()},methods:{siteChange(){var t="profit_edit";this.$router.push({path:"siteList"}),window.expenditure=t},search_for(){void 0!==this.site&&this.axios.get("/SelectAllCustomer?Customer_id="+this.test_id).then(t=>{200===t.status&&(this.paid_for=t.data[0].customer_enter_money,this.Paid_out_for=t.data[0].customer_out_money)})},add(){var t=this;this.axios({url:"/Customer/Update_Customer",method:"post",data:{Customer_out_money:this.Paid_out_for,Customer_enter_money:this.paid_for,Customer_id:this.test_id},transformRequest:[function(t){let e="";for(let i in t)e+=encodeURIComponent(i)+"="+encodeURIComponent(t[i])+"&";return e}]}).then(e=>{mui.alert(e.data.data,function(){t.$router.go(0)})})}}},r=o,n=i("2877"),u=Object(n["a"])(r,a,s,!1,null,"630725c8",null);e["default"]=u.exports}}]);