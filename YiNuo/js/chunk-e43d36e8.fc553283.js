(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e43d36e8"],{"0c37":function(e,t,i){},"5b8b":function(e,t,i){"use strict";var a=i("0c37"),s=i.n(a);s.a},"72bd":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"task_admins"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"administrative"}}}),i("h1",{staticClass:"mui-title"},[e._v("审批统计")]),i("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),e.imgUrl_loading?i("login-loading"):e._e(),i("div",{staticClass:"mui-content"},[e._m(0),i("div",{staticClass:"mui-content app"},[i("form",{staticClass:"mui-input-group"},[e.task_people_if?i("div",{staticClass:"mui-input-row"},[i("label",[e._v("审批人")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.zhiX,expression:"zhiX"}],attrs:{name:""},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.zhiX=t.target.multiple?i:i[0]},function(t){return e.zhiXClick(e.zhiX)}]}},[i("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.list_inform,function(t){return i("option",{domProps:{value:t.approve_inform_person_id}},[e._v(e._s(t.approve_inform_person))])})],2)]):e._e(),e.Release_if?i("div",{staticClass:"mui-input-row"},[i("label",[e._v("执行人")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.renW,expression:"renW"}],attrs:{name:""},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.renW=t.target.multiple?i:i[0]},function(t){return e.renWClick(e.renW)}]}},[i("option",{attrs:{value:""}},[e._v("请选择")]),e._l(e.list_make,function(t){return i("option",{domProps:{value:t.approve_make_person_id}},[e._v(e._s(t.approve_make_person))])})],2)]):e._e(),i("div",{staticClass:"mui-input-row dian"},e._l(e.list_radio,function(t){return i("div",{staticClass:"mui-input-row mui-radio dian-a"},[i("label",[e._v(e._s(t.text))]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.radio,expression:"radio"}],attrs:{name:"radio1",type:"radio",checked:"a"},domProps:{value:t.id,checked:e._q(e.radio,t.id)},on:{change:[function(i){e.radio=t.id},function(t){return e.radioClick(e.radio)}]}})])}),0)]),i("table",{attrs:{border:"0"}},[i("tr",[i("th",[i("span",{style:e.lefta},[e._v("审批人")])]),e._m(1),e._m(2),e._m(3)]),e._l(e.list,function(t){return i("tr",{on:{click:function(i){return e.idClick(t.approve_id)}}},[i("td",[i("span",{style:e.lefta},[e._v(e._s(t.approve_inform_person))])]),i("td",[i("span",[e._v(e._s(t.approve_make_person))])]),i("td",[i("span",{directives:[{name:"show",rawName:"v-show",value:t.mission_startDate,expression:"item.mission_startDate"}]},[e._v(e._s(e._f("data")(t.mission_startDate)))]),i("span",{directives:[{name:"show",rawName:"v-show",value:void 0==t.mission_startDate,expression:"item.mission_startDate == undefined"}]},[e._v("暂无")])]),i("td",[i("div",{directives:[{name:"show",rawName:"v-show",value:"0"==t.approve_stale,expression:"item.approve_stale == '0'"}]},[e._v("待审核")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"1"==t.approve_stale,expression:"item.approve_stale == '1'"}]},[e._v("已同意")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"2"==t.approve_stale,expression:"item.approve_stale == '2'"}]},[e._v("已拒绝")])])])})],2),e._l(e.msg_list,function(t){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.msg_box,expression:"msg_box"}],staticClass:"mui-content msgbox"},[i("div",{staticClass:"close"},[i("div",{staticClass:"close-i"},[i("i",{staticClass:"el-icon-close",on:{click:e.closeClick}})])]),i("form",{directives:[{name:"show",rawName:"v-show",value:e.internal_content,expression:"internal_content"}],staticClass:"mui-input-group"},[i("div",{staticClass:"mui-input-row"},[i("label",[e._v("下达人")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.approve_inform_person}})]),i("div",{staticClass:"mui-input-row"},[i("label",[e._v("任务人")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.approve_make_person}})]),i("div",{staticClass:"mui-input-row"},[i("label",[e._v("完成时间")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.mission_startDate,expression:"item.mission_startDate"}]},[e._v(e._s(e._f("data")(t.mission_startDate)))]),i("div",{directives:[{name:"show",rawName:"v-show",value:void 0==t.mission_startDate,expression:"item.mission_startDate == undefined"}]},[e._v("暂无")])]),i("div",{staticClass:"mui-input-row"},[i("label",[e._v("状态")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"0"==t.approve_stale,expression:"item.approve_stale == '0'"}]},[e._v("待审核")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"1"==t.approve_stale,expression:"item.approve_stale == '1'"}]},[e._v("已同意")]),i("div",{directives:[{name:"show",rawName:"v-show",value:"2"==t.approve_stale,expression:"item.approve_stale == '2'"}]},[e._v("已拒绝")])]),i("div",{staticClass:"mui-input-row"},[i("label",[e._v("任务信息")]),i("input",{staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"无",disabled:"disabled"},domProps:{value:t.mission_text}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"0"==t.approve_stale,expression:"item.approve_stale =='0'"}],staticClass:"mui-input-row form-btn"},[i("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button"},on:{click:function(i){return e.add(t.approve_id)}}},[e._v("同意")]),i("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button"},on:{click:function(i){return e.on_no(t.approve_id)}}},[e._v("拒绝")])])])})],2)])],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mui-content"},[i("div",{staticClass:"customer"},[i("h2",[e._v("审批统计")]),i("p",[e._v("/task admin")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("th",[i("span",[e._v("执行人")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("th",[i("span",[e._v("时间")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("th",[i("span",[e._v("状态")])])}],o={name:"task_admins",data(){return{imgUrl_loading:!1,task_people_if:!0,zhiX:"",renW:"",task_people:"",task_people_id:"",Release_if:!0,msg_box:!1,internal_content:!0,msg_list:"",Release:"",list_inform:"",list_make:"",Release_id:"",radio:"0",list_radio:[{text:"待审核",id:"0"},{text:"已同意",id:"1"},{text:"已拒绝",id:"2"}],list:"",lefta:{paddingLeft:"17px"}}},created(){"总权限"!=JSON.parse(localStorage.data).role[0].role_name&&(this.task_people_if=!1,this.Release_if=!1),this.axios.get("/Administration/Select_approve?approve_stale=0").then(e=>{this.list=e.data.list_administration,this.list_inform=e.data.list_inform_person,this.list_make=e.data.list_make_person}),this.task_people=window.fund_people,this.task_people_id=window.fund_people_name,this.Release=window.fund_people_huan,this.Release_id=window.fund_people_huan_name},methods:{zhiXClick(e){var t="?";""!=this.zhiX&&(t+="approve_inform_person="+e),""!=this.renW&&(t+="&approve_make_person="+this.renW),""!=this.radio&&(t+="&approve_stale="+this.radio),this.axios.get("/Administration/Select_approve"+t).then(e=>{this.list=e.data.list_administration,this.list_inform=e.data.list_inform_person,this.list_make=e.data.list_make_person})},renWClick(e){var t="?";""!=this.renW&&(t+="approve_make_person="+e),""!=this.zhiX&&(t+="&approve_inform_person="+this.zhiX),""!=this.radio&&(t+="&approve_stale="+this.radio),this.axios.get("/Administration/Select_approve"+t).then(e=>{this.list=e.data.list_administration,this.list_inform=e.data.list_inform_person,this.list_make=e.data.list_make_person})},radioClick(e){var t="?approve_stale="+e;""!=this.zhiX&&(t+="&approve_inform_person="+this.zhiX),""!=this.renW&&(t+="&approve_make_person="+this.renW),this.axios.get("/Administration/Select_approve"+t).then(e=>{this.list=e.data.list_administration,this.list_inform=e.data.list_inform_person,this.list_make=e.data.list_make_person})},task_peopleClick(){var e="task_admins_user";this.$router.push({path:"relevant_people"}),window.prosen=e},Release_peopleClick(){var e="Release_admins_user";this.$router.push({path:"relevant_people"}),window.prosen=e},idClick(e){this.msg_box=!0;var t=[];for(var i in this.list)e==this.list[i].approve_id&&t.push(this.list[i]);this.msg_list=t;var a=function(e){e.preventDefault()};document.body.style.overflow="hidden",document.removeEventListener("touchmove",a,!0)},closeClick(){this.msg_box=!1;var e=function(e){e.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",e,!1)},add(e){var t=this;this.imgUrl_loading=!0,this.axios.post("/Administration/Update_approve?approve_id="+e+"&approve_stale=1").then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,function(){t.$router.go(0)}))})},on_no(e){var t=this;this.imgUrl_loading=!0,this.axios.post("/Administration/Update_approve?approve_id="+e+"&approve_stale=2").then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,function(){t.$router.go(0)}))})}}},n=o,r=(i("5b8b"),i("2877")),l=Object(r["a"])(n,a,s,!1,null,"59329188",null);t["default"]=l.exports}}]);