(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14e94fbb"],{2253:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"After_sales_entry"},[o("header",{staticClass:"mui-bar mui-bar-nav header-top"},[o("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"money_sale"}}}),o("h1",{staticClass:"mui-title"},[t._v("售后录入")]),o("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),o("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),o("div",{staticClass:"mui-content app"},[o("form",{staticClass:"mui-input-group"},[o("div",{staticClass:"mui-input-row"},[o("label",[t._v("工地名称")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_name,expression:"Customer_name"}],class:{classGary:""===t.Customer_name,classBlack:""!==t.Customer_name},attrs:{type:"text",placeholder:"请选择工地名称"},domProps:{value:t.Customer_name},on:{click:t.site,input:function(e){e.target.composing||(t.Customer_name=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("对接人")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.AfterSale_person,expression:"AfterSale_person"}],class:{classGary:""===t.AfterSale_person,classBlack:""!==t.AfterSale_person},attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.AfterSale_person=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.prosenList,function(e){return o("option",{domProps:{value:e.fund_person_id}},[t._v(t._s(e.fund_person))])})],2)]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("联系电话")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_connect,expression:"Customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入联系电话"},domProps:{value:t.Customer_connect},on:{input:function(e){e.target.composing||(t.Customer_connect=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("分类")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.options,expression:"options"}],class:{classGary:""===t.options,classBlack:""!==t.options},attrs:{name:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.options=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:""}},[t._v("请选择")]),t._l(t.listOptions,function(e){return o("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])})],2)]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("甲方金额")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_DecorateJia,expression:"Customer_DecorateJia"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.Customer_DecorateJia},on:{click:t.nojia,blur:t.jiaBlur,input:function(e){e.target.composing||(t.Customer_DecorateJia=e.target.value)}}}),o("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_DecorateJia)))])]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("乙方金额")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_DecorateYi,expression:"Customer_DecorateYi"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.Customer_DecorateYi},on:{click:t.noyi,blur:t.yiBlur,input:function(e){e.target.composing||(t.Customer_DecorateYi=e.target.value)}}}),o("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_DecorateYi)))])]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("工人金额")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.worker,expression:"worker"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"￥"},domProps:{value:t.worker},on:{click:t.noworker,blur:t.workerBlur,input:function(e){e.target.composing||(t.worker=e.target.value)}}}),o("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.worker)))])]),o("div",{staticClass:"mui-input-row money-input"},[o("label",[t._v("总金额")]),o("div",{staticClass:"allmoeny"},[t._v("￥"+t._s(t._f("MoneyFormat")(t.all_money)))])]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("质保截止")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_Date,expression:"Customer_Date"}],attrs:{type:"date"},domProps:{value:t.Customer_Date},on:{input:function(e){e.target.composing||(t.Customer_Date=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("报修时间")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_baoxiushijian,expression:"Customer_baoxiushijian"}],attrs:{type:"date"},domProps:{value:t.Customer_baoxiushijian},on:{input:function(e){e.target.composing||(t.Customer_baoxiushijian=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("状态")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.statusd,expression:"statusd"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"状态",disabled:"disabled"},domProps:{value:t.statusd},on:{input:function(e){e.target.composing||(t.statusd=e.target.value)}}})]),o("div",{staticClass:"mui-input-row"},[o("label",[t._v("预计完成")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_yujiwanchengshijian,expression:"Customer_yujiwanchengshijian"}],staticClass:"mui-input-clear",attrs:{type:"date"},domProps:{value:t.Customer_yujiwanchengshijian},on:{input:function(e){e.target.composing||(t.Customer_yujiwanchengshijian=e.target.value)}}})]),o("div",{staticClass:"mui-input-row form-textarea row-textarea"},[o("label",[t._v("问题描述")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.Customer_demand,expression:"Customer_demand"}],attrs:{name:"Customer_demand",rows:"",cols:"",id:"Customer_demand",placeholder:"请填写问题及解决办法"},domProps:{value:t.Customer_demand},on:{input:function(e){e.target.composing||(t.Customer_demand=e.target.value)}}})]),o("div",{staticClass:"imgUrl"},[t._v("图片添加")]),o("el-upload",{ref:"upload",attrs:{action:"https://formattingclub.com/YiNuoLogin/AfterSale/uploadImg",multiple:"","list-type":"picture-card","file-list":t.fileLists,"on-preview":t.handlePictureCardPreview,"on-success":t.handleAvatarSuccess,"on-remove":t.handleRemove}},[o("i",{staticClass:"el-icon-plus"})]),t.imgIf?o("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]):t._e()],1),o("div",{staticClass:"mui-input-row form-btn"},[o("button",{staticClass:"mui-btn mui-btn-blue",attrs:{type:"button",id:"btn"},on:{click:t.go}},[t._v("保存")])])])],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"customer"},[o("h2",[t._v("售后录入")]),o("p",[t._v("/Customer input")])])}],s=(o("d183"),{name:"After_sales_entry",data(){return{imgUrl_loading:!1,imgIf:!0,fileLists:[],Customer_name:"",Customer_name_id:"",options:"",prosenList:"",ImgBase:"",data:{multiple:!0,formDate:""},projet:"",SelectStylist:"",worker:0,Customer_linkman:"",Customer_connect:"",Customer_stylist:"",Customer_type:"",AfterSale_person:"",Customer_DecorateJia:0,Customer_DecorateYi:0,Customer_Date:"",Customer_baoxiushijian:"",Customer_yujiwanchengshijian:"",Customer_form:"工装",Customer_formList:[{value:"家装"},{value:"工装"}],Customer_demand:"",dialogImageUrl:"",dialogVisible:!1,listOptions:[{text:"防水"},{text:"水电"},{text:"木工"},{text:"瓦工"},{text:"油漆"},{text:"墙漆"},{text:"杂工"},{text:"安装"},{text:"材料"},{text:"原始结构"},{text:"人为损坏"},{text:"磨损"}]}},created(){this.prosenFunction(),this.Customer_name=window.test,this.Customer_name_id=window.test_id},computed:{all_money(){var t=parseFloat(this.Customer_DecorateJia)+parseFloat(this.Customer_DecorateYi)+parseFloat(this.worker);return t},statusd(){if(""!=this.Customer_Date&&""!=this.Customer_baoxiushijian){var t=new Date(this.Customer_baoxiushijian),e=t.getFullYear(),o=t.getMonth()+1,i=t.getDate(),a=e+"-"+o+"-"+i,s=new Date(this.Customer_Date),r=s.getFullYear(),n=s.getMonth()+1,u=s.getDate(),l=r+"-"+n+"-"+u;return a>l?"已过保":"在保"}}},methods:{prosenFunction(){this.axios.get("/select_follow_person?fund_person_state=2").then(t=>{this.prosenList=t.data.data})},nojia(){this.Customer_DecorateJia<=0&&(this.Customer_DecorateJia="")},jiaBlur(){""==this.Customer_DecorateJia&&(this.Customer_DecorateJia=0)},noyi(){this.Customer_DecorateYi<=0&&(this.Customer_DecorateYi="")},yiBlur(){""==this.Customer_DecorateYi&&(this.Customer_DecorateYi=0)},noworker(){this.worker<=0&&(this.worker="")},workerBlur(){""==this.worker&&(this.worker=0)},site(){var t="expenditure_after";this.$router.push({path:"siteList"}),window.expenditure=t},handleRemove(t){console.log(t)},handlePictureCardPreview(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleAvatarSuccess(t,e){this.ImgBase=t},leng(){return mui.toast("最多3张图片"),!1,!1},go(){var t=this;this.imgUrl_loading=!0;var e="?Customer_id="+this.Customer_name_id+"&AfterSale_day="+this.options+"&AfterSale_jia="+this.Customer_DecorateJia+"&AfterSale_yi="+this.Customer_DecorateYi+"&AfterSale_worker="+this.worker+"&AfterSale_date="+this.Customer_baoxiushijian+"&AfterSale_date_close="+this.Customer_Date+"&AfterSale_pre_date="+this.Customer_yujiwanchengshijian+"&AfterSale_text="+this.Customer_demand+"&AfterSale_img="+this.ImgBase+"&AfterSale_state=0&AfterSale_person="+this.AfterSale_person;this.axios.post("/AfterSale/Add_AfterSale"+e).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,function(){t.$router.push("money_sale")}))})}}}),r=s,n=(o("3eb4"),o("2877")),u=Object(n["a"])(r,i,a,!1,null,"1f323cba",null);e["default"]=u.exports},"3eb4":function(t,e,o){"use strict";var i=o("b5ff"),a=o.n(i);a.a},b5ff:function(t,e,o){},d183:function(t,e){const o={Login:"https://formattingclub.com/YiNuoLogin/Login",clientAdd:"https://formattingclub.com/YiNuoLogin/Customer/AddCustomer",clientProjet:"https://formattingclub.com/YiNuoLogin/SelectAllCustomer",clientFollowPerson:"https://formattingclub.com/YiNuoLogin/select_follow_person",listName:"https://formattingclub.com/YiNuoLogin/SelectStylist",list:"https://formattingclub.com/YiNuoLogin/Customer/SelectStageCustomer",modify_projet:"https://formattingclub.com/YiNuoLogin/Customer/SelectCustomer",modify_stage:"https://formattingclub.com/YiNuoLogin/Customer/selectStage",projet_follow:"https://formattingclub.com/YiNuoLogin/Customer/SelectFollow",clientUndata:"https://formattingclub.com/YiNuoLogin/Customer/SelectUpdate",clientDelect:"https://formattingclub.com/YiNuoLogin/Customer/DeleteCustomer",clinetModify:"https://formattingclub.com/YiNuoLogin/Customer/UpdateCustomer",clientAddFollow:"https://formattingclub.com/YiNuoLogin/Customer/AddFollow",DesignerAdd:"https://formattingclub.com/YiNuoLogin/Customer/addCustomer_stylist",moneyProfit:"https://formattingclub.com/YiNuoLogin/fund/Select_profits",moneyModify:"https://formattingclub.com/YiNuoLogin/fund/Select_sum_details",moneyReceivable:"https://formattingclub.com/YiNuoLogin/fund/select_fund_sum",ClassSelect:"https://formattingclub.com/YiNuoLogin/fund/Select_three_fund_name",moneyAddFund:"https://formattingclub.com/YiNuoLogin/fund/Add_Fund",BankAdd:"https://formattingclub.com/YiNuoLogin/fund/AddBank",AdminAnnouncement:"https://formattingclub.com/YiNuoLogin/notice/select_notice",AnnouncementAdd:"https://formattingclub.com/YiNuoLogin/notice/addNotice",moneyRunning:"https://formattingclub.com/YiNuoLogin/fund/select_detail",bankCard:"https://formattingclub.com/YiNuoLogin/fund/select_bank",moneyTransfer:"https://formattingclub.com/YiNuoLogin/fund/add_bank_deal",moneyOutEnter:"https://formattingclub.com/YiNuoLogin/fund/Add_out_enter",selectSerch:"https://formattingclub.com/YiNuoLogin/User/Select_accounting",listProjet:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectAllCustomer",AfterSaleAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddCustomer",AfterStatistics:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageCustomer",AfterListName:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStylist",AfterStage:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectStageName",AfterSiteDetails:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectCustomer",AfterSiteSlectStage:"https://formattingclub.com/YiNuoLogin/AfterSale/selectStage",AfterSiteFollow:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectFollow",AfterSiteUpdate:"https://formattingclub.com/YiNuoLogin/AfterSale/SelectUpdate",AfterSiteDelete:"https://formattingclub.com/YiNuoLogin/AfterSale/DeleteCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterUpdata:"https://formattingclub.com/YiNuoLogin/AfterSale/UpdateCustomer",AfterPerson:"https://formattingclub.com/YiNuoLogin/AfterSale/select_follow_person",AfterAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/AddFollow",projetAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_name",AfterlistAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/addCustomer_stylist",AfterPersonAdd:"https://formattingclub.com/YiNuoLogin/AfterSale/Add_Follow_person",ringNingDelect:"https://formattingclub.com/YiNuoLogin/fund/Deleter_flowing",Select_fund_person:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_person",Update_Customer:"https://formattingclub.com/YiNuoLogin/Customer/Update_Customer",Update_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Update_fund_detail",Update_fund_details:"https://formattingclub.com/YiNuoLogin/fund/update_fund_details",Delete_fund_detail:"https://formattingclub.com/YiNuoLogin/fund/Delete_fund_details",money_search:"https://formattingclub.com/YiNuoLogin/fund/Select_fund_name_money",money_refund:"https://formattingclub.com/YiNuoLogin/fund/money_refund",newUserName:"https://formattingclub.com/YiNuoLogin/User/Add_User",add_customer_person_fund:"https://formattingclub.com/YiNuoLogin/fund/add_customer_person_fund"};t.exports=o}}]);