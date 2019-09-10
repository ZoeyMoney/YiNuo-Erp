<template>
  <div class="customer_entry">
    <!--头部-->
    <header class="mui-bar mui-bar-nav header-top">
      <router-link :to="{name:'informaction'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
      <h1 class="mui-title">工人录入</h1>
      <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
    </header>
    <login-loading v-show="imgUrl_loading"></login-loading>
    <!--客户录入-->
    <div class="customer">
      <h2>工人录入</h2>
      <p>/Customer input</p>
    </div>
    <div class="mui-content app">
      <form class="mui-input-group">
        <div class="mui-input-row">
          <label>工人名称</label>
          <input type="text" class="mui-input-clear" placeholder="请输入工人名称" v-model="Customer_name" />
        </div>
        <div class="mui-input-row">
          <label>联系方式</label>
          <input type="text" class="mui-input-clear" placeholder="请输入手机号" v-model="Customer_connect" />
        </div>

        <div class="mui-input-row">
          <div class="row-left-on">
            <label>推荐人</label>
            <select name v-model="Customer_type" :class="{classGray:Customer_type =='',classBlack: Customer_type!=''}">
              <option value>请选择</option>
              <option v-for="(item,index) in list_type" :value="item.fund_person_id" :key="index" >{{item.fund_person}}</option>
            </select>
          </div>
        </div>
        <div class="row-left">
          <div class="row-left-on">
            <label>工种</label>
            <el-select v-model="value1" placeholder="请选择" @change="optionsChange(value1)">
              <el-option v-for="(item,i) in options" :key="i" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="value2" multiple placeholder="请选择" @change="valtwoChange(value2)">
              <el-option v-for="(item,i) in list_list" :key="i" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
      </form>
      <button-save @click.native="go"></button-save>
   <!-- <div class="customer_entry">
      &lt;!&ndash;头部&ndash;&gt;
      <header class="mui-bar mui-bar-nav header-top">
        <router-link :to="{name:'informaction'}" class="mui-icon mui-icon-left-nav mui-pull-left"></router-link>
        <h1 class="mui-title">工人录入</h1>
        <router-link :to="{name:'index'}" class="mui-icon mui-icon mui-icon-home mui-pull-right"></router-link>
      </header>
      <login-loading v-show="imgUrl_loading"></login-loading>
      &lt;!&ndash;客户录入&ndash;&gt;
      <div class="customer">
        <h2>工人录入</h2>
        <p>/Customer input</p>
      </div>
      <div class="mui-content app">
          <form class="mui-input-group">
              <div class="mui-input-row">
                  <label>工人名称</label>
                  <input type="text" class="mui-input-clear" placeholder="请输入工人名称" v-model="Customer_name">
              </div>
            <div class="mui-input-row">
              <label>联系方式</label>
              <input type="text" class="mui-input-clear" placeholder="请输入手机号" v-model="Customer_connect">
            </div>

            <div class="mui-input-row">
              <div class="row-left-on">
                <label>推荐人</label>
                <select name="" v-model="Customer_type" :class="{classGray:Customer_type =='',classBlack: Customer_type!=''}">
                  <option value="">请选择</option>
                  <option v-for="(item,index) in list_type" :value="item.fund_person_id" :key="index">{{item.fund_person}}</option>
                </select>
              </div>
            </div>
            <div class="row-left">
              <div class="row-left-on">
                <label>工种</label>
             <el-select v-model="value1" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
 <el-select v-model="value1" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
              </div>
            </div>
          </form>
        <button-save @click.native="go"></button-save>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "customer_entry",
  data() {
    return {
      imgUrl_loading: false,
      Customer_name: "", // 工人名称
      Customer_connect: "", // 联系方式
      Customer_type: "", // 工种类型
      value: [], //工种
      options: "",
      list_type: "", //推荐人
      list_value: "", //工种拼接
      list_list: "", //工人二次
      str:'',//工种id
      value1: [],
      value2: []
    };
  },
  methods: {
    // 获取第一个options
    optionsChange(va) {
      var list = {};
      for (var index in this.options) {
        if (this.options[index].id == va) {
          list = this.options[index].list_Sort;
        }
      }
      this.list_list = list;
    },
    // 获取第二个options
    valtwoChange(va){
      var items = ''
      items = va
      var str = items.join('-')
      this.str = str
    },
    // 保存
    go() {
      var _this = this;
      var check = true;
      var pattern = /^1[0-9]{10}$/; // 验证手机号
      var nameReg = /^[\u4E00-\u9FA5]{2,10}$/; // 验证人的名字
      var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
      var regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
      var nuber = /^[0-9]*$/; // 验证数字
      //  工人名称
      if (this.Customer_name == "") {
        mui.toast("工人名称不能为空");
        check = false;
        return false;
      }
      if (regEn.test(this.Customer_name) || regCn.test(this.Customer_name)) {
        mui.toast("工人名称不能加入特殊字符");
        check = false;
        return false;
      }
      //  联系人
      //  联系方式
      if (this.Customer_connect == "") {
        mui.toast("联系方式不能为空");
        check = false;
        return false;
      }
      if (!pattern.test(this.Customer_connect)) {
        mui.toast("联系方式格式错误");
        check = false;
        return false;
      }
      //工种
      if (this.value2 == "") {
        mui.toast("工种不能为空");
        check = false;
        return false;
      }
      this.imgUrl_loading = true;
      /* 录入数据 */
      var add ="?name=" +this.Customer_name +"&phone=" +this.Customer_connect +"&person=" + this.Customer_type +"&zhaunye=" +this.str+'&nick='+this.Customer_name
      this.axios.post("/DaiShu/Worker/add_worker" + add).then(res => {
        if (res.status === 200) {
          this.imgUrl_loading = false;
          mui.alert(res.data, function() {
            _this.$router.go(0);
          });
        }
      });
    }
  },
  created() {
    //设计师
    this.axios
      .get("/fund/Select_fund_person" + "?fund_person_state_A=2")
      .then(customName => {
        this.list_type = customName.data.data;
      });
    //  工种
    this.axios.get("/DaiShu/Sort/Select_sort?type=1").then(res => {
      this.options = res.data.data;
      // var value1 = res.data.data
      // var datas = value1 => value1.map(({id,name,list_Sort})=>(list_Sort ? {
      //   // value : id,
      //   label : name,
      //   children:datas(list_Sort)
      // }:{
      //   value:id,
      //   label:name,
      // }))
      // this.options = datas(value1)
    });
  }
};
</script>

