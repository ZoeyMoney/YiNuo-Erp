(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-100d1623"],{8801:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site_details"},[a("header",{staticClass:"mui-bar mui-bar-nav"},[a("router-link",{staticClass:"mui-icon mui-icon-left-nav mui-pull-left",attrs:{to:{name:"After_sales_statistics"}}}),a("h1",{staticClass:"mui-title"},[t._v("售后详细")]),a("router-link",{staticClass:"mui-icon mui-icon mui-icon-home mui-pull-right",attrs:{to:{name:"index"}}})],1),a("login-loading",{directives:[{name:"show",rawName:"v-show",value:t.imgUrl_loading,expression:"imgUrl_loading"}]}),t._m(0),a("div",{staticClass:"mui-content app"},[a("form",{staticClass:"mui-input-group"},[a("ul",{staticClass:"mui-table-view"},[a("li",{staticClass:"mui-table-view-cell mui-collapse"},[a("a",{staticClass:"mui-navigate-right left-mar",attrs:{href:"#"}},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("工地名称")]),a("div",[t._v(t._s(t.customer_name))])])]),a("div",{staticClass:"mui-collapse-content"},[a("div",{staticClass:"mui-input-row"},[a("label",[t._v("对接人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_linkman,expression:"customer_linkman"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input"},domProps:{value:t.customer_linkman},on:{input:function(e){e.target.composing||(t.customer_linkman=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("分类")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_connect,expression:"customer_connect"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"input"},domProps:{value:t.customer_connect},on:{input:function(e){e.target.composing||(t.customer_connect=e.target.value)}}})]),a("div",{staticClass:"mui-input-row money-input"},[a("label",[t._v("甲方")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_DecorateJia,expression:"Customer_DecorateJia"}],staticClass:"mui-input-clear",attrs:{type:"text"},domProps:{value:t.Customer_DecorateJia},on:{input:function(e){e.target.composing||(t.Customer_DecorateJia=e.target.value)}}}),a("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_DecorateJia)))])]),a("div",{staticClass:"mui-input-row money-input"},[a("label",[t._v("乙方")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Customer_DecorateYi,expression:"Customer_DecorateYi"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入预算金额"},domProps:{value:t.Customer_DecorateYi},on:{input:function(e){e.target.composing||(t.Customer_DecorateYi=e.target.value)}}}),a("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.Customer_DecorateYi)))])]),a("div",{staticClass:"mui-input-row money-input"},[a("label",[t._v("工人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.worker,expression:"worker"}],staticClass:"mui-input-clear",attrs:{type:"text",placeholder:"请输入预算金额"},domProps:{value:t.worker},on:{input:function(e){e.target.composing||(t.worker=e.target.value)}}}),a("span",{staticClass:"span-money"},[t._v(t._s(t._f("MoneyFormat")(t.worker)))])]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("总金额")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_all,expression:"customer_all"}],staticClass:"mui-input-clear",attrs:{type:"text",disabled:"disabled"},domProps:{value:t.customer_all},on:{input:function(e){e.target.composing||(t.customer_all=e.target.value)}}})]),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("报修时间")]),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期时间"},model:{value:t.customer_baoxiushijian,callback:function(e){t.customer_baoxiushijian=e},expression:"customer_baoxiushijian"}})],1),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("预计完成")]),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期时间"},model:{value:t.customer_yujiwanchengshijian,callback:function(e){t.customer_yujiwanchengshijian=e},expression:"customer_yujiwanchengshijian"}})],1),a("div",{staticClass:"mui-input-row"},[a("label",[t._v("质保截止")]),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期时间"},model:{value:t.customer_baozhiqi,callback:function(e){t.customer_baozhiqi=e},expression:"customer_baozhiqi"}})],1),a("div",{staticClass:"mui-input-row all-row textreap"},[a("label",[t._v("问题描述")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.customer_demand,expression:"customer_demand"}],attrs:{type:"text"},domProps:{value:t.customer_demand},on:{input:function(e){e.target.composing||(t.customer_demand=e.target.value)}}})]),a("div",{staticClass:"mui-input-row ImgUrl"},[a("label",[t._v("售后图片")]),a("div",{staticClass:"imgWid"},[a("img",{attrs:{src:t.getImgUrl(t.ItemImgUrl),alt:"loading"},on:{click:t.imgClick}})])])])])])]),a("div",{staticClass:"mui-input-row update-btn"},[a("div",[a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.UpdateCustomer}},[t._v("信息修改")])])]),a("form",{staticClass:"mui-input-group form-pad box-h4"},[a("div",{staticClass:"box3"},[t._m(1),a("div",{staticClass:"mui-input-row go-nai"},[a("label",[t._v("跟进人员")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.follow_person,expression:"follow_person"}],class:{classGray:""==t.follow_person,classBlack:""!=t.follow_person},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.follow_person=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.profetName,(function(e){return a("option",{domProps:{value:e.fund_person_id}},[t._v(t._s(e.fund_person))])}))],2)]),a("div",{staticClass:"mui-input-row go-nai"},[a("label",[t._v("跟进状态")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.follow_loading,expression:"follow_loading"}],class:{classGray:""==t.follow_loading,classBlack:""!=t.follow_loading},attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.follow_loading=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"selected"}},[t._v("请选择")]),t._l(t.list_follow_loading,(function(e){return a("option",{domProps:{value:e.text}},[t._v(t._s(e.text))])}))],2)])]),a("div",{staticClass:"box"},[a("div",{staticClass:"row-go"},[a("div",{staticClass:"mui-input-row row-textarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.list_text,expression:"list_text"}],attrs:{name:"",rows:"",cols:"",placeholder:"请输入问题反馈及进度"},domProps:{value:t.list_text},on:{input:function(e){e.target.composing||(t.list_text=e.target.value)}}})]),a("div",{staticClass:"go-add"},[a("button",{attrs:{type:"button"},on:{click:t.add}},[t._v("反馈记录")])])])])]),a("form",{staticClass:"mui-input-group form-pad box-h4"},[a("h4",[t._v("问题记录")]),t._l(t.undata,(function(e){return a("div",{staticClass:"box"},[a("div",{staticClass:"mui-input-row jin"},[a("div",{staticClass:"jin-date"},[a("p",[t._v(t._s(t._f("data")(e.follow_date)))])]),a("div",{staticClass:"gen"},[t._v("\n              "+t._s(e.fund_person)+"\n            ")]),a("div",{staticClass:"gen"},[t._v("\n              "+t._s(e.follow_stage)+"\n            ")])]),a("div",{staticClass:"row-go"},[a("div",{staticClass:"mui-input-row row-textarea-two"},[a("div",[t._v(t._s(e.follow_text))])])])])}))],2),a("div",{staticClass:"form-botton"},[a("button",{staticClass:"mui-btn mui-btn-black",attrs:{type:"button"},on:{click:t.dele}},[t._v("删除")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.Imgtest,expression:"Imgtest"}],staticClass:"tests",on:{click:t.cancel}},[a("div",{ref:"imgCC",staticClass:"imgWid",class:{active:t.isActive,test:t.hasError}},[a("img",{attrs:{src:t.getImgUrl(t.ItemImgUrl),alt:"loading"}})])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mui-content"},[a("div",{staticClass:"customer"},[a("h2",[t._v("售后详细")]),a("p",[t._v("/Client follow-up")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("问题反馈及进度")])])}],o={name:"site_details",data(){return{imgUrl_loading:!1,Imgtest:!1,customer_name:"",customer_linkman:"",customer_connect:"",Customer_DecorateJia:"",Customer_DecorateYi:"",worker:"",customer_all:"",customer_baoxiushijian:"",customer_yujiwanchengshijian:"",customer_baozhiqi:"",customer_demand:"",ItemImgUrl:"",follow_person:"",profetName:"",follow_loading:"",list_follow_loading:[{text:"待查看"},{text:"协商安排"},{text:"维修中"},{text:"观察期"},{text:"维修完工"}],isActive:!0,hasError:!1,list_text:"",stageName:"",listtime:"",stage:"",undata:"",list:"",imgW:0}},created(){this.customer_name=JSON.parse(localStorage.AfterSale_statistics).customer_name,this.customer_linkman=JSON.parse(localStorage.AfterSale_statistics).afterSale_person,this.customer_connect=JSON.parse(localStorage.AfterSale_statistics).afterSale_type,this.Customer_DecorateJia=JSON.parse(localStorage.AfterSale_statistics).afterSale_jia,this.Customer_DecorateYi=JSON.parse(localStorage.AfterSale_statistics).afterSale_yi,this.worker=JSON.parse(localStorage.AfterSale_statistics).afterSale_worker,this.customer_all=JSON.parse(localStorage.AfterSale_statistics).afterSale_yi+JSON.parse(localStorage.AfterSale_statistics).afterSale_jia+JSON.parse(localStorage.AfterSale_statistics).afterSale_worker,this.customer_baoxiushijian=JSON.parse(localStorage.AfterSale_statistics).afterSale_date,this.ItemImgUrl=JSON.parse(localStorage.AfterSale_statistics).afterSale_img,this.customer_yujiwanchengshijian=JSON.parse(localStorage.AfterSale_statistics).afterSale_pre_date,this.customer_baozhiqi=JSON.parse(localStorage.AfterSale_statistics).afterSale_date_close,this.customer_demand=JSON.parse(localStorage.AfterSale_statistics).afterSale_text,this.axios.get("/select_follow_person?fund_person_state=4").then(t=>{this.profetName=t.data.data}),this.axios.get("/AfterSale/SelectFollow?Customer_id="+JSON.parse(localStorage.AfterSale_statistics).afterSale_id).then(t=>{this.undata=t.data})},methods:{getImgUrl(t){var e="https://formattingclub.com/static/YiNuo/"+t;return e},imgClick(){this.Imgtest=!0,this.isActive=!1,this.hasError=!0;var t=function(t){t.preventDefault()};document.body.style.overflow="hidden",document.addEventListener("touchmove",t,!1)},cancel(){this.Imgtest=!1;var t=function(t){t.preventDefault()};document.body.style.overflow="",document.removeEventListener("touchmove",t,!1)},UpdateCustomer(){var t=this,e="?AfterSale_id="+JSON.parse(localStorage.AfterSale_statistics).afterSale_id;if(this.customer_linkman!=JSON.parse(localStorage.AfterSale_statistics).afterSale_person&&(e+="&AfterSale_person="+this.customer_linkman),this.customer_connect!=JSON.parse(localStorage.AfterSale_statistics).afterSale_type&&(e+="&AfterSale_type="+this.customer_connect),this.worker!=JSON.parse(localStorage.AfterSale_statistics).afterSale_worker&&(e+="&AfterSale_worker="+this.worker),this.Customer_DecorateJia!=JSON.parse(localStorage.AfterSale_statistics).afterSale_jia&&(e+="&AfterSale_jia="+this.Customer_DecorateJia),this.Customer_DecorateYi!=JSON.parse(localStorage.AfterSale_statistics).afterSale_yi&&(e+="&AfterSale_yi="+this.Customer_DecorateYi),this.customer_yujiwanchengshijian!=JSON.parse(localStorage.AfterSale_statistics).afterSale_pre_date){var a=new Date(this.customer_yujiwanchengshijian),s=a.getFullYear(),i=a.getMonth()+1,o=a.getDate(),r=s+"-"+i+"-"+o;e+="&AfterSale_pre_date="+r}if(this.customer_baozhiqi!=JSON.parse(localStorage.AfterSale_statistics).afterSale_date_close){a=new Date(this.customer_baozhiqi);var l=a.getFullYear(),n=a.getMonth()+1,c=a.getDate(),u=l+"-"+n+"-"+c;e+="&AfterSale_date_close="+u}if(this.customer_demand!=JSON.parse(localStorage.AfterSale_statistics).afterSale_text&&(e+="&AfterSale_text="+this.customer_demand),this.customer_baoxiushijian!=JSON.parse(localStorage.AfterSale_statistics).afterSale_date){a=new Date(this.customer_baoxiushijian);var m=a.getFullYear(),_=a.getMonth()+1,d=a.getDate(),p=m+"-"+_+"-"+d;e+="&afterSale_date="+p}this.imgUrl_loading=!0,this.axios.post("/AfterSale/Update_AfterSale"+e).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,(function(){t.$router.push({name:"After_sales_statistics"})})))})},add(){var t=this,e="?";if(""==this.follow_person||""==this.follow_loading||""==this.list_text)return mui.toast("问题反馈不能有空"),!1,!1;e+="follow_person="+this.follow_person+"&follow_text="+this.list_text+"&Customer_name="+JSON.parse(localStorage.AfterSale_statistics).afterSale_id+"&follow_stage="+this.follow_loading,this.imgUrl_loading=!0,this.axios.get("/AfterSale/AddFollow"+e).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data,(function(){t.$router.push({name:"After_sales_statistics"})})))})},dele(){var t=this;this.customer_id;this.imgUrl_loading=!0,this.axios.post("/AfterSale/Delete_AfterSale?AfterSale_id="+JSON.parse(localStorage.AfterSale_statistics).afterSale_id).then(e=>{200===e.status&&(this.imgUrl_loading=!1,mui.alert(e.data.data,(function(){t.$router.push({name:"After_sales_statistics"})})))})},time:function(t,e){if(null==t)return"未开始";var a=new Date(t);a.setDate(a.getDate()+e);var s=a.getMonth()+1,i=a.getFullYear()+"-"+s+"-"+a.getDate()+"-"+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds(),o=new Date(i),r=new Date,l=o-r;if(l>0)var n=Math.floor(l/1e3/60/60/24),c=Math.floor(l/1e3/60/60%24),u=Math.floor(l/1e3/60%60),m=Math.floor(l/1e3%60),_=n+":"+c+":"+u+":"+m;else _="已逾期";return _}}},r=o,l=(a("aeba"),a("6691")),n=Object(l["a"])(r,s,i,!1,null,"74b3eab4",null);e["default"]=n.exports},aeba:function(t,e,a){"use strict";var s=a("c1d4"),i=a.n(s);i.a},c1d4:function(t,e,a){}}]);