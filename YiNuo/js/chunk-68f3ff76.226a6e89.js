(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f3ff76"],{"0b04":function(t,e,i){},b642:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"site_stage"},[i("header",{staticClass:"mui-bar mui-bar-nav"},[i("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_management"}}}),i("h1",{staticClass:"mui-title"},[t._v("工地阶段")]),i("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),t.imgUrl_loading?i("login-loading"):t._e(),i("div",{staticClass:"mui-content pad"},[[i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"洽谈阶段",name:"first"}},[[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_A}},[i("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2),i("el-tab-pane",{attrs:{label:"施工阶段",name:"second"}},[[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_B}},[i("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2),i("el-tab-pane",{attrs:{label:"回款阶段",name:"third"}},[[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_C}},[i("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2),i("el-tab-pane",{attrs:{label:"完成阶段",name:"fourth"}},[[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.listProjet_D}},[i("el-table-column",{attrs:{label:"工地名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticStyle:{"white-space":"nowrap",width:"167px",display:"block",overflow:"hidden","text-overflow":"ellipsis"}},[t._v(t._s(e.row.customer_name))])]}}])}),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)]],2)],1)],t.alerto?i("div",{staticClass:"aleft"},[i("div",{staticClass:"asd"},[i("div",[t._v("详情阶段")]),i("div",[i("i",{staticClass:"el-icon-close",on:{click:t.close}})])]),i("div",{staticClass:"radio"},t._l(t.listRadio,(function(e){return i("div",{staticClass:"mui-input-row mui-radio mui-left radio-text"},[i("label",[t._v(t._s(e.text))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.radio,expression:"radio"}],attrs:{name:"radio1",type:"radio"},domProps:{value:e.id,checked:t._q(t.radio,e.id)},on:{change:function(i){t.radio=e.id}}})])})),0),i("div",{staticClass:"mui-input-row mui-radio mui-left button-el"},[i("el-button",{on:{click:t.add}},[t._v("保存")])],1)]):t._e()],2)],1)},l=[],o={name:"site_stage",data(){return{show:!0,activeName:"first",imgUrl_loading:!1,radio:"",listRadio:[{text:"洽谈阶段",id:"1"},{text:"施工阶段",id:"2"},{text:"回款阶段",id:"3"},{text:"完成阶段",id:"4"}],Aprojet:!0,Bprojet:!0,Cprojet:!0,Dprojet:!0,listProjet_A:[{customer_name:""}],listProjet_B:[{customer_name:""}],listProjet_C:[{customer_name:""}],listProjet_D:[{customer_name:""}],customer_id:"",alerto:!1}},created(){this.imgUrl_loading=!0,this.axios.get("/SelectAllCustomer?Customer_A=1").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.listProjet_A=t.data.data)})},methods:{handleClick(t){"0"===t.index?(this.imgUrl_loading=!0,this.axios.get("/SelectAllCustomer?Customer_A=1").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.listProjet_A=t.data.data)})):"1"===t.index?(this.imgUrl_loading=!0,this.axios.get("/SelectAllCustomer?Customer_B=2").then(t=>{200===t.status&&(this.imgUrl_loading=!1,this.listProjet_B=t.data.data)})):"2"===t.index?this.axios.get("/SelectAllCustomer?Customer_C=3").then(t=>{this.imgUrl_loading=!0,200===t.status&&(this.imgUrl_loading=!1,this.listProjet_C=t.data.data)}):"3"===t.index&&this.axios.get("/SelectAllCustomer?Customer_D=4").then(t=>{this.imgUrl_loading=!0,200===t.status&&(this.imgUrl_loading=!1,this.listProjet_D=t.data.data)})},handleEdit(t,e){this.customer_id=e.customer_id,this.alerto=!0;var i=function(t){t.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",i,!1)},handleDelete(t,e){var i=this;this.imgUrl_loading=!0,this.customer_id=e.customer_id,console.log(this.customer_id),mui.confirm("是否删除",(function(t){1==t.index?i.axios.get("/Customer/DeleteCustomer?Customer="+e.customer_id).then(t=>{200===t.status&&(i.imgUrl_loading=!1,mui.alert(t.data,(function(){i.$router.go(0)})))}):mui.alert("取消成功")}))},close(){this.alerto=!1;var t=function(t){t.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",t,!1)},add(){var t=this;if(""==this.radio)return mui.toast("阶段不能为空"),!1,!1;this.imgUrl_loading=!0,this.axios.get("/Customer/Update_Customer?Customer_id="+this.customer_id+"&Customer_name_state="+this.radio).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,(function(){t.$router.go(0)})))}),this.alerto=!1}}},s=o,n=(i("dfb7"),i("6691")),r=Object(n["a"])(s,a,l,!1,null,"71938036",null);e["default"]=r.exports},dfb7:function(t,e,i){"use strict";var a=i("0b04"),l=i.n(a);l.a}}]);