<style scoped>
@import "../css/public.css";
/*表单*/
input::-webkit-input-placeholder {
  color: #6e6e6e;
}
.classBlack {
  color: black;
}
.classGray {
  color: #6e6e6e;
}
/*    x */
.mui-icon-clear {
  display: none !important;
}
form div select {
  font-size: 15px !important;
}
.mui-input-row label {
  width: 30%;
}
.mui-input-row label ~ input,
.mui-input-row label ~ select,
.mui-input-row label ~ textarea {
  width: 70%;
}
textarea {
  padding-left: 0 !important;
}
/*平方米*/
.square {
  display: flex;
}
.square input {
  width: 55% !important;
}
.square div {
  line-height: 38px;
  border-left: 1px solid #dadada;
  width: 15%;
  padding-left: 19px;
  font-weight: 600;
}
.mui-checkbox.mui-left label,
.mui-radio.mui-left label {
  padding-left: 23px;
  white-space: nowrap;
}
.mui-input-row select {
  background-color: #efeff4;
}
/*所属类型*/
.row-textarea label {
  width: 26% !important;
  line-height: 20px !important;
}
.row-left {
  font-size: 15px;
  display: flex;
}
.row-left-on {
  flex: 1;
  display: flex;
}
.row-left-on:nth-child(1) label {
  padding: 10px 15px;
  line-height: 25px;
  white-space: nowrap;
}
.row-left-on:nth-child(1) select {
  margin-bottom: 0;
}
.radio-left {
  display: flex;
  position: relative;
  right: 18px;
  top: 6px;
}
.row-textarea {
  border-top: 1px solid #dadada;
}
.money-input {
  display: flex;
}
.money-input input {
  flex: 1;
}
.money-input span {
  flex: 1;
}
.mui-checkbox.mui-left input[type="checkbox"],
.mui-radio.mui-left input[type="radio"] {
  left: -2px !important;
}
.mui-input-row {
  overflow: unset;
}
.span-money {
  display: block;
  line-height: 43px;
  font-size: 13px;
  width: 30%;
}
.mui-select:before {
  display: none;
}
.mui-input-group:after,
.mui-input-row:nth-last-child(1):after {
  background-color: transparent;
}
.mui-checkbox input[type="checkbox"],
.mui-radio input[type="radio"] {
  top: 8px !important;
}
</style>